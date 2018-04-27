# JS前置知识

## 什么是JS语言

> javascript是一种运行在***客户端*** 的***脚本语言*** 

客户端：即接受服务的一端，与服务端相对应，在前端开发中，通常客户端指的就是浏览器。

脚本语言：也叫解释型语言，特点是***执行一行，解释一行，如果发现报错，代码就停止执行*** 。

> javascript的三个组成部分：ECMAScript、BOM、DOM

ECMAScript：定义了javascript的语法规范。

BOM：一套操作浏览器功能的API。

DOM：一套操作页面元素的API。



## script标签

> 书写Javascript代码有两种方式，第一种是直接在script标签中书写，第二种是将代码写在js文件中，通过script进行引入。

直接在script中书写javascript代码：

```HTML
<script>
	alert("今天天气真好呀");
</script>
```

通过script标签引入一个JS文件，需要指定src属性

```HTML
<script src="test.js"></script>
```

<font color="red">tips：如果script标签指定了src属性，说明是想要引入一个js文件，这个时候不能继续在script标签中写JS代码，即便写了，也不会执行。</font>

```html
<script src = "test.js">
  alert("Hello World");   //这段代码不会执行
</script>
```

> script标签的书写位置，原则上来说，可以在页面中的任意位置书写script标签。

1. 写在head标签中，style标签之后。

2. 写在body结束标签的前面。

   ```html
   <body>
     <script>
     </script>
   </body>
   ```

3. 写在html结束标签的后面，即页面的最后面。

   ```html
   <html>
   </html>
   <script>
   </script>
   ```



## 输入输出语句

> 在实际开发，基本不能使用3、4、5,因为用户体验不好。

1. console.log 控制台输出日志
2. document.write 往页面中写入内容
3. alert 弹框警告
4. confirm 确认框
5. prompt 输入框



## 注释

> 不被程序执行的代码。用于程序员标记代码，在后期的修改，以及他人的学习时有所帮助，在JS中，分为单行注释、多行注释以及文档注释

```javascript
//这是单行注释，只能注释一行

/*
	这是多行注释，不能嵌套
*/


//文档注释在JS中通常用于对函数进行说明
/**
* 计算圆的面积
* @param r{number} 圆的半径
* @returns {number} 根据圆的半径计算出来的面积
*/
function getArea(r) {
  return Math.PI * r * r;
}
```

注释的作用：

	1. 模块划分，方便代码查找和维护
	2. 用于解释复杂代码的逻辑，方便维护和后期开发。

要求：写代码的时候必须要写注释，但是需要注意注释的合理性。

【永无bug.js】



# 变量

> 变量，可以变化的量，变量是在计算机中存储数据的一个标识符。可以把变量看成存储数据的容器。

变量与字面量：

字面量：10、20、“abc”、true这种从字面上就能看出来类型和值的量叫做字面量。

变量：可以变化的量。

## 变量的声明与赋值

```javascript
1.变量可以同时声明并赋值。
2.先声明后赋值
3.不声明，直接赋值
4.既不声明，也不赋值
5.同时声明多个变量
```

【测试1.html】



## 变量的命名规则与规范

```
命名规则（必须遵守）：
1.由字母、数字、下划线、$符号组成，开头不能是数字。
2.不能使用关键字和保留字
3.严格区分大小写

命名规范（建议遵守）：
1. 命名要有意义
2. 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。
```

【测试2.html】



## 变量练习

```
1. 交换两个变量的值（掌握）
2. 不使用临时变量，交换两个数值变量的值（了解）
```



tips:javascript是一种弱类型语言，不管声明什么类型的变量，都是用var，并且变量的类型是可以变化的。

```
var age = 90;
age = "张三";
```



# 数据类型

> 基本数据类型包括了：number、string、boolean、undefined、null



## 如何查看数据类型

使用typeof关键字查看数据类型

```
typeof name;
typeof(name);
```



## Number类型

### 进制

```
1. 十进制，我们平时使用的就是十进制，进行运算时，八进制和十六进制的值最终都会转换成十进制。
2. 八进制，0开头的数值，数值序列：0-7
3. 十六进制，0x开头的数值，数值序列：0-9A-F

进制了解即可，基本都是使用十进制，稍微了解一下进制之间的转换。
```

### 浮点数

科学计数法：

