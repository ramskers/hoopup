import React, { useState } from "react";

const Table = ({ data }) => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    //Prevents count to decrease below '0'
    if (counter > 0) {
      // Counter state is decremented
      setCounter(counter - 1);
    }
  };

  return (
    <table>
      <tbody>
        <tr className="table-header">
          <th>Name</th>
          <th>Address</th>
          <th>Type</th>
          <th className="court-checkin">Check-In's</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <a
                className="address-link"
                href="https://maps.google.com/maps/search/tampa"
              >
                {item.address}
              </a>
            </td>
            <td className="court-type">{item.type}</td>
            <td className="court-checkin" style={{ fontSize: "18px" }}>
              <button
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                onClick={handleClick2}
              >
                -
              </button>
              {counter}
              <button
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                buttonColor="#008000"
                onClick={handleClick1}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
