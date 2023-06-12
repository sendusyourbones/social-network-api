# Social Network API

## Description

Social networks enable users to make and stay connected with friends while interacting with each others' content. This application provides the API routes needed to maintain a social network where users can post "thoughts", add "reactions" to other users' thoughts, and add each other as friends. This includes the abilities to create, read, update, and delete users and thoughts, as well as to create and delete friends and reactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application uses the `express` package to handle the API routing, the `mongoose` package to interact with the MongoDB database, the `luxon` package for formatting dates and times, and the `dotenv` package to manage environmental variables. To install these packages, clone the repo, `cd` into it, then run the command `npm i`.

Create a file called `.env` in the root directory and fill in the following variable:
- `PORT=[the port you want to use for the server]`

## Usage

Watch these demo videos to see the application in action:
- [Starting the server and using the user APIs](https://drive.google.com/file/d/1rADz6SSNOnbNRxa5O2uiIi_dQNlYDT_U/view?usp=drive_link)
- [Using the thought APIs](https://drive.google.com/file/d/18Ei7l2Kbs9oUVxTF-h_kcgUyOxqvbIqa/view?usp=drive_link)

Instructions for using the application:
- `cd` into the repository in the command line and enter `node server`
- Because this repository only includes a back-end, you will need to use an API platform such as [Postman](https://www.postman.com/) to make the API requests
- The API routes are:
    - `/api/users`
        - `GET` all users
        - `POST` a user
    - `/api/users/:id`
        - `GET` the user with the matching ID
        - `PUT` to update the user with the matching ID
        - `DELETE` the user with the matching ID
    - `/api/users/:userId/friends/:friendId`
        - `POST` a friend to a user's friend list
        - `DELETE` a friend from a user's friend list
    - `/api/thoughts`
        - `GET` all thoughts
        - `POST` a thought
    - `/api/thoughts/:id`
        - `GET` the thought with the matching ID
        - `PUT` to update the thought with the matching ID
        - `DELETE` the thought with the matching ID
    - `/api/thoughts/:thoughtId/reactions`
        - `POST` a reaction to a thought
        - `DELETE` a reaction from a thought

## Credits

Packages used in the application:
- [express](https://www.npmjs.com/package/express)
- [luxon](https://moment.github.io/luxon/#/)
- [mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

I referred to the Stack Overflow post [Conditionally updating items in mongoose query](https://stackoverflow.com/questions/53092397/conditionally-updating-items-in-mongoose-query) when setting up the `updateUser` function in `userController.js` to help with only updating the fields on the user that were updated in the request (i.e. don't update email address if that field was not updated in the request).

## License

MIT License