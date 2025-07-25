import React, { Component } from 'react';
import './App.css'
import Head from './header-site/head';
import Menu from "./menu-site/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "../src/pages/new";
import MainPage from "../src/pages/main";
import AnnouncePage from "../src/pages/AnnouncePage"


export default class App extends Component {


  render() {
    return <Router>
      <div className='app'>
        <Head />
        <Menu />
        <Routes>
          <Route element={<Default />} path='/new/' />
          <Route element={<AnnouncePage />} path='/announce' />
          <Route element={<MainPage />} path='/' />
        </Routes>

      </div>

    </Router>
  }
}