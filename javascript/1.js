var sNum1 = '';            //用于存放前一个数
var sOpr = '';             //运算符
var bNeedClear = false;    //输入数字时，屏幕不清零，为false；



function calc(iNum1 , iNum2 , sOpr){
	var iResult = 0;
	switch(sOpr){
		case'×'	:
			iResult = iNum1*iNum2;
			break;
		case'+':
			iResult = iNum1+iNum2;
			break;
		case'-'	:
			iResult = iNum1-iNum2;
			break;
		case'÷':
			iResult = iNum1/iNum2;
			break;
		default:
			iResult = iNum2;
	};
	return iResult;
};

function doInput(){
	var oInput = document.getElementById('input1');
	var sHtml = this.innerHTML.replace('','');
	switch(sHtml){
		case "=":
			oInput.value = calc(parseInt(sNum1) , parseInt(oInput.value) , sOpr);
			sNum1 = '';
			sOpr = '';
			bNeedClear = true;
			break;
		case "+":
		case "-":
		case "×":
		case "÷":
			bNeedClear = true;
			if(sNum1!=0){
				oInput.value = calc(parseInt(sNum1) , parseInt(oInput.value) , sOpr);
			}
			sOpr = sHtml;
			sNum1 = oInput.value;
			break;
		case "C":
			oInput.value = 0;
			sOpr = '';
			sNum1 ='';
			break;
		default:
			if(bNeedClear){
				oInput.value = parseInt(sHtml , 10);
			}else{
				oInput.value = parseInt(oInput.value+sHtml , 10)
				
			};
			break;
	};
};

window.onload = function(){
	var aLi = document.getElementsByTagName('li');
	var i = 0;
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick = doInput;
		aLi[i].onmouseover = function(){
			this.className = "active";
		};
		aLi[i].onmouseout = function(){
			this.className = "";
		};
	};
};




















