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

