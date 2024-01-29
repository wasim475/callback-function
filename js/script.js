let pay = true;
let marks = 89;

function enroll(callback){
    console.log('your payment in processing.')
    setTimeout(function(){
      callback()
    },4000)
}

function payment(callback){
    if(pay){
        console.log('payment successfull.')
        setTimeout(function(){
            callback()
        },4000)
    }else{
        console.log('payment fail.')
    }
   
}

function progress(callback){
    console.log('Course on progress...')
    setTimeout(function(){
        if(marks>=80 && marks<=100){
            callback()
        }else if(marks>100 || marks<0){
            console.log('Invalid marks.. contact with your cr.')
        }else{
            console.log('You could not get enoght marks to get certificate.')
        }
    },4000)
}

function getCertificate(){
    console.log('Your certificate on processing...')
    setTimeout(function(){
        console.log('congrats! you got the certificate.')
    },2000)
}

enroll(function(){
    payment(function(){
        progress(getCertificate)
    })
})
