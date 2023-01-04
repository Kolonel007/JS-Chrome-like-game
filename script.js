var character = document.getElementById("character"); //character variable initialized

var block = document.getElementById('block');

function jump(){
    if(character.classList !="animate"){
    character.classList.add("animate"); 
}
     setTimeout(function(){
        character.classList.remove("animate");
     },500)
}

// the code block above intitiates the jump animation class as soon as the function 
// is called.

var checkDead = setInterval (function(){
            var characterTop = 
            parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = 
            parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft <20 && blockLeft > 0 && characterTop >= 130){
                    block.style.animation = "none";
                    block.style.display = "none";
                    alert("u lose.");
                }
        },10);
        
// The checkdead codeblock checks the position of the character and block. 
// This will let the player know when to stop or start. 
// PS It's all about logic