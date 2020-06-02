export default function validate(values) {
    console.log("Validate function")
    console.log(values.userName, values.password)
    let errors = {};

    let emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let passregex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/

    if (!values.userName && !values.password) {
        errors.userName = "EmailId is required"
        errors.password = "Password is required"
    }

    else if (!values.userName) {
        errors.userName = "EmailId is required"


    }
    else if (!emailregex.test(values.userName)) {
        console.log("inside invalid email")
        errors.userName = "Invalid email address"
    }
    else if (!values.password) {
        errors.password = "Password is rquired"

    }
    else if (!passregex.test(values.password)) {
        console.log("inside invalid password")
        errors.password = "Invalid Password"
    }





    return errors
}