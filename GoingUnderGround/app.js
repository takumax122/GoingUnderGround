var express = require('express');
var app = express();

//���[�g�ɃA�N�Z�X�����ƁA�uHello World�v�Ƃ����������ԋp����
app.get('/',function(req,res){
 res.send('Hello World');
});


//�T�[�o�N��
app.listen(3000,function(){
 console.log('Example app listening on port 3000');
});