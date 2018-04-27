# JS前置知识（Day01）

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

# **==Day2==**
# 1.选择语句

## 1.1.if..else

```javascript
//语法
if(condition) {
	statement1 
} else if (condition) { 
	statement2 
} else {
	statement3
}
```

思考：

```
1. 是否年满18岁
2. 素质教育（把分数变成ABCDE）90-100
3. 判断星期几
```

## 1.2.switch..case

```javascript
//语法
switch (expression) {
    case value: 
        statement
        break; // break 关键字会导致代码执行流跳出 switch 语句

    case value: 
        statement
        break;
    default: 
        statement
}
```



思考：

```javascript
var a = "10";
    switch (a) {
        case 10:
            console.log("10");
        case 20:
            console.log("20");
        case 30:
            console.log("30");
        default :
            console.log("haha");
    }
```



思考2：

```
今天星期几
```



## 1.3.三元运算符

```
表达式1 ? 表达式2 : 表达式3
var sex = sex == 1 ? '男':'女';
```

思考：

```
从两个数中找最大值
```



# 2.循环语句

> 在JavaScript中，循环语句有三种，while、do while和for循环。

## 2.1. while循环

基本语法：

```javascript
//当满足循环条件时，执行循环体里的代码
//每执行完一次循环体的代码以后，再判断一下循环条件
//如果循环不成立时，结束循环
while(循环条件){
  //循环体
}
```

示例代码：

```javascript
//计算1~100所有整数之和
var i = 0;   //初始化变量，用来表示循环了多少次
var sum = 0;  //初始化变量，用来记录和

//while语句的判断条件是i<=100,只要满足这个条件，就会一直执行循环体
while(i <= 100) {
  sum +=i;  //循环体每次进来以后，都会在sum上进行叠加
  i ++;    //每次加完以后，让计数器自增
}
```

## 2.2. do...while循环

> do...while循环和while循环语法类似，不同点在于，**do...while循环里，循环体至少会被执行一次**。

语法格式:

```javascript
do{
  //循环体
}while(判断条件);
```

思考：

```
使用do...while完成循环输入用户名密码案例。
```



## 2.3.for循环

> for循环是最常用的语句之一，它可以很方便的让代码循环规定的次数。

语法格式：

```javascript
for(初始化语句;条件判断语句;循环体执行完以后的语句){
  //循环体
}
```

示例代码：

```javascript
var sum = 0;
for(var i =0; i <= 100; i ++){
  sum += i;
}
```

思虑：

```
1.求1~100以内所有数的乘积
2.求1~100以内3的倍数之和。
3.求1~100以内不能被7整除的数之和。
4.求1~100以内所有偶数之和。
5.求1~100以内所有的偶数和所有的奇数之和。
6.打印正方形
7.打印三角形
8.打印九九乘法表。
9.本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息加作为新的本金。计算5年后，获得的本金是多少
10.斐波那契数列指的是这样的一个数列：0、1、1、2、3、5、8、13、21... ... 即第n个数是前面两个数之和。求，当n=12时，对应的值。
```



## 2.4.break和countinue

> break:立即跳出整个循环，即结束循环。
>
> continue:结束当前循环，继续开始下一轮循环。

思考：

```javascript
for(var i = 0;i <= 10; i++) {
  if(i == 5) {
    continue;
  }
  if(i == 8) {
    break;
  }
  console.log(i);
}
```

练习:

```
1.求1~100之间不能被7整除的数之和
2.求200~300之间，所有奇数之和
3.求200~300之间，第一个能被7整除的数。
```



## 2.5.断点调试

> 断点调试是指在代码中添加断点，当程序运行时到这一断点时就会暂停，可以让开发人员执行后续的操作（例如，查看变量值，单步运行查看代码流程等），可以很方便的让开发人员对代码进行调试。



调试步骤：

```HTML
运行JS代码-->F12打开控制台-->Sources-->找到想要暂停的JS代码-->点击行号添加断点
```

调试中的相关技巧：

```
Watch:监视。通过Watch可以查看变量的值，非常实用。
F10:单步运程，程序执行到下一行代码。
F8:直接运行到下一个断点。如果程序中没有其它断点，程序就直接运行结束
```

