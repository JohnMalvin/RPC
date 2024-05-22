choice = ["rock", "paper", "scisors"]
shoot = false
incre = false
playerwins = 0
compwins = 0

compchoice = choice[Math.floor(Math.random()*3)]
playerchoice = "none"

$(function(){
    $("#rock").click(function () {
        if(shoot === false){
            $("#rockimg").css({
                "background": "url('ICONS/ROCKFILL.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#paperimg").css({
                "background": "url('ICONS/PAPEROUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#scisorsimg").css({
                "background": "url('ICONS/SCISORSOUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#player").css({
                "background": "url('ICONS/ROCKFILL.png') no-repeat",
                "background-size": "contain",
                "animation": "none", 
                "margin-bottom": "10px"
            });
        }
            playerchoice = "rock"
    });
    $("#paper").click(function () {
        if(shoot === false){
            $("#rockimg").css({
                "background": "url('ICONS/ROCKOUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#paperimg").css({
                "background": "url('ICONS/PAPERFILL.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#scisorsimg").css({
                "background": "url('ICONS/SCISORSOUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#player").css({
                "background": "url('ICONS/PAPERFILL.png') no-repeat",
                "background-size": "contain",
                "animation": "none"
            });
            playerchoice = "paper"
        }
        });
    $("#scisors").click(function () {
        if(shoot === false){
            $("#rockimg").css({
                "background": "url('ICONS/ROCKOUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#paperimg").css({
                "background": "url('ICONS/PAPEROUT.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#scisorsimg").css({
                "background": "url('ICONS/SCISORSFILL.png') no-repeat",
                "background-size": "contain"
            }); 
            $("#player").css({
                "background": "url('ICONS/SCISORSFILL.png') no-repeat",
                "background-size": "contain",
                "animation": "none"
            });
            playerchoice = "scisors"
        }
        });
    
    $("#shoot").click(function () { 
        if(playerchoice != "none"){
            if(compchoice == "rock"){
                $("#comp").css({
                    "background": "url('ICONS/ROCKFILL.png') no-repeat",
                    "background-size": "contain",
                    "animation": "none",
                    "margin-bottom": "10px"
                });
            }
            else if(compchoice == "paper"){
                $("#comp").css({
                    "background": "url('ICONS/PAPERFILL.png') no-repeat",
                    "background-size": "contain",
                    "animation": "none"
                });
            }
            else{
                $("#comp").css({
                    "background": "url('ICONS/SCISORSFILL.png') no-repeat",
                    "background-size": "contain",
                    "animation": "none"
                });
            }
            shoot = true
            $(".status").slideDown();
        }



        if(compchoice === playerchoice){
            winstatus = "tie"
            document.getElementById("status").innerHTML = "IT'S A TIE!"
        }
        else if((compchoice === "rock" && playerchoice === "paper") || (compchoice === "scisors" && playerchoice === "rock") || (compchoice === "paper" && playerchoice === "scisors") ){
            winstatus = "win"
            document.getElementById("status").innerHTML = "YOU WIN!"
            if(incre == false){
                playerwins += 1
                incre = true
            }
        }
        else{
            winstatus = "lose"
            document.getElementById("status").innerHTML = "YOU LOSE!"
            if(incre == false){
                compwins += 1
                incre = true
            }
            
        }
        if(playerwins < 10){
            param = "0"+ playerwins
            document.getElementById("scorep").innerHTML = param
        }
        else{
            document.getElementById("scorep").innerHTML = playerwins
        }
        if(compwins < 10){
            paramc = "0"+ compwins
            document.getElementById("scorec").innerHTML = paramc
        }
        else{
            document.getElementById("scorec").innerHTML = compwins
        }
    });

    $("#playagain").click(function () { 
        incre = false
        $(".status").slideUp();
        $("#comp").css({
            "background": "url('ICONS/LOAD2.png') no-repeat",
            "background-size": "contain",
            "animation": "rotatation 2000ms ease-in-out infinite",
            "margin-bottom": "0px"
        });
        $("#player").css({
            "background": "url('ICONS/LOAD.png') no-repeat",
            "background-size": "contain",
            "animation": "rotatation 2000ms ease-in-out infinite",
            "margin-bottom": "0px"
        });
        $("#rockimg").css({
            "background": "url('ICONS/ROCKOUT.png') no-repeat",
            "background-size": "contain"
        }); 
        $("#paperimg").css({
            "background": "url('ICONS/PAPEROUT.png') no-repeat",
            "background-size": "contain"
        }); 
        $("#scisorsimg").css({
            "background": "url('ICONS/SCISORSOUT.png') no-repeat",
            "background-size": "contain"
        }); 
        shoot = false
        choice = ["rock", "paper", "scisors"]
        compchoice = choice[Math.floor(Math.random()*3)]
        playerchoice = "none"
    });
})



document.addEventListener("contextmenu", function(event){
    event.preventDefault()
})