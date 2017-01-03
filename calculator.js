var display="";
var start=true;
var number1;
var bool_number1=false;
var number2;
var bool_number2=false;
var rezult;
var reset=false;

function start()
{
document.getElementById("display").innerHTML=display;
}
function button(button_value)
{
      
      if(reset==true)
      {     display="";
            reset=false;
      }
      if(display.length<10)
      {
            switch(button_value)
            {
                  case "1":
                  display+="1";
                  break;
                  
                  case "2":
                  display+="2";
                  break;
                  
                  case "3":
                  display+="3";
                  break;
                        
                  case "4":
                  display+="4";
                  break;
                  
                  case "5":
                  display+="5";
                  break;
                  
                  case "6":
                  display+="6";
                  break;
                        
                  case "7":
                  display+="7";
                  break;
                        
                  case "8":
                  display+="8";
                  break;
                        
                  case "9":
                  display+="9";
                  break;
                  
                  case "9":
                  display+="9";
                  break;
                        
                  case "0":
                  display+="0";
                  break;
                  
                  case "+":
                  if(bool_number1==false)
                  {
                  number1=parseInt(display);
                  display=""
                  bool_number1=true;
                  }
                  case "-":
 
   
                  break;
                  case "*":


                  break;
                  case "/":


                  break;
                  case "=":
                  if(bool_number1==true && display!="")
                  {
                        number2=parseInt(display);
                        bool_number2=true;
                        rezult=number1+number2;
                        display=rezult;
                        number1=0;
                        bool_number1=false;
                        number2=0;
                        bool_number2=false;
                        rezult=0; 
                        reset=true;
                   
                  }
                  break;
            }
                 
                  


            }
      document.getElementById("display").innerHTML=display;
      }
