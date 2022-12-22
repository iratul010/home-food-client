import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddComments = ({ id, serviceName }) => {
  const { user, deleteId, setDeleteId } = useContext(AuthContext);
  console.log(user.photoURL);
  const addToComments = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = `${form.firstName.value} ${form.lastName.value}`;
    // const email = form?.email.value || "unregistered";
    // const email = form?.email.value;
    const time = new Date().toLocaleString();

    const exactDate = time.split(",")[0];
    const message = form.message.value;
    console.log(time, exactDate);
    // const photoUrl = form.photo.value;
    console.log(user?.photoURL);
    const reviewInformation = {
      service: id,
      serviceName: serviceName,
      customer: user?.displayName,
      email: user?.email,
      photoUrl: user?.photoURL,
      message,
      time: exactDate,
    };

    console.log(reviewInformation.service);
    //https://home-food-server-app.vercel.app/reviews
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
      <p className="text-start m-0 p-0">Add to Comments:</p>
      <form onSubmit={addToComments}>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
        {/* <input type="text" placeholder="First Name" name="firstName" className="input input-bordered w-full" required /> */}
        {/* <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered w-full" required /> */}
        {/* <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" /> */}
        {/* <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div> */}

        <textarea
          name="message"
          className="textarea textarea-bordered h-24 my-3"
          style={{ width: "100%" }}
          placeholder="enter comment"
        ></textarea>

        <div className="text-end   w-2/3  mx-auto">
          <button className="btn bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddComments;
