document.getElementById("btn").addEventListener('click', ()=>{
    let morning = parseInt(document.getElementById("morning").value)
    let afternoon = parseInt(document.getElementById("afternoon").value)
    let evening = parseInt(document.getElementById("evening").value)

    if (isNaN(morning) || isNaN(afternoon) || isNaN(evening)){
        document.getElementById("answer").innerHTML = "Please select your moods for all of your time"
        return;
    }

    let average = (morning+afternoon+evening)/3;

    let message="";

    if (average > 80){
        message = "You’re on fire today! Ride that wave of excitement and make the most of it!"
        }
        else if(average > 60 && average <= 80){
            message = "Smiles suit you well. Keep spreading those good vibes everywhere you go!"
        }
        else if(average > 40 && average <= 60){
            message = "Just another day, huh? That’s okay—sometimes peace is power. Stay steady."
        }
        else if(average > 20 && average <= 40){
            message = "Breathe in, breathe out. You've got this. Tomorrow’s a fresh start with fresh energy."
        }
        else{
            message = "Today wasn't a good day, but there's always tomorrow—chin up, dude."
        }
    
    document.getElementById("answer").textContent = message

});