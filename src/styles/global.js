import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root{
		font-size: 10px;
		font-family: 'Heebo', Arial, Helvetica, sans-serif;
		
		text-rendering: optimizespeed;
		-webkit-font-smoothing: antialiased;
	}
`;
