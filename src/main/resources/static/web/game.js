////--------------------- FIRST BOARD --------------////
let boardContainer = document.getElementById("board");

let divOutside = document.createElement("div");
boardContainer.appendChild(divOutside);
divOutside.id = 'numbersletters';

let letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

for (let x = 0; x < 11; x++) {
    let lettersRow = document.createElement("div");
    divOutside.appendChild(lettersRow);

    lettersRow.className = "outrow";
    lettersRow.id = (letters[x]);
    lettersRow.innerHTML = (letters[x]);

    let leftPosition = x * 35;

    // Position absolute in css
    lettersRow.style.top = 0 + 'px';
    lettersRow.style.left = leftPosition + 'px';

}

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

for (let y = 0; y < 10; y++) {
    let numbersCol = document.createElement("div");
    divOutside.appendChild(numbersCol);

    numbersCol.className = "outcol";
    numbersCol.id = (numbers[y]);
    numbersCol.innerHTML = (numbers[y]);

    let topPosition = y * 35;

    numbersCol.style.top = topPosition + 35 + 'px';
}

let divInside = document.createElement("div");
boardContainer.appendChild(divInside);
divInside.id = 'boardgame';

let fieldsArray = [];

for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 10; j++) {

        let field = document.createElement("div");
        divInside.appendChild(field);

        fieldsArray.push(field)


        field.id = (document.getElementsByClassName("outrow")[i]).id + (document.getElementsByClassName("outcol")[j]).id
        field.className = "field";


        let topPosition = j * 35;
        let leftPosition = (i - 1) * 35;

        field.style.top = topPosition + 35 + 'px';
        field.style.left = leftPosition + 35 + 'px';
    }
}

//----- second -----//

let divOutside2 = document.createElement("div");
boardContainer.appendChild(divOutside2);
divOutside2.id = 'numbersletters2';

let letters2 = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

for (let x = 0; x < 11; x++) {
    let lettersRow2 = document.createElement("div");
    divOutside2.appendChild(lettersRow2);

    lettersRow2.className = "outrow2";
    lettersRow2.id = (letters2[x]);
    lettersRow2.innerHTML = (letters2[x]);

    let leftPosition2 = x * 35;

    // Positioning css dont forget
    lettersRow2.style.top = 0 + 'px';
    lettersRow2.style.left = leftPosition2 + 'px';

}

let numbers2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

for (let y = 0; y < 10; y++) {
    let numbersCol2 = document.createElement("div");
    divOutside2.appendChild(numbersCol2);

    numbersCol2.className = "outcol2";
    numbersCol2.id = (numbers2[y]);
    numbersCol2.innerHTML = (numbers2[y]);

    let topPosition2 = y * 35;

    numbersCol2.style.top = topPosition2 + 35 + 'px';
}


let divInside2 = document.createElement("div");
boardContainer.appendChild(divInside2);
divInside2.id = 'boardgame2';

let fieldsArray2 = [];

for (let i = 1; i < 11; i++) {
    for (let j = 0; j < 10; j++) {

        let field2 = document.createElement("div");
        divInside2.appendChild(field2);

        fieldsArray2.push(field2)


        field2.id = (document.getElementsByClassName("outrow2")[i]).id + (document.getElementsByClassName("outcol2")[j]).id
        field2.className = "field2";

        //field2.addEventListener("click", mySalvos)

        let topPosition2 = j * 35;
        let leftPosition2 = (i - 1) * 35;

        field2.style.top = topPosition2 + 735 + 'px';
        field2.style.left = leftPosition2 + 735 + 'px';

    }
}

///-------- GET DATA OF PLAYER WITH ITS SHIPS ------------///

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');

async function getData() {

    let response = await fetch(`http://localhost:8080/api/game_view/${myParam}`);
    console.log(response);
    let dataPlayer = await response.json()
    return dataPlayer;
}
getData()
    .then(dataPlayer => {
        console.log(dataPlayer);
    })
    .catch(error => console.log(error))