*tips：* ***不要随便监视表达式，如果监视了表达式，表达式会被执行***

# 3.数组

> 所谓数组，就是将多个元素（通常是同一类型的数据）按照一定的顺序放到一个集合中，这个集合我们就称它为数组。

练习：

```
为什么要使用数组？
1.一个变量同时只能用来存储一个值，当我们需要存储多个值，如全班每个人的成绩时，就必须要用到数组了。
2.使用数组把同一类型的数据放到一个集合里，便于管理，同时操作起来也比较方便。
```

## 3.1.创建数组

> 数组是一个有长度且按照一定顺序排列的列表。在JavaScript里，数组的长度可以动态调整。

通过构造函数创建数组：

```javascript
var arr1 = new Array();  //创建了一个空的数组，这个数组里没有数据
var arr2 = new Array(10);  //创建了一个空的数组，但是指定了这个数组的长度是10
var arr3 = new Array(10,13,14);  //创建了一个数组，并且在这个数组里放入了三个数字10,13,14
```

通过字面量来直接创建数组

```javascript
var arr1 = [];   //创建了一个空的数组
var arr2 = [12];  //创建了一个数组，并在这个数组里放入了一个数字12
var arr3 = ["ab","cd","ef"];  //创建了一个数组，并在这个数组里放入了三个字符串，注意使用逗号分隔
```

## 3.2.数组的长度与下标

数组的长度：和字符串一样，数组也有一个length属性，指数组中存储的数据的个数。

```javascript
var arr = ["123","Hello",345,true];
arr.length;    //数组的长度是4
```

数组的下标：数组是有序的，数组里的每一个元素都有对应的下标，我们可以通过下标很方便的拿到数组里的数据。注意：**数组里的下标是从0开始的。**

```	javascript
var arr = ["hello",1234,true,4567,"world"];
arr[3];   //取出的结果是4567
arr[10];   //下标超出了数组的长度，返回值是undefined
```

## 3.3.数组的取值与赋值

数组的取值：可以通过数组的下标，很方便的取出数组里对应位置上的值。

```javascript
var arr = [12,34,23,78,3,1,9];
arr[3];   //将数组里的第3个元素78取出
```

数组的改值：通过数组的下标，也可以很方便的修改数组里对应位置上的值。

```javascript
var arr = [34,23,5,8,120];
arr[2] = "Hello";  //将数组里第2个元素数字5改成了字符串"Hello"
arr[8] = "World";  //在数组的第8个位置上插入了一个字符串"World"
```

练习：

```
1.将1~100以内所有的数都放到数组里
2.将1~100以内所有的奇数放到数组里。
3.将1~100以内能被3整除的数放到数组里。
```

## 3.4.数组的遍历

> 遍历：将数组里的每一个元素都访问一次，就叫遍历一次数组。

数组遍历的基本语法:

```javascript
for(var i = 0; i < arr.length; i ++) {
  //可以操作数组里的每一个元素
}
```

练习1：

```
var arr = [234,12,86,59,30,28,49,71];
1.求数组中所有数据之和以及平均数。
2.求数组里的最大数。
3.求数组里最大值和最小值所在的位置
4.求数组里的最大最小值以及它们所在的位置。
```

练习2：

```
var arr = ["abc","def","Hello","Hi","World"];
1.将字符串数组用|或其它符号分割
2.有一个字符串数组，求字符串数组中每项的长度，并把长度存入到一个新的数组里。
3.将数组中值为0的项去掉，将不为0的值存入一个新的数组
4.让一个数组倒序保存到另一个数组里
```

## 3.5.冒泡排序

使用冒泡排序将一个数组里的数据升序或降序进行排列。

# **==Day3==**

# 1.函数

> 学习目标：掌握函数的基本用法，会使用函数解决一些问题。

## 1.1.函数的基础知识

### 1.1.1.为什么要使用函数

> 在写代码的时候，有一些常用的代码需要书写多次，如果直接复制粘贴的话，会造成大量的冗余代码，为了提高代码的重用率，提高编码效率，我们需要使用函数。函数可以用来封装一段重复的代码，只需要声明一次，就可以被多次调用。

