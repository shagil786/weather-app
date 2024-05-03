import axios from "axios";

export const getCities = async (searchSchema) =>
  await fetch("./worldcities.json")
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
