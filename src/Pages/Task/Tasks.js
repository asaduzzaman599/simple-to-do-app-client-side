import React from 'react';
import { useQuery } from 'react-query';
import CommonTitle from '../../Component/CommonTitle';
import Header from '../Shared/Header';
import AddTask from './AddTask';
import AllTask from './AllTask';

const Tasks = () => {
    const { isLoading, error, data: tasks, refetch } = useQuery('task', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )
    return (
        <div>
            <Header>
                <>
                    <CommonTitle>Task</CommonTitle>
                    <div className='container mx-auto grid md:grid-cols-4'>
                        <AddTask refetch={refetch}></AddTask>
                        <AllTask tasks={tasks} refetch={refetch} isLoading={isLoading}></AllTask>
                    </div>

                </>

            </Header>

        </div>
    );
};

export default Tasks;