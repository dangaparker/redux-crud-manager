import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createContact, retrieveContacts, updateContact, deleteContact } from '../../actions/index';
import Modal from '../../components/modal/modal';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import ContactForm from '../../components/contactForm/contactForm';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './homepage.css';


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createContactModal: false,
            updateContactModal: false,
            deleteContactModal: false,
            contactInfo: {
                id: '',
                name: '',
                email: '',
                phone: ''
            }
        }
    }

    componentDidMount() {
        this.props.retrieveContacts()
    }

    openModal = (e, info) => {
        const { contactInfo } = this.state
        if (info) {
            const adjustedName = info.name.replace(/[^\w\s]/gi, ' ');
            const adjustedNumber = info.phone.replace(/\D/g, "");
            contactInfo.name = adjustedName;
            contactInfo.phone = adjustedNumber;
            contactInfo.email = info.email
            contactInfo.id = info.id
        }
        const modalChoice = e.currentTarget.id
        this.setState({
            [modalChoice]: true,
            contactInfo
        })
    }

    closeModal = (e) => {
        this.setState({
            createContactModal: false,
            updateContactModal: false,
            deleteContactModal: false,
        })
    }

    render() {
        let createContactForm;
        let updateContactForm;
        let deleteContactForm;
        const { createContactModal, updateContactModal, deleteContactModal, contactInfo } = this.state;
        const { createContact, updateContact, deleteContact } = this.props;
        const columns = [
            {
                accessor: 'name',
                Header: 'Name',
                Cell: row => {
                    const adjustedName = row.value.replace(/[^\w\s]/gi, ' ')
                    return (
                        <div>
                            {adjustedName}
                        </div>
                    );
                },
            },
            {
                accessor: 'email',
                Header: 'Email',
            },
            {
                accessor: 'phone',
                Header: 'Phone Number',
                Cell: row => {
                    const adjustedNumber = row.value.replace(/\D/g, "")
                    return (
                        <div>
                            {adjustedNumber}
                        </div>
                    );
                },
            },
            {
                Cell: row => (
                    <div className="actions-btn-group">
                        <FaEdit id='updateContactModal' size={20}
                            onClick={(e) => { this.openModal(e, row.original); }}
                        />
                        <FaTrashAlt id='deleteContactModal' size={20}
                            onClick={(e) => { this.openModal(e, row.original); }}
                        />
                    </div>
                ),
                filterable: false,
                Header: 'Actions',
                sortable: false,
                width: 120,
            },
        ]

        //in all of our contact forms, we pass the necessary action creators, as well as contact info to display on the modal.
        createContactForm = (
            <div>
                <ContactForm onSubmit={(values) => {createContact(values); this.closeModal();}}  deleteInfo={false} />
            </div>
        );
        updateContactForm = (
            <div>
                <ContactForm onSubmit={(values)=> {updateContact(contactInfo, values); this.closeModal();}}  info={contactInfo} deleteInfo={false}/>
            </div>
        );
        deleteContactForm = (
            <div>
                <ContactForm onSubmit={()=> {deleteContact(contactInfo); this.closeModal();}} deleteInfo={true} info={contactInfo} />
            </div>
        );

        return (
            <div className='page-content'>
                <h1>Arcadia Contacts</h1>
                <button onClick={this.openModal} className="create-btn" id='createContactModal'>Create Contact</button>
                <div className="contact-table">
                    <ReactTable
                        columns={columns}
                        data={this.props.contacts}
                        filterable
                        defaultPageSize={15}
                        noDataText={'No Contacts'}
                        sortable
                    />
                </div>
                {/* we conditionally render the modals below depending on which item was clicked, and pass it the children which are created above. */}
                {createContactModal
                    ?
                    <Modal close={this.closeModal}
                        title={'Create Contact'}
                    >
                        {createContactForm}
                    </Modal>
                    : ''}
                {updateContactModal ?
                    <Modal close={this.closeModal}
                        title={`Edit ${contactInfo.name}`}
                    >
                        {updateContactForm}
                    </Modal> : ''}
                {deleteContactModal ?
                    <Modal close={this.closeModal}
                        title={`Delete ${contactInfo.name} ?`}
                    >
                        {deleteContactForm}
                    </Modal> : ''}

            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        retrieveContacts,
        createContact,
        updateContact,
        deleteContact
    },
    dispatch
    ),
})

function mapStateToProps(state) {
    return {
        ...state.contacts,
        currentContact: state.currentContact
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

