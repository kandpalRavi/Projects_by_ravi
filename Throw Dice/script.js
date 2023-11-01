document.querySelector("#button").addEventListener("click",rollDice);

function rollDice(elem){
    elem.preventDefault();
    document.querySelector("#member-1+h1").innerText=pickRandom();
    document.querySelector("#member-2+h1").innerText=pickRandom();
    document.querySelector("#member-3+h1").innerText=pickRandom();
    check();
}

function check(){
    let a= document.querySelector("#member-1+h1").innerText;
    let b=  document.querySelector("#member-2+h1").innerText;
    let c= document.querySelector("#member-3+h1").innerText;
    let z = document.querySelector("#winner>h1+h1");
    if(a==b&&b==c&&c==a){
        document.querySelector("#box").style.border ="3px solid blue";
        document.querySelector("#box2").style.border ="3px solid blue";
        document.querySelector("#box3").style.border ="3px solid blue";
        z.innerText="Draw";
    }
    else if(a==b||b==c||c==a){
        if(a==b){
            if(b>c){
                z.innerText="Draw";

                document.querySelector("#box").style.border ="3px solid blue";
                document.querySelector("#box2").style.border ="3px solid blue";
                document.querySelector("#box3").style.border ="3px solid red";
            }
            if(b<c){
                z.innerText="C";

                document.querySelector("#box").style.border ="3px solid blue";
                document.querySelector("#box2").style.border ="3px solid blue";
                document.querySelector("#box3").style.border ="3px solid green";
            }
        }
        else if(b==c){
            if(c>a){
                z.innerText="Draw";

                document.querySelector("#box2").style.border ="3px solid blue";
                document.querySelector("#box3").style.border ="3px solid blue";
                document.querySelector("#box").style.border ="3px solid red";
            }
            else{
                z.innerText="A";

                document.querySelector("#box2").style.border ="3px solid blue";
                document.querySelector("#box3").style.border ="3px solid blue";
                document.querySelector("#box").style.border ="3px solid green";
            }
         
        }else{
            if(a==c){
                if(c>b){
                    z.innerText="Draw";
                    document.querySelector("#box").style.border ="3px solid blue";
                    document.querySelector("#box3").style.border ="3px solid blue";
                    document.querySelector("#box2").style.border ="3px solid red";
                }
                if(c<b){
                    z.innerText="B";

                    document.querySelector("#box").style.border ="3px solid blue";
                    document.querySelector("#box3").style.border ="3px solid blue";
                    document.querySelector("#box2").style.border ="3px solid green";
                }
            }
        }
    }
    else if(a>b&&a>c){
        document.querySelector("#box").style.border ="3px solid green";
        z.innerText="A";

        if(b>c){
        document.querySelector("#box2").style.border ="3px solid yellow";
        document.querySelector("#box3").style.border ="3px solid red";

        }else{
        document.querySelector("#box3").style.border ="3px solid yellow";
        document.querySelector("#box2").style.border ="3px solid red";
        }
    }
    else if(b>a&&b>c ){
        document.querySelector("#box2").style.border ="3px solid green";
        z.innerText="B";

         if(a>c){
        document.querySelector("#box").style.border ="3px solid yellow";
        document.querySelector("#box3").style.border ="1px solid red";
        }
        else{
        document.querySelector("#box3").style.border ="3px solid yellow";
        document.querySelector("#box").style.border ="3px solid red";
        }
    }
    else{
        document.querySelector("#box3").style.border ="3px solid green";
        z.innerText="C";
        
        if(a>b){
        document.querySelector("#box").style.border ="3px solid yellow";
        document.querySelector("#box2").style.border ="3px solid red";
        }
        else{
            document.querySelector("#box2").style.border ="3px solid yellow";
        document.querySelector("#box").style.border ="3px solid red";
        }
    }

    if(z.innerText=="Draw"){
        document.querySelector("#winner").style.border ="3px solid blue"
    }else{
        document.querySelector("#winner").style.border ="3px solid green"
    }
}


function pickRandom(){
let arr =[1,2,3,4,5,6];
let random = arr[(Math.floor(Math.random()*(arr.length)))];
    return random;
}

