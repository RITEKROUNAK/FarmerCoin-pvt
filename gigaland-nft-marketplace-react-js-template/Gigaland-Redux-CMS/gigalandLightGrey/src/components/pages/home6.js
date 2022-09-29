import React from 'react';
import SliderMainZero from '../components/SliderMainZero1';
import FeatureBox from '../components/FeatureBox';
import ColumnNewsound from '../components/ColumnNewsound';
import AuthorListRedux from '../components/AuthorListRedux';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
.h-vh{
  height: 100vh !important;
}
`;

const hometwo= () => (
  <div>
    <GlobalStyles />
      <section className="jumbotron no-bg h-vh" style={{background: `rgba(0, 0, 0, 0)url(${'./img/background/15.jpg'})repeat scroll center bottom / cover`}}>
         <SliderMainZero/>
      </section>

      <section className='container-fluid py-0'>
        <div className='container'>
          <FeatureBox/>
        </div>
      </section>

      <section className='container-fluid pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>New Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
       <ColumnNewsound/>
      </div>
      </section>

      <section className='container pb-0'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>

      <section className='container pt-5'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Join Community</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <Catgor/>
      </section>

    <section className='container pt-0'>
    <div className="row">
      <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Latest News</h2>
              <div className="small-border"></div>
            </div>
          </div>

      <div className="col-lg-4 col-md-6 mb30">
        <div className="bloglist item">
            <div className="post-content">
                <div className="post-image">
                    <img alt="" src="./img/news/news-1.jpg" className="lazy"/>
                </div>
                <div className="post-text">
                    <span className="p-tagline">Tips &amp; Tricks</span>
                    <span className="p-date">October 28, 2020</span>
                    <h4><span>The next big trend in crypto<span></span></span></h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                    <span className="btn-main">Read more</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 mb30">
        <div className="bloglist item">
            <div className="post-content">
                <div className="post-image">
                    <img alt="" src="./img/news/news-2.jpg" className="lazy"/>
                </div>
                <div className="post-text">
                    <span className="p-tagline">Tips &amp; Tricks</span>
                    <span className="p-date">October 28, 2020</span>
                    <h4><span>The next big trend in crypto<span></span></span></h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                    <span className="btn-main">Read more</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 mb30">
        <div className="bloglist item">
            <div className="post-content">
                <div className="post-image">
                    <img alt="" src="./img/news/news-3.jpg" className="lazy"/>
                </div>
                <div className="post-text">
                    <span className="p-tagline">Tips &amp; Tricks</span>
                    <span className="p-date">October 28, 2020</span>
                    <h4><span>The next big trend in crypto<span></span></span></h4>
                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                    <span className="btn-main">Read more</span>
                </div>
            </div>
        </div>
      </div>
        
    </div>
  </section>


    <Footer />

  </div>
);
export default hometwo;