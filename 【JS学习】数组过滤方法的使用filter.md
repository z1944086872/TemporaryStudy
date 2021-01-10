# 【JS学习】数组过滤方法的使用filter

**前言：**本博客系列为学习后盾人js教程过程中的记录与产出，如果对你有帮助，欢迎关注，点赞，分享。不足之处也欢迎指正，作者会积极思考与改正。

#### 使用效果：

可以返回参数函数为真的值

```
 //情景：实现从stu数组里面提取js成绩大于60的项
 
 let stu=[
                {name:"张三",js:90},
                {name:"李四",js:50},
                {name:"王五",js:60},
        ];//定义数组
        let newarr=stu.filter(function(item,index,arr0){//调用filter方法，传入函数，若函数返回值为真，则返回该项
            // console.log(index);
            return item.js>60;//当每项元素的元素的js成绩大于60时返回真
        });
        console.table(newarr);
```

![image-20210110122942410](https://gitee.com/light19440868762/Images/raw/master/typoraimages /image-20210110122942410.png)

#### 参数说明：

参数名称不重要，重要的是第几个参数

| 参数          | 作用                                               |
| ------------- | -------------------------------------------------- |
| function      | 执行方法，函数返回真的项会被收集                   |
| 第一参数item  | 指被调用函数stu的遍历中的当前项{name:"张三",js:90} |
| 第二参数index | 指被调用函数stu的遍历中的当前项的索引值0,1,2       |
| 第三参数arr   | 指被调用函数stu                                    |



#### 方法原理解析：

```
 //filter的实现原理
        let stu=[
                {name:"张三",js:90},
                {name:"李四",js:50},
                {name:"王五",js:60},
        ];

        function filter1(arr,callback){//arr为数组，callback为函数
            let newArr=[];
            for(const value of arr){//遍历数组
                if(callback(value)===true){//将每个值放入回调函数，返回真执行
                    newArr.push(value);//将值加入数组
                }
            }
            return newArr;//返回结果
        }
        console.log(filter1(stu,function(value){
            return value.js>60;
        }));
```

![image-20210110123245284](upload\image-20210110123245284.png)

**尾记**：

有任何问题，欢迎私聊哟~~~

也可关注公众号“诗与凉风”联系作者哦~~

<img src="https://gitee.com/light19440868762/Images/raw/master/typoraimages /微信图片_20200706212958.jpg" alt="微信图片_20200706212958" style="zoom:33%;" />