import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddComments = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const addToComments = (e) => {
    e.preventDefault();
    const comment = e.target;
    comment.reset();
  };
  return (
    <div className="form-control">
      <form onSubmit={addToComments}>
        <div className="mx-auto w-2/3">
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 "
            style={{ width: "100%" }}
            st
            placeholder="enter comment"
          ></textarea>
        </div>
        <div className=" text-end w-2/3  mx-auto">
          <button className="btn bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddComments;
