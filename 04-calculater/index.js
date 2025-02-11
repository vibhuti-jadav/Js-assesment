let one= document.getElementById("one").onclick =one1
let two= document.getElementById("two").onclick =two1
let three= document.getElementById("three").onclick =three1
let four= document.getElementById("four").onclick =four1
let five= document.getElementById("five").onclick =five1
let six= document.getElementById("six").onclick =six1
let seven= document.getElementById("seven").onclick =seven1
let eight= document.getElementById("eight").onclick =eight1
let nine= document.getElementById("nine").onclick =nine1
let zero= document.getElementById("zero").onclick =zero1

let multy= document.getElementById("multy").onclick =multy1
let minus= document.getElementById("minus").onclick =minus1
let plus= document.getElementById("plus").onclick =plus1
let module= document.getElementById("module").onclick =module1
let divid= document.getElementById("divid").onclick =divid1
let dot= document.getElementById("dot").onclick =dot1


let equal= document.getElementById("equal").onclick =equal1

let clear=document.getElementById("clear").onclick =function(){
    display.innerHTML =' '
}


  

function one1(){
    display.innerHTML +=1
}
function two1(){
    display.innerHTML +=2
}
function three1(){
    display.innerHTML +=3
}
function four1(){
    display.innerHTML +=4
}
function five1(){
    display.innerHTML +=5
}
function six1(){
    display.innerHTML +=6
}
function seven1(){
    display.innerHTML +=7
}
function eight1(){
    display.innerHTML +=8
}
function nine1(){
    display.innerHTML +=9
}
function zero1(){
    display.innerHTML +=0
}


function multy1(){
    display.innerHTML +="x"
}
function minus1(){
    display.innerHTML +="-"
}
function plus1(){
    display.innerHTML +="+"
}
function module1(){
    display.innerHTML +="%"
}
function divid1(){
    display.innerHTML +="/"
}
function dot1(){
    display.innerHTML +="."
}


let first;
let op;

function plus1(){
     first = display.textContent;
     display.innerHTML = ""
     op="+"

}

function minus1(){
     first = display.textContent;
     display.innerHTML = ""
    op="-"
}

function multy1(){
     first = display.textContent;
     display.innerHTML = ""
    op="*"
}
function divid1(){
     first = display.textContent;
     display.innerHTML = ""
    op="/"
}
function module1(){
     first = display.textContent;
     display.innerHTML = ""
    op="%"
}


function equal1(){
    
    let second = display.textContent;
  
    if(op=="+")
    {
      display.innerHTML = Number(first)+Number(second)
    }
   else if(op=="-")
      {
        display.innerHTML = Number(first)-Number(second)
      }
   else if(op=="*")
          {
            display.innerHTML = Number(first)*Number(second)
          }
          else if(op=="/")
            {
              display.innerHTML = Number(first)/Number(second)
            }
          else if(op=="%")
            {
              display.innerHTML = Number(first)%Number(second)
            }
            else{
                alert("enter valid number")
            }
          
  }