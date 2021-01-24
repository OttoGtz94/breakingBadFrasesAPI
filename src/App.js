import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './Components/Frase';

const Contenedor = styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;
`;
const Boton = styled.button`
	background: -webkit-linear-gradient(
		top left,
		#007d35 0%,
		#007d35 40%,
		#0f574e 100%
	);
	background-size: 300px;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	margin-top: 1rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid black;
	transition: background-size 0.8s ease;
	:hover {
		cursor: pointer;
		background-size: 400px;
	}
`;

function App() {
	// state
	const [frase, guardarFrase] = useState({});

	// useEffect Cargar frase automaticamente
	useEffect(() => {
		consultarAPI();
	}, []);

	const url =
		'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

	const consultarAPI = async () => {
		const api = await fetch(url);
		const frase = await api.json();
		// console.log(frase[0]);
		guardarFrase(frase[0]);
	};
	return (
		<Contenedor>
			<Frase frase={frase} />
			<Boton onClick={consultarAPI}>Obtener frase</Boton>
		</Contenedor>
	);
}

export default App;
