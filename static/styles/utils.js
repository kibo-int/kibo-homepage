import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

// Media Breakpoints
const sizes = {
  xSmall: 414,
  small: 600,
  medium: 880,
  tablet: 1024,
  large: 1280,
  xLarge: 1440,
};

const media = Object.keys(sizes).reduce((accumulator, size) => {
  /* Code below based off of the assumption that the body font-size is 16px */
  const emSize = sizes[size] / 16;
  const mediaSize = accumulator;
  mediaSize[size] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
    `;
  return mediaSize;
}, {});

// Flexbox CSS
const flexbox = css`
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ center, end, between }) => {
    if (center) return 'center';
    if (end) return 'flex-end';
    if (between) return 'space-between';
    return 'flex-start';
  }};
  `;

// Padding and margin CSS
const marginStyle = css`
  margin: ${({
    margins,
    leftMargin,
    rightMargin,
    marginVertical,
    theme,
  }) => {
    if (margins) return `${theme.margins}rem`;
    if (leftMargin) return `0 0 0 ${theme.margins}rem`;
    if (rightMargin) return `0 ${theme.margins}rem 0 0`;
    if (marginVertical) return `${theme.margins}rem 0`;

    return 0;
  }};
  `;

const paddingStyle = css`
  padding: ${({
    container,
    noPadding,
    paddingSides,
    paddingTop,
    paddingVertical,
    theme,
  }) => {
    if (paddingSides) return `0 ${theme.gap}rem`;
    if (paddingTop) return `${theme.gap}rem 0 0 0`;
    if (paddingVertical) return `${theme.gap}rem 0`;
    if (container) return `${theme.containerPadding}rem`;
    if (noPadding) return 0;
    return `${theme.gap}rem`;
  }};
  `;

// Images
const FullImg = styled.img`
  width: 100%;
  `;

// Grid
const Grid = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-column-gap: ${({ noGap, theme }) => (noGap ? 0 : `${theme.gap * 2}rem`)};
  grid-row-gap: ${({ noGap, theme }) => (noGap ? 0 : `${theme.gap * 2}rem`)};

  grid-template-columns: ${({ cols }) =>
    (cols > 1 ? `repeat(${cols}, 1fr)` : '1fr 66% 1fr')};

  ${media.medium`
      grid-template-columns: 1fr;
  `};
  `;

const GridItem = styled.div`
  grid-column: ${({ col, center }) => (center ? 2 : col)};
  ${paddingStyle}


  ${media.medium`
    grid-column: 1;
  `};
  `;

const Section = styled.section`
  background: ${({
    orange,
    gray,
    darkGray,
    lightGray,
    black,
    theme,
  }) => {
    if (orange) return theme.colors.orange;
    if (gray) return theme.colors.gray;
    if (black) return theme.colors.black;
    if (lightGray) return theme.colors.lightGray;
    if (darkGray) return theme.colors.darkGray;
    return theme.colors.white;
  }};
  padding: ${({ theme }) => theme.containerPadding}rem;

  ${media.medium`
    padding: 5rem 3rem;
    }};
  `};
  ${media.small`
    padding: 5rem 2rem;
  `};
  `;

const FlexDiv = styled.div`
  ${flexbox};
  `;

// Wrapper
const Wrapper = styled.div`
  ${paddingStyle}
  background: ${({ theme }) => theme.colors.white};
  margin: auto;
  max-width: ${({ theme }) => theme.siteWidth};
  `;

const Utils = {
  media,
  flexbox,
  marginStyle,
  paddingStyle,
  FullImg,
  Grid,
  GridItem,
  FlexDiv,
  Section,
  Wrapper,
};

module.exports = Utils;
