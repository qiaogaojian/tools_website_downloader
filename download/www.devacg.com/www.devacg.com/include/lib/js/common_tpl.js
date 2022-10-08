function focusEle(ele){
	try {document.getElementById(ele).focus();}
	catch(e){}
}
function updateEle(ele,content){
	document.getElementById(ele).innerHTML = content;
}
function timestamp(){
	return new Date().getTime();
}
var XMLHttp = {  
	_objPool: [],
	_getInstance: function () {
		for (var i = 0; i < this._objPool.length; i ++) {
			if (this._objPool[i].readyState == 0 || this._objPool[i].readyState == 4) {
				return this._objPool[i];
			}
		}
		this._objPool[this._objPool.length] = this._createObj();
		return this._objPool[this._objPool.length - 1];
	},
	_createObj: function(){
		if (window.XMLHttpRequest){
			var objXMLHttp = new XMLHttpRequest();
		} else {
			var MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
			for(var n = 0; n < MSXML.length; n ++){
				try{
					var objXMLHttp = new ActiveXObject(MSXML[n]);
					break;
				}catch(e){}
			}
		}
		if (objXMLHttp.readyState == null){
			objXMLHttp.readyState = 0;
			objXMLHttp.addEventListener('load',function(){
				objXMLHttp.readyState = 4;
				if (typeof objXMLHttp.onreadystatechange == "function") {  
					objXMLHttp.onreadystatechange();
				}
			}, false);
		}
		return objXMLHttp;
	},
	sendReq: function(method, url, data, callback){
		var objXMLHttp = this._getInstance();
		with(objXMLHttp){
			try {
				if (url.indexOf("?") > 0) {
					url += "&randnum=" + Math.random();
				} else {
					url += "?randnum=" + Math.random();
				}
				open(method, url, true);
				setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				send(data);
				onreadystatechange = function () {  
					if (objXMLHttp.readyState == 4 && (objXMLHttp.status == 200 || objXMLHttp.status == 304)) {  
						callback(objXMLHttp);
					}
				}
			} catch(e) {
				alert('emria:error');
			}
		}
	}
};
function sendinfo(url,node){
	updateEle(node,"<div><span style=\"background-color:#FFFFE5; color:#666666;\">加载中...</span></div>");
	//Yang Liu
	if(url.indexOf("blog1314.com/?") != -1){
		url = url.replace("blog1314.com/?", "blog1314.com/index.php?");
	}
	//end
	XMLHttp.sendReq('GET',url,'',function(obj){updateEle(node,obj.responseText);});
}
function loadr(url,tid){
	url = url+"&stamp="+timestamp();
	var r=document.getElementById("r_"+tid);
	var rp=document.getElementById("rp_"+tid);
	if (r.style.display=="block"){
		r.style.display="none";
		rp.style.display="none";
	} else {
		r.style.display="block";
		r.innerHTML = '<span style=\"background-color:#FFFFE5;text-align:center;font-size:12px;color:#666666;\">加载中...</span>';
		XMLHttp.sendReq('GET',url,'',function(obj){r.innerHTML = obj.responseText;rp.style.display="block";});
	}
}
function reply(url,tid){
	var rtext=document.getElementById("rtext_"+tid).value;
	var rname=document.getElementById("rname_"+tid).value;
	var rcode=document.getElementById("rcode_"+tid).value;
	var rmsg=document.getElementById("rmsg_"+tid);
	var rn=document.getElementById("rn_"+tid);
	var r=document.getElementById("r_"+tid);
	var data = "r="+rtext+"&rname="+rname+"&rcode="+rcode+"&tid="+tid;
	XMLHttp.sendReq('POST',url,data,function(obj){
		if(obj.responseText == 'err1'){rmsg.innerHTML = '(回复长度需在140个字内)';
		}else if(obj.responseText == 'err2'){rmsg.innerHTML = '(昵称不能为空)';
		}else if(obj.responseText == 'err3'){rmsg.innerHTML = '(验证码错误)';
		}else if(obj.responseText == 'err4'){rmsg.innerHTML = '(不允许使用该昵称)';
		}else if(obj.responseText == 'err5'){rmsg.innerHTML = '(已存在该回复)';
		}else if(obj.responseText == 'err0'){rmsg.innerHTML = '(禁止回复)';
		}else if(obj.responseText == 'succ1'){rmsg.innerHTML = '(回复成功，等待管理员审核)';
		}else{r.innerHTML += obj.responseText;rn.innerHTML = Number(rn.innerHTML)+1;rmsg.innerHTML=''}});
}
function re(tid, rp){
	var rtext=document.getElementById("rtext_"+tid).value = rp;
	focusEle("rtext_"+tid);
}
function commentReply(pid,c){
	var response = document.getElementById('comment-post');
	document.getElementById('comment-pid').value = pid;
	document.getElementById('cancel-reply').style.display = '';
	c.parentNode.parentNode.appendChild(response);
}
function cancelReply(){
	var commentPlace = document.getElementById('comment-place'),response = document.getElementById('comment-post');
	document.getElementById('comment-pid').value = 0;
	document.getElementById('cancel-reply').style.display = 'none';
	commentPlace.appendChild(response);
}
//YangLiu 2014-6-14
function trim(s){
	if(null == s || '' == s)
		return '';
	var white = ' \b\r\n\f\t';
	var i,j;
	for(i=0; i<s.length;){
		if(white.indexOf(s[i]) == -1)
			break;
		i++;
	}
	s = s.substring(i);
	for(j=s.length-1; j>=0;){
		if(white.indexOf(s[j]) == -1)
			break;
		j--;
	}
	s = j >= 0 ? s.substring(0, j+1) : '';
	return s;
}
function getCookie(name){
	var cookies = document.cookie.split(';');
	for(var i=0; i<cookies.length; i++){
		var cookie = cookies[i];
		if(cookie.indexOf('=') != -1){
			var fields = cookie.split('=');
			if(trim(fields[0]) == name){
				return unescape(fields[1]);
			}
		}
	}
	return '';
}
var AUTH_COOKIE = 'EM_AUTHCOOKIE_9nPxCmxoc8j9X8wvqvfN8E8er2kYDNfX';
function getCookieAuth(){
	var auth = getCookie(AUTH_COOKIE);
	if('' != auth)
		auth = auth.split('|')[0];
	return auth;
}
function showLoginInfo(){
	var auth = getCookieAuth();
	if('' != auth)
		updateEle('auth', '<a href="#" onclick="toLogin"><img src="content/templates/default/images/qq_login.png" /></a>');
	else
		updateEle('auth', '<h4><a href="#">登录</a> | <a href="#">注册</a></h4>');
}
function toLogin(){
	var A=window.open("oauth/index.php","TencentLogin", 
   "width=450,height=320,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1");
}
//end

