const slctLng =document.querySelector('.lng-slct');
const choseLng =document.querySelector('.chosse-lng');
const slector=choseLng.querySelectorAll('li');
const slctNewLang=document.querySelector('#yo');


const transElement = document.querySelector('.trans');

slctLng.addEventListener('click', ()=>{
   
    choseLng.classList.toggle('active');
  
    
    if(slctLng.classList.contains){
        transElement.classList.toggle('rotate');
        transElement.style.transition='0.3s'
    }
    

    
    console.log(choseLng)

});

slector.forEach(chossed => {
   
    chossed.addEventListener('click', ()=>{
    
     slctNewLang.textContent = chossed.textContent;
         
    });
    
});


const signIn= document.querySelector('.loginBtn');
const loginPage=document.querySelector('.login_page');
const cancl=document.querySelectorAll('.cancl')
const register=document.querySelector('#register')
const  showRegisterPag=document.querySelector('.register_page')
const canclRegistr=document.querySelector('.cancl_registr')
const loginLink=document.querySelector('.login_link')
const  validLablEmail=document.querySelectorAll('.valid_Email')
const  emailInput=document.querySelectorAll('.email_input')


signIn.addEventListener('click', ()=>{
       
     loginPage.style.display='flex'
       showRegisterPag.style.display='none'
    

})
cancl.forEach((remove)=>{

    remove.addEventListener('click', ()=>{
        loginPage.style.display='none '
            showRegisterPag.style.display='none'
    
    })
})


register.addEventListener('click', ()=>{
    showRegisterPag.style.display='flex'
    loginPage.style.display='none'

})

loginLink.addEventListener('click', ()=>{
    showRegisterPag.style.display='none'
    loginPage.style.display='flex'
})



// validLablEmail.forEach(element=>element.style.marginBottom='0')

// emailInput.forEach((valid ,index)=>{
//     valid.addEventListener('click',()=>{
//      if(valid.value.trim() === ''){
//         validLablEmail[index].style.top='0'
//         // validLablEmail[index].style.marginBottom='0'
//      }
//      else{
//         validLablEmail[index].style.top='10rem'
//      }
//     })
// })

// const askedQuetions=document.querySelector('.asked_quetions');
const quetions= document.querySelectorAll('.quetions')
const answer= document.querySelectorAll('.answer')
const svgs=document.querySelectorAll('.svg')

 quetions.forEach((eachQuetion,index)=>{
    eachQuetion.addEventListener('click', ()=>{
        answer[index].classList.toggle('active')
        
        if(answer[index].classList.contains('active')){
            svgs[index].textContent='-'
             
        }
        else{
            svgs[index].textContent='+'
          
        }

        
        answer.forEach((answers, answerIndex) => {
            if (answerIndex !== index  && answers.classList.contains('active')) {
              answers.classList.remove('active');
              svgs[answerIndex].textContent='+'
              answers[answerIndex].style.height='0'

            }})

           
      
    })
 })














