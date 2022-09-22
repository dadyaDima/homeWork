import React, {useState} from "react"
import Counter from './counter'

const CountersList = () => {
    const initialValue = [
        {id: 1, value: 0, name: 'Ненужная вещь'}, 
        {id: 2, value: 1, name: 'Ложка'}, 
        {id: 3, value: 2, name: 'Вилка', price: '200'},
        {id: 4, value: 3, name: 'Тарелка'},
        {id: 5, value: 4, name: 'Набор минималиста'}
    ]
    
    const [counters, setCounters] = useState(initialValue)

    const handleDeleteCount = (id) => {
        const newCounters = counters.filter((count) => count.id !== id)
        setCounters(newCounters)
    }

    //код в 2 функциях идентичен и дублируется - создаем 1 функцию с параметром (increment/decrement)

    const handleChangeCount = (elemId, operation) => {
        const newCounters = counters.map((counter) => { 
            if(operation === 'increment' && counter.id === elemId )  counter.value++ 
            if(operation === 'decrement' && counter.id === elemId && counter.value > 0 ) counter.value-- 
            return counter
        })
        setCounters(newCounters)
    }

    // const handlerIncrement = (elemId) => {
    //     const newCounters = counters.map((counter) => { 
    //         if(counter.id === elemId) counter.value++ 
    //         return counter
    //     })
    //     setCounters(newCounters)
    // }

    // const handlerDecrement = (elemId) => {
    //     const newCounters = counters.map((counter) => { 
    //         if(counter.id === elemId && counter.value > 0) counter.value-- 
    //         return counter
    //     })
    //     setCounters(newCounters)
    // }

    const handleReset = () => {
        setCounters(initialValue)
    }

    return <>
        {counters.map((count) => {
            return <Counter key={count.id} {...count} onDelete={handleDeleteCount} onChangeCount={handleChangeCount}/>
        })}
        <button className='btn btn-danger btn-sm m-2' onClick={handleReset}>Reset</button>
    </>
}

export default CountersList