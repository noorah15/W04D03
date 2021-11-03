import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function Cards() {
  const [cities, setCity] = useState([
    {
      id: 1,
      name: "riyadh",
      img: "https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010",
      fav: "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg",
    },
    {
      id: 2,
      name: "tokyo",
      img: "https://www.urtrips.com/wp-content/uploads/2019/03/Where-is-Tokyo-2.jpg",
      fav: "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg",
    },
    {
      id: 3,
      name: "new york",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmpireStateNewYokCity.jpg/1200px-EmpireStateNewYokCity.jpg",
      fav: "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg",
    },
  ]);

  let history = useHistory();

  const viewCardPage = (id) => {
    //console.log(id);
    history.push(`/card/${id}`);
  };

  const setFav = (id) => {
    //https://icon-library.com/images/stars-icon-png/stars-icon-png-11.jpg
    const newCities = cities.map((item) => {
      if (item.id === id) {
        if (
          item.fav ===
          "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg"
        )
          item.fav =
            "https://icon-library.com/images/stars-icon-png/stars-icon-png-11.jpg";
        else
          item.fav =
            "https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-star-vector-icon-png-image_355829.jpg";
      }
      return item;
    });

    setCity(newCities);
  };

  return (
    <>
      <button>Show favorite only </button>
      <div className="cards">
        {cities.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h2
                key={item.id}
                onClick={() => {
                  viewCardPage(item.id);
                }}
              >
                {item.name}
              </h2>
              <img
                src={item.img}
                alt={item.name}
                className="img1"
                onClick={() => {
                  viewCardPage(item.id);
                }}
              />
              <button
                onClick={() => {
                  setFav(item.id);
                }}
              >
                <img src={item.fav} alt="fav icon" className="favicon" />{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
