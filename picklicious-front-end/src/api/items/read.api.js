import { getItem } from "../../js/storage.utils.js";

const read = async () => {
  const token = getItem("token");

  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: token,
    },
  };

  try {
    const response = await fetch(`http://localhost:7001/items/readAll`, config);
    const result = await response.json();

    if (!result || !result.items) {
     
      return null;
    } else {
      return result.items;
    }
  } catch (e) {
    console.error("Problem with request : ", e.message);
    return null;
  }
};
export default read;