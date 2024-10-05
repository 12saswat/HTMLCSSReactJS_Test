import React from "react";
import NavBar from "./componentes/nav/NavBar";
import Hero from "./componentes/hero/Hero";
import Snap from "./componentes/snap/Snap";
import Post from "./componentes/post/Post";
import Make from "./componentes/make/Make";

import Signup from "./componentes/Signup";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Snap />
      <Post />
      <Make />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
