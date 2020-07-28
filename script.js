 function btnsubmit() {
     var binary = document.getElementById("userinput").value;
     if (binary === '')
         return alert('Please, enter a binary number');
     var sum = 0;
     var i = 0;
     while (binary) {
         sum = sum + Math.pow(2, i) * (binary % 10);
         i++;
         binary = parseInt(binary / 10);

     }
     var decimal = document.getElementById("output").value = sum;
 }

 function sub() {
     var dec = document.getElementById("output").value;
     if (dec === '')
         return alert('Please, enter a decimal number');
     var temp;
     var Decimal;
     var rem;
     var bin = 0;
     place = 1;
     tempDecimal = dec;
     while (tempDecimal > 0) {
         rem = tempDecimal % 2;
         bin = bin + (rem * place);
         tempDecimal = parseInt(tempDecimal / 2);
         place = place * 10;
     }
     var binary = document.getElementById("userinput").value = bin;
 }



 // By using inbuilt function
 // const decimal = parseInt(binary, 2);
 // if (binary === '')
 //     return alert('Please, enter a binary number');
 // document.getElementById('output').value = decimal;