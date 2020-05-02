import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { introVideo } from "../images/imagesUrl";
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h3 className="tracking-in-expand">Bem vindo à com heART</h3>
    <div className="slide-top" style={{ width: 660, height: "auto" }}>
      <ResponsiveEmbed aspectRatio="16by9" controls>
        <embed type="video/mp4" src={introVideo} />
      </ResponsiveEmbed>
    </div>
  </div>
);

export default Home;
