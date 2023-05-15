const Koa  =require('Koa')
const app = new Koa()
//在app.use中只能接收一个函数作为参数
app
  .use((ctx,next) => {
  console.log('我来组成头部')
  next()
})
  .use((ctx,next) => {
  console.log('我来组成身体')
  next()
})
  .use((ctx) => {
  console.log('完成')
  ctx.body='组成了'
})

  .listen(3002,() => {
  console.log('server is rinning on http://localhost:3002')
})