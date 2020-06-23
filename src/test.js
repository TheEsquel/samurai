

// function log () {
// 	console.log(this);
// }
//
// log()

const obj = {func: () => {console.log(this)}}

obj.func()

