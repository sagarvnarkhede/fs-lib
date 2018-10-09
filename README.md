# fs-lib
#git config --local credential.helper
#https://www.npmjs.com/package/fsutil-lib

#How to use it.

var fsutil = require('fsutil-lib');
var result = fsutil.sortObjectByKey({a:1,z:2,c:3},'ASC');
console.log('result',result);