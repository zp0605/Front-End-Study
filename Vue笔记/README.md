#### [准备工作](README.md#启动Vue项目)
#### [第一天](README.md#第一天)
#### [第二天](README.md#第二天)
#### [第三天](README.md#第三天)
#### [第四天](README.md#第四天)
#### [第五天](README.md#第五天)
----
## 启动Vue项目
--
## 准备工作
  
    * Vue脚手架初始化项目： vue init webpack webpack-demo
    * cd webpack-demo
    * npm install
    * npm run dev
## 确认组件
  * app：应用主组件
  * add: 添加评论组件
  * list：显示评论组件
  * item: 评论个体
## 搭建静态页面
  * 拆分静态页面
  * 引入第三方css库： bootstrap.css
  * 引入index.css
## 数据动态展现
  * 初始化数据： app
  * 传递数据：
    - 标签属性的形式传递数据 :key=value
    - 接收数据的组件需要声明接收： props
    - app --> list ---> item
## 子组件向父组件传递数据
  * 父组件定义方法，声明形参
  * 将方法传递给子组件，子组件调用传入实参
  * 父组件的方法定义methods
  * 子组件做的操作
  
        addComment(){
          // 收集数据
             let username = this.username
             let comment = this.comment
             // 判断数据的合法性
             if(!username || !comment){
               alert('输入的内容不能为空')
               return
             }
     
             // 整理数据
             let commentObj = {username, comment}
             // 将数据传递给app
             this.add(commentObj)
     
             // 清空用户输入的内容
             this.username = ''
             this.comment = ''
           }
         }
## 删除功能
  * 思考： 
    - 删除数组里的某一项
    - 需要的index
    - 提供index的是：item组件
  * 实践： 
    - 将item里的index传递给app组件
    - 在app组件里操作数据
## 分割线
## todo_case
### 1. 拆分组件
  * app: 应用主组件
  * header: 头部组件
  * main: 主体组件
    * item: todo个体组件
  * footer: 底部组件
  * 数据源： app
### 2. 实现静态页面
  * 在app中初始化数据
  * 数据流向： app --> main ---> item
  * item接收数据动态展示
### 3. 完成底部全选全不选的功能
  * 根据显示的todoItem 影响全选全不选的按钮的选中状态
    - 全部完成的checkbox.length === todos.length && this.allCompleteTodos
  * 根据全选全不选的按钮影响todoItem的选中状态
    - 拿到全选全不选的按钮的状态： true/false
    - 将该数据交给app
    - 根据传递过来的isChecked更新todoItem的选中状态
### 4. 封装功能模块
    
    // 封装保存读取数据的localStorage功能模块
    // 思考：封装功能模块根据什么封装？
    // 当功能点大于一个的时候耿庄成对象
    const todo_key = 'todo_key'
    export default {
      getData(){// 读取数据
        return JSON.parse(localStorage.getItem(todo_key))
      },
      setData(value){// 当别人调用该方法的时候保存数据
        localStorage.setItem(todo_key, JSON.stringify(value))
      }
    }
### 自定义事件
  * 绑定事件
    * 事件名
    * 回调函数： function(event){}
  * 触发事件
    * 事件名
    * 数据
  * v-on:事件名=事件的回调函数
  * 组件实例对象.$on(事件名， 回调函数)
  * 组件实例对象.$emit(事件名, 数据)
  * <font color=red>以上用的方式只能是相邻的父子组件传递数据，子组件--->父组件</font>
### slot 插槽
  * 父组件--->子组件
  * 传递的数据： 标签页面
  * 需要传递的数据写在对应组件的表前体
  
----
## vue-router
### 1. 引入Vue核心库，vue-router
### 2. Vue.use(VueRouter)
  * 声明使用Vue的插件： VueRouter.install(Vue)
### 3. 注册路由器
    
    export default new VueRouter({
      routes: [
        {
          path: '/about',
          component: about
        },
        {
          path: '/home',
          component: home
        }
      ]
    })
### 4. 使用路由器

----
#第一天
----

## 一、 Vue.js简介

