import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CommonTitle from '../../Component/CommonTitle';

import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';

const Register = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {

            toast.error(error?.message)
        }
    }, [error])

    const onSubmit = data => {
        console.log(data)
            (async () => {
                createUserWithEmailAndPassword()
            })()
    }

    return (
        <div className='mt-10'>
            <div className=" min-h-screen pb-10">


                <div className="card  w-full max-w-sm shadow-2xl bg-base-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">

                            <CommonTitle>Register</CommonTitle>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder=" Your name " className="input input-bordered"  {...register("name", { required: true })} />
                                <p className='text-red-500'>{errors.name?.type === 'required' && "Name is required"}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder=" Your Email " className="input input-bordered"  {...register("email", {
                                    required: true, pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid Email'
                                    }
                                })} />
                                <p className='text-red-500'>{errors.email?.type === 'required' && "Email is required"}</p>
                                <p className='text-red-500'>{errors.email?.type === 'pattern' && errors.email.message}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder=" Your Password " className="input input-bordered"  {...register("password", {
                                    required: true, minLength: {
                                        value: 6,
                                        message: 'Minimum length 6'
                                    }
                                })} />
                                <p className='text-red-500'>{errors.password?.type === 'required' && "Password required"}</p>
                                <p className='text-red-500'>{errors.password?.type === 'minLength' && errors.password.message}</p>
                            </div>
                            <p className="label-text-alt link link-hover text-right text-primary" onClick={() => navigate('/login')}>Login Here</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Register;