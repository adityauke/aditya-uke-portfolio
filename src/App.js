import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Footer from './components/footer';
import ProjectSection from './components/projectSection';
import SkillsSection from './components/SkillsSection';
import Contact from './components/contact';
import WriteRecommendation from './components/writeRecommendation';
import notFound from './components/notFound';
import RecommendationSection from './components/RecommendationSection';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import AddProject from './components/AddProject';
import { Provider } from './context';
import AllProject from './components/AllProject';



function App() {
  return (
    <Provider>
        <BrowserRouter>
        <ScrollToTop/> 
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Profile name="Aditya Uke" leadText="I am a student at ARMIET" />
            <RecommendationSection/>
            <SkillsSection />
            <ProjectSection />
            <About/>
          </Route>
          <Route exact path="/project/all" component={AllProject}/>
          <Route exact path="/project/add" component={AddProject}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/write-a-recommendation" component={WriteRecommendation} />
          <Route component={notFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
    
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export default App;