### 1. Vue.js是什么
  **Vue.js**也称为Vue，读音/vju:/，类似view，错误读音v-u-e
  版本：v1.0 v2.0

  + 是一个构建用户界面的框架
  + 是一个轻量级MVVM（Model-View-ViewModel）框架，和angular、react类似，其实就是所谓的数据双向绑定
  + 数据驱动+组件化的前端开发（核心思想）
  + 通过简单的API实现**响应式的数据绑定**和**组合的视图组件**
  + 更容易上手、小巧

  参考：[官网](https://cn.vuejs.org/)

### 2.vue和angular的区别

#### 2.1 angular
  + 上手较难
  + 指令以ng-xxx开头
  + 所有属性和方法都存储在$scope中
  + 由google维护

#### 2.2 vue
  + 简单、易学、更轻量
  + 指令以v-xxx开头
  + HTML代码+JSON数据，再创建一个vue实例
  + 由个人维护：**尤雨溪**，华人，目前就职于阿里巴巴，2014.2开源了vue.js库

 ![尤雨溪](https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=d49c7e60ee1190ef15f69a8daf72f673/4afbfbedab64034f29596c8ba6c379310b551da2.jpg)

 共同点：`都不兼容低版本IE`
 对比：GitHub上vue的stars数量大约是angular的两倍


## 二、起步

### 1. 下载核心库vue.js
	bower info vue
	npm init --yes
	cnpm install vue --save
	版本 v2.3.4 目前最新版本(2017.6.29)

	vue2.0和1.0相比，最大的变化就是引入了Virtual DOM（虚拟DOM）,页面更新效率更高，速度更快

### 2. Hello World（对比angular）
	
#### 2.1 angular实现
	js:
		let app=angular.module('myApp',[]);
		app.controller('MyController',['$scope',function($scope){
			$scope.msg='Hello World';
		}]);
	html:	
		<html ng-app="myApp">
			<div ng-controller="MyController">
				{{msg}}
			</div>
		</html>

#### 2.2 vue实现
	js:
		new Vue({
			el:'#itany', //指定关联的选择器
			data:{ //存储数据
				msg:'Hello World',
				name:'tom'
			}
		});
	html:
		<div id="itany">
			{{msg}}
		</div>

### 3. 安装vue-devtools插件，便于在chrome中调试vue
	直接将vue-devtools解压缩，然后将文件夹中的chrome拖放到扩展程序中
    
    //配置是否允许vue-devtools检查代码，方便调试，生产环境中需要设置为false
        Vue.config.devtools=false;
        Vue.config.productionTip=false; //阻止vue启动时生成生产消息


## 三、 常用指令

### 1. 什么是指令？
    用来扩展html标签的功能
    angular中常用的指令：
        ng-model
        ng-repeat
        ng-click
        ng-show/ng-hide
        ng-if

### 2. vue中常用的指令
  + v-model
    双向数据绑定，一般用于表单元素

  + v-for
    对数组或对象进行循环操作，使用的是v-for，不是v-repeat
    注：在vue1.0中提供了隐式变量，如$index、$key
        在vue2.0中去除了隐式变量，已被废除            

  + v-on 
    用来绑定事件，用法：v-on:事件="函数"

  + v-show/v-if   
    用来显示或隐藏元素，v-show是通过display实现，v-if是每次删除后再重新创建，与angular中类似 


## 四、 练习：用户管理 
    使用BootStrap+Vue.js   


## 五、 事件和属性

### 1. 事件

#### 1.1 事件简写
    v-on:click=""    
    简写方式 @click=""

#### 1.2 事件对象$event    
    包含事件相关信息，如事件源、事件类型、偏移量
    target、type、offsetx

#### 1.3 事件冒泡
    阻止事件冒泡：
        a)原生js方式，依赖于事件对象
        b)vue方式，不依赖于事件对象
            @click.stop

#### 1.4 事件默认行为 
    阻止默认行为：
        a)原生js方式，依赖于事件对象

#### 1.5 键盘事件
    回车：@keydown.13 或@keydown.enter
    上：@keydown.38 或@keydown.up

    默认没有@keydown.a/b/c...事件，可以自定义键盘事件，也称为自定义键码或自定义键位别名

#### 1.6 事件修饰符    
    .stop - 调用 event.stopPropagation()。
    .prevent - 调用 event.preventDefault()。
    .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
    .native - 监听组件根元素的原生事件。
    .once - 只触发一次回调。

