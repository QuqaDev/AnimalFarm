const button = document.querySelectorAll(".animal");
let currentAudio = null;

button.forEach(function (item) {
    item.addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    
            switch (buttonInnerHTML) {
                case "Duck":
                    currentAudio = new Audio("sound/duck.mp3");
                    break;
        
                case "Cow":
                    currentAudio = new Audio("sound/cow.mp3");
                    break;
        
                case "Chicken":
                    currentAudio = new Audio('sound/chicken.mp3');
                    break;
        
                case "Horse":
                    currentAudio = new Audio('sound/horse.mp3');
                    break;
        
                case "Pig":
                    currentAudio = new Audio('sound/pig.mp3');
                    break;
        
                case "Sheep":
                    currentAudio = new Audio('sound/sheep.mp3');
                    break;
        
                case "Cat":
                    currentAudio = new Audio('sound/cat.mp3');
                    break;

                case "Dog":
                    currentAudio = new Audio('sound/dog.mp3');
                    break;
        
                case "Frog":
                    currentAudio = new Audio('sound/frog.mp3');
                    break;
        
                case "Mouse":
                    currentAudio = new Audio('sound/mouse.mp3');
                    break;
    
                default: 
            }

            if (currentAudio) {
                currentAudio.play();
            }

            buttonAnimation(this); 
        });
    });
    
    function buttonAnimation(clickedButton) {
        clickedButton.classList.add('pressed');
        setTimeout(function() {
            clickedButton.classList.remove('pressed');
        }, 300);
    }