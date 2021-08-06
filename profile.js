console.log('Hello World');

let colorButton = document.getElementById("color")
let placeButton = document.getElementById("place")
let ritualButton = document.getElementById("ritual")

colorButton.addEventListener('click', buttonClickColor)
placeButton.addEventListener('click', buttonClickPlace)
ritualButton.addEventListener('click', buttonClickRitual)

function buttonClickColor (event) {
    alert('My favorite color is Blue')
}

function buttonClickPlace (event) {
    alert('My favorite place to be is in the mountains')
}

function buttonClickRitual(event) {
    alert('I have a ritual of eating an apple before bed every night.')
} 





// let favButtons = document.getElementById('favButtons')
// favButtons.addEventListener('click', buttonClick)


// function buttonClick(event) {
//     let clickedItem = event.target.id;

//     for (let i = 0; i < clickedItem.length; i) {
//        if (clickedItem[i] === 'color') {
//            alert("Blue is my favorite color")
//        } else {
//            alert('Next Button');
//        }
        
//     }
   
    
    

