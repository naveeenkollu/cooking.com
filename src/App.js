import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FindCard from './components/FindCard';
import LatestRecipes from './components/LatestRecipes';
import RecipeCard from './components/RecipeCard';
import SeeMore from './components/SeeMore';
import Social from './components/social';
import Footer from './components/footer';

class App extends Component {

    render() {
      return(
        <div>
            <Navbar />
            <FindCard />
            <LatestRecipes />
            <RecipeCard />
            <SeeMore />
            <Social />
            <Footer />
        </div>
      )
    }
}


export default App;