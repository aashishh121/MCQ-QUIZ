function check(){
    let score = 0 ;
    let q1 = document.quiz.question1.value ;
    let q2 = document.quiz.question2.value ;
    let q3 = document.quiz.question3.value ;
    let q4 = document.quiz.question4.value ;
    let q5 = document.quiz.question5.value ;
    if(q1=="World Wide Web"){
    score++;
    }
    if(q2=="50 Meters"){
    score++ ;
    }
    if(q3=="12"){
    score++ ;
    }
    if(q4=="Samsung"){
    score++ ;
    }
    if(q5=="50 Meters"){
    score++ ;
    }
    
    if(score >= 4 ){
    document.write("Yes, Score = " + score);
    }
    if(score >= 2 ){
    document.write("Maybe, Score = " + score);
    }
    if(score <=1 ){
    document.write("No, Score = " + score);
    }
    
    }