冗余代码缺点：

1.代码重复，可阅读性差。

2.不易维护。一旦逻辑发生改变，所有的地方也都要修改。

### 1.1.2.函数的声明与调用

函数的声明：声明函数需要用到**function**关键字。

```javascript
function 函数名(){
  //函数体
}
```

特点：

```
1.函数在声明时不会执行，只有被调用时才会被执行。
2.函数一般用来做一件事，在对函数进行命名时一定要注意，做到顾名思义。
```

函数的调用：

```
函数名();
```

示例代码：

```javascript
//声明一个函数
function sayHi(){
  alert("吃了没");
}
//调用函数
sayHi();
```

练习:

```
1.封装一个打招呼的函数
2.封装一个函数，计算两个数的和
3.封装一个函数，计算1~100之间所有数的和
```

### 1.1.3.函数的参数

> 1.形式参数：在定义函数名和函数体的时候使用的参数，目的是用来接收调用该函数时传入的值。这个参数是一个不存在的变量，仅仅只是为了占用位置，所以我们可以称它为形式参数，简称形参。
>
> 2.实际参数：在调用有参函数时，函数名后面括号中的参数被称为实际参数，实参可以是常量、变量或者表达式。

语法：

```javascript
//有参函数在声明时，需要在函数名后的括号里写上形参
function 函数名(形参1,形参2,形参3...){
  //函数体
}
//调用有参函数,在函数名后面的括号里直接传入实际参数
函数名(实参1,实参2,实参3...);
```

练习：

```
1.计算1~n的数字之和
2.计算两个数的和
3.计算m~n之间数字之和
```

### 1.1.4.函数的返回值

> 很多情况下，调用者在函数执行完成以后，需要拿到函数执行的结果（比如，拿到两个数的和，拿到两个数的较大数等），这个返回的结果就叫做返回值。

返回值语法：使用return关键字标识函数的返回值。

```javascript
function 函数名(形参1,形参2,形参3...) {
  //函数体
 return 返回值;   //return关键字用来标识函数的返回值
}
var result = 函数名(形参1,形参2,形参3...);  //调用者定义一个变量，用来保存函数的返回值。
```

练习:

```
1.计算1~n之间所有数的和，并返回结果。
2.计算两个数的和，并返回结果
3.计算m~n之间所有数的和，并返回结果。
```

### 1.1.5.函数三要素

函数的三要素指的是：函数名、参数以及返回值。

文档注释：文档注释/ ** */通常用在函数的声明中，用来解释这个函数的作用。（包括函数名，参数以及返回值的作用）

<font color="red">声明函数时，使用文档注释对函数进行说明，是一种良好的开发习惯</font>

```javascript
 /**
   * 求圆的面积
   * @param r {number} 圆的半径
   * @returns {number} 圆的面积
   */
function getArea(r){
  return Math.PI*r*r;
}
getArea(3);
```

练习：

```
1.根据半径计算圆的面积
2.根据半径计算圆的周长
3.求两个数中的较大数。
4.求一个数组中的最大数。
5.求一个数组中的最小数。
6.翻转一个数组，返回一个新的数组。
7.给一个数组进行倒序排序。
```

## 1.2.函数的高级知识

### 1.2.1.函数调用

> 在函数内部是可以调用其它函数的

```javascript
function fn1(){
  console.log("fn1开始");
  fn2();    //在函数fn1里调用了fn2函数
  console.log("fn1结束");
}
function fn2(){
  console.log("fn2的代码");
  console.log("fn2的代码");
  console.log("fn2的代码");
}
fn1();
```

断点调试：

```
1.F8:跳转到下一个断点
2.F10:单步运行（不会跳入到函数里）
3.F11:单步调试（跳入到函数里）
4.Shift+F11:跳出函数调用
```

练习：

```
1.求阶乘
2.求阶乘的和
3.求任意三个数的最大值。
```

### 1.2.2.函数参数与返回值详解

函数的参数详解：

1.在JavaScript中，没有函数重载，只有覆盖。如果定义了两个同名函数，后面的函数会覆盖掉前面的函数。

2.在JavaScript中，实参的个数可以和形参的个数不一致。

