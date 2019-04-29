For this assignment, develop a small React application for contact management. You will parse a list of contacts from a json endpoint, load them into the shared state store of your choice, and develop a simple React interface to interact with them.

There is a simple Express server included in the directory. You can run it with node server.js. At localhost:4000/contacts you should see a JSON object with contacts.

## Setup
1. `npm install` to install express
2. `node server.js` to run the server

## Requirements
- Using the contacts endpoint (localhost:4000/contacts), fetch and parse the contacts - names should be parsed as human readable "First Last" with extra characters removed, phone numbers should be consistently formatted.

- Choose a state management solution (we ask that you choose something that allows you to share state across components, we use Redux and the React Context API internally, but if you’re familiar with another option that’s also fine) Your state management solution (whether that be a redux store or a context provider) should serve as the source of truth for the current contacts.

- Allow the end user to create, update, and delete contacts within the application. (Don't worry about persisting these actions to a server or anything like that, purely focus on the client side. e.g. the store and interface would be updated to reflect the changes, but refreshing the page would discard the changes)

## Notes
We know your time is valuable, and we definitely don't expect a large, production-worthy project. The intent is to evaluate your technical implementation and thought process in a scenario closely matching day to day work.

This assignment is our primary technical evaluation during the interview process. At the in-office interview stage we will discuss the sample and how you would go about expanding it. You can store this on Github, Codepen, or send it over as a zip file - whatever you're most comfortable with. Feel free to use zero-configuration tools such as create-react-app or whatever you prefer.
