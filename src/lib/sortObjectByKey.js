
var _ = require('lodash');

function SortObjectByKey(obj,order){
    var keyArray = [], sortedObj = {};
    if(_.isEmpty(obj) && typeof obj !== Object){
        throw new Error('Invalid Argument : Require Object')
    }
    //get Keys From Object and sort It
    keyArray = _.keys(obj);
    if(order === 'desc'){
        keyArray  =_.sortBy(keyArray).reverse();
    }else{
        keyArray  =_.sortBy(keyArray);
    }

    //Create object form Sorted Array.
    keyArray.forEach(element => {
        sortedObj[element] = obj[element];
    });
    return sortedObj;
}

module.exports = SortObjectByKey;