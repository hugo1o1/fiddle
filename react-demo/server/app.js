import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import dataRouter from './routes/data'

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/',(req,res,next)=>{
  // if(req.cookies&&req.cookies['user']){
  //   next()
  // }
  // else{
  //   res.redirect('/login')
  //   next()
  // }
  next()
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter);

export default app;
