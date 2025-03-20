"use client";
import Navbar from "./ui/components/Navbar";
import Image from "next/image";
import HomePage from "./ui/pages/home";
import AboutPage from "./ui/pages/about";
import HowItWorksPage from "./ui/pages/how-it-works";
import FeaturesPage from "./ui/pages/features";
import TaglinPages from "./ui/pages/taglines";
import PreRegistration from "./ui/pages/pre-registration";
import FeedbackPage from "./ui/pages/feedback";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* Homepage */}
      <HomePage />

      {/* AboutPage */}
      <AboutPage />

      {/* How it Works? */}
      <HowItWorksPage />

      {/* features */}
      <FeaturesPage />

      {/* taglines */}
      <TaglinPages />

      {/* feeback */} 
      <FeedbackPage/>

      {/* Pre Registration */}
      <PreRegistration />

    </>
  );
}
