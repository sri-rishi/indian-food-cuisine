import React, { useState } from "react";
import "./styles.css";

var stateList = {
  Rajsthan: [
    {
      name: "Dal Bati Churma",
      image: "images/dal-bati.jpg"
    },
    {
      name: "Gatte ki Sabji",
      image: "images/gatte-ki.jpg"
    },
    {
      name: "Ghevar",
      image: "images/ghevar.jpg"
    }
  ],
  Karnatak: [
    {
      name: "Mysore Pak",
      image: "images/maysore-pak.jpg"
    },
    {
      name: "Maddur Vada",
      image: "images/maddur-vada.jpg"
    },
    {
      name: "Dharwad Peda",
      image: "images/dharwad-peda.jpg"
    }
  ],
  Gujrat: [
    {
      name: "Muthia",
      image: "images/Muthia.jpeg"
    },
    {
      name: "Dhokla",
      image: "images/dhokla.jpg"
    },
    {
      name: "Dabeli",
      image: "images/dabeli.jpg"
    }
  ],
  Punjab: [
    {
      name: "Tandoori Chicken",
      image: "images/tandoori-chicken.webp"
    },
    {
      name: "Dal Makhani",
      image: "images/dal-makhani.jpg"
    },
    {
      name: "Palak Paneer",
      image: "images/palak-paneer.jpg"
    }
  ],
  Bengal: [
    {
      name: "Prawn Malaikari",
      image: "images/pawn-curry.jpg"
    },
    {
      name: "Bhapa Ilish",
      image: "images/bhapa-ilish.jpg"
    },
    {
      name: "Mishti Pulao",
      image: "images/misthi-pulao.jpg"
    }
  ]
};
var stateToSee = Object.keys(stateList);
export default function App() {
  var [selectedState, setState] = useState("Rajsthan");

  const stateClickHandeler = (state) => setState(state);

  return (
    <div className="App">
      <div>
        <header>Indian Food cuisine</header>
      </div>
      <div style={{ margin: "1rem", color: "#ec524b", fontSize: "20px" }}>
        Enjoy the best food when you are in these city.{" "}
      </div>
      <div className="class-btn">
        {stateToSee.map((state) => (
          <button
            style={{
              padding: "10px 25px",
              margin: "auto 0.5rem",
              backgroundColor: "#ffaa71",
              borderStyle: "none",
              borderRadius: "8px",
              fontSize: "15px",
              color: "white",
              fontFamily: "'Kaushan Script', cursive"
            }}
            onClick={() => stateClickHandeler(state)}
          >
            {state}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {stateList[selectedState].map(({ name, image }) => (
            <li style={{ display: "inline" }} key={name}>
              {" "}
              <div className="food-data">
                <div className="food-name" style={{ fontSize: "larger" }}>
                  {" "}
                  {name}{" "}
                </div>
                <img key={image} src={image} alt="food" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
