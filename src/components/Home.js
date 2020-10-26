import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import data from "../data/data.json";
import SearchResults from "./SearchResults";
import zIndex from "@material-ui/core/styles/zIndex";

const Home = () => {
  const [locations, setLocal] = useState(null);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState([]);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [city, setCity] = useState("Brisbane, Australia");
  const [topMenu, setMenu] = useState(false);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    getAdultLimit();
  }, []);

  //   useEffect(() => {
  //     getIndex("Brisbane, Australia");
  //   }, [locations]);

  function toggleDrawer() {
    setMenu(!topMenu);
  }

  function getLocal() {
    let x = data.map((local) => local.name);

    setLocal(x);
  }

  function getIndex() {
    let x = locations !== null && locations.findIndex((id) => id === city);

    setIndex(x);
  }

  function getAdultLimit() {
    let x = [];
    data[index].stays.map(
      (item) =>
        item.adults >= adultCount && item.children >= childCount && x.push(item)
    );
    setSearch(x);
  }

  //   console.log(index);
  //   console.log(search);
  console.log(search);

  return (
    <div className="home">
      <Navbar
        locations={locations}
        getAdultLimit={getAdultLimit}
        getIndex={getIndex}
        index={index}
        setAdultCount={setAdultCount}
        setChildCount={setChildCount}
        adultCount={adultCount}
        childCount={childCount}
        setCity={setCity}
        city={city}
        toggleDrawer={toggleDrawer}
        topMenu={topMenu}
      />
      <SearchResults search={search} />
    </div>
  );
};

export default Home;