* 如果实参的个数大于形参的个数，多余的实参会被舍弃。
* 如果实参的个数小于形参的个数，不足的实参使用undefined替代。

函数返回值详解：

```
1.return 语句作为函数的返回，它后面的语句不会执行。
2.函数也可以没有return语句。如果一个函数没有明确的返回值，那么这个函数的返回值是undefined.
3.函数也可以直接return，而不给返回值，相当于return undefined.作用是用来结束函数的调用。
```

练习:

```
1.比较两个数据大小，返回更大的那个数。
2.求数组中的最大值和最大值所在的位置，并且返回。
```

### 1.2.3.函数的作用域

全局变量：在最外层声明的变量就是全局变量，全局变量在任何地方都能够被访问。

局部变量：在函数中声明的变量就是局部变量，局部变量只能在当前函数内能够被访问。

隐式全局变量：没有使用var声明的变量也是全局变量。

作用域：变量可以发挥作用的区域。

全局作用域：在script标签内，函数外定义的作用域就是全局作用域。在全局作用域中定义的变量是全局变量。

函数作用域：在函数中的区域叫做函数区域，在函数作用域中定义的变量就是局部变量，只能在当前函数中访问。

<font color="red">在函数中，只有全局作用域和函数作用域。在if、while、for等语句中定义的变量都是全局变量。 </font>

### 1.2.4.预解析

> JS解析器在执行JS代码的时候，分为两个过程：预解析过程和代码执行过程。

预解析过程：

1.把变量的声明提升到当前作用域的最前面，只会提升声明，不会提升赋值。

2.把函数的声明提升到当前作用域的最前面，只会提升声明，不会提升调用。

3.先提升var,再提升function

思考：

```
console.log(a);
function a(){
  console.log("aaaaa");
}
var a = 1;
console.log(a);
```

面试题：

```javascript
var num = 10;
fn1();
function fn1(){
  console.log(num);
  var num = 20;
}

var a = 18;
fn2();
function fn2(){
  var b = 9;
  console.log(a);
  console.log(b);
}

fn3();
console.log(c);
console.log(b);
console.log(a);
function fn3(){
  a = b = c = 9;
  console.log(a);
  console.log(b);
  console.log(c);
}
```

### 1.2.5.声明函数的两种方式

函数声明（命名函数）

```javaScript
function 函数名(){
  //函数体
}
```

函数表达式(匿名函数)

```javaScript
var 函数名 = function(){
  //函数体
}
```

这两种函数的区别：

1.命名函数可以在声明之前调用，因为预解析时，会先把函数的声明给解析出来。

2.<font color="red">匿名函数的调用必须要放在声明之后</font>，因为预解析时，只会声明变量，不会给变量赋值！（DOM注册事件）

### 1.2.6.匿名函数

> 匿名函数：没有名字的函数

匿名函数的使用:

```javaScript
1.将匿名函数赋值给一个变量，通过变量名来调用函数。
var test = function(){   //将匿名函数赋值给一个变量
  console.log("Hello");
}
test();  //通过变量名来调用函数
2.匿名自调用函数。
(function(){
  console.log("Hi");
})();
```

自执行函数的作用：防止全局变量污染。

# **==Day4==**

# 1.对象

> 学习目标：1.会创建一个对象2.会定义一个构造函数3.会操作一个对象

## 1.1.对象的基本概念

### 1.1.1.为什么要有对象？

> 在JavaScript中，对象跟数组、函数一样，都是一种复杂的数据类型，也叫引用数据类型。是一系列相关的属性的集合，可以很方便的对变量和函数进行管理。
>
> 面向对象编程（Object Oritented Programming，简称OOP）是非常重要的软件编程思想。

### 1.1.2.什么是对象

> 现在生活中：万物皆对象，对象是一个具体的事物，一个具体的事物就会有行为和特征。
>
> 编程语言：在内存上一段有意义的区域被称为对象，***它也可以具有相关特征（属性），执行具体的行为（方法）。***

思考：

