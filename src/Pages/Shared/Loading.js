import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
                <button className="btn btn-square loading"></button>
                <h3>loading...</h3>
            </div>
        </div>
    );
};

export default Loading;