"use strict";
//icheck js
$(document).ready(function () {
    $('#add_users_form').bootstrapValidator({

        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'User name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The valid email address is required'
                    }
                }
            },
            phone_number: {
                validators: {
                    notEmpty: {
                        message: 'Phone number is required'
                    },
                    regexp: {
                        regexp: /^[0-9\-\+]{9,15}$/,
                        message: 'Enter valid phone number'
                    }
                }
            },

            gender: {
                validators: {
                    notEmpty: {
                        message: 'gender is required'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Address is required'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'City is required'
                    }
                }
            },
            pincode: {
                validators: {
                    notEmpty: {
                        message: 'Pin code number is required'
                    },
                    regexp: {
                        regexp: /^(\+?1-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}$/,
                        message: 'Enter valid Pin code number'
                    }
                }
            }
        }
    })
});

function saveData() {
    var email = $('#mail').val();
    var name = $('#usr_name').val();
    var phone = $('#contact').val();
    var dob = $('#dob').val();
    var role = $('#role').val();
    var id = $('#id').val()

    var obj = {id: id, name: name, phone: phone, email: email, role: role, dob: dob};
    var jsonData = JSON.stringify(obj);
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/users/edit/"+id,
        contentType: "application/json",
        dataType: "json",
        data: jsonData.toString(),
        success: function(response) {
            alert("Updated successfully!");
        },
        error: function(response) {
            alert("Updated unsuccessfully!");
            return;
        }
    });
}

