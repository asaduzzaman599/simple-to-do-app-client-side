import React from 'react';
import { useQuery } from 'react-query';
import CommonTitle from '../../Component/CommonTitle';

const Tasks = () => {
    const { isLoading, error, data } = useQuery('task', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )
    return (
        <div>
            <CommonTitle>Task</CommonTitle>
        </div>
    );
};

export default Tasks;