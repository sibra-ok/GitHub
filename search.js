
function ok(){
found=document.getElementById('found')
notfound=document.getElementById('notfound')
let content=document.getElementById('content')
let search=document.getElementById('search').value;

fetch( `https://api.github.com/users/${search}`).then(response=>response.json()).then(data=>{






const name=data.name;
const profile=data.avatar_url
const organization=data.organizations_url;

const img=document.createElement('img');
img.src=profile;
const div=document.createElement('div');
div.textContent=organization;
const imgId=document.getElementById('img');
imgId.appendChild(img);
imgId.appendChild(div);





console.log(data);


   
    content.innerText=organization;


})

    .catch(error=>{
        console.log(error);
    })

    
if(search==false||null){notfound.innerText='NOT FOUND'
WebGLP


} else{
    notfound.innerText='FOUND'

}
   }



   function fine(){
    document.getElementById('img').innerHTML="";
    
    
    
    
}






let searched=document.getElementById('searched').addEventListener('click',function(){






ok();



if(ok){
fine();


}else{
    ok();
}



}
)


