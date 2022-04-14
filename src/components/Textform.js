
import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpbtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed to Uppercase","success")
    }
    const handleLobtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed to lowercase","success")
    }
    const handleClrbtn = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been Removed","success")
    }
    return (
        <>
        {/* for darkmode logic */}
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            {/* for color theme */}
            {/* <div className='container my-3' > */}
                <div className="mb-3">
                    <label htmlFor="myBox " className="form-label"><h3>{props.heading}</h3></label>
                    <textarea className="form-control" id="myBox" 
                    
                        style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' ,color: props.mode === 'dark' ? 'white' : 'black'}}
                        value={text}
                        onChange={handleOnChange} rows='8 '></textarea>

                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpbtn}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLobtn}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClrbtn}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            
                <h3>Your Text Summary</h3>
                <p>{text.length>0?text.trim().split(" ").length:'0'} <b>Words</b> and {text.length} <b>alphabets</b></p>
                <p>You need {0.008 * text.split(" ").length} minutes to read above text. </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>

            </div>
        </>
    )
};