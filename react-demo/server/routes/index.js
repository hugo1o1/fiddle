import express from 'express';
import React from 'react'

import Home from '../components/home'
import Login from '../components/login'

import { renderToString } from 'react-dom/server'
var router = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
  const html = renderToString(<Home data={'hello'} />)
  console.log(html);
  res.send(html)
});
router.get('/login', (req, res, next) => {
  const html = renderToString(<Login />)
  res.send(html)
});


export default router;
