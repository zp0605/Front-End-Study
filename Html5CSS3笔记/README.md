#Html5
----
#### html5表单新增标签： [h5标签与表单源码](html5/day04/index01.html)
* mark标签：标记，突出显示文本
* meter:电池条，度量
* progress:进度条
* wbr:单词间换行，拆分换行
* ruby: 注释  rt: 注释标题
* datalist(与input一起用):可选列表  input list属性值 == datalist 的id值
* details: 折叠信息  与summary标签一起用
* figure:注释，标记，一般用于图片；figcaption：元素标题，显示位置和放置位置有关 
* time: 标记时间，告诉浏览器是一个时间

* form 新增自动匹配属性：
	* 电子邮件：\<input type="email" />
	* step: 每次加或者减得数值
	
 ```
 <input type="number" name="number" value="10" max="20" min="5" step="5" />
 ```
	* 网址：\<input type="url" name="url" /> 
	* 年月日: \<input type="date" name="date" />  
	* 年月: \<input type="month" name="month" />
	* 年周: \<input type="week" name="week" />
	* 时分: \<input type="time" name="time" />
* 颜色：\<input type="color" name="color" />
* 搜索：\<input type="search" />

#### 表单新增属性
* 焦点: \<input type="text" autofocus="" />
* placeholder: 占位文本，文本框为空时显示内容. 站位文本: \<input type="text" placeholder="请输入名字" />
* required:验证表单是否为空，为空不允许提交
* autocomplete:记住提示功能；\<input type="text" name="key_t" autocomplete="off"/>
* multiple: 文件多选

####html5新增标签：[视频与布局](html5/day04/index02.html)
---
* video
* audio
* header
* nav
* section
*  aside：侧边栏
* artical
* footer