```javascript
1. 女友对象
    //特征：名字、性别、身高、体重、血型、星座、生日
    //行为：吃饭、睡觉、拍电影、唱歌、发微博
2. 学生对象
    //特征：名字、性别、身高、体重、分数
    //行为：吃饭、睡觉、学习、敲代码
3. 英雄对象
    //特征：名字、性别、金钱、等级、技能
    //行为：移动、攻击、防御
```

 

## 1.2.创建对象

### 1.2.1.通过构造函数创建

```javascript
var hero = new Object();   //创建一个空的对象
hero.name = "奥特曼";
hero.skill = "打怪兽";
hero.attack = function(){
  console.log("奥特曼发出光波打败了小怪兽");
}
```

注意事项：

1.this一定要出现在方法中才有意义，不在方法中的this没有意义。

2.在方法中出现的this，指的是当前对象，即调用这个方法的对象

### 1.2.2.对象字面量

```javascript
var person = {
  name : "迪伽",
  age : 2000,
  sex : "男";
  fight : function(){
    console.log("打怪兽");
  }
};
```



## 1.3.批量创建对象

### 1.3.1.使用普通函数创建对象

优点：可以同时创建多个对象

缺点：创建出来的没有具体的类型，都是Object类型的对象。

### 1.3.2.查看一个对象的类型

```javascript
typeof 只能判断基本数据类型
instanceof  判断对象的数据类型
constructor.name 也可以获取到对象的具体类型
```

### 1.3.3.构造函数

> 构造函数，是一种特殊的函数，主要用来在创建对象时就给对象初始化，即为对象的成员变量赋值，总与关键字new一起使用在创建对象的语句中。

关键字new所做的操作:

```
1.new会创建一个新的空对象
2.new会让this指向这个对象
3.调用构造函数
4.new会返回这个创建好的对象
```

练习：

```
1.学生对象的构造函数
2.老师对象的构造函数
3.英雄对象的构造函数
```

## 1.4.操作对象的属性

### 1.4.1.点语法

```javascript
//获取对象属性
//对象.属性  获取对象的某个属性
//1.如果这个对象有这个属性，就返回所对应的属性值
//2.如果这个对象没有这个属性，则返回undefined
var name = teacher.name;   //获取到老师对象的姓名属性
teacher.name = "苍老师";   //将老师对象的姓名设置成为苍老师

//设置对象属性
//对象.属性 = 值
//1.如果对象有这个属性，修改这个属性的值
//2.如果对象没有这个属性，则给这个对象添加一个新属性
var name = teacher["name"]; //获取到老师对象的姓名属性
teacher["name"] = "苍老师";  //将老师对象的姓名设置成为苍老师
```

### 1.4.2.[]语法

也叫关联数组方式，说白了就是把对象当作数组来看待。

```
//获取对象属性值
//对象["下标"]  把对象的属性当成是数组里的元素

//设置对象属性
//对象["下标"] = 值
```

注意：<font color="red">如果使用一个变量来获取对象里的属性时，必须要使用[]语法。</font>

```javascript
function Student(name,age){
  this.name = name;
  this.age = age;
}
var stu = new Student("张三",18);
var tmp = "name";
var name = stu.tmp;   //undefined,在stu对象里找tmp属性
name = stu[tmp];     //张三，这里的tmp是一个变量，它指的是"name"字符串
```

### 1.4.3.遍历对象

> 使用for..in循环可以遍历一个对象里的数据

```javascript
var obj = {"name":"张三","age":18,"sex":"男"};
for(var x in obj){
  console.log(obj[x]);
}
```

## 1.5.基本数据类型与引用数据类型

> 基本数据类型：也叫简单数据类型，原始数据类型或者值类型。在存储时，变量存的就是值本身。
>
> 引用数据类型：也叫复杂数据类型。在存储时，变量中存储的仅仅是地址（引用）。

练习1：

```javascript
//1.
  var num1 = 10;
  var num2 = num1;
  num1 = 20;
  console.log(num1);
  console.log(num2);
  
//2.
  var num = 50;
  function fn1(num) {
    num = 60;
    console.log(num);
  }
  fn1(num);
  console.log(num);
 
//3.
  var num1 = 55;
  var num2 = 66;
  function fn2(num,num1) {
    num = 100;
    num1 = 100;
    num2 = 100;
    console.log(num);
    console.log(num1);
    console.log(num2);
  }
  fn2(num1,num2);
  console.log(num1);
  console.log(num2);
  console.log(num);
```

