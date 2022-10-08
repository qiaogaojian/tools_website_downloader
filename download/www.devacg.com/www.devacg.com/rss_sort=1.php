<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>麦克风(Microphone)</title>
	<link>http://www.devacg.com/index.php?post=1426</link>
	<description><![CDATA[using System.Collections; using System.Collections.Generic; using UnityEngine; ///  summary  /// 麦克风辅助类 ///  /summary  public sealed class MicrophoneHelper { //获取设备名称 public static string GetDeviceName() { string[] devices = Microphone.devices; if (devices == null |... <a href="http://www.devacg.com/index.php?post=1426">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 08 Feb 2022 04:04:34 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1426</guid>

</item>
<item>
	<title>WebRTC For Unity</title>
	<link>http://www.devacg.com/index.php?post=1425</link>
	<description><![CDATA[WebRTC官网  WebRTC for Unity  Unity WebRTC Package <a href="http://www.devacg.com/index.php?post=1425">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Mon, 07 Feb 2022 04:14:47 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1425</guid>

</item>
<item>
	<title>Pro GIF Plugin for Unity</title>
	<link>http://www.devacg.com/index.php?post=1422</link>
	<description><![CDATA[https://www.swanob2.com/progif 一款强大的播放、录制GIF的插件 <a href="http://www.devacg.com/index.php?post=1422">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 20 Jan 2022 08:41:49 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1422</guid>

</item>
<item>
	<title>亮度&amp;对比度&amp;饱和度</title>
	<link>http://www.devacg.com/index.php?post=1420</link>
	<description><![CDATA[Shader Custom/Unlit/Texture { Properties{ _MainTex(Base (RGB), 2D) = white {} //亮度值 _Brightness(Brightness, float) = 20 //对比度 _Contrast(Contrast, float) = 1.18 //饱和度 _Saturation(Saturation, float) = 1 } SubShader{ Tags { Ren... <a href="http://www.devacg.com/index.php?post=1420">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 07 Jan 2022 09:45:04 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1420</guid>

</item>
<item>
	<title>游戏版本号检测</title>
	<link>http://www.devacg.com/index.php?post=1419</link>
	<description><![CDATA[一、在游戏代码中记录版本号，方便获取 using System; using System.IO; using UnityEngine; using UnityEditor; ///  summary  /// 自动在代码中记录 verion、bundleVersionCode /// 参考 https://blog.csdn.net/zxsean/article/details/52117146 /// 将此脚本放到Editor目录下 ///  /summary  [InitializeOnLoad] public class VersionCheckEdi... <a href="http://www.devacg.com/index.php?post=1419">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 07 Jan 2022 04:05:35 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1419</guid>

</item>
<item>
	<title>游戏定时器</title>
	<link>http://www.devacg.com/index.php?post=1418</link>
	<description><![CDATA[using System.Collections.Generic; using UnityEngine; using UnityEngine.Events; ///  summary  /// 游戏定时器 ///  /summary  public class GameTimer : MonoBehaviour { public static GameTimer Instance { get; private set; } private List Context  contexts = new List Context (); ... <a href="http://www.devacg.com/index.php?post=1418">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 06 Jan 2022 08:10:32 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1418</guid>

</item>
<item>
	<title>Tree Editor (树编辑器)</title>
	<link>http://www.devacg.com/index.php?post=1417</link>
	<description><![CDATA[官方文档 Tree Editor (树编辑器) 构建第一棵树 一、创建树干 1、GameObject- 3D Object- Tree 此时树包含两个节点: Tree Root Note、Branch Group 二、创建树枝 1、选中 Branch Group 点击 Add Bran... <a href="http://www.devacg.com/index.php?post=1417">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 04 Jan 2022 07:25:30 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1417</guid>

</item>
<item>
	<title>模型淡入淡出</title>
	<link>http://www.devacg.com/index.php?post=1416</link>
	<description><![CDATA[Shader Shader Custom/HalfMask { Properties { _MainTex (Texture, 2D) = white {} _Color (Color, Color) = (1, 1, 0, 0) _Height(Height, range(0, 1)) = 1 _Fade (Fade, range(0.1, 1.0)) = 1 } SubShader { Tags { Queue = Transparen... <a href="http://www.devacg.com/index.php?post=1416">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 29 Dec 2021 10:40:29 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1416</guid>

</item>
<item>
	<title>导航箭头</title>
	<link>http://www.devacg.com/index.php?post=1415</link>
	<description><![CDATA[一、路径指向箭头 1、创建shader //导航箭头 Shader Custom/NavPathArrow { Properties { _MainTex (Texture, 2D) = white {} _ScrollYSpeed(Y Scroll Speed, Range(-20, 20)) = 2 } SubShader { Tags { Queue = ... <a href="http://www.devacg.com/index.php?post=1415">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 21 Dec 2021 07:12:30 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1415</guid>

</item>
<item>
	<title>事件系统(UnityEngine.EventSystems)</title>
	<link>http://www.devacg.com/index.php?post=1413</link>
	<description><![CDATA[https://docs.unity3d.com/Packages/com.unity.ugui@1.0/api/UnityEngine.EventSystems.html 注意：非UGUI元素要响应事件，需要在 Camera 上添加 PhysicsRaycaster 组件。 <a href="http://www.devacg.com/index.php?post=1413">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sat, 11 Dec 2021 11:02:01 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1413</guid>

</item></channel>
</rss>