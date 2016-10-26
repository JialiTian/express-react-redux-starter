import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import KaylaLogo from './assets/logo-sweat-with-kayla-color.png'
import KaylaDrop from './assets/sweat-logo-drop@2x.png'
import Planner from '../../planner/Planner';
import { Route } from 'react-router';

export const Header = () => (
  <header id="header">
    <div className="header-wrap">
      <nav className="top-bar" data-role="navigation" data-topbar>
        <ul className="title-area">
          <li className="toggle-topbar hide-for-print">
            <a>
              <i className="fa fa-bars fa-2x fa-fw"></i>
            </a>
          </li>
          <li className="name">
            <h1>
              <a className="small-text-center small-width-auto" href="#!/dashboard">

                <span>
                  <img className="hidden-for-small-only hide-for-print" src={KaylaDrop} alt="Sweat with Kayla Logo" />
                  <div className="logo-title medium-margin-left-10">weekday</div>
                </span>

                <img className="print-only" src={KaylaLogo} alt="Sweat with Kayla Logo" />
              </a>
            </h1>
          </li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            <li><a href="#!/dashboard">today</a></li>
            <li><Route path="/planner" component={Planner} /></li>
            <li><a href="#!/education">education</a></li>
            <li><a href="#!/food">food</a></li>
            <li><a href="#!/account/settings">my account</a></li>
          </ul>
        </section>
      </nav>
    </div>
  </header>
)

export default Header
