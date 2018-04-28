#目录
* 简介与环境搭建
* ionic目录结构分析以及创建组件及使用组件
* ionic中创建一个页面组件、循环数据、以及页面跳转
* 新增 tabs 页面 去掉二级页面 tabs 菜单，修改返回按钮
* ionic中的UI 组件（UI Components）页面布局
* ionic中的UI 组件（UI Components）页面布局、栅格系统
* ionic 中的路由导航NavController以及路由传值 
* ionic 上拉刷新与下拉刷新
* [开发中常见问题](#开发中常见问题)
* [ionic性能优化](#ionic性能优化)



#相关文档
* Cordova常用命令
* [Ionic官网Demo](https://github.com/ionic-team/ionic-preview-app)  [Ionic官网](https://ionicframework.com/docs/)
* [Ionic官网图标](http://ionicframework.com/docs/ionicons/)


##常用Cordova命令  [cordova插件](cordova自定义插件.md)  

* [cordova混合开发](../../WebDev-master/Cordova-integrate-project/Cordova和原生混合开发－安装篇(iOS).md)
* [cordova自定义插件](https://github.com/jinzekid/WebDev/blob/master/Cordova-custom-plugin/Cordova-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6.md)
* [cordova混合开发android](https://github.com/jinzekid/WebDev/blob/master/Cordova-integrate-project/Cordova%E5%92%8C%E5%8E%9F%E7%94%9F%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91%EF%BC%8D%E5%AE%89%E8%A3%85%E7%AF%87(Android).md) [cordova混合开发iOS](https://github.com/jinzekid/WebDev/blob/master/Cordova-integrate-project/Cordova%E5%92%8C%E5%8E%9F%E7%94%9F%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91%EF%BC%8D%E5%AE%89%E8%A3%85%E7%AF%87(iOS).md)

```
  sudo npm install -g cordova 或 npm install -g cordova
  cordova platform add android --save  或 cordova platform add android@版本号 --save
  cordova platform add cordova-android@6.2.3 --save
  cordova build android  或 cordova build android --release
  cordova platform update android
  cordova compile android 单独编译
  cordova platform ls  查看支撑的平台
  cordova run android 真机或模拟器
  cordova plugin rm xxx
  cordova plugin add xxx 
  sudo npm install -g cnpm --registry=https://registry.npm.taobao.org  安装cnpm
  cordova serve 这个感觉比inoic serve要省资源，inoic serve特消耗资源、而且特慢。不过要先执行：   cordova platform add browser
  cordova serve --platform browser
  
  问题：
  cordova run android的时候提示 (node:42788) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: spawn EACCES！！
  解决办法： sudo chmod +x /Applications/Android Studio.app/Contents/gradle/gradle-4.4/bin/gradle 
  
  如果提示： checkPermissions Missing write access，最好不用管理员权限，只需要把对应文件夹及子文件夹的读写权限开放即可。 
```

## 开发常用Ionic命令  [npm查询官网（可查询package的API）](https://www.npmjs.com/package/package) [angrular常用方法速查表](https://www.angular.cn/guide/cheatsheet)
```HTML

  
   ionic serve 或 ionic serve -p 8080  //指定端口
   npm run ionic:serve //如果启动报错的话：[ERROR] app-scripts serve unexpectedly failed.setting ，可以这样启动
   ionic serve --platform browser   //指定平台
   ionic g component componentName //新建组件
   
   遇到的问题：
   ionic serive正常(页面不能访问)，而ionic build的时候提示：Module not found: Error: Can't resolve，尝试执行一下npm update或npm install;
   
   
   @ViewChild:声明对子组件元素的实例引用，意思是通过注入的方式将子组件注入到@ViewChild容器中
   
   
   <!--
     创建页面的步骤：
     1.ionic g page pageName   注意：执行此命令应该在项目的根目录执行
     2.app.module.ts 引入声明组件
     3.home页面引入这个组件，跳转:
     this.navCtrl.push(NewsPage);
   -->
   ionic g page pageName
   
   
   <!--将root根页面设置为rootPage,
    其中rootPage为一个自定义的变量，
    如： rootPage:any = TabsPage; -->
   <ion-nav [root]="rootPage"></ion-nav>

```

##anguar常用代码 [angular官方教程](https://www.angular.cn/guide/architecture)  [angular模块查询](https://www.angular.cn/api) 
---
```
   [(ngModel)]="xxx"  双向数据绑定，注意圆括号 
   <div [id]="id" [title]="msg"> 属性绑定 即title = msg内容 //数据从数据源游向视图
   (target)="statement"  单向绑定，数据从视图流向数据源
   @Input('master') masterName: string; //@Input 为子组件的属性名 masterName 指定一个别名 master  [參考](https://www.angular.cn/guide/component-interaction)
    <form (ngSubmit)="onSubmit()" #heroForm="ngForm"> 定义了一个模板引用变量 #heroForm，并且把赋值为“ngForm”，现在，就可以在“Submit”按钮中访问这个表单了。
   
   let alert = this_.alertCtrl.create({
    title: '注册',
    message: '注册成功',
    buttons: [
      {
        text: '确定',
        handler: () => {
          //.....
        }
      }
    ]
  });
  alert.present();  
                   
```

#####[@ViewChild父子组件传值](http://www.jb51.net/article/117781.htm) viewchild一般用于获取子组件中的值

```
在html中给子组件用'#'加个标记：
<ion-infinite-scroll (ionInfinite)="loadMoreData($event)"  #infiniteScrollObj>
       <ion-infinite-scroll-content
      loadingSpinner="bubbles">
    </ion-infinite-scroll-content>
</ion-infinite-scroll>

在.ts文件中：
@ViewChild(InfiniteScroll) infiniteScrollObj: InfiniteScroll;

@ViewChild('myTouchElement') element:ElementRef;//这里的myTouchElement与html中的#myTouchElement相同
然后就可以在.ts文件中引用html中的子组件了

```


####visual studio code[常用快捷键](https://www.cnblogs.com/yufeiWeb/p/6385693.html)
* ctrl+p：搜索文件
* Shift + Option + F 或 Shift + Alt + F：代码格式化
* ctrl+d:删除当前行， 需要自定义
* ctrl+shift+f : 项目中查找
* ctrl++:放大
* ctrl+-：缩小
* ctrl+g:快速定位到行
* ctrl+t:根据名字查找，可以用于查找函数
* [vscode自定义代码块](https://blog.csdn.net/DeepLies/article/details/53248287)  [VS ionic模板请参考](../Tool/vscode模板)

##<a id="开发中常见问题">开发中常见问题</a>
* http请求时，在android真机上报404错误。（很可能是缺少了cordova-plugin-whitelist）

```
  如果是首次的话，在项目根目录执行：cordova plugin add cordova-plugin-whitelist
  如果已经安装过了，先删除再安装：
  cordova plugin remove cordova-plugin-whitelist
  cordova plugin add cordova-plugin-whitelist
```

* 如果遇到localStorage与配置文件不一致的情况，清除浏览器对应站点的全部缓存或删除app重新安装。
* 二级页面如何强制隐藏tab（这个方法不常用）
  
  ```
  $(".tabbar.show-tabbar").css("opacity","0");
  ```
  一般是配置好了子页面隐藏tab,子页面加上<ion-content>标签即可
  
* nodeJS缺少windows C++编译环境（一堆.h文件找不到）
  
  ```
  1，以管理员运行cmd
  2,npm install --global --production windows-build-tools 
  
  ```
*  angular5在chrom的控制台输出:webpackJsonp undefined 。。。
   
  ```
    在src目录下面index.html文件中添加：
    <script src="build/vendor.js"></script> 
  ```
* angular4升级angular5后，提示OpaqueToken不存在

```
angular 4:
	import { OpaqueToken } from "@angular/core";
	export let xxx = new OpaqueToken("config");
修改为：
   import { InjectionToken } from "@angular/core";
   export let APP_CONFIG = new InjectionToken("config");
	
OpaqueToken与InjectionToken都用于创建可在 Provider 中使用的Token
OpaqueToken是在angular2x中引入的
而InjectionToken是在angular4x中引入的
```
  
##webStorm常用快捷键(Mac OS X)
  
  ```
    左缩进 shift+tab
    删除当前行 ctrl+Y
    复制一行 ctrl+D
    选中光标左或右 shift + -> 或 shift + <-
    定位到某一行 commad+G
  ```
##百度地图
```
注意：执行npm install 或 cordova platform add xxx 或 cordova run的时候，不要用管理员权限!!!! 哎，android真机定位的时候在这个坑里陷了很久，
以管理员权限来操作会出现各种问题：as无法导入或导入文件只读，真机上面提示key错误....


mac获取sha1
https://blog.csdn.net/yangchangfu111/article/details/54614616

keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

参考：https://www.npmjs.com/package/cordova-plugin-baidumaplocation
查看我的key:http://lbsyun.baidu.com/apiconsole/key
//我的测试KEY
cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="t6k6zXeH1MDTGTxLGAHe8o3y3MGC7ZeE" --variable IOS_KEY="ZIp4lTIGtSrDkwGruujHRsn9MH04FnEL"
cordova plugin add jpush-phonegap-plugin --variable APP_KEY=xxx

io.ionic.starter  xiaojiantong.com
ios:ZIp4lTIGtSrDkwGruujHRsn9MH04FnEL
android:t6k6zXeH1MDTGTxLGAHe8o3y3MGC7ZeE

权限：
sudo chmod -R 777
```

#### <a id="ionic性能优化">ionic性能优化</a>
-----
* 低配Android手机页面切换流畅性优化：使用ionic-native-transitions优化
* 列表页面上的item项，点击的时候会有颜色变暗的效果，但这种效果会明显降低页面跳转的流畅度；可以通过CSS样式来优化：

```
.item.active,
.item.activated,
.item-complex.active .item-content,
.item-complex.activated .item-content,
.item .item-content.active,
.item .item-content.activated {
	border-color: #fff;
	background-color: #fff;
}
```

##### 语法优化
* 	[减少不必要的双向绑定](https://www.oschina.net/translate/easy-two-way-data-binding-in-javascript):AngularJS的双向绑定是通过为每个需要双向绑定的数据对象添加[Math Processing Error]
watchers值的old/new value是否发生变化
*  特别注意ionic-views的生命周期，在页面销毁的时候，要注意释放view的相关资源。
*  减少html页面中的filter:原因是每当filter执行时，都会走两次$digest cycle，一次是scope中有数据改动，一次是查看是否有更多的改动需要更新数据。当数据量很大时对性能会有很大影响。
*  ng-if替代ng-show/ng-hide:因为ng-if在等于false时会把元素从DOM中移除，所以所有绑在该元素上的handler会一同失效。而ng-show/ng-hide不会移除DOM元素，而是使用css style去隐藏/显示DOM元素，所以handlers会一直存在。

##### 功能优化
* 跳转页面的时候，先跳转页面，在请求页面上的数据，尽可能减少请求的资源量，并通过loading效果等待载入
* App启动的时候，在Index中载入各个页面需要用到的css和js文件，在程序逻辑中避免或尽可能的较少dom操作，特别是高度位置等的计算
* 列表页面上的数据项目中展示的图片，大小要尽量小一点，减少运存的占用同时也减少了载入的时间，同时实现lazyload延迟加载
* 更新频率较少比如城市、好友列表等数据，可以在本地缓存，app启动的时候异步加载.