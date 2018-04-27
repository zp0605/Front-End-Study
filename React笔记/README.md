[所有资料来源](https://github.com/zhiyongzaixian/React-)

[ant.design 库](http://ant.design/docs/react/use-with-create-react-app-cn
)
#[01_react_笔记](01_react_笔记)
-----
##1. 几个重要概念理解
  * 模块与组件
    * 模块:
      * 理解: 向外提供特定(局部)功能的js程序, 一般就是一个js文件。模块只包括js
      * 为什么: js代码更多更复杂
      * 作用: 复用js, 简化js的编写, 提高js运行效率
    * 组件: 
      * 理解: 用来实现特定功能效果的代码集合(html/css/js),一个组件包括html、css、js
      * 为什么: 一个界面的功能更复杂
      * 作用: 复用编码, 简化项目编码, 提高运行效率
  * 模块化与组件化
    * 模块化:
      * 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
    * 组件化:
      * 当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用
##2. React的基本认识
  * React 是 Facebook开源的一个js库
  * 一个用来动态构建用户界面的js库
  * React的特点
    * Declarative(声明式编码)
    * Component-Based(组件化编码)
    * Learn Once, Write Anywhere(支持客户端与服务器渲染，支持在服务器端渲染页面)
    * 高效
    * 单向数据流（Model->View）
    * React Native缺点：体验不怎么好，效果没有原生的好
  * React高效的原因
    * 虚拟(virtual)DOM, 不总是直接操作DOM(批量更新, 减少更新的次数) ,而是操作的虚拟DOM，操作完虚拟DOM再统一映射真实的DOM,最后再渲染。（真实的DOM每修改一个节点就会渲染，效率低）
    * 高效的DOM Diff算法, 最小化页面重绘(减小页面更新的区域)，DOM Diff可以计算出变化前和变化后的DOM的差异
##3. 使用React
	* 导入相关js库文件(react.js, react-dom.js, babel.min.js)
	* 编码:
		
		```
      <div id="container"></div>
      <script type="text/babel">//必须用babel
        var aa = 123
        //1，创建虚拟DOM对象，创建的时候可以
             在JS中写html标签；
           let user = <h1>{aa}</h1>;
        //2，渲染虚拟DOM对象
        //ReactDOM.render(user, containerDOM);
        ReactDOM.render(user, document.getElementById('container'));
        //render第一个参数是虚拟DOM对象，第二个参数是对应的DOM容器
      </script>
		```
##4. JSX
-----

####1. 虚拟DOM
   

	1). React提供了一些API来创建一种 `特别` 的一般js对象  
   创建的就是简单的虚拟DOM对象:
 
 ```
     法一：var element = React.createElement('h1', {id:'myTitle'}, 'hello');
     法二：let element = <h2>hello react</h2>
 ```   

  2). 虚拟DOM对象最终都会被React转换为真实的DOM


  3). 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界面
####2. JSX
*   1). 全称: JavaScript XML
*   2). react定义的一种类似于XML的JS扩展语法: XML+JS
*   3). 作用: 用来创建react虚拟DOM(元素)对象
    * var ele = \<h1>Hello JSX!</h1>; 表示一个虚拟对象，它最终将会产生成JS对象
    * 注意1: 它不是字符串, 也不是HTML/XML标签
    * 注意2: 它最终产生的就是一个JS对象
*   4). 标签名任意: HTML标签或其它标签
*   5). 标签属性任意: HTML标签属性或其它
*   6). 基本语法规则
    * 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
    * 遇到以 { 开头的代码，以JS的语法解析: 标签中的js代码必须用{}包含
*   7). ==babel.js的作用(jsx转js)==
    * 浏览器的js引擎是不能直接解析JSX语法代码的, 需要babel转译为纯JS的代码才能运行
    * 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

