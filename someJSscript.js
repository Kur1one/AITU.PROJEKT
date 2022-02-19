function Rickey() {
    var myaudio = document.getElementById("Audi");
    if(myaudio.paused == true) {
    document.getElementById("Audi").play();
    }
    else if (myaudio.paused == false) {
    document.getElementById("Audi").pause();
    }
}


    function Rickey1() {
    var myaudio = document.getElementById("Audi1");
    if(myaudio.paused == true) {
    document.getElementById("Audi1").play();
    }
    else if (myaudio.paused == false) {
    document.getElementById("Audi1").pause();
    }
}



function passUnsee() {
    var see = document.getElementById("pass");
    if (see.type === "password") {
        see.type = "text";
    } else {
        see.type = "password";
    }
}


function passUnsee1() {
    var see1 = document.getElementById("reppass");
    if (see1.type === "password") {
        see1.type = "text";
    } else {
        see1.type = "password";
    }
}



function passwordChecking() {
	var name = document.getElementById("imya").value;
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("reppass").value;
    if (pass1 == pass2) {
	   alert("Hello" + " " + name + "!" + " " + "You have succesfully registred");
    }
    else if (pass1 == 0 || pass2 == 0) {
    	alert("You must write a password!")
    }
    else {
    	alert("Passwords do not match!")
    }
}

