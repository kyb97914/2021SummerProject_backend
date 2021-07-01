const Koa= require('koa');
const Router = require('koa-router');
const app = new Koa();

app.use(ctx=>{
  ctx.body='Hello Koa';
});

//http listen port 생성 
app.listen(3000,()=>console.log('koa server start kyb'));