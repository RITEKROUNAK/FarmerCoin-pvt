import React, { useState } from 'react';
import Column from '../../components/Opensea/Column';
import Footer from '../../components/footer';
import TopFilterBar from '../../components/Opensea/TopFilterBar';


const ExploreOpensea = () => {

  const [side, setSide] = useState(); //0 for BUY and 1 for SELL
  const [owner, setOwner] = useState(); //0 for BUY and 1 for SELL

  return (
  <div>
    <section className='jumbotron breadcumb no-bg'>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12'>
              <h1 className='text-center'>Explore Opensea</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
          <div className='row'>
            <div className='col-lg-12'>
                <TopFilterBar setSide={setSide} setOwner={setOwner} />
            </div>
          </div>
        <Column side={side} owner={owner} />
        </section>
    <Footer />
  </div>
)};
export default ExploreOpensea;