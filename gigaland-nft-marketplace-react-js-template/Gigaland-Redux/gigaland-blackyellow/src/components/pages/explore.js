import React from 'react';
import ColumnNewRedux from '../components/ColumnNewRedux';
import Footer from '../components/footer';
import TopFilterBar from '../components/TopFilterBar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .css-wenqhu-control{
    background-color: hsl(0, 0%, 0%);
    border-color: hsl(0, 0%, 30%);
    border-radius: 0px;
  }
`;

const explore= () => (
<div>
<GlobalStyles />
  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Explore</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <TopFilterBar />
          </div>
        </div>
       <ColumnNewRedux/>
      </section>


  <Footer />
</div>

);
export default explore;