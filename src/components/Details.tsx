import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TrackDetail } from "./Interfaces/index";

function Details() {
  const params = useParams();
  const [trackDetails, setTrackDetails] = useState<TrackDetail[] | null>(null);
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
        setTrackDetails(data);
        console.log(data);
      } else {
        console.log("fetch single data error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return trackDetails ? (
    <div
      className="d-flex justify-content-center align-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h4>{trackDetails.disk_number}</h4>
      </div>
    </div>
  ) : null;
}

export default Details;
