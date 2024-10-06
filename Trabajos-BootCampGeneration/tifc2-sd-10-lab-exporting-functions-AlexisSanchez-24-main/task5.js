export function rubricPassFail(score) {
    
    if (score < 5){
        return "Fail";
    }
    if (score >= 5 && score <= 11){
        return "Pass";
    }

    }