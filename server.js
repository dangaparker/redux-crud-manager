const express = require('express')
const app = express()

app.get('/contacts', (req, res) => res.send({
  "contacts": [
    {
      "id": "1",
      "name": "Vergie -    Vankirk",
      "email": "Vergie.Vankirk@gmailio.com",
      "phone": "374 684-6831"
    },
    {
      "id": "2",
      "name": "Milford^Mizzell",
      "email": "milfordmizzell@gmailio.com",
      "phone": "5052812342"
    },
    {
      "id": "3",
      "name": "Magen Mart",
      "email": "magen.mart@eggmail.com",
      "phone": "(757) 702-8058"
    },
    {
      "id": "4",
      "name": "Kieth Kalper",
      "email": "keith.kalpz@gmailio.com",
      "phone": "(168) 374-6980"
    },
    {
      "id": "5",
      "name": "Felton Feit",
      "email": "feltonfeit@eggmail.com",
      "phone": "483-695-7967"
    },
    {
      "id": "6",
      "name": "Shakita Sitez",
      "email": "shakitasites@yahoo.com",
      "phone": "2209886474"
    },
    {
      "id": "7",
      "name": "Louis - Langlois",
      "email": "louislanglois@californiamail.net",
      "phone": "(930) 411-1304"
    },
    {
      "id": "8",
      "name": "James ^ Jenkins",
      "email": "jamesjanks@gmail.com",
      "phone": "(629) 647-8506"
    },
    {
      "id": "9",
      "name": "Elsa Espinoza",
      "email": "espinoche@gmailio.com",
      "phone": "(718) 222-1876"
    },
    {
      "id": "10",
      "name": "Cleo Crail",
      "email": "craileo@gmailio.com",
      "phone": "(162) 808-6714"
    },
    {
      "id": "11",
      "name": "Raymond Reddix",
      "email": "redix@eggmail.com",
      "phone": "(760) 414-5771"
    },
    {
      "id": "12",
      "name": "Philo Pechachek",
      "email": "SA-lucarell@torpedo.net",
      "phone": "(375) 788-7996"
    },
    {
      "id": "13",
      "name": "Irish In",
      "email": "irish@gmailer.com",
      "phone": "(869) 358-9405"
    },
    {
      "id": "14",
      "name": "Norah Nordstrom",
      "email": "anusre.lun@eggmail.com",
      "phone": "(447) 860-9348"
    },
    {
      "id": "15",
      "name": "Scarlett Samuels",
      "email": "Scarlett Samuels+@gmail.org",
      "phone": "(378) 713-3831"
    },
    {
      "id": "16",
      "name": "Twylia Timothy",
      "email": "ttimothy@californiamail.net",
      "phone": "(183) 876-7425"
    },
    {
      "id": "17",
      "name": "Pierre Platero",
      "email": "Pierre@telephone.com",
      "phone": "(309) 110-3700"
    },
    {
      "id": "18",
      "name": "Lon Loiselle",
      "email": "Lon@gmailio.com",
      "phone": "(433) 230-8767"
    },
    {
      "id": "19",
      "name": "Titus Tellez",
      "email": "ttellez@gmail.org",
      "phone": "(719) 814-1944"
    },
    {
      "id": "20",
      "name": "Donova Dolezal",
      "email": "Don_ova@gmail.org",
      "phone": "(505) 484-5020"
    }
  ]
}));

app.listen(4000, () => console.log('Listening on port 4000. Check localhost:4000/contacts to ensure this is working properly.'));
