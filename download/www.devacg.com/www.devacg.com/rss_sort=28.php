<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>Matlib——图像噪声分类</title>
	<link>http://www.devacg.com/?post=815</link>
	<description><![CDATA[示例 %读入图像
M = imread('noise.png');
%生成灰度图
I = rgb2gray(M);
%显示灰度图
figure, imshow(I), title('灰度图');
%高斯白噪声
J1 = imnoise(I, 'gaussian');
figure, imshow(J1), title('高斯白噪声'); %与图像灰度值有关的零均值高斯白噪声
%J2 = imnoise(I, 'localvar', v); %没搞懂后面这个参数
%figure, imshow(J2), title('与图像灰度值有关的零均值高斯白噪声'); %泊松噪声
J3 = imnoise(I, 'poiss... <a href="http://www.devacg.com/?post=815">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 26 Aug 2018 13:37:33 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=815</guid>

</item>
<item>
	<title>Matlib——二维傅里叶变换</title>
	<link>http://www.devacg.com/?post=812</link>
	<description><![CDATA[在线对图像做傅里叶变换https://sci2fig.herokuapp.com/fourier 尺寸为M×N的离散函数f(x,y)的二维离散傅里叶变换(Discrete Fourier Transform, DFT)如下 <a href="http://www.devacg.com/?post=812">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sat, 18 Aug 2018 03:15:24 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=812</guid>

</item>
<item>
	<title>Matlab——开发环境</title>
	<link>http://www.devacg.com/?post=811</link>
	<description><![CDATA[一、下载Matlab http://dl.pconline.com.cn/download/360588.html 二、把下载好的 <a href="http://www.devacg.com/?post=811">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Aug 2018 15:52:43 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=811</guid>

</item></channel>
</rss>