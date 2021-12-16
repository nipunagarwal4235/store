import React from 'react';
import './Home.css'

const Home = () => {

    const createBill = () => {

    }
    const addNewItem = () => {
        
    }
    const addNewClient = () => {
        
    }
    return (
        <div>
        <div className="container">
            <button className="btn" onClick={createBill}>New Bill</button>
            <br></br>
            <button className="btn" onClick={addNewItem}>Add New Item</button>
            <br></br>
            <button className="btn" onClick={addNewClient}>Add New Client</button>
            <br></br>
        </div>
        
        </div>
    )
}

export default Home
