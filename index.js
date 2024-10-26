function testPalindrome(str) {
    let strLow = str.toLowerCase();
    let result = strLow.split('').reverse().join('') == strLow;
    if(result){
        return(console.log(`Слово ${str} является палиндромом`));
    }
    else{
        return(console.log(`Слово ${str} не является палиндромом`));
    }
    
  }

  testPalindrome('Довод');
  testPalindrome('Сантимент');