//custom
function createCatalog(id, data){
	var id = document.getElementById(id);
	var domain = document.domain;
	var template = "<li><a href=\"http://{domain}/?post={0}\" target=\"_blank\">{1}</a></li>";
	template = template.replace("{domain}", domain);
	var catalogArr = [];
	var html;
	for(var i=0; i<data.length; i++){
		//有子目录
		if(data[i].children != undefined){
			html = createCatalogSub(data[i].name, data[i].children);
			catalogArr.push(html);
		}else{
			var tpl = template.replace("{0}", data[i].post);
			tpl = tpl.replace("{1}", encodeHtml(data[i].name));
			catalogArr.push(tpl);
		}
	}
	html = catalogArr.join("");
	id.innerHTML = html;
}

function createCatalogSub(name, children){
	var sub_catalogArr = [];
	var domain = document.domain;
	var template = "<li><a href=\"http://{domain}/?post={0}\" target=\"_blank\">{1}</a></li>";
	template = template.replace("{domain}", domain);
	var sub_template = "<li>"+name+"<ul type=\"disc\" style=\"margin-left:-22px;\">{0}</ul></li>";
	for(var j=0; j<children.length; j++){
		var child = children[j];
		if(child.children != undefined){
			var subContent = createCatalogSub(child.name, child.children);
			sub_catalogArr.push(subContent);
		}else{
			tpl = template.replace("{0}", child.post);
			tpl = tpl.replace("{1}", encodeHtml(child.name));
			sub_catalogArr.push(tpl);
		}
	}
	html = sub_catalogArr.join("");
	sub_template = sub_template.replace("{0}", html);
	return sub_template;
}

//custom
function createChapter(id, data){
	var id = document.getElementById(id);
	var template = "<li><a href=\"#{0}\">{1}</a></li>";
	var catalogArr = [];
	var html;
	for(var i=0; i<data.length; i++){
		var tpl = template.replace("{0}", data[i].id);
		tpl = tpl.replace("{1}", encodeHtml(data[i].name));
		catalogArr.push(tpl);
	}
	html = catalogArr.join("");
	id.innerHTML = "<div class=\"custom_warning\">目录<ul>"+html+"</ul></div>";
}

function encodeHtml(s){
	s = s.replace("<", "&lt;");
	s = s.replace(">", "&gt;");
	return s;
}

//将pre中的代码注释标签替换成html标签
function replaceCodeSummary()
{
	var pres = document.getElementsByTagName("pre");
	for (var i=0; i<pres.length; i++) {
		var html = pres[i].innerHTML;
		if (html == null) continue;
		html = html.replace(new RegExp("<code_summary>", "gm"), "<span class=\"example_code_summary\">").replace(new RegExp("</code_summary>", "gm"), "</span>");
		pres[i].innerHTML = html;
	}
}

//页面加载完成后调用
function onloadPage()
{
	replaceCodeSummary();
}