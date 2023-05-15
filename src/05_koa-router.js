const Koa = require('koa')

const app = new Koa()
const static = require('koa-static')

const userRoute = require('./router/ruser.route')


app.use(userRoute.routes()).use(userRoute.allowedMethods)
app.listen(3002,() => {
  console.log('server is rinning on http://localhost:3002')
})