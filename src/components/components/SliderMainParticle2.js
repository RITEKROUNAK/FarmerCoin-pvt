import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import mp1 from '../../assets/mp2.png'

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle2= () => (
 <div className="container">
    <div className="row align-items-center">
          
          <div className="col-md-6 xs-hide">
          <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src={mp1} className="img-fluid" alt="" width='390px'/>
          </Reveal>
          </div>
          <div className="col-md-6">
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead col-white">
              It's a win-win scenario for both parties involved. The artist gets to sell their work and the buyer gets to own a unique piece of art.It offers farmers a way to sell oxide credits in the form of NFTs. to industrial buyers who need to purchase oxide credits in order to achieve sustainability goals. 
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("#", "_self")} className="btn-main inline lead">Explore</span>
              <div className="mb-sm-30"></div>
              </Reveal>

              <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
              <div className="row">
                  <div className="spacer-single"></div>
                  <div className="row">
                      </div>
              </div>
              </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainparticle2;