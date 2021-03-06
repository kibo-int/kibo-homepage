import React from 'react';
import styled from 'styled-components';

import { media, flexbox } from '../../../static/styles/utils';

const HeaderContainer = styled.header`
  ${flexbox};

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  position: fixed;
  padding: 1rem ${({ theme }) => theme.containerPadding}rem;
  width: 100%;
  z-index: 1000;

  ${media.medium`
    justify-content: center;
  `};
`;

const Nav = styled.nav`
  ${flexbox};

  ${media.medium`
    display: none;
  `};
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.bodyText};
  margin: ${({ theme }) => theme.margins}rem;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.gray};

  }
`;

const Header = () => (
  <HeaderContainer between alignCenter>
    <a href="#">
      <svg width="69" height="28" viewBox="0 0 69 28" version="1.1">
        <title>Kibo</title>
        <g id="Canvas" transform="translate(-1658 1014)">
          <g id="Group">
            <g id="Kibo">
              <use href="#path0_fill" transform="translate(1655 -1023)" />
            </g>
            <g id="Rectangle">
              <use href="#path1_fill" transform="translate(1680.3 -1012.8)" fill="#FF8939" />
            </g>
          </g>
        </g>
        <defs>
          <path id="path0_fill" d="M 19.332 36L 6.12 23.796L 6.12 36L 3.168 36L 3.168 10.368L 6.12 10.368L 6.12 22.14L 18.72 10.368L 22.5 10.368L 9.108 22.86L 23.184 36L 19.332 36ZM 25.6244 17.892L 28.5404 17.892L 28.5404 36L 25.6244 36L 25.6244 17.892ZM 28.9004 10.224L 28.9004 13.536L 25.3364 13.536L 25.3364 10.224L 28.9004 10.224ZM 43.2385 17.46C 44.8225 17.46 46.2265 17.844 47.4505 18.612C 48.6745 19.38 49.6225 20.472 50.2945 21.888C 50.9665 23.28 51.3025 24.912 51.3025 26.784C 51.3025 28.656 50.9665 30.312 50.2945 31.752C 49.6225 33.168 48.6745 34.272 47.4505 35.064C 46.2265 35.856 44.8225 36.252 43.2385 36.252C 41.8225 36.252 40.5865 35.94 39.5305 35.316C 38.4745 34.692 37.6705 33.804 37.1185 32.652L 37.1185 36L 34.2025 36L 34.2025 9.504L 37.1185 9.504L 37.1185 21.096C 37.6465 19.92 38.4385 19.02 39.4945 18.396C 40.5745 17.772 41.8225 17.46 43.2385 17.46ZM 42.6985 33.84C 44.4505 33.84 45.8185 33.228 46.8025 32.004C 47.7865 30.756 48.2785 29.016 48.2785 26.784C 48.2785 24.6 47.7865 22.908 46.8025 21.708C 45.8425 20.508 44.4745 19.908 42.6985 19.908C 40.8985 19.908 39.5185 20.508 38.5585 21.708C 37.5985 22.908 37.1185 24.624 37.1185 26.856C 37.1185 29.088 37.5985 30.816 38.5585 32.04C 39.5185 33.24 40.8985 33.84 42.6985 33.84ZM 63.2765 36.252C 61.5725 36.252 60.0725 35.868 58.7765 35.1C 57.4805 34.332 56.4725 33.24 55.7525 31.824C 55.0565 30.408 54.7085 28.752 54.7085 26.856C 54.7085 24.96 55.0565 23.304 55.7525 21.888C 56.4725 20.472 57.4805 19.38 58.7765 18.612C 60.0725 17.844 61.5725 17.46 63.2765 17.46C 64.9805 17.46 66.4805 17.844 67.7765 18.612C 69.0725 19.38 70.0685 20.472 70.7645 21.888C 71.4845 23.304 71.8445 24.96 71.8445 26.856C 71.8445 28.752 71.4845 30.408 70.7645 31.824C 70.0685 33.24 69.0725 34.332 67.7765 35.1C 66.4805 35.868 64.9805 36.252 63.2765 36.252ZM 63.2765 33.84C 65.0765 33.84 66.4565 33.252 67.4165 32.076C 68.3765 30.876 68.8565 29.136 68.8565 26.856C 68.8565 24.648 68.3645 22.944 67.3805 21.744C 66.3965 20.52 65.0285 19.908 63.2765 19.908C 61.5005 19.908 60.1205 20.52 59.1365 21.744C 58.1525 22.944 57.6605 24.648 57.6605 26.856C 57.6605 29.136 58.1405 30.876 59.1005 32.076C 60.0845 33.252 61.4765 33.84 63.2765 33.84Z" />
          <path id="path1_fill" d="M 0 0L 3.6 0L 3.6 3.4L 0 3.4L 0 0Z" />
        </defs>
      </svg>
    </a>

    <Nav>
      <NavItem href="#about">Mission</NavItem>
      <NavItem href="#services">Services</NavItem>
      {/* <NavItem href="#work">Work</NavItem> */}
      <NavItem href="#contact">Contact</NavItem>
    </Nav>
  </HeaderContainer>
);

export default Header;
