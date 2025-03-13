import React from "react";
import { useForm } from "react-hook-form";
import "../assets/style.css";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm();
  async function onSubmit(data) {


    //API call simulate
await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("Submiting the form ", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name : </label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length atleast 3" },
            maxLength: 20,
          })}
        ></input>
        {errors.firstName && (
          <p className={errors.firstName ? "msg-error" : ""}>
            {errors.firstName.message}
          </p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name : </label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName", {
            required: true,
            minLength: { value: 3, message: "Min length atleast 3" },
            maxLength: 20,
          })}
        />
        {errors.middleName && (
          <p className={errors.middleName ? "msg-error" : ""}>
            {errors.middleName.message}
          </p>
        )}
      </div>
      <br />
      <div>
        <label>Last Name : </label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            required: true,
            minLength: { value: 3, message: "Min length atleast 3" },
            maxLength: 20,
          })}
        />
        {errors.lastName && (
          <p className={errors.lastName ? "msg-error" : ""}>
            {errors.lastName.message}
          </p>
        )}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ?"Submitting":"Submit"}/>
    </form>
  );
};

export default Form1;
