var express = require('express');
var app = express();

//ルートにアクセスされると、「Hello World」という文字列を返却する
app.get('/',function(req,res){
 res.send('Hello World');
});


//サーバ起動
app.listen(3000,function(){
 console.log('Example app listening on port 3000');
});