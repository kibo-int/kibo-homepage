import { injectGlobal } from 'styled-components';
import theme from '../styles/theme';

export default injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    font-family: 'Roboto', Helvetica, arial, sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    background: ${theme.colors.kiboLightestGray};
    color: ${theme.colors.bodyText};
    font-size: ${theme.bodyText.standard.fontSize};
    margin: 0;
  }
`;
