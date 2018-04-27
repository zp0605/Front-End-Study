##上拉加载刷新	 [参考](http://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/)

* ionic 在上拉加载的页面中加入ion-infinite-scroll

```HTML
	   
  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="100px">
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
   
```


当上拉的时候会触发doInfinite方法；

ion-infinite-scroll 的属性:
   
threshold 距离底部的距离
enalbe 是否可用

position:button 显示的位置 可选 top

ion-infinite-scroll-content 的属性:


loadingSpinner 配置上拉加载更多的图标

loadingText 上拉加载显示的文字

* 对应页面的业务逻辑中写上拉更新的方法

```
  doInfinite(infiniteScroll){
     console.log(infiniteScroll);
     //请求数据....
      infiniteScroll.complete();
     // infiniteScroll.enable(false); //没有数据的时候隐藏 ion-infinate-scroll
  }
  
```


##下拉刷新  [参考](http://ionicframework.com/docs/api/components/refresher/Refresher/)


* ionic 在上拉加载的页面中加入

```
  <!--

  ion-refresher 的重要属性:
     closeDuration  关闭refresher需要多少毫秒。默认值是 280。
     enabled  是否启用
     pullMax 默认=pullMin+60 拖至刷新状态的最大距离将自动进入刷新状态。默认情况下，
           拉力最大将 pullmin + 60自动刷新
     pullMin 默认=60 用户必须拉下的最小距离直到刷新者进入刷新状态为止。默认值是 60。
     snapbackDuration 刷新者需要多少毫秒才能恢复到刷新状态。默认值是280。

   ion-refresher-content 的重要属性:
      pullingText下拉的图标
      refreshingSpinner 释放的时候的加载图标
      refreshingText 释放的时候的文字
      pullingText 下拉加载显示的文字

  -->

  <ion-refresher (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="arrow-dropdown" pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>

```

*  重要的业务方法：

```
 doInfinite(refresher)
{
  setTimeout(() => {
    refresher.complete(); //当数据请求完成调用
  }, 2000);
}
```


