"use client";
import Navbar from "./ui/components/Navbar";
import Image from "next/image";
import HomePage from "./ui/pages/home";
import AboutPage from "./ui/pages/about";
import HowItWorksPage from "./ui/pages/how-it-works";
import FeaturesPage from "./ui/pages/features";
import TaglinePages from "./ui/pages/taglines";
import FeedbackPage from "./ui/pages/feedback";
import SuggestionPage from "./ui/pages/suggestion";

import PreRegisterPage from "./ui/pages/pre-register";
import Footer from "./ui/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HomePage />

      <AboutPage />
      
      <HowItWorksPage />
      
      <FeaturesPage />
      
      <TaglinePages />

      <FeedbackPage />

      <PreRegisterPage />

      <SuggestionPage/>

      <Footer />
    </>
  );
}
