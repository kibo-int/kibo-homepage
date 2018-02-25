import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import favicon from '../../favicon.ico';

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
          title="Kibo"
          meta={[
            { name: 'description', content: 'Kibo Localization' },
            { name: 'keywords', content: 'homepage, kibo, localization, international, localisation' },
            { property: 'twitter:card', content: 'summary' },
            { property: 'twitter:site', content: '@kibo_int' },
            { property: 'twitter:title', content: 'Kibo' },
            { property: 'twitter:description', content: 'Kibo Localization' },
            { property: 'twitter:creator', content: 'Kibo' },
            { property: 'twitter:image', content: 'http://kibo-int.com/static/img/city.jpeg' },
            { property: 'og:title', content: 'Kibo' },
            { property: 'og:url', content: 'http://kibo-int.com' },
            { property: 'og:image', content: 'http://kibo-int.com/static/img/city.jpeg' },
            { property: 'og:description', content: 'Kibo Localization' },
            { property: 'og:site_name', content: 'Kibo' },
            { name: 'theme-color', content: '#ff8939' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        >
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <html lang="en" />
        </Helmet>
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
