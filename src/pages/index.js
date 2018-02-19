import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import '../../static/fontawesome/fontawesome.min';
import '../../static/fontawesome/fa-solid.min';
import '../../static/fontawesome/fa-brands.min';
import '../../static/fontawesome/fa-regular.min';

import { Title, H2, H3, Text, LinkText } from '../../static/styles/typography';
import { flexbox, Grid, GridItem, Section } from '../../static/styles/utils';

const Hero = styled.div`
  background: ${({ theme }) => theme.colors.orange};
  padding: 30rem ${({ theme }) => theme.containerPadding}rem 20rem ${({ theme }) => theme.containerPadding}rem;
  text-align: center;
`;

const AboutSection = Section.extend`
`;

const ServicesSection = Section.extend`
`;

const WorkSection = Section.extend`
`;

const Overlay = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
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

const ContactSection = Section.extend`
`;


const Footer = styled.footer`
  ${flexbox};

  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.containerPadding}rem;
  padding-bottom: 2rem;
`;

const FooterContainer = styled.footer`
  ${flexbox};
`;

const IconContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.orange};
`;

const EmailIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.margins};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.bodyText};
  margin: ${({ theme }) => theme.margins}rem;
`;

const IndexPage = ({ data }) => (
  <div>
    <Hero>
      <Title white>Kibo Localization</Title>
      <Text white>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tenetur ratione eius repellendus. Harum fuga beatae voluptatem quis cum, dolor modi ratione nobis in quas. Illo earum repudiandae quaerat culpa.</Text>
    </Hero>

    <AboutSection id="about" lightGray>
      <Grid cols={2}>
        <GridItem col={2}>
          <H2>ABOUT</H2>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tenetur ratione eius repellendus. Harum fuga beatae voluptatem quis cum, dolor modi ratione nobis in quas. Illo earum repudiandae quaerat culpa.</Text>
        </GridItem>
      </Grid>
    </AboutSection>

    <ServicesSection id="services">
      <H2 center>SERVICES</H2>
      <Grid cols={3}>
        <GridItem>
          <IconContainer>
            <i className="fas fa-book fa-3x" />
          </IconContainer>
          <H3 center gray>Translation</H3>
          <Text center>We can translate books, apps, digital media, videos and more! Just let us know what languages you need and we will take care of the rest.</Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-comments fa-3x" />
          </IconContainer>
          <H3 center gray>Interpretation</H3>
          <Text center>Need a last minute interpreter for your big presentation? We have professionals on standby waiting to assist you.</Text>
        </GridItem>

        <GridItem>
          <IconContainer>
            <i className="fas fa-globe fa-3x" />
          </IconContainer>
          <H3 center gray>Other Services</H3>
          <Text center>Haven't seen what you are looking for yet? We also provideo other services such as quality assurance website localization and image localization.</Text>
        </GridItem>
      </Grid>
    </ServicesSection>

    <WorkSection id="work" black>
      <H2 white>WORK</H2>
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
    </WorkSection>

    <ContactSection id="contact" orange>
      <Grid cols={2}>
        <GridItem>
          <H2 white>CONTACT</H2>
          <Text white>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, molestiae labore incidunt blanditiis, repellat itaque modi nam accusantium, provident numquam a laborum alias! Quam molestiae aliquid quos veritatis labore fugit.</Text>
          <div>
            <LinkText href="mailto:ericssartorius@gmail.com">
              <i className="fas fa-envelope fa-lg" /> ericssartorius@gmail.com
            </LinkText>
          </div>
        </GridItem>
      </Grid>
    </ContactSection>

    <Footer column>
      <FooterContainer center>
        <SocialLink href="https://www.facebook.com">
          <i className="fab fa-facebook-f fa-lg" />
        </SocialLink>
        <SocialLink href="https://www.twitter.com">
          <i className="fab fa-twitter fa-lg" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com">
          <i className="fab fa-linkedin-in fa-lg" />
        </SocialLink>
      </FooterContainer>
      <Text small center>Kibo International - Copyright 2018</Text>
    </Footer>
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
