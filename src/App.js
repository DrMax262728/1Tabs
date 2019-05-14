import React from 'react'
import Sandbox from "./components/tabs/Sandbox";
import styled from 'styled-components'


const Div = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 20px;
	background-color: #eeeeee;
`;

const DivTab = styled.div`
	background-color: #fff;
`;


const App = () => (
	<Div>
		<DivTab>
			<Sandbox/>
		</DivTab>
	</Div>
);

export default App;