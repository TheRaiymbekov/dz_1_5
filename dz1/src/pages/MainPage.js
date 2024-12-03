import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {value}</h1>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
                <button onClick={() => dispatch({ type: 'INCREMENT_BY_10' })}>+10</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_BY_10' })}>-10</button>
                <button onClick={() => dispatch({ type: 'RESET' })}>Сброс</button>
            </div>
        </div>
    );
};

export default MainPage;