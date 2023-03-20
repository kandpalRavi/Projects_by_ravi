// fill in javascript code here
document.querySelector("form").addEventListener("submit",personData);
let dataArr=JSON.parse(localStorage.getItem("DataLS"))||[];
function personData(event){
     event.preventDefault();
    let dataObj={
        Name:document.querySelector("#name").value,
        Id:document.querySelector("#employeeID").value,
        Department:document.querySelector("#department").value,
        Exp:document.querySelector("#exp").value,
        Email:document.querySelector("#email").value,
        mobile:document.querySelector("#mbl").value,
        role:function(){
            if(this.Exp>=5){
                return "Senior";
            }else if(this.Exp<5 && this.Exp>2){
                return "Junior";
            }else{
                return "Fresher";
            }
        }
    };
    dataArr.push(dataObj);
    displayTable(dataArr);
    localStorage.setItem("DataLS",JSON.stringify(dataArr))
}

function displayTable(dataArr){
    document.querySelector("tbody").innerHTML="";
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

        let td7=document.createElement("td");
        td7.innerText=elem.role();
        let td8=document.createElement("td");
        td8.innerText="Delete"
        td8.addEventListener("click",function(index){
            deleteData(index);
        })
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,);
        document.querySelector("tbody").append(tr);

    })
    function deleteData(index) {
        dataArr.splice(index, 1);
        localStorage.setItem("DataLS", JSON.stringify(dataArr));
        // window.location.reload(); or 2nd way
        displayTable(dataArr);
      }
    
    
}

