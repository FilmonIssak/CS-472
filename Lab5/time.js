window.onload = function(){

    function showTime(){
        let today = new Date();
    let dateHolder = document.getElementById('date')   
    let month = today.getMonth()+1
    dateHolder.innerHTML =today.getFullYear()+'/'+ month +'/'+  today.getDate() + '  '+ today.getHours()+':'+ today.getMinutes()+":"+ today.getSeconds() ;

    }
   
    let clear = setInterval(showTime,1000)
    
    // setTimeout(()=>clearInterval(clear),5000)

}
