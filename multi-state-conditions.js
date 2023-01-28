var money = 20;
var danishPrice = 15;
var butterBread = 25;
var toastBiscuit = 50;
if (toastBiscuit < money) {
    console.log(' I will eat dry biscuit');
}
else if (butterBread < money) {
    console.log('I will eat butter bon');
}
else if (danishPrice < money) {
    console.log('I will eat danish');
}
else {
    console.log('I will come back at home');
}