import React, {useState} from 'react';
import Vditor from '../src/index.jsx';
import useDarkMode from 'use-dark-mode';

const App = () => {
    const isDarkMode = useDarkMode(false).value;
    const [disabled, changeState] = useState(false);
    const onInput = (text, html) => {
        console.log({text, html});
    };
    const toggle = () => {
        changeState(!disabled);
    };

    return (<>
    <h1>Vditor for React &emsp;
        <button onClick={toggle}>{`${disabled ? 'Enable' : 'Disable'} Vditor`}</button>
    </h1>
    <Vditor
        height={700}
        darkMode={isDarkMode}
        disabled={disabled}
        onInput={onInput}
        onInit={(text) => {console.log('Vditor inits successfully with initial text: \n' + text)}}
        onSelect={(selection) => {console.log('Selected text: \n' + selection)}}
    />
    </>);
}

export default App;