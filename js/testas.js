// Testa Js file for testing


import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItem from './testas';

function GroceryItem(props) {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default GroceryItem;

function App() {
    const handleClick = (item) => {
        console.log(item + ' clicked');
    };

    return (
        <div>
            <GroceryItem name="Eggs" onClick={() => handleClick('Eggs')} />
            <GroceryItem name="Banana" onClick={() => handleClick('Banana')} />
            <GroceryItem name="Strawberry" onClick={() => handleClick('Strawberry')} />
            <GroceryItem name="Bread" onClick={() => handleClick('Bread')} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));