###3. 渲染虚拟DOM(元素)
*   1). 语法: ReactDOM.render(virtualDOM, containerDOM) :
*   2). 作用: 将虚拟DOM元素渲染到真实容器DOM中显示
*   3). 参数说明
    * 参数一: 纯js或jsx创建的虚拟dom对象
    * 参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)
    
####4. 创建虚拟DOM的2种方式:
*   1). 纯JS(一般不用):
    React.createElement('h1', {id:'myTitle'}, title)
*   2). JSX:
    \<h1 id='myTitle'>{title}</h1>  
    
####5.动态展示列表数据
  
```
 <body>
	<div id="example2"></div>
	<script src="../js/react.js"></script>
	<script src="../js/react-dom.js"></script>
	<script src="../js/babel.min.js"></script>
	<script type="text/babel">
	  /*
	   功能: 动态展示列表数据
	   */
	  /*
	   技术点:
	   1). 使用JSX创建虚拟DOM
	   2). React能自动遍历显示数组中所有的元素
	   3). array.map()的使用
	   */
	
	  var names = ['Tom2', 'Jack2', 'Bob2'];
	  ReactDOM.render(
	     <ul>
	      {
	        names.map((item, index)=> {//对数组加工
	           return <li key={index}>{item}</li>
	        })
	      }
	      </ul>,
	      document.getElementById("example2")
	  );
	</script>
</body>

```
 
     
##5. Component : React是面向组件编程的(组件化编码开发)

* 基本理解和使用（1，创建组件；2，渲染组件；）
	* 自定义的标签: 组件类(函数)/标签
	* 创建组件类
     
  ```
  //方式1: 无状态函数(工厂函数模式)(组件比较简单时, 推荐使用)
  function MyComponent1() {//MyComponent1：组件名称，首字母要大写
    return <h1>自定义组件标题11111</h1>;
  }
  //方式2: ES6类语法(复杂组件, 推荐使用)
  class MyComponent3 extends React.Component {
    render () {
      return <h1>自定义组件标题33333</h1>;
    }
  }
  //方式3: ES5老语法(不推荐使用了)
  var MyComponent2 = React.createClass({
    render () {
      return <h1>自定义组件标题22222</h1>;
    }
  });
  ```
	* 渲染组件标签
			
	```
	//组件要写标签包起来
	ReactDOM.render(<MyComp />,  cotainerEle);
	```
    * ReactDOM.render()渲染组件标签的基本流程
      * React内部会创建组件实例对象/调用组件函数, 得到虚拟DOM对象
      * 将虚拟DOM并解析为真实DOM
      * 插入到指定的页面元素内部
	* 注意：
		* 返回的组件类必须首字母大写 
		* 虚拟DOM元素必须只有一个根元素
		* 虚拟DOM元素必须有结束标签
	* [props](code/react_test/work/04_component_props/test.html)
		* 所有组件标签的属性的集合对象
		* 给标签指定属性, 保存外部数据(可能是一个function)
		* 在组件内部读取属性: this.props.propertyName
		* 作用: 从目标组件外部向组件内部传递数据
		* 对props中的属性值进行类型限制和必要性限制
      
  ```
  Person.propTypes = {
	    name: React.PropTypes.string.isRequired,
	    age: React.PropTypes.number.isRequired
  }
  ```
    * 扩展属性: 将对象的所有属性通过props传递
        ```
        <Person {...person}/>
        ```
	* [组件的组合、嵌套](code/react_test/work/05_components_composing/test.html)
		* 组件标签中包含子组件标签
		* 拆分组件: 拆分界面, 抽取组件
		* 通过props传递数据
	* [refs](code/react_test/work/06_component_refs_event/test.html)
		* 组件内包含ref属性的标签元素的集合对象
		* 给操作目标标签指定ref属性, 打一个标识
		* 在组件内部获得标签对象: this.refs.refName(只是得到了标签元素对象)
		* 作用: 操作组件内部的真实标签dom元素对象
	* [事件处理](code/react_test/work/06_component_refs_event/test.html)
		* 给标签添加属性: onXxx={this.eventHandler}
		* 在组件中添加事件处理方法
		  
		  ```
		    eventHandler(event) {
		                
		    }
		  ```
		* 使自定义方法中的this为组件对象
		  * 在constructor()中bind(this)
		  * 使用箭头函数定义方法(ES6模块化编码时才能使用)
	* state [test.html](react_test/work/07_component_state/test.html) [demo.html](react_test/work/07_component_state/demo.html)
		* 组件被称为"状态机", 页面的显示是根据组件的state属性的数据来显示
		* 初始化指定:
	        
	        ```
	        constructor() {
	          super();
	          this.state = {
	            stateName1 : stateValue1,
	            stateName2 : stateValue2
	          };
	        }
	        ```
		* 读取显示: 
		    this.state.stateName1
		* 更新状态-->更新界面 : 
		    this.setState({stateName1 : newValue})
	* [实现一个双向绑定的组件](react_test/work/08_component_controlled/test.html)
		* React是单向数据流
		* 需要通过onChange监听手动实现
	* 组件生命周期
		* 组件的三个生命周期状态:
		* Mount：插入真实 DOM
		* Update：被重新渲染
		* Unmount：被移出真实 DOM
    * 生命周期流程:
      * 第一次初始化显示
        
        ```
        constructor()
        componentWillMount() : 将要插入回调
        render() : 用于插入虚拟DOM回调
        componentDidMount() : 已经插入回调
        ```
      * 每次更新state
        
        ```
        componentWillReceiveProps(): 接收父组件新的属性
        componentWillUpdate() : 将要更新回调
        render() : 更新(重新渲染)
        componentDidUpdate() : 已经更新回调
        ```
      * 删除组件
        
        ```
        ReactDOM.unmountComponentAtNode(document.getElementById('example')) : 移除组件
        componentWillUnmount() : 组件将要被移除回调
        ```
    * 常用的方法
      
      ```
      render(): 必须重写, 返回一个自定义的虚拟DOM
      constructor(): 初始化状态, 绑定this(可以箭头函数代替)
      componentDidMount() : 只执行一次, 已经在dom树中, 适合启动/设置一些监听
      ```   

