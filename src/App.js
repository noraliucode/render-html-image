import './App.css';
import domtoimage from 'dom-to-image';
import { useState } from 'react';

function App() {
	const [ name, setName ] = useState('');
	const [ number, setNumber ] = useState('');
	const [ profileImg, setProfileImg ] = useState('');
	

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

	const handleNumberChange = (event) => {
		setNumber(event.target.value);
	};

	const imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			setProfileImg(reader.result)
		  }
		}
		reader.readAsDataURL(e.target.files[0])
	  };

	return (
		<div className="App" id="container">
			<div className="image-wrapper" id="my-node">
				<div className="name">{name}</div>
				<div className="number">{number}</div>
				<div className="img-holder">
					<img style={{width: '200px', height: 'auto', position: 'absolute', top: '127px', left: '155px' }} src={profileImg} alt="" id="img" className="img" />
				</div>
			</div>
			
			<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

			輸入會員姓名：
			<input type="text" value={name} onChange={handleChange} />
			輸入會員編號：
			<input type="text" value={number} onChange={handleNumberChange} />
			<button onClick={getImage}>產生會員證！！</button>
		</div>
	);
}

export default App;
