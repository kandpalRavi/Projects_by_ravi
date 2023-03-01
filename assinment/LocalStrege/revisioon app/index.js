document.querySelector("form").addEventListener("submit",myDSA);
let qusArr= JSON.parse(localStorage.getItem("qusData"))||[];
window.addEventListener("load",displayTable(qusArr));
function myDSA (event){
    event.preventDefault();
    let qusObj={
        qusTitle:document.querySelector("#title").value,
        qusLink:document.querySelector("#link").value,
        qusDiff:document.querySelector("#diffculty").value      
    }
    // console.log(qusObj);
    qusArr.push(qusObj);
  displayTable(qusArr);
  localStorage.setItem("qusData",JSON.stringify(qusArr));
}
function displayTable(qusarr){
    document.querySelector("tbody").innerHTML="";
    qusArr.forEach(function(elem){
        let tr=document.createElement("tr");
        
        let td1=document.createElement("td");
            td1.innerText=elem.qusTitle
        let td2=document.createElement("td");
            td2.innerText=elem.qusLink;
        let td3=document.createElement("td");
            td3.innerText=elem.qusDiff;
        let td4=document.createElement("td");
            if(elem.qusDiff=="easy"){
              td4.innerText="No";
            }else{
              td4.innerText="Yes";
            }
            tr.append(td1,td2,td3,td4);
            document.querySelector("tbody").append(tr);
    })
}