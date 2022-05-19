import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setInterval(() => {
            navigate('/task')
        }, 3000);
    }, []);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h3 className='text-5xl'>404! Page Not Found</h3>

        </div>
    );
};

export default NotFound;