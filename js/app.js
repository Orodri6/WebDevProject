// Function validates the teacher registration form
document.getElementById('btnTeacherRegistered').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strFirstName = document.getElementById('txtTeacherRegisterFirstName').value
    let strLastName = document.getElementById('txtTeacherRegisterLastName').value
    let strEmail = document.getElementById('txtTeacherRegisterUsername').value
    let strPassword = document.getElementById('txtTeacherRegisterPassword').value

    let blnError = false
    let strMessage = ''

    if(strFirstName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid first name.</p>'
    }

    if(strLastName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid last name.</p>'
    }

    if(!regEmail.test(strEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid email.</p>'
    }

    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid password.</p>'
    }

    if(blnError == true){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    }

    if (blnError) {
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "Registration Successful!",
            icon: "success"
        }).then(() => {
            // Only switch screens after success
            const frmTeacherRegister = document.getElementById('frmTeacherRegister');
            const frmTeacherLogin = document.getElementById('frmTeacherLogin');
            frmTeacherRegister.style.display = 'none';
            frmTeacherLogin.style.display = 'block';

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register',{
                method: 'POST',
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({
                    email: strEmail,
                    firstName: strFirstName,
                    lastName: strLastName,
                    role: "teacher", 
                    password: strPassword
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error',error))
        });
    }
});

// Function validates the student registration form
document.getElementById('btnStudentRegistered').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strFirstName = document.getElementById('txtStudentRegisterFirstName').value
    let strLastName = document.getElementById('txtStudentRegisterLastName').value
    let strEmail = document.getElementById('txtStudentRegisterUsername').value
    let strPassword = document.getElementById('txtStudentRegisterPassword').value

    let blnError = false
    let strMessage = ''

    if(strFirstName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid first name.</p>'
    }

    if(strLastName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid last name.</p>'
    }

    if(!regEmail.test(strEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid email.</p>'
    }

    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Please enter a valid password.</p>'
    }

    if (blnError) {
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "Registration Successful!",
            icon: "success"
        }).then(() => {
            // Only switch screens after success
            const frmStudentRegister = document.getElementById('frmStudentRegister');
            const frmStudentLogin = document.getElementById('frmStudentLogin');
            frmStudentRegister.style.display = 'none';
            frmStudentLogin.style.display = 'block';

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register',{
                method: 'POST',
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({
                    email: strEmail,
                    firstName: strFirstName,
                    lastName: strLastName,
                    role: "student", 
                    password: strPassword
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error',error))
        });
    }
});

// Teacher Buttons

// Function to swap from login to Teacher login form
document.getElementById('btnChoTeacher').addEventListener('click', function() {
    const frmLogin = document.getElementById('frmLogin');
    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
    frmLogin.style.display = 'none';
    frmTeacherLogin.style.display = 'block';
});

// Function to swap from Teacher login back to home
document.getElementById('btnTeacherGoHome').addEventListener('click', function() {
    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
    const frmLogin = document.getElementById('frmLogin');
    frmTeacherLogin.style.display = 'none';
    frmLogin.style.display = 'block';
});

// Function to go to Teacher Interface
document.getElementById('btnTeacherLogin').addEventListener('click', function() {
    const strEmail = document.getElementById("txtTeacherLoginUsername").value.trim();
    const strPassword = document.getElementById("txtTeacherLoginPassword").value.trim();

    const regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let blnError = false;
    let strMessage = '';

    if (!regEmail.test(strEmail)) {
        blnError = true;
        strMessage += '<p>Please enter a valid email address.</p>';
    } 
    if (!regPassword.test(strPassword)) {
        blnError = true;
        strMessage += '<p>Please enter a valid password.</p>';
    }

    if (blnError) {
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    } else {
        // Send the data to the server
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: strEmail, password: strPassword })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === "success") {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success"
                }).then(() => {
                    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
                    const divTeacherInterface = document.getElementById('divTeacherInterface');
                    frmTeacherLogin.style.display = 'none';
                    divTeacherInterface.style.display = 'block';
                });
            } else {
                Swal.fire({
                    title: "Login Failed!",
                    text: data.message,
                    icon: "error"
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: "Server Error",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
        });
    }
});

