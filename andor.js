//Q.4 basic operator

alert( alert(1) || 2 || alert(3) );//1 and 2

alert( alert(1) && alert(2) );// undefined

alert( null || 2 && 3 || 4 );//3

if(-1 || 0) alert('first');
if(-1 && 0) alert( 'second' );
if(null || -1 && 1) alert( 'third' );