import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero banner"
        />
        <div className="home__row">
          <Product
            title="Who is Out of Toilet Paper? | Prank Pack “Roto Wipe” - Wrap Your Real Gift in a Prank Funny Gag Joke Gift Box | Prank-O - The Original Prank Gift Box"
            price={20.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81sltpRGlzL._AC_SL1500_.jpg"
            rating={1}
          />
          <Product
            title="Funwares TriceraTaco Ultimate Dinosaur Stand, Holds 2, Top Rated Novelty Taco Holder"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71HhoigSRUL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="Supreme Brick A red clay brick designed and sold by skateboarding brand Supreme"
            price={15.99}
            image="https://steemitimages.com/DQmV31iSkUEk2QuhGtBR1BFXpaiAXQdssU3AUSHYQU58Mvk/2.jpg"
            rating={1}
          />
          <Product
            title="Gagster Donald Trump Toilet Paper Roll - Funny Political Bathroom Gag Gift Democrats and Republicans"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81s3N6aBtNL._AC_SL1500_.jpg"
            rating={1}
          />
          <Product
            title="Accoutrements Handihorse"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61e7F5l8ZaL._AC_SL1000_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="OSTRICH PILLOW ORIGINAL Travel Pillow for Airplane Flying - Travel Accessories for Head Support, Power Nap on Flight and Desk - Sleepy Blue"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61FuGUpDGhL._AC_SL1200_.jpg"
            rating={1}
          />
          <Product
            title="Prank Pack “Pet Butler” - Wrap Your Real Gift in a Prank Funny Gag Joke Gift Box - by Prank-O - The Original Prank Gift Box | Awesome Novelty Gift Box for Any Adult or Kid!"
            price={15.99}
            image="https://images-na.ssl-images-amazon.com/images/I/814gd4n8psL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
