import React from 'react';

import { Title, Text, KiboLink } from '../../static/styles/typography';

const IndexPage = () => (
  <div>
    <Title>Hi people</Title>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
    <KiboLink to="/page-2/">Go to page 2</KiboLink>
  </div>
);

export default IndexPage;
