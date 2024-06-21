import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header";
import Weather from "./components/Weather";
import ImageCarousel from "./components/ImageCarousel";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Goals from "./components/Goals";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Weather />
        <ImageCarousel />
        <Quote />
        <Goals />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
