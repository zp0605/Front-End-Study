import React from 'react';
import { Button, DatePicker } from 'antd';//结构赋值的方式引入，需要什么组件就引入什么组件
// import 'antd/dist/antd.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <DatePicker />
      </div>
    );
  }
}


export default App;