//Function validates the teacher registration form
$('#btnTeacherRegistered').on('click', function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strFirstName = $('#txtTeacherRegisterFirstName').val()
    let strLastName = $('#txtTeacherRegisterLastName').val()
    let strEmail = $('#txtTeacherRegisterUsername').val()
    let strPassword = $('#txtTeacherRegisterPassword').val()

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
            $('#frmTeacherRegister').slideUp(function () {
                $('#frmTeacherLogin').slideDown();
            });

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register',{
                method: 'POST',
                headers: {"Content-Type": "application/json"}, body:JSON.stringify({email:strEmail,firstName:strFirstName,lastName:strLastName,role:"teacher", password:strPassword})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error',error))
        });
    }
})

//Function validates the student registration form
$('#btnStudentRegistered').on('click', function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strFirstName = $('#txtStudentRegisterFirstName').val()
    let strLastName = $('#txtStudentRegisterLastName').val()
    let strEmail = $('#txtStudentRegisterUsername').val()
    let strPassword = $('#txtStudentRegisterPassword').val()

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
            $('#frmStudentRegister').slideUp(function () {
                $('#frmStudentLogin').slideDown();
            });

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register',{
                method: 'POST',
                headers: {"Content-Type": "application/json"}, body:JSON.stringify({email:strEmail,firstName:strFirstName,lastName:strLastName,role:"student", password:strPassword})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error',error))
        });
    }
})

//Teacher Buttons

//Function to swap from login to Teacher login form
$('#btnChoTeacher').on('click', function(){
    $('#frmLogin').slideUp(function(){
        $('#frmTeacherLogin').slideDown()
    })
})

//Function to swap from Teacher login back to home
$('#btnTeacherGoHome').on('click', function(){
    $('#frmTeacherLogin').slideUp(function(){
        $('#frmLogin').slideDown()
    })
})

//Function to go to Teacher Interface
$('#btnTeacherLogin').on('click', function(){
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
                    $('#frmTeacherLogin').slideUp(function(){
                        $('#divTeacherInterface').css('display', 'block');
                    });
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

//Function to go to User Interface
$('#btnTeacherRegister').on('click', function(){
    $('#frmTeacherLogin').slideUp(function(){
        $('#frmTeacherRegister').slideDown()
    })
})

//Function to go to Teacher login by clicking login
$('#btnTeacherSwapLogin').on('click', function(){
    $('#frmTeacherRegister').slideUp(function(){
        $('#frmTeacherLogin').slideDown()
    })
})

//Function to go to Teacher Profile
$('#btnTeacherProfile').on('click', function(){
    $('#divTeacherInterface').slideUp(function(){
        $('#divTeacherProfile').slideDown()
    })
})

//Function to go to Teacher Login from Profile
$('#btnTeacherLogout').on('click', function(){
    $('#divTeacherProfile').slideUp(function(){
        $('#frmTeacherLogin').slideDown()
    })
})

//Student Buttons

//Function to swap from registration to Student login form
$('#btnChoStudent').on('click', function(){
    $('#frmLogin').slideUp(function(){
        $('#frmStudentLogin').slideDown()
    })
})

//Function to swap from Student login back to home
$('#btnStudentGoHome').on('click', function(){
    $('#frmStudentLogin').slideUp(function(){
        $('#frmLogin').slideDown()
    })
})

//Function to go to Student Interface
$('#btnStudentLogin').on('click', function(){
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
                    $('#frmStudentLogin').slideUp(function(){
                        $('#divStudentInterface').css('display', 'block')
                    })
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
})

//Function to go to User Interface
$('#btnStudentRegister').on('click', function(){
    $('#frmStudentLogin').slideUp(function(){
        $('#frmStudentRegister').slideDown()
    })
})

//Function to go to Student login by clicking login
$('#btnStudentSwapLogin').on('click', function(){
    $('#frmStudentRegister').slideUp(function(){
        $('#frmStudentLogin').slideDown()
    })
})

//Function to go to Student Profile
$('#btnStudentProfile').on('click', function(){
    $('#divStudentInterface').slideUp(function(){
        $('#divStudentProfile').slideDown()
    })
})

//Function to go to Student Login from Profile
$('#btnStudentLogout').on('click', function(){
    $('#divStudentProfile').slideUp(function(){
        $('#frmStudentLogin').slideDown()
    })
})


