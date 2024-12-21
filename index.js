var enteredOTP;
var generateOTP; // Declare generateOTP as a global variable

function generateDisplayOTP() {
    var firstDigit = Math.floor(Math.random() * 10);
    var secondDigit = Math.floor(Math.random() * 10);
    var thirdDigit = Math.floor(Math.random() * 10);
    var fourthDigit = Math.floor(Math.random() * 10);
    var fifthDigit = Math.floor(Math.random() * 10);
    var sixthDigit = Math.floor(Math.random() * 10);

    generateOTP = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}`; // Assign value to global variable
    document.getElementById("otp_container").style.display = "block";
    document.getElementById("otp_heading").innerText = generateOTP;
}

function toCloseOTPContainer() {
    document.getElementById("otp_container").style.display = "none"; 
}

function toValidateOTP() {
    var enteredOTP = document.getElementById("otp_inputbox").value;
    if (generateOTP == enteredOTP) {
        document.getElementById("result_container").innerText = "Access Granted";
        document.getElementById("result_container").style.color = "green";
    } else {
        document.getElementById("result_container").innerText = "Access Denied!!";
        document.getElementById("result_container").style.color = "red";
    }
}
