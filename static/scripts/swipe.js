// TOUCH-EVENTS SINGLE-FINGER SWIPE-SENSING JAVASCRIPT
// Courtesy of PADILICIOUS.COM and MACOSXAUTOMATION.COM

// this script can be used with one or more page elements to perform actions based on them being swiped with a single finger

let triggerElementID = null; // this variable is used to identity the triggering element
let fingerCount = 0;
let startX = 0;
let startY = 0;
let curX = 0;
let curY = 0;
let deltaX = 0;
let deltaY = 0;
let horzDiff = 0;
let vertDiff = 0;
let minLength = 72; // the shortest distance the user may swipe
let swipeLength = 0;
let swipeAngle = null;
let swipeDirection = null;


// The 4 Touch Event Handlers

// NOTE: the touchStart handler should also receive the ID of the triggering element
// make sure its ID is passed in the event call placed in the element declaration, like:
// <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">

function touchStart(event, passedName) {
    // disable the standard ability to select the touched object
    event.preventDefault();
    // get the total number of fingers touching the screen
    fingerCount = event.touches.length;
    // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
    // check that only one finger was used
    if (1 === fingerCount) {
        // get the coordinates of the touch
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
        // store the triggering element ID
        triggerElementID = passedName;
    } else {
        // more than one finger touched so cancel
        touchCancel(event);
    }
}

function touchMove(event) {
    event.preventDefault();
    if (1 === event.touches.length) {
        curX = event.touches[0].pageX;
        curY = event.touches[0].pageY;
    } else {
        touchCancel(event);
    }
}

function touchEnd(event, id) {
    event.preventDefault();
    // check to see if more than one finger was used and that there is an ending coordinate
    if (1 === fingerCount && 0 !== curX) {
        // use the Distance Formula to determine the length of the swipe
        swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY - startY, 2)));
        // if the user swiped more than the minimum length, perform the appropriate action
        if (swipeLength >= minLength) {
            calculateAngle();
            determineSwipeDirection();
            processingRoutine(id);
            touchCancel(event); // reset the variables
        } else {
            touchCancel(event);
        }
    } else {
        touchCancel(event);
    }
}

function touchCancel(event) {
    console.log('touch cancel');

    // Google Analytics Part
    if ("ga" in window) {
        tracker = ga.getAll()[0];
        if (tracker)
            tracker.send('event', 'touch', 'cancel');
    }

    // reset the variables back to default values
    fingerCount = 0;
    startX = 0;
    startY = 0;
    curX = 0;
    curY = 0;
    deltaX = 0;
    deltaY = 0;
    horzDiff = 0;
    vertDiff = 0;
    swipeLength = 0;
    swipeAngle = null;
    swipeDirection = null;
    triggerElementID = null;
}

function calculateAngle() {
    let X = startX - curX;
    let Y = curY - startY;
    let Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))); //the distance - rounded - in pixels
    let r = Math.atan2(Y, X); //angle in radians (Cartesian system)
    swipeAngle = Math.round(r * 180 / Math.PI); //angle in degrees
    if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
}

function determineSwipeDirection() {
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
        swipeDirection = 'left';
    } else if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
        swipeDirection = 'left';
    } else if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        swipeDirection = 'right';
    } else if ((swipeAngle > 45) && (swipeAngle < 135)) {
        swipeDirection = 'down';
    } else {
        swipeDirection = 'up';
    }
}

function processingRoutine(id) {
    let swipedElement = document.getElementById(triggerElementID);
    if ('left' === swipeDirection) {
        // REPLACE WITH YOUR ROUTINES
        removeItem(id);
        deleteItemCompletely();
        $('#' + id).addClass('swipe');//.css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
    } else if ('right' === swipeDirection) {
        // REPLACE WITH YOUR ROUTINES
        increaseItemCount(id);
        deleteItemCompletely();
        $('#' + id).addClass('swipe');//.css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');
    }
}
