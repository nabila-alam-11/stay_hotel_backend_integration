import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-management-api-alpha.vercel.app/hotels"
  );
  const [successMessage, setSuccessMessage] = useState("");
  const deleteHandler = async (hotelId) => {
    const response = await fetch(
      `https://hotel-management-api-alpha.vercel.app/hotels/${hotelId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw "Failed to delete hotel.";
    }
    const data = await response.json();
    if (data) {
      setSuccessMessage("Hotel Deleted Successfully!");
      window.location.reload();
    }
  };
  return (
    <div>
      <h2>All Hotels</h2>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}
            <button onClick={() => deleteHandler(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};
export default Hotels;
