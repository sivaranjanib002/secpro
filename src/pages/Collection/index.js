import React, { useState } from "react";
import Container from "./Container";
import Button from "../../component/Button";

import Haidoc from "../../Assets/HaiDoc (1).png";
import logo from "../../Assets/logo.png";
import HeroSectionImg from "../../Assets/HeroSectionImg.png";
import MainServiceImg1 from "../../Assets/doctor (1) 1.png";
import MainServiceImg2 from "../../Assets/Group 67.png";
import MainServiceImg3 from "../../Assets/Group 68 (1).png";

import "./style.scss";
import HeroCard from "./HeroCard";
import groupimage from "../../Assets/Group 167.png";
import MainServiceCard from "./MainServiceCard";
import group116 from "../../Assets/picd.png";
import img01 from "../../Assets/Frame 143.png";
import img02 from "../../Assets/img02.png";
import img03 from "../../Assets/img03.png";
import img04 from "../../Assets/img04.png";
import SpecialServicesCard from "./SpecialServicesCard";
import line from "../../Assets/line.png";
import OurDocters from "./Ourdocters";
import group132 from "../../Assets/Group 132.png";
import docspc from "../../Assets/docspc.png";
import c01 from "../../Assets/c01.png";
import c02 from "../../Assets/c02.png";
import c03 from "../../Assets/c03.png";
import c04 from "../../Assets/c04.png";
import c05 from "../../Assets/c05.png";
import Footer from "./footer";
import google from "../../Assets/google.png";
import icon6 from "../../Assets/twiter.png";
import icon4 from "../../Assets/linkedin.png";
import icon5 from "../../Assets/insta.png";

const mainServiceCardDetailsList = [
  {
    Image: MainServiceImg1,
    title: "Chat with doctor",
    desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered. s,djhlsdlj sljhdkh khskhdb",
  },
  {
    Image: MainServiceImg2,
    title: "Health Store",
    desc: "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment",
  },
  {
    Image: MainServiceImg3,
    title: "Visit Hospital",
    desc: "Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.",
  },
];

const Collection = () => {
  const [mainServiceCardSelected, setMainServiceCardSelected] = useState(1);
  return (
    <div className="collectionPage">
      <Container>
        <div className="navSection">
          <div className="imgContainer">
            <img src={Haidoc} alt="Logo" />
            <img className="logoimg" src={logo} alt="" />
          </div>
          <div className="navMenu">
            <div className="navMenuElement">Home</div>
            <div className="navMenuElement">Services</div>
            <div className="navMenuElement">Product</div>
            <div className="navMenuElement">About Us</div>
          </div>
          <Button>Register</Button>
        </div>
      </Container>
      <Container parameter="right">
        <div className="section1">
          <div className="section1-left">
            <div className="titleContainer">
              <div className="title ">We are ready to</div>
              <div className="title coloured">Help your Health</div>
              <div className="title ">Problems</div>
            </div>
            <div className="para">
              In times like today, your health is very important, especially
              since the number of COVID-19 cases is increasing day by day, so we
              are ready to help you with your health consultation
            </div>
            <Button>Try Free Consultation</Button>
            <div className="heroCardContainer">
              <HeroCard subscriberCount="200" text="Active Doctor" />
              <HeroCard subscriberCount="15K" text="Active User" />
              <HeroCard subscriberCount="50" text="Active Pharmacy" />
            </div>
          </div>
          <div className="section1-right">
            <img src={HeroSectionImg} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="section2">
          <div className="groupimage">
            <img src={groupimage} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="section3">
          <div className="titleContainer">
            Our
            <span> Main Services </span>
            Category
          </div>

          <div className="mainServiceCardContainer">
            {mainServiceCardDetailsList.map((el, _index) => {
              return (
                <MainServiceCard
                  Image={el.Image}
                  title={el.title}
                  active={_index === mainServiceCardSelected}
                  onClick={() => {
                    setMainServiceCardSelected(_index);
                  }}
                >
                  {el.desc}
                </MainServiceCard>
              );
            })}
          </div>
        </div>
      </Container>
      <Container>
        <div className="section4">
          <div className="section4-left">
            <img src={group116} alt="" />
          </div>
          <div className="section4-right">
            <div className="titleContainer">
              Our <span> Special Services</span>
            </div>
            <div className="para4">
              In times like today, your health is very important, especially
              since the number of COVID-19 cases is increasing day by day, so we
              are ready to help you with your health consultation
            </div>
            <div className="splgrid">
              <SpecialServicesCard
                Image={img01}
                title="Covid-19 Test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ornare tellus malesuada odio blandit. 
                Sit duis eu nisi habitant lorem egestas. "
              />
              <SpecialServicesCard
                Image={img02}
                title="Herbal Suplement"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. "
              />
              <SpecialServicesCard
                Image={img03}
                title="Laboratorium Test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. "
              />
              <SpecialServicesCard
                Image={img04}
                title="Menstruation Calendar"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. "
              />
            </div>
            <img className="line" src={line} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="section5">
          <div className="section5-left">
            <div className="title">Our Docter</div>
            <OurDocters
              title="Qualified Doctors"
              desc="Handled directly by general doctors and professional
                     and experienced specialists doctors."
              Image={group132}
            />
            <button className="view">View all Docters</button>
          </div>
          <div className="section5-right">
            <img src={docspc} alt="" />

            <div className="c-images">
              <img src={c01} alt="" />
              <img src={c02} alt="" />
              <img src={c03} alt="" />
              <img src={c04} alt="" />
              <img src={c05} alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="section6">
          <div className="titleContainer">
            Get{" "}
            <span>
              Started with <span1>Hai</span1>Doc
            </span>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              morbi tristique libero urna sem vitae. Viverra facilisis rhoncus
              et, nibh nullam vitae laoreet.
            </div>
            <button className="btn6">Lets Get Started</button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="section7">
          <div className="sub">
            <Footer
              titlem="Tutorify"
              desc="Learn more than just
                  a language"
              image={google}
              image1={icon6}
              image2={icon5}
              image3={icon4}
            />

            <Footer
              title="Find Teacher"
              st1="English Teachers"
              st2="Chinese Teachers"
              st3="French Teachers"
              st4="Spanish Teachers"
              st5="Other Teachers"
            />
            <Footer
              title="Lessons"
              st1="Learn English"
              st2="Learn Chinese"
              st3="Learn French"
              st4="Learn Spanish"
              st5="Learn More Languages"
            />
            <Footer
              title="Company"
              st1="About"
              st2="How it Works"
              st3="Term"
              st4="Privacy Policy"
            />
            <Footer title="More" st1="Documentation" st2="License" />
          </div>
        </div>
        <div className="section8">
          <div className="copy">Copyright © 2021. Created with love.</div>
        </div>
      </Container>
    </div>
  );
};

export default Collection;
