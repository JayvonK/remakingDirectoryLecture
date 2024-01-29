// Fetching data from api
// Then storing the data in array
// Activate fetch with button click, button click will also create two buttons to iterate through the array(up and down)

//Will need
//Btn ID
//2 Div ID's, one for the user info, and one for the created btns
//User name ID
//ID for fetch data btn
//ID for input field

//Keep in mind
//Use .target, .map, .filter, .append, .createElement, .push, .value
//Need an array, counter, and boolean 
//4 functions, api call, next and prev btns, filter data
//4 click events


//Fetch link:
//https://random-data-api.com/api/v2/users
let userName = document.getElementById("userName");
let btnDiv = document.getElementById("btnDiv");
let dataBtn = document.getElementById("dataBtn");
let userInput = document.getElementById("userInput");


const ApiData = async () => {
    const promise = await fetch('https://random-data-api.com/api/v2/users');
    const data = await promise.json();
    
}