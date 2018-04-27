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