# 【JS学习】String基础方法

**前言：**本博客系列为学习后盾人js教程过程中的记录与产出，如果对你有帮助，欢迎关注，点赞，分享。不足之处也欢迎指正，作者会积极思考与改正。

[TOC]

#### 定义：

两种方法，存在一点点区别。new方法定义出来的是对象，方法2是字符串，但使用上没多大区别，后台会自动将字符串转化为对象，因此也可以使用对象的方法。

```
			// 方法1
            let str=new String("abc");
            console.log(str.toString(),typeof str);//输出abc Object

            // 方法2
            let str2="abc";
            console.log(str2,typeof str2);//输出abc string
```



#### 字符串的连接：

```
// 连接字符串
            let a=200;
            // 方法1 加号相连
            let str1="abc"+"efg"+a;

            // 方法2模板自变量   所谓模板自变量既用符号  `内容${变量名}` 将内容包裹  符号位于键盘esc下方按键处
            let str2=`abcefg${a}`;

            console.log(str1,str2);//abcefg200 abcefg200
```



#### 标签模板的使用：

所谓标签模板，就是会将字符串分为字符串部分，变量部分，全部字符串的一个函数

```
let a="变量1";
            let b="变量2";
            tag1`abc${a}def${b}`

            function tag1(strings,...value){
                console.log(strings);
                console.log(value);
            }
```

![image-20210112201043537](https://gitee.com/light19440868762/Images/raw/master/typoraimages /image-20210112201043537.png)

#### 字符串的基本方法：

```
 			
            let str="abc";
            let str2="ABC";
            let str3=" abcd ";
           
            console.log(str.length);//长度获取 输出：3  注意：字符串中的空格也会算长度
            
            
            console.log(str.toUpperCase());// 转大写 ABC
            console.log(str2.toLowerCase());//转小写 abc
            console.log(str3.trim());//去前后空格 abcd
            
             // 获取单个字符
            console.log("abc".charAt(2));//c
            console.log("abc"[2]);//c
            
```



#### 截取字符串的三种方法

1. slice(开始位置，结束位置)  结束位置为负数则戴白从后往前算
2. substring(开始位置，结束位置)  负数自动变为0
3. substr（开始位置，位数）负数代表从后往前算

```
			let hd = 'abcdefg';
            console.log(hd.slice(3)); //defg  从第三个开始到最后
            console.log(hd.substr(3)); //defg  从第三个开始到最后
            console.log(hd.substring(3)); //defg 从第三个开始到最后

            console.log(hd.slice(3, 6)); //def  从第3-6个 不包含6
            console.log(hd.substring(3, 6)); //def 从第3-6个 不包含6
            console.log(hd.substring(3, 0)); //abc 从第0-3个 不包含3
            console.log(hd.substr(3, 6)); //defg 从第3个往后取6个

            console.log(hd.slice(3, -1)); //def 从第3个到（length-1）个  不包含（length-1）
            console.log(hd.slice(-2));//fg 从第（length-2）到最后
            console.log(hd.substring(3, -9)); //abc 负数转为0 从0到第3个 不包含第3个
            console.log(hd.substr(-3, 2)); //ef 从后面第三个开始取两个  从length-3开始取两个
```

#### 查找字符串

```
//原始方法 从前往后indexof(字符串，开始位置)与lastIndexof(字符串，结束位置) 返回下标
            console.log("123456".indexOf("1"));//0
            console.log('123456'.lastIndexOf('4', 5)); //3 从0-5中检索4，返回下标  找不到返回-1

            // includes（字符串，开始位置）方法 返回bool
            console.log('123456'.includes('4')); //true
            console.log('123456'.includes('4', 3)); //true  
            
            // 字符串检索
            const word=['php',"css"];
            const string1="是否存在php与css";
            let status1=word.some(word=>{
                console.log(word);
                return string1.includes(word);
            });
            if(status1){
                console.log("找到了");
            }
            
            
            
            // 是否以字符开始
            console.log("123456".startsWith("12"));//true
            console.log("123456".startsWith("12",2));//false
            // 是否以字符结束
            console.log("123456".endsWith("56"));//true
            console.log("123456".endsWith("56",5));//false
```



#### 替换字符串

```

```

#### 重复字符串

```

```



#### 字符串的类型转换

```

```

**尾记**：

有任何问题，欢迎私聊哟~~~

也可关注公众号“诗与凉风”联系作者哦~~

<img src="https://gitee.com/light19440868762/Images/raw/master/typoraimages /微信图片_20200706212958.jpg" alt="微信图片_20200706212958" style="zoom:33%;" />