import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import HomeGrey from './pages/homeGrey';
import Home1 from './pages/home1';
import Home1grey from './pages/home1Grey';
import Home2 from './pages/home2';
import Home2grey from './pages/home2Grey';
import Home3 from './pages/home3';
import Home4 from './pages/home4';
import Home5 from './pages/home5';
import Home6 from './pages/home6';
import Explore from './pages/explore';
import Exploregrey from './pages/exploreGrey';
import Explore2 from './pages/explore2';
import Explore2grey from './pages/explore2Grey';
import ExploreOpensea from './pages/Opensea/explore';
// import Rangking from './pages/rangking';
import RankingRedux from './pages/RankingRedux';
import RankingReduxgrey from './pages/RankingReduxGrey';
import Auction from './pages/Auction';
import Auctiongrey from './pages/AuctionGrey';
import Helpcenter from './pages/helpcenter';
import Helpcentergrey from './pages/helpcenterGrey';
import Colection from './pages/colection';
import Colectiongrey from './pages/colectionGrey';
// import ItemDetail from './pages/ItemDetail';
import ItemDetailRedux from './pages/ItemDetailRedux';
import ItemDetailReduxgrey from './pages/ItemDetailReduxGrey';
import Author from './pages/Author';
import AuthorGrey from './pages/AuthorGrey';
import AuthorOpensea from './pages/Opensea/author';
import Wallet from './pages/wallet';
import WalletGrey from './pages/walletGrey';
import Login from './pages/login';
import Logingrey from './pages/loginGrey';
import LoginTwo from './pages/loginTwo';
import LoginTwogrey from './pages/loginTwoGrey';
import Register from './pages/register';
import Registergrey from './pages/registerGrey';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Creategrey from './pages/createGrey';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Activitygrey from './pages/activityGrey';
import Contact from './pages/contact';
import Contactgrey from './pages/contactGrey';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import Minter from './pages/Minter';
import Mintergrey from './pages/MinterGrey';
import auth from '../core/auth';
import Profile from './pages/Profile';
import CreateNft from './pages/Create/index.js';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const isAuth = auth.getToken() !== null;

  return (
      isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />
  )
};

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/Author">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Author />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/Profile">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/homeGrey" element={<HomeGrey />} />
      <Route element={<Home1/>} path="/home1" />
      <Route element={<Home1grey/>} path="/home1Grey" />
      <Route element={<Home2/>} path="/home2" />
      <Route element={<Home2grey/>} path="/home2Grey" />
      <Route element={<Home3/>} path="/home3" />
      <Route element={<Home4/>} path="/home4" />
      <Route element={<Home5/>} path="/home5" />
      <Route element={<Home6/>} path="/home6" />
      <Route element={<Explore/>} path="/explore" />
      <Route element={<Exploregrey/>} path="/exploreGrey" />
      <Route element={<Explore2/>} path="/explore2" />
      <Route element={<Explore2grey/>} path="/explore2Grey" />
      <Route element={<ExploreOpensea/>} path="/exploreOpensea" />
      <Route element={<RankingRedux/>} path="/rangking" />
      <Route element={<RankingReduxgrey/>} path="/rangkingGrey" />
      <Route element={<Auction/>} path="/Auction" />
      <Route element={<Auctiongrey/>} path="/AuctionGrey" />
      <Route element={<Helpcenter/>} path="/helpcenter" />
      <Route element={<Helpcentergrey/>} path="/helpcenterGrey" />
      <Route element={<Colection/>} path="/colection/:collectionId" />
      <Route element={<Colectiongrey/>} path="/colectionGrey/:collectionId" />
      <Route element={<ItemDetailRedux/>} path="/ItemDetail/:nftId" />
      <Route element={<ItemDetailReduxgrey/>} path="/ItemDetailGrey/:nftId" />
      <Route element={<AuthorGrey />} path="/AuthorGrey/:authorId" />
      <Route element={<AuthorOpensea />} path="/AuthorOpensea" />
      <Route element={<Wallet />} path="/wallet" />
      <Route element={<WalletGrey />} path="/walletGrey" />
      <Route element={<Login />} path="/login" />
      <Route element={<Logingrey />} path="/loginGrey" />
      <Route element={<LoginTwo />} path="/loginTwo" />
      <Route element={<LoginTwogrey />} path="/loginTwoGrey" />
      <Route element={<Register />} path="/register" />
      <Route element={<Registergrey />} path="/registerGrey" />
      <Route element={<Price />} path="/price" />
      <Route element={<Works />} path="/works" />
      <Route element={<News />} path="/news" />
      <Route element={<NewsSingle />} path="/news/:postId" />
      <Route element={<Create />} path="/create" />
      <Route element={<Creategrey />} path="/createGrey" />
      <Route element={<Create2 />} path="/create2" />
      <Route element={<Create3 />} path="/create3" />
      <Route element={<Createoption />} path="/createOptions" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<Activitygrey />} path="/activityGrey" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Contactgrey />} path="/contactGrey" />
      <Route element={<ElegantIcons />} path="/elegantIcons" />
      <Route element={<EtlineIcons />} path="/etlineIcons" />
      <Route element={<FontAwesomeIcons />} path="/fontAwesomeIcons" />
      <Route element={<Accordion />} path="/accordion" />
      <Route element={<Alerts />} path="/alerts" />
      <Route element={<Progressbar />} path="/progressbar" />
      <Route element={<Tabs />} path="/tabs" />
      <Route element={<Minter />} path="/mint" />
      <Route element={<Mintergrey />} path="/minter" />
      <Route element={<CreateNft />} path="/createNft" />
    </Routes>
    <ScrollToTopBtn />
  </div>
);
export default app;