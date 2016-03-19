# hackschool

![logo](http://www.hackerstolz.de/wp-content/uploads/2015/07/hackerstolz-logo.svg)


## How to run this example:

install dependencies
--> npm install

install babel and babel command line tooling
--> npm install -g babel
--> npm install -g babel-cli

create a file config.js into server/API and add twitter credentials:

!! Do not upload this file!!

{
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
}

open a shell in server/API and run command:
--> babel-node index.js

install your favourite http server for the app:
e.g. npm install -g http-server
and run it: http-server

run the app in the browser

improve it!