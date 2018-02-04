import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import theme from '../../static/styles/theme';
import '../../static/styles/global';

import { Wrapper } from '../../static/styles/utils';
import Header from '../components/Header';

const MainStyle = Wrapper.withComponent('main');
const Main = MainStyle.extend` 
  /* Takes header height into account */ 
  padding-top: 12rem;
  `;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title=""
        meta={[
          { name: 'description', content: '' },
        ]}
      />
      <Header />
      <Main>
        {children()}
      </Main>
      <Wrapper paddingSides>
        <footer>Footer</footer>
      </Wrapper>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
