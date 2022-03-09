import React, { useState, useEffect } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import SingleData from "./SingleData";
import { Track } from "./Interfaces/index";

function MyMain() {
  const [value, setValue] = useState("eminem");
  const [musics, setMusics] = useState<Track[]>([]);
  const fetchData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + value
      );
      if (res.ok) {
        let data = await res.json();
        setMusics(data.data);
        console.log(data);
      } else {
        console.log("fetch data error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Form className="d-flex m-5 justify-content-center">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 shadow-none"
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "200px" }}
        />
        <Button
          className="shadow-none"
          variant="outline-success"
          onClick={fetchData}
        >
          Search
        </Button>
      </Form>
      <div>
        {musics.map((music, i) => {
          return <SingleData music={music} key={music.id} />;
        })}
      </div>
    </div>
  );
}

export default MyMain;
