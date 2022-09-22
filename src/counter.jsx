import React, {useState} from 'react'  // useState - хук для изменения состояния компонента

const Counter = ({onDelete, onChangeCount, ...rest}) => {

    const formatValue = () => {
        return rest.value === 0 ? 'empty' : rest.value
    }

    const getBadgeClasses = () => {
        let classes = 'badge m-2'
        return ( classes += rest.value === 0 ? ' btn-warning' : ' btn-primary' )
    }
    
    return(
        <div>
            <span>{rest.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={() => onChangeCount(rest.id, 'increment')}>+</button>
            <button className='btn btn-danger btn-sm m-2' onClick={() => onChangeCount(rest.id, 'decrement')}>-</button>
            <button className='btn btn-danger btn-sm m-2' onClick={() => onDelete(rest.id)}>Delete</button>
        </div>
    )
}

export default Counter