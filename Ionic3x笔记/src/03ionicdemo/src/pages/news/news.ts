import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 新建一个页面：

 1.ionic g  page news
 2.app.module.ts 引入声明组件
 3.home页面引入这个组件，跳转
 this.navCtrl.push(NewsPage);
 *
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public msg='这是一个新闻的页面';

  public list=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

    for(var i=0;i<15;i++){

            this.list.push('这是第'+i+'条数据');
     }

  }

}
