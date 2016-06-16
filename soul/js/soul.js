function Select(x,y,z)
	{	
		
		var oUl_btn=document.getElementById(x);
		var aLi_btn=oUl_btn.getElementsByTagName('li');
		var oDiv_hot=document.getElementById(y);
		var aUl=oDiv_hot.getElementsByTagName(z);
		var timer=null;
		var iNew=0;
		function tick(){
				for(var i=0; i<aLi_btn.length;i++){
						aUl[i].className='';
						aLi_btn[i].className='';
					}
				aUl[iNew].className='active';
				aLi_btn[iNew].className='li-btn';
			}
		timer=setInterval(function(){
			iNew++;
			if (iNew==aLi_btn.length) {
				iNew=0;
			}
			tick();
		},3000);
		for(var i=0; i<aLi_btn.length;i++){
			aLi_btn[i].index=i;
			aLi_btn[i].onmouseover=function(){
			 iNew=this.index;
				for(var i=0; i<aLi_btn.length;i++){
						aUl[i].className='';
						aLi_btn[i].className='';
					}
				aUl[iNew].className='active';
				aLi_btn[iNew].className='li-btn';
			};	
		}
	}
		

function Mouse(x,y)
	{
		var oLi=document.getElementById(x);
		var oMouse=document.getElementById(y);
		oLi.onmouseover=function(){
				oMouse.style.display='block';
			};
		oLi.onmouseout=function(){
				oMouse.style.display='none';
			};
	}
window.onload=function(){
		
		Select('ul-btn','ul-xin','li');
		
		Select('ul-btn1','ul-img','li');
		
		
		Select('ul-btn3','ul-text','li');
		Select('ul-btn4','ul-text1','li');
		
		Mouse('fuwu','fuwu-box');
		Mouse('lixin','xinwen');
		Mouse('lizhi','zhinan');
		Mouse('libi','bizhi');
		
		var oUl_btn1=document.getElementById('ul-btn2')
		var aLi_btn1=oUl_btn1.getElementsByTagName('li');
		var oUl_img1=document.getElementById('ul-img1');
		var aLi_img1=oUl_img1.getElementsByTagName('li');
		var timer=null;
		var iNew=0;
		function tick(){
				for(var i=0; i<aLi_btn1.length;i++){
						aLi_btn1[i].className='li'+i+'';
						aLi_img1[i].className='';
					}
				aLi_img1[iNew].className='active';
				aLi_btn1[iNew].className='li'+iNew+' ali'+iNew+'';
			}
		timer=setInterval(function(){
			iNew++;
			if (iNew==aLi_btn1.length) {
				iNew=0;
			}
			tick();
		},3000);
		for(var i=0; i<aLi_btn1.length;i++){
			aLi_btn1[i].index=i;
			aLi_btn1[i].onmouseover=function(){
				iNew=this.index;
				for(var i=0; i<aLi_btn1.length;i++){
						aLi_btn1[i].className='li'+i+'';
						aLi_img1[i].className='';
					}
				aLi_img1[iNew].className='active';
				aLi_btn1[iNew].className='li'+this.index+' ali'+this.index+'';
			};	
		}
	};