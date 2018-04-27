import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//引入新闻详情
import { NewsinfoPage } from '../newsinfo/newsinfo';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public list=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

    for(var i=0;i<10;i++){

      this.list.push('这是第'+i+'条数据');
    }
  }
  goInfo(){

    this.navCtrl.push(NewsinfoPage);   /*跳转到下一个页面*/

  }

}
