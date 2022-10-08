<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>xLua——LuaManager</title>
	<link>http://www.devacg.com/?post=1392</link>
	<description><![CDATA[using System; using System.Collections; using System.Collections.Generic; using System.Text; using System.IO; using UnityEngine; using XLua; ///  summary  /// Lua管理器 ///  /summary  public class LuaManager : MonoBehaviour { public static LuaManager Instance { get; private set; } p... <a href="http://www.devacg.com/?post=1392">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 25 Aug 2021 06:44:02 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1392</guid>

</item>
<item>
	<title>xLua——面向对象编程(OOP)</title>
	<link>http://www.devacg.com/?post=1389</link>
	<description><![CDATA[一、模拟OOP中的Class  --用lua进行面向对象的编程,声明方法和调用方法统一用冒号,对于属性的调用全部用点号 --用一个全局Class函数模拟OOP中的Class类 --name:类名称, base_cls:基类table function Class(name, base_cls) local cls = {} local mtbl = {} cls.__name = name --将元表设为自己 --当子类中查找不到的东西，会到父类的__index中查找 cls.__index = cls mtbl... <a href="http://www.devacg.com/?post=1389">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 19 Aug 2021 07:41:31 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1389</guid>

</item>
<item>
	<title>xLua——LuaBehaviour</title>
	<link>http://www.devacg.com/?post=1388</link>
	<description><![CDATA[第一版设计 using System; using UnityEngine; using XLua; ///  summary  /// 集成Lua功能的行为类 /// 将Lua table中的函数 映射到 delegate /// 这种是建议的方式，性能好很多，而且类型安全。缺点是要生成代码（如果没生成代码会抛InvalidCastException异常）。 ///  /summary  [LuaCallCSharp] public class LuaBehaviour : MonoBehaviour { [SerializeField] ... <a href="http://www.devacg.com/?post=1388">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 19 Aug 2021 03:28:19 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=1388</guid>

</item>
<item>
	<title>xLua——集成protobuf</title>
	<link>http://www.devacg.com/?post=910</link>
	<description><![CDATA[http://www.devacg.com/?post=903  参考https://my.oschina.net/u/3744374/blog/1... <a href="http://www.devacg.com/?post=910">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 14 Feb 2019 06:54:45 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=910</guid>

</item>
<item>
	<title>重新编译XLua源码</title>
	<link>http://www.devacg.com/?post=908</link>
	<description><![CDATA[一、确定电脑安装了CMake  安装CMake  安装ninja  二、下载XLua源码 <a href="http://www.devacg.com/?post=908">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 31 Jan 2019 13:15:10 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=908</guid>

</item>
<item>
	<title>xLua——配置项目</title>
	<link>http://www.devacg.com/?post=884</link>
	<description><![CDATA[一、拷贝下面目录到工程中 Assets\Plugins Assets\XLua\Resources Assets\XLua\Src 二、实现GenConfig接口 using System; using System.Collections; using System.Collections.Generic; using UnityEngine; namespace XLua { public class GenConfigWrap : GenConfig { public Lis... <a href="http://www.devacg.com/?post=884">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 13 Jan 2019 04:12:32 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=884</guid>

</item>
<item>
	<title>编辑模式下运行lua文件</title>
	<link>http://www.devacg.com/?post=766</link>
	<description><![CDATA[示例：导出lua语言包到一个csv文件 [MenuItem (Tool/ExportLuaLanguage CSV)] static void ExportLuaLanguageCSV() { //加载lua文件 string luaLangFile = Application.dataPath + @\Lua\helper\CErrorCode.lua; StreamReader reader = File.OpenText(luaLangFile); string ... <a href="http://www.devacg.com/?post=766">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 10 Apr 2018 09:43:01 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=766</guid>

</item>
<item>
	<title>C#调用Lua函数</title>
	<link>http://www.devacg.com/?post=757</link>
	<description><![CDATA[示例 配置CodeGenConfig.cs <a href="http://www.devacg.com/?post=757">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 07 Mar 2018 08:22:14 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=757</guid>

</item>
<item>
	<title>xLua——动态热更(三)</title>
	<link>http://www.devacg.com/?post=750</link>
	<description><![CDATA[示例 HotfixSystem.cs using UnityEngine; using System.Text; using System.Collections; using XLua; namespace Hotfix { [Hotfix] public class HotfixSystem : MonoBehaviour { private LuaEnv luaenv; private byte[] luabytes; private string luascri... <a href="http://www.devacg.com/?post=750">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Tue, 16 Jan 2018 10:09:09 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=750</guid>

</item>
<item>
	<title>xLua——C#扩展方法与xLua泛型</title>
	<link>http://www.devacg.com/?post=627</link>
	<description><![CDATA[以下代码来自xLua demo using System; using System.IO; using System.Collections.Generic; using UnityEngine; using XLua; [LuaCallCSharp] public class Foo1Parent { } [LuaCallCSharp] public class Foo2Parent { } [LuaCallCSharp] public class Foo1Child : Foo1Parent { } [Lua... <a href="http://www.devacg.com/?post=627">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 19 Jul 2017 13:20:38 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=627</guid>

</item></channel>
</rss>