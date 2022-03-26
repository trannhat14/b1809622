const mongoose = require('mongoose');
var validator = require("email-validator");

var employeeSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: 'This field is required'
    },
    ngaysinh: {
        type: String
    },
    gioitinh: {
        type: String
    },
    email: {
        type: String
    },
    sdt: {
        type: String
    },
    quequan: {
        type: String
    }
})

// custom validation for email

employeeSchema.path('email').validate((val) => {
    return validator.validate(val);
}, 'Invalid Email');

mongoose.model('Employee', employeeSchema);