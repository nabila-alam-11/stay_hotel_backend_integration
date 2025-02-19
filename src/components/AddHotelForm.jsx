import { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    reviews: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rating"
          ? parseInt(value)
          : value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://hotel-management-api-alpha.vercel.app/hotels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw "Failed to add hotel.";
      }
      const data = await response.json();
      console.log("Added Hotel", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Category: </label>
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={changeHandler}
        >
          <option value="">--- Select Category ---</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label>Location: </label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Rating: </label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Reviews: </label>
        <br />
        <input
          type="text"
          name="reviews"
          value={formData.reviews}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Website: </label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Phone Number: </label>
        <br />
        <input
          type="text"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Check In Time: </label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Check Out Time: </label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          onChange={changeHandler}
          value={formData.checkOutTime}
        />
        <br />
        <br />
        <label>Amenities: </label>
        <br />
        <input
          type="text"
          name="amenities"
          onChange={changeHandler}
          value={formData.amenities}
        />
        <br />
        <br />
        <label>Price Range: </label>
        <br />
        <select
          name="priceRange"
          onChange={changeHandler}
          value={formData.priceRange}
        >
          <option value="">-- Select Option --</option>
          <option value="$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="reservationNeeded"
          id="reservation"
          onChange={changeHandler}
          checked={formData.reservationNeeded}
        />{" "}
        <label htmlFor="reservation">Reservation Nedeed </label>
        <br />
        <br />
        <input
          type="checkbox"
          id="parking"
          name="isParkingAvailable"
          onChange={changeHandler}
          checked={formData.isParkingAvailable}
        />
        <label htmlFor="parking">Parking Available </label>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={formData.isWifiAvailable}
          id="wifi"
          name="isWifiAvailable"
        />
        <label htmlFor="wifi">Wifi Available</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="pool"
          name="isPoolAvailable"
          onChange={changeHandler}
          checked={formData.isPoolAvailable}
        />
        <label htmlFor="pool">Pool Available</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="spa"
          onChange={changeHandler}
          checked={formData.isSpaAvailable}
          name="isSpaAvailable"
        />
        <label htmlFor="spa">Spa Available</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="restaurant"
          name="isRestaurantAvailable"
          onChange={changeHandler}
          checked={formData.isRestaurantAvailable}
        />
        <label htmlFor="restaurant">Restaurant Available</label>
        <br />
        <br />
        <label>Photos: </label>
        <br />
        <input
          type="text"
          name="photos"
          onChange={changeHandler}
          value={formData.photos}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddHotelForm;
