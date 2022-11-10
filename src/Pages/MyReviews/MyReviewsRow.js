import { FaStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewsRow = ({ review, time, handleDelete, handleUpdate }) => {
  const { customer, email, message, photoUrl, _id } = review;

  return (
    <div className="flex flex-col gap-10">
      <div className="card lg:card-side bg-base-100 border-b rounded-none  w-4/5  mx-auto flex lg:flex-row">
        <figure className="lg:w-1/3   p-5 my-auto" style={{ width: "140px", height: "140px" }}>
          {photoUrl ? (
            <img src={photoUrl} style={{ width: "100%", height: "100%" }} className="rounded-full" alt="Album" />
          ) : (
            <FaUserCircle style={{ width: "100%", height: "100%" }} className="rounded-full" />
          )}
        </figure>
        <div className=" card-body p-4   flex flex-col justify-center  m-4">
          <div className=" flex flex-row    m-0">
            <small className="font-semibold">Ratings: </small>
            <FaStar className=" text-1xl   text-lg-1xl text-yellow-400 mx-1"></FaStar>
            <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
            <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
            <FaStar className="text-1xl text-yellow-400 mx-1"></FaStar>
            <FaStarHalfAlt className="text-1xl text-yellow-400 mx-2"></FaStarHalfAlt>
            <small className="font-bold mx-2"> (5)</small>
          </div>
          <p> "{message}"</p>
          <h2 className=" text-zinc-400 card-title">By {customer}</h2>
          <p className="text-zinc-400">{time}</p>
        </div>
        <button className="btn btn-ghost" onClick={() => handleDelete(_id)}>
          Delete
        </button>
        <Link to="/reviewsUpdate" className="btn btn-ghost">
          Update
        </Link>
      </div>
    </div>
  );
};

export default MyReviewsRow;
