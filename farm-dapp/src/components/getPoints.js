import React, { useState } from 'react';
import axios from 'axios';

const GetPoints = () => {
    const [pointsId, setPointsId] = useState('');
    const [points, setPoints] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/getPoints/${pointsId}`);
            setPoints(response.data);
        } catch (error) {
            console.error('Error getting points:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Points ID:
                    <input type="number" value={pointsId} onChange={(e) => setPointsId(e.target.value)} required />
                </label>
                <button type="submit">Get Points</button>
            </form>
            {points && (
                <div>
                    <h2>Points Details</h2>
                    <p>ID: {points[0]}</p>
                    <p>Farmer: {points[1]}</p>
                    <p>Amount: {points[2]}</p>
                    <p>Redemption Status: {points[3]}</p>
                </div>
            )}
        </div>
    );
};

export default GetPoints;