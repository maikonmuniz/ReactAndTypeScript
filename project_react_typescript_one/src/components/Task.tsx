import React from 'react';

interface Props {
    nameTask: string | null
}

const Task = (props: Props) => {
    return (
        <div>
            <p>{props.nameTask}</p>
        </div>
    )
}

export default Task;