<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>C运算符</title>
	<link>http://www.devacg.com/?post=1315</link>
	<description><![CDATA[C运算符 <a href="http://www.devacg.com/?post=1315">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 27 Aug 2020 01:12:03 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1315</guid>

</item>
<item>
	<title>复数：complex.h（C99）</title>
	<link>http://www.devacg.com/?post=1314</link>
	<description><![CDATA[C99标准支持复数计算，C11进一步支持了这个功能。实现除提供_Complex类型外还可以选择是否提供_Imaginary类型。在C11中，可以选择是否提供这两类型。C99规定，实现必须提供_Complex类型，但是_Imaginary类型是可选，可以提供或不提供。 <a href="http://www.devacg.com/?post=1314">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 26 Aug 2020 06:33:46 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1314</guid>

</item>
<item>
	<title>宽字符分类和映射工具：wctype.h（C99）</title>
	<link>http://www.devacg.com/?post=1312</link>
	<description><![CDATA[wctype.h库提供了一些与ctype.h中的字符函数类似的宽字符函数，以及其他函数。wctype.h还定义了下面三种类型和宏。 <a href="http://www.devacg.com/?post=1312">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Mon, 24 Aug 2020 09:48:27 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1312</guid>

</item>
<item>
	<title>扩展的多字节字符和宽字符工具：wchar.h（C99）</title>
	<link>http://www.devacg.com/?post=1311</link>
	<description><![CDATA[每种实现都有一个基本字符集，要求C的char类型足够宽，以便能处理这个字符集。实现还要支持扩展的字符集，这些字符集中的字符可能需要多字节来表示。可以把多字节字符与单字节字符一起储存在普通的char类型数组，用特定的字节值指定多字节字符本身及其大小。如何解释多字节字符取决于移位状态（shift state）。在最初的移位状态中，单字节字符保留其通常的解释。特殊的多字节字符可以改变移位状态。除非显式改变特定的移位状态，否则移位状态一直保持有效。 wchar_t类型提供另一种表示扩展字符的方法，该类型足够宽，可以表示扩展字符集中任何成员的编码。用这种宽字符类型来表示字符时，可以把单字符储存在wchar_t类型的变量中，把宽字符的字符串储存在wchar_t类... <a href="http://www.devacg.com/?post=1311">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 19 Aug 2020 08:50:00 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1311</guid>

</item>
<item>
	<title>统一码工具：uchar.h（C11）</title>
	<link>http://www.devacg.com/?post=1310</link>
	<description><![CDATA[C99的wchar.h头文件提供两种途径支持大型字符集。C11专门针对统一码（Unicode）新增了适用于UTF-16和UTF-32编码的类型 <a href="http://www.devacg.com/?post=1310">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 18 Aug 2020 01:27:38 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1310</guid>

</item>
<item>
	<title>对复数的支持</title>
	<link>http://www.devacg.com/?post=1309</link>
	<description><![CDATA[复数是有实部和虚部的数。实部是普通的实数，如浮点类型表示的数。虚部表示一个虚数。虚数是-1的平方根的倍数。在数学中，复数通常写作类似4.2+2.0i的形式，其中i表示-1的平方根。  C99支持3种复数类型（C11中为可选）：  float _Complex  double _Complex  long double _Complex 例如，储存float _Complex类型的值时，使用与两个float类型元素的数组相同的内存布局，实部储存在第1个元素中，虚部值储存在第2个元素中。  C99和C11还支持下面3种虚类型：  float _Imaginary  double _... <a href="http://www.devacg.com/?post=1309">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 12 Aug 2020 08:15:55 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1309</guid>

</item>
<item>
	<title>math.h库增补</title>
	<link>http://www.devacg.com/?post=1308</link>
	<description><![CDATA[大部分C90数学库中都声明了double类型参数和double类型返回值的函数，例如：  double sin(double);  double sqrt(double); C99和C11库为所有这些函数都提供了float类型和long double类型的函数。这些函数的名称由原来函数名加上f或l后缀构成，例如：  float sinf(float); /* sin()的float版本 */  long double sinl(long double); /* sin()的long double版本 */  有了这些不同精度的函数系列，用户可以根据具体情况选择最效率的类型和函数组合。 <a href="http://www.devacg.com/?post=1308">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 06 Aug 2020 03:40:41 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1308</guid>

</item>
<item>
	<title>STDC FP_CONTRACT编译指示</title>
	<link>http://www.devacg.com/?post=1307</link>
	<description><![CDATA[一些浮点数处理器可以把多个运算符的浮点表达式合并成一个运算。例如，处理器只需一步就求出下面表达式的值： x*y - z 这加快了运算速度，但是减少了运算的可预测性。STDC FP_CONTRACT编译指示允许用户开启或关闭这个特性。默认状态取决于实现。 为特定运算关闭合并特性，然后再开启，可以这样做： #pragma STDC FP_CONTRACT OFF val = x * y - z; #pragma STDC FP_CONTRACT ON <a href="http://www.devacg.com/?post=1307">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 05 Aug 2020 01:14:42 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1307</guid>

</item>
<item>
	<title>fenv.h头文件</title>
	<link>http://www.devacg.com/?post=1306</link>
	<description><![CDATA[fenv.h头文件提供一些与浮点环境交互的方法。也就是说，允许用户设置浮点控制模式值（该值管理如何执行浮点运算）并确定浮点状态标志（或异常）的值（报告运算效果的信息）。例如，控制模式设置可指定舍入的方案；如果运算出现浮点溢出则设置一个状态标志。设置状态标志的操作叫作抛出异常。    状态标志和控制模式只有在硬件支持的前提下才能发挥作用。例如，如果硬件没有这些选项，则无法更改舍入方案。 使用下面的编译指示开启支持：  #pragma STDC FENV_ACCESS ON  这意味着程序到包含该编译指示的块末尾一直支持，或者如果该编译... <a href="http://www.devacg.com/?post=1306">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 04 Aug 2020 01:19:21 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1306</guid>

</item>
<item>
	<title>C99/C11数值计算增强</title>
	<link>http://www.devacg.com/?post=1303</link>
	<description><![CDATA[过去，FORTRAN是数值科学计算和工程计算的首选语言。C90使C的计算方法更接近于FORTRAN。例如，float.h中使用的浮点特性规范都是基于FORTRAN标准委员会开发的模型。C99和C11标准继续增强了C的计算能力。例如C99新增的变长数组（C11成为可选的特性），比传统的C数组更符合FORTRAN的用法（如果实现不支持变长数组，C11指定了__STDC_NO_VLA__宏的值为1）。 IEC浮点标准     国际电工技术委员会（IEC）已经发布了一套浮点... <a href="http://www.devacg.com/?post=1303">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 21 Jul 2020 12:50:31 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1303</guid>

</item></channel>
</rss>