import './App.css';
import domtoimage from 'dom-to-image';
import { useState } from 'react';

function App() {
	const [ name, setName ] = useState('');

	const getImage = () => {
		var node = document.getElementById('my-node');

		domtoimage
			.toPng(node)
			.then(function(dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				document.getElementById('container').appendChild(img);
			})
			.catch(function(error) {
				console.error('oops, something went wrong!', error);
			});
	};

	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div className="App" id="container">
			<div className="image-wrapper" id="my-node">
				<div className="name">{name}</div>
			</div>
			<button onClick={getImage}>Get Image!!</button>
			<input type="text" value={name} onChange={handleChange} />
		</div>
	);
}

export default App;
