<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>Python安装Protobuf</title>
	<link>http://www.devacg.com/?post=904</link>
	<description><![CDATA[一、如果没安装Python，先下载并安装  查看Python版本及安装路径 <a href="http://www.devacg.com/?post=904">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 29 Jan 2019 13:09:20 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=904</guid>

</item>
<item>
	<title>魔法方法、属性和迭代器</title>
	<link>http://www.devacg.com/?post=733</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #魔法方法、属性和迭代器 class NewStyle(object):#继承object的类作为新式类 pass #这句声明之后定义的类都为新式类 __metaclass__ = type #使用新式类 #在Python3.0中都是新式类,不需要显示声明. class FooBar: def __init__(self): #定义构造方法 self.somevar = 42 class FooBar1: def __init__(self, value=42):... <a href="http://www.devacg.com/?post=733">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 19 Dec 2017 07:24:28 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=733</guid>

</item>
<item>
	<title>异常</title>
	<link>http://www.devacg.com/?post=732</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #异常 #使用raise函数引发异常 #raise Exception #raise Exception('hyperdrive overload') #自定义错误信息 import exceptions #dir函数可列出模块内容 #exceptions模块中的异常类都可用在raise语句中 #Exception是所有异常类的基类 print dir(exceptions) #定义自己的异常类 #必须直接或间接继承Exception class SomeCustomExcept... <a href="http://www.devacg.com/?post=732">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 15 Dec 2017 13:37:57 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=732</guid>

</item>
<item>
	<title>类</title>
	<link>http://www.devacg.com/?post=731</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #类型检查 x = (1,2,3) print isinstance(x, tuple) #是否为元组类型 print isinstance(x, list) #是否为列表类型 print isinstance(x, str) #是否为字符串类型 print isinstance(x, dict) #是不为字典类型 print isinstance(x, int) #是否为整型 print isinstance(x, float) #是否为浮点型 #count函数: 统计字符出现的个数 print 'abca'.co... <a href="http://www.devacg.com/?post=731">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 15 Dec 2017 07:59:20 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=731</guid>

</item>
<item>
	<title>函数</title>
	<link>http://www.devacg.com/?post=730</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #函数 #内建的callable函数可以用来判断函数是否可调用 #callable在Python3.0中不再可用,需要使用表达式hasattr(func, __call__)代替。 print '判断函数是否可调用' import math x = 1 y = math.sqrt print callable(x) print callable(y) #定义函数 def hello(name): return 'Hello, ' + name + '!' def hello_1(greeting, ... <a href="http://www.devacg.com/?post=730">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 13 Dec 2017 07:21:18 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=730</guid>

</item>
<item>
	<title>循环语句</title>
	<link>http://www.devacg.com/?post=729</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #while循环 x = 1 while x  = 5: print x x += 1 #Python中的语句块是用缩排来识别的 #让用户必须输入名字,不能输入空字符 name = '' while not name or name.isspace(): #while not name.strip(): name = raw_input(Please enter your name: ) print 'Hello, %s!' % name #for循环 words = [... <a href="http://www.devacg.com/?post=729">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 12 Dec 2017 13:42:02 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=729</guid>

</item>
<item>
	<title>if条件语句</title>
	<link>http://www.devacg.com/?post=728</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*-
print '条件和条件语句'
#下面的值会被解释器看作假(false)
#False、None、0、、()、[]、{} #显示转换布尔值
print bool('I think, therefore I am') #if语句
#短路逻辑(惰性求值),类似三元运算.
#如果raw_input()返回假(即,空字符串),则执行or后面的
name = raw_input('What is your name? ') or ' unknown '
if name.endswith('Gumby'): print 'Hello... <a href="http://www.devacg.com/?post=728">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 12 Dec 2017 08:40:37 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=728</guid>

</item>
<item>
	<title>赋值操作</title>
	<link>http://www.devacg.com/?post=727</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- #print打印多条语句,用逗号隔开 print 'Age:', 42 print 1,2,3 name = 'Gumby' salutation = 'Mr.' greeting = 'Hello,' #多条语句会自动以空格分开 print greeting, salutation, name #以逗号结尾的话,Hello world!会被输出到同一行。 print 'Hello', print 'world!' #模块导入方式 #import 模块名 #或者 #from 模块名 import 函... <a href="http://www.devacg.com/?post=727">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 12 Dec 2017 07:15:57 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=727</guid>

</item>
<item>
	<title>字典</title>
	<link>http://www.devacg.com/?post=726</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- names = ['Alice', 'Beth', 'Cecil', 'Dee-Dee', 'Earl'] numbers = ['2341', '9102', '3158', '0142', '5551'] print numbers[names.index('Cecil')] #字典 #键: 可以是任意的不可变类型，比如浮点型(实型)、字符串或者元组 phonebook = {'Alice':'2341', 'Beth':'9102','Cecil':'3258'} #dict和list、tuple、str一样都是... <a href="http://www.devacg.com/?post=726">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Mon, 11 Dec 2017 07:49:35 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=726</guid>

</item>
<item>
	<title>字符串方法</title>
	<link>http://www.devacg.com/?post=725</link>
	<description><![CDATA[示例 # -*- coding: cp936 -*- import string from string import digits,letters,lowercase,printable,punctuation,uppercase print '字符串常量' print digits #包含数字0~9的字符串 print letters #包含所有字母(大写或小写)的字符串 print lowercase #包含所有小写字母的字符串 print printable #包含所有可打印字符的字符串 print punctuation #包含所有标点的字符串 print uppe... <a href="http://www.devacg.com/?post=725">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sat, 09 Dec 2017 10:36:42 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=725</guid>

</item></channel>
</rss>