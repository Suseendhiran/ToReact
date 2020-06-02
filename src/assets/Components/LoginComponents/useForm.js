import { useState, useEffect } from "react";


const useForm = (callback, validate) => {
    const [values, setValues] = useState({ userName: "", password: "" });
    const [errors, setError] = useState({});
    const [noError, setNoerror] = useState(false);
    const [isSubmitting, setisSubmitting] = useState(false)
    const handleChange = event => {

        console.log(event.target.name)
        console.log(event.target.value)
        setValues({

            ...values,
            [event.target.name]: [event.target.value]
        });
    };

    const handleSubmit = event => {
        event.preventDefault()
        setError(validate(values));
        setisSubmitting(true)

    };
    useEffect(() => {
        if (Object.keys(errors) == 0 && isSubmitting) {
            callback()
            setNoerror(true)
            console.log(noError)
            console.log(isSubmitting)
        }
    }, [errors])
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        noError
    };
};
export default useForm