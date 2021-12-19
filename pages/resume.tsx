import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Navbar from "../components/navbar";
import Header from "../components/header";

type Props = {
  allPosts: Post[];
};

const Resume = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>sixlighthouses</title>
        </Head>
        <Container>
          <Navbar />
          <Header />
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                  Summary
                </h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  For over 20 years I have been designing, developing and
                  administering spatial software for private and public sector
                  organizations. These have included federal, state and local
                  governments, geoscience agencies, mining companies, global
                  research projects, asset management service providers and
                  local startups. I have worked in a variety of roles including
                  managing teams integrating complex and disparate data.{" "}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                  Education
                </h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Bachelor of Science
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  University of Western Australia
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                  Experience
                </h3>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h4 className="mb-4 text-2xl lg:text-3xl leading-tight">
                  Full Stack Developer
                </h4>
                <p className="text-xl leading-relaxed mb-4">
                  NHVR | 2020-Present
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                  Developing cloud based open source web mapping systems using
                  Azure Devops
                </p>
                <ul className="list-disc">
                    <li>Creation of containerized back end application (Geoserver/PostGIS)</li>
                    <li>Development of React/Typescript webapp</li>
                    <li>Development of Serverless functions using Typescript (Azure Functions)</li>
                    <li>Establish development environment and practices (Azure Devops)</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h4 className="mb-4 text-2xl lg:text-3xl leading-tight">
                  Technical Lead
                </h4>
                <p className="text-xl leading-relaxed mb-4">
                  BHP | 2016-2020
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                Led design and implementation of full suite of GIS applications.  Lead developer on near real time 3D visualization project, along with project ingesting imagery and LIDAR data from UAV
                </p>
                <ul className="list-disc">
                    <li>Architecture review of existing GIS</li>
                    <li>Development of Javascript/Typescript web mapping applications (React and Angular)</li>
                    <li>NodeJS API development</li>
                    <li>Design and development of mobile mapping application, iPad ArcGIS SDK app</li>
                    <li>ETL development using Python and FME</li>
                    <li>Prototyping SAP HANA\NodeJS LAM application</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h4 className="mb-4 text-2xl lg:text-3xl leading-tight">
                  Consultant
                </h4>
                <p className="text-xl leading-relaxed mb-4">
                  Ergon Energy | 2015-2016
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                Led the deployment of green field implementation of the full ArcGIS Suite of products.  
                </p>
                <ul className="list-disc">
                    <li>Design and documentation of System Architecture</li>
                    <li>Technical implementation, software installation and configuration</li>
                    <li>Development of automated ETL for data conversion and analysis</li>
                    <li>Development of Python processing tools for service production and web mapping tools</li>
                    <li>Development of JavaScript mapping applications</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <h4 className="mb-4 text-2xl lg:text-3xl leading-tight">
                  Front End Engineer
                </h4>
                <p className="text-xl leading-relaxed mb-4">
                  Tesera Systems | 2014-2015
                </p>
              </div>
              <div>
                <p className="text-lg mb-4">
                Developing innovative responsive geospatial web apps integrating large datasets using SOA.  Working with advanced JavaScript frameworks, AngularJS on the front end, NodeJS with Express on the back end 
                </p>
                <ul className="list-disc">
                    <li>Full software development cycle</li>
                    <li>Technical implementation, software installation and configuration</li>
                    <li>Providing architecture and design input to production apps</li>
                    <li>Working with ESRI’s ArcGIS SDK’s and ArcGIS Server REST API’s</li>
                </ul>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Resume;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
