let textarea = document.getElementById("inputi");

textarea.addEventListener('input', function () { // fetching value of text area 
    let text = textarea.value;
    let char = text.length;
    document.getElementById("outputtext2").innerHTML = "No. of Characters are  :" + char;
    text = text.trim(); //  removing spaces from firsyt and last 
    let word = text.split(" "); // dividing up the array into words 
    let count=0;
  
   for( let i=0;i<word.length;i++)
   {
    if(word[i]!="")
    {
      count++;
    }

   }
   
    document.getElementById("outputtext1").innerHTML = "No. of Words are  :" + count;
   

})
playagain.addEventListener("click",function(){
    location.reload();
});