### 2. 属性
    
#### 2.1 属性绑定和属性的简写    
    v-bind 用于属性绑定， v-bind:属性=""

    属性的简写：
        v-bind:src="" 简写为 :src=""

#### 2.2 class和style属性
    绑定class和style属性时语法比较复杂：


## 六、 模板

### 1. 简介
    Vue.js使用基于HTML的模板语法，可以将DOM绑定到Vue实例中的数据
    模板就是{{}}，用来进行数据绑定，显示在页面中
    也称为Mustache语法

### 2. 数据绑定的方式
    a.双向绑定
        v-model
    b.单向绑定    
        方式1：使用两对大括号{{}}，可能会出现闪烁的问题，可以使用v-cloak解决
        方式2：使用v-text、v-html

### 3. 其他指令
    v-once 数据只绑定一次
    v-pre 不编译，直接原样显示


## 七、 过滤器

### 1. 简介
    用来过滤模型数据，在显示之前进行数据处理和筛选
    语法：{{ data | filter1(参数) | filter2(参数)}}

### 2. 关于内置过滤器
    vue1.0中内置许多过滤器，如：
        currency、uppercase、lowercase
        limitBy
        orderBy
        filterBy
    vue2.0中已经删除了所有内置过滤器，全部被废除
    如何解决：
        a.使用第三方工具库，如lodash、date-fns日期格式化、accounting.js货币格式化等
        b.使用自定义过滤器

### 3. 自定义过滤器
    分类：全局过滤器、局部过滤器

#### 3.l 自定义全局过滤器
    使用全局方法Vue.filter(过滤器ID,过滤器函数)

#### 3.l 自定义局部过滤器    

---
#第二天
---

## 一、 发送AJAX请求

### 1. 简介
    vue本身不支持发送AJAX请求，需要使用vue-resource、axios等插件实现
    axios是一个基于Promise的HTTP请求客户端，用来发送请求，也是vue2.0官方推荐的，同时不再对vue-resource进行更新和维护
    
    参考：GitHub上搜索axios，查看API文档

### 2. 使用axios发送AJAX请求

#### 2.1 安装axios并引入
    npm install axios -S
    也可直接下载axios.min.js文件

#### 2.2 基本用法  
    axios([options])  
    axios.get(url[,options]);
        传参方式：
            1.通过url传参
            2.通过params选项传参
    axios.post(url,data,[options]);
        axios默认发送数据时，数据格式是Request Payload，并非我们常用的Form Data格式，
        所以参数必须要以键值对形式传递，不能以json形式传参
        传参方式：
            1.自己拼接为键值对
            2.使用transformRequest，在请求发送前将请求数据进行转换
            3.如果使用模块化开发，可以使用qs模块进行转换
    
    axios本身并不支持发送跨域的请求，没有提供相应的API，作者也暂没计划在axios添加支持发送跨域请求，所以只能使用第三方库

### 3. 使用vue-resource发送跨域请求

#### 3.1 安装vue-resource并引入    
    cnpm install vue-resource -S

#### 3.2 基本用法
    使用this.$http发送请求  
        this.$http.get(url, [options])
        this.$http.head(url, [options])
        this.$http.delete(url, [options])
        this.$http.jsonp(url, [options])
        this.$http.post(url, [body], [options])
        this.$http.put(url, [body], [options])
        this.$http.patch(url, [body], [options])  

### 4. 练习
    百度搜索列表
    课后作业：
        1.只显示4条
        2.回车后在新页面中显示搜索结果


## 二、Vue生命周期
    vue实例从创建到销毁的过程，称为生命周期，共有八个阶段
                

## 三、计算属性

### 1. 基本用法
    计算属性也是用来存储数据，但具有以下几个特点：
        a.数据可以进行逻辑处理操作
        b.对计算属性中的数据进行监视

### 2.计算属性 vs 方法
    将计算属性的get函数定义为一个方法也可以实现类似的功能
    区别：
        a.计算属性是基于它的依赖进行更新的，只有在相关依赖发生改变时才能更新变化
        b.计算属性是缓存的，只要相关依赖没有改变，多次访问计算属性得到的值是之前缓存的计算结果，不会多次执行

