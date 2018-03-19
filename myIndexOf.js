String.prototype.newIndexOf = function (searchValue, fromIndex){
    function mySearch(myString, mySubStr) {
    var len = myString.length;
    var mySubStrLen = mySubStr.length;
    for(var i = 0; i < len; i++) {
        var j = 0;
        for(j = 0; j < mySubStrLen; j++) {
            if(myString[i+j] != mySubStr[j]) {
                break;
            }
        }
        if(j == mySubStrLen) {
            return i;
        }
    }
    return -1;
}
    var string = this;
    var myResult = mySearch(string, searchValue);
    if (fromIndex){
        var myNewResult = mySearch(string, fromIndex);
        myFinalResult = myResult - myNewResult;
        return myFinalResult;
    }
    else {
        return myResult;
    }
}

// test

var frase = "Que dia bonito";
var test1 = frase.newIndexOf("b", "e");
var test2 = frase.newIndexOf("b");
var test3 = frase.newIndexOf("c");
