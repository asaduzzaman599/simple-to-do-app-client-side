import React from 'react';
import Loading from '../Shared/Loading';
import Task from './Task';

const AllTask = ({ tasks, refetch, isLoading }) => {


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid md:grid-cols-2 col-span-4  gap-6'>
            {
                tasks?.map(task => <Task key={task?._id} task={task} refetch={refetch}></Task>)
            }

        </div>
    );
};

export default AllTask;