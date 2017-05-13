const Koa = require('koa');
const app = new Koa();


// x-response-time

app.use(function (ctx, next) {
  console.log('setting x-response-time');
  const start = new Date();
  //await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  next();
});

// logger

app.use(function (ctx, next) {
  const start = new Date();
  //await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  next();
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3001);
