console.log("split method:");
        var a="Hello this is sai";
        var b=a.split(" ");
        var c=a.split("");
        console.log(b);
        console.log(c);
console.log("join method:");
        var e=[1,2,3,4,5];
        var f=e.join(" $ ");
        console.log(f);
        
console.log("call back functions:");
        function display(name){
            return "I am display"+" "+name;
        }
        function name(){
            
            return "Sai";
        }
        console.log(display(name()));
console.log("Map")
        const arr=[1,2,3,4,5];
        var newarr=arr.map(
        function(x){
        return x*10;
          }
          );
        console.log(newarr);
      
console.log("arrow function:");
        var a= (b) =>{
            console.log("Hi"+" "+b);
        }
        a("Sai");