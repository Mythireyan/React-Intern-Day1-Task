import React,{ useState } from 'react';
import './textbox.css';

function Textbox(){

	const [input,setInput] = useState('');

	return (
		<div className='container'>
			<form>
				<textarea type='text' value={input} onChange={getInputText}/>
			</form>
		<button className='button'onClick={getTextboxInput}>Alert</button>
		</div>
		);

	function getInputText(e){
		setInput(e.target.value);
	}

	function getTextboxInput(){
		alert(input);
	} 
}

export default Textbox;