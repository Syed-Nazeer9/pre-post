var a = 15;
var value1 = a++ + ++a - --a;
//           15  + 17  -  16   
var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;
//           16  +  17 - 16  + 16  + 15- 15 - 15 -  15
console.log(value1);
console.log(value2);