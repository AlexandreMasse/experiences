const particles = document.querySelectorAll('.particule');

let timer = null;

window.addEventListener('mousewheel', function (e) {
    console.log(e);
    


/* 

    for (var i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        //Wheel Down
        if(e.deltaY > 0) {
            //particle.style.animationPlayState = "running";
            particle.style.animationDirection = "normal"
            
        }

        //Wheel Up
        if(e.deltaY < 0) {
           particle.style.animationPlayState = "paused";
            //particle.style.animationDirection = "reverse"
            
        }


        if(timer !== null) {
            clearTimeout(timer);        
        }
    
        timer = setTimeout(function() {
            console.log('plus de scroll');
            particle.style.animationPlayState = "running";
            //particle.style.animationPlayState = "paused";
        }, 3000);
      

    }


 */



 


    //Wheel Down
    if(e.deltaY > 0) {
                
        for (var i = 0; i < particles.length; i++) {
            const particle = particles[i];
            particle.style.animationPlayState = "running";
            particle.style.animationDirection = "normal"

        }
    }

    //Wheel Up
    if(e.deltaY < 0) {
        
        for (var i = 0; i < particles.length; i++) {
            const particle = particles[i];
            particle.style.animationPlayState = "running";
            particle.style.animationDirection = "reverse"

        }
    }


    if(timer !== null) {
        clearTimeout(timer);        
    }

    timer = setTimeout(function() {
        console.log('plus de scroll')

        for (var i = 0; i < particles.length; i++) {
            const particle = particles[i];
            particle.style.animationPlayState = "paused";
            //particle.style.animationDirection="reverse"

        }
       
    }, 300);


})

 
