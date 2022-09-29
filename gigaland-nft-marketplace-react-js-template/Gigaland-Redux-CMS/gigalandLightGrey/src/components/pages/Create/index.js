import React, { memo, useState } from "react";
import Clock from "../../components/Clock";
import Footer from '../../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import auth from '../../../core/auth';
import request from '../../../core/auth/request';
import api from "../../../core/api";
import axios from "axios";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const CreateNft = () => {

  const jwt = auth.getToken();
  const author = auth.getUserInfo();
  const availableStatus = {
    BUY_NOW : 'buy_now',
    ON_AUCTION : 'on_auction',
    HAS_OFFERS : 'has_offers',
  }
  console.log(auth.getUserInfo())

  const [nftImage, setNftImage] = useState();
  const [nftImageTemp, setNftImageTemp] = useState();
  const [titlePreview, setTitlePreview] = useState('Pinky Ocean');
  const [pricePreview, setPricePreview] = useState('0.08');
  const [deadlinePreview, setDeadlinePreview] = useState('December, 30, 2021');
  const [nftStatus, setNftStatus] = useState(availableStatus.BUY_NOW);

  const initialValues = {
    title: '',
    unique_id: '',
    status: availableStatus.BUY_NOW, //placeholder
    category: 'art', //placeholder
    item_type: 'single_items', //placeholder
    collections: 'abstraction', //placeholder
    description: '',
    price: '',
    author_link: '/Author',
    nft_link: '/ItemDetail',
    bid_link: '/ItemDetail',
    bid: 1,
    max_bid: 20,
    likes: 0,
    views: 0,
    priceover: 0,
    showcase: false,
    audio_url: '',
    author: author.id //author relation
  };
  
  const validationSchema = Yup.object().shape({
    title: Yup.lazy(() =>
      Yup.string()
        .required('title is required')
    ),
    description: Yup.lazy(() =>
      Yup.string()
        .required('description is required')
    ),
    price: Yup.lazy(() =>
      Yup.string()
        .required('price is required')
    ),
  });
  
  const handleNftPicture = (event) => {
    let file = event.target.files[0];
    setNftImage(file)
    let reader = new FileReader();
    reader.onloadend = () => {
      setNftImageTemp(reader.result)
    };
    reader.readAsDataURL(file);
  }

  const handleSubmitForm = async (data) => {
    const requestURL = 'http://localhost:1337/api/nfts';

    await request(requestURL, { method: 'POST', body: {data: data}})
    .then((response) => {
        const { data } = response;
        let nftId = data.id;
        handleSubmitNftPicture(nftImage, 'preview_image', nftId);
    }).catch((err) => {
        console.log(err);
    });
  }

  const handleSubmitNftPicture = async (file, field, nftId) => {
    var formData = new FormData()

    formData.append('files', file)
    formData.append('ref', 'api::nft.nft') // link the image to a content type
    formData.append('refId', nftId) // link the image to a specific entry
    formData.append('field', field) // link the image to a specific field

    await axios({
        method: 'post',
        url : `${api.baseUrl}/api/upload`,
        data: formData,
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "multipart/form-data"
        }
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err)
    });
  }

  const handleShow = ()=>{
      setNftStatus(availableStatus.BUY_NOW);
      document.getElementById("btn1").classList.add("active");
      document.getElementById("btn2").classList.remove("active");
      document.getElementById("btn3").classList.remove("active");
  }
   const handleShow1 = ()=>{
      setNftStatus(availableStatus.ON_AUCTION);
      document.getElementById("btn1").classList.remove("active");
      document.getElementById("btn2").classList.add("active");
      document.getElementById("btn3").classList.remove("active");
  }
   const handleShow2 = ()=>{
      setNftStatus(availableStatus.HAS_OFFERS);
      document.getElementById("btn1").classList.remove("active");
      document.getElementById("btn2").classList.remove("active");
      document.getElementById("btn3").classList.add("active");
  }

    return (
      <div>
        <GlobalStyles />
        <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create 2</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="row">
            <div className="col-lg-7 offset-lg-1 mb-5">
              <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={initialValues}
                validateOnMount={validationSchema.isValidSync(initialValues)}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  console.log('submit')
                  setSubmitting(true);
                  await handleSubmitForm(values);
                  setSubmitting(false);
                  resetForm();
                }}
              >
                { 
                  ({ values, isSubmitting, isValid }) => {

                    return (
                      <Form className="form-border">
                        <div className="field-set">
                          <h5>Upload file</h5>
                          <div className="d-create-file">
                            <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                            {nftImage && 
                              <p>Selected: {nftImage.name}</p>
                            }
                            <div className='browse'>
                              <input type="button" id="get_file" className="btn-main" value="Browse" />
                              <input id='upload_file' type="file" multiple onChange={(event)=> { handleNftPicture(event) }} />
                            </div>
                          </div>
                          <div className="spacer-single"></div>
                          <h5>Select method</h5>
                          <div className="de_tab tab_methods">
                            <ul className="de_nav">
                              <li id='btn1' className="active" onClick={handleShow}>
                                <span>
                                  <i className="fa fa-tag"></i>Fixed price </span>
                              </li>
                              <li id='btn2' onClick={handleShow1}>
                                <span>
                                  <i className="fa fa-hourglass-1"></i>Timed auction </span>
                              </li>
                              <li id='btn3' onClick={handleShow2}>
                                <span>
                                  <i className="fa fa-users"></i>Open for bids </span>
                              </li>
                            </ul>
                            <div className="de_tab_content pt-3">
                              <div id="tab_opt_1" className={nftStatus === availableStatus.ON_AUCTION ? 'hide' : ''}>
                                <h5>Price</h5>
                                <Field onBlur={event => setPricePreview(event.target.value)} type="text" name="price" id="price" className="form-control" placeholder="enter price for one item (ETH)"/>                                    
                                <ErrorMessage name="price" component="div" />
                              </div>
                              <div id="tab_opt_2" className={nftStatus === availableStatus.BUY_NOW ? 'hide' : ''}>
                                <h5>Minimum bid</h5>
                                <Field type="text" name="price" id="price" className="form-control" placeholder="enter minimum bid"/>                                    
                                <ErrorMessage name="price" component="div" />
                                <div className="spacer-20"></div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <h5>Expiration date</h5>
                                    <Field onBlur={event => setDeadlinePreview(event.target.value)} type="date" name="deadline" id="deadline" className="form-control"/>                                    
                                    <ErrorMessage name="deadline" component="div" />
                                  </div>
                                </div>
                              </div>
                              <div id="tab_opt_3"></div>
                            </div>
                          </div>
                          <div className="spacer-10"></div>
                          <h5>Title</h5>
                          <Field onBlur={event => setTitlePreview(event.target.value)}  type="text" name="title" id="title" className="form-control" placeholder="e.g. 'Crypto Funk'"/>                                    
                          <ErrorMessage name="title" component="div" />
                          <div className="spacer-10"></div>
                          <h5>Description</h5>
                          <Field as="textarea" name="description" id="description" className="form-control" placeholder="e.g. 'This is very limited item'"/>                                    
                          <ErrorMessage name="description" component="div" />
                        </div>
                        <input onClick={() => console.log('test')} type="submit" id="submit" className="btn-main" value="Create Item" />
                      </Form>
                    )
                  }
                }
              </Formik>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <h5>Preview item</h5>
              <div className="nft__item m-0">
                {nftStatus !== availableStatus.BUY_NOW &&
                  <div className="de_countdown">
                    <Clock deadline={deadlinePreview} />
                  </div>
                }
                <div className="author_list_pp">
                  <span>
                    <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="nft__item_wrap">
                  <span>
                    <img src={nftImageTemp ? nftImageTemp : "./img/collections/coll-item-3.jpg"} id="get_file_2" className="lazy nft__item_preview" alt="" />
                  </span>
                </div>
                <div className="nft__item_info">
                  <span>
                    <h4>{titlePreview}</h4>
                  </span>
                  <div className="nft__item_price"> {pricePreview} ETH 
                  {nftStatus !== availableStatus.BUY_NOW && <span>1/20</span>}
                  </div>
                  <div className="nft__item_action">
                    <span>{nftStatus !== availableStatus.BUY_NOW ? 'Place a bid' : 'Buy Now'}</span>
                  </div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
   );
}

export default memo(CreateNft);