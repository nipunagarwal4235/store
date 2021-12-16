import React from 'react';
const NewItem = () => {

    const displayItemList = () =>{
        
    }

    const submitHandler = () => {
    
    };
    return (
      <div>
        <div>
          <form>
            <label>
              Item Name:
              <input type="text" name="name" placeholder="Item Name...."/>
            </label>
            <br></br>
            <label>
              Price:
              <input type="text" name="name" placeholder="Price...."/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={submitHandler()} />
          </form>
          <button onClick={displayItemList}>Display List</button>
          <br></br>
        </div>
        <div></div>
      </div>
    );
}
export default NewItem;


