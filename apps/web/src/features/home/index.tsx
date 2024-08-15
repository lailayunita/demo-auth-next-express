"use client";

import { AutoComplete } from "@/components/Autocomplete";
import BlogList from "./components/BlogList";
import Jumbotron from "./components/Jumbotron";

const Homepage = () => {
  return (
    <main className="container mx-auto space-y-10 px-4">
      <Jumbotron />
      <AutoComplete />
      <BlogList />
    </main>
  );
};

export default Homepage;
