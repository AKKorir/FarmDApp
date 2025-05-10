import React, { useState } from 'react';
import axios from 'axios';

const GetJob = () => {
    const [jobId, setJobId] = useState('');
    const [job, setJob] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/getJob/${jobId}`);
            setJob(response.data);
        } catch (error) {
            console.error('Error getting job:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Job ID:
                    <input type="number" value={jobId} onChange={(e) => setJobId(e.target.value)} required />
                </label>
                <button type="submit">Get Job</button>
            </form>
            {job && (
                <div>
                    <h2>Job Details</h2>
                    <p>ID: {job[0]}</p>
                    <p>Sacco: {job[1]}</p>
                    <p>Agent: {job[2]}</p>
                    <p>Status: {job[3]}</p>
                    <p>Ratings: {job[4]}</p>
                </div>
            )}
        </div>
    );
};

export default GetJob;