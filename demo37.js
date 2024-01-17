let n=parseInt(prompt("Enter input",0))
let temp=n
let sum=0
let digit=0

while(n!=0)
{
    digit=parseInt(n%10)
    sum=sum+ Math.pow(digit,3)
    n=parseInt(n/10)
}
if(sum==temp)
document.writeln(`${temp} is an Armstrong number`)
else
document.writeln(`${temp} is not an Armstrong number`)