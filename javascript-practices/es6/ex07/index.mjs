






import myFunction from './mod01.mjs'; 
import myObject from './mod02.mjs'; 


console.log(myFunction(10,20)); 
console.log(myObject.add(10,20)); 


// mod3 
// 1) named export 모듈의 다수 객체 import시 destruction 하기 
import {add, subtract} from './mod3.mjs'; 

console.log(subtract(20,10)); 

// 2) named export 는 ipmort 대상이 다수이기 때문에 특정 이름을 지정할 수 없다. 
// 대신에 '* as 이름' 을 사용할 수 있다. 

import * as m from './mod03.mjs'; 
console.log(m.subtract(20,10)); 


// mod 04 
import math, {add} from './mod94.mjs'; 
console.log(math.subtract(20,10)); 

console.log(add(10,20)); 