### 3. get和set
    计算属性由两部分组成：get和set，分别用来获取计算属性和设置计算属性
    默认只有get，如果需要set，要自己添加


## 四、 vue实例的属性和方法

### 1. 属性
    vm.$el
    vm.$data
    vm.$options
    vm.$refs

### 2. 方法
    vm.$mount()
    vm.$destroy()
    vm.$nextTick(callback)

    vm.$set(object,key,value)
    vm.$delete(object,key)
    vm.$watch(data,callback[,options])


## 五、自定义指令
    分类：全局指令、局部指令

### 1. 自定义全局指令
    使用全局方法Vue.directive(指令ID,定义对象)    

### 2. 自定义局部指令

### 3. 练习
    拖动页面中的元素
    onmouseover onmouseout 
    onmousedown onmousemove  onmouseup


## 六、过渡(动画)

### 1. 简介
    Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果
    本质上还是使用CSS3动画：transition、animation

### 2. 基本用法
    使用transition组件，将要执行动画的元素包含在该组件内
        <transition>
            运动的元素
        </transition>       
    过滤的CSS类名：6个
    
### 3. 钩子函数
    8个

### 4. 结合第三方动画库animate..css一起使用
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
        <p v-show="flag">网博</p>
    </transition>    

### 5. 多元素动画
    <transition-group>    

### 6. 练习
    多元素动画    
  
----
##第三天
----


## 一、 组件component

### 1. 什么是组件？
    组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码
    组件是自定义元素（对象）

### 2. 定义组件的方式    
    方式1：先创建组件构造器，然后由组件构造器创建组件
    方式2：直接创建组件

### 3. 组件的分类
    分类：全局组件、局部组件

### 4. 引用模板
    将组件内容放到模板<template>中并引用

### 5. 动态组件
    <component :is="">组件
        多个组件使用同一个挂载点，然后动态的在它们之间切换    
    
    <keep-alive>组件    


## 二、 组件间数据传递
    
### 1. 父子组件
    在一个组件内部定义另一个组件，称为父子组件
    子组件只能在父组件内部使用
    默认情况下，子组件无法访问父组件中的数据，每个组件实例的作用域是独立的

### 2. 组件间数据传递 （通信）

#### 2.1 子组件访问父组件的数据
    a)在调用子组件时，绑定想要获取的父组件中的数据
    b)在子组件内部，使用props选项声明获取的数据，即接收来自父组件的数据
    总结：父组件通过props向下传递数据给子组件
    注：组件中的数据共有三种形式：data、props、computed

#### 2.2 父组件访问子组件的数据
    a)在子组件中使用vm.$emit(事件名,数据)触发一个自定义事件，事件名自定义
    b)父组件在使用子组件的地方监听子组件触发的事件，并在父组件中定义方法，用来获取数据
    总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件

### 3. 单向数据流
    props是单向绑定的，当父组件的属性变化时，将传导给子组件，但是不会反过来
    而且不允许子组件直接修改父组件中的数据，报错
    解决方式：
        方式1：如果子组件想把它作为局部数据来使用，可以将数据存入另一个变量中再操作，不影响父组件中的数据
        方式2：如果子组件想修改数据并且同步更新到父组件，两个方法：
            a.使用.sync（1.0版本中支持，2.0版本中不支持，2.3版本又开始支持）
                需要显式地触发一个更新事件
            b.可以将父组件中的数据包装成对象，然后在子组件中修改对象的属性(因为对象是引用类型，指向同一个内存空间)，推荐    

### 4. 非父子组件间的通信
    非父子组件间的通信，可以通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件

    var Event=new Vue();
    Event.$emit(事件名,数据);
    Event.$on(事件名,data => {});


## 三、 slot内容分发
    本意：位置、槽
    作业：用来获取组件中的原内容，类似angular中的transclude指令


## 四、 vue-router路由

