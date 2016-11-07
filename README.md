# NodeJsMessagesWebServer
Http Web Server written in Node.js, using NodeJsMessagesApi to get and post the data.

# Installation
- Make sure you have npm installed in your machine and added to the path.
- Download the project.
- In the root of the project, run the powershell script install.ps1.
- Go to the webServer folder and run
  - `npm install`

# Running the server
You need to have an instance of the NodeJsMessagesApi running. Download it from [here](https://github.com/Jrglms/NodeJsMessagesApi) and run it. Make sure you configure the server to point to the right domain and ip. By default http://localhost:3000 is used. You can change it on the messagesController if you have run the Api server with a different configuration.
- Run `/webServer/server.js`.

This will start an instance of the server that will wait for requests to arrive.

# Using the website
By default, the web server will be listening on the 3001 port. If a different one is needed, just open `/webServer/server.js` and update the last line with the desired port.
It does not matter the path you enter, the first time it will redirect you to the login page. It will ask you for a user identifier (as I have not added a proper authentication) which has to be a number. After submitting it, you will be redirected to the Global messages page. There, you will get the list of messages and, at the bottom of it, a form wil be displayed giving you the oportunity of adding a new one.

# Notes
- NodeJsMessagesApi also allows the user to add and retrieve Group and Private messages. It has been decided not to implement them as it is a superfluous process. 
- After logging in, the most logical thing would be to be redirected to a page with links to all the conversations you have opened or to create a new one. But the server hasn't been prepared to return a list of conversations (the document should be created and updated so you can keep them in order).
- Node.js, Express.js and different express modules have been used to create this web server.
