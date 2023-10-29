    console.log("Filter all the consonants from the array of strings")
    const arr2=["Jaya Sai Kumar"]
    arr2.filter((ele1)=>{
        for(h of ele1)
        if(h!="a"&&h!="e"&&h!="i"&&h!="o"&&h!="u"&&h!="A"&&h!="E"&&h!="I"&&h!="O"&&h!="U")
        console.log(h) ;
      }
      )

    console.log("Return the product of elements in array using reduce")  
    const arr3=[1,2,3,4,5]
    const newary1=arr3.reduce((accu,item)=>{
        return item*accu;
      
    },2)
    console.log(newary1)
 
    console.log("Filter all the strings that starts with 'J' from an array")
    const arr4=["Jaya sai","Jaya vardhan","ayyappa","Charan"]
    const naray=arr4.filter((ele2)=>{
    for(h of ele2)
    if(ele2[0]==="J")
    return ele2
    }
    )
    console.log(naray)
    
    console.log("Print multiplication tables of  each elemnt in array using map")
    const arr=[1,2,3]
    arr.map((ele,i)=>{
    for(i=1;i<=10;i++){
    console.log(`${ele}*${i}=${ele*i}`)
    }}
    )
 
 
 
    console.log("Check whether given string consists of vowels using some")
    const arr6=["sai","vardhan"]
    const newarray2=arr6.some((ele4)=>{
    for(m of ele4){
    if(m=="a"||m=="e"||m=="i"||m=="o"||m=="u"||m=="A"||m=="E"||m=="I"||m=="O"||m=="U")
    return m;
    }
    })
    console.log(newarray2)

 
    console.log("Define the area of the circle whose radius is 2cm by using math methods")
    var radius=2;
    console.log(` radius of circle is : ${Math.PI*Math.pow(2,2)}`)
    
    console.log("Round the elements of an array to its nearest greatest value ")
    const arr7=[1.3,1.8,2.9,4.0,8.2]
    for(item of arr7){
        console.log(Math.ceil(item))
    }

    console.log("Round the elements of an array to its nearest smallest values")
    const arr8=[0.9,1.22,5.2,4.7,3,8]
    for( item2 of arr8){
    console.log(Math.floor(item2))
    }