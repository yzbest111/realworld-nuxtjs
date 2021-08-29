// 验证是否登陆中的中间件
// 你想用这个中间件守护哪个页面，就在哪个页面中使用这个中间件
export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/login')
  }
}