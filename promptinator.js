// create victim arrays
var victimNameArray = [];
var victimPhoneArray = [];
var victimStreetArray = [];

// initialize variables
var victimCounter = 0;
var result = true;

// prompt user for victim info
while(result) {
	victimCounter++;

	victimName = prompt("Enter victim #" + victimCounter + " full name.");
	victimNameArray.push(victimName);

	victimPhone = prompt("Enter victim #" + victimCounter + " phone number.");
	victimPhoneArray.push(victimPhone);

	victimStreet = prompt("Enter victim #" + victimCounter + " street.");
	victimStreetArray.push(victimStreet);

	result = window.confirm("Would you like to enter info for another" +
		" victim?\nEnter 'OK' for Yes or 'Cancel' for No");
}



// create volunteer arrays
var volNameArray = [];
var volPhoneArray = [];
var volStreetArray = [];

// initialize variables
var volCounter = 0;
var result = true;

// prompt user for volunteer info
while(result) {
	volCounter++;

	volName = prompt("Enter volunteer #" + volCounter + " full name.");
	volNameArray.push(volName);

	volPhone = prompt("Enter volunteer #" + volCounter + " phone number.");
	volPhoneArray.push(volPhone);

	volStreet = prompt("Enter volunteer #" + volCounter + " street.");
	volStreetArray.push(volStreet);

	result = window.confirm("Would you like to enter info for another" +
	" volunteer?\nEnter 'OK' for Yes or 'Cancel' for No");
}

// convert arrays to strings
var victimNameString = victimNameArray.join(", ");
var volNameString = volNameArray.join(", ");


// print summary info to monitor
alert(
	"Persons in need: " + victimCounter + "\n" +
	"Number of volunteers: " + volCounter + "\n" +
	"\n" +
	"Victims: " + victimNameString + "\n" +
	"\n" +
	"Volunteers: " + volNameString
	);