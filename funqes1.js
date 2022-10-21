//functions
//Q.1

function checked(age){
    if(age>=18){
        return true;
    }
    else{
        return;
    }
}

let age=prompt("what's your age?")
if(checked(age)){
alert('You are Eligible for Driving !')
}
else{
    ('You are Not eligible for driving !');
}
