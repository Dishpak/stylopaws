import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Trendings from "./components/Trendings";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

function App() {
  return (<div className="App d-flex flex-column min-vh-100">
    <Header/>
    <main className="box p-0 w-100">
      <section className="container mb-5">
        <HeroSection/>
      </section>
      <section className="container my-5">
        <Categories/>
      </section>
      {/*<section className="container">*/}
      {/*    <Trendings/>*/}
      {/*</section>*/}
      <section className="mt-5">
          <SubscribeSection/>
      </section>
    </main>
    <Footer/>
  </div>);
}

export default App;
