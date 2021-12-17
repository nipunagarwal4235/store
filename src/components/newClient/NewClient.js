import React, { useState } from "react";
import DisplayClientList from "../DisplayClientList/DisplayClientList";

const NewClient = () => {
  const [name, setname] = useState("");
  const [gstin, setgstin] = useState("");
  const [add, setadd] = useState("");
  const [contact, setcontact] = useState();
  const [arr, setarr] = useState([]);
  const displayClientList = () => {};

  const inputNameHandler = (event) => {
    setname(event.target.value);
    console.log(name);
  };
  const inputGstinHandler = (event) => {
    setgstin(event.target.value);
    console.log(gstin);
  };
  const inputAddHandler = (event) => {
    setadd(event.target.value);
    console.log(add);
  };
  const inputContactHandler = (event) => {
    setcontact(event.target.value);
    console.log(contact);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setarr([name, gstin, add, contact]);
    console.log(arr);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            onChange={inputNameHandler}
            placeholder="Item Name...."
          />
        </label>
        <br></br>
        <label>
          GSTIN
          <input
            type="text"
            onChange={inputGstinHandler}
            placeholder="GSTIN...."
          />
        </label>
        <br></br>
        <label>
          Address
          <input
            type="text"
            onChange={inputAddHandler}
            placeholder="Address...."
          />
        </label>
        <br></br>
        <label>
          Contact Number
          <input
            type="number"
            onChange={inputContactHandler}
            placeholder="Contact Number...."
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={formSubmitHandler} />
      </form>
      <button onClick={displayClientList}>Display List</button>
      <DisplayClientList></DisplayClientList>
    </div>
  );
};

export default NewClient;
