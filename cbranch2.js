//conditional branching
//Q.3
let result=(a + b < 4) ? 'Below' : 'Over';

//Q.4

let msg=prompt('Which browser is this?' , '');

if(msg=='Edge')
{
    alert("You've got the Edge!");
}
else if(msg=='chrome','Firefox','Safari','Opera')
{
    alert('Okay we support these browser too');
}
else{
    alert('We hope that this page looks ok!');
}
