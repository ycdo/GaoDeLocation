var exec = require('cordova/exec');

var GaoDe={
	getCurrentPosition:function(successFn,errorFn){
		exec(successFn,errorFn,'GaoDeLocation','getCurrentPosition',[]);
	}
};
module.exports=GaoDe;

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "GaoDeLocation", "coolMethod", [arg0]);
// };
