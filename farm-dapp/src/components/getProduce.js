import React, { useState } from 'react';
import axios from 'axios';

const GetProduce = () => {
    const [produceId, setProduceId] = useState('');
    const [produce, setProduce] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/getProduce/${produceId}`);
            setProduce(response.data);
        } catch (error) {
            console.error('Error getting produce:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Produce ID:
                    <input type="number" value={produceId} onChange={(e) => setProduceId(e.target.value)} required />
                </label>
                <button type="submit">Get Produce</button>
            </form>
            {produce && (
                <div>
                    <h2>Produce Details</h2>
                    <p>ID: {produce[0]}</p>
                    <p>Farmer: {produce[1]}</p>
                    <p>Details: {produce[2]}</p>
                    <p>Progress: {produce[3]}</p>
                    <p>Verification Status: {produce[4]}</p>
                </div>
            )}
        </div>
    );
};

export default GetProduce;
