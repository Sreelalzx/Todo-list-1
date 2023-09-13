const adder=document.querySelector('.adde');
const ul=document.querySelector('.todos')

function generateTemplate(inputs){
 
  const html=`<li class="lis"
  ><span>${inputs}</span><i class='delete fa fa-trash'></i></li>`;
 
ul.innerHTML+=html;
}
  ul.addEventListener('click',(e)=>{
  
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
   
  })
   

adder.addEventListener('submit',( r )=>{
 r.preventDefault();
      
const inputs=adder.adde.value.trim();
  
 if(inputs.length){
   
 generateTemplate(inputs);
 adder.adde.value=''
 }


})

const searchs=document.querySelector('.search');

function searcher(sInput){
 Array.from(ul.children).filter((t)=>!t.textContent.toUpperCase().includes(sInput)).forEach((inputs)=>
    inputs.classList.add('filtered'))

 Array.from(ul.children).filter((t)=>t.textContent.toLowerCase().includes(sInput)).forEach((inputs)=>inputs.classList.remove('filtered'))

}

searchs.addEventListener('keyup',()=>{
 
const sInput=searchs.value.trim().toLowerCase()
 console.log(sInput);
 searcher(sInput)
  
})