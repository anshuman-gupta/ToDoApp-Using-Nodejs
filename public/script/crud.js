
const contact=document.querySelector('.contact-container')
const addForm=document.querySelector('.contact-form')
let output=''
fetch("http://localhost:3001/todoitem").then((res)=>res.json()).then((data)=>{
data.map((item)=>{
    output+=`<div class="col-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${item.id}>
          <h5 class="card-title">${item.id}</h5>
          <p class="card-text">${item.title}</p>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">delete</a>
        </div>
      </div>
    </div>`
    contact.innerHTML=output
})
}).catch((err)=>console.log(err))
addForm.addEventListener('submit',(e)=>{
    e.preventDefault(),location.reload()
    const title=document.getElementById("title").value
    const uid=document.getElementById("userid").value
    const description=document.getElementById("description").value
    console.log(uid)
    const data={
        id: uid,
        title:title,
        description: description,
    }
    const url="http://localhost:3001/todoitem"
 fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>res.json()).then((data)=>location.reload()).catch((err)=>console.log(err))
})
contact.addEventListener('click',(e)=>{
    e.preventDefault(),location.reload()
  const userid= e.target.parentElement.dataset.id
  fetch(`http://localhost:3001/todoitem/${userid}`,{
    method:'DELETE'
}).then((res)=>res.json()).then((data)=>location.reload()).catch((err)=>console.log(err))
})