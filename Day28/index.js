var student = {
name : "vardhan",
gender : "male",
rollno : 20 };
console.log("To print properties of javascript object")
console.log(Object.keys(student))
console.log()
console.log("looping through object properties using for in loop")
for(key in student){
  console.log(key+ ':' +student[key]);
}
console.log()
console.log("Deleting one object property")
delete student.rollno;
console.log(student)
console.log()
var student1 = {
name : "vardhan",
gender : "male",
rollno : 12 };
console.log("length of an object");
const objectLength = Object.entries(student1).length;
console.log(objectLength);
console.log()
console.log("accessing nested properties")
   var student2={
     name:"Jay",
     age:"22",
     address:{
       city:"Guntur",
       state:"AP",
       country:"India"
       
     }
   };
   console.log(student2.address.city);
   console.log(student2.address.state);
   console.log()
   console.log("merging two objects")
   var merged={...student,...student2};
   console.log(merged);
   console.log()
console.log("adding new properties")
student1.age=20;
console.log(student1)
console.log()
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   console.log("Program to display reading status of book")
   for(i=0;i<library.length;i++){
     var book=library[i].title + " by "+library[i].author;
     if(library[i].readingStatus){
       console.log("He already read "+book)
     }
     else{
       console.log("He did not read "+book)
     }
   }
   console.log()
   console.log("To print all methods in array")
   function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(FindAllMethods(Array));
console.log(all_properties(Array));


   
   
   