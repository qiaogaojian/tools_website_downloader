<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>图片合成</title>
	<link>http://www.devacg.com/index.php?post=1423</link>
	<description><![CDATA[///  summary  /// 图片合成辅助类 ///  /summary  public sealed class CombinImageHelper { //合成多张图片 public static Image CombinImage(params string[] filePathArr) { Image img0 = Image.FromFile(filePathArr[0]); Graphics g = Graphics.FromImage(img0); for (int i = 1; i   filePathArr.Length; i++) ... <a href="http://www.devacg.com/index.php?post=1423">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 28 Jan 2022 03:05:25 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1423</guid>

</item>
<item>
	<title>LZW压缩算法</title>
	<link>http://www.devacg.com/index.php?post=1421</link>
	<description><![CDATA[using System; using System.Text; using System.Collections; using System.Collections.Generic; using System.IO; namespace LZWTest { class Program { static void Main(string[] args) { string test = ABABCDCDABCD; Console.WriteLine(测试字符串 {0}, test); ... <a href="http://www.devacg.com/index.php?post=1421">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 20 Jan 2022 07:21:29 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1421</guid>

</item>
<item>
	<title>AES加密解密</title>
	<link>http://www.devacg.com/index.php?post=1405</link>
	<description><![CDATA[using System; using System.Text; using System.Security.Cryptography; ///  summary  /// AES加密/解密 ///  /summary  public sealed class AESCrypto { //一个256位的默认key private const string DEFAULT_KEY = AbcdefG@1234567*QWERTYU-Mnbvcxz#; //加密 public static string Encrypt(string encrypt... <a href="http://www.devacg.com/index.php?post=1405">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 20 Oct 2021 03:36:07 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1405</guid>

</item>
<item>
	<title>C#类型基础</title>
	<link>http://www.devacg.com/index.php?post=1402</link>
	<description><![CDATA[所有类型都从 System.Object派生。 Object类提供的方法 <a href="http://www.devacg.com/index.php?post=1402">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 23 Sep 2021 01:45:53 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/index.php?post=1402</guid>

</item>
<item>
	<title>基元类型&amp;引用类型&amp;值类型</title>
	<link>http://www.devacg.com/?post=1399</link>
	<description><![CDATA[一、基元类型  编译器直接支持的数据类型称为基元类型(primitive type)。基元类型直接映射到Framework类库(FCL)中存在的类型。例如，C#的int直接映射到System.Int32类型。 ... <a href="http://www.devacg.com/?post=1399">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Sep 2021 05:42:02 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1399</guid>

</item>
<item>
	<title>WPF——绑定枚举特性</title>
	<link>http://www.devacg.com/?post=1397</link>
	<description><![CDATA[示例：将枚举特性绑定到 DataGridComboBoxColumn 一、定义描述特性 [AttributeUsage(AttributeTargets.All)] public class DescriptionAttribute : Attribute { public string description; public DescriptionAttribute(string desc) { description = desc; } } 二、定义枚举 <a href="http://www.devacg.com/?post=1397">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 09 Sep 2021 06:46:38 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1397</guid>

</item>
<item>
	<title>Newtonsoft.Json</title>
	<link>http://www.devacg.com/?post=1396</link>
	<description><![CDATA[[官方文档] Newtonsoft.Json  Json.NET (即，Newtonsoft.Json) 是一种流行的 .NET 高性能 JSON 框架。 System.Windows.Data.IValueConverter 是 WPF 的数据转换器接口,在源数据与目标数据之间做类型转换。 Newtonsoft.Json.JsonConvert... <a href="http://www.devacg.com/?post=1396">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 07 Sep 2021 01:43:27 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1396</guid>

</item>
<item>
	<title>WPF——数据转换器</title>
	<link>http://www.devacg.com/?post=1395</link>
	<description><![CDATA[源数据与目标数据之间做转换。 示例：DataGridTextColumn与自定义类对象绑定 定义类对象 public class ActivityAdditional { public string data; public new string ToString() { return data; } } 定义数据转换器 //活动附加项转换器 public c... <a href="http://www.devacg.com/?post=1395">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 01 Sep 2021 08:43:36 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1395</guid>

</item>
<item>
	<title>UDP网络程序开发</title>
	<link>http://www.devacg.com/?post=1391</link>
	<description><![CDATA[UDP(User Datagram Protocol，用户数据报协议)是简单的、面向数据报的无连接协议，它提供了快速但不一定可靠的传输服务。和 TCP 一样,UDP 也是构建于IP之上的传输层协议。UDP工作与发手机短信相似，在通信前不需要连接，只要输入对方方号码即可，无须考虑对方手机处于什么状态。 一、UDP 程序开发的主要技术  UDP 协议是 Internet 协议族中支持无连接的传输协议。UDP 协议提供了一种方法来发送经过封装的 IP 数据报,与 TCP 不同, UDP 无须建立连接就可以发送这些 IP 数据报。 <a href="http://www.devacg.com/?post=1391">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 22 Aug 2021 10:31:50 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1391</guid>

</item>
<item>
	<title>C#中的术语</title>
	<link>http://www.devacg.com/?post=1390</link>
	<description><![CDATA[CLR via C# 术语 <a href="http://www.devacg.com/?post=1390">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 22 Aug 2021 02:10:46 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1390</guid>

</item></channel>
</rss>