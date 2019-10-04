Developer boilerplate to build chat bots using NLP services.

DEMO URL: http://chatbot-platform.azurewebsites.net/

Follow the below mentioned steps

Google dialogflow setup and configuration

1. Please login dialogflow using below-mentioned link and on successful login navigate to the console

	 https://dialogflow.com


2. Create a new agent to start with NLP service

3. Copy client key after successful creation of agent



Dialogflow training

1. create new intent to add number of utterances

2. save the intents after adding utterances and it will automatically train the agent.


Connectivity with bot connect

1. git clone https://github.com/divergence-labs/Bot-Connect.git

2. npm install

3. npm start


Configuration binding
1. click setting and upload config.js file as per below

module.exports = {
    GOOGLE_DIALOGFLOW_CLIENT_KEY: "YOUR CLIENT KEY" //Please pass your Google dialogflow agent client key
}
 
2. done you are ready to use a chatbot