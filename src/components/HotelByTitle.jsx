import useFetch from "../useFetch";
const HotelByTitle = ({ hotelName }) => {
  const { data, loading, error } = useFetch(
    `https://hotel-management-api-alpha.vercel.app/hotels/${hotelName}`
  );
  return data ? (
    <div>
      <h2>{hotelName}</h2>
      <p>
        <strong>Location: </strong> {data?.location}
      </p>
      <p>
        <strong>Rating: </strong> {data.rating}
      </p>
      <p>
        <strong>Price Range: </strong> {data.priceRange}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};
export default HotelByTitle;
