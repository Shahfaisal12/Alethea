import React from "react";
import CharacterGPT from "../components/elements/home/CharacterGPT";
import GenerativeAge from "../components/elements/home/GenerativeAge";
import Hero from "../components/elements/home/Hero";
import TryCharacterGpt from "../components/elements/home/TryCharacterGpt";
import Slides from "../components/utils/Slides";
import AlentheaAi from "../components/elements/home/AletheaAi";
import TokenizingAi from "../components/elements/home/TokenizingAi";
import AiProtocole from "../components/elements/home/AiProtocole";
import UtilityToken from "../components/elements/home/UtilityToken";
import SatyConnect from "../components/elements/home/SatyConnect";

const Home = () => {
  return (
    <>
      <Hero />
      <GenerativeAge />
      <CharacterGPT />
      <Slides />
      <TryCharacterGpt />
      <AlentheaAi />
      <TokenizingAi />
      <AiProtocole />
      <UtilityToken />
      <SatyConnect />
    </>
  );
};

export default Home;
