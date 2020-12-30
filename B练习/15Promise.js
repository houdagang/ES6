
// 1.引入fs
const fs = require('fs');

//2. 调用方法读取文件
fs.readFile('./01.let.html',(err,data)=> {
    //失败
    if(err) {
        throw err;
    } else {
        console.log(data.toString());
    }
});

//3.使用Promise 封装
const p = new Promise(function(resolve,reject) {
    fs.readFile('./01.let.html',(err,data)=> {
        //失败
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

p.then(function(value){
    console.log(value.toString());
},function(reason) {
    console.log("读取失败");
});
