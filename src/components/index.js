import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup'
import * as yup from 'yup';

let schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.number().required().min(5),
});

const Form = () => {
  const { register, handleSubmit, errors, reset, setError, clearErrors } = useForm({
      resolver: yupResolver(schema)
    })
    console.log('error message', errors);
    const onSubmit = (data) => {
        console.log(data);
        let result = data
        reset(reset)
    }
    return (
        <div className="form-validation">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="single-form-group">
              <input
                type="text"
                className="single-input-field"
                placeholder="Enter First Name"
                ref={register}
                onChange={()=>{
                  setError("username",{
                    type: "manual",
                    message: "Select a nice name"
                  })
                }}
                name="username"
                />
            {errors.username && <p>{errors.username.message}</p>}
                <input
                type="password"
                className="single-input-field"
                placeholder="Enter Password"
                ref={register}
                name="password"
                />
                <p>{errors.password?.message}</p>
            </div>
          <button type="submit" onClick={() => clearErrors(["username", "password"])}>submit</button>
          </form>
        </div>
    )
}

export default Form
