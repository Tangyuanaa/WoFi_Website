//about us --introduce
function swap(val){
　　if(val=="left"){
　　　　left.style.display='block';//设置为显示
　　　　center.style.display='none';//设置为隐藏
　　　　right.style.display='none';
　　}else if(val=="center"){
　　　　left.style.display='none';
　　　　center.style.display='block';
　　　　right.style.display='none';
　　}else if(val=="right"){
　　　　left.style.display='none';
　　　　center.style.display='none';
　　　　right.style.display='block';
　　}
　　}