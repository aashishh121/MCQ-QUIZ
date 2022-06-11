function check(){
    
    let score = 0 ;
    let value = 0 ;
    let q1 = document.quiz.question1;
    let q2 = document.getElementsByName("question2");
    let q3 = document.getElementsByName("question3");
    let q4 = document.getElementsByName("question4");
    let q5 = document.getElementsByName("question5");

    
    for(let i = 0; i <q1.length ; i++){
        if(q1[i].checked && q1[i].value == "World Wide Web"){
            score++ ;
        }
        if(q1[i].checked){
            value++ ;
        }
    }


    for(let i = 0; i <q2.length ; i++){
        if(q2[i].checked && q2[i].value == "50 Meters"){
            score++ ;
        }if(q2[i].checked){
            value++ ;
        }
    }
    for(let i = 0; i <q3.length ; i++){
        if(q3[i].checked && q3[i].value == "12"){
            score++ ;
        }
        if(q3[i].checked){
            value++ ;
        }
    }
    for(let i = 0; i <q4.length ; i++){
        if(q4[i].checked && q4[i].value == "Samsung"){
            score++ ;
        }
        if(q4[i].checked){
            value++ ;
        }
    }
    for(let i = 0; i <q5.length ; i++){
        if(q5[i].checked && q5[i].value == "50 Meters"){
            score++ ;
        }
        if(q5[i].checked){
            value++ ;
        }
    }

    // if(q1=="World Wide Web"){
    // score++;
    // }
    // if(q2=="50 Meters"){
    // score++ ;
    // }
    // if(q3=="12"){
    // score++ ;
    // }
    // if(q4=="Samsung"){
    // score++ ;
    // }
    // if(q5=="50 Meters"){
    // score++ ;
    // }
    
    
//     if(score >= 4 ){
//     document.write("Marks " + " " + score + " " + "Out Of 5 <br><br> Final Call : Yes");
//     }
//     if(score >= 2 ){
//     document.write("Marks " + " " + score + " " + "Out Of 5 <br><br> Final Call : Maybe");
//     }
//     if(score <=1 ){
//     document.write("Marks " + " " + score + " " + "Out Of 5 <br><br> Final Call : No");
        
//     }
    // if(q1 == null && q2 == null && q3 == null && q4 == null && q5 == null || score == 0 ){
    //     alert("You have to attempt all question");
    // }

    if(value < 5){
        alert("Attempts All Questions");
    }else{
        var blur = document.getElementById("blur");
        blur.classList.add("active");
        if(score>=4 ){   
            document.getElementById("popup").classList.toggle("open-popup");
                document.getElementById("res").innerHTML="Marks "+score+" out of 5 <br>"+"<br>"+"final call: Yes";
                return false;
            }
            if(score>=2){
            document.getElementById("popup").classList.toggle("open-popup");
                document.getElementById("res").innerHTML="Marks "+score+" out of 5 <br>"+"<br>"+"final call: May be";
                return false;
            }else{
            	document.getElementById("popup").classList.toggle("open-popup");
                document.getElementById("res").innerHTML ="Mark "+score+" out of 5 <br>"+"<br>"+"final call: No";
                return false;
            }
    }
    
    }

    function Reload(){
            location.reload();
          }
