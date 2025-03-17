import axios from "axios";

import { json } from "stream/consumers";

const baseUrl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io";

try {
  // const response = await axios.get(`${baseUrl}/cities`);

  const response = await axios.post(`${baseUrl}/cities`, {
    name: "Blr",
    state: "KA",
    country: "India",
  },{
    headers: {
      "Content-Type": "application/json",
    }
  
  });


  const statusCode = response.status;
  const data = response.data;
  

  console.log("status", statusCode);
  console.log("Data", data);

}
catch (e) {
  console.log("Error" , e);
}

// //JSON Stringification & JSON Parsing

// const data = {
//   name: "Hari",
//   age: 23,
//   city: "India",
// };


// // cosnt jsonStringCustom = `{"name":"Hari","age":23,"city":"India"}`;

// const jsonString = JSON.stringify(data);

// console.log(jsonString);


// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);