# About

This project was created as part of the HousingAnywhere Front End Engineer Challenge.

## Installation Guide

Clone the app from the GitHub repo and run the following command from inside the <code> rickAndmortyCharacters </code> folder

## `npm install`

## Running the app

Executing the following command will run the app in a development server by default on port 3000

## `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Justifications

A few justifications/explanations behind some of my design choices below:

<ol>

<li>
Why is the Dashboard a class component and the Characters a functional one?

<b>My reason</b> - The Dashboard Component dealt with making the API call to the <a href="https://rickandmortyapi.com/"> Rick and Morty API <a/> endpoint on load, so the class component. The Characters component essentially had to display data and there was no real interaction(s), hence the functional component. I could've used Hooks to make the     Dashboard Component functional, too, but using a class was a conscious decision to depict the view and the logic differently.

</li>

<li>
Why use semantic-ui and styled-components when plain ol' CSS would've cut it?

<b>My reason</b> - I wanted to demonstrate knowledge of these libraries as I use them in my day-to-day work in my current role.

</li>

</ol>
