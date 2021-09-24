import { useState } from "react";
import "./App.css";
import Album from "./components/Album";
import Albums from "./components/Albums";

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      name: "Evolve",
      artist: "Imagine Dragons",
      image: "images/cover1.png",
    },
    {
      id: 2,
      name: "Origins",
      artist: "Imagine Dragons",
      image: "images/cover2.png",
    },
    {
      id: 3,
      name: "A head full of Dreams",
      artist: "Cold Play",
      image: "images/cover3.png",
    },
    {
      id: 4,
      name: "Remember",
      artist: "Hiroyuki Sawano",
      image: "images/cover4.png",
    },
    {
      id: 5,
      name: "Native",
      artist: "One Repubilc",
      image: "images/cover5.png",
    },
  ]);



  let albm1 = {
    name: "Evolve",
    artist: "Imagine Dragons",
    image: "images/cover1.png",
  };

  return (
    <div className="App">
      <Album name={albm1.name} artist={albm1.artist} image={albm1.image} />
      <Albums albumList={albums} />
    </div>
  );
}

export default App;
