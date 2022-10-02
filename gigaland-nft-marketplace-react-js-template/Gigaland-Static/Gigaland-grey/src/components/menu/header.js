import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header= function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const handleBtnClick = () => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = () => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = () => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = () => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = () => {
      setOpenMenu(false);
    };
    const closeMenu1 = () => {
      setOpenMenu1(false);
    };
    const closeMenu2 = () => {
      setOpenMenu2(false);
    };
    const closeMenu3 = () => {
      setOpenMenu3(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar white'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <h2>ENVIRO</h2>
                </NavLink>
              </div>
          </div>

          {/* <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div> */}
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                    <NavLink to="/About" onClick={() => btn_icon(!showmenu)}>
                        About
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                    <NavLink to="/Contact" onClick={() => btn_icon(!showmenu)}>
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                <div className='menu'>
                    <div className='navbar-item'>
                    <NavLink to="/About" onClick={() => btn_icon(!showmenu)}>
                        About
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                    <NavLink to="/Contact" onClick={() => btn_icon(!showmenu)}>
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              <div className='mainside'>
                <a href="https://main-page-hack.vercel.app/" className="btn-main">Join Us</a>
              </div>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;