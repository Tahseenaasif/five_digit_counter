var btn=document.getElementById("start-btn");
var firste=document.querySelector(".counter .current1");
var seconde=document.querySelector(".counter .current2");
var thirde=document.querySelector(".counter .current3");
var fourthe=document.querySelector(".counter .current4");




let first=0;
let second=0;
let third=0;
let four=0;
let number1=0


btn.addEventListener('click',()=>{
    var btn=parseInt(document.getElementById("number").value);
    if(btn>0){
        setInterval(cout,500);
    }
    
})


function cout(){
    var number=parseInt(document.getElementById("number").value);
    if(number==number1){
        return;
    }
    console.log(number)
   
    console.log(four)
    four=four+1;
    if(four==10){
        four=0;
        third=third+1;    
    }

    if(third==10){
        third=0;
        second=second+1;   
    }
    if(second==10){
        second=0;
        first=first+1;
    }
    if(first==10){
        first=0;
        second=0;
        third=0;
        four=0;
    }
    fourthe.innerText=four;
    thirde.innerText=third;
    seconde.innerText=second;
    firste.innerText=first;
    number1=(first*1000)+(second*100)+(third*10)+(four);
    console.log("the number is",number1);
    
}