```
var num = 5e+3;
var num1 = 5e-2;
//如何表示0.003和20000？
```



浮点数的精度问题：

```
0.1 + 0.2 = ?
0.07 * 100 = ?

```

***浮点数在运算的时候会出现精度丢失的问题，因此在做比较运算的时候，尽量不要用小数进行比较。***



### 数值范围

> javascript不能表示世界上所有的数，因此在javascript中，数值大小是有一定限制的。

```
Number.MIN_VALUE  :5e-324
Number.MAX_VALUE  :1.7976931348623157e+308
Infinity   :正无穷
-Infinity  ：负无穷
```



### 数值判断

```
1. NaN:表示一个非数值，当无法运算或者运算错误的时候，会得到一个NaN，NaN是number类型，表示一个非数值。
2. NaN不等于NaN
3. isNaN用来判断是否是一个数字，当返回true的时候，表示不是一个数字，返回false表示是一个数字。
```

【案例：计算用户的工资.html】

## String类型

### 字面量

字符串的字面量：“abc”  、 ‘abc’  字符串可以是双引号，也可以是单引号引起来。

```
思考：如何打印以下字符串。
我是一个"正直"的人 
我很喜欢"传'智'播客"
```



### 字符串长度

length属性用来获取字符串的长度

```
var str = "abckjdlkfjd";
str.length;//字符串的长度
```



### 字符串拼接

拼接字符串使用+号

```
//思考：
console.log(11 + 11);
console.log("hello" + " world");
console.log("100" + "100");
console.log("11" + 11);
```

+ 两边只要有一个是字符串，那么+就是字符串拼接功能
+ 两边如果都是数字，那么就是算术功能。



## boolean类型

boolean类型只有两个字面量，true和false，区分大小写。

所有类型的值都可以转化成true或者false

```
NaN、""、undefined、null、false、0  这6个值可以转换成false，其余的都是true。
```



## undefined类型与null类型

```
undefined表示一个声明了没有赋值的变量
null表示一个空的对象。

undefined派生自null。
undefined == null  -->true
undefined === null -->false
```



# 类型转换

如何使用谷歌浏览器，快速的查看数据类型？

字符串的颜色是黑色的，数值类型是蓝色的，布尔类型也是蓝色的，undefined和null是灰色的，这个在调试过程中时非常有用的。

## 转换成字符串类型

1. toString()
2. String()
3. 在数据的最后面加上空字符串(value+"")

## 转换成数值类型

1. Number()
2. parseInt
3. parseFloat
4. +num, -0等运算

## 转换成布尔类型

1. Boolean
2. !!

# 运算符

## 赋值运算符

```javascript
var a = 23;
var b = a;
a += 10;
```

## 算数运算符

```javascript
var a = 1;  console.log(a + 1);
var a = 1;  console.log(a - 1);
var a = 1;  console.log(a * 1);
var a = 1;  console.log(a / 1);
var a = 10;  console.log(a % 2);
```

## 一元运算符

```javascript
思考：
var a = 1; var b = ++a + ++a; console.log(b);    
var a = 1; var b = a++ + ++a; console.log(b);    
var a = 1; var b = a++ + a++; console.log(b);    
var a = 1; var b = ++a + a++; console.log(b);    
```

## 逻辑运算符

```javascript
&&:只要有一个值为假，结果就是假。找假值
||:只要有一个值为真，结果就是真。找真值
!:取反

思考：
true && true;
false || false;
null && undefined
null || undefined
“abc” && undefined
“abc” || undefined
null || false || 0 || 1 || null
“abc” && “bcd” && “def”
```



## 运算符的优先级

```
1. ()  优先级最高
2. 一元运算符  ++   --   !
3. 算数运算符  先*  /  %   后 +   -
4. 关系运算符  >   >=   <   <=
5. 相等运算符   ==   !=    ===    !==
6. 逻辑运算符 先&&   后||  
```



思考：

```javascript
//练习1
var a = true || false && true;
var b = false || true && false;
var c = true || false && false;

//练习2
var a  = true && false || false && true;
var b = true && true || false && false;

//练习3
((4 >= 6) || ("人" != "狗")) && !(((12 * 2) == 144) && true) 
//练习4
var num = 10;
if(5 == num / 2 && (2 + 2 * num).toString() === "22") {
   console.log(true);
}
```
