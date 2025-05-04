// Function validates the teacher registration form
document.getElementById('btnTeacherRegistered').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let strFirstName = document.getElementById('txtTeacherRegisterFirstName').value;
    let strLastName = document.getElementById('txtTeacherRegisterLastName').value;
    let strEmail = document.getElementById('txtTeacherRegisterUsername').value;
    let strPassword = document.getElementById('txtTeacherRegisterPassword').value;

    let blnError = false;
    let strMessage = '';

    if(strFirstName.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid first name.</p>';
    }

    if(strLastName.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid last name.</p>';
    }

    if(!regEmail.test(strEmail)) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid email.</p>';
    }

    if(strPassword.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid password.</p>';
    }

    if(blnError) {
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
            const teacherRegister = document.getElementById('frmTeacherRegister');
            const teacherLogin = document.getElementById('frmTeacherLogin');
            
            teacherRegister.style.display = 'none';
            teacherLogin.style.display = 'block';

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register', {
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
            .catch(error => console.error('Error', error));
        });
    }
});

// Function validates the student registration form
document.getElementById('btnStudentRegistered').addEventListener('click', function() {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let strFirstName = document.getElementById('txtStudentRegisterFirstName').value;
    let strLastName = document.getElementById('txtStudentRegisterLastName').value;
    let strEmail = document.getElementById('txtStudentRegisterUsername').value;
    let strPassword = document.getElementById('txtStudentRegisterPassword').value;

    let blnError = false;
    let strMessage = '';

    if(strFirstName.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid first name.</p>';
    }

    if(strLastName.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid last name.</p>';
    }

    if(!regEmail.test(strEmail)) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid email.</p>';
    }

    if(strPassword.length < 1) {
        blnError = true;
        strMessage += '<p class="mb-0 mt-0">Please enter a valid password.</p>';
    }

    if(blnError) {
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
            const studentRegister = document.getElementById('frmStudentRegister');
            const studentLogin = document.getElementById('frmStudentLogin');
            
            studentRegister.style.display = 'none';
            studentLogin.style.display = 'block';

            // If no errors, send the data to the server
            fetch('http://127.0.0.1:8000/register', {
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
            .catch(error => console.error('Error', error));
        });
    }
});

// Teacher Buttons

// Function to swap from login to Teacher login form
document.getElementById('btnChoTeacher').addEventListener('click', function() {
    const loginForm = document.getElementById('frmLogin');
    const teacherLogin = document.getElementById('frmTeacherLogin');
    
    loginForm.style.display = 'none';
    teacherLogin.style.display = 'block';
});

// Function to swap from Teacher login back to home
document.getElementById('btnTeacherGoHome').addEventListener('click', function() {
    const teacherLogin = document.getElementById('frmTeacherLogin');
    const loginForm = document.getElementById('frmLogin');
    
    teacherLogin.style.display = 'none';
    loginForm.style.display = 'block';
});

// Function to go to Teacher Interface
document.getElementById('btnTeacherLogin').addEventListener('click', function() {
    const strEmail = document.getElementById('txtTeacherLoginUsername').value.trim();
    const strPassword = document.getElementById('txtTeacherLoginPassword').value.trim();

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
                    // Hide the login form
                    document.getElementById('frmTeacherLogin').style.display = 'none';
                    
                    // Show the teacher interface
                    const teacherInterface = document.getElementById('frmTeacherInterface');
                    teacherInterface.style.display = 'block';
                    
                    // Update the welcome message with the user's name
                    const welcomeMessage = teacherInterface.querySelector('.navbar-brand');
                    if (welcomeMessage) {
                        welcomeMessage.textContent = `${data.firstName}'s Dashboard`;
                    }
                    
                    // Set up logout functionality
                    const logoutButton = teacherInterface.querySelector('#btnLogout');
                    if (logoutButton) {
                        logoutButton.addEventListener('click', function(e) {
                            e.preventDefault();
                            // Hide teacher interface
                            teacherInterface.style.display = 'none';
                            // Show login form
                            document.getElementById('frmTeacherLogin').style.display = 'block';
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Login Failed!",
                    text: "Invalid email or password",
                    icon: "error"
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: "Error!",
                text: "An error occurred during login",
                icon: "error"
            });
        });
    }
});

// Function to go to User Interface
document.getElementById('btnTeacherRegister').addEventListener('click', function() {
    const teacherLogin = document.getElementById('frmTeacherLogin');
    const teacherRegister = document.getElementById('frmTeacherRegister');
    
    teacherLogin.style.display = 'none';
    teacherRegister.style.display = 'block';
});

// Function to go to Teacher login by clicking login
document.getElementById('btnTeacherSwapLogin').addEventListener('click', function() {
    const teacherRegister = document.getElementById('frmTeacherRegister');
    const teacherLogin = document.getElementById('frmTeacherLogin');
    
    teacherRegister.style.display = 'none';
    teacherLogin.style.display = 'block';
});