// Function to go to User Interface
document.getElementById('btnTeacherRegister').addEventListener('click', function() {
    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
    const frmTeacherRegister = document.getElementById('frmTeacherRegister');
    frmTeacherLogin.style.display = 'none';
    frmTeacherRegister.style.display = 'block';
});

// Function to go to Teacher login by clicking login
document.getElementById('btnTeacherSwapLogin').addEventListener('click', function() {
    const frmTeacherRegister = document.getElementById('frmTeacherRegister');
    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
    frmTeacherRegister.style.display = 'none';
    frmTeacherLogin.style.display = 'block';
});

// Function to go to Teacher Profile
document.getElementById('btnTeacherProfile').addEventListener('click', function() {
    const divTeacherInterface = document.getElementById('divTeacherInterface');
    const divTeacherProfile = document.getElementById('divTeacherProfile');
    divTeacherInterface.style.display = 'none';
    divTeacherProfile.style.display = 'block';
});

// Function to go to Teacher Login from Profile
document.getElementById('btnTeacherLogout').addEventListener('click', function() {
    const divTeacherProfile = document.getElementById('divTeacherProfile');
    const frmTeacherLogin = document.getElementById('frmTeacherLogin');
    divTeacherProfile.style.display = 'none';
    frmTeacherLogin.style.display = 'block';
});

// Student Buttons

// Function to swap from registration to Student login form
document.getElementById('btnChoStudent').addEventListener('click', function() {
    const frmLogin = document.getElementById('frmLogin');
    const frmStudentLogin = document.getElementById('frmStudentLogin');
    frmLogin.style.display = 'none';
    frmStudentLogin.style.display = 'block';
});

// Function to swap from Student login back to home
document.getElementById('btnStudentGoHome').addEventListener('click', function() {
    const frmStudentLogin = document.getElementById('frmStudentLogin');
    const frmLogin = document.getElementById('frmLogin');
    frmStudentLogin.style.display = 'none';
    frmLogin.style.display = 'block';
});

// Function to go to Student Interface
document.getElementById('btnStudentLogin').addEventListener('click', function() {
    const strEmail = document.getElementById("txtStudentLoginUsername").value.trim();
    const strPassword = document.getElementById("txtStudentLoginPassword").value.trim();

    const regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let blnError = false;
    let strMessage = '';

    if (!regEmail.test(strEmail)) {
        blnError = true;
        strMessage += '<p>Please enter a valid email address.</p>';
    } 
    if (!regPassword.test(strPassword)) {
        blnError = true;
        strMessage += '<p>Please enter a valid password.</p>';
    }

    if (blnError) {
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    } else {
        // Send the data to the server
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: strEmail, password: strPassword })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === "success") {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success"
                }).then(() => {
                    const frmStudentLogin = document.getElementById('frmStudentLogin');
                    const divStudentInterface = document.getElementById('divStudentInterface');
                    frmStudentLogin.style.display = 'none';
                    divStudentInterface.style.display = 'block';
                });
            } else {
                Swal.fire({
                    title: "Login Failed!",
                    text: data.message,
                    icon: "error"
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: "Server Error",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
        });
    }
});

// Function to go to User Interface
document.getElementById('btnStudentRegister').addEventListener('click', function() {
    const frmStudentLogin = document.getElementById('frmStudentLogin');
    const frmStudentRegister = document.getElementById('frmStudentRegister');
    frmStudentLogin.style.display = 'none';
    frmStudentRegister.style.display = 'block';
});

// Function to go to Student login by clicking login
document.getElementById('btnStudentSwapLogin').addEventListener('click', function() {
    const frmStudentRegister = document.getElementById('frmStudentRegister');
    const frmStudentLogin = document.getElementById('frmStudentLogin');
    frmStudentRegister.style.display = 'none';
    frmStudentLogin.style.display = 'block';
});

// Function to go to Student Profile
document.getElementById('btnStudentProfile').addEventListener('click', function() {
    const divStudentInterface = document.getElementById('divStudentInterface');
    const divStudentProfile = document.getElementById('divStudentProfile');
    divStudentInterface.style.display = 'none';
    divStudentProfile.style.display = 'block';
});

