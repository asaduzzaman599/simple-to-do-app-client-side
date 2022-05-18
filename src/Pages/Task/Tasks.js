import React from 'react';
import { useQuery } from 'react-query';
import CommonTitle from '../../Component/CommonTitle';
import Header from '../Shared/Header';
import AddTask from './AddTask';

const Tasks = () => {
    const { isLoading, error, data } = useQuery('task', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )
    return (
        <div>
            <Header>
                <>
                    <CommonTitle>Task</CommonTitle>
                    <AddTask></AddTask></>
            </Header>

        </div>
    );
};

export default Tasks;