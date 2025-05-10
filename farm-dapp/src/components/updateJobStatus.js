import React, { useState } from 'react';
import axios from 'axios';

const UpdateJobStatus = () => {
    const [jobId, setJobId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/updateJobStatus', { jobId, status });
            console.log(response.data);
        } catch (error) {
            console.error('Error updating job status:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job ID:
                <input type="number" value={jobId} onChange={(e) => setJobId(e.target.value)} required />
            </label>
            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
            </label>
            <button type="submit">Update Job Status</button>
        </form>
    );
};

export default UpdateJobStatus;