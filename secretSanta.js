let names = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function pickName() {
    if (names.length == 0) {
        $('#nameResult').append("No more names left, sorry");
        return;
    }

    let userInput = $('#nameInput').val();
    let random = getRandomInt(names.length);

    let numberOfTimesInLoop = 0;
    while (names[random].toLowerCase() == userInput.toLowerCase() && numberOfTimesInLoop < names.length) {
        random = getRandomInt(names.length);
        numberOfTimesInLoop++;
    }
    if(numberOfTimesInLoop == names.length) {
        alert("Not a valid entry: name matches last remaining name");
        return;    
    }

    $('#nameResult').append(userInput + " -----> " + names[random]); // --> correctly finds the persons name
    names = names.filter(function (person) {
        return person != names[random];
    });

    $('#nameInput').val('');
}

function handlelistsubmit(event) {
    event.preventDefault();
    names.push($('#nameList').val());
    // alert(names);
    $('#nameListResult').empty();
    for(let x = 0; x < names.length; x++) { 
        $('#nameListResult').append(names[x] + " ");
    };
    $('#nameList').val('');
}

function handlelistclear(event) {
    event.preventDefault();
    names = [];
    $('#nameListResult').empty();
    $('#nameList').val('');
}

function handleSubmit(event) {
    event.preventDefault();
    pickName();
}

function handleClear(event) {
    event.preventDefault();
    $('#nameResult').empty();
}

$('#generaltestarea').on('click', '#nameListSubmit', handlelistsubmit);
$('#generaltestarea').on('click', '#nameListClear', handlelistclear);
$('#generaltestarea').on('click', '#nameSubmit', handleSubmit);
$('#generaltestarea').on('click', '#nameClear', handleClear);


// let smash = [
//     {
//         name: "Ike",
//         age: 30,
//         tier: "Godly",
//         img: "icons/ike.png"
//     },
//     {
//         name: "Ness",
//         age: 15,
//         tier: "Very Good"
//     },
//     {
//         name: "Hero",
//         age: 23,
//         tier: "OP"
//     },
//     {
//         name: "K.rool",
//         age: 69,
//         tier: "Garbage"
//     }
// ];


// $('#smashTable').append('<tr>');
// $('#smashTable').append('<th id = "ikeColumn">' + smash[0].name + '</th>');
// $('#smashTable').append('<th id = "nessColumn">' + smash[1].name + '</th>');
// $('#smashTable').append('<th id = "heroColumn">' + smash[2].name + '</th>');
// $('#smashTable').append('<th id = "kColumn">' + smash[3].name + '</th>');
// $('#smashTable').append('</tr>');
// $('#smashTable').append('</thead>');

// $('#smashTable').append(`<tbody> <tr> 
// <td> <img src = ${smash[0].img}> </td> 
// <td> ${smash[1].tier} </td> 
// <td> ${smash[2].tier} </td>
// <td> ${smash[3].tier} </td>`);

