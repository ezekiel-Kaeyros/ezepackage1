import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useKeycloakLogout from '../hooks/useLogout';

const Protected = () => {
  const isRun = useRef(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // if (!Token) return;
    if (isRun.current) return;

    isRun.current = true;
    // console.log("Token Here Is: ", Token);

    // const config = {
    //   headers: {
    //     authorization: `Bearer ${Token}`,
    //   },
    // };

    // axios.get('http://localhost:8000/api-test/menu-items', config)
    //   .then(res => {
    //     console.log("Data");const mongoose = require('mongoose');

    //     const User = new mongoose.Schema(
    //         {
    //             email: {
    //                 type: String,
    //                 required: true,
    //                 unique: true
    //             },
    //             password: {
    //                 type: String,
    //                 required: true
    //             },
    //             quote: {
    //                 type: String,
    //                 required: false
    //             }
    //         },
    //         {
    //             collection: 'user-data'
    //         }
    //     )
        
    //     const model = mongoose.model('UserData', User)
        
    //     module.exports = model
    //     console.log(res.data);
    //     setData(res.data);
    //   })
    //   .catch(err => console.error(err));

  }); // Empty dependency array to run once after mounting

  // const handleLogout = () => {
  //   useKeycloakLogout(); // Call the useKeycloakLogout hook when the logout button is clicked
  // };

  return (
    <div>
      {/* {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No menu items available</div>
      )}
      <button onClick={handleLogout}>Logout</button> */}
      <h1>HERE</h1>
      <button>Logout</button>
    </div>
  );
};

export default Protected;
