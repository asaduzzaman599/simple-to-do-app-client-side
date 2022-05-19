import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import axiosInstance from '../../Api/api';
import CommonTitle from '../../Component/CommonTitle';
import { auth } from '../../firebase.init';
import Header from '../Shared/Header';
import AddTask from './AddTask';
import AllTask from './AllTask';

const Tasks = () => {
    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data: tasks, refetch } = useQuery('task', () =>
        fetch(`https://todo-app-asaduzzaman599.herokuapp.com/task?email=${user?.email}`).then(res =>
            res.json()
        )
    )
    useEffect(() => {
        refetch()
    }, [user])
    if (loading) {
        return <loading></loading>
    }
    return (
        <div>
            <Header>
                <>
                    <CommonTitle>Task</CommonTitle>
                    <div className='md:w-5/6 mx-auto  md:grid md:grid-cols-6 md:gap-6 '>
                        <AddTask refetch={refetch} user={user}></AddTask>
                        <AllTask tasks={tasks} refetch={refetch} isLoading={isLoading}></AllTask>
                    </div>

                </>

            </Header>

        </div>
    );
};

export default Tasks;