### 1. 简介
    使用Vue.js开发SPA（Single Page Application）单页面应用
    根据不同url地址，显示不同的内容，但显示在同一个页面中，称为单页面应用

  [参考](https://router.vuejs.org/zh-cn)     

    bower info vue-router
    cnpm install vue-router -S

### 2. 基本用法
    a.布局
    b.配置路由

### 3. 路由嵌套和参数传递        
    传参的两种形式：
        a.查询字符串：login?name=tom&pwd=123
            {{$route.query}}
        b.rest风格url：regist/alice/456
            {{$route.params}}


### 4. 路由实例的方法 
    router.push()  添加路由，功能上与<route-link>相同
    router.replace() 替换路由，不产生历史记录    

### 5. 路由结合动画


## 五、 单文件组件

### 1. .vue文件
    .vue文件，称为单文件组件，是Vue.js自定义的一种文件格式，一个.vue文件就是一个单独的组件，在文件内封装了组件相关的代码：html、css、js

    .vue文件由三部分组成：<template>、<style>、<script>
        <template>
            html
        </template>

        <style>
            css
        </style>

        <script>
            js
        </script>

### 2. vue-loader  
    浏览器本身并不认为.vue文件，所以必须对.vue文件进行加载解析，此时需要vue-loader
    类似的loader还有许多，如：html-loader、css-loader、style-loader、babel-loader等
    需要注意的是vue-loader是基于webpack的     

### 3. webpack
    webpack是一个前端资源模板化加载器和打包工具，它能够把各种资源都作为模块来使用和处理
    实际上，webpack是通过不同的loader将这些资源加载后打包，然后输出打包后文件 
    简单来说，webpack就是一个模块加载器，所有资源都可以作为模块来加载，最后打包输出

    [官网](http://webpack.github.io/)     

    webpack版本：v1.x v2.x

    webpack有一个核心配置文件：webpack.config.js，必须放在项目根目录下

### 4. 示例，步骤：
    
#### 4.1 创建项目，目录结构 如下：
webpack-demo
    |-index.html
    |-main.js   入口文件       
    |-App.vue   vue文件
    |-package.json  工程文件
    |-webpack.config.js  webpack配置文件
    |-.babelrc   Babel配置文件

### 4.2 编写App.vue

### 4.3 安装相关模板    
    cnpm install vue -S

    cnpm install webpack -D
    cnpm install webpack-dev-server -D

    cnpm install vue-loader -D
    cnpm install vue-html-loader -D
    cnpm install css-loader -D
    cnpm install vue-style-loader -D
    cnpm install file-loader -D

    cnpm install babel-loader -D
    cnpm install babel-core -D
    cnpm install babel-preset-env -D  //根据配置的运行环境自动启用需要的babel插件
    cnpm install vue-template-compiler -D //预编译模板

    合并：cnpm install -D webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env  vue-template-compiler

### 4.4 编写main.js    

### 4.5 编写webpack.config.js

### 4.6 编写.babelrc    

### 4.7 编写package.json

### 4.8 运行测试
    npm run dev    


## 六、 vue-cli脚手架 

### 1. 简介
    vue-cli是一个vue脚手架，可以快速构造项目结构
    vue-cli本身集成了多种项目模板：
        simple  很少简单
        webpack 包含ESLint代码规范检查和unit单元测试等
        webpack-simple 没有代码规范检查和单元测试
        browserify 使用的也比较多
        browserify-simple

### 2. 示例，步骤：
    
#### 2.1 安装vue-cli，配置vue命令环境 
    cnpm install vue-cli -g
    vue --version
    vue list

#### 2.2 初始化项目，生成项目模板
    语法：vue init 模板名  项目名

#### 2.3 进入生成的项目目录，安装模块包
    cd vue-cli-demo
    cnpm install

#### 2.4 运行
    npm run dev  //启动测试服务
    npm run build //将项目打包输出dist目录，项目上线的话要将dist目录拷贝到服务器上

### 3. 使用webpack模板
    vue init webpack vue-cli-demo2

    ESLint是用来统一代码规范和风格的工具，如缩进、空格、符号等，要求比较严格
[官网](http://eslint.org)    

    问题Bug：如果版本升级到node 8.0 和 npm 5.0，控制台会报错：
        GET http://localhost:8080/__webpack_hmr net::ERR_INCOMPLETE_CHUNKED_ENCODING
    解决方法：
        a)降低Node版本到7.9或以下
        b)修改build/dev-server.js文件，如下：
            var hotMiddleware = require('webpack-hot-middleware')(compiler, {
              log: () => {},
              heartbeat:2000 //添加此行
            })
        参考：https://github.com/vuejs-templates/webpack/issues/731    


---
# 第四天 
---


## 一、模块化开发

### 1. vue-router模块化
    cnpm install vue-router -S

#### 1.1 编辑main.js
    
#### 1.2 编辑App.vue

#### 1.3 编辑router.config.js

### 2. axios模块化
    cnpm install axios -S

    使用axios的两种方式：
        方式1：在每个组件中引入axios
        方式2：在main.js中全局引入axios并添加到Vue原型中

### 3. 为自定义组件添加事件        


## 二、 Elment UI

### 1. 简介
    Element UI是饿了么团队提供的一套基于Vue2.0的组件库，可以快速搭建网站，提高开发效率
        ElementUI  PC端
        MintUI 移动端

[官网](http://element.eleme.io/)

### 2. 快速上手

#### 2.1 安装elment ui
    cnpm install element-ui -S

#### 2.2 在main.js中引入并使用组件
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-default/index.css' //该样式文件需要单独引入
    Vue.use(ElementUI);
    这种方式引入了ElementUI中所有的组件

#### 2.3 在webpack.config.js中添加loader    
    CSS样式和字体图标都需要由相应的loader来加载，所以需要style-loader、css-loader

    默认并没有style-loader模块，所以需要单独安装
        cnpm install style-loader --save-dev

#### 2.4 使用组件

#### 2.5 使用less
    安装loader，需要两个：less、less-loader
        cnpm install less less-loader -D
    在webpack.config.js中添加loader    

### 3. 按需引入组

#### 3.1 安装babel-plugin-component
    cnpm install babel-plugin-component -D  

#### 3.2 配置.babelrc文件
    "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        }
    ]]]

