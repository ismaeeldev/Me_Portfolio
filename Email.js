let loading = document.getElementById("loading");

function showLoadingIndicator() {
    console.log("show loading.....");
    loading.style.display = "block";
}

function hideLoadingIndicator() {
    loading.style.display = "none";
    console.log("hide loading indiccator ...");
}


function sendEmail() {
function sendEmail() {?
    try {
        showLoadingIndicator();

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "mi0364922@gmail.com",
            Password: "EBF17848B53AE3B5969804F27A239FEB8228",
            To: 'mi0364922@gmail.com',
            From: 'mi0364922@gmail.com',
            Subject: "New contact form",
            Body: "Name: " + document.getElementById("input-name").value + "<br>Email: " + document.getElementById("input-email").value + "<br>Contact No: " + document.getElementById("input-number").value + "<br>Subject: " + document.getElementById("input-subject").value + "<br>Body: " + document.getElementById("input-body").value
        }).then(
            message => {
                hideLoadingIndicator();

                if (message == 'OK') {
                    setTimeout(() => {
                        swal("Successfull!", "Your form is submitted!", "success");
                    }, 100);
                    console.log("Form working.......");
                } else {
                    setTimeout(() => {
                        swal("Unexpected error!", "Check again all fields", "error");
                    }, 100);
                    console.error("Form not working.......");
                }
            }
        );
    } catch (error) {
        hideLoadingIndicator();
        console.error("Error sending email:", error);
        swal("Email Sending Failed!", "There was an error sending your message. Please try again later.", "error");
    }
}


