import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '../../static/styles/theme';
import '../../static/styles/global';

import { Wrapper } from '../../static/styles/utils';
import Header from '../components/Header';

const MainStyle = Wrapper.withComponent('main');
const Main = MainStyle.extend` 
  `;

const TemplateWrapper = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: '' },
          ]}
        />
        <Header />
        <Main noPadding>
          {children()}
        </Main>
      </div>
    </ThemeProvider>
  </IntlProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
