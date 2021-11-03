import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Card() {
  const [cities, setCity] = useState([
    {
      id: 1,
      name: "riyadh",
      img: "https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010",
    },
    {
      id: 2,
      name: "tokyo",
      img: "https://www.urtrips.com/wp-content/uploads/2019/03/Where-is-Tokyo-2.jpg",
    },
    {
      id: 3,
      name: "new york",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmpireStateNewYokCity.jpg/1200px-EmpireStateNewYokCity.jpg",
    },
  ]);

  const index = useParams().id;
  const f = cities.find((item) => {
    return item.id === Number(index);
  });

  return (
    <div>
      <h1>{f.name} </h1>
      <img src={f.img} alt={f.name} />
    </div>
  );
}
