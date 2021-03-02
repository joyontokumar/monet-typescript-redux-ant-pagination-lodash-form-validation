import React from 'react';
import { useForm } from "react-hook-form";
const FormHook = () =>{
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hook-form-area">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="single-form">
                    <input type="text" name="firstname" placeholder="firstname" ref={register({ required: true, minLength: 6 })}/>
                    {errors.firstname && "First Name must be less than 6 character"}
                </div>
                <div className="single-form">
                    <input type="text" name="lastname" placeholder="lastname" ref={register}/>
                </div>
                <div className="single-form">
                    <select name="gender" id="" ref={register}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="single-form">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default FormHook
