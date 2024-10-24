$('.item2').click(function (e) { 
    $('.item1').animate({'width':"100%"},500)
    
    
});

$('.but-close-sec-one').click(function (e) { 
    $('.item1').animate({'width':"0"},500)
    
    
});

$('.sign-one').click(function (e) { 
    $('.sign-one-p').slideToggle(500)
    
});


$('.sign-two').click(function (e) { 
    $('.sign-two-p').slideToggle(500)
    
});



$('.sign-three').click(function (e) { 
    $('.sign-three-p').slideToggle(500)
    
});



$('.sign-four').click(function (e) { 
    $('.sign-four-p').slideToggle(500)
    
});

// page-time
let partyTime = new Date("Dec 31 ,2024 23:59:59").getTime()


let counter= setInterval(()=>{

    let time=new Date().getTime()
    // console.log(time);
    
    let diffTime = partyTime-time
    
    let days=Math.floor(diffTime/(1000*60*60*24))

   document.querySelector('.days') .innerHTML=days
  let hours= Math.floor(diffTime%(1000*60*60*24)/1000/60/60);   
   document.querySelector('.hours') .innerHTML=hours
    
let minute= Math.floor(diffTime%(1000*60*60)/1000/60)
document.querySelector('.minut') .innerHTML=minute


let second=Math.floor(diffTime%(1000*60)/1000)
document.querySelector('.second') .innerHTML=second




    
    
    
    
    // console.log( (diffTime % 1000*60*60*24)/1000*60*60);
    
},1000)















let textarea = document.querySelector('#floatingTextarea2');
let remanint = document.querySelector('#reamining');
let chart=100;

textarea.addEventListener('input',function(){
    const currentLength = textarea.value.length;
    const remainingChars = maxChars - currentLength;

    remanint.textContent = `${remainingChars}`;

    if (remainingChars <= 0) {
        textarea.disabled = true; // تعطيل الـ input
    } else {
        textarea.disabled = false; // تفعيل الـ input
    }
})