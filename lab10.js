function $() 
{ var elements = new Array(); 
for (var i = 0; i < 
arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
function f()
{
alert('Наступила подія onmouseover. Після закриття цього  вікна ви побачите жовтий бардюр і розширення зображення');
$("pic1").style.border="solid 2px  yellow";
$("pic1").style.width="500px";
}
function g(){
alert('Наступила подія onmouseout. Після закриття цього вікна ви побачите зміну коліру  бардюру на червоний і зменшення ширини зображення до 50 px');
$("pic1").style.borderColor="red";
$("pic1").style.width="50px";
}

function c(){
    $("textarea").style.borderTopStyle="dotted";

    }

function l(){
    $("text").style.fontFamily="fantasy";

    }

function a(){
    alert('Наступила подія ondblclick. Після закриття цього вікна ви побачите зміну кольору лівого бордюра на жовтий');
    $("textarea").style.borderLeftColor="yellow";

    }

function k(){
    alert('Наступила подія ondblclick. Після закриття цього вікна ви побачите зміну фонового зображення');
    $("text").style.backgroundImage="url(./lab10_bcg.jpg)";

    }
    
function m(){
    $("text").style.paddingLeft="20px";
    $("text").style.paddingRight="20px";

    }

    function b(){
        $("list").style.listStylePosition="inside";
    
        }
    