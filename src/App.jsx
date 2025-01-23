import React from 'react'
import { Helmet } from "react-helmet";
import { Outlet } from 'react-router';
import "remixicon/fonts/remixicon.css";
import Header from "./components/Header";
import './App.css'


export default function App() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="icon" href="home-smile-fill.svg" />
      </Helmet>
      <Header></Header>

      <Outlet></Outlet>

    </>
  )
}
