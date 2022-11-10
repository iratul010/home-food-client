import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ReviewsUpdate = () => {
  const { user } = useContext(AuthContext);
  const storeUser = useLoaderData();
  console.log(storeUser);
  //   const updateUserReviews = (e) => {
  //     e.preventDefault();
  // const form = e.target;
  // const name = `${form.firstName.value} ${form.lastName.value}`;
  // const email = form?.email.value || "unregistered";
  // const message = form.message.value;
  // const photoUrl = form.photo.value;
  // const reviewInformation = {
  //   serviceName: ServiceName,
  //   customer: name,

  //   photoUrl,
  //   message,
  // };
  // fetch(`http://localhost:5000/reviews/${_id}`, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(user),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
  //   };
  return (
    <div className="form-control my-5">
      <form onSubmit="{updateUserReviews}">
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

export default ReviewsUpdate;
