

function obj (n,cat,img, p,gen,sold){
    this.name=n;
    this.category=cat;
    this.img_url= img;
    this.price=p;
    this.gender=gen;
    this.sold=sold;
}

document.querySelector("form").addEventListener("submit",data)
let arr_data=JSON.parse(localStorage.getItem("Pro_Data"))||[];
// JSON.parse(localStorage.getItem("Pro_Data"))||
function data(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let cat= document.querySelector("#category").value;
    let img= document.querySelector("#img_url").value;
    let price= document.querySelector("#price").value;
    let gen = document.querySelector("#gender").value;
    let sold= document.querySelector("#sold").value;


    // console.log(name);
    // console.log(img);
    // console.log(gen);
    // console.log(sold);
    if(name!=""&&cat!=""&&img!=""&&price!=""&&gen!=""&&sold!=""){

        let data_obj= new obj(name,cat,img,price,gen,sold);
        arr_data.push(data_obj);
    
        localStorage.setItem("Pro_Data",JSON.stringify(arr_data));

        window.location.reload();
    }
    else{
        alert("please fill the form");
    }
 
}
