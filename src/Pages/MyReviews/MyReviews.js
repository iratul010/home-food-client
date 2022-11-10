import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";
const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const time = user.metadata.lastSignInTime;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => {
        console.error(err);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You remove this Comment?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Removed successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Your Orders: {"orders".length}</h2>
      <div className=" w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>All Reviews :{reviews.length}</th>
            </tr>
          </thead>
          <tbody>
            {
              //review part
              reviews.map((review) => (
                <MyReviewsRow key={review._id} review={review} time={time} handleDelete={handleDelete}></MyReviewsRow>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
