function greatestDiv(a,b) {
  var divisor=2,greatestDivisor=1;
  if(a<2||b<2){
    return 1;
  }
  while(a>=divisor&&b>=divisor){
    if(a%divisor==0&&b%divisor==0){
      greatestDivisor=divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestDiv(40,50));

function fibonacci(n){
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
    fibo[i] = fibo[i-1]+fibo[i-2];
  }

  return fibo[n];
}

function removeDup(arr) {
  var exist={},outArr=[],ele;
  for(var i=0;i<arr.length;i++){
    ele=arr[i];
    if(!exist[ele]){
      outArr.push(ele);
      exist[ele]=true;
    }
  }
  return outArr;
}
console.log(removeDup([1,2,3,3]));


function mergedArray(a,b) {
  var merged=[],aEle=a[0],bEle=b[0],i=1,j=1;
  if(a.length==0){
    return b;
  }
  if(b.length==0){
    return a;
  }
  while(aEle||bEle){
    if((aEle&&!bEle)||(aEle<bEle)){
      merged.push(aEle);
      aEle=a[i++];
    }else{
      merged.push(bEle);
      bEle=b[j++];
    }
  }
  return merged;
}

console.log(mergedArray([1,2,3,4,5],[6,7,8,9]));

function swap(a,b) {
  b=b-a;
  a=a+b;
  b=a-b;
  console.log(a,b);
}
swap(1,2);

function reverse(str) {
  var rev='';
  for(var i=str.length-1;i>=0;i--){
    rev += str[i];
  }
  return rev;
}
console.log(reverse('qwe'));

function reverseWords(str) {
  var result = "";
  var wordArray = str.split(" ");
  for(var i = wordArray.length - 1; i >= 0; i--) {
    result += wordArray[i] + " ";
  }
  return result.trim();
}
console.log(reverseWords('I am strong'));

function revWords(str) {
  var res='',arr=str.split(' ');
  for(var i=arr.length-1;i>=0;i--){
    res +=arr[i]+' ';
  }
  return res.trim();
}
console.log(revWords('I am weak'));

function revInP(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(revInP('I am weak'));

function revStr(str){
  var res = '';
  for(var i = str.length-1;i>=0;i--){
    res +=str[i];
  }
  return res;
}
function revSen(str){
  var arrStr=str.split(' '), res=[];
  for(var i = arrStr.length-1;i>=0;i--){
    res.push(revStr(arrStr[i]));
  }
  return res.join(' ');
}
console.log(revSen('I am YunfengLI'));

function firstNo(str) {
  for(var i =0;i<str.length;i++){
    var c = str[i];
    if(str.indexOf(c)==i&&str.indexOf(c,i+1)==-1){
      return c;
    }
  }
  return null;
}
console.log(firstNo('11223'));

function find_unique(str) {
  var uniq='';
  for(var i=0;i<str.length;i++){
    if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
      uniq+=str[i];
    }
  }
  return uniq.length;
}
console.log(find_unique('I Am what I am'));

function removeDup(str) {
  var res='';
  for(var i=0;i<str.length;i++){
    if(res.indexOf(str[i])<0){
      res +=str[i];
    }

  }
  return res;
}
console.log(removeDup('aabbcc'));

function isPalindrome(str) {
  var len=str.length;
  for(var i = 0; i <len/2;i++){
    if(str[i]!==str[len-1-i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abaa'))

function isP(str){
  return str==str.split('').reverse().join('');
}
console.log(isP('abceba'));

function random5(){
  return 1+Math.random()*4;
}
console.log(random5());

function random7(){
  return ((random5()-1)/4)*6+1;
}
console.log(random7());

function missingNum(arr) {
  var n=arr.length+1,
    sum=0,
    expectedSum=n*(n+1)/2;
  for(var i =0; i<arr.length;i++){
    sum +=arr[i];
  }
  return expectedSum-sum;
}

console.log(missingNum([1,3,4,5]));

function sumFinder(arr, sum){
  var len=arr.length;
  for(var i =0 ; i<len-1;i++){
    for(var j=i+1;j<len;j++){
      if(arr[i]+arr[j]==sum){
        return true;
      }
    }
  }
  return false;
}
console.log(sumFinder([1,2,3,4,5],8));

function sumF(arr,sum) {
  var len=arr.length,
    differ={},
    substract;
  for(var i=0;i<len;i++){
    substract=sum-arr[i];
    if(differ[substract]){
      return true;
    }else{
      differ[arr[i]]=true;
    }
  }
  return false;
}
console.log(sumF([1,2,3],6));

function larSum(arr) {
  var big=arr[0],sec=arr[1],i=2,len=arr.length;
  if(len<2){
    return null;
  }
  if(big<sec){
    big=arr[1];
    sec=arr[0];
  }
  for(;i<len;i++){
    if(arr[i]>big){
      sec=big;
      big=arr[i];
    }else if(arr[i]>sec) {
      sec=arr[i];
    }
  }
  return big+sec;
}
console.log(larSum([1,2,3,4,5]));

function countZero(n){
    var count=0;
    while (n>0){
      count +=Math.floor(n/10);
      n=n/10;
    }
    return count;
}
console.log(countZero(56));

function substr(str,sub) {
  return str.indexOf(sub);
}
console.log(substr('abbcdabbbbbck', 'bbbck'));

function larSum(arr) {
    var big=arr[0],sec=arr[1],i=2,len=arr.length;
    if(len<2){
        return null;
    }
    if(big<sec){
        big=arr[1];
        sec=arr[0];
    }
    for(;i<len;i++){
        if(arr[i]>big){
            sec=big;
            big=arr[i];
        }else if(arr[i]>sec) {
            sec=arr[i];
        }
    }
    return big+sec;
}
console.log(larSum([1,2,3,4,5]));