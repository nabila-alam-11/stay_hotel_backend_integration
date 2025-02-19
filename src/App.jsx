import AddHotelForm from "./components/AddHotelForm";
import HotelByTitle from "./components/HotelByTitle";
import Hotels from "./components/Hotels";

const App = () => {
  return (
    <>
      <AddHotelForm />
      <Hotels />
      <HotelByTitle hotelName="Serenity Lake Resort" />
    </>
  );
};
export default App;
