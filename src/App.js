import React, { useState } from 'react';
import './App.css';

function App() {

const [password, setPassword] = useState("");
const [length, setLength] = useState(0);
const [includeUppercase, setIncludeUppercase] = useState(true);
const [includeLowercase, setIncludeLowercase] = useState(true);
const [includeNumbers, setIncludeNumbers] = useState(true);
const [includeSymbols, setIncludeSymbols] = useState(false);


const generatePassword = () => {
  let chars = "";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) chars += "0123456789";
  if (includeSymbols) chars += "!@#$%^&*()_+=<>?";

  if (chars === "") {
    setPassword("Select at least one option");
    return;
  }

  let newPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    newPassword += chars[randomIndex];
  }

  setPassword(newPassword);
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(password);
};

return (
  <div  className='App'>
    <p><b>Password Generator</b></p>
    <input className='board' type="text" value={password} readOnly/>
    <button onClick={copyToClipboard} className='copy'>Copy</button>
    
    {/* Slider */}   
    <h3>Password Length</h3>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input id="length" type="range" min="4" max="32" value={length} onChange={(e) => setLength(Number(e.target.value))} />
      <span>{length}</span> {/* This shows the live number */}
    </div>
    
    {/* Checkboxes */}
    <label>
      <input type='checkbox' checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)}/>Uppercase Letters
    </label><br/>
    <label>
      <input type='checkbox' checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)}/>Lowercase Letters
    </label><br/>
    <label>
      <input type='checkbox' checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)}/>Numbers
    </label><br/>
    <label>
      <input type='checkbox' checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)}/>Symbols
    </label><br/>
    
    {/* Generate*/}
    <button onClick={generatePassword} className='gen'>Generate</button>
  
  </div>
);
}

export default App; 