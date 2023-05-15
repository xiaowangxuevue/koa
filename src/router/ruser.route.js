const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const db = [
  {id:1,name:'xiangwang',age:20},
  {id:2,name:'xiangtao',age:12},
  {id:3,name:'xiangxia',age:4}
]

router.get('/',(ctx) =>{
  ctx.body = db
})

// router.get('/:id',(ctx) => {
//   const id = ctx.params.id
//   const res = db.filter((item) => {
//     item.id == id
//   })
//   if(!res[0]) ctx.throw(404)
//   ctx.body = res[0]

// })
router.post('/',(ctx) =>{
  ctx.body = '创建用户'
})

module.exports = router