练习2:

```javascript
//1.
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  var p1 = new Person("zs", 18);
  var p2 = p1;
  p2.name = "ls";
  console.log(p1.name);
  console.log(p2.name);
 //2.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function f1(p) {
    p.name = "ls";
    console.log(p.name);
  }
  var p1 = new Person("zs", 18);
  console.log(p1.name);
  f1(p1);
  console.log(p1.name);
```

练习3:

```javascript
//1.
function f1(a, b) {
      a = a + 1;
      b = b + 1;
      console.log("a = " + a);
      console.log("b = " + b);
    }
    var x = 5;
    var y = 6;
    f1(x, y);
    console.log("x = " + x);
    console.log("y = " + y);
 //2.
 function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function f2(p) {
    p = new Person("ls", 50);
    p.name = "ww";
    console.log(p.name);
  }
  var p2 = new Person("zs", 18);
  f2(p2);
  console.log(p2.name);
  
//3.
  function f3(arr) {
    arr[0] = 100;
  }
  var array = [1, 2, 3];
  f3(array);
  console.log(array);
  
  //4.冒泡排序的函数中，是否可以不返回数组？
```


# **Day5**

# 内置对象


> JS内置对象就是指Javascript自带的一些对象，供开发者使用，这些对象提供了一些常用的的功能。
>
> 常见的内置对象有Math、String、Array、Date等

内置对象有很多，我们主要是记下这些内置对象的用法即可。但是同学们也不可能一下子记住这么多的方法，因此当同学们忘了某个方法该如何使用的时候，可以通过以下方式查看。

