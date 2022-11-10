import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddComments = ({ id, serviceName }) => {
  console.log(id, serviceName);
  const { user } = useContext(AuthContext);
  console.log(user);
  const addToComments = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = form?.email.value || "unregistered";
    const message = form.message.value;
    const photoUrl = form.photo.value;
    const reviewInformation = {
      service: id,
      serviceName: serviceName,
      customer: name,
      email,
      photoUrl,
      message,
    };
    console.log(reviewInformation);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          return alert("Your Comment Is SuccessFully Added");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="form-control my-5">
      <form onSubmit={addToComments}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" name="firstName" className="input input-bordered w-full" required />
          <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered w-full" required />
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <textarea
          name="message"
          className="textarea textarea-bordered h-24 my-3 "
          style={{ width: "100%" }}
          st
          placeholder="enter comment"
        ></textarea>

        <div className=" text-end w-2/3  mx-auto">
          <button className="btn bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddComments;
