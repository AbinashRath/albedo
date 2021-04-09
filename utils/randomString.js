exports.randomString = function randomString(){
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+?";
    var randomStr="";
    for(var i=0;i<8;i++)
	{
      var random = Math.floor((Math.random() * 76));
      randomStr = randomStr.concat(str[random]);
    }
    
    return randomStr;
  }