##6. ajax
----
	* React没有ajax模块
	* 集成其它的js库(如axios/fetch/jQuery/), 发送ajax请求
	  * axios
	    * 封装XmlHttpRequest对象的ajax
	    * promise
	    * 可以用在浏览器端和服务器
	  * fetch
	    * 不再使用XmlHttpRequest对象提交ajax请求
	    * fetch就是用来提交ajax请求的函数, 只是新的浏览才内置了fetch
	    * 为了兼容低版本的浏览器, 可以引入fetch.js
	* 在哪个方法去发送ajax请求
	  * 只显示一次(请求一次): componentDidMount()
	  * 显示多次(请求多次): componentWillReceiveProps()
	  
##7. 虚拟DOM
  * 虚拟DOM是什么?
    * 一个虚拟DOM(元素)是一个一般的js对象, 准确的说是一个对象树(倒立的)
    * 虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应
    * 如果只是更新虚拟DOM, 页面是不会重绘的
  * Virtual DOM 算法的基本步骤
    * 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
    * 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
    * 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了
  * 进一步理解
    * Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。
    * 可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。

    
#[脚手脚](code/react_demo/work)
------
## 使用React脚手架创建一个React应用
* react脚手架(帮助我们快速的创建工程)
  * xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的空项目的库
    * 包含了所有需要的配置
    * 指定好了所有的依赖
    * 可以直接安装/编译/运行一个简单效果
  * react提供了一个专门用于创建react项目的脚手架库: create-react-app
  * 项目的整体技术架构为: react + webpack + es6 + eslint
  
* 创建项目并启动
  * npm install -g create-react-app//安装
  * create-react-app hello-react //创建项目
  * cd hello-react
  * npm start

