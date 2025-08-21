import React from "react";
import AboutPage from "./AboutPage";
import ContactMePage from "./ContactMePage";
import { PostsSlides } from "../components/PostsSlides";

export const MainPage = () => {
  return (
    <div className="max-w-[900px] mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-10 w-full md:basis-4/5">
          <PostsSlides />
          <AboutPage />
          <ContactMePage />
        </div>
      </div>
    </div>
  );
};
