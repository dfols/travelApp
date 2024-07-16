import axios from "axios";
import { useState } from "react";


const [customerData, setCustomersData] = useState();

export const getCustomersData = () => {
  axios
    .get(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem`)
    .then((data) => console.log(data.data))
    .then((data) => setCustomersData(data))
    .catch((error) => console.log(error));
};



// export const setCustomerData = ({ id, value }) => {
//   axios
//     .put("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
//     .then((data) => console.log(data.data))
//     .then((data) => setCustomersData(data))
//     .catch((error) => console.log(error));
// };
