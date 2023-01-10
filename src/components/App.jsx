import React, { useState } from 'react';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';
import Footer from './Footer';

function App() {    
    const [items, setItems] = useState([]);

    function addItem(inputText){
        setItems((prevValue) => {
            return [...prevValue, inputText]
        });
        
    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !==id;
            });
        })
    }
    
  return (
    <div>
    <div className='container'>
        <div className='heading'>
            <h1>to-do list</h1>
        </div>
        <InputArea 
            onAdd = {addItem}
        />
        <div>
            <ul>
                {items.map(
                    (todoItems, index) => (
                        <ToDoItem
                            key = {index}
                            id = {index}                            
                            text = {todoItems}
                            onChecked = {deleteItem}
                        />
                    )
                )}
            </ul>
        </div>
    </div>
        <Footer />
    </div>
  );
}


export default App