import React from 'react'
import { HashRouter, Link } from 'react-router-dom'
const Routes = () => <HashRouter>
  <div>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/about">关于</Link></li>
      <li><Link to="/topics">主题列表</Link></li>
    </ul>
    {/* <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/> */}
  </div>
</HashRouter>
export default Routes
