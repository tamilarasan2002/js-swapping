var a,b,c;
a=prompt("Enter the A value");
b=prompt("Enter the B value");
document.write("A= "+a);
document.write(" B= "+b);
function swap(a,b){
c=b;
b=a;
a=c;
document.write("<br>A= "+a);
document.write(" B= "+b);
}
swap(a,b)