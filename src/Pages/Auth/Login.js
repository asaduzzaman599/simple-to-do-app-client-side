import React from 'react';
import { useForm } from 'react-hook-form';
import CommonTitle from '../../Component/CommonTitle';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div>
            <CommonTitle>Login</CommonTitle>
            <div className=" min-h-screen pb-10">


                <div className="card  w-full max-w-sm shadow-2xl bg-base-10 mx-auto">
                    <form action="">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task name</span>
                                </label>
                                <input type="text" placeholder=" Task name " className="input input-bordered"  {...register("Task", { required: true })} />
                                <p>{errors.Task?.type === 'required' && "Task name is required"}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea type="text" placeholder="Description" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;