## [组件化项目编码的基本流程](code/react_demo/work/hello-comments)  [案例笔记](笔记/02_reac案例_笔记.md)
* 编写静态组件
  * 拆分页面
  * 拆分css
* 实现动态组件
  * 动态展示初始化数据
	  * 初始化状态数据
	  * 传递属性数据
  * 响应用户操作, 更新组件界面
	  * 绑定事件监听, 并处理
	  * 更新state
	  
## app1: 实现一个评论管理功能
* 拆分组件:
  * 应用组件: App
  * 添加评论组件: CommentAdd
  * 评论项组件: CommentItem
  * 评论列表组件: CommentList
* 确定组件的state和props:
  * App: 
    * state: comments/array
  * CommentAdd
    * state: username/string, content/string
    * props: add/func
  * commentList
      * props: comments/array, delete/func
  * CommentItem
    * props: comment/object, delete/func, index/number
  
## app2: 实现github用户搜索功能
  * 拆分组件
    * App
    * Search
    * List
  * 确定组件的state和props
    * App
      * state: searchName/string
    * Search
      * props: setSearchName/func
    * List
      * props: searchName/string
      * state: firstView/bool, loading/bool, users/array, errMsg/string
  * 编写静态组件
  * 编写动态组件
    * componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
    * 使用axios库发送ajax请求   

# 事件
##标准事件
	* 浏览器默认事件：click,keyup
	* 响应事件：浏览器本身
	* 数据:event对象
	
##自定义事件
	* 绑定事件  
		* 事件名
		* 数据源:event
	* 触发事件
		* 事件名
		* function(){} 回调函数：数据
	

--- 
## 组件间通信总结
  * 方式一: 通过props传递
    * 共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
    * 通过props可以传递一般数据和函数数据, 只能一层一层传递
    * 一般数据-->父组件传递数据给子组件-->子组件读取数据
    * 函数数据-->子组件传递数据给父组件-->子组件调用函数
  * 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制
    * 工具库: PubSubJS
    * 下载: npm install pubsub-js --save
    * 使用: 
     
      ```
      import PubSub from 'pubsub-js' //引入
      PubSub.subscribe('delete', function(data){ }); //订阅
      PubSub.publish('delete', data) //发布消息
      ```
----
# React服务器端渲染入门
* 理解
  * 当服务器端接收到请求时, 在服务器端基于React动态渲染页面, 并返回给浏览器显示
  * 相对于浏览器端渲染的好处?
    * 服务器端和客户端可以共享某些代码，避免重复定义。
    * 首次加载页面的速度加快
    * 便于SEO优化。服务器端渲染可以让搜索引擎更容易读取页面的meta信息以及其他SEO相关信息
  * 相对于浏览器端渲染的不好?
    * 对服务器的压力增大
    * 要求服务器使用基于node搭建
* 简单编码实现服务器端渲染
  * 应用文件结构
   
    ```
    react-node
      |-- src
          |-- App.js-----------------主组件js
          |-- server.js--------------启动服务器监听, 处理请求的js
      |-- index.js---------入口js
      |-- .babelrc---------babel配置文件
      |-- package.json-----应用包信息文件
    ```
  * 编码
    * package.json
     
      ```
      {
        "name": "react-node",
        "version": "1.0.0",
        "scripts": {
          "start": "node index"
        },
        "devDependencies": {
          "babel-preset-es2015": "^6.6.0",
          "babel-preset-react": "^6.5.0",
          "babel-register": "^6.8.0"
        },
        "dependencies": {
          "react": "^15.3.1",
          "react-dom": "^15.3.1"
        }
      }
      ```
    * .babelrc
      
      ```
      {
        "presets": ["react", "es2015"]
      }
      ```
    * App.js
     
      ```
      import React, {Component} from 'react'
      class App extends Component {
      
        render() {
          return (
            <div>测试React服务器</div>
          )
        }
      }
      export default App
      ```
    * server.js
     
      ```
      import React from 'react';
      import { renderToString } from 'react-dom/server';
      var http = require('http');
      import App from './App';
      
      //创建服务器对象, 并启动监听
      http.createServer(function (request, response) {
        //向浏览器端写头信息
        response.writeHead(200, {'Content-Type': 'text/html'});
        //渲染组件成标签结构字符串
        const appHTML = renderToString(<App />);
        //向浏览器返回结果
        response.end(appHTML);
      }).listen(8888);
      // 终端打印提示信息
      console.log('Server running at http://127.0.0.1:8888/');
      ```

    index.js
     
      ```
      require('babel-register');
      require('./src/server.js');
      ```
  * 启动服务器运行:
    * 命令: npm start
    * 访问: http://127.0.0.1:8888  
 
 # 使用开源的ant-design库开发项目指南

