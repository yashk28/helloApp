import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";
import instragramLogo from "./assets/instagram.svg";
import linkedinLogo from "./assets/linkedin.svg";
import gmailLogo from "./assets/gmail.svg";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const headlineRef = useRef();
  const subheadlineRef = useRef();
  const buttonRef = useRef();
  const contactRefs = useRef([]);
  contactRefs.current = [];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(
      headlineRef.current,
      { opacity: 1, scale: 1, duration: 0.5, ease: "sine.in" },
      0
    );
    tl.to(subheadlineRef.current, { opacity: 1, duration: 0.7 }, 0.5);
    tl.to(
      buttonRef.current,
      { opacity: 1, duration: 0.5, ease: "power4.in" },
      0.7
    );
  }, []);

  const handleClick = () => {
    setButtonClicked(true);
    gsap.to(buttonRef.current, {
      rotation: 360,
      scale: 0,
      opacity: 0,
      repeat: 0,
      duration: 2,
      ease: "linear",
    });
  };

  useEffect(() => {
    contactRefs.current.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        scale: 0.5,
        duration: 0.5,
        delay: 0.5 + index * 0.3,
      });
    });
  }, [buttonClicked]);

  const addToRefs = (el) => {
    if (el && !contactRefs.current.includes(el)) {
      contactRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <header className="hero">
        <h1 ref={headlineRef}>Hello Zostel folks !!!</h1>
        <h2 ref={subheadlineRef}>From Yash Kunte</h2>
        <button ref={buttonRef} className="contactButton" onClick={handleClick}>
          Contact me
        </button>
      </header>
      {buttonClicked && (
        <section className="contactPath">
          <div className="contact insta" ref={addToRefs}>
            <a
              href="https://www.instagram.com/yash_kunte28/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-icon"
            >
              <img src={instragramLogo} alt="Instagram logo" />
            </a>
          </div>
          <div className="contact linkedin" ref={addToRefs}>
            <a
              href="https://www.linkedin.com/in/yash-kunte-53aa96157/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <img src={linkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
          <div className="contact gmail" ref={addToRefs}>
            <a
              href="mailto:yash.kunte123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <img src={gmailLogo} alt="Gmail logo" />
            </a>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
