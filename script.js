let male = document.getElementById("male")
let female = document.getElementById("female")
let random = document.getElementById("random")
let tbody = document.querySelector("#tbody")

male.addEventListener("click",async ()=>{
    let display ="";
    await fetch("https://randomuser.me/api/?gender=male&results=50")
    .then(res=> res.json())
    .then(data => {
        for(i=0;i<data.results.length;i++){        
        display+=`
        
            <tbody>
                <tr>
                    <td>${data.results[i].name.first}</td>
                    <td>${data.results[i].gender}</td>
                    <td>${data.results[i].phone}</td>
                    <td>${data.results[i].email}</td>
                </tr>
            </tbody>`
        }
    })
    .catch(err => console.log(err))
    tbody.innerHTML = display;
})

female.addEventListener("click",async ()=>{
    let display ="";
    await fetch("https://randomuser.me/api/?gender=female&results=50")
    .then(res=> res.json())
    .then(data => {
        for(i=0;i<data.results.length;i++){        
        display+=`
            <tbody>
                <tr>
                    <td>${data.results[i].name.first}</td>
                    <td>${data.results[i].gender}</td>
                    <td>${data.results[i].phone}</td>
                    <td>${data.results[i].email}</td>
                </tr>
            </tbody>`
        }
    })
    .catch(err => console.log(err))
    tbody.innerHTML = display;
})

random.addEventListener("click",async ()=>{
    let display ="";
    await fetch("https://randomuser.me/api/?results=50")
    .then(res=> res.json())
    .then(data => {
        for(i=0;i<data.results.length;i++){        
        display+=`
            <tbody>
                <tr>
                    <td>${data.results[i].name.first}</td>
                    <td>${data.results[i].gender}</td>
                    <td>${data.results[i].phone}</td>
                    <td>${data.results[i].email}</td>
                </tr>
            </tbody>`
        }
    })
    .catch(err => console.log(err))
    tbody.innerHTML = display;
})




// async function generatedUser(url){
//     let display ="";
//     await fetch(url)
//     console.log(url)
//     .then(res=> res.json())
//     .then(data => {
//         for(i=0;i<data.results.length;i++){        
//         display+=`
//             <tbody>
//                 <tr>
//                     <td>${data.results[i].name.first}</td>
//                     <td>${data.results[i].gender}</td>
//                     <td>${data.results[i].phone}</td>
//                     <td>${data.results[i].email}</td>
//                 </tr>
//             </tbody>`
//         }
//     })
//     .catch(err => console.log(err))
//     tbody.innerHTML = display;
// }