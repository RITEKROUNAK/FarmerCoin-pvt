import React from 'react';
import SliderCarouselRedux from '../components/SliderCarouselRedux';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import CarouselNewRedux from '../components/CarouselNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import FeatureBox from '../components/FeatureBox';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar .search #quick_search{
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree= () => (
  <div>
  <GlobalStyles />
      <section className="jumbotron no-bg no-bottom">
        <div className='container-fluid'>
          <div className='row'>
             <SliderCarouselRedux/>
          </div>
        </div>
      </section>
      <div className='spacer-single'></div>

      <section className='container no-bottom no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>New Items</h2>
              <div className="small-border"></div>
          </div>
        </div>
       <CarouselNewRedux/>
      </section>
      <div className='spacer-single'></div>

      <section className='container no-bottom no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Hot Collections</h2>
              <div className="small-border"></div>
          </div>
        </div>
        <div className='container no-top no-bottom'>
          <div className='row'>
            <div className='col-lg-12 px-0'>
              <CarouselCollectionRedux/>
            </div>
          </div>
        </div>
      </section>
      <div className='spacer-single'></div>

      <section className='container no-bottom no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2 className='style-2'>Top Seller</h2>
              <div className='spacer-single'></div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>
      <div className='spacer-single'></div>

      <section className='container no-top'>
        <div className='row'>
            <div className='col-lg-12 mb-3'>
              <h2 className='style-2'>Create and Sell Now</h2>
            </div>
            <FeatureBox/>
        </div>
      </section>

    <Footer />

  </div>
);
export default homethree;