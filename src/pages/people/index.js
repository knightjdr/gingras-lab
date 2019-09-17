import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Head from '../../components/head';
import Layout from '../../components/layout';

import formatPeople from '../../components/people/format-people';

import Camera from '../../images/icon/camera-retro.svg';
import Users from '../../images/icon/users.svg';

import './people.css';

export const query = graphql`
  query {
    allFile(filter:{
      extension: { regex: "/(jpeg|jpg|png)/" },
      relativeDirectory: { eq: "people" }
    }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 150, height: 200, toFormat: JPG) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          name
        }
      }
    }
    appreciationDay2018: file(relativePath: { eq: "group/2018-appreciation-day.jpg" }) {
      childImageSharp {
        fixed(width: 1123, height: 575) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    christmas2018: file(relativePath: { eq: "group/2018-christmas.jpg" }) {
      childImageSharp {
        fixed(width: 1180, height: 539) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const People = ({ data }) => {
  const images = data.allFile.edges.reduce((accum, edge) => ({
    ...accum,
    [edge.node.name]: edge.node.childImageSharp.fixed,
  }), {});

  return (
    <Layout>
      <Head title="People" />
      <div className="people">
        <section>
          <header>
            <h1>
              People
            </h1>
            <img
              alt="Group of people"
              height="25"
              src={Users}
            />
          </header>
          <div className="people__grid">
            {formatPeople(images)}
          </div>
        </section>
        <section>
          <header>
            <h1>
              Lab photos
            </h1>
            <img
              alt="Camera"
              height="25"
              src={Camera}
            />
          </header>
          <div className="people__photos">
            <figure>
              <Img
                alt="Christmas party, 2018"
                fixed={data.christmas2018.childImageSharp.fixed}
              />
              <figcaption>Christmas party, 2018.</figcaption>
            </figure>
            <figure>
              <Img
                alt="Staff appreciation day, 2018"
                fixed={data.appreciationDay2018.childImageSharp.fixed}
              />
              <figcaption>Staff appreciation day, 2018.</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </Layout>
  );
};

People.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fixed: PropTypes.shape({}).isRequired,
            }).isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    appreciationDay2018: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    christmas2018: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default People;
