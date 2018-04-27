##TypeScript
#####简介、特点
* 微软2012年出的
* 编译型语言
* 强类型语言（对js的改进）
* 真正面向对象:有接口、有泛型、有枚举、有访问修饰符

##### typescript 需要先编译(要准备环境)： 

  ```
    准备工作：
     1,npm  install -g typescript 
       可用的开发工具：atom-typescript
     2，写完源文件后（.ts结尾的文件）,编译：
        在终端执行：tsc xxx.ts  
       执行完后，会编译成一个js文件
      
     文件以.ts结尾
  ```
 
#####基本类型

  ```
    基本类型：number string boolean symbol void null undefined Enum Any
   
    //声明number类型 
    var a:number;
    a = 12;
    
    void:空，一般用来做返回值；用来声明变量的话，不允许赋值，没啥实际意义；
    null：只有一个值且为null,不能赋其他值；
    undefined：只有一个值且为undefined
    enum:
       有限的可能性
       enum GENDER{
          MALE,
          FEMALE
       }
       var sex:GENDER;  //sex只能只能有两个值           
    Any：变体变量，任何类型
       var a:any; //可以给a赋值任何类型 
           
  ```
  
#####类型推测（隐式类型声明）

```
   var a;//等价于 var a:any;
   a = 12;//根据初始化的值来推测类型
```
#####冲突检测

```
  编译器会自动排除掉无用的选项，如：
  enum WEEK{
     SUN,
     TUS,
     ...
  }
  var w = WEEK.SUN;
  switch(w){
     case:WEEK.SUN:
        
       break;
     case:WEEK.TUS://后面的都不会执行,编译的时候会提示
        
       break;
      ....
  }
  
```
#####联合类型

```
  var a：number|string;//可以为number或string
  a = 12;
  a ='abc';
  a = true;//编译会错误
  
```

#####数组（也有类型）

```
  //隐式声明为一个nubmer类型的数组，
  //等价于: var arr:number[] = [12,3,6];
  var arr=[12,3,6];
  arr[3] = 'abc';//编译报错
  
  //相当于：var arr:any[] = [12,'abc',false];
  var arr2=[12,'abc',false];
  
```

#####函数也有类型
* 参数也可以类型
      有类型
      签名检查（参数个数、类型）
* 返回值可以有类型

```
  function show(a,b){}
  等价于:
  function show(a:number,b:number){}
  
  //两参数，且返回number
  function sum(a:number,b:nubmer):number{
    return a+b;
  }
  
  //success有两个参数，且返回void
  function ajax(url:string,success:(res:string,code:number)=>void,error(code:number)=>void){
     
  }
  ajax('xxx',
    function(str: string,code:number){
    
    },
    function(code:number){
    
    }
   );
  
```

#####外部变量声明

```
   //有时候在一个文件里，可能引用另外一个文件的变量
   declare var 变量名；
```

#####复合类型

```
  var point:{x:number,y:number,z?:number}//参数z可选
  point={x:12,y:15};
  point={x:12,y:15,z:99};
  
```

#####可选参数

```
   //两参数+1可选参数，且返回number
  function sum(a:number,b:nubmer,,b?:nubmer):number{
    return a+b;
  }
  sum(12,3,3);
  
```

##类型与函数总结
* 基本类型
* 联合类型  可以选择的类型
* 类型推测
* 数组类型
* 函数签名 如:success:(a,b)=>void
* 复合类型（Object Type），如 var 
* 函数可选参数

##接口 interface
* 这里的接口跟java的不一样
* 接口：约定、限制

```
  interface Point{
     x:number,
     y:number,
     z?:number
  }
  interface Point2{
     x:number,
     y:number,
     z:number
  }
  var p:Point| Point2;//有点像多态
  p={x:12,y:5};//OK
  p={x:12,y:5,z:9};//OK  
  
```

##类 class
* 成员变量、方法
* 访问修饰符
	* public 公有  任何人可以访问
	* private 私有 只有内部可以访问
	* protected 受保护 子类可以访问


```
  class Person{
     name:string;//默认公有
     age:nubmer;
     costructor(name:string,age:number){
        this.name = name;
        this.age = age;
     }
     
     showMe(){
       console.log("我的名字"+this.name);
     }
  }
  
  var p = new Persion('bue',18);
  p.showMe();
  
```

##泛型、多态
* 别跟any搞混了，注意与any的区别
* 泛：宽泛

```
   class Calc<T>{
      a:T;
      b:T;
      
      constrouctor(a:T,b:T){
        this.a = a;
        this.b = b;
      }
      
      show(c:T){
         alert(this.a);
         alert(this.b);
         alert(c);
      }  
   }
   
   var obj1 = new Cacl();//用nubmer去替换T
   obj1.a = 12;
   obj1.b = 'abc';//OK
   
   var obj = new Cacl<number>();//用nubmer去替换T
   obj.a = 12;
   obj.b = 5;
   obj.b = 'abc';//编译要报错
   
  // Array可以存任何类型、也可以指定类型；其实就是用泛型实现的
  
```


#总结
1. 环境
2. 类型：变量、参数、返回值、函数签名、联合类型、复合类型、基本类型
3. 可选参数
4. class写法
5. interface 约定、规范 
6. 泛型



 










