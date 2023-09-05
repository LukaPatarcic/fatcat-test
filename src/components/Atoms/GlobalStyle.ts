import { createGlobalStyle } from 'styled-components';
import base from '../../theme/styles/base';
import reset from '../../theme/styles/reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	${base}
`;

export default GlobalStyle;