// Function to go to Teacher Profile
document.getElementById('btnTeacherProfile').addEventListener('click', function() {
    const teacherInterface = document.getElementById('frmTeacherInterface');
    const teacherProfile = document.getElementById('divTeacherProfile');
    
    teacherInterface.style.display = 'none';
    teacherProfile.style.display = 'block';
});

// Function to go to Teacher Login from Profile
document.getElementById('btnTeacherLogout').addEventListener('click', function() {
    const teacherProfile = document.getElementById('divTeacherProfile');
    const teacherLogin = document.getElementById('frmTeacherLogin');
    
    teacherProfile.style.display = 'none';
    teacherLogin.style.display = 'block';
});

// Student Buttons

// Function to swap from registration to Student login form
document.getElementById('btnChoStudent').addEventListener('click', function() {
    const loginForm = document.getElementById('frmLogin');
    const studentLogin = document.getElementById('frmStudentLogin');
    
    loginForm.style.display = 'none';
    studentLogin.style.display = 'block';
});

// Function to swap from Student login back to home
document.getElementById('btnStudentGoHome').addEventListener('click', function() {
    const studentLogin = document.getElementById('frmStudentLogin');
    const loginForm = document.getElementById('frmLogin');
    
    studentLogin.style.display = 'none';
    loginForm.style.display = 'block';
});

// Function to hide all teacher cards
function hideAllTeacherCards() {
    const cards = [
        'cardViewCourses',
        'cardCreateTeam',
        'cardCreateReview',
        'cardScheduleReview',
        'cardViewReviews',
        'cardViewReports',
        'cardCreateCourse'
    ];
    
    cards.forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) card.style.display = 'none';
    });
}

// View Courses
document.getElementById('btnViewCourses').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardViewCourses').style.display = 'block';
});

// Create Team
document.getElementById('btnCreateTeam').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardCreateTeam').style.display = 'block';
});

// Create Review
document.getElementById('btnCreateReview').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardCreateReview').style.display = 'block';
});

// Schedule Review
document.getElementById('btnScheduleReview').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardScheduleReview').style.display = 'block';
});

// View Reviews
document.getElementById('btnViewReviews').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardViewReviews').style.display = 'block';
});

// View Reports
document.getElementById('btnViewReports').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardViewReports').style.display = 'block';
});

// Create Course (from header)
document.getElementById('btnCreateCourse').addEventListener('click', function() {
    hideAllTeacherCards();
    document.getElementById('cardCreateCourse').style.display = 'block';
});

// Show View Courses by default when teacher interface is loaded
document.getElementById('btnTeacherLogin').addEventListener('click', function() {
    const teacherLogin = document.getElementById('frmTeacherLogin');
    const teacherInterface = document.getElementById('divTeacherInterface');
    
    teacherLogin.style.display = 'none';
    teacherInterface.style.display = 'block';
    hideAllTeacherCards();
    document.getElementById('cardViewCourses').style.display = 'block';
});

// Create Survey Button Handlers
document.getElementById('btnCreateSurvey').addEventListener('click', function() {
    const createSurveyModal = new bootstrap.Modal(document.getElementById('createSurveyModal'));
    createSurveyModal.show();
});

document.getElementById('btnCreateSurveyCard').addEventListener('click', function() {
    const createSurveyModal = new bootstrap.Modal(document.getElementById('createSurveyModal'));
    createSurveyModal.show();
});

// Add Field Button Handler
document.getElementById('btnAddField').addEventListener('click', function() {
    const addFieldModal = new bootstrap.Modal(document.getElementById('addFieldModal'));
    addFieldModal.show();
});

// Add Group Button Handler
document.getElementById('btnAddGroup').addEventListener('click', function() {
    const addGroupModal = new bootstrap.Modal(document.getElementById('addGroupModal'));
    addGroupModal.show();
});

// Field Type Change Handler
document.getElementById('fieldType').addEventListener('change', function() {
    const optionsContainer = document.getElementById('optionsContainer');
    const fieldType = this.value;
    
    // Show options container for field types that need options
    if (['select', 'multiselect', 'radio', 'checkbox'].includes(fieldType)) {
        optionsContainer.style.display = 'block';
    } else {
        optionsContainer.style.display = 'none';
    }
});

