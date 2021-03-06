import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import '../../static/fontawesome/fontawesome.min';
import '../../static/fontawesome/fa-solid.min';
import '../../static/fontawesome/fa-brands.min';
import '../../static/fontawesome/fa-regular.min';

import { Title, H2, H3, H5, Text, LinkText } from '../../static/styles/typography';
import { media, flexbox, Grid, GridItem, Section } from '../../static/styles/utils';

const Hero = styled.div`
  background: url("/img/city.jpeg") top;
  background-size: cover;
  padding: 30rem ${({ theme }) => theme.containerPadding}rem 20rem ${({ theme }) => theme.containerPadding}rem;
  text-align: center;

  ${media.small`
    padding: 20rem 2rem;
  `};
`;

const AboutSection = Section.extend`
`;

const AboutGridItem = GridItem.extend`
  ${media.medium`
    grid-row: 1;
  `};
`;

const ServicesSection = Section.extend`
`;

const ServicesGrid = Grid.extend`
  ${media.tablet`
    grid-template-columns: 1fr;
  `};
`;

const WorkSection = Section.extend`
`;

const Overlay = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
  }
  &:hover{
    opacity: 1;
  }
`;

const ProjectGrid = Grid.extend`
  padding-top: 1rem;
`;

const Project = styled.div`
  margin: ${({ theme }) => theme.margins}rem;
  position: relative;
`;

const ProjectImg = styled(Img)`
  display: block;
  widows: 100%;
  max-width: 100%;
  height: auto;
`;

const ProjectTitle = H2.extend`
  color: $white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const WorkWithUsSection = Section.extend`
  display: grid;
  grid-template-columns: 66% 1fr;
  grid-gap: 0;

  ${media.medium`
    grid-template-columns: 1fr;
  `};
`;

const MapBackground = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9)), url("/img/world.png") center;
  
`;

const ContactSection = Section.extend`
  background: none;
`;

const Footer = styled.footer`
  ${flexbox};
  padding: ${({ theme }) => theme.containerPadding}rem;
  padding-bottom: 2rem;
`;

const FooterContainer = styled.footer`
  ${flexbox};
`;

const IconContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const EmailIconContainer = styled.div`
  text-align: center;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.margins}rem;
`;

const ResponsiveImg = styled.img`
  /* width: 100%; */
  /* padding: 3rem; */
  ${media.medium`
    display: none;
  `};
`;

// const unreadCount = 100;
// const name = 'Eric';

const IndexPage = ({ data }) => (
  <div>
    <Hero>
      <Title white>Kibo Localization</Title>
      <h2>
        {/* <FormattedMessage
          id="welcome"
          defaultMessage={'Hello {name}, you have {unreadCount, number} {unreadCount, plural, one {message} other {messages}}'}
          values={{ name: <b>{name}</b>, unreadCount }}
        /> */}
      </h2>
      <Text white large>Expand your reach</Text>
    </Hero>

    <AboutSection id="about">
      <Grid cols={2}>
        <ResponsiveImg src="/img/kibo-translate.svg" alt="" />
        <AboutGridItem col={2}>
          <H2 orange small light>OUR MISSION</H2>
          <Text bold large>We provide linguistic solutions for small to medium projects, including everything from translation, to interpretation, and much more.</Text>
        </AboutGridItem>
      </Grid>
    </AboutSection>

    <ServicesSection id="services" black>
      <H2 center lightGray>SERVICES</H2>
      <ServicesGrid cols={3}>
        <GridItem>
          <IconContainer>
            <i className="fas fa-book fa-3x" />
          </IconContainer>
          <H3 center orange>Translation</H3>
          <Text center white>We can translate books, apps, digital media, videos and more! Just let us know what languages you need and we will take care of the rest.</Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-comments fa-3x" />
          </IconContainer>
          <H3 center orange>Interpretation</H3>
          <Text center white>Need a last minute interpreter for your big presentation? We have professionals on standby waiting to assist you.</Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-globe fa-3x" />
          </IconContainer>
          <H3 center orange>Other Services</H3>
          <Text center white>Haven't seen what you are looking for yet? We also provideo other services such as quality assurance website localization and image localization.</Text>
        </GridItem>
      </ServicesGrid>
    </ServicesSection>

    {/* <WorkSection id="work">
      <H2>WORK</H2>
      <ProjectGrid cols={2}>
        {data.allMarkdownRemark.edges.map(project => (
          <Project key={project.node.frontmatter.path}>
            <Link
              key={project.node.id}
              to={project.node.frontmatter.path}
            >
              <ProjectImg sizes={project.node.frontmatter.thumbnail.childImageSharp.sizes} />
              <Overlay>
                <ProjectTitle className="" key={project.node.frontmatter.title}>
                  {project.node.frontmatter.title}
                </ProjectTitle>
              </Overlay>
            </Link >
          </Project>
        ))}
      </ProjectGrid>
    </WorkSection> */}

    <WorkWithUsSection id="contact" orange>
      <div>
        <H2 white>WORK WITH US</H2>
        <Text white>We are looking for translators of any language pair to join us. All we need is your name, contact, and a few other bits of information concerning your background in translation to get started. If you are interested, please contact us <LinkText href="mailto:info@kibo-int.com">here</LinkText>.
        </Text>
      </div>
    </WorkWithUsSection>
    <MapBackground>
      <ContactSection id="contact">
        <H2 black center>CONTACT</H2>
        <EmailIconContainer>
          <LinkText orange bold href="mailto:info@kibo-int.com">info@kibo-int.com
          </LinkText>
        </EmailIconContainer>
      </ContactSection>

      <Footer column>
        <FooterContainer center>
          <SocialLink href="https://www.facebook.com/kiboint">
            <i className="fab fa-facebook-f fa-lg" />
          </SocialLink>
          <SocialLink href="https://www.twitter.com/kibo_int">
            <i className="fab fa-twitter fa-lg" />
          </SocialLink>
        </FooterContainer>
        <Text small center gray>Kibo International - Copyright 2018</Text>
      </Footer>
    </MapBackground>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            thumbnail {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
