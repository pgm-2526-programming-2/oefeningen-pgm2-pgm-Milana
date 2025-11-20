function myCallback() {
  console.log("Dit is de callback-functie");
}

function mainLogic(callback) {
     console.log("Hoofdfunctie wordt uitgevoerd");

  callback();
}

mainLogic(myCallback);
