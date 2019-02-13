import React from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'

import ClickCounter from '../component/ClickCounter/ClickCounter';
import ControlPanel from '../component/ControlPanel/ControlPanel';
import ColorOrganizer from '../component/ColorOrganizer/ColorOrganizer';

// 添加导航
// import { Menu } from 'antd';

const Routes = () => <HashRouter>
  <div>
    <ul>
      <li><Link to="/" >Index</Link></li>
      <li><Link to="/ClickCounter" >ClickCounter</Link></li>
      <li><Link to="/ControlPanel">ControlPanel</Link></li>
      <li><Link to="/ColorOrganizer">ColorOrganizer</Link></li>
    </ul>
    <Switch>
      <Route exact path="/ClickCounter" component={ClickCounter}/>
      <Route path="/ControlPanel" component={ControlPanel}/>
      <Route path="/ColorOrganizer" component={ColorOrganizer}/>
    </Switch>
  </div>
</HashRouter>
export default Routes
