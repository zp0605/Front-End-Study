//根模块 告诉ionic如何组装应用

//引入 angular 以及ionic的系统模块
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//引入components模块

import { ComponentsModule } from '../components/components.module';


//引入根组件
import { MyApp } from './app.component';

//页面 自定义的组件
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { NewsPage } from '../pages/news/news';

//ionic打包成app以后配置启动画面 以及导航条的服务  （不用管）
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [   /*申明组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    NewsPage
  ],
  imports: [  /*引入的模块 依赖的模块*/
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],  /*启动的模块*/
  entryComponents: [   /*配置不会在模板中使用的组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage
  ],
  providers: [   /*配置服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
