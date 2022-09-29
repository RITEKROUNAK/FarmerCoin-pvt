import React from 'react';
import SliderMainParticleGrey from '../components/SliderMainParticleGrey1';
import CarouselCollectionRedux from '../components/CarouselCollectionReduxNew';
import CarouselNewRedux from '../components/CarouselNewReduxNew';
import AuthorListRedux from '../components/AuthorListRedux';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  .navbar{
    background: #fff;
  }
  .col-white {
      color: #0d0c22;
  }
  .de_count{
    h3{
      font-size: 36px;
      margin-bottom: 0;
      span {
        font-size: 36px;
      }
    }
  }
  .btn-main.inline.white{
    background: rgba(131,100,266, .2);
  }
  .yelbg{
    background-color: rgb(255, 249, 225);
  }
  .yelbg-2{
    background-color: rgb(247, 255, 231);
  }
  .greybg{
    background-color: rgb(246, 245, 251);
  }
  h2{
    font-size: 30px;
    margin-bottom: 20px;
    margin-top:0;
  }
  .pb60 {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  @media only screen and (max-width: 1199px) { 
    .breadcumb.h-vh{
      background-image: none !important;
    }
  }
`;


const home= () => (
  <div>
    <GlobalStyles />
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/background/11.jpg'})`}}>
         <SliderMainParticleGrey/>
      </section>

      <section className='container'>
        <Catgor/>
      </section>

      <section className='pb60 yelbg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
                <h2>Top Sellers</h2>
            </div>
            <div className='col-lg-12'>
              <AuthorListRedux/>
            </div>
          </div>
        </div>
      </section>

      <section className='pb60 yelbg-2'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2>Hot Collections</h2>
          </div>
          <div className='col-lg-12'>
            <CarouselCollectionRedux/>
          </div>
        </div>
        </div>
      </section>

      <section className='pb60 greybg'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2>New Items</h2>
          </div>
          <div className='col-lg-12'>
            <CarouselNewRedux/>
          </div>
        </div>
        </div>
      </section>

    <Footer />

  </div>
);
export default home;