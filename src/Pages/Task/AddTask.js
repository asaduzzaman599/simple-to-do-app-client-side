import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosInstance from '../../Api/api';
import CommonSubTitle from '../../Component/CommonSubTitle';

const AddTask = ({ refetch }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        (async () => {
            const response = await axiosInstance.post('/task', data)
            if (response.data.insertedId) {
                toast.success('Task Inserted Successfuly')
                reset()
                refetch()
            }
        })()
    };
    return (
        <div className=" min-h-screen pb-10  col-span-2">

            <div className="card  w-full shadow-2xl bg-base-10 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body ">
                        <CommonSubTitle>Add Task</CommonSubTitle>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task name</span>
                            </label>
                            <input type="text" placeholder=" Task name " className="input input-bordered"  {...register("task", { required: true })} />
                            <p><small className='text-red-500'>{errors.task?.type === 'required' && "Task name is required"}</small></p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Description" className="input input-bordered h-20" {...register("description", { required: true })} />
                            <p><small className='text-red-500'>{errors.description?.type === 'required' && "Description name is required"}</small></p>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;