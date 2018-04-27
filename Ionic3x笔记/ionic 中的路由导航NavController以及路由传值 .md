## ionic NavController 路由跳转(不传参)
1. 需要引入 NavController 模块

	import { NavController } from 'ionic-angular';
2. 	申明 NavController,即实例化


    constructor(public navCtrl: NavController) {}
3. 引入页面跳转
	

	import { AlertsPage } from '../alerts/alerts';
	this.navCtrl.push(AlertsPage);  

## ionic NavController 路由跳转(传参)

*  需要引入 NavController 模块

	同上
*  申明 NavController (实例化)

   同上
* 引入页面跳转传参

```
this.navCtrl.push(ArticlePage , {   id: "123",   name: "Carl"});  
```

*  接收页面传参

	引入 NavParmas 模块

	import { NavParams } from 'ionic-angular';

	获取传值

    ```
    constructor(private navParams: NavParams) {
       let id = this.navParams.get('id');       let name = this.navParams.get('name');    }
    ```
  
   ##  ionic 通过属性路由跳转(传参)  
*    引入页面定义数据

```

import { LoginPage } from '../alerts/alerts';
constructor(){
  this.pushPage = LoginPage;
  this.params = { id: 42 };
}
```
* 属性绑定跳转的页面

```
<button ion-button [navPush]="pushPage"></button><button ion-button [navPush]="pushPage" [navParams]="params">Go</button>         
```
* 获取传过来的参数

```

constructor(private navParams: NavParams) { 
   let id = this.navParams.get('id');   let name = this.navParams.get('name');}

```

