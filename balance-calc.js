
       let username= localStorage.getItem('username');
       document.querySelector('.username').innerHTML=` ${username}`

        let balance=JSON.parse(localStorage.getItem('balance'))||0
          balanceF();
          taskChange();
          coinChange();
        function task(){
           // taskChange();
            let taskElem=document.querySelector('.task-button')
            let coinGainElem=document.querySelector('.coin-gain')
            let acbSpanElem=document.querySelector('.acb-span')
            if(taskElem.innerHTML!=='Done'){
                acbSpanElem.innerHTML=Number(acbSpanElem.innerHTML)+Number(coinGainElem.innerHTML);
                taskElem.innerHTML="Done"
                balance=acbSpanElem.innerHTML

            };
            localStorage.setItem('balance', JSON.stringify(balance))
        };

        function coinChange(){
             taskChange();
            let taskElem=document.querySelector('.task-button')
            let coinGainElem=document.querySelector('.coin-gain')
            if(taskElem.innerHTML==='Like'){
                coinGainElem.innerHTML='5'
                
            }
            else if(taskElem.innerHTML==='Comment'){
                coinGainElem.innerHTML='15'
                
            }
           else if(taskElem.innerHTML==='Follow'){
                coinGainElem.innerHTML='10'
                
            };
        };
        function taskChange(){
            
            let taskElem=document.querySelector('.task-button')
            let task=Math.random(1)

            if(task>0 && task<1/6){
                taskElem.innerHTML='Like'
            }
            else if(task>1/6 && task<1/4){
                taskElem.innerHTML='Comment'
            }
            else if(task>1/4&& task<1/2){
                taskElem.innerHTML='Follow'
            }
            if(task>1/2 && task<1){
                taskChange()
            }
        }
        function balanceF(){
            document.querySelector('.acb-span')
            .innerHTML=`${balance}`

        };



        console.log(balance)
