import "./App.css";
import MyCarousel from "./components/MyCarousel";
import MyNavbar from "./components/MyNavbar";
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Bikes from "./pages/Bikes";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import PageAnimation from "./components/PageAnimation";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const setCookie = (cookieName, cvalue, exDays) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
  };

  // setCookie("language", "DE", 14);

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const getLanguageCookie = () => {
    let lng = getCookie("language");
    if (lng != "") {
      return lng;
    } else {
      return "EN";
    }
  };

  const changeLanguage = (lng) => {
    setCookie("language", lng, 14);
    setPageLanguage(getLanguageCookie());
  };

  const [language, setPageLanguage] = useState(getLanguageCookie());
  const [pageToShow, setpage] = useState("terms");
  const setLanguage = (languageCode) => {
    setPageLanguage(languageCode);
    //document.cookie = "language={languageCode}";
  };
  console.log(document.cookie);
  const generatePage = (pageName) => {
    if (pageName === "home") {
      return (
        <PageAnimation>
          <HomePage language={language} />
        </PageAnimation>
      );
    } else if (pageName === "about") {
      return (
        <PageAnimation>
          <AboutUs language={language} />
        </PageAnimation>
      );
    } else if (pageName === "bikes") {
      return (
        <PageAnimation>
          <Bikes language={language} />
        </PageAnimation>
      );
    } else if (pageName === "contact") {
      return (
        <PageAnimation>
          <Contact language={language} />
        </PageAnimation>
      );
    } else if (pageName === "terms") {
      return (
        <PageAnimation>
          <Terms language={language} />
        </PageAnimation>
      );
    }
  };

  return (
    <div className="App">
      <MyCarousel />
      <div className="navBackground">
        <Container>
          <MyNavbar
            language={language}
            english={() => changeLanguage("EN")}
            german={() => changeLanguage("DE")}
            polish={() => changeLanguage("PL")}
            home={() => setpage("home")}
            // comment added to see git's reaction
          />
        </Container>
      </div>
      <Container>
        <div className="brightBeckground">{generatePage(pageToShow)}</div>
        {/*}
            <Route path="/about" element={<AboutUs language={language} />} />
            <Route path="/bikes" element={<Bikes language={language} />} />
            <Route path="/terms" element={<Terms language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/test" element={<Test />} />
  */}
      </Container>
    </div>
  );
}

export default App;
