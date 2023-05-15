// const Koa  =require('Koa')
// const app = new Koa()
// //在app.use中只能接收一个函数作为参数
// app
//   .use((ctx,next) => {
//   ctx.message ='aa'
//   next()  //返回一个Promise
//   ctx.body=ctx.message
// }) //135
//   .use((ctx,next) => {
//   ctx.message +='bb'
//   next()
// })
//   .use((ctx) => {
//   ctx.message +='cc'
// })
                                                                 
//   .listen(3002,() => {
//   console.log('server is rinning on http://localhost:3002')
// })

const Koa  =require('Koa')
const app = new Koa()
//在app.use中只能接收一个函数作为参数
app
  .use(async (ctx,next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`)
  await next()
}) 
  .use(async (ctx,next) => {
  const start = new Date().getTime();
  await next(); //调用下一个中间件
  const ms = new Date().getTime() - start;
  console.log(`Time: ${ms}ms`)
})
  .use(async (ctx) => {
    ctx.response.type = 'text/html';
    ctx.response.body= '<h1>Hel</h1>';
})

  .listen(3002,() => {
  console.log('server is rinning on http://localhost:3002')
})