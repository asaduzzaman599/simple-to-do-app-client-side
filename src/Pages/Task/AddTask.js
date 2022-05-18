import React from 'react';
import { useForm } from 'react-hook-form';
import CommonSubTitle from '../../Component/CommonSubTitle';

const AddTask = ({ }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=" min-h-screen pb-10">

            <div className="card  w-full max-w-sm shadow-2xl bg-base-10 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
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