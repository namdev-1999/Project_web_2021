"use strict";
$(document).ready(function () {
    $("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_minimal-yellow',
        radioClass: 'iradio_minimal-yellow'
    });
    $("#register").bootstrapValidator({
        excluded: [':disabled'],

        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    },
                    remote: {
                        url: '/api/checkEmail/',
                        message: 'The email has registered. Please login',
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: 'Name is required and cannot be empty'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Phone number is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[0-9\-\+]{9,15}$/, //TODO!!
                        message: 'Enter valid phone number'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,
                        message: 'The password must have at least 8 characters, at least one letter, one number and one special character'
                    },
                    stringLength: {
                        min: 8
                    }
                }
            },
            term: {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: 'The Terms and Conditions is required'
                    }
                }
            }
        }
    });

})