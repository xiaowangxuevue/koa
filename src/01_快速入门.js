// 1.导入koa包
const Koa = require('koa')
// 2.实例化app对象
const app = new Koa()
// 3.编写中间件
app.use((ctx) => {
  ctx.body = 'hello koa'
})

app.listen(3001,() =>{
  console.log('server is running on http://localhost:3001')
})