function totalCount(str){
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            count++;
        }
    }
    return count;
}

console.log(totalCount('aab'));
console.log("hello");
