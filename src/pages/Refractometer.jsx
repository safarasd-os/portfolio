import React from "react";
import PageContainer from "../assets/wrappers/PageContainer";
import Section from "../assets/wrappers/Section";
import Title from "../assets/wrappers/Title";
import Subtitle from "../assets/wrappers/Subtitle";
import Text from "../assets/wrappers/Text";
import ImageWrapper from "../assets/wrappers/ImageWrapper";
import Image from "../assets/wrappers/Image";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import pdf from "../assets/pdf/Rapport de projet - Armel & Hugo.pdf";
import {Link} from 'react-router-dom';
import StyledLink from "../assets/wrappers/Link";

const Refractometer = () => {
  return (
    <PageContainer>
      <Title>Refractometer Project</Title>

      <Section>
        <Image src={image1} alt="3d model image" />
        <Subtitle>Introduction</Subtitle>
        <Text>
          This project focuses on designing and building a digital
          refractometer, which measures the refractive index of liquids to
          determine their concentration.
        </Text>
      </Section>

      <Section>
        <Image src={image3} alt="3d model image" />
        <Subtitle>Working Principle</Subtitle>
        <Text>
          A refractometer works by shining light through a sample and measuring
          how the light bends. The angle of refraction is then used to calculate
          the refractive index.
        </Text>
      </Section>

      <Section>
        <Image src={image2} alt="3d model image" />
        <Subtitle>Components Used</Subtitle>
        <Text>
          - Light Source (LED or Laser) <br />
          - Optical Sensor (CMOS or CCD) <br />
          - Prism or Glass Interface <br />
          - Microcontroller for Data Processing <br />
          - Display for Output
          <br />- 9g 360 Servo
        </Text>
      </Section>

      <Section>
        <Image src={image4} alt="3d model image" />
        <Subtitle>Applications</Subtitle>
        <Text>
          - Food & Beverage Industry (e.g., measuring sugar content in juice){" "}
          <br />
          - Medical & Pharmaceutical Fields <br />
          - Chemical & Industrial Solutions <br />
        </Text>
        <a href={pdf}>
          Read a more in depth version here{" "} 
        </a>
        <StyledLink to="/">Back Home</StyledLink>
      </Section>
    </PageContainer>
  );
};

export default Refractometer;
