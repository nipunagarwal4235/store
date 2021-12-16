import React from 'react'

const NewClient = () => {

    const displayClientList = () =>{
        
    }
    return (
        <div>
            <form>
            <label>
              Name:
              <input type="text" name="name" placeholder="Item Name...."/>
            </label>
            <br></br>
            <label>
              GSTIN
              <input type="text" name="name" placeholder="Price...."/>
            </label>
            <br></br>
            <label>
              Address
              <input type="text" name="name" placeholder="Price...."/>
            </label>
            <br></br>
            <label>
              Contact Number
              <input type="number" name="name" placeholder="Price...."/>
            </label>
            <br></br>
            <input type="submit" value="Submit"/>
          </form>
          <button onClick={displayClientList}>Display List</button>
        </div>
    )
}

export default NewClient;
