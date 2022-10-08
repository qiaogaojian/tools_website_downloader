<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>TexturePacker</title>
	<link>http://www.devacg.com/?post=844</link>
	<description><![CDATA[官网: http://www.codeandweb.com/texturepacker 一、安装TexturePacker并设置环境变量 二、通过命令行为Unity生成图集 TexturePacker pics --sheet out.png --data out.txt - -texture-format png --trim-sprite-names --size-constraints POT --... <a href="http://www.devacg.com/?post=844">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Mon, 19 Nov 2018 07:08:47 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=844</guid>

</item>
<item>
	<title>UILabel支持的BBCode</title>
	<link>http://www.devacg.com/?post=789</link>
	<description><![CDATA[NGUI支持的BBCode [b]加粗[/b]、[i]倾斜[/i]、[u]下划线[/u]、[s]删除线[/s]、 [c]忽略颜色设置[/c]、[url=xxx]URL[/url]、[link=xxx]link[/link] 示例 Color Tint Red [c]ignore color[/c] [66]change alphal[ff] [u]underline[/u] [s]strike[/s] [i]italic[/i] [b]bold[/b] M[sup]2[/sup] X[sub]2[/sub... <a href="http://www.devacg.com/?post=789">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 03 Jul 2018 06:47:55 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=789</guid>

</item>
<item>
	<title>NGUI——让UILabel可以显示彩色文字</title>
	<link>http://www.devacg.com/?post=784</link>
	<description><![CDATA[一、修改UILabel.cs 1、增加个变量 public List Color  vertexColors = null; 2、修改OnFill()方法 <a href="http://www.devacg.com/?post=784">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 22 Jun 2018 09:31:02 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=784</guid>

</item>
<item>
	<title>NGUI渲染顺序规则</title>
	<link>http://www.devacg.com/?post=679</link>
	<description><![CDATA[渲染优先级 Camera   UIPanel   Widget Camera的Depth小的先渲染 UIPanel渲染排序优先级 Sort Layer   Sort Order   Render Q   Depth 同一个UIPanel下的Widget根据Depth排序 附上设置选项截图 ... <a href="http://www.devacg.com/?post=679">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sat, 07 Oct 2017 07:47:16 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=679</guid>

</item>
<item>
	<title>UILable添加预定义字体样式选项</title>
	<link>http://www.devacg.com/?post=653</link>
	<description><![CDATA[NGUI-3.8 一、修改UILabel.cs //------------------------------------------------- //            NGUI: Next-Gen UI kit // Copyright � 2011-2017 Tasharen Entertainment Inc //------------------------------------------------- using UnityEngine; using System.Collections.Generic; using... <a href="http://www.devacg.com/?post=653">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 22 Aug 2017 06:34:56 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=653</guid>

</item>
<item>
	<title>监听屏幕大小改变</title>
	<link>http://www.devacg.com/?post=496</link>
	<description><![CDATA[以下为NGUI源码 UICamera.cs void LateUpdate () { #if UNITY_EDITOR if (!Application.isPlaying || !handlesEvents) return; #else if (!handlesEvents) return; #endif int w = Screen.width; int h = Screen.height; if (w != mWidth || h != mHeight) { mWidth = w; mHeight = h; UIRoot... <a href="http://www.devacg.com/?post=496">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 10 Nov 2016 13:02:06 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=496</guid>

</item>
<item>
	<title>计算UIWidget的Bounds</title>
	<link>http://www.devacg.com/?post=495</link>
	<description><![CDATA[public static Bounds GetBounds(UIWidget w) { //4个角坐标 Vector3[] corners = w.localCorners; Bounds b = new Bounds(); b.center = Vector3.Lerp(corners[0], corners[2], 0.5f); b.size = corners[2] - corners[0]; return b; } <a href="http://www.devacg.com/?post=495">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 10 Nov 2016 12:07:15 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=495</guid>

</item>
<item>
	<title>NGUI绘制饼状图</title>
	<link>http://www.devacg.com/?post=315</link>
	<description><![CDATA[ <a href="http://www.devacg.com/?post=315">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Mon, 18 Jan 2016 11:22:03 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=315</guid>

</item>
<item>
	<title>NGUI的UISprite增加灰度处理</title>
	<link>http://www.devacg.com/?post=295</link>
	<description><![CDATA[一、修改Unlit - Transparent Colored.shader Shader Unlit/Transparent Colored { Properties { _MainTex (Base (RGB), Alpha (A), 2D) = white {} } SubShader { LOD 100 Tags { Queue = Transparent IgnoreProjector = True RenderType = Transparent } Cull ... <a href="http://www.devacg.com/?post=295">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 03 Dec 2015 06:23:43 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=295</guid>

</item>
<item>
	<title>UILabel设置行间距</title>
	<link>http://www.devacg.com/?post=107</link>
	<description><![CDATA[using UnityEngine; using System.Collections; public class TestUILabel : MonoBehaviour { public UILabel label; public int hspacing = 2; public int vspacing = 2; // Use this for initialization void Start () { label.font.horizontalSpacing = hspacing;//设置字间距 label.font.ve... <a href="http://www.devacg.com/?post=107">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 22 Aug 2014 09:44:16 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=107</guid>

</item></channel>
</rss>