import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div id="carousel" className='contentWrapper'>
        <div className='posContent manyPill'>
          <a href=".shop">
            <h1>Shop</h1>
            <span className='fontThin'>all the drugs<br></br>you want</span>
          </a>
          <a href=".faq">
            <h1>FAQ</h1>
            <span className='fontThin'>answering<br></br>your questions</span>
          </a>
          <a href=".safety">
            <h1>Safety</h1>
            <span className='fontThin'>important<br></br>information</span>
          </a>
          <a href=".contact">
            <h1>Contact</h1>
            <span className='fontThin'>suggestions<br></br>and feedback</span>
          </a>
        </div>
      </div>

      <div id="blueBack" className='contentWrapper'>
        <div className='bluePill posContent'>
          <span>
            <h1>Blue<br></br>Cover</h1>
            <h3 className='fontThin'>the king<br></br>of ecstasy</h3>
          </span>

          <span>
            <h1>0.0029BTC / 0.1114 ETH</h1>
            <h4 className="fontThin">you want to party all night long and the following day
              as well? check out the <b>blue clover</b>, our best-selling
              and highest-rated product. We are only resellers of this premium
              pill so don't miss out on this opportunity contains 100mg mdma
              per pill.
            </h4>
          </span>
        </div>
      </div>

      <div id="greenBack" className='contentWrapper'>
        <div className='greenPill posContent'>
          <span>
            <h1>Green<br></br>snowflake</h1>
            <h3 className='fontThin'>packs a<br></br>powerful punch</h3>
          </span>

          <span>
            <h1>0.0044BTC / 0.1667 ETH</h1>
            <h4 className="fontThin">the green clover is only recommended for experienced users.
            as it is the strongest pill in our selection if you feel ready for it though. it will
            be an experience like nothing else. contains 150mg mdma per pill.
            </h4>
          </span>             
        </div>
      </div>

      <div id="purpleBack" className='contentWrapper'>
        <div className='purplePill posContent'>
          <span>
            <h1>Purple<br></br>flower</h1>
            <h3 className='fontThin'>a night of<br></br>fluffy happiness</h3>
          </span>

          <span>
            <h1>0.0021BTC / 0.0802 ETH</h1>
            <h4 className="fontThin">the purple flower is our go to recommendation for a night full
            of fluffy happiness with it's dose optimized for around six hours of perfect ecstasy
            experience. contains 70mg mdma per pill.
            </h4>
          </span>             
        </div>
      </div>

      <div id="redBack" className='contentWrapper'>
        <div className='redPill posContent'>
          <span>
            <h1>red pill</h1>
            <h3 className='fontThin'>your ticket to<br></br>wonderland</h3>
          </span>

          <span>
            <h1>0.0044BTC / 0.1667 ETH</h1>
            <h4 className="fontThin">great quality at an affordable price
            recommended for beginners. the red pill will take you to wonderland and offer
            you a great first experience find out how deep the rabbit hole goes! clean, high
            quality mdma guaranteed.
            </h4>
          </span>             
        </div>
      </div>
    </Slider>
  );
}

export default App;