+ 跳转到定义`ctrl+左键`
+ [火狐开发者网站MDN](https://developer.mozilla.org/zh-CN/)
+ [W3School网站](http://www.w3school.com.cn/jsref/)
+ 离线文档
+ 笔记




## Math对象

> Math对象中封装很多与数学相关的属性和方法。

+ 属性PI

  `Math.PI`

+ 最大值/最小值

  ```
  Math.max();
  Math.min();
  ```

+ 取整

  ```javascript
  Math.ceil();//天花板，向上取整
  Math.floor();//地板，向下取整
  Math.round();//四舍五入，如果是.5，则取更大的那个数
  ```

+ 随机数

  ```javascript
  Math.random();//返回一个[0,1)之间的数，能取到0，取不到1
  ```

+ 绝对值

  ```javascript
  Math.abs();//求绝对值
  ```

+ 次幂和平方

  ```javascript
  Math.pow(num, power);//求num的power次方
  Math.sqrt(num);//对num开平方
  ```



## Date对象

> Date对象用来处理日期和时间



+ 创建一个日期对象

  ```javascript
  var date = new Date();//使用构造函数创建一个当前时间的对象
  var date = new Date("2017-03-22");//创建一个指定时间的日期对象
  var date = new Date("2017-03-22 00:52:34");//创建一个指定时间的日期对象
  ```

+ 日期格式化(了解)

  ```javascript
  date.toString();//默认的日期格式
  date.toLocalString();//本地风格的日期格式（兼容性）
  date.toDateString();
  date.toLocalDateString();
  date.toTimeString();
  date.toLocalTimeString();
  ```

+ 获取日期的指定部分

  ```javascript
  getMilliseconds();//获取毫秒值
  getSeconds();//获取秒
  getMinutes();//获取分钟
  getHours();//获取小时
  getDay();//获取星期，0-6    0：星期天
  getDate();//获取日，即当月的第几天
  getMonth();//返回月份，注意从0开始计算，这个地方坑爹，0-11
  getFullYear();//返回4位的年份  如 2016
  getYear();   //将返回的实际年份减去1900年。例如：2016年返回116

   //Coordinated Universal Time,协调世界时,又叫世界标准时间。可以理解为0度经线所在有时区。
    getUTCYear(); //返回标准时间对应的年份
    getUTCHour();  //返回标准时间对应的小时

  //思考：
  //封装一个函数，返回当前的时间，格式是：yyyy-MM-dd HH:mm:ss
  ```


+ 时间戳

  ```
   var date = +new Date();//1970年01月01日00时00分00秒起至现在的总毫秒数
    //思考
    //如何统计一段代码的执行时间？
  ```

## Array对象

> 数组对象在javascript中非常的常用

+ 数组判断

  ```javascript
  //语法：Array.isArray(obj)
  //作用：用来判断一个对象是否是一个数组
  var a = 100;
  var b = true;
  var c = [1,2,3,4,5,6];
  console.log(Array.isArray(a));   //false
  console.log(Array.isArray(b));   //false
  console.log(Array.isArray(c));   //true
  ```


+ 数组转换

  ```javascript
  //语法：array.join(separator)
  //作用：将数组的值拼接成字符串

  var arr = [1,2,3,4,5];
  arr.join();//不传参数，默认按【,】进行拼接
  arr.join("-");//按【-】进行拼接
  ```

+ 数组的增删操作

  ```javascript
  array.push();//从后面添加元素，返回新数组的length
  array.pop();//从数组的后面删除元素，返回删除的那个元素
  array.unshift();//从数组的前面的添加元素，返回新数组的长度
  array.shift();//从数组的最前面删除元素，返回删除的那个元素

  //练习1
  var arr = ["刘备"];
  //添加数据后变成：["赵云","马超","刘备","关羽","张飞"]
  //删除数据后变成：["关羽","张飞"]

  //练习2
  var arr = ["赵云","马超","刘备","关羽","张飞"];
  //把数组的最后一个元素变成数组的第0个元素
  //把数组的第0个元素变成数组的最后一个元素
  ```

+ 数组的翻转与排序

  ```javascript
  array.reverse();//翻转数组
  array.sort();//数组的排序，默认按照字母顺序排序

  //sort方法可以传递一个函数作为参数，这个参数用来控制数组如何进行排序
  arr.sort(function(a, b){
    //如果返回值>0,则交换位置
    return a - b;
  });
  ```

  ```javascript
  //练习：
  //将[3, 6, 1, 5, 10, 2,11]从小到大排列
  //将字符串数组按照字符长度从小到大排列
  //将学生数组按照年龄从小到大排列
  ```

+ 数组的拼接与截取

  ```javascript
   //concat：数组合并，不会影响原来的数组，会返回一个新数组。
    var newArray = array.concat(array2);

    //slice:数组切分，复制数组的一部分到一个新数组，并返回这个数组
    //原来的数组不受影响，包含begin，不包含end
    var newArray = array.slice(begin, end);

    //splice:数组拼接，以新元素来替换旧元素，以此来修改数组的内容，常用语删除数组的某些项
    //start:开始位置  deleteCount:删除的个数  items:替换的内容
    array.splice(start, deleteCount, [items]);
  ```

  ```javascript
  //练习：
  var arr = [4, 6, 7, 8, 3, 46, 8];
  //从数组中截取一个新的数组[6,7,8,3],返回新的数组
  //删除[6,7,8,3]和替换成[1,1,1]
  ```

+ 数组查找元素

  ```javascript
   //indexOf方法用来查找数组中某个元素第一次出现的位置，如果找不到，返回-1
    array.indexOf(search, [fromIndex]);

    //astIndexOf()从后面开始查找数组中元素出现位置,如果找不到，返回-1
    array.lastIndexOf(search, [fromIndex]);
  ```

+ 操作数组里的元素

  ```javascript
  //filter方法返回一个由符合函数要求的元素组成的新数组
  var arr = [12,34,56,89,78,23,45,19];
  //调用数组的filter方法，添加过滤方法，符合规则的元素会被存放到新数组里
  //element:表示数组里的元素;index:表示索引值;array:表示调用filter方法的数组。
  var newArr = arr.filter(function(element,index,array){
    return element > 30;
  });
  console.log(arr);  //filter方法不会改变原数组里的数据[12,34,56,89,78,23,45,19];
  console.log(newArr);  //新数组里保存符合要求的元素[34, 56, 89, 78, 45]

  //map方法让数组中的每个元素都调用一次提供的函数，将调用的后的结果存放到一个新数组里并返回。
  newArr = arr.map(function(element,index,array){
    //在数组里的每一个元素的最后面都添加一个字符串"0"
    return element + "0";
  });
  console.log(newArr);  //["120", "340", "560", "890", "780", "230", "450", "190"]
  console.log(arr);    //map方法不会改变原数组里的数据 [12,34,56,89,78,23,45,19]

  //forEach() 方法对数组的每个元素执行一次提供的函数,且这个函数没有返回值
  var result = arr.forEach(function (element, index, array) {
    //数组里的每一个元素都会被打印
    console.log("第" + index + "个元素是" + element);
  });
  console.log(result);   //函数没有返回值

  ////some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试.
  result =  arr.some(function (element,index,array) {
    //数组里否有一些元素大于50.只要有一个元素大于，就返回true
    console.log(element);//12,34,56
    return element > 50;
  });
  console.log(result);  //true

  //every() 方法测试数组的所有元素是否都通过了指定函数的测试。
  result =  arr.every(function (element,index,array) {
    //数组里是否每一个元素都大于50.只有在所有的数都大于50时，才返回true
    console.log(element);  //12.第0个数字就已经小于50了，就没有再比较的意义了
    return element > 50;
  });
  console.log(result);   //false
  ```

+ 清空数组

  ```javascript
  //1．array.splice(0,array.leng);//删除数组中所有的元素
  //2．array.length = 0;//直接修改数组的长度
  //3．array = [];//将数组赋值为一个空数组，推荐   
  ```


+ 数组综合练习

  ```javascript
  var arr = ["c", "a", "z", "a", "x", "a", "a", "z", "c", "x", "a", "x"]
  //1. 找到数组中第一个a出现的位置
  //2. 找到数组中最后一个a出现的位置
  //3. 找到数组中每一个a出现的位置
  //4. 数组去重，返回一个新数组
  //5. 获取数组中每个元素出现的次数
  ```

## String对象

> 字符串可以看成是一个字符数组。因此字符串也有长度，也可以进行遍历。String对象很多方法的名字和和Array的一样。可以少记很多的单词。

+ 查找指定字符串

  ```javascript
  //indexOf:获取某个字符串第一次出现的位置，如果没有，返回-1
  //lastIndexOf:从后面开始查找第一次出现的位置。如果没有，返回-1
  ```

+ 去除空白

  ```javascript
  trim();//去除字符串两边的空格，内部空格不会去除
  ```

+ 大小写转换


  ```
  toUpperCase：全部转换成大写字母
  toLowerCase：全部转换成小写字母
  ```

+ 字符串拼接与截取

  ```javascript
  //字符串拼接
  //可以用concat，用法与数组一样，但是字符串拼串我们一般都用+

  //字符串截取的方法有很多，记得越多，越混乱，因此就记好用的就行
  //slice ：从start开始，end结束，并且取不到end。
  //subString ：从start开始，end结束，并且取不到end
  // substr ： ：从start开始，截取length个字符。(推荐)
  ```

+ 字符串切割

  ```javascript
  //split:将字符串分割成数组（很常用）
  //功能和数组的join正好相反。
  var str = "张三,李四,王五";
  var arr = str.split(",");
  ```

+ 字符串替换

  ```javascript
  replace(searchValue, replaceValue)
  //参数：searchValue:需要替换的值    replaceValue:用来替换的值
  ```

+ 练习

  ```javascript
  //1. 截取字符串"我爱中华人民共和国"，中的"中华"
  //2. "abcoefoxyozzopp"查找字符串中所有o出现的位置
  //3. 把字符串中所有的o替换成!
  //4. 把一个字符串中所有的空格全部去掉
  //5. 统计一个字符串中每个字符出现的次数
  ```



## 基本包装类型

> **简单数据类型是没有方法的**。为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String/Number/Boolean。

基本包装类型：把基本类型包装成复杂类型。

```javascript
var str = “abc”;
var result = str.indexOf(“a”);
//发生了三件事情
1. 把简单类型转换成复杂类型：var s = new String(str);
2. 调用包装类型的indexOf方法：var result = s.indexOf(“a”);
3. 销毁刚刚创建的复杂类型（过河拆桥、卸磨杀驴）
```
