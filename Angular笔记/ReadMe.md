##AngularJS入门 [相关资料](code/AngularTest/study/test/01_angularjs入门)  [官方教程](https://www.angular.cn/guide/architecture)  [angrular常用方法速查表](https://www.angular.cn/guide/cheatsheet)
1. AngularJS是什么?
	* Google开源的前端JS结构化框架
	* 动态展示页面数据, 并与用户进行交互
	* AngularJS特性(优点)
		* 双向数据绑定
		* 声明式依赖注入
		* 完善的页面模板技术: 指令/表达式
		* 解耦应用逻辑, 数据模型和视图
		* 定制表单验证
		* Ajax封装
2. HelloWorld 
	* 导入angular.js, 并在页面中引入
	* 在body中使用: ng-app`111!11o
	* 在input标签中指定: ng-model='xxx'
	* 在p标签中使用: {{xxx}}	


##四个重要概念 [相关资料](code/AngularTest/study/test/02_四个重要概念)
1. **双向数据绑定**
	* View（视图）： 页面（标签、指令，表达式）
	* Model(模型) ：作用域对象（属性、方法）
	* 数据绑定： 数据从一个位置自动流向另一个位置
		* View-->Model
		* Model-->View
	* 单向数据绑定： 只支持一个方向
		* View-->Model  ： ng-init
		* Model-->View  : {{name}}
	* 双向数据绑定
		* Model<-->View  : ng-model
	* angular是支持双向数据绑定的
2. **依赖注入**
	* 依赖的对象被别人(调用者)自动注入进入
	* 注入的方式;
		* 内部自建：不动态 
		* 全局变量：污染全局环境
		* 形参：这种最好
	* angualr就是通过声明式依赖注入， 来得到作用域对象 
	* 形参名不能随便定义（只是针对当前这种写法）
3. **MVC模式**
  * **M: Model, 即模型**, 在angular中: 
    * 为scope
    * 储存数据的容器
    * 提供操作数据的方法
  * **V: View, 即视图**, 在angular中:
    * 为页面
    * 包括: html/css/directive/expression
    * 显示Model的数据
    * 将数据同步到Model
    * 与用户交互
  * **C: Controller, 即控制器**, 在angular中:
    * 为angular的Controller
    * 初始化Model数据
    * 为Model添加行为方法
4. **MVVM模式**
  * M: Model, 即数据模型, 在angular中:
    * 为scope中的各个数据对象
  * V: View, 即视图, 在angular中:
    * 为页面
  * VM: ViewModel, 即视图模型, 在angular中:
    * 为scope对象
    
##三个重要对象 [文档资料](code/AngularTest/study/test/03_三个重要对象)
1. **作用域**
	* 是一个js实例对象
	* 这个对象的属性/方法， 在页面中可以直接引用
	* ng-app指令： 内部创建一个根作用域（$rootScope）, 是所有其它作用域的父对象
	* $scope的2个重要方法
		* $apply(): 强制脏数据检查
  	  * 当scope中的数据发生了改变, angular会将数据同步显示到页面, 这一操作称为"脏数据检查"
      * angular在它的方法执行完后, 都会进行脏数据检查,
      * 在原生JS函数中改变作用域数据, angular是不会进行脏数据检查的
      * 使用$scope的$apply函数可以解决此问题
      	
      	```
      	$scope.$apply(function(){
          //在这里更新scope数据, angular会同步更新其页面数据
        });
      	```
      * $apply()的本质是调用$digest()去进行脏数据检查更新页面的
      * $digest()虽然也能实现页面更新, 但建议使用$apply()
  	* $watch(): 监视scope中某个属性的变化 
  	  * angular是双向数据绑定的, Scope中的属性数据发生了改变, 会自动更新页面中对应的数据
      * 但有时, 我们想监视数据的变化情况, 来实现特定的功能
      * Angular提供了$watch()来实现
        * var unWatch = $scope.$watch('propertyName', function(newValue, oldValue){}, deepWatch)
        * 参数一: 指定监视属性的属性名
        * 参数二: 发现数据发生改变时的回调函数
        * 参数三: 是否深度监视, 默认是false, 代表只是监视属性本身, 而不监视其内部数据
        * 返回值: 用于取消监视的函数, 调用unWatch()取消监视
2. **控制器**
	* 也是一个对象，是我们View与Model之间的桥梁
	* 当我们使用了ng-controller指令， 内部就会创建控制器对象
	* 但我们同时得提供控制器的构造函数（必须定义一个$scope的形参）
	* 每定义一个ng-controller指令， 内部就会创建一个新的作用域对象（$scope）, 并输入构造函数中
3. **模块**
	* 也是一个对象
	* 创建模块对象： angular.module('模块名', [依赖的模块])
	* 通过模块添加控制器：
	    * module.controller('MyController', funnction($scope){//操作$scope的语句})
	* angular的整体设计也是多模块的
		* 核心模块： angular.js
		* 扩展模块： angular-router.js, angular-message.js, angular-animate.js
  * module对象的方法
    * controller() : 定义控制器
    * factory() : 定义服务对象
    * service() : 定义服务对象
    * filter() : 定义过滤器
    * directive() : 定义指令
    * config() : 指定做一些配置的回调函数
4. 服务
	* 是什么？ 具有特定功能的对象（object对象、函数，数组，基本类型）
	* 内置服务
		* 都以$开头
		* 引入内置服务： 声明式依赖注入（定义形参）, 你不使用它就存在了
		* 常用的几个：
			* $rootScope
			* $scope
			* $timeout 
			* $interval
			* 脏数据检查: 
			    * 当angular定义的函数执行完后, 会对scope内的属性进行检查, 如果发现有改变更新界面
			    * 在非angular定义的回调函数执行完后, 不会进行脏数据检查 --->即使更新了scope页面不会同步更新
		* 页面如何能自动更新的？
			* 在内置的一些函数执行完后， angular会进行脏数据检查的操作
			* controller, $timeout()中的回调函数,  $interval()中的回调函数
			* 如果我们在setTimeout()的回调函数中更新scope，是不会进行脏数据检查的，页面不可能更新 
	* 自定义服务
		* 使用module对象来定义服务
		* 定义的方法：
			* factory() : 可以定义任意类型的服务
			* service() ： 只能定义object类型对象
		* factory()
			```
			factory('服务名', function(){
        return 服务对象;  //可以是任意类型
      })
			```
		* 如何引入： 声明式依赖注入
5. angular对象
	  * module() : 创建模型对象
    * bootstrap() : 编码启动angular, 代替ng-app
    * element() : 将dom对象/html标签包装为jQuery对象
    * forEach() : 遍历数组和元素集合伪数组
    * toJson()和fromJson() : js对象与Json字符串相互转换
    * isArray(),isObject(),isFunction() : 类型判断
    * lowercase()和uppercase() : 大小写转换
 
##两个页面语法 [文档资料](code/AngularTest/study/test/04_两个页面语法)
1. **表达式** [代码](code/AngularTest/study/test/04_两个页面语法/1_表达式.html)
	* {{js表达式}}
	* 只负责从作用域对象中读取对应的属性数据来显示数据
	* 不支持if/for/while
	* 支持三目表达式
2. **指令** [2_常用指令1](code/AngularTest/study/test/04_两个页面语法/2_常用指令1.html) [2_常用指令2](code/AngularTest/study/test/04_两个页面语法/2_常用指令2.html)
	* 什么指令 ： 自定义标签属性/标签
	* 常用的内置指令：
		* ng-app: 指定模块名，angular管理的区域
		* ng-model： 双向绑定，输入相关标签
		* ng-init： 初始化数据
		* ng-click： 调用作用域对象的方法（点击时）
		* ng-controller: 指定控制器构造函数名，内部会自动创建一个新的子作用域（外部的）
		* ng-bind： 解决使用{{}}显示数据闪屏（在很短时间内显示{{}}）
		* ng-repeat： 遍历数组显示数据， 数组有几个元素就会产生几个新的作用域
			* $index, $first, $last, $middle, $odd, $even
		* ng-show: 布尔类型， 如果为true才显示
		* ng-hide: 布尔类型， 如果为true就隐藏
		* ng-class: 动态引用定义的样式  {aClass:true, bClass:false}
    * ng-style: 动态引用通过js指定的样式对象   {color:'red', background:'blue'}
    * ng-click: 点击监听, 值为函数调用, 可以传$event
    * ng-mouseenter: 鼠标移入监听, 值为函数调用, 可以传$event
    * ng-mouseleave: 鼠标移出监听, 值为函数调用, 可以传$event
3. **过滤器**
	* 作用: 在显示数据时可以对数据进行格式化或过滤
		* 单个--->格式化（将别的类型的数据转换为特定格式的字符串）
		* 多个----》格式化/过滤
		* 不会真正改变被操作数据
	* {{express | 过滤器名：补充说明}}
	* 常用内置：
		* currency 货币格式化(文本)
		* number数值格式化(文本)
		* date 将日期对象格式化(文本)
		* json: 将js对象格式化为json(文本)
		* lowercase : 将字符串格式化为全小写(文本)
		* uppercase : 将字符串格式化全大写(文本)

		* limitTo 从一个数组或字符串中过滤出一个新的数组或字符串
			* limitTo : 3  limitTo : -3
		* orderBy : 根据指定作用域属性对数组进行排序
			* {{[2,1,4,3] | orderBy}}  升序
			* {{[2,1,4,3] | orderBy：‘-’}}  降序
			* {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'id'}  id升序
			* {{[{id:2,price:3}, {id:1, price:4}] | orderBy:'-price'} price降序
		* filter : 从数组中过滤返回一个新数组
			* {{[{id:22,price:35}, {id:23, price:45}] | filter:{id:'3'}} //根据id过滤
			* {{[{id:22,price:35}, {id:23, price:45}] | filter:{$:'3'}} //根据所有字段过滤
	* 自定义过滤器
		* 内置过滤器有限， 有时并不能满足页面显示数据的需求
		* 语法：
			```
			module.filter('myLimitTo'， function(){  //filterFactory
            return function(value, startIndex, endIndex){
              // 对vlaue进行过滤处理， 并return 处理的结果
              // 不要修改value本身
            }
          });
			```
			
1. angular-animate
  * Angular动画是通过操作**css transition动画**样式实现动画效果的
  * 使用
    * 引入angular-animate.js
    * 引入模块依赖: angular.module('myApp', ['ngAnimate'])
    * 定义显示状态和隐藏状态class
      ```
        /*显示状态下的样式*/
        div {
          transition: all linear 0.5s; /*过渡动画*/
        }
    
        /*隐藏状态下的样式*/
        .ng-hide {
          
        }
      ```
    * 通过ng-show/ng-hide来控制元素的显示与隐藏
      ```
      <div ng-hide="myCheck"></div>
      ```
2. angular-messages
  * angular进行**表单验证**的扩展库(插件)
  * 指定验证规则的指令
    * ng-required="true"
    * ng-minlength="4"
    * ng-maxlength="8"
    * ng-pattern="/^[a-zA-Z]/"
    * type='email'
    * type='url'
    * min="10"
    * max="100"
  * 显示提示信息的指令
    * ng-messages
    * ng-message
    * ng-show
    * ng-bind
    * ng-class
  * 注意:
    * form和input都必须有name属性
    * input必须有ng-model
3. angular-route
  * 对**单页应用SPA**来讲，路由用来管理用户在使用过程中看到的多个界面
  * 使用
    * 引入angular-route.js
    * 引入模块依赖: angular.module('myApp', ['ngRoute'])
    * 定义module对象(app.js)
      ```
      window.module = angular.module('myApp', ['ngRoute'])
      ```
    * 定义路由template页面
      * list.html
        ```
        <ul>
          <li ng-repeat="id in ids">
            <a href="#/detail/{{id}}">ID{{id}}</a>
          </li>
        </ul>
        ```
      * detail.html
        ```
        <p>Route {{id}}: detail.html</p>
        ``` 
    * 定义路由controller
      * ListCtrl.js
        ```
        window.module.controller('ListController', ['$scope',
            function($scope) {
              $scope.ids = [1, 2, 3, 4, 5, 6]
            }])
        ```
      * DetailCtrl.js
        ```
        window.module.controller('DetailController', ['$scope', '$routeParams',
            function($scope, $routeParams) {
              $scope.id = $routeParams.id
            }])
        ```
    * 注册路由(appRoute.js)
      ```
      window.module.config(['$routeProvider', function($routeProvider) {
          $routeProvider
            .when('/list', {
              templateUrl: 'src/templates/list.html', //从index.html查找
              controller: 'ListController'
            })
            .when('/detail/:id', {
              templateUrl: 'src/templates/detail.html',
              controller: 'DetailController'
            })
            .otherwise('/list')
        }])  
      ```
    * 主js启动应用(main.js)
      ```
      window.angular.bootstrap(document, ['myApp'])
      ```
    * 主页(test.html)
    
    ```
    <div>
      <h1>Route Demo</h1>
      <ng-view></ng-view>
    </div>
    
    <script type="text/javascript" src="../../../../js/angular-1.5.5/angular.js"></script>
    <script type="text/javascript" src="../../../../js/angular-1.5.5/angular-route.js"></script>
    
    <script type="text/javascript" src="src/app/app.js"></script>
    <script type="text/javascript" src="src/controllers/ListCtrl.js"></script>
    <script type="text/javascript" src="src/controllers/DetailCtrl.js"></script>
    <script type="text/javascript" src="src/route/appRoute.js"></script>
    <script type="text/javascript" src="src/main.js"></script>
    ```
    
    
##H5本地存储技术：
* seesionStorage（会话存储）

  ```
    生命周期：浏览器打开到关闭的过程
    大小：5MB
    保存的位置：浏览器端
    方法：
       setItem('key',value);//以对象的形式存储
       getItem('key');
       removeItem('key');
  ```
* localStorage（本地存储，永久存储）
   
  ```
    生命周期：永久，除非人为删除
    大小：5MB甚至更大
    保存的位置：浏览器端
    方法：
       setItem('key',value);//以对象的形式存储，开发中一般将value转换为json再存储
       getItem('key');
       removeItem('key');
  ```
* cookie

```
   作用：用于浏览器与服务器进行通信
   特点：     
      大小：4KB
      每次发送请求都携带。导致战胜带宽
      保存到浏览器端
      cooke容易被截获，不安全
    生命周期(两种)：
      会话cookie:
      人为设置cookie:  
```
    		
   ##Ajax封装
   
  1. angular通过$http服务来提交ajax请求
2. GET请求
  * 方式一
    ```
    $http({
        method: "GET",
        url: "",
      params: myParams
    })
    .success(function (data, status, headers, config) {
       
    })
    .error(function (data, status, headers, config) {
        
    });
    ```
  * 方式二
    ```
    $http.get(url)
        .success(function (data, status, headers, config) {
           
        })
        .error(function (data, status, headers, config) {
            
        });
    ```
3. POST请求
  * 方式一:
   
    ```
    $http({
        method: "POST",
        url: "",
      data: myData,
    })
    .success(function (data, status, headers, config) {
       
    })
    .error(function (data, status, headers, config) {
        
    });
    ```
  
  * 方式二
    
    ```
    $http.post(url, data)
      .success(function (data, status, headers, config) {
         
      })
      .error(function (data, status, headers, config) {
          
      });
    ```
  
4. JSONP跨域请求

  ```
  $http.jsonp('http://localhost:3000/node_jsonp?callback=JSON_CALLBACK&username=Tom2&passwod=123abc2')
      .success(function (data) {
        $scope.persons = data;
      })
      .error(function (data) {
        alert(data);
      });
  ```  			     
	