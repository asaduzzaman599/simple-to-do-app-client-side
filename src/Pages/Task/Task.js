import React from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../Api/api';

const Task = ({ task, refetch }) => {
    const { _id, task: name, description } = task
    const handleComplete = async () => {
        const response = await axiosInstance.put(`/task/${_id}`, task)
        console.log(response)
        if (response?.data?.matchedCount) {
            toast.success(`${name} Complete`)
            refetch()
        }

    }

    const handleDelete = async () => {
        const response = await axiosInstance.delete(`/task/${_id}`, task)
        console.log(response)
        if (response?.data?.deletedCount) {

            toast.success(`${name} Deleted`)
            refetch()
        }
    }
    return (
        <div className=' relative'>
            <div class="card mx-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className={`${task?.complete ? "line-through" : ''}`}>{description}</p>
                    <div class="card-actions justify-end">
                        {
                            <button disabled={task?.complete} class="btn btn-primary" onClick={handleComplete}>Complete</button>
                        }
                    </div>
                </div>
            </div>

            <button class="btn btn-square btn-outline absolute top-5 right-5" onClick={handleDelete}>
                X
            </button>
        </div>
    );
};

export default Task;