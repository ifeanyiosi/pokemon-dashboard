import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [job, setJob] = useState("")
  const [message, setMessage] = useState("")

  let submit = async (e) => {
    e.preventDefault();
    try{
      let res = await
      fetch('https://62823e3c9fac04c65411c0b5.mockapi.io/user',
      {
        method: "POST",
        body: JSON.stringify({
          name:name,
          email: email,
          job: job,
          phone: phone
        }),
      });
      let resJson = await res.json();
      if (res.status ===200){
        setName("");
        setEmail('');
        setPhone('');
        setJob("");
        setMessage("succesful");
      } else {
        setMessage("some error happened");
      }
    } catch (err){
      console.log(err);
    }
      };

      
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit) (submit)}>
      <div >
        <label className="form-label" htmlFor="name">
          Full name
        </label>
        <input
        value={name}
        // onChange = {(e) => setName(e.target.value)}
          className={classNames("form-control", {
            "is-invalid": errors.name,
          })}
          id="name"
          type="text"
          placeholder="Full name"
          {...register("name", {
            required: "This field is required.",
            minLength: {
              value: 3,
              message: "Enter more characters.",
            },
          })}
        />
        {errors.firstname && (
          <div className="invalid-feedback">{errors.firstname.message}</div>
        )}
      </div>

      <div >
        <label className="form-label" htmlFor="job">
          Occupation
        </label>
        <input
        value={job}
        // onChange = {(e) => setJob(e.target.value)}
          className={classNames("form-control", {
            "is-invalid": errors.job,
          })}
          id="job"
          name="job"
          type="text"
          placeholder="job"
          {...register("job", {
            required: "This field is required.",
            minLength: {
              value: 10,
              
            },
          })}
        />
        {errors.job && (
          <div className="invalid-feedback">{errors.job.message}</div>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="phone">
         Phone number
        </label>
        <input
        value={phone}
        // onChange = {(e) => setPhone(e.target.value)}
          className={classNames("form-control", {
            "is-invalid": errors.phone,
          })}
          id="phone"
          name="phone"
          type="number"
          placeholder="phone"
          {...register("phone", {
            required: "This field is required.",
            minLength: {
              value: 10,
              
            },
          })}
        />
        {errors.lastname && (
          <div className="invalid-feedback">{errors.lastname.message}</div>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
        value={email}
        // onChange = {(e) => setEmail(e.target.value)}
          className={classNames("form-control", { "is-invalid": errors.email })}
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      

      
      <button  type="submit">
        Submit
      </button>
      <div className="message">
        {message ? <p>{message}</p> : null}

      </div>
    </form>
  );
};

export default Form;
