import React, { useState } from "react";
import UserDatas from "./UserDatas";

const Index = () => {
  const getData = () => {
    const data = localStorage.getItem("auth");
    if (data) {
      return JSON.parse(localStorage.getItem("auth"));
    } else {
      return [];
    }
  };

  const [alldata, setAlldata] = useState(getData());
  console.log(alldata);

  return alldata.map((data, index) => (
    <UserDatas key={index} name={data.name} email={data.email} />
  ));
};

export default Index;
