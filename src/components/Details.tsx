import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist, Album } from "./Interfaces/index";

interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

function Details() {
  const params = useParams();
  const [singleData, setSingleData] = useState<Track[] | null>(null);
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
    <div
      className="d-flex justify-content-center align-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-0">{singleData.title_short}</h6>
        </div>
        <p className="mb-0 ml-5 pl-5">{singleData.duration}</p>
      </div>
    </div>
  );
}

export default Details;
