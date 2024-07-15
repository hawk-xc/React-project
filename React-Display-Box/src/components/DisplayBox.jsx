import reactLogo from './../assets/react.svg'
import { useState } from 'react'

function DisplayBox() {
    const [value, inputValue] = useState('');

    const handleInputStyle = (e) => {
        inputValue(e.target.value);
    }

    const inputStyle = {
        backgroundColor: value,
        borderRadius: value
    }

    return (
        <>
            <div id="box" className='box' style={inputStyle}>
                <img src={reactLogo} width={value} className='logo' alt="React logo" />
            </div>
            <input type="text" onChange={handleInputStyle} value={value} className='input' />
        </>
    );
}

export default DisplayBox