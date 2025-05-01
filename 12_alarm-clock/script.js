
function start(){

    let time = document.getElementById("time").value;

        let ang = 6;
        let t =  setInterval(function(){
                arrow.style.rotate = `${ang}deg`
                ang+=6
            }, 1000)
    
    
            setTimeout(function(){
                clearInterval(t)
    
                 timeUp()
    
            }, time*1000)
    
    }
    

    function timeUp(){
        let clock = document.getElementById("clock")
        clock.className += " shaking" 
        document.querySelector("audio").play()
    
        document.querySelector(".js")
    }
     
 
    function stoping(){
        document.querySelector("audio").pause();
        let clock = document.getElementById("clock")
        clock.className = "clock border border-2 shadow  rounded-3 d-flex justify-center align-items-center"
    }
    
  
    let sound = document.querySelector("audio")
    const triggers = document.querySelectorAll(".js")
    const defaults = {
      disableForReducedMotion: true
    };
    
    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(200 * particleRatio)
        })
      );
    }
    
    
function confettiExplosion(origin) 
   {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        origin
      });
      fire(0.2, {
        spread: 60,
        origin
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        origin
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        origin
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        origin
      });
    }
    

    Array.from(triggers).forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const rect = trigger.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        const origin = {
          x: center.x / window.innerWidth,
          y: center.y / window.innerHeight
        };
    
        if (sound) {
          sound.currentTime = 0;
          sound.play();
        }
        confettiExplosion(origin);
      });
    });

