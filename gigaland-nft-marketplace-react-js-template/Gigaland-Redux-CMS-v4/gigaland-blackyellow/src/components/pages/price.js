import React from 'react';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #000000;
    border-bottom: solid 1px #000 !important;
  }
`;

const price= () => (
<div>
  <GlobalStyles/>
    <section className='jumbotron breadcumb no-bg'>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <h1>Pricing</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  <Pricing />

  <Footer />
</div>

);
export default price;