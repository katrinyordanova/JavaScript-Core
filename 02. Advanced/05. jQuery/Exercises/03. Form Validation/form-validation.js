//88/100
function validate() {
    function validateUsername(username){
        let usernameRegex = new RegExp(/^[A-Za-z0-9]{3,20}$/);
        return usernameRegex.test(username);
    }

    function validatePassword(password){
        let passwordRegex = new RegExp(/^\w{5,15}$/);
        return passwordRegex.test(password);
    }

    function validateEmail(email){
        let emailRegex = new RegExp(/^.*\@.*\..*$/);
        return emailRegex.test(email);
    }

    let submitBtn = $("#submit");
    submitBtn.on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        let usernameField = $("#username");
        let passwordField = $("#password");
        let confirmPasswordField = $("#confirm-password");
        let emailField = $("#email");
        let companyNumberField = $("#companyNumber");

        let isUsernameValid = validateUsername(usernameField.val());
        if(!isUsernameValid){
            usernameField.attr("style", "");
            usernameField.css("border-color", "red");
        } else {
            usernameField.css("border", "none");
        }

        let doPasswordsMatch = passwordField.val() === confirmPasswordField.val();

        let isPasswordValid = validatePassword(passwordField.val());
        if(!isPasswordValid || !doPasswordsMatch){
            passwordField.attr("style", "");
            passwordField.css("border-color", "red");
        } else {
            passwordField.css("border", "none");
        }

        let isConfirmPasswordValid = validatePassword(confirmPasswordField.val());
        if(!isConfirmPasswordValid || !doPasswordsMatch){
            confirmPasswordField.attr("style", "");
            confirmPasswordField.css("border-color", "red");
        } else {
            confirmPasswordField.css("border", "none");
        }

        let isEmailValid = validateEmail(emailField.val());
        if(!isEmailValid){
            emailField.attr("style", "");
            emailField.css("border-color", "red");
        } else {
            emailField.css("border", "none");
        }

        let isCompanyFieldVisible = $("#companyInfo").css("display") !== "none";
        let isCompanyNumberValid = parseInt(companyNumberField.val()) > 1000 && parseInt(companyNumberField.val()) < 9999;

        if(isCompanyFieldVisible){
            if(isCompanyNumberValid){
                companyNumberField.css("border", "none");
            } else {
                companyNumberField.attr("style", "");
                companyNumberField.css("border-color", "red");
            }
        }

        let validationDiv = $("#valid");

        if(isEmailValid && isConfirmPasswordValid && isPasswordValid && doPasswordsMatch && isUsernameValid){
            if(isCompanyFieldVisible){
                if(isCompanyNumberValid){
                    validationDiv.css("display", "");
                }
                else {
                    validationDiv.css("display", "none");
                }
            } else {
                validationDiv.css("display", "");
            }
        } else {
            validationDiv.css("display", "none");
        }
    });

    $("#company").on("click", function(e){
        let target = e.target;

        let companyInfoField = $("#companyInfo");
        if(target.checked === true){
            $(target).removeAttr("checked");
            companyInfoField.css("display", "none");
        } else {
            $(target).attr("checked", "checked");
            companyInfoField.attr("style", "");
        }
    })
}

//100/100
// function validate() {
//     let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
//     let passwordRegex = /^\w{5,15}$/;
//     let emailRegex = /@.*\./;
//     let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;
//     let allFieldsValid = true;
//
//     $('#company').on('change', showHideCompany);
//
//     $('#submit').on('click', function (ev) {
//         ev.preventDefault();
//
//         checkUsername();
//         checkPassword();
//         checkEmail();
//         checkPass();
//         checkCompanyNumber();
//
//         if (allFieldsValid) {
//             $('#valid').css('display', 'block');
//         } else {
//             $('#valid').css('display', 'none');
//         }
//
//     });
//
//     function showHideCompany() {
//         if ($(this).is(':checked')) {
//             $('#companyInfo').css('display', 'block');
//         } else {
//             $('#companyInfo').css('display', 'none')
//         }
//     }
//
//     function checkUsername() {
//         if ($('#username').val().match(usernameRegex)) {
//             $('#username').css('border', 'none');
//         } else {
//             $('#username').css('border-color', 'red');
//             allFieldsValid = false;
//         }
//     }
//
//     function checkPassword() {
//         if ($('#password').val().match(passwordRegex)) {
//             $('#password').css('border', 'none');
//         } else {
//             $('#password').css('border-color', 'red');
//             allFieldsValid = false;
//         }
//     }
//
//     function checkEmail() {
//         if ($('#email').val().match(emailRegex)) {
//             $('#email').css('border', 'none');
//         } else {
//             $('#email').css('border-color', 'red');
//             allFieldsValid = false;
//         }
//     }
//
//     function checkPass() {
//         if ($('#confirm-password').val().match(passwordRegex) && $('#confirm-password').val().localeCompare($('#password').val()) == 0) {
//             $('#confirm-password').css('border', 'none');
//         } else {
//             $('#confirm-password').css('border-color', 'red');
//             allFieldsValid = false;
//         }
//     }
//
//     function checkCompanyNumber() {
//         if ($('#company').is(':checked')) {
//             if ($('#companyNumber').val().match(companyNumberRegex)) {
//                 $('#companyNumber').css('border', 'none');
//             } else {
//                 $('#companyNumber').css('border-color', 'red');
//                 allFieldsValid = false;
//             }
//         }
//     }
// }
