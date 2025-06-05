// src/App.jsx
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection'
import CardList from './components/CardList';
import ImageModal from './components/ImageModal'
import Footer from './components/Footer';
import posts from './data/post';




function App() {

  const [cards, setCards] = useState(posts)


  return (
    <div>
      <Header />
      <main className="container">
      <HeroSection onAddPost={(newPost) => setCards((prev) => [newPost, ...prev])} />
        <hr className="hero-divider" />
        <CardList cardsData={cards} />
        <ImageModal />
         <hr />
      </main>
      <Footer />
    </div>
  );
}

export default App;
