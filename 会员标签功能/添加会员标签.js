var tj=document.getElementById("tj");
// 储存会员信息
tj.onclick=function(){
var data=document.getElementById('exampleInputEmail1').value;
var hydj=document.getElementById('hydj').value;
var hyxm=document.getElementById('hyxm').value;
var xb=document.getElementById('xb').value;
var sjh=document.getElementById('sjh').value;

if( hydj!==""&&hyxm!==""&&xb!==""&&sjh!==""&&data!==""){
	localStorage.setItem(new Date().getTime()+1, data);
	localStorage.setItem(new Date().getTime()+2, hydj);
	localStorage.setItem(new Date().getTime()+3, hyxm);
	localStorage.setItem(new Date().getTime()+4, xb);
	localStorage.setItem(new Date().getTime()+5, sjh);
}else{
	alert("不能为空哦！");
}
}



// 创建并赋值给文本框
             window.onload= function () {
             
              var tblLocal =   document.getElementById('tblLocal');
             
              var sc=document.getElementById("sc");
       
               for (let i = 0; i < localStorage.length; i++) {
               	 var key = localStorage.key(i);
                var value = localStorage.getItem(key);
             if (i%5==0){
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);

         tblLocal.innerHTML += '<input type="text" name="f1" readonly="readonly" id="'+key+'" class="form-control f1" value= "'+value+'">'; 
        }	if ((i-1)%5==0&&value=="普通会员"){
        	 var key = localStorage.key(i);
                var value = localStorage.getItem(key);
        	 tblLocal.innerHTML += '<select id="f1" name="f1" class="form-control"disabled="disabled" name="vehicle1"><option value="普通会员">'+value+'</option><option value="白银会员">白银会员</option> <option value="黄金会员">黄金会员</option></select>';
        }
        if ((i-1)%5==0&&value=="白银会员"){
        	 var key = localStorage.key(i);
                var value = localStorage.getItem(key);
        	 tblLocal.innerHTML += '<select id="f1" name="f1" class="form-control"disabled="disabled"name="vehicle1"><option value="白银会员">'+value+'</option> <option value="普通会员">普通会员</option><option value="黄金会员">黄金会员</option></select>';
        }
        if ((i-1)%5==0&&value=="黄金会员"){
        	 var key = localStorage.key(i);
                var value = localStorage.getItem(key);
        	 tblLocal.innerHTML += '<select id="f1" name="f1" class="form-control"disabled="disabled" name="vehicle1"> <option value="黄金会员">'+value+'</option><option value="普通会员">普通会员</option><option value="白银会员">白银会员</option></select>';
        }
        if ((i-2)%5==0){
        	  var key = localStorage.key(i);
                var value = localStorage.getItem(key);

         tblLocal.innerHTML += '<input type="text" name="f1" readonly="readonly" id="'+key+'" class="form-control f1" value= "'+value+'">'; 
        }
        	if ((i-3)%5==0&&value=="男"){
               
          var key = localStorage.key(i);
                var value = localStorage.getItem(key);
        	 tblLocal.innerHTML += '<select id="f1" name="f1" class="form-control"disabled="disabled" ><option value="'+value+'">'+value+'</option><option value="女">女</option></select>';
        }
        if ((i-3)%5==0&&value=="女"){
              
          var key = localStorage.key(i);
                var value = localStorage.getItem(key);
        	 tblLocal.innerHTML += '<select id="f1" name="f1" class="form-control"disabled="disabled" ><option value="女">'+value+'</option><option value="男">男</option></select>';
        }
        if ((i-4)%5==0){
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);

         tblLocal.innerHTML += '<input type="text" name="f1" readonly="readonly" id="'+key+'" class="form-control f1" value= "'+value+'">'; 
        }
    }
         }
         // 修改会员
         var qr=document.getElementById("qr");
     qr.onclick=function(){
var controls=document.getElementsByName("f1");
for(var i=0;i<controls.length;i++)
{
	var qq= controls[i].value;
	// if (qq!==undefined){

   localStorage.setItem(localStorage.key(i), qq);

    }
}
// }
     // localStorage.removeItem(localStorage.key(i), qq);
     
// 编辑按钮
        
var sc=document.getElementById("sc");

      sc.onclick=function(){
var controls=document.getElementsByName("f1");
var qr=document.getElementById("qr");
// console.log(controls);
for(var i=0;i<controls.length;i++)
{
    controls[i].readOnly=false;
    controls[i].disabled="";
//     if ( controls.length%2!==0){
// controls[i].removeChild(input);
// controls[i].innerHTML+='<select id="xb" class="form-control"><option value="" disabled selected>选择性别：</option><option value="男">男</option><option value="女">女</option></select>'
// }
}
qr.style.display="";
}