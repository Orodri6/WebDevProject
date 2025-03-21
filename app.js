$('#btnLogin').on('click', function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    let strEmail = $('#txtLoginEmail').val()
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

$('#btnSwapRegister').on('click', function(){
    $('#frmLogin').slideUp(function(){
        $('#frmReg').slideDown()
    })
})

$('#btnSwapLogin').on('click', function(){
    $('#frmReg').slideUp(function(){
        $('#frmLogin').slideDown()
    })
})