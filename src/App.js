import "./App.css";
import Stay from "./windBnb/Stay";
import DisplayCount from "./windBnb/DisplayCount";

const stays = [
  {
    rating: 4.5,
    category: "Entire Apartment ",
    title: "Stylish Appartment in center of the city",
    img: "https://picsum.photos/500/300?random=1",
  },
  {
    rating: 4.25,
    category: "Private Room",
    title: "Cozy and Peaceful",
    img: "https://picsum.photos/500/300?random=2",
  },
  {
    rating: 4.85,
    category: "Entire House",
    title: "Modern Room",
    img: "https://picsum.photos/500/300?random=3",
  },
  {
    rating: 4.54,
    category: "Private Room",
    title: "Modern Apartment",
    img: "https://picsum.photos/500/300?random=4",
  },
];
function App() {
  return (
    <div className="App">
      <div className="flex-container">
        {stays.map((stay, index) => (
          <Stay key={index} stay={stay}></Stay>
        ))}
      </div>
      <DisplayCount></DisplayCount>
    </div>
  );
}

export default App;
