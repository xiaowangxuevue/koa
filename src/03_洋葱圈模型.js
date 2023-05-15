const Koa  =require('Koa')
const app = new Koa()
//在app.use中只能接收一个函数作为参数
app
  .use((ctx,next) => {
  console.log(1)
  next()  //返回一个Promise
  console.log(2)
}) //135
  .use((ctx,next) => {
  console.log(3)
  next()
  console.log(4)
})
  .use((ctx) => {
  console.log(5)
  ctx.body='处理完成'
})

  .listen(3002,() => {
  console.log('server is rinning on http://localhost:3002')
})