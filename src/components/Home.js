import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { introVideo } from "../images/imagesUrl";

const Home = () => (
  <div>
    <h3>Bem vindo à com heART</h3>
    <div style={{ width: 660, height: "auto" }}>
      <ResponsiveEmbed aspectRatio="16by9" controls>
        <embed type="video/mp4" src={introVideo} />
      </ResponsiveEmbed>
    </div>
  </div>
);

export default Home;
