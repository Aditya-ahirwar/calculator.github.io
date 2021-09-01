let calculate=document.getElementById("calculate");
let exit=document.getElementById("exit");
let a="";
let b="";
// let a=prompt("enter first name");
// let b=prompt("enter second name");

let count=0;
let testVar="";
let answer="";


let clear=document.getElementById("clear");
clear.addEventListener("click",function(){
    document.getElementById("yourname").value=null;
    document.getElementById("partnername").value=null;
    document.getElementById("result").value=null;

})


calculate.addEventListener("click",function()
{
    a=document.getElementById("yourname").value;
    b=document.getElementById("partnername").value;
    let rel=document.getElementById("relation").value;
    let d = a.concat(rel);
    console.log("the values are :"+d+b);
    let c=Array.from(d+b);
    console.log(c);
    let newchar="";
    for (let index = 0; index < c.length; index++) 
    {
        testVar=c[index];
        if(testVar!="*")
        {
            for (let i = index; i < c.length; i++){
                if(c[i]==testVar)
                {
                count++;
                c[i]="*";
                }
            
            }
            newchar+=count.toString();
    
        }
        count=0;
    }
    console.log("the newchar ki value is : "+newchar);
    finalcalc(newchar); 
    document.getElementById("result").value=answer;
    console.log("the answer is : "+answer);     
    a=null;
    b=null;
    d=null;
});

document.getElementById("yourname").value=answer;


// to calculate final int digit String

function finalcalc(new2)
        {   
            // console.log("we are inside function and current value is : "+ new2);
            let anotherNum="";
            let num=0;
            let len=new2.length;
            if(len<=2)
            {
                // console.log("this is inside if of 2 digit");
                answer=new2;
                return new2;
                // console.log("we have returned the value");
            }
            else
            {
                // console.log("inside else since length was greater then 2 ")
                
                if(len%2==0)
                {   
                // console.log("we are inside even length string case ");
                for (let index = 0; index < len/2; index++) 
                {
                    num=parseInt(new2[index])+parseInt(new2[len-(index+1)]);
                    anotherNum+=num.toString();   
                }
                // console.log("this is current value of anothernum : "+anotherNum);
                }
                else
                {
                let index;
                // console.log("we are inside odd length string case");
                for (index = 0; index < Math.floor(len/2); index++) 
                {
                    num=parseInt(new2[index])+parseInt(new2[len-(index+1)]);
                    anotherNum+=num.toString(); 
                }
                // console.log("value of another num after 755 and before adding middle, is : "+anotherNum);
                anotherNum+=new2[Math.floor(len/2)].toString();
                // console.log("value of another num after 755 and after adding middle ,is : "+anotherNum);
                }
            
                // console.log("value of anther num after 755 is : "+anotherNum);
                finalcalc(anotherNum);

            }
        // console.log("this is end line of function : "+new2+" and anothernum is : "+anotherNum);
        }


        