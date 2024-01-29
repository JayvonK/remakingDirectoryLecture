// Fetching data from api
// Then storing the data in array
// Activate fetch with button click, button click will also create two buttons to iterate through the array(up and down)

//Will need
//Btn ID
//2 Div ID's, one for the user info, and one for the created btns
//User name ID
//ID for fetch data btn
//ID for input field
//An array, counter, boolean for api call


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
let infoDiv = document.getElementById("infoDiv");

let dataArray = [];
let counter = 0;
let start = true;


const ApiData = async () => {
    const promise = await fetch('https://random-data-api.com/api/v2/users');
    const data = await promise.json();
    dataArray.push(data);
    userName.textContent = dataArray[counter].first_name + " " + dataArray[counter].last_name;
}

dataBtn.addEventListener('click', async (event) => {
    if (start) {
        for (let i = 0; i < 15; i++) {
            ApiData();
        }
    }
    start = false;

    createNext();
    createPrev();

    
})

const createNext = () => {
    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener('click', (event) => {
        counter++;
        if(counter > dataArray.length - 1)
        {
            counter = 0;
        }
        userName.textContent = dataArray[counter].first_name + " " + dataArray[counter].last_name;
    })

    btnDiv.appendChild(nextBtn);
}

const createPrev = () => {
    let prevBtn = document.createElement("button");
    prevBtn.textContent = "Prev";
    prevBtn.addEventListener('click', (event) => {
        counter--;
        if(counter < 0)
        {
            counter = dataArray.length - 1;
        }
        userName.textContent = dataArray[counter].first_name + " " + dataArray[counter].last_name;
        
    })

    btnDiv.appendChild(prevBtn);
}