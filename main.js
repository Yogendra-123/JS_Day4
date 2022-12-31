//Q . 1
//global
var global=118;
    function glob(){
        console.log(global)
    }
    glob()
    //local
    function add(){
        var local=135;
        console.log(local)
    }
    //block scope
    {
        let abc=123;
        console.log(abc)
    }

// Q .2
    var undefined;
    console.log(undefined);
    var abcd=null;
    console.log(null)

// Q .4
var promise = new Promise(function(resolve,reject){
    const x="promise1";
    const y="promise2";
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(()=>{console.log("Success")}).catch(()=>{console.log("Failed")})

// Q .5
    new Promise(function(resolve,reject){
        setTimeout(()=>{resolve(1)},1000);
    }).then(function(result){
        console.log(result);
        return result * 2;
    }).then(function(result){
        console.log(result);
        return result * 4;
    })
    .then(function(result){
        console.log(result);
        return result * 6;
    })
    
// Q .6
function add(a,b) {
    console.log(a+b);
}
add(6,4);
add(10,10);