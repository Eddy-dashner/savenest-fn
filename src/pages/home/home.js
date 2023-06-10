import React, { useState, useEffect, useRef } from "react";
// import ScrollReveal from "scrollreveal";
import "./home.css";
import Button from "../../properties/button";
import Image from "./images/2.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { allData, testData } from "../../constants/index";

function Home() {
  const [visible, setVisible] = useState(false);
  // const [currentCard, setCurrentCard] = useState(1);

  //sliding testimonial section
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: slideIndex,
    afterChange: (current) => setSlideIndex(current),
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000,
  };

  const handleSlideClick = (index) => {
    setSlideIndex(index);
  };

  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust the threshold as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="savenest-home">
      <div className="savenest-header" id="home">
        <div className="savenest-logo">
          {/* <img/> */}
          <h1>LOGO</h1>
        </div>
        <div className="savenest-link">
          <ul className="home-list">
            <li className="home-link">
              <a href="">Home</a>
            </li>
            <li className="home-link">
              <a href="#about">Who we are</a>
            </li>
            <li className="home-link">
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
        <div className="savenest-signin">
          <Button btnName="SignIn"></Button>
        </div>
        <div className="savenest-humberger">
          {!visible && <MdOutlineMenu onClick={() => setVisible(true)} />}
          {visible && <GrFormClose onClick={() => setVisible(false)} />}
        </div>
      </div>
      {visible && (
        <div className="semi-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Who we are</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      )}
      <div className="savenest-intro" id="about">
        <div className="savenest-secone">
          <h1>
            Save <br /> With Us
          </h1>
          <div className="respo-image">
            <img src={Image} />
          </div>
          <p>
            Welcome to MoneCO! We provide a convenient way for saving, whether
            you're an individual or want to be part of a team. Our user-friendly
            interface allows for easy organization and retrieval of your saved
            pages. But that's not all we also offer collaborative features for
            teams. Sign up now and experience the convenience of our saving
            platform.
          </p>
          <Button btnName="Explore more"></Button>
          <span className="left-arrow">
            <MdOutlineArrowForward />
          </span>
        </div>
        <div className="savenest-sectwo">
          <img src={Image} alt="image" />
        </div>
      </div>
      <div
        className="savenest-home-about slide-up"
        ref={(ref) => (sectionRefs.current[0] = ref)}
      >
        <h1 className="home-about-header">
          Who <span> we are</span>
        </h1>
        <div className="par">
          <p className="home-about-par">
            We strive to help people create and implement financial plans, track
            expenses, and identify areas where they can reduce spending. It
            encourages goal-oriented savings by providing tools to set and track
            financial goals, offering calculators, trackers, and reminders to
            stay on track. Additionally, the website aims to educate users about
            money-saving strategies, investment options, and personal finance
            best practices. Ultimately, the aim is to enable users to take
            control of their finances, develop healthy saving habits, and
            achieve their financial goals through effective planning and smart
            money management.
          </p>
        </div>
      </div>
      <div
        className="savenest-home-work slide-up"
        ref={(ref) => (sectionRefs.current[1] = ref)}
      >
        <h1 className="hwork">How it works</h1>
        <div className="savenest-home-cards">
          {allData.map((data) => (
            <div className="home-card">
              <p className="home-number">{data.number}</p>
              <h1 className="home-title">{data.title}</h1>
              <p className="home-description">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="savenest-home-test slide-up"
        ref={(ref) => (sectionRefs.current[2] = ref)}
      >
        <h1 className="home-test-header">Testimonials</h1>
        <div className="testimonial-home-intro" {...settings}>
          {testData.map((test) => (
            <div className="all-home-test" key={testData.id}>
              <div className="test-image">
                <img src={test.image} />
              </div>
              <div className="test-descri">
                <p className="test-descri-para">{test.description}</p>
                <br />
                <h4 className="test-descri-head">{test.name}</h4>
              </div>
              <div className="test-home-icon">
                <span>
                  <MdArrowForwardIos
                    onClick={() => handleSlideClick(testData.id - 1)}
                  />
                </span>
                <span>
                  <MdArrowBackIosNew />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="savenest-home-contact slide-up"
        id="connect"
        ref={(ref) => (sectionRefs.current[3] = ref)}
      >
        <h1>Connect with us</h1>
        <div className="both-savenest">
          <div className="contact-home-info">
            <h2 className="contact-home-head">
              We would love to <br /> hear from you
            </h2>
            <p className="contact-home-data">
              Share your feedback with us! We value your thoughts on our
              money-saving website. Contact us today and help us enhance your
              savings experience.
            </p>
            <div>heloooooo</div>
            <div className="contact-home-icon">
              <p className="phone-ic">
                <span>
                  <BsFillTelephoneFill />
                </span>{" "}
                (+250)788263772
              </p>
              <p className="email-ic">
                <span>
                  <MdMarkEmailUnread />
                </span>
                savenest@gmail.com
              </p>
            </div>
          </div>
          <div className="contact-home-form">
            <input type="text" placeholder="Your Name" className="name" />
            <input type="text" placeholder="Phone Number" className="phone" />
            <br />
            <input type="text" placeholder="Subject" className="subject" />
            <br />
            <textarea
              className="message"
              rows="8"
              placeholder="Message"
            ></textarea>
            <Button btnName="SEND"></Button>
          </div>
        </div>
      </div>
      <div className="savenest-footer">
        <h1>SaveNest</h1>
        <p className="par-foot">
          Start saving and secure your financial future. Our saving website is
          here to help <br /> you achieve your money-saving goals.
        </p>
        <div className="footer-icons">
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsLinkedin />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
        <div className="footer-lists">
          <ul className="footer-list">
            <li className="footer-link">Home</li>
            <li className="footer-link">Who we are</li>
            <li className="footer-link">Connect</li>
          </ul>
        </div>
        <div className="footer-right">@2023 Savenest | All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Home;
