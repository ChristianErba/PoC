"use client"; 

import React, { useState, useEffect, useRef } from "react"; 
import styles from "./Input.module.css"; 

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false); 
  const [content, setContent] = useState(null); 
  const navbarRef = useRef(null); 

  const handleInputClick = () => {
    setShowNavbar(true); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the navbar and input bar
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowNavbar(false); 
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  const handleLinkClick = (type) => {

    switch (type) {
      case "cos'è":
        setContent({
          title: "Cos'è Logic Master AI?",
          text: "Logic Master AI è un progetto che sfrutta l'intelligenza artificiale pensato per gli sviluppatori e tecnici IT. E' in grado di scrivere codici in qualsiasi linguaggio, compilarli ed eseguirli. LMAI è in grado anche di svolgere le funzioni amministrative in un computer Windows.",
          imageUrl: "lmailogo.jpg"
        });
        break;
      case "team":
        setContent({
          title: "Team",
          text: "Il nostro team è composto dagli svliuppatori, dai designer, dagli analisti e dai manager che lavorano insieme per portare avanti il progetto Logic Master AI.",
         // imageUrl: "https://example.com/team-image.jpg" // Replace with a valid image URL
        });
        break;
      case "finanziatori":
        setContent({
          title: "Finanziatori",
          text: "I finanziatori di Logic Master AI sono i 2 miliaridari Smantha D'Antico e Mauro Civardi",
          //imageUrl: "https://example.com/funders-image.jpg" // Replace with a valid image URL
        });
        break;
      default:
        setContent(null);
    }
    setShowNavbar(false); 
  };

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        placeholder="Logic Master AI" 
        className={styles.inputBar} 
        onClick={handleInputClick} 
      />
      <input type="submit" value="" className={styles.inputButton} />
      
      {}
      {showNavbar && (
        <div className={styles.navbar} ref={navbarRef}> {}
          <a onClick={() => handleLinkClick("cos'è")}>Cos'è</a>
          <a onClick={() => handleLinkClick("team")}>Team</a>
          <a onClick={() => handleLinkClick("finanziatori")}>Finanziatori</a>
          {}
        </div>
      )}
      
      {}
      {content && (
  <div className={styles.contentDisplay}>
    <h2>{content.title}</h2> {} <br/>
    <div className={styles.horizontalContainer}>
      <img src={content.imageUrl}  className={styles.image} /> {}
      <p>{content.text}</p> {}
    </div>
  </div>
)}

    </div>
  );
}
