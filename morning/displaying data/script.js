// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];


//--------------------1---------------------------

// for (i = 0; i < departures.length; i++) {

//     console.log(departures[i])

// }

//--------------------2---------------------------
// let hours = [];
// let minutes = [];
// for (let i = 0; i < departures.length; i++) {
//     hours.push(Math.floor(departures[i] / 60))
//     minutes.push(departures[i] % 60)
// }


// for (let i = 0; i < hours.length; i++) {

//     console.log(hours[i] + ":" + minutes[i]);

// }

// const div = document.createElement('div');
// div.className = 'output';
// const htmlBody = document.querySelector('body');
// htmlBody.appendChild(div);

// div.textContent = hours[0];

//-----------------------3&4---------------------------------

// const htmlBody = document.querySelector('body');
// const list = document.createElement('ul');
// htmlBody.appendChild(list)
// departures.forEach((element, index) => {
//     const div = document.createElement('li');
//     div.className = 'output';
//     list.appendChild(div);

//     div.textContent = hours[index] + ":" + minutes[index];
// });

//----------------------------simple grocery shopping list stage 1----------------------------------------

const groceryItems = ['trash', 'apples', 'milk', 'horses'];
const htmlBody = document.querySelector('body');



//--------------------4--------------------------------------------------------------------

groceryItems.forEach((element, index) => {
    const div = document.createElement('div');
    div.className = 'list';
    div.textContent = element;
    htmlBody.appendChild(div);
});
