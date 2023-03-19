// fill in javascript code here
document.querySelector("form").addEventListener("submit",personData);
let dataArr=[];
function personData(elem){
    elem.preventDefult();
    let dataObj={
        Name:document.querySelector("#name").value,
        Id:document.querySelector("#employeeID").value,
        Department:document.querySelector("#department").value,
        Exp:document.querySelector("#exp").value,
        Email:document.querySelector("#email").value,
        mobile:document.querySelector("#mbl").value,
        role:function(){
            if(this.Exp>5){
                return "Senior";
            }else if(this.Exp<5&&this.Exp>2){
                return "Junior";
            }else{
                return "Fresher";
            }
        }
    };
    dataArr.push(dataObj);
    displayTable(dataArr);
}
function displayTable(dataArr){
    dataArr.forEach(function(elem,index){
        let tr=document.createElement("tr");

        let td1 =document.createElement("td");
            td1.innerText=elem.Name;
        let td2 =document.createElement("td");
            td2.innerText=elem.Id;

        let td3 =document.createElement("td");
        td3.innerText=elem.Department;


        let td4 =document.createElement("td");
        td4.innerText=elem.Exp;

        let td5 =document.createElement("td");
        td5.innerText=elem.Email;


        let td6 =document.createElement("td");
        td6.innerText=elem.mobile;

    })
    
    
}

