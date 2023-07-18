$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let myAP = 100;

function onReady() {
    console.log('in onReady');
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-scepter').on('click', arcaneScepter); // AP Cost: 12 _ HP Damage: 14
    $('.entangle').on('click', entangle); // AP Cost: 23 _ HP Damage: 9
    $('.dragon-blade').on('click', dragonBlade); // AP Cost: 38 _ HP Damage: 47
    $('.star-fire').on('click', starFire); // AP Cost: 33 _ HP Damage: 25



    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    render();

}


function arcaneScepter() { // AP Cost: 12 _ HP Damage: 14
    console.log('in arcaneScepter')

    fungusHP = fungusHP - 14;
    myAP = myAP - 12;
    console.log('fungusHP: ', fungusHP);
    console.log('myAP: ', myAP);
    $('#hp-meter').text(fungusHP);
    $('#ap-meter').text(myAP);


    render();
}

function entangle() { // AP Cost: 23 _ HP Damage: 9
    console.log('in entangle')

    fungusHP = fungusHP - 9;
    myAP = myAP - 23;
    console.log('fungusHP: ', fungusHP);
    console.log('myAP: ', myAP);
    $('#hp-meter').text(fungusHP);
    $('#ap-meter').text(myAP);

}

function dragonBlade() { // AP Cost: 38 _ HP Damage: 47
    console.log('in dragonBlade')

    fungusHP = fungusHP - 47;
    myAP = myAP - 38;
    console.log('fungusHP: ', fungusHP);
    console.log('myAP: ', myAP);
    $('#hp-meter').text(fungusHP);
    $('#ap-meter').text(myAP);

}

function starFire() { // AP Cost: 33 _ HP Damage: 25

    console.log('in starFire')

    fungusHP = fungusHP - 25;
    myAP = myAP - 33;
    console.log('fungusHP: ', fungusHP);
    console.log('myAP: ', myAP);
    $('#hp-meter').text(fungusHP);
    $('#ap-meter').text(myAP);

}

function render() {
    // Having separate render() allows for resuse

    // jquery that will update the DOM


    $('#hp-meter').text(fungusHP);
    $('#ap-meter').text(myAP);

}