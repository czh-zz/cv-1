let html=document.querySelector("#html");
let style=document.querySelector("#style");
let string=`
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color:red;
}
/*
下面将演示一个太极
首先准备一个div
*/
body{
    color:black;
}

#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*
接下来将div变成一个八卦图
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
#div1{
    border:1px solid black;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width:100px;
    height:100px;
    
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

`;
//string=string.replace(/\n/g,"<br>")
let n=0;
let string2='';
let step=()=>{
    setTimeout(()=>{
        if(string[n]==="\n"){
            string2+="<br>";   
        }else if(string[n]===" "){
            string2+="&nbsp"
            }else{
        string2+=string[n]
                }
        n+=1;
        html.innerHTML=string2; 
        style.innerHTML=string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n+1<=string.length){
        step();
        }else{
        }
    },10)
}
step();