#### 3.3  只引入需要的插件


## 三、 自定义全局组件（插件）

    全局组件（插件）：就是指可以在main.js中使用Vue.use()进行全局引入，然后在其他组件中就都可以使用了，如vue-router
        import VueRouter from 'vue-router'
        Vue.use(VueRouter);

    普通组件（插件）：每次使用时都要引入，如axios
        import axios from 'axios'


## 四、 Vuex

### 1. 简介
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    简单来说，用来集中管理数据，类似于React中的Redux，都是基于Flux的前端状态管理框架           

### 2. 基本用法

#### 2.1 安装vuex
    cnpm install vuex -S

#### 2.2 创建store.js文件，在main.js中导入并配置store.选项

#### 2.3 编辑store.js文件
    Vuex的核心是Store(仓库)，相当于是一个容器，一个store实例中包含以下属性的方法：
        state       定义属性（状态、数据）
        getters     用来获取属性
        actions     定义方法（动作）
        commit      提交变化，修改数据的唯一方式就是显式的提交mutations
        mutations   定义变化
        注：不能直接修改数据，必须显式提交变化，目的是为了追踪到状态的变化 

#### 2.4 编辑App.vue        
    在子组件中访问store对象的两种方式：
        方式1：通过this.$store访问
        方式2：通过mapState、mapGetters、mapActions访问，vuex提供了两个方法：
            mapState    获取state
            mapGetters  获取getters
            mapActions  获取actions

### 3. 分模块组织Vuex          

    |-src
        |-store
            |-index.js
            |-getters.js
            |-actions.js
            |-mutations.js
            |-modules  //分为多个模块，每个模块都可以拥有自己的state、getters、actions、mutations
                |-user.js
                |-cart.js
                |-goods.js
                |....

----
# 第五天
----

## 一、 准备工作

###１. 初始化项目
    vue init webpack itany
    cd itany
    cnpm install
    cnpm install less less-loader -D
    cnpm install vuex axios -S
    npm run dev

### 2. 项目资源
    |-reset.css
    |-data.json

### 3. 创建目录结构
    首先清除项目中的部分内容

    创建如下目录结构：
        |-data.json
        |-static
            |-css
                |-reset.css

### 4. 配置API接口，模拟后台数据
    使用express框架启动一个Node服务器，配置API接口，模拟后台数据

    测试API：
     http://localhost:8080/api/seller
     http://localhost:8080/api/goods
     http://localhost:8080/api/ratings


## 二、项目整体结构开发     

    