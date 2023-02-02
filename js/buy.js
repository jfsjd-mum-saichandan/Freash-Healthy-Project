
/*const buttoncalled=document.getElementById("button");
buttoncalled.addEventListener('click', submit)
const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

function submit(){
    let name1=document.getElementById("text").value;
    let name2=document.getElementById("number").value;
    let name3=document.getElementById("email").value;
    let name4=document.getElementById("password").value;
    let name5=document.getElementById("area").value;
    let request = new Request('http://localhost:8080/registrations',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            "name": name1,
            "number": name2,
            "email": name3,
            "password": name4,
            "area": name5
        })
});
fetch(request).then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
}*/
