/*-- assignment operator---*/
	var a=10;
	var b=20;

	console.log(a+=b);
	console.log(a-=b);

	var c=2;
	var d=4;

	console.log(c+=d);
	console.log(c-=d);
/*---logical operator---*/
	var m=10;
	var n=20;
	var j=30;

	console.log((m>n)&&(n>j));
	console.log((m>n)&&(n>j));
	console.log((j>n)&&(n>m));
	var ab=15;
	var bc=20;
	var cd=25;

	console.log((ab<cd)||(bc<ab));
	console.log((ab>cd)||(bc>ab));
	console.log((bc>ab)||(cd>ab));

    var x=3;
	var y=5;
	var z=10;
	console.log((y>x)!=(z>x));
	
  /*--addition--*/
     var a=5;
	   var b=5;
	   var c=5;
	   var d=a+b+c;
	     document.write(d+"<br>");
/*---subtraction--*/
	var a=10;
	var b=20;
	var c=a-b;
	document.write(c+"<br>");
/*---multiplication--*/
	var a=5;
	var b=5;
	var c=a*b;
	document.write(c);
	document.write("<br>");
/*---division--*/
	var a=30;
	var b=10;
	var c=a/b;
	document.write(c);
	document.write("<br>");
/*---area of circle--*/
	var R=7;
	var area=22/7*R**2;

	document.write(area);
	document.write("<br>");
/*---area of triangle--*/
	var b=8;
	var h=2;
	var area=1/2*b*h;
	var area=1/2*8*2;

	document.write(area);
	document.write("<br>");
/*---simple interst--*/
	var p=20000;
	var r=10;
	var t=1;
	
	var si=p*r*t/100 ;
	document.write(si);
	document.write("<br>");
	
	
/*--- square--*/
	var a=3;
	var area=a**2;

	document.write(area);
	document.write("<br>");
/*--- cube--*/
	var a=6;
	var area=6*a**2;

	document.write(area);
	document.write("<br>");
/*--- total and average--*/
	var a=5;
	var b=5;
	var c=5;
	var d=a+b+c
	document.write(d);
	document.write("<br>");
	var d=d/3;
	document.write(d);
	document.write("<br>");
/*--- larger number--*/
	var a=10;
	var b=15;
    var c=a>b;
	document.write(c);
	document.write("<br>");
/*--- positive number--*/
	var a=10;
	var b=0;
    var c=a>b;
	document.write(c);
	document.write("<br>");
/*--- greater than--*/
	var a=15;
    var c=a>10;
	document.write(c);
	document.write("<br>");
/*--- even or odd --*/
	var n=10;
    var c=n%2==0;
	document.write(c);
	document.write("<br>");
/*--- divisable by 5 --*/
	var s=100;
    var c=s%5;
	document.write(c==0);
	document.write("<br>"); 

 /*-- number big small ---*/
    var number=10;
	 if(number>5)
	   {
	   alert("number is big");
	   }
	   else{
	   alert("number is small");
	   }   
                 
 
	
 
     
	