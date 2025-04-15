//Function validates the login form
$('#btnLogin').on('click', function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strEmail = $('#txtLoginUsername').val()
    let strPassword = $('#txtLoginPassword').val()

    let blnError = false
    let strMessage = ''

    if(!regEmail.test(strEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Your Email must be in the correct format.</p>'
    }

    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Your password must be at least a character.</p>'
    }

    if(blnError == true){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    }

    if(blnError == false){
        Swal.fire({
            title: "You have submitted your request!",
            html: strMessage,
            icon: "success"
        });
    }
})

//Function validates the registration form
$('#btnRegister').on('click', function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strFirstName = $('#txtFirstName').val()
    let strLastName = $('#txtLastName').val()
    let strEmail = $('#txtUsername').val()
    let strPassword = $('#txtPassword').val()

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

    if(blnError == false){
        Swal.fire({
            title: "Registration Successful!",
            html: strMessage,
            icon: "success"
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
    $('#frmTeacherLogin').slideUp(function(){
        $('#divTeacherInterface').css('display', 'block')
    })
})

//Function to go to User Interface
$('#btnTeacherRegister').on('click', function(){
    $('#frmTeacherLogin').slideUp(function(){
        $('#frmTeacherRegister').slideDown()
    })
})

//Function to go to Teacher login by clicking register
$('#btnTeacherRegistered').on('click', function(){
    $('#frmTeacherRegister').slideUp(function(){
        $('#frmTeacherLogin').slideDown()
    })
})

//Function to go to Teacher login by clicking login
$('#btnTeacherSwapLogin').on('click', function(){
    $('#frmTeacherRegister').slideUp(function(){
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

//Function to go to Teacher Interface
$('#btnStudentLogin').on('click', function(){
    $('#frmStudentLogin').slideUp(function(){
        $('#divStudentInterface').slideDown()
    })
})

//Function to go to User Interface
$('#btnStudentRegister').on('click', function(){
    $('#frmStudentLogin').slideUp(function(){
        $('#frmStudentRegister').slideDown()
    })
})

//Function to go to Student login by clicking register
$('#btnStudentRegistered').on('click', function(){
    $('#frmStudentRegister').slideUp(function(){
        $('#frmStudentLogin').slideDown()
    })
})

//Function to go to Student login by clicking login
$('#btnStudentSwapLogin').on('click', function(){
    $('#frmStudentRegister').slideUp(function(){
        $('#frmStudentLogin').slideDown()
    })
})