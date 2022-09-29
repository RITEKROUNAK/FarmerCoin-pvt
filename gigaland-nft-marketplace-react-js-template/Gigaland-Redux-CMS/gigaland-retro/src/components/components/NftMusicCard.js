import React, { memo, useState, useEffect } from 'react';
import styled from "styled-components";
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

//react functional component
const NftMusicCard = ({ nft, audioUrl, className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4', height, onImgLoad }) => {

    const useAudio = (url) => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);
      
        const toggle = () => setPlaying(!playing);
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
          },
          [playing]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, []);
      
        return [playing, toggle];
    };

    const [playing, toggle] = useAudio(audioUrl);

    return (
        <div className={className}>
            <div className="nft__item m-0">
                { nft.deadline &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                }
                <div className="author_list_pp">
                    <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                        <img className="lazy" src={nft.authorImg} alt=""/>
                        <i className="fa fa-check"></i>
                    </span>
                </div>
                <div className="nft__item_wrap" style={{height: `${height}px`}}>
                    <Outer>
                    <span>
                        <img onLoad={onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                    </span>
                    </Outer>
                    <div className="nft_type_wrap">
                        <div onClick={toggle} className="player-container">
                            <div className={`play-pause ${playing ? 'pause' : 'play'}`}></div>
                        </div>
                        <div className="circle-ripple"></div>
                    </div>
                </div>
                <div className="nft__item_info">
                    <span onClick={()=> window.open(nft.nftLink, "_self")}>
                        <h4>{nft.title}</h4>
                    </span>
                    <div className="nft__item_price">
                        {nft.price}<span>{nft.bid}</span>
                    </div>
                    <div className="nft__item_action">
                        <span onClick={()=> window.open(nft.bidLink, "_self")}>Place a bid</span>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>{nft.likes}</span>
                    </div>                            
                </div> 
            </div>
        </div>            
    );
};

export default memo(NftMusicCard);