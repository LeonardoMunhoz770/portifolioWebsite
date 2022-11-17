import React from "react";
import { About } from "./componentes/about";
import { Header } from './componentes/header/index'
import { Presentation } from "./componentes/presentation";

function App() {
  return (
    <>
      <Header/>
      <Presentation/>
      <About backgroundColor="#EBECED"/>
    </>
  );
}

export default App;
