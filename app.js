// A Function To Display Error Message //
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// A Function To Validate The Form //
function validateForm() {
    // Retrieving All Form Elements
    var name = document.appForm.name.value;
    var email = document.appForm.email.value;
    var mobile = document.appForm.mobile.value;
    var password = document.appForm.password.value;
    var country = document.appForm.country.value;
    
    
	// Define Variables With A Default Value //
    var nameErr = emailErr = mobileErr = passwordErr = countryErr = true;
    
    
    // Validate Name //
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate Email Address //
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate Mobile Number //
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number" + "<br>" + "Example: 123-456-7890");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate Password //  Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;                
        if(regex.test(password) === false) {
            printError("passwordErr", "Password must be at least 8 characters long" + "<br>" + "contain one uppercase, one lowercase" + "<br>" + " and one number");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    
    // Validate Country //
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // Changes Color Of Regex Error Message //
    document.getElementById("nameErr").style.color = "white";
    document.getElementById("emailErr").style.color = "white";
    document.getElementById("mobileErr").style.color = "red";
    document.getElementById("passwordErr").style.color = "red";
    document.getElementById("countryErr").style.color = "white";

    
 
// Prevent The Form From Being Submitted If There Are Any Errors //
    if((nameErr || emailErr || mobileErr || passwordErr || countryErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Password: " + password + "\n" +
                          "Country: " + country + "\n";

        // Display Input Data In A Dialog Box Before Submitting The Form //
        alert(dataPreview);
    }
};

