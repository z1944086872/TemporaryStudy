// // 1引入模块
// var http = require("http");
// // 2创建服务并监听端口
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World');
// }).listen(8888);

// console.log("终端提示：服务已启动");


//引入包
var events = require("events");
// 创建对象
var eventEmitter =new  events.EventEmitter();
function test() {
    console.log('test');
}
eventEmitter.on('test', test);
console.log('监听');
eventEmitter.emit('test');//触发
