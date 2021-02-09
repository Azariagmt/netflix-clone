import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://xeraone.com/wp-content/uploads/Daredevil-Banner-1024x474.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "This is a test description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non, eius eum aut architecto ab laborum voluptatem, dolorem sapiente in molestias ad sequi, velit deleniti corrupti beatae natus dignissimos. Fugit?",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeButton"></div>
    </header>
  );
}

export default Banner;
