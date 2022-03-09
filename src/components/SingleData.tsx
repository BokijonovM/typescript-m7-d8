import React from "react";
import { Track } from "./Interfaces/index";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface MusicDetailProps {
  music: Track;
}

function SingleData({ music }: MusicDetailProps) {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        className="d-flex justify-content-between align-items-center px-3 py-1 my-1 singleData-div"
        style={{ width: "50vw" }}
        onClick={() => navigate(`/${music.id}`)}
      >
        <div>
          <h6 style={{ textAlign: "start" }} className="mb-0">
            {music.title_short}
          </h6>
          <p
            style={{ textAlign: "start", fontSize: "14px" }}
            className="mb-0 text-muted"
          >
            {music.artist.name}
          </p>
        </div>
        <p className="mb-0">{music.duration}</p>
      </div>
    </div>
  );
}

export default SingleData;
