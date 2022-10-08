<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>命令模式(Command)</title>
	<link>http://www.devacg.com/?post=386</link>
	<description><![CDATA[应用场景：将行为请求者与行为执行者解耦。 using System; using System.Collections.Generic; using System.Text; namespace CommandTest { class Program { static void Main(string[] args) { //实际开发中，还可以把各命令加入队列中，并支持撤销(Undo)操作和恢复(Redo)操作。 Receiver recei... <a href="http://www.devacg.com/?post=386">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Jun 2016 10:05:00 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=386</guid>

</item>
<item>
	<title>抽象工厂模式(Abstract Factory)</title>
	<link>http://www.devacg.com/?post=385</link>
	<description><![CDATA[应用场景：创建产品簇 using System; using System.Collections.Generic; using System.Text; namespace FactoryTest { class Program { static void Main(string[] args) { ConcreteFactoryA fA = new ConcreteFactoryA(); ConcreteFactoryB fB = new ConcreteFactoryB... <a href="http://www.devacg.com/?post=385">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Jun 2016 09:41:40 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=385</guid>

</item>
<item>
	<title>工厂方法模式(Factory Method)</title>
	<link>http://www.devacg.com/?post=384</link>
	<description><![CDATA[应用场景：产品的组装比较复杂。用工厂模式外部可以不关心生产过程以及产品相关的部件对象。 using System; using System.Collections.Generic; using System.Text; namespace FactoryTest { class Program { static void Main(string[] args) { ConcreteFactory f = new ConcreteFactory(); Product prod... <a href="http://www.devacg.com/?post=384">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Jun 2016 09:12:25 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=384</guid>

</item>
<item>
	<title>生成器模式(Builder)</title>
	<link>http://www.devacg.com/?post=383</link>
	<description><![CDATA[应用场景：产品对象的构造比较复杂时使用。 using System; using System.Collections.Generic; using System.Text; namespace BuilderTest { class Program { static void Main(string[] args) { ConcreteBuilder cb = new ConcreteBuilder(); Product product = cb.BuildProduct(... <a href="http://www.devacg.com/?post=383">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 17 Jun 2016 07:50:03 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=383</guid>

</item>
<item>
	<title>原型模式(Prototype)</title>
	<link>http://www.devacg.com/?post=380</link>
	<description><![CDATA[using System; using System.Collections.Generic; using System.Text; namespace PrototypeTest { class Program { static void Main(string[] args) { ConcretePrototype obj = new ConcretePrototype(); obj.Name = aaa; ConcretePrototype obj1 = (Co... <a href="http://www.devacg.com/?post=380">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 15 Jun 2016 06:09:12 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=380</guid>

</item>
<item>
	<title>状态模式</title>
	<link>http://www.devacg.com/?post=376</link>
	<description><![CDATA[应用场景：当有多个状态时，不同的状态对应不同的行为 using System; using System.Collections.Generic; using System.Linq; using System.Text; namespace StateTest { class Program { static void Main(string[] args) { Context context = new Context(); context.SetState(new S... <a href="http://www.devacg.com/?post=376">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 05 Jun 2016 07:31:57 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=376</guid>

</item>
<item>
	<title>策略模式</title>
	<link>http://www.devacg.com/?post=374</link>
	<description><![CDATA[using System; using System.Collections.Generic; using System.Linq; using System.Text; namespace StrategyTest { class Program { static void Main(string[] args) { Context context = new Context(new StrategyA()); context.operate(); context =... <a href="http://www.devacg.com/?post=374">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Sun, 05 Jun 2016 06:55:08 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=374</guid>

</item>
<item>
	<title>访问者模式</title>
	<link>http://www.devacg.com/?post=373</link>
	<description><![CDATA[访问者模式 using System; using System.Collections.Generic; using System.Text; /************************************************************************/ /* 访问者模式                                                           */ /************************************************************************/ namesp... <a href="http://www.devacg.com/?post=373">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 01 Jun 2016 10:09:43 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=373</guid>

</item></channel>
</rss>