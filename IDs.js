const prompt = require('prompt-sync')();
let PIdentifier = "", PersonInfo = [], UID, UUIDsList = [], fs = require("fs");

function seperate(){
    console.log("------------------------------------------------------------------------------------------------------------------------------------")
}

function RegUUID(PName, PAge, PBirthDate, PHeight, PWeight){
    PersonInfo = [PName, PAge, PBirthDate, PHeight, PWeight];
    PIdentifier = Math.floor(Math.random() * 100) + "." + Math.floor(Math.random() * 1000) + "." + Math.floor(Math.random() * 10000)
    UID = 'Name: ' + PersonInfo[0] + " // Age: " + PersonInfo[1] + " // Birthdate: " + PersonInfo[2] + " // Height: " + PersonInfo[3] + "cm // Weight: " + PersonInfo[4] + "kg // RandomIdentifier: " + PIdentifier;
    UUIDsList.push(UID);
};

function ShowUUID(Index) {
    if(Index.toUpperCase() == "ALL") {
        let index = 0;

        seperate()

        for(; index < UUIDsList.length;) {
            console.log("[" + index + "] " + UUIDsList[index])
            seperate()
            index++
        };
        
        console.log("Displayed [" + index + "] identities!")

    } else if (Index > UUIDsList.length - 1) {
        let listIndexAmount = UUIDsList.length - 1
        
        if (UUIDsList.length != 0) {
            console.log('ID [' + Index + '] does not exist. Highest index: [' + listIndexAmount + ']')
            console.log("[" + listIndexAmount + "] " + UUIDsList[listIndexAmount]);
        } else {
            console.log('No registered IDs in list. Register at least 1 ID and try again.')
        };

    }
    
    
    else{
        seperate()
        console.log("[" + Index + "] " + UUIDsList[Index])
        seperate()
    };
};

function RandUUID(amount){
    for(index = 0; index < amount  ;index++){
        let NameArray = ["Per", "Olsen", "David", "Joe", "Ole", "Niklas", "Caroline", "Johanne", "Sigve", "Benjamin", "Peanøtter", "Oliver", "Ola", "Per", "Lars", "Morten", "Eirik", "Håvard", "Anders", "Sindre", "Knut", "Truls", "Espen", "Stian", "Bjørn", "Torstein", "Jørgen", "Øystein", "Svein", "Fredrik", "Kristian", "Rune", "Ingrid", "Kari", "Marit", "Silje", "Ragnhild", "Anne", "Tone", "Elin", "Liv", "Thea", "Hanne", "Synnøve", "Camilla", "Solveig", "Ida", "Oda", "Tiril", "Linnea", "Nora", "Emma", "Kim", "Alex", "Robin", "Taylor", "Noa", "Nikita", "Charlie", "Sam", "Morgan", "Jean", "James", "John", "William", "David", "Daniel", "Michael", "Benjamin", "Hugo", "Leonardo", "Matteo", "Sophia", "Olivia", "Isabella", "Ava", "Mia", "Charlotte", "Amelia", "Ella", "Lily", "Chloe", "Magnus", "Signe", "Vetle", "Maja", "Emil", "Sunniva", "Henrik", "Guro", "Jakob", "Frida", "Aksel", "Vilde", "Even", "Åse", "Leif", "Beate", "Hallvard", "Ingvild", "Terje", "Malin", "Selma", "Iver", "Yara", "Kian", "Tobias", "Mille", "Leon", "Alma", "Storm", "Tilde", "Felix", "Arian", "Hedda", "Nilo", "Saga", "Mikkel", "Elina", "Timian", "Jenny", "Isak", "Ronja", "Viljar", "Alina", "Leona", "Odin", "Sofie", "Melvin", "Zara", "Ask", "Luna", "Theo", "Tiril", "Cornelia", "Sander", "Embla", "Elias", "Vårin", "Daniel", "Nora", "Linus", "Mina", "Ailo", "Selin", "Kaspar", "Maia", "Vilma", "Juno", "Elian", "Sana", "Nikolai", "Alva", "Levi", "Maren", "Noel", "Tuva", "Vidar", "Kaisa", "Emanuel", "Ylva", "Kalle", "Inaya", "Mio", "Eira", "Jens", "Lovise", "Malin", "Sindre", "Eli", "Storm", "Thale", "Jesper", "Tia", "Dennis", "Melina", "Birk", "Lilly", "Trym", "Naia", "Mads", "Tindra", "Casper", "Vanja"];
        let randAge =  Math.floor(Math.random() * 87) + 13;
        let randDay = Math.floor(Math.random() * 30) + 1
        let randMonth = Math.floor(Math.random() * 11) + 1
        let randYear = 2025 - randAge
        let randBirthdate = randDay.toString() + "." + randMonth.toString() + "." + randYear.toString()
        RegUUID(NameArray[Math.floor(Math.random() * NameArray.length)], randAge, randBirthdate, Math.floor(Math.random() * 50) + 150, Math.floor(Math.random() * 40) + 60)
    };
};

function veryGoodName(){
    let startThing = prompt('([0]: Maunal | [1]: Automatic | [2]: Show ID): ');

    if (startThing == 0) {
        RegUUID(prompt('What is your name? '), prompt('How old are you? '), prompt('What is your birthdate? (DD.MM.YYYY) '), 
        prompt('How tall are you? (cm) '), prompt('How much do you weigh? (kg) '))
    } else if (startThing == 1){
        RandUUID(prompt("How many IDs do you want to generate? "));
    } else if (startThing == 2) {
        ShowUUID(prompt("Show a single ID (by number, index 0) or show All? "));
    } else {
        prompt('Not a valid input!')
    };

    if (startThing == 0 || startThing == 1) {
        // ShowUUID(prompt("Show a single ID (by number, index 0) or show All? "));
        veryGoodName()
    };

    let iHaveNoClue = prompt('Do more stuff? (Y/N): ');

    if (iHaveNoClue.toUpperCase() == 'Y') {
        veryGoodName();
    } else if (iHaveNoClue.toUpperCase() == 'CLEAR') {
        console.clear();
        veryGoodName();
    }
    
    else {
        console.clear();
    };
};

veryGoodName();