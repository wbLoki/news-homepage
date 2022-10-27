import React from "react";
import "../styles/feed.css";
import web3Desktop from "../images/image-web-3-desktop.jpg";
import web3Mobile from "../images/image-web-3-mobile.jpg";
import retro from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";

function feed() {
  return (
    <div className="Feed">
      <div className="md:flex gap-6" id="landing">
        <div className="web3" id="main-content">
          <img className="hidden sm:block" src={web3Desktop} alt="web 3" />
          <img className="sm:hidden" src={web3Mobile} alt="web 3" />
          <div className="sm:flex py-6 items-center">
            <h1 className="text-5xl font-bold sm:w-1/2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="sm:w-1/2">
              <p className="text-slate-600">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="action-button">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="news" id="additional-info">
          <h1 className="text-4xl font-bold text-amber-500">New</h1>
          <div id="news-articles" className="news-articles">
            <div className="article">
              <h2>Hydrogen VS Electric Cars</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="article">
              <h2>The Downsides of Al Artistry</h2>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="article">
              <h2>Is VC Funding Drying Up?</h2>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom-cards" className="cards">
        <div className="card">
          <img src={retro} alt="retro pc" className="img" />
          <div className="details">
            <h1>01</h1>
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="card">
          <img src={laptop} alt="laptop" className="img" />
          <div className="details">
            <h1>02</h1>
            <h2>Top 10 Laptops of 2022</h2>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="card">
          <img src={gaming} alt="gaming" className="img" />
          <div className="details">
            <h1>03</h1>
            <h2>The Growth of Gaming</h2>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default feed;
