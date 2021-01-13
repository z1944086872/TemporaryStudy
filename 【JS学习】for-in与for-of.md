# 【JS学习】for-in与for-of

**前言：**本博客系列为学习后盾人js教程过程中的记录与产出，如果对你有帮助，欢迎关注，点赞，分享。不足之处也欢迎指正，作者会积极思考与改正。



#### 总述：

| 名称   | 遍历 | 适用                                               |
| ------ | ---- | -------------------------------------------------- |
| for-in | 索引 | 主要建议白能力对象，不介意遍历数组                 |
| for-of | 值   | 可用于遍历数组，字符串，映射，集合等，无法遍历对象 |



#### 使用效果：

for-in遍历中得到的是每一项的索引；for-of得到的是每一项的值

```
//案列一:操作数组
let arr=['a','b','c','d'];
            //for-in遍历数组
            for(let index in arr){
                console.log(index);//遍历下标0,1,2,3
                console.log(arr[index]);//遍历数组'a','b','c','d'
            }
            //for-of遍历数组
            for(let value of arr){
                console.log(value);//遍历数组'a','b','c','d'
            }
            
            let obj={
                key1:"a",
                key2:"b"

            }
            //for-in遍历数组
            for(let index in obj){
                console.log(index);//遍历下标0,1,2,3
                console.log(obj[index]);//遍历数组'a','b','c','d'
            }
            //for-of遍历数组
            for(let value of obj){
                console.log(value);//报错obj is not iterable
            }
//案例二:操作对象for-in可以  for-of不行，本质是迭代器
let obj={
                key1:"a",
                key2:"b"

            }
            //for-in遍历数组
            for(let index in obj){
                console.log(index);//遍历下标0,1,2,3
                console.log(obj[index]);//遍历数组'a','b','c','d'
            }
            //for-of遍历数组
            for(let value of obj){
                console.log(value);//报错obj is not iterable
            }
 
//for-of还可以遍历DOM元素

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <main>
            <ul>
                <li></li>
                <li> </li>
            </ul>

        </main>
        <script>
            let lis=document.querySelectorAll("li");//找到都没中的所有li队形打包成数组
            for(let li of lis){//遍历所有li对象
                li.innerHTML="a";//给li对象加如内容a
            } 
           
        </script>
    </body>
</html>

```







**尾记**：

有任何问题，欢迎私聊哟~~~

也可关注公众号“诗与凉风”联系作者哦~~

<img src="https://gitee.com/light19440868762/Images/raw/master/typoraimages /微信图片_20200706212958.jpg" alt="微信图片_20200706212958" style="zoom:33%;" />