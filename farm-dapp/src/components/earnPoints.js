import React, { useState } from 'react';
import axios from 'axios';

const EarnPoints = () => {
    const [produceId, setProduceId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/earnPoints', { produceId });
            console.log(response.data);
        } catch (error) {
            console.error('Error earning points:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Produce ID:
                <input type="number" value={produceId} onChange={(e) => setProduceId(e.target.value)} required />
            </label>
            <button type="submit">Earn Points</button>
        </form>
    );
};

export default EarnPoints;