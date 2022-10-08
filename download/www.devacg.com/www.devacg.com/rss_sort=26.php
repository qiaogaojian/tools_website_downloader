<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>node.js操作Excel</title>
	<link>http://www.devacg.com/?post=841</link>
	<description><![CDATA[一、安装node-xlsx npm install node-xlsx -g 安装成功后node_module... <a href="http://www.devacg.com/?post=841">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 16 Nov 2018 09:04:06 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=841</guid>

</item>
<item>
	<title>示例——Localization.ts</title>
	<link>http://www.devacg.com/?post=840</link>
	<description><![CDATA[示例 Localization.ts /** * 本地化 */ class Localization { private static _dic: {[key: string]: string} = {}; private constructor() { } public static loadString(str: string) { if (Localization.isNullOrEmpty(str)) { return ; } var lineArr: Array string  = s... <a href="http://www.devacg.com/?post=840">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 16 Nov 2018 07:56:44 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=840</guid>

</item>
<item>
	<title>TypeScript泛型</title>
	<link>http://www.devacg.com/?post=839</link>
	<description><![CDATA[示例一 class A {} class B { //定义属性name private _name: string = 名字; public get name() { return this._name; } public set name(value: string) { this._name = value; } } class GenericNumber T  { } //使用泛型定义工厂函数 function createFactory T (c: {new(): T; }): T { return ... <a href="http://www.devacg.com/?post=839">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 16 Nov 2018 06:01:39 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=839</guid>

</item>
<item>
	<title>typeof与instanceof</title>
	<link>http://www.devacg.com/?post=838</link>
	<description><![CDATA[示例 class A {public age: number} class B { //定义属性name private _name: string; public get name() { return this._name; } public set name(value: string) { this._name = value; } } function checkInstanceof(value: A | B) { if (value instanceof A) { console.log(instanceof A); ... <a href="http://www.devacg.com/?post=838">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 16 Nov 2018 03:28:35 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=838</guid>

</item>
<item>
	<title>for..in与for..of语法</title>
	<link>http://www.devacg.com/?post=837</link>
	<description><![CDATA[示例 //注意: 编译目标为ES5或ES3时,迭代器只允许在Array类型上使用 let list = [4, 5, 6]; //for..in迭代的是对象的键 for (let i in list) { console.log(i); // 0, 1, 2, } //for..of则迭代对象的键对应的值 for (let i of list) { console.log(i); // 4, 5, 6 } 运行测试 <a href="http://www.devacg.com/?post=837">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 15 Nov 2018 13:09:39 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=837</guid>

</item>
<item>
	<title>TypeScript联合类型</title>
	<link>http://www.devacg.com/?post=836</link>
	<description><![CDATA[示例 /** //不要为仅在某个位置上的参数类型不同的情况下定义重载 function fn(x: number) { return number类型+x; } function fn(x: string) { return string类型+x; } */ //应该尽可能地使用联合类型 function fn(x: number|string) { return 联合类型: +x+(+typeof(x)+); } console.log(fn(5)); console.log(fn(ssss)); ... <a href="http://www.devacg.com/?post=836">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 15 Nov 2018 09:57:16 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=836</guid>

</item>
<item>
	<title>查看当前node.js版本对es6的支持程度</title>
	<link>http://www.devacg.com/?post=833</link>
	<description><![CDATA[一、安装Node.js并配置环境变量 二、通过es-checker工具查看当前node版本对es6的支持程度 在cmd中输入 npm install -g es-checker es-checker <a href="http://www.devacg.com/?post=833">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 11 Nov 2018 09:01:33 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=833</guid>

</item>
<item>
	<title>Notepad++配置TypeScript开发环境</title>
	<link>http://www.devacg.com/?post=778</link>
	<description><![CDATA[转自https://blog.csdn.net/madrabbit1987/article/details/76152913  一、下载Node.js https://nodejs.org/en/download/ 二、配置环境变量 三、安装tsc  npm inst... <a href="http://www.devacg.com/?post=778">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 15 May 2018 10:43:49 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=778</guid>

</item></channel>
</rss>