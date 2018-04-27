import React from 'react';
import Item from '../Item/Item';
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {comments} = this.props;
    let display = comments.length? 'none':'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item, index) => {
              return <Item key={index} comment={item} index={index} del={this.props.del}/>
            })
          }
        </ul>
      </div>
    );
  }
}

/*
  第17行代码解析：
    return <Item key={index} comment={item} index={index} del={this.props.del}/>
    this.props.del:从App组件传过来的
    del={this.props.del}：把App组件中的del属性转给Item组件（因为在Item组件中需要执行删除操作）
    index={index}： 向Item组件传递index

  注意：标签传递的所有属性都在props中
*/
export default List;