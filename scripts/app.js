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
let arr = [];
let count = 0;
let start = true;

const GetUser = async () => {
    const promise = await fetch('https://random-data-api.com/api/v2/users');
    const data = await promise.json();
    console.log(data);
    return data;
}
//first_name
//last_name
//subscription.status

dataBtn.addEventListener('click', async () => {
    if (start) {
        for (let i = 0; i < 15; i++) {
            arr.push(await GetUser())
        }
        CreatePrev();
        CreateNext();
        userName.textContent = arr[count].first_name + " " + arr[count].last_name;
    }

    start = false;
})

const CreatePrev = () => {
    let button = document.createElement("button");
    button.textContent = "Prev";

    button.addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = arr.length - 1;
        }
        userName.textContent = arr[count].first_name + " " + arr[count].last_name;
    })

    btnDiv.append(button);
}

const CreateNext = () => {
    let button = document.createElement("button");
    button.textContent = "Next";

    button.addEventListener('click', () => {
        count++;
        if (count > arr.length - 1) {
            count = 0;
        }
        userName.textContent = arr[count].first_name + " " + arr[count].last_name;
    })

    btnDiv.append(button);
}

userInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        infoDiv.innerHTML = "";
        let newArr = arr.filter(sub => sub.subscription.status === e.target.value)
        if(newArr.length === 0){
            infoDiv.innerText = "No one found";
        } else {
            newArr.map(user => {
                let p = document.createElement("p");
                p.textContent = user.first_name + " " + user.last_name;

                p.addEventListener('click', () => {
                    p.remove();
                })

                infoDiv.append(p);
            })
        }
    }
})