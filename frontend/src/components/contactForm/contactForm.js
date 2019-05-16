import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import './contactForm.css';

class ContactForm extends Component{
  renderInput({ label, input, meta: { touched, error } }) {

    return (
        <div>
            <label>{label}</label>
            <input {...input} type="text" autoComplete='off' />
            <p className="red-text">{touched && error}</p>
        </div>
    )
}

  render(){
  const { handleSubmit, info, deleteInfo } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:&nbsp;{info ? info.name : ''}</label>
          {!deleteInfo ? <Field name="name" component={this.renderInput} type="text" /> : ''}
        </div>
        <div>
          <label htmlFor="email">Email&nbsp;{info ? info.email : ''}</label>
          {!deleteInfo ? <Field name="email" component={this.renderInput} type="email" /> : ''}
        </div>
        <div>
          <label htmlFor="phone">Phone Number&nbsp;{info ? info.phone : ''}</label>
          {!deleteInfo ? <Field name="phone" component={this.renderInput} type="number" /> : ''}
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    )
  }

}

//Form validation with Redux-Form
function validate(values) {
  const { name, email, phone } = values;
  const errors = {};

  if (!name) {
    errors.name = 'Please add a name.'
  }
  if (!email) {
    errors.email = 'Please add an email address.'
  }
  if (!phone) {
    errors.phone = 'Please add a phone number.'
  }
  return errors;
}


ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm