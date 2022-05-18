import React from 'react';
import Loading from '../Shared/Loading';

const AllTask = ({ tasks, refetch, isLoading }) => {


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-4/6 grid md:grid-cols-2 col-span-1'>

        </div>
    );
};

export default AllTask;