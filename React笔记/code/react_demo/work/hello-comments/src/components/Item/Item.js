import React from 'react';
import PubSub from 'pubsub-js';
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  // 定义删除的方法
  delComment = () => {
    // 获取对应的下标
    console.log(this.props.index);

    // 将下标交给App。  这里是组件，confirm前面必须加上window
    if(window.confirm(` 你确认删除 ${this.props.comment.username} 吗？`)){//所有标签属性都在props中
      // this.props.del(this.props.index);//执行删除操作
      PubSub.publish('message', this.props.index);//通过订阅消息删除
    }
    /*
       组件有两种通信方式：
         1，props
         2，消息订阅机制
    */
  };
  render () {
    let {comment} = this.props;
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.delComment} href="javascript:;">删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span> 说: </span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    );
  }
}

export default Item;