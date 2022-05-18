import React from 'react';
import { useQuery } from 'react-query';
import axiosInstance from '../../Api/api';
import CommonTitle from '../../Component/CommonTitle';
import Header from '../Shared/Header';
import AddTask from './AddTask';
import AllTask from './AllTask';

const Tasks = () => {
    const { isLoading, error, data: tasks, refetch } = useQuery('task', () =>
        fetch('http://localhost:5000/task').then(res =>
            res.json()
        )
    )

    console.log(tasks)
    return (
        <div>
            <Header>
                <>
                    <CommonTitle>Task</CommonTitle>
                    <div className='container mx-auto grid md:grid-cols-3 gap-6'>
                        <AddTask refetch={refetch}></AddTask>
                        <AllTask tasks={tasks} refetch={refetch} isLoading={isLoading}></AllTask>
                    </div>

                </>

            </Header>

        </div>
    );
};

export default Tasks;