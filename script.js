// Create two tables 1 with stadard time and one with military time
const date = new Date();
console.log(date);

let months = [ 'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November','December',
]

let day_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
 'Thursday', 'Friday', 'Saturday',]

// Military Time
document.getElementById("military-year").innerText = date.getFullYear();

document.getElementById("military-month").innerText = months[date.getMonth()];

document.getElementById("military-d-o-w").innerText = day_of_week[date.getDay()];
document.getElementById('military-day').innerText = date.getDate();
document.getElementById("military-hour").innerText = date.getHours();
document.getElementById("military-minute").innerText = date.getMinutes();
document.getElementById("military-second").innerText = date.getSeconds();
document.getElementById("military-time-zone").innerText = date.getTimezoneOffset();

// Standard Time
document.getElementById("year").innerText = date.getFullYear();
document.getElementById("month").innerText = months[date.getMonth()];
document.getElementById("d-o-w").innerText = day_of_week[date.getDay()];
document.getElementById('day').innerText = date.getDate();
let hour = date.getHours();
if(hour === 0) {
    hour = 12;
} else if(hour > 12) {
    hour = hour - 12;
}
document.getElementById("hour").innerText = hour;
document.getElementById("minute").innerText = date.getMinutes();
document.getElementById("second").innerText = date.getSeconds();
document.getElementById("time-zone").innerText = date.getTimezoneOffset(); 


// create a table that will find the difference of the diagonal sums of random numbers

// const randomNumbers = () => {
//     let array = [...Array(9)].map(() => Math.floor(Math.random() * 99) + 1);
//     let spanTag = document.createElement("SPAN");
//     spanTag.innerText = array
//     document.getElementById("diagonal").appendChild(spanTag).setAttribute("id", "num");
//     console.log(array)
// }

// document.getElementById("").addEventListener("click", randomNumbers());

// let span = document.getElementById("num");

// const findDifference = () => {

// }

// const getRandom = () => {
//     let array = [...Array(1)].map(() => Math.floor(Math.random() * 99) + 1);
//     return array
// }

// function run() {
//     let grid = document.getElementById('grid');
//     for(let i = 0, row; row = grid.rows[i]; i++){
//         row.cells[0].textContent = getRandom();
//         row.cells[1].textContent = getRandom();
//         row.cells[2].textContent = getRandom();
//     }
//     console.log
// }

// function getTotal() {
//     let rowOne = document.getElementById("row-one");
//     let rowTwo = document.getElementById("row-two");
//     let rowThree = document.getElementById("row-three");
//     let cellOne = rowOne.getElementsByTagName("td")
//     let cellTwo = rowTwo.getElementsByTagName("td")
//     let cellThree = rowThree.getElementsByTagName("td")
//     let top_left = cellOne[0].innerText;
//     let top_right = cellOne[2].innerText;
//     let middle = cellTwo[1].innerText;
//     let bottom_left = cellThree[0].innerText;
//     let bottom_right = cellThree[2].innerText;
//     let top_left_bottom_right = []
// }

const getRandom = () => {
    let array = [...Array(9)].map(() => Math.floor(Math.random() * 99) + 1);
    return array
}
let rando = getRandom();

function run() {
    // Draw HTML table
    var per_row = 3, // 3 cells per row
        count = 0, // Flag for current cell
        table = document.createElement("table"),
        row = table.insertRow();
  
    for (var i of rando) {
      var cell = row.insertCell();
      cell.innerHTML = i;
      // Break into next row
      count++;
      if (count%per_row==0) {
        row = table.insertRow();
      }
    }
    // Attach table to container
    document.getElementById("grid").appendChild(table);
};

function getTotal() {
    // going through the random list to find the difference between the diagonals
      let top_left_bottom_right = rando[0] + rando[4] + rando[8];
      let botton_left_top_right = rando[2] + rando[4] + rando[6];
      let difference = top_left_bottom_right - botton_left_top_right
    // Adding the answer to a p tag on the page
      let tag = document.createElement("P");
      let text = document.createTextNode(`The total from top left to bottom right is ${top_left_bottom_right}
      and the total from the top right to the bottom left is ${botton_left_top_right}
      and the absolute difference between the two is ${Math.abs(difference)}`)
      tag.appendChild(text);
      let element = document.getElementById("total");
      element.appendChild(tag);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    let symbol = "!@#$%^&*(){}][=+-,./?~"
    return symbol[(Math.floor(Math.random() * symbol.length))];
}

let answer = document.getElementById("answer");
let length = document.getElementById("length");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let generate = document.getElementById("generate")

const randomObject = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

generate.addEventListener('click', () => {
    const lengthNow = length.value;
    const hasUpper = upper.checked;
    const hasLower = lower.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    answer.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, lengthNow);
});

function generatePassword(upper, lower, number, symbol, length) {
    let generatePassword = "";

    const count = upper + lower + number + symbol;
    const arr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(count === 0) {
        return '';
    }

    for(let i = 0; i < length; i+=count) {
        arr.forEach(type => {
            const keys = Object.keys(type)[0];
            generatePassword += randomObject[keys]();
        });
    }
    const finalpassword = generatePassword.slice(0, length);
    return finalpassword;
}