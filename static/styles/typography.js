import styled from 'styled-components';
import Link from 'gatsby-link';

// Headline Styles
const headlineStyle = styled.span`
  color: ${({ blue, white, theme }) => {
    if (blue) return theme.colors.kiboBlue;
    if (white) return theme.colors.white;
    return theme.colors.kiboNavy;
  }};
  margin: 0;
  text-align: ${({ center }) => center && 'center'};
`;

const TitleStyle = headlineStyle.withComponent('h1');
const Title = TitleStyle.extend`
  line-height: ${({ theme }) => theme.headline.h1.lineHeight};
  font-size: ${({ theme }) => theme.headline.h1.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h1.weight)};
`;

const H2Style = headlineStyle.withComponent('h2');
const H2 = H2Style.extend`
  line-height: ${({ theme }) => theme.headline.h2.lineHeight};
  font-size: ${({ theme }) => theme.headline.h2.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h2.weight)};
`;

const H3Style = headlineStyle.withComponent('h3');
const H3 = H3Style.extend`
  line-height: ${({ theme }) => theme.headline.h3.lineHeight};
  font-size: ${({ theme }) => theme.headline.h3.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h3.weight)};
`;

const H4Style = headlineStyle.withComponent('h4');
const H4 = H4Style.extend`
  line-height: ${({ theme }) => theme.headline.h4.lineHeight};
  font-size: ${({ theme }) => theme.headline.h4.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h4.weight)};
`;

const H5Style = headlineStyle.withComponent('h5');
const H5 = H5Style.extend`  
  line-height: ${({ theme }) => theme.headline.h5.lineHeight};
  font-size: ${({ theme }) => theme.headline.h5.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h5.weight)};
`;

const H6Style = headlineStyle.withComponent('h6');
const H6 = H6Style.extend`  
  line-height: ${({ theme }) => theme.headline.h6.lineHeight};
  font-size: ${({ theme }) => theme.headline.h6.fontSize};
  font-weight: ${({ light, theme }) => (light ? 100 : theme.headline.h6.weight)};
`;

// Text Style
const Text = styled.p`
  color: ${({
    blue, green, purple, red, teal, white, yellow, theme,
  }) => {
    if (blue) return theme.colors.kiboBlue;
    if (green) return theme.colors.kiboGreen;
    if (purple) return theme.colors.kiboPurple;
    if (red) return theme.colors.kiboRed;
    if (teal) return theme.colors.kiboTeal;
    if (white) return theme.colors.white;
    if (yellow) return theme.colors.kiboYellow;
    return theme.colors.bodyText;
  }};
  font-family: 'Work Sans', Helvetica, arial, sans-serif;
  font-size:${({ large, small, theme }) => {
    if (large) return theme.bodyText.large.fontSize;
    if (small) return theme.bodyText.small.fontSize;
    return theme.bodyText.standard.fontSize;
  }};
  font-weight: ${({ theme }) => theme.bodyText.weight};
  line-height:${({ large, small, theme }) => {
    if (large) return theme.bodyText.large.lineHeight;
    if (small) return theme.bodyText.small.lineHeight;
    return theme.bodyText.standard.lineHeight;
  }};
  margin: 0 0 2rem 0;
  text-align: ${({ center }) => center && 'center'};
`;

// List Item
const Li = Text.withComponent('li');

// Link Styles
const LinkStyle = Text.withComponent('a');
const LinkText = LinkStyle.extend`
  color: ${({ theme }) => theme.colors.kiboBlue};
  &:active {
    color: ${({ theme }) => theme.colors.kiboBlue600};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.kiboPurple};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.kiboBlue400};
  }
`;

const KiboLink = LinkText.withComponent(Link);

const Typography = {
  Title,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Li,
  LinkText,
  KiboLink,
};

module.exports = Typography;
