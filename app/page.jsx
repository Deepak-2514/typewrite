import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
