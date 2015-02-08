var deafGrandmaGame = {
    user: {
        speak: "",
        byeCount: 0,
        setSpeak: function(userInput) {
            if (userInput.toUpperCase() == "BYE") {
                this.byeCount += 1;
            }
            this.speak = userInput;
        }
    },
    grandma: {
        speaksWhenCanHear: "NO, NOT SINCE ",
        speaksWhenCantHear: "HUH?!  SPEAK UP, SONNY!",
        saysBye: "BYE SONNY, SEE YA LATER!",
        speaks: function() {
            if (deafGrandmaGame.user.byeCount == 3) {
                deafGrandmaGame.user.byeCount = 0;
                return this.saysBye;
            }
            if (deafGrandmaGame.user.speak.toUpperCase() == deafGrandmaGame.user.speak && deafGrandmaGame.user.speak) {
                return this.speaksWhenCanHear + deafGrandmaGame.getRandomYear() + "!";
            }
            return this.speaksWhenCantHear;
        }
    },
    play: function() {
        deafGrandmaGame.user.setSpeak(document.getElementById("userSpeak").value);
        document.getElementById("grandmaSpeaks").innerHTML = this.grandma.speaks();
    },
    reset: function() {
        location.reload();
    },
    getRandomYear: function() {
        return 1930 + Math.floor((Math.random() * 20) + 0);
    }
}


document.getElementById("speakToGrandma").addEventListener('click', function() {
    deafGrandmaGame.play();
});
document.getElementById("gameReset").addEventListener('click', function() {
    deafGrandmaGame.reset();
});
document.getElementById("userSpeak").addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        deafGrandmaGame.play();
    }
});
