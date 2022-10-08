<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<title><![CDATA[鸟语天空]]></title> 
<description><![CDATA[不怨天,不尤人,下学而上达,知我者其天乎!]]></description>
<link>http://www.devacg.com/</link>
<language>zh-cn</language>
<generator>www.emlog.net</generator>
<item>
	<title>创建iOS Single View Application</title>
	<link>http://www.devacg.com/?post=971</link>
	<description><![CDATA[一、创建iOS Single View Application工程 <a href="http://www.devacg.com/?post=971">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 08 Mar 2019 08:53:43 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=971</guid>

</item>
<item>
	<title>使用归档程序复制对象</title>
	<link>http://www.devacg.com/?post=970</link>
	<description><![CDATA[利用归档程序进行深度复制，对于不支持NSCopying协议的对象可用这项技术。 示例 #import  Foundation/Foundation.h  int main(int argc, const char * argv[]) { @autoreleasepool { NSData *data; NSMutableArray *dataArray = [NSMutableArray arrayWithObjects: [NSMutableString stringWithStr... <a href="http://www.devacg.com/?post=970">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 08 Mar 2019 08:39:31 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=970</guid>

</item>
<item>
	<title>使用NSData创建自定义档案</title>
	<link>http://www.devacg.com/?post=969</link>
	<description><![CDATA[示例：多个不同对象存储到同一个归档文件中 #import  Foundation/Foundation.h  @interface Foo : NSObject  NSCoding  @property (copy, nonatomic) NSString *strVal; @property int intVal; @property float floatVal; -(void) encodeWithCoder: (NSCoder *) encoder; -(id) initWithCoder: (NSCoder *) decoder; @end ... <a href="http://www.devacg.com/?post=969">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 08 Mar 2019 08:23:06 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=969</guid>

</item>
<item>
	<title>使用NSKeyedArchiver归档</title>
	<link>http://www.devacg.com/?post=968</link>
	<description><![CDATA[若要将名种类型的对象存储到文件中，而且不仅仅是字符串、数组和字典类型，有一种更灵活的方法，就是利用NSKeyedArchiver类创建带键(keyed)的档案来完成。 Mac OS X从版本10.2开始支持带键的档案。在此之前，要使用NSArchiver类创建连续的(sequential)归档。连续的归档需要完全按照写入时的顺序读取归档中的数据。 在带键的档案中，每个归档字段都有一个名称。归档某个对象时，会为它提供一个名称，即键。从归档中获取该对象时，是根据这个键来检索它的。这样，可以按照做任意顺序将对象写入归档并进行检索。另外，如果向类中添加了新的实例变量或删除了实例变量，程序也可以进行处理。 示例： <a href="http://www.devacg.com/?post=968">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 08 Mar 2019 03:37:35 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=968</guid>

</item>
<item>
	<title>归档</title>
	<link>http://www.devacg.com/?post=967</link>
	<description><![CDATA[Mac OS X上的应用程序使用XML属性列表(或plists)存储诸如默认参数选择、应用程序设置和配置信息这样的数据。 如果你的对象是NSString、NSDictionary、NSArray、NSData或NSNumber类型，你可以使用这些类中实现的writeToFile:atomically:方法将数据写到文件中。 如果计划在程序中使用属性列表，可以查看下NSPropertyListSerialization类，使用这个类在文件中写入或读取属性列表可以在不同的平台之间移植。 示例： #import  Found... <a href="http://www.devacg.com/?post=967">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Fri, 08 Mar 2019 02:55:03 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=967</guid>

</item>
<item>
	<title>实现&lt;NSCopying&gt;协议</title>
	<link>http://www.devacg.com/?post=966</link>
	<description><![CDATA[示例 #import  Foundation/Foundation.h  // 实现不可变副本、可变副本协议 @interface ClassA : NSObject  NSCopying, NSMutableCopying  @property int age; // 注意：这里使用了copy特性 @property (nonatomic, copy) NSString *theName; -(id) copyWithZone:(NSZone *)zone; -(id) mutableCopyWithZone:(NSZone *)zone; @en... <a href="http://www.devacg.com/?post=966">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 07 Mar 2019 05:35:27 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=966</guid>

</item>
<item>
	<title>copy和mutableCopy方法</title>
	<link>http://www.devacg.com/?post=965</link>
	<description><![CDATA[示例一：数组元素是不可变字符串 #import  Foundation/Foundation.h  int main(int argc, const char * argv[]) { @autoreleasepool { NSMutableArray *dataArray = [NSMutableArray arrayWithObjects: @one, @two, @three, @four, nil]; NSMutableArray *dataArray2; ... <a href="http://www.devacg.com/?post=965">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Thu, 07 Mar 2019 04:49:07 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=965</guid>

</item>
<item>
	<title>内存管理与自动引用计数(ARC)</title>
	<link>http://www.devacg.com/?post=962</link>
	<description><![CDATA[在Xcode 4.2之前只能手动管理内存，使用保留(retain)、释放(release)、自动释放(autorelease)。Xcode 4.2版本开始引入自动引用计数(Automatic Reference Counting, ARC)。 提供给Objective-C程序员的基本内存管理模型有以下3种： 自动垃圾收集 手工引用计数和自动释放池 自动引用计数(ARC) 自动垃圾... <a href="http://www.devacg.com/?post=962">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 06 Mar 2019 05:13:31 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=962</guid>

</item>
<item>
	<title>NSBundle类</title>
	<link>http://www.devacg.com/?post=961</link>
	<description><![CDATA[当创建一个应用时，系统存储了应用相关联的所有数据(其中包括图片、本地化字符串、图标等)，将这些内容放入一个称为应用包(application bundle)的包中，为了访问应用中的这些资源，需要熟悉NSBundle类。 示例 #import  Foundation/Foundation.h  int main(int argc, const char * argv[]) { @autoreleasepool { // mainBundle方法给出了应用包所在的目录 // 这个方法在OS X和iOS应用中都适用 ... <a href="http://www.devacg.com/?post=961">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 06 Mar 2019 04:07:01 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=961</guid>

</item>
<item>
	<title>NSURL类</title>
	<link>http://www.devacg.com/?post=960</link>
	<description><![CDATA[通过URL读取数据 示例 #import  Foundation/Foundation.h  int main(int argc, const char * argv[]) { @autoreleasepool { NSURL *myURL = [NSURL URLWithString: @http://www.baidu.com]; // 读取百度首页的html内容 NSString *myHomePage = [NSString stringWithContent... <a href="http://www.devacg.com/?post=960">阅读全文&gt;&gt;</a>]]></description>
	<pubDate>Wed, 06 Mar 2019 03:25:13 +0000</pubDate>
	<author>追风剑情</author>
	<guid>http://www.devacg.com/?post=960</guid>

</item></channel>
</rss>