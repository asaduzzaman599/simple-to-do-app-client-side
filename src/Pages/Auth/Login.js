import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CommonTitle from '../../Component/CommonTitle';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    fetch(`https://todo-app-asaduzzaman599.herokuapp.com/`)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, u, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)


    useEffect(() => {
        if (error) {

            toast.error(error?.message)
        }
    }, [error])
    useEffect(() => {
        if (user) {
            navigate('/task')
        }
    }, [user])





    const onSubmit = data => {
        (async () => {
            signInWithEmailAndPassword(data.email, data.password)
        })()
    }
    if (loading) {
        return (<Loading></Loading>)
    }
    return (
        <div className='mt-10'>
            <div className=" min-h-screen pb-10">


                <div className="card  w-full max-w-sm shadow-2xl bg-base-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">

                            <CommonTitle>Login</CommonTitle>


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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder=" Your Password " className="input input-bordered"  {...register("password", {
                                    required: true, minLength: {
                                        value: 6,
                                        message: 'Minimum length 6'
                                    }
                                })} />
                                <p className='text-red-500'>{errors.password?.type === 'required' && "Password required"}</p>
                                <p className='text-red-500'>{errors.password?.type === 'minLength' && errors.password.message}</p>
                            </div>
                            <p className="label-text-alt link link-hover text-right text-primary" onClick={() => navigate('/register')}>Register Here</p>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;