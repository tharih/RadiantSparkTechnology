import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* <!-- PRELOADER --> */}
      {/* <div class="preloader">
        <div class="lds-ellipsis">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div> */}
      {/* <!-- END PRELOADER --> */}

      {/* <!--====== INFETECH SEARCH PART ENDS ======--> */}

      <div class="search-popup">
        <button class="close-search style-two">
          <span class="fal fa-times"></span>
        </button>
        <button class="close-search">
          <span class="fal fa-long-arrow-up"></span>
        </button>
        <form method="post" action="#">
          <div class="form-group">
            <input
              type="search"
              name="search-field"
              value=""
              placeholder="Search Here"
              required=""
            />
            <button type="submit">
              <i class="fal fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      {/* <!--====== INFETECH SEARCH PART ENDS ======--> */}

      {/* <!--====== OFFCANVAS MENU PART START ======--> */}

      <div class="off_canvars_overlay"></div>
      <div class="offcanvas_menu">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="offcanvas_menu_wrapper">
                <div class="canvas_close">
                  <Link to="javascript:void(0)">
                    <i class="fa fa-times"></i>
                  </Link>
                </div>
                <div class="offcanvas-social">
                  <ul class="text-center">
                    <li>
                      <Link to="https://www.facebook.com/profile.php?id=100075720747074">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        <i class="fab fa-linkedin"></i>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://www.instagram.com/radiantsparktechnology/">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    {/* <li><a to="%24.html"><i class="fab fa-instagram"></i></a></li> */}
                  </ul>
                </div>
                <div id="menu" class="text-left ">
                  <ul class="offcanvas_main_menu">
                    <li class="menu-item-has-children active">
                      <a href="/">Home</a>
                    </li>
                    <li class="menu-item-has-children active">
                      <Link to="About">About</Link>
                    </li>
                    {/* <li class="menu-item-has-children active">
								<a to="Services">Services</a>
							</li> */}
                    <li class="menu-item-has-children active">
                      <Link to="Projects">Projects</Link>
                    </li>
                    <li class="menu-item-has-children active">
                      <Link to="Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div class="offcanvas_footer">
                  <span>
                    <Link to="mailto:rediantsparktechnology@gmail.com">
                      <i class="fa fa-envelope-o"></i>{" "}
                      rediantsparktechnology@gmail.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--====== OFFCANVAS MENU PART ENDS ======--> */}

      {/* <!--====== INFETECH HEADER PART START ======--> */}

      <section class="infetech-header-area header-sticky">
        <div class="header-wrapper">
          <div class="templates-logo">
            <a href="/">
              <img src="assets/images/logo-no-background.png" alt="logo" />
            </a>
          </div>
          <div class="header-box">
            <div class="header-topbar">
              <div class="row g-0 align-items-center ">
                <div class="col-lg-6">
                  <div class="header-topbar-text">
                    <p>Welcome to Radiant Spark Technology </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="header-topbar-info-wrapper">
                    <div class="header-topbar-info">
                      <ul>
                        <li>
                          <i class="fas fa-envelope"></i>
                          rediantsparktechnology@gmail.com
                        </li>
                        {/* <li><i class="fas fa-clock"></i> Mon - Sat: 8.00 am - 7.00 pm</li> */}
                      </ul>
                    </div>
                    <div class="header-topbar-social">
                      <ul>
                        {/* <li><i class="fab fa-twitter"></i></li> */}
                        <li>
                        <Link to="https://www.facebook.com/profile.php?id=100075720747074">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                        </li>
                        {/* <li>
                          <i class="fab fa-linkedin"></i>
                        </li> */}
                        <li>
                        <Link to="https://www.instagram.com/radiantsparktechnology/">
                        <i class="fab fa-instagram"></i>
                      </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-main-nav">
              <div class="header-main-nav-box">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link to="About">About</Link>
                  </li>
                  {/* <li>
                                <a to="Services">Services</a>
                            </li> */}
                  <li>
                    <Link to="Projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="Contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div class="header-main-info">
                <div class="header-mini-btn">
                  <ul>
                    {/* <li><a class="search-box-btn" to="#"><i class="fal fa-search"></i></a></li> */}
                    {/* <li><a to="#"><i class="fal fa-shopping-cart"></i></a></li> */}
                    <li>
                      <a class="toggle-bar canvas_open" to="#">
                        <i class="fal fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="header-main-info-contact">
                  <div class="icon">
                    <img src="assets/images/icon/phone.svg" alt="" />
                  </div>
                  <div class="content">
                    <span>Call Anytime</span>
                    <Link to="#">+ 94 (77) 959 7006</Link>
                    <Link to="#">+ 94 (76) 867 9313</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== INFETECH HEADER PART ENDS ======--> */}
    </div>
  );
}