## 1. 最流行的开源React UI组件库
* material-ui(国外)
  * 官网: http://www.material-ui.com/#/
  * github: https://github.com/callemall/material-ui
* ant-design(国内蚂蚁金服)
  * 官网: https://ant.design/
  * github: https://github.com/ant-design/ant-design/

## 2. ant-design使用入门
* 使用create-react-app搭建react开发环境
  
  ```
  npm install create-react-app -g
  create-react-app antd-demo
  cd antd-demo
  npm start
  ```
* 搭建antd的基本开发环境
  * 下载
    
    ```
    npm install antd --save
    ```
  * src/App.js
   
    ```
    import React, { Component } from 'react';
    import { Button } from 'antd';
    import './App.css';
    
    class App extends Component {
      render() {
        return (
          <div className="App">
            <Button type="primary">Button</Button>
          </div>
        );
      }
    }
    
    export default App;
    ```
  * src/App.css
    ```
    @import '~antd/dist/antd.css';
    
    .App {
      text-align: center;
    }
    ```
* 实现按需加载(css/js)
  * 使用 eject 命令将所有内建的配置暴露出来
    
    ```
    npm run eject
    ```
  * 下载babel-plugin-import(用于按需加载组件代码和样式的 babel 插件)
    
    ```
    npm install babel-plugin-import --save-dev
    ```
  * 修改配置: config/webpack.config.dev.js
   
    ```
    // Process JS with Babel.
    {
       test: /\.(js|jsx)$/,
       include: paths.appSrc,
       loader: require.resolve('babel-loader'),
       options: {
         "plugins": [
           ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
         ],
         
         // This is a feature of `babel-loader` for webpack (not Babel itself).
         // It enables caching results in ./node_modules/.cache/babel-loader/
         // directory for faster rebuilds.
         cacheDirectory: true,
       },
    ```
  * 去除引入全量样式的语句: src/App.css
    
    ```
    @import '~antd/dist/antd.css'
    ```

#[react-router](code/react-router_test/react-router_笔记.md)
----    

### react-router使用教程
0. 关于url中#的作用:
  * 学习: http://www.ruanyifeng.com/blog/2011/03/url_hash.html
  * '#'代表网页中的一个位置。其右面的字符，就是该位置的标识符
  * 改变#不触发网页重载
  * 改变#会改变浏览器的访问历史
  * window.location.hash读取#值
  * window.onhashchange = func 监听hash改变
1. react-router
  * github主页: https://github.com/ReactTraining/react-router
  * 官网教程: https://github.com/reactjs/react-router-tutorial/(官方教程)
  * 一峰教程: http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
