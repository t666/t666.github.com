function addEvent(obj,sEv,fn){
	if (obj.attachEvent) {
		obj.attachEvent('on'+sEv,fn);
	} else{
		obj.addEventListener(sEv,fn,false);
	}
}
function removeEvent(obj,sEv,fn){
	if (obj.detachEvent) {
		obj.detachEvent('on'+sEv,fn);
	} else{
		obj.removeEventListener(sEv,fn,false);
	}
}
function toDou(iNum){
	return iNum<10?'0'+iNum:''+iNum;
}
function onmove(obj,obj1,sEv){
	function move(){
		obj.style.background='#fff';
		obj1.style.display='block';
	}
	addEvent(obj,sEv,move);
}
function onout(obj,obj1,sEv){
	function out(){
		obj.style.background='';
		obj1.style.display='none';
	}
	addEvent(obj,sEv,out);
}
function getByClass(obj,sClass){
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(sClass);
	} else{
		var aEla=obj.getElementsByTagName('*');
		var aResult=[];
		for (var i = 0; i < aEla.length; i++) {
			var aClass=aEla[i].className.split(' ');
			if(findInArr(aClass,sClass)){
				aResult.push(aEla[i]);
			}
		}
		return aResult;
	}
}
window.onload=function(){
	var oMymtl=document.getElementById('mymtl');
	var oMymt=document.getElementById('mymt');
	var oBuy=document.getElementById('buy');
	var oBuycar=document.getElementById('buycar');
	var oscanl=document.getElementById('scanl');
	var oscan=document.getElementById('scan');
	var ocontpl=document.getElementById('contpl');
	var ocontp=document.getElementById('contp');
	var operpl=document.getElementById('perpl');
	var operp=document.getElementById('perp');
	var omorel=document.getElementById('morel');
	var omore=document.getElementById('more');
	var oSj=document.getElementById('sj');
	var oErwei=document.getElementById('erwei');

	var oSec=document.getElementById('sec');
	var aLi=oSec.getElementsByTagName('li');
	var oEve=document.getElementById('eve');
	var aDiv=oEve.children;

	var oSide=document.getElementById('sidebar');
	var aDiv2=oSide.children;
	var oUl=document.getElementById('l_nav');
	var aLi2=oUl.children;
	var aB=oUl.getElementsByTagName('b');
	var oDiv=document.getElementById('left-nav');

	var aP1=getByClass(oUl,'p2');
	var oMoubtn=document.getElementById('mousebtn');

	
	
	for (var i = 0; i < aLi2.length; i++) {
		aLi2[i].index=i;
		aDiv2[i].index=i;
		aLi2[i].onmouseover=function(){
			for (var i = 0; i < aLi2.length; i++) {
				aLi2[i].className='';
				aDiv2[i].style.display='none';
				aLi2[i].style.paddingRight='0';
				aB[i].className='';
			}
			for (var i = 0; i < aP1.length; i++) {
				aP1[i].style.paddingRight='29px';
			}
			this.className='on';
			aDiv2[this.index].style.display='block';
			oDiv.style.borderLeft='1px solid #bdbdc7';
			oDiv.style.borderBottom='1px solid #bdbdc7';
			aB[this.index].className='on';
			

		};
		aLi2[i].onmouseout=function(){
			for (var i = 0; i < aLi2.length; i++) {
				aLi2[i].className='';
				aDiv2[i].style.display='none';
				aLi2[i].style.paddingRight='10px';
				aB[i].className='';
			}
			for (var i = 0; i < aP1.length; i++) {
				aP1[i].style.paddingRight='19px';
			}
			oDiv.style.borderLeft='';
			oDiv.style.borderBottom='';

		};
		aDiv2[i].onmouseover=function(){
			for (var i = 0; i < aLi2.length; i++) {
				aLi2[i].className='';
				aDiv2[i].style.display='none';
				aLi2[i].style.paddingRight='0';
				aB[i].className='';
			}
			for (var i = 0; i < aP1.length; i++) {
				aP1[i].style.paddingRight='29px';
			}
			aLi2[this.index].className='on';
			aDiv2[this.index].style.display='block';
			oDiv.style.borderLeft='1px solid #bdbdc7';
			oDiv.style.borderBottom='1px solid #bdbdc7';
			aB[this.index].className='on';
			oDiv.style.display='block';
			oMoubtn.className='left-nav left show'
		};
		aDiv2[i].onmouseout=function(){
			for (var i = 0; i < aLi2.length; i++) {
				aLi2[i].className='';
				aDiv2[i].style.display='none';
				aLi2[i].style.paddingRight='10px';
				aB[i].className='';
			}
			for (var i = 0; i < aP1.length; i++) {
				aP1[i].style.paddingRight='19px';
			}
			oDiv.style.borderLeft='';
			oDiv.style.borderBottom='';
			oDiv.style.display='none';
			oMoubtn.className='left-nav left'

		};
	}
	oMoubtn.onmouseover=function(){
		oDiv.style.display='block';
		oMoubtn.className='left-nav left show'
	};
	oDiv.onmouseover=function(){
		oDiv.style.display='block';
		oMoubtn.className='left-nav left show'
	};
	oDiv.onmouseout=function(){
		oDiv.style.display='none';
		oMoubtn.className='left-nav left'
	};
	oMoubtn.onmouseout=function(){
		oDiv.style.display='none';
		oMoubtn.className='left-nav left'
	};

	

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className='';
				aDiv[i].style.display='none';
			}
			this.className='on';
			aDiv[this.index].style.display='block';
		};
	}
	
	onmove(oMymtl,oMymt,'mouseover');
	onout(oMymtl,oMymt,'mouseout');
	onmove(oBuy,oBuycar,'mouseover');
	onout(oBuy,oBuycar,'mouseout');
	onmove(oscanl,oscan,'mouseover');
	onout(oscanl,oscan,'mouseout');
	onmove(ocontpl,ocontp,'mouseover');
	onout(ocontpl,ocontp,'mouseout');
	onmove(operpl,operp,'mouseover');
	onout(operpl,operp,'mouseout');
	onmove(omorel,omore,'mouseover');
	onout(omorel,omore,'mouseout');
	onmove(oSj,oErwei,'mouseover');
	onout(oSj,oErwei,'mouseout');
};











