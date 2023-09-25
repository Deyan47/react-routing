import React from "react";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find page!</p>
      </main>
    </>
  );
};

export default Error;
