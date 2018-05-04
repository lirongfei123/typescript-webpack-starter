var user: User = {
	name: 'lirongfei',
	age: 1
};
var dingding: Ali.Aliyun = {
	leader: 'me'
};
setInterval(function () {
	user.age = +user.age + 1;
	console.log(user.age);
}, 1000);