// Save Field Handler
document.getElementById('btnSaveField').addEventListener('click', function() {
    const fieldLabel = document.getElementById('fieldLabel').value;
    const fieldType = document.getElementById('fieldType').value;
    const fieldRequired = document.getElementById('fieldRequired').checked;
    const fieldOptions = document.getElementById('fieldOptions').value;
    
    if (!fieldLabel) {
        Swal.fire({
            title: "Error",
            text: "Please enter a field label",
            icon: "error"
        });
        return;
    }
    
    // Create field HTML based on type
    let fieldHtml = '';
    switch(fieldType) {
        case 'text':
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <input type="text" class="form-control" ${fieldRequired ? 'required' : ''}>
                </div>
            `;
            break;
        case 'textarea':
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <textarea class="form-control" rows="3" ${fieldRequired ? 'required' : ''}></textarea>
                </div>
            `;
            break;
        case 'select':
        case 'multiselect':
            const options = fieldOptions.split('\n').filter(opt => opt.trim());
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <select class="form-select" ${fieldType === 'multiselect' ? 'multiple' : ''} ${fieldRequired ? 'required' : ''}>
                        ${options.map(opt => `<option value="${opt.trim()}">${opt.trim()}</option>`).join('')}
                    </select>
                </div>
            `;
            break;
        case 'radio':
        case 'checkbox':
            const options2 = fieldOptions.split('\n').filter(opt => opt.trim());
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <div class="form-check">
                        ${options2.map(opt => `
                            <input class="form-check-input" type="${fieldType}" name="${fieldLabel}" value="${opt.trim()}" ${fieldRequired ? 'required' : ''}>
                            <label class="form-check-label">${opt.trim()}</label>
                        `).join('<br>')}
                    </div>
                </div>
            `;
            break;
        case 'date':
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <input type="date" class="form-control" ${fieldRequired ? 'required' : ''}>
                </div>
            `;
            break;
        case 'number':
            fieldHtml = `
                <div class="mb-3">
                    <label class="form-label">${fieldLabel}${fieldRequired ? ' *' : ''}</label>
                    <input type="number" class="form-control" ${fieldRequired ? 'required' : ''}>
                </div>
            `;
            break;
    }
    
    // Add field to survey fields container
    document.getElementById('surveyFields').insertAdjacentHTML('beforeend', fieldHtml);
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addFieldModal')).hide();
    document.getElementById('fieldForm').reset();
    document.getElementById('optionsContainer').style.display = 'none';
});

// Save Group Handler
document.getElementById('btnSaveGroup').addEventListener('click', function() {
    const groupName = document.getElementById('groupName').value;
    const groupMembers = document.getElementById('groupMembers').value;
    
    if (!groupName || !groupMembers) {
        Swal.fire({
            title: "Error",
            text: "Please fill in all required fields",
            icon: "error"
        });
        return;
    }
    
    // Add group to groups list
    const groupHtml = `
        <div class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="mb-1">${groupName}</h6>
                    <small>${groupMembers.split('\n').length} members</small>
                </div>
                <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.parentElement.remove()">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('groupsList').insertAdjacentHTML('beforeend', groupHtml);
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addGroupModal')).hide();
    document.getElementById('groupForm').reset();
});

// Save Survey Handler
document.getElementById('btnSaveSurvey').addEventListener('click', function() {
    const courseId = document.getElementById('selectSurveyCourse').value;
    const surveyTitle = document.getElementById('surveyTitle').value;
    const surveyDescription = document.getElementById('surveyDescription').value;
    
    if (!courseId || !surveyTitle) {
        Swal.fire({
            title: "Error",
            text: "Please fill in all required fields",
            icon: "error"
        });
        return;
    }
    
    // Collect all survey fields
    const fields = Array.from(document.getElementById('surveyFields').children).map(field => {
        const label = field.querySelector('label').textContent.replace(' *', '');
        const required = field.querySelector('label').textContent.includes('*');
        const type = field.querySelector('input, select, textarea').type || 
                    field.querySelector('input, select, textarea').tagName.toLowerCase();
        const options = Array.from(field.querySelectorAll('option')).map(opt => opt.value);
        
        return {
            label,
            type,
            required,
            options: options.length ? options : undefined
        };
    });
    
    // Collect all groups
    const groups = Array.from(document.getElementById('groupsList').children).map(group => {
        const name = group.querySelector('h6').textContent;
        const members = group.querySelector('small').textContent.split(' ')[0];
        return { name, members };
    });
    
    // Here you would typically send this data to your backend
    const surveyData = {
        courseId,
        title: surveyTitle,
        description: surveyDescription,
        fields,
        groups
    };
    
    console.log('Survey Data:', surveyData);
    
    // Show success message
    Swal.fire({
        title: "Success!",
        text: "Survey created successfully",
        icon: "success"
    }).then(() => {
        // Close modal and reset form
        bootstrap.Modal.getInstance(document.getElementById('createSurveyModal')).hide();
        document.getElementById('surveyForm').reset();
        document.getElementById('surveyFields').innerHTML = '';
        document.getElementById('groupsList').innerHTML = '';
    });
});


