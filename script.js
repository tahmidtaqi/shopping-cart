const phoneprice=1219;
const caseprice=59;
//addphonebutton
const addphone=document.getElementById("addphone");
addphone.addEventListener("click",function(){
   const phoneno=parseFloat(document.getElementById("phoneno").value)+1;
   // const phoneno=getnumber("phoneno");
    //console.log(phoneno);
    document.getElementById("phoneno").value=phoneno;
   
   const value =total(phoneno,phoneprice,"caseprice");
   document.getElementById("phoneprice").innerText=value;
     

})

const subphone=document.getElementById("subphone");
  subphone.addEventListener("click",function(){

    if(parseFloat(document.getElementById("phoneno").value)>0){
   const phoneno=parseFloat(document.getElementById("phoneno").value)-1;
   // const phoneno=getnumber("phoneno");
    //console.log(phoneno);
    document.getElementById("phoneno").value=phoneno;
    
   const value =total(phoneno,phoneprice,"caseprice");

   if(parseFloat(document.getElementById("caseno").value)==0)
   {
     document.getElementById("phoneprice").innerText=phoneprice;

   }
   else{
      document.getElementById("phoneprice").innerText=value;
  }
   
} 

})

const addcase=document.getElementById("addcase");
addcase.addEventListener("click",function(){
    const caseno=parseFloat(document.getElementById("caseno").value)+1;
    // const phoneno=getnumber("phoneno");
     //console.log(phoneno);
     document.getElementById("caseno").value=caseno;
    
    const value =total(caseno,caseprice,"phoneprice");
    document.getElementById("caseprice").innerText=value;
})
const subcase=document.getElementById("subcase");
subcase.addEventListener("click",function(){
 
   if(parseFloat(document.getElementById("caseno").value)>0)
   {

    const caseno=parseFloat(document.getElementById("caseno").value)-1;
    // const phoneno=getnumber("phoneno");
     //console.log(phoneno);
     document.getElementById("caseno").value=caseno;
   
    const value =total(caseno,caseprice,"phoneprice");
    if(parseFloat(document.getElementById("caseno").value)==0)
    {
      document.getElementById("caseprice").innerText=caseprice;

    }
    else{
    document.getElementById("caseprice").innerText=value||0;
   }
}
})

const remove1=document.getElementById("removephone");
remove1.addEventListener("click",function(){
  
  //const x=parseFloat((document.getElementById("phoneprice").innerText));
 // console.log(x); 
  const caseremove1=parseFloat(document.getElementById("phoneno").value)*0;
   document.getElementById("phoneno").value=caseremove1;
   
   const value =total(caseremove1,phoneprice,"caseprice");
   document.getElementById("phoneprice").innerText=value;

   document.getElementById("cart1").style.display="none";   

})


const remove=document.getElementById("removecase");
remove.addEventListener("click",function(){
  
  //const x=parseFloat((document.getElementById("phoneprice").innerText));
 // console.log(x); 
  const caseremove=parseFloat(document.getElementById("caseno").value)*0;
   document.getElementById("caseno").value=caseremove;
   
   const value =total(caseremove,caseprice,"phoneprice");
  document.getElementById("caseprice").innerText=value;
   document.getElementById("cart2").style.display="none";  


})
// function getnumber(id){

//     const number=parseFloat(document.getElementById("phoneno").value);
//     return number;


// }


function total(no,price,id){
    
   const phonevalue=(no*price)||0;
   console.log(phonevalue);

  console.log(parseFloat(document.getElementById(id).innerText)||0);
   const subtotal=phonevalue+parseFloat(document.getElementById(id).innerText)|| 0;

   console.log(subtotal);

   const tax= subtotal*.05||0;
   
   
   document.getElementById("subtotal").innerText=subtotal;
   document.getElementById("tax").innerText=tax.toFixed(2);
   document.getElementById("total").innerText=(tax+subtotal).toFixed(2);

   return phonevalue;


  
   

}