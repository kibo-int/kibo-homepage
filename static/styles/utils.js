import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

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

// Button
const Button = styled.button`
  ${marginStyle}
  background: ${({
    purchase, secondary, tertiary, theme,
  }) => {
    if (purchase) return theme.colors.kiboGreen;
    if (secondary || tertiary) return 'none';
    return theme.colors.kiboBlue;
  }};
  border: ${({ secondary, tertiary, theme }) => {
    if (secondary) return `2px solid ${theme.colors.kiboBlue}`;
    if (tertiary) return `2px solid ${theme.colors.white}`;
    return 'none';
  }};
  border-radius: ${({
    pill,
    large,
    medium,
    small,
  }) => {
    if (pill && large) return '2.2rem';
    if (pill && medium) return '2.1rem';
    if (pill && small) return '1.7rem';
    if (pill) return '2rem';
    return 0;
  }};
  color: ${({ secondary, theme }) => (
    secondary ? theme.colors.kiboBlue : theme.colors.white
  )};
  display: inline-block;
  font-size: ${({ large, medium, small }) => {
    if (large) return '2.2rem';
    if (medium) return '1.8rem';
    if (small) return '1.4rem';
    return '1.6rem';
  }};
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;
  &:hover {
    background: ${({
    theme, purchase, secondary, tertiary,
  }) => {
    if (purchase) return theme.colors.kiboDarkGreen;
    if (secondary) return theme.colors.kiboBlue;
    if (tertiary) return theme.colors.white;
    return theme.colors.kiboDarkBlue;
  }};
    color: ${({ theme, tertiary }) => (tertiary ? theme.colors.kiboNavy : theme.colors.white)};
    cursor: pointer;
  }
  `;

const linkButtonStyle = Button.withComponent('a');
const LinkButton = linkButtonStyle.extend`
  text-decoration: none;
  `;
const KiboButton = LinkButton.withComponent(Link);

// Images
const FullImg = styled.img`
  width: 100%;
  `;

// Grid
const Grid = styled.div`
  ${paddingStyle}
  display: grid;
  grid-column-gap: ${({ noGap, theme }) => (noGap ? 0 : `${theme.gap * 2}rem`)};
  grid-row-gap: ${({ noGap, theme }) => (noGap ? 0 : `${theme.gap * 2}rem`)};

  grid-template-columns: ${({ cols }) =>
    (cols > 1 ? `repeat(${cols}, 1fr)` : '1fr 66% 1fr')};
  `;

const GridItem = styled.div`
  grid-column: ${({ col, center }) => (center ? 2 : col)};
  ${paddingStyle}
  `;

const Section = Grid.withComponent('section');

// Wrapper
const Wrapper = styled.div`
  ${paddingStyle}
  background: ${({ theme }) => theme.colors.white};
  margin: auto;
  max-width: ${({ theme }) => theme.siteWidth};
  `;

const Utils = {
  flexbox,
  marginStyle,
  paddingStyle,
  Button,
  LinkButton,
  KiboButton,
  FullImg,
  Grid,
  GridItem,
  Section,
  Wrapper,
};

module.exports = Utils;

Button.propTypes = {
  pill: PropTypes.bool,
  purchase: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
};

Button.defaultProps = {
  pill: false,
  purchase: false,
  secondary: false,
  tertiary: false,
  large: false,
  medium: false,
  small: false,
};

