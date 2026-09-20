function Faqs(number){
   /*         if(number){
                  let faqElement= document.querySelector('.js-faq1-ans');
                if(true){
                    faqElement.innerHTML=''
                }
                else{faqElement.innerHTML!=''}
            };
   */   let faqElement=''
             if(number===1){
                  let faqElement= document.querySelector('.js-faq1-ans');
                if(faqElement.innerHTML===''){
                    faqElement.innerHTML= 'FollowMe is a platform dedicated to bringing FOLLOWERS, ENGAGEMENT and VISIBILITY to brands and user accounts.'
                    
                }
                else{faqElement.innerHTML=''};
            }
            else if(number===2){
                  let faqElement= document.querySelector('.js-faq2-ans')
                if(faqElement.innerHTML===''){
                    faqElement.innerHTML=`
                    Follow the steps on the dashboard and 
                    get followers`
                }
                else{faqElement.innerHTML=''}

            }
            else if(number===3){
                let faqElement= document.querySelector('.js-faq3-ans')
                if(faqElement.innerHTML===''){
                    faqElement.innerHTML=`
                    No payment is NEEDED to use FOLLOW ME.
                    However, to get organic followers fast, it is recommended.`
                }
                else{faqElement.innerHTML=''}
            }
            else if(number===4){
                let faqElement= document.querySelector('.js-faq4-ans')
                if(faqElement.innerHTML===''){
                    faqElement.innerHTML=`
                    Yes, all followers, likes, comments and overall
                    engagement gotten from FOLLOW ME are real and authentic`
                }
                else{faqElement.innerHTML=''}
            }
            else if(number===5){
                let faqElement=document.querySelector('.js-faq5-ans')
                if(faqElement.innerHTML===''){
                    faqElement.innerHTML=`
                    Go to 'HOW TO START' above`
                }
                else{faqElement.innerHTML=''}
            };
         

        };



         function menu(){
            let menuElement=document.querySelector('.js-nav-bar')
            if(menuElement.style.display==='flex'){
                menuElement.style.display='none';
            }
            else{menuElement.style.display='flex'}
        };