import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header";
import Weather from "./components/Weather";
import ImageCarousel from "./components/ImageCarousel";
import Quote from "./components/Quote";
import Goals from "./components/Goals";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Weather />
          <ImageCarousel />
          <Quote />
          <Goals />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
