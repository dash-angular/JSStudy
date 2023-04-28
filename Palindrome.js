function isPalindrome(x){

    var finalResult=x.toString();
    return finalResult === finalResult.split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(122));
