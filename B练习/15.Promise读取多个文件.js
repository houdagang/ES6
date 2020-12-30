
//
const fs = require("fs");

const p1 = new Promise(function(resolve, reject) {
   fs.readFile("./01.let.html",(err,data)=>{
      resolve(data);
   });
});

p1.then(value => {
    return new Promise(function(resolve, reject) {
        fs.readFile("./06箭头函数.html",(err,data)=>{
            resolve([value,data]);
        });
    });
}).then(value => {
    return new Promise(function(resolve, reject) {
        fs.readFile("./09扩展运算符.html",(err,data)=>{
            resolve([value,data]);
        });
    });
}).then(value => {
    console.log(value.toString())
})
