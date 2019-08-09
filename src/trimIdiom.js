const fs = require("fs")
function writeJson(){
    //现将json文件读出来
    fs.readFile('./idiom.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var person = data.toString();//将二进制的数据转换为字符串
        person = JSON.parse(person);//将字符串转换为json对象
        for(let i=0;i<person.length;i++){
            delete person[i].derivation
            delete person[i].explanation
            delete person[i].abbreviation
            delete person[i].example
        }
        var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./out.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------修改成功-------------');
        })
    })
}
writeJson()
