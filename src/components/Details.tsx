import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Track } from "./Interfaces/index";

function Details() {
  const params = useParams();
  const [singleData, setSingleData] = useState<Track[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/track/" + params.id
      );
      if (res.ok) {
        let data = await res.json();
        setSingleData(data);
        console.log(data);
      } else {
        console.log("fetch single data error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h6>{singleData.title_short}</h6>
    </div>
  );
}

export default Details;