2. react-router库中的 相关组件
  * 包含的相关组件: 
    * Router: 路由器组件, 用来包含各个路由组件,用来管理路由
    * Route: 路由组件, 注册路由 
    * IndexRoute: 默认路由组件
    * hashHistory: 路由的切换由URL的hash变化决定，即URL的#部分发生变化
    * Link: 路由链接组件，生成a标签的
  * Router: 路由器组件
    * 属性:  history={hashHistory} 用来监听浏览器地址栏的变化, 并将URL解析成一个地址对象，供React Router匹配
    * 子组件: Route
  * Route: 路由组件
    * 属性1: path="/xxx"  
    * 属性2: component={Xxx}
    * 根路由组件: path="/"的组件, 一般为App
    * 子路由组件: 子<Route>配置的组件
  * IndexRoute: 默认路由
    * 当父路由被请求时, 默认就会请求此路由组件
  * hashHistory
    * 用于Router组件的history属性
    * 作用: 为地址url生成?_k=hash, 用于内部保存对应的state
  * Link: 路由链接
    * 属性1: to="/xxx"
    * 属性2: activeClassName="active"
2. 下载相关插件：
    * npm install react-router@3 --save 
3. 编码
  * 定义各个路由组件
    * About.js
     
      ```
      import React from 'react'
      function About() {
        return <div>About组件内容</div>
      }
      export default About
      ```
    * Home.js
     
      ```
      import React from 'react'
      function Home() {
        return <div>Home组件内容2</div>
      }
      export default Home
      ```
    * Repos.js
      
      ```
      import React, {Component} from 'react'
      import {Link} from 'react-router';
      
      export default class Repos extends Component {
          constructor(props){
              super(props);
              this.state = {
                  repos : []
              }
          }
          componentDidMount(){
              let repos = [
                  {name : 'facebook', repo : 'yarn'},
                  {name : 'facebook', repo : 'react'},
                  {name : 'google', repo : 'angular'},
                  {name : 'antd', repo : 'antd'},
              ];
              this.setState({repos});
          }
          render() {
              return (
                  <div>
                      <h3>Repos 组件</h3>
                      <ul>
                          {
                              this.state.repos.map((item, index) => {
                                  return <li key={index}><Link to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                              })
                          }
                      </ul>
                      {this.props.children}
                  </div>
              )
          }
      }
      ```
  * 定义应用组件: App.js
   
    ```
    import React from 'react';
    import {Link} from 'react-router'
    
    class App extends React.Component{
        render(){
            return (
                <div>
                    <h2>Hello, React Router!</h2>
                    <ul>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/repos">repos</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }
    
    export default App;
    ```
  * 定义入口JS: index.js-->渲染组件
    
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Router, Route, hashHistory, IndexRoute} from 'react-router';
    import App from './components/App/App';
    import About from './components/About/About';
    import Repos from './components/Repos/Repos';
    import Home from './components/Home/Home';
    import Repo from './components/Repo/Repo';
    
    ReactDOM.render(
        (
            <Router history={hashHistory}>
    
                <Route path="/" component={App}>
    
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/about" component={About}></Route>
                    <Route path="/repos" component={Repos}>
                        <Route path="/repos/:name/:repo" component={Repo}></Route>
                    </Route>
                </Route>
            </Router>
        ),
        document.getElementById('root')
    );
    ```
  * 主页面: index.html
    ```
    <style>
      .active {
        color: red;
      }
    </style>
    <div id='root'></div>
    ```
5. 传递请求参数
  * repo.js: repos组件下的分路由组件
   
    ```
    import React from 'react';
     
     function Repo({params}) {
         return <p>用户名:{params.name}, 仓库名:{params.repo}</p>
     }
     
     export default Repo;
    ```
  * repos.js
    
    ```
    import React, {Component} from 'react'
    import {Link} from 'react-router';
    
    export default class Repos extends Component {
        constructor(props){
            super(props);
            this.state = {
                repos : []
            }
        }
        componentDidMount(){
            let repos = [
                {name : 'facebook', repo : 'yarn'},
                {name : 'facebook', repo : 'react'},
                {name : 'google', repo : 'angular'},
                {name : 'antd', repo : 'antd'},
            ];
            this.setState({repos});
        }
        render() {
            return (
                <div>
                    <h3>Repos 组件</h3>
                    <ul>
                        {
                            this.state.repos.map((item, index) => {
                                return <li key={index}><Link to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                            })
                        }
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }
    ```
