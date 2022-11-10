import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsRow from "./MyReviewsRow";
const MyReviews = () => {
  useTitle("Reviews");
  const { user, logOut } = useContext(AuthContext);

  const time = user.metadata.lastSignInTime;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("homeFood-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => {
        console.error(err);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You remove this Comment?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("homeFood-token")}`,
        },
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
      <div className=" w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>All Reviews </th>
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
