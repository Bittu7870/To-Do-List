import React, {useState} from 'react'

function InputArea(props) {
    const [inputText, setInputText] = useState("");
    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }
  return (
    <div className='form'>
        <input 
            type="text" 
            name="name" 
            placeholder="write hare....."
            onChange={handleChange}
            value={inputText}
        />
        <button
            disabled={!inputText}
            onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default InputArea;