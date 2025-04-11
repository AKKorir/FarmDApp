import React, { useState } from 'react';
import axios from 'axios';

const AddProduce = () => {
    const [details, setDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/addProduce', { details });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding produce:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Details:
                <input type="text" value={details} onChange={(e) => setDetails(e.target.value)} required />
            </label>
            <button type="submit">Add Produce</button>
        </form>
    );
};

export default AddProduce;