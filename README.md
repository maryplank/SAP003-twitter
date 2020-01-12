# Laboratoria's Twitter

As a part of Laboratoria's bootcamp exercise, we were supposed to replicate the example below, creating a simulation of a Twitter page (in the beggining of times), where the user's tweets are stored in the browser's local storage, so the feed will stay updated even when the user closes the browser window and comes back later.

![exemplo twitter](https://media.giphy.com/media/3ov9jP4RIGQCUQOScg/giphy.gif)

## Project's specifications

### Version 0.0.1
- Create a form that allow to inset text and a 'Tweet' button 
- Add a click event so the form input are submited
- In the event, obtain the text
- Add that text to the HTML
- Save the tweets at `localStorage`.

### Version 0.0.2

- Desable the 'Tweet' button when there is no text in the form
- Count down the text characters from 140

### Version 0.0.3

- If the text has more than 140 caracteres, desable the 'Tweet' button and show the counter negative.
- If the text has more than 120 caracteres, change the counter's color.
- If the text has more than 130 caracteres, change the counter's color again.

### Version 0.0.4

- When enter is pressed, resize the textbox so it shows the whole text.

## Access

You can access the application [here](https://maryplank.github.io/SAP003-twitter/src/index.html).

## Run

You will need [npm](https://www.npmjs.com/) installed to run this application.

After cloning this repository and installing npm, go to this repository's folder through the command line and run the following to install this project's dependecies:

`npm install`

Run the following command to run the application:

`npm start`
