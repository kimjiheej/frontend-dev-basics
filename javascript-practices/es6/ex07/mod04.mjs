/*


* named export 

1. exports(require) 와 비슷하다. 
2. exports.a = .....
* exports.b = ... 



2.  import하는 모듈에 destructing 할 수 있다. 



*/

const add = function() {
     return a+b; 
}

 const subtract = function() {
    return a-b; 
}

export {add, subtract}; 
export default{add,subtract}; 


