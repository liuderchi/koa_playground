require('babel-core/register');

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);


// testing async to es6 generator
async function foo() {
  await bar();
}

