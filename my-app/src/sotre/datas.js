const data = {
    navHeightLight:'/html',
    headList:[
        {path:'/html',name:'HTML',index:0},
        {path:'/css',name:'CSS',index:1},
        {path:'/js',name:'JS',index:2},
        // {path:'/es6',name:'ES6+',index:3},
        {path:'/ts',name:'TS',index:4},
        {path:'/vue',name:'Vue',index:5},
        {path:'/react',name:'React',index:6},
        {path:'/uniapp',name:'Uniapp',index:7}
    ],
    headModule:[
        { 
            name:'HTML',
            list:[
                {name:'HTML基础知识',linkTo:'/html/knowledge'},
                {name:'HTML面试题',linkTo:'/html/question'},
                {name:'HTML视频教程',linkTo:'/html/vedio'},
                {name:'HTML书籍',linkTo:'/html/book'}
            ],
            backgroundColor:{ 
                backgroundColor:'rgba(160,20,43,0.7)'
            }
        },
        { 
            name:'CSS',
            list:[
                {name:'CSS基础知识',linkTo:'/css/knowledge'},
                {name:'CSS面试题',linkTo:'/css/quesstion'},
                {name:'CSS视频教程',linkTo:'/css/vedio'},
                {name:'CSS书籍',linkTo:'/css/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(160,60,43,0.7)'
            }
        },
        { 
            name:'JS',
            list:[
                {name:'JS基础知识',linkTo:'/js/knowledge'},
                {name:'JS面试题',linkTo:'/js/quesstion'},
                {name:'JS视频教程',linkTo:'/js/vedio'},
                {name:'JS书籍',linkTo:'/js/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(16,20,43,0.7)'
            } 
        },
        // { name:'S6+',list:['ES6+基础知识','ES6+面试题','ES6+视频教程','ES6+书籍'],backgroundColor:{backgroundColor:'rgba(160,80,43,0.7)'} },
        { 
            name:'TS',
            list:[
                {name:'TS基础知识',linkTo:'/ts/knowledge'},
                {name:'TS面试题',linkTo:'/ts/quesstion'},
                {name:'TS视频教程',linkTo:'/ts/vedio'},
                {name:'TS书籍',linkTo:'/ts/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(160,20,103,0.7)'
            } 
        },
        { 
            name:'Vue',
            list:[
                {name:'Vue基础知识',linkTo:'/vue/knowledge'},
                {name:'Vue面试题',linkTo:'/vue/quesstion'},
                {name:'Vue视频教程',linkTo:'/vue/vedio'},
                {name:'Vue书籍',linkTo:'/vue/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(1,20,43,0.7)'
            } 
        },
        { 
            name:'React',
            list:[
                {name:'React基础知识',linkTo:'/react/knowledge'},
                {name:'React面试题',linkTo:'/react/quesstion'},
                {name:'React视频教程',linkTo:'/react/vedio'},
                {name:'React书籍',linkTo:'/react/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(160,204,90,0.7)'
            } 
        },
        { 
            name:'Uniapp',
            list:[
                {name:'Uniapp基础知识',linkTo:'/uniapp/knowledge'},
                {name:'Uniapp面试题',linkTo:'/uniapp/quesstion'},
                {name:'Uniapp视频教程',linkTo:'/uniapp/vedio'},
                {name:'Uniapp书籍',linkTo:'/uniapp/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(10,20,43,0.7)'
            } 
        },
        { 
            name:'HTTP',
            list:[
                {name:'HTTP基础知识',linkTo:'/http/knowledge'},
                {name:'HTTP面试题',linkTo:'/http/quesstion'},
                {name:'HTTP视频教程',linkTo:'/http/vedio'},
                {name:'HTTP书籍',linkTo:'/http/book'}
            ],
            backgroundColor:{
                backgroundColor:'rgba(10,20,43,0.7)'
            } 
        }
    ],
    htmlList:[
        {   
            title:'HTML基础知识',
            lists:[
                {name:'什么是HTML？',index2:0},
                {name:'HTML实例',index2:1},
                {name:'HTML文档后缀',index2:2},
                {name:'HTML参考手册',index2:3},
                {name:'什么是HTML5？',index2:4},
                {name:'HTML5的新特性？',index2:5},
                {name:'HTML5做了哪些改进？',index2:6},
                {name:'HTML5多媒体',index2:7},
                {name:'HTML5图形',index2:8},
                {name:'HTML5语义元素',index2:9},
                {name:'HTML5浏览器兼容性',index2:10}
            ],
            pageIndex:0,
            backgroundColor:{
                backgroundColor:'rgba(143,0,143,0.5)'
            }
        },
        {
            title:'HTML面试题',
            lists:[
                {name:'HTML5有哪些新特性？',index2:0},
                {name:'请写出至少5个HTML5新增的标签和使用场景',index2:1},
                {name:'HTML5引入什么新的表单属性',index2:2},
                {name:'与HTML4相比HTML5废弃了哪些元素',index2:3},
                {name:'如何处理HTML5新标签的浏览器兼容问题',index2:4},
                {name:'如何区分HTML和HTML5',index2:5},
                {name:'HTML5 为什么只需要写 <!DOCTYPE>',index2:6},
                {name:'HTML5新的doctype和charset是什么？',index2:7},
                {name:'如何在HTML5页面嵌入音频？',index2:8},
                {name:'如何在HTML5页面嵌入视频？',index2:9},
                {name:'HTML5支持哪些新媒体元素？',index2:10},
                {name:'HTML5的form如何关闭自动完成功能',index2:11},
                {name:'HTML5 canvas 元素是怎么使用的',index2:12},
                {name:'Canvas绘制的图形如何保存时加上二维码',index2:13},
                {name:'Doctype 的作用，严格模式与混杂模式如何区分？',index2:14},
                {name:'你知道多少种 Doctype 文档类型？',index2:15},
                {name:'HTML "data-"属性的作用是什么？',index2:16},
                {name:'herf 和 src 的区别',index2:17},
                {name:'锚点的作用是什么？如何设置锚点',index2:18},
                {name:'页面导入样式时，使用 link 和 @import 有什么区别？',index2:19},
                {name:'defer 和 async 的区别',index2:20},
                {name:'网页中 mate viewport 具体参数使用',index2:21},
                {name:'怎样处理 移动端 1px 被 渲染成 2px 问题？',index2:22},
                {name:'说你对 HTML 语义化的理解',index2:23},
                {name:'行内元素有哪些？块级元素有哪些？ 空 (void) 元素有那些？',index2:24},
                {name:'列举 HTML 标签中的行内元素，块级元素',index2:25},
                {name:'如何在页面上实现一个圆形的可点击区域',index2:26},
                {name:'SVG 是什么？Canvas 和 SVG 图形的区别是什么？',index2:27},
                {name:'Cookie有哪些弊端',index2:28},
                {name:'JS操作获取和设置cookie',index2:29},
                {name:'cookies,sessionStorage,localStorage 的区别',index2:30},
                {name:'浏览器本地存储是怎么样的',index2:31},
                {name:'HTML5应用缓存和常规的HTML浏览器缓存有何区别',index2:32},
                {name:'web storage和cookie的区别',index2:33},
                {name:'HTML5的离线储存的使用和原理',index2:34},
                {name:'html 常见的兼容性问题',index2:35},
                {name:'介绍一下你对浏览器内核的理解？',index2:36},
                {name:'对 WEB 标准以及 W3C 的理解与认识',index2:37}
            ],
            pageIndex:1,
            backgroundColor:{
                backgroundColor:'rgba(143,143,0,0.5)'
            }
        },
        {
            title:'HTML视频教程',
            lists:[
                {name:'2019年黑马程序员前端入门视频教程 HTML5+CSS3-简单有趣好玩-pink老师',src:'https://www.bilibili.com/video/BV14J4114768',index2:0},
                {name:'尚硅谷Web前端初学者零基础入门HTML+CSS基础教程全套完整版',src:'https://www.bilibili.com/video/BV1sW411T78k',index2:1},
                {name:'【星月教你做网站】HTML5+CSS+JS全方面解析',src:'https://www.bilibili.com/video/BV1ds411r7o7',index2:2},
                {name:'Web前端/HTML5教程2019版 900集完全入门 达到前端工程师水平',src:'https://www.bilibili.com/video/BV1FE411t7NY',index2:3},
                {name:'【极客学院】HTML5基础教学',src:'https://www.bilibili.com/video/BV1dx41127Qb',index2:4},
                {name:'为初学者准备的：HTML 速成',src:'https://www.bilibili.com/video/BV1vs411M7aT',index2:5},
                {name:'零基础30分钟学会制作网站——如何使用HTML网页模板',src:'https://www.bilibili.com/video/BV1mx411z72R',index2:6},
                {name:'2020HTML+CSS 零基础权威入学宝典',src:'https://www.bilibili.com/video/BV1yx411d7Rc',index2:7}
            ],
            pageIndex:2,
            backgroundColor:{
                backgroundColor:'rgba(0,143,143,0.5)'
            }
        },
        {
            title:'HTML书籍',
            lists:[
                {name:'HTML5秘籍',index2:0},
                {name:'HTML5权威指南',index2:1},
                {name:'HTML5程序设计',index2:2},
                {name:'HTML5 完美游戏开发',index2:3},
                {name:'HTML5 WebSocket权威指南',index2:4},
                {name:'精通HTML:语义、标准和样式',index2:5}
            ],
            pageIndex:3,
            backgroundColor:{
                backgroundColor:'rgba(143,10,90,0.5)'
            }
        }
    ],
    htmlPage1:[
        {
            name:'什么是HTML？',
            res:'html，全称Hypertext Markup Language，bai也就du是“超文本链接标示语zhi言”。HTML文本是由 HTML命令组成的描述性文本，HTML 命令可以说明文字、 图形、动dao画、声音、表格、链接等。 即平常上网所看到的的网页。',
            index2:0
        },
        {
            name:'HTML实例',
            res:`<html>

            <head>
            
            <title>简单的html示例</title>
            
            </head>
            
            <body>
            
            <center>
            
            <h3>我的第一个网页</h3>
            
            <hr/>
            
            <font size=2>这是我做的第一个网页，欢迎光临！谢谢！ This is my first web. Welcome.</font>
            
            </center>
            
            </body>
            
            </html>`,
            index2:1
        },
        {
            name:'HTML文档后缀',
            res:'关于HTM，实际上HTM与HTML没有bai本质意义的区别，du只是为了满足磁盘操作系统（DOS）仅能识别三zhi位文件名而已，因为一些老dao的系统(win32)不能识别四位文件名，所以某些网页服务器要求index.html最后一个l必须去掉。',
            index2:2
        },
        {
            name:'HTML参考手册',
            res:`W3C标准手册：https://www.w3school.com.cn/tags/index.asp`,
            index2:3
        },
        {
            name:'什么是HTML5？',
            res:`HTML5是最新的HTML标准。(推荐学习：html教程)
 
            　　HTML5是专门为承载丰富的web内容而设计的，并且无需额外插件。
             
            　　HTML5拥有新的语义、图形以及多媒体元素。
             
            　　HTML5提供的新元素和新的API简化了web应用程序的搭建。
             
            　　HTML5是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。`,
            index2:4
        },
        {
            name:'HTML5的新特性？',
            res:`（1）用于绘画的 canvas 元素

            （2）用于媒介回放的 video 和 audio 元素
            
            （3）对本地离线存储的更好的支持
            
            （4）新的特殊内容元素，比如 article、footer、header、nav、section
            
            （5）新的表单控件，比如 calendar、date、time、email、url、search`,
            index2:5
        },
        {
            name:'HTML5做了哪些改进？',
            res:`(1)更多的标记，适应移动du设备中的地理位置、摄像头、原生视频播放、以及更好的html语义的需要。
            (2)RIA的支持，websocket，实现服务器主动推送数据到客户端，触摸的支持等等，这些使得客户端应用更丰富、更像本地程序。
            (3)画布和原生2d作图，这个使得网页游戏编写更简单、性能更高。
            (4)更完善的css标准和js标准。`,
            index2:6
        },
        {
            name:'HTML5多媒体',
            res:`一、多媒体 embed 标签。二、音频 audio 标签。三、视频 video 标签`,
            index2:7
        },
        {
            name:'HTML5图形',
            res:`HTML5新增了一个<canvas.../>属性。该元素自身并不绘制图形，只是相当于一张空画布。如果开发者需要向<canvas.../>上绘制图形则必须使用JavaScript脚本进行绘制。

            为了向<canvas.../>元素上绘图，必须经过如下3步。
            
            获取<canvas.../>元素对应的DOM对象，这是一个Canvas对象。
            调用Canvas对象的getContext()方法，该方法返回一个CanvasRenderingContext2D对象，该对象即可绘制图形。
            调用CanvasRenderingContext2D对象的方法绘图。`,
            index2:9
        },
        {
            name:'HTML5语义元素',
            res:`<article>
            <aside>
            <details>
            <figcaption>
            <figure>
            <footer>
            <header>
            <main>
            <mark>
            <nav>
            <section>
            <summary>
            <time>`,
            index2:10
        },
        {
            name:'HTML5浏览器兼容性',
            res:`1、现代的浏览器都支持HTML5。

            2、所有浏览器不管是新的还是旧的对无法识别的元素会作为内联元素自动处理。
            
            3、HTML5定义了8个HTML语义元素，所有这些元素都是块级元素，为了能让旧版本的浏览器正确显示这些元素，你可以设置css的display属性值为block，如下：
            
            header, section, footer, aside, nav, main, article, figure {
                display: block; 
            }`,
            index2:11
        }
    ],
    htmlPage2:[
        {
            name:'HTML5有哪些新特性？',
            res:[
                '（一）语义标签',
                '（二）增强型表单',
                '（三）视频和音频',
                '（四）Canvas绘图',
                '（五）SVG绘图',
                '（六）地理定位',
                '（七）拖放API',
                '（八）WebWorker',
                '（九）WebStorage',
                '（十）WebSocket'
            ],
            index2:0
        },
        {
            name:'请写出至少5个HTML5新增的标签和使用场景',
            res:[
                `1、header标签和footer标签

                顾名思义，header标签表示头部，主要用于整个页面的头部或者某一区块的头部。  
                
                同理，footer标签，主要用于表示一个页面或一个区域的页脚，可包含文档的作者姓名、创作日期或者联系信息。`,
                `2、nav标签
            
                nav标签标示导航，从navigation（导航）字面就知道它的用处了。`,
                `3、section标签
            
                我个人习惯从字面意思理解，section表示部分，也可以说是页面某一个部分区块，用于划分页面不同的区域部分。比如章节、页眉、页脚或文档中的其他部分。
                
                但是section不用于布局，布局还是用div来做。`,
                ` 4、article和aside标签
            
                article标签表示页面中一块结构完整且独立的内容，比如一篇文章，用户的评论等。
                
                自己在写文章列表的时候也经常使用article标签。
                
                aside标签
                
                表示article标签内容之外的附属信息部分、应该与article元素内容相关的。
                
                最常用的是表示侧边栏(sidebar)，还有广告、引用、nav元素组，以及其他类似的有别与主要内容的部分
                
                article标签可以包含与当前页面或主要内容相关的引用、广告单元、附属导航，以及其他类似的有别与主要内容的部分。`,
                `5、hgroup标签
            
                看名字也知道大概，它由h+group（组、团体）组成，意思就是把一组h1–h6标题元素组团起来，统管，一起happy去哈哈。好吧，专业一点就是表示对页面一个区块的标题进行组合。`,
                `6、figure标签和figcaption标签
            
                figure标签用于定义一组媒体内容，比如图像、图表、照片、代码等，一般常见用于图片。
                
                figcaption 标签用于定义 figure 元素的标题，比如我们用在图片上时，figcaption 标签可以说对这张图片进行描述，在seo上，它的作用类似img的alt作用，不过他是直接就显示出来了，貌似更有语义化。
                
                “figcaption” 元素应该被置于 “figure” 元素的第一个或最后一个子元素的位置。`,
                `7、datalist
            
                datalist定义选项列表，需与 input 元素配合使用，通过input 元素的 list 属性来绑定，来定义 input 可能的值。
                
                datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。`                
            ],
            index2:1
        },
        {
            name:'HTML5引入什么新的表单属性',
            res:'',
            index2:2
        },
        {
            name:'与HTML4相比HTML5废弃了哪些元素',
            res:'',
            index2:3
        },
        {
            name:'如何处理HTML5新标签的浏览器兼容问题',
            res:'',
            index2:4
        },
        {
            name:'如何区分HTML和HTML5',
            res:'',
            index2:5
        },
        {
            name:'HTML5 为什么只需要写 <!DOCTYPE>',
            res:'',
            index2:6
        },
        {
            name:'HTML5新的doctype和charset是什么？',
            res:'',
            index2:7
        },
        {
            name:'如何在HTML5页面嵌入音频？',
            res:'',
            index2:8
        },
        {
            name:'如何在HTML5页面嵌入视频？',
            res:'',
            index2:9
        },
        {
            name:'HTML5支持哪些新媒体元素？',
            res:'',
            index2:10
        },
        {
            name:'HTML5的form如何关闭自动完成功能',
            res:'',
            index2:11
        },
        {
            name:'HTML5 canvas 元素是怎么使用的',
            res:'',
            index2:12
        },
        {
            name:'Canvas绘制的图形如何保存时加上二维码',
            res:'',
            index2:13
        },
        {
            name:'Doctype 的作用，严格模式与混杂模式如何区分？',
            res:'',
            index2:14
        },
        {
            name:'你知道多少种 Doctype 文档类型？',
            res:'',
            index2:15
        },
        {
            name:'HTML "data-"属性的作用是什么？',
            res:'',
            index2:16
        },
        {
            name:'herf 和 src 的区别',
            res:'',
            index2:17
        },
        {
            name:'锚点的作用是什么？如何设置锚点',
            res:'',
            index2:18
        },
        {
            name:'页面导入样式时，使用 link 和 @import 有什么区别？',
            res:'',
            index2:19
        },
        {
            name:'defer 和 async 的区别',
            res:'',
            index2:20
        },
        {
            name:'网页中 mate viewport 具体参数使用',
            res:'',
            index2:21
        },
        {
            name:'怎样处理 移动端 1px 被 渲染成 2px 问题？',
            res:'',
            index2:22
        },
        {
            name:'说你对 HTML 语义化的理解',
            res:'',
            index2:23
        },
        {
            name:'行内元素有哪些？块级元素有哪些？ 空 (void) 元素有那些？',
            res:'',
            index2:24
        },
        {
            name:'列举 HTML 标签中的行内元素，块级元素',
            res:'',
            index2:25
        },
        {
            name:'如何在页面上实现一个圆形的可点击区域',
            res:'',
            index2:26
        },
        {
            name:'SVG 是什么？Canvas 和 SVG 图形的区别是什么？',
            res:'',
            index2:27
        },
        {
            name:'Cookie有哪些弊端',
            res:'',
            index2:28
        },
        {
            name:'JS操作获取和设置cookie',
            res:'',
            index2:29
        },
        {
            name:'cookies,sessionStorage,localStorage 的区别',
            res:'',
            index2:30
        },
        {
            name:'浏览器本地存储是怎么样的',
            res:'',
            index2:31
        },
        {
            name:'HTML5应用缓存和常规的HTML浏览器缓存有何区别',
            res:'',
            index2:32
        },
        {
            name:'web storage和cookie的区别',
            res:'',
            index2:33
        },
        {
            name:'HTML5的离线储存的使用和原理',
            res:'',
            index2:34
        },
        {
            name:'html 常见的兼容性问题',
            res:'',
            index2:35
        },
        {
            name:'介绍一下你对浏览器内核的理解？',
            res:'',
            index2:36
        },
        {
            name:'对 WEB 标准以及 W3C 的理解与认识',
            res:'',
            index2:37
        }
    ],
    jsList:[
        {   
            title:'JS基础知识',
            lists:[
                {name:'JavaScript 教程',index2:0},
                {name:'浏览器中的 JavaScript 能做什么？',index2:1},
                {name:'浏览器中的 JavaScript 不能做什么？',index2:2},
                {name:'第一个 JavaScript 例子',index2:3},
                {name:'为什么学习 JavaScript?',index2:4},
                {name:'谁适合阅读本教程？',index2:5},
                {name:'比 JavaScript “更好”的语言',index2:6},
                {name:'HTML5多媒体',index2:7},
                {name:'HTML5应用',index2:8},
                {name:'HTML5图形',index2:9},
                {name:'HTML5语义元素',index2:10},
                {name:'HTML5浏览器兼容性',index2:11}
            ],
            pageIndex:0,
            backgroundColor:{
                backgroundColor:'rgba(143,60,143,0.5)'
            }
        },
        {
            title:'JS面试题',
            lists:[
                {name:'JavaScript 中有几种数据类型?',index2:0},
                {name:'用JavaScript写一个动态的，格式为..年..月..日..时..分..秒的方法',index2:1},
                {name:'JavaScript 如何让alert弹出框中的信息换行',index2:2},
                {name:'利用JavaScript打印出FIbonacci数（不使用全局变量）',index2:3},
                {name:'JavaScript 实现如下语法的功能 var a=(5).plus(3).minus(6);',index2:4},
                {name:'JavaScript 实现输出document对象中所有成员的名称和类型',index2:5},
                {name:'JavaScript 如何利用JS生成一个table?',index2:6},
                {name:'JavaScript 假设有一个4行td的table,将table里面的td顺序颠倒',index2:7},
                {name:'JavaScript var n=(1,2,3,4,5),n的值是多少?',index2:8},
                {name:'JavaScript 如何知道一个变量的数据类型?如何判断数据类型?',index2:9},
                {name:'JavaScript []和{}表示什么?',index2:10},
                {name:'JavaScript 语法i++,++i,和+i是什么意思?',index2:11},
                {name:'JavaScript 什么叫全局变量?什么叫局部变量了?是如何定义出来的?',index2:12},
                {name:'JavaScript 书写规范/原则',index2:13},
                {name:'在IE,fireFox,chrome这三个浏览器中,如何查看JS代码的报错?',index2:14},
                {name:'JavaScript 说一说html代码,css代码和js代码的注释写法?',index2:15},
                {name:'JavaScript NaN是什么意思?这个值有什么特点?',index2:16},
                {name:'请问alert(Number(“08”));输出的结果是什么?',index2:17},
                {name:'请使用JavaScript找出name=“A”的内容',index2:18},
                {name:'JavaScript 作用域闭包的概念,闭包用在哪里有哪些变化?性能如何?',index2:19},
                {name:'JavaScript 写一个从0到59依次循环的计时器',index2:20},
                {name:'JavaScript 双十一倒计时更准确',index2:21},
                {name:'JavaScript null和undefined的区别?',index2:22},
                {name:'JavaScript add(2, 3, 4)，add(2)(3)(4)和add(2, 3)(4)',index2:23},
                {name:'JavaScript new操作符具体干了什么呢?',index2:24},
                {name:'对JSON的了解?',index2:25},
                {name:'JavaScript document.write 和 innerHTML的区别;',index2:26},
                {name:'JavaScript call和apply()的作用和区别;',index2:27},
                {name:'JavaScript 哪些操作会造成内存泄露?',index2:28},
                {name:'JavaScript 什么是”use strict”?使用它的好处和坏处分别是什么?',index2:29},
                {name:'JavaScript 如何获取UA',index2:30},
                {name:'JavaScript eval是做什么的?',index2:31},
                {name:'JavaScript 对象的深度克隆代码实现',index2:32},
                {name:'JavaScript 谈谈 this 对象的理解',index2:33},
                {name:'JavaScript 什么是window对象? 什么是document对象?',index2:34},
                {name:'JavaScript tepyof(null)返回什么',index2:35},
                {name:'JavaScript [“1”, “2”, “3”].map(parseInt) 答案是多少',index2:36},
                {name:'JavaScript 作用链域',index2:37},
                {name:'JavaScript 的作用域与变量声明提升',index2:38},
                {name:'JavaScript 如何判断一个对象是否属于某个类',index2:39},
                {name:'JavaScript原型，原型链 ? 有什么特点',index2:40},
                {name:'用原生JavaScript的实现过什么功能吗',index2:41},
                {name:'前端开发常用的IE，firefox上的调试工具；分别举例说明用法',index2:42},
                {name:'JavaScript 如何outerHTML,注意浏览器兼容性',index2:43},
                {name:'如何使用js把这个div的class的属性改为class_2',index2:44},
                {name:'JavaScript 你了解 arguments 对象么,它有哪些属性?',index2:45},
                {name:'JavaScript arguments 有什么特性,可以用这些特性做什么?',index2:46},
                {name:'JavaScript 查找字符串中出现最多字符的个数',index2:47},
                {name:'JavaScript 去除字符串中连续重复的地方',index2:48},
                {name:'JavaScript 用js实现千位分隔符?',index2:49},
                {name:'JavaScript 写一个正则表达式判断字符串是否是对称数',index2:50},
                {name:'JavaScript 用正则分解如下超链接',index2:51},
                {name:'JavaScript 判断字符串由数字和字母组成',index2:52},
                {name:'解释一下JavaScript的同源策略',index2:53},
                {name:'JavaScript 为什么要有同源限制',index2:54},
                {name:'JavaScript 字符串的常用方法',index2:55},
                {name:'JavaScript 字符串方法substr和substring的功能是什么？有什么区别',index2:56},
                {name:'JavaScript 字符串反转',index2:57},
                {name:'JavaScript 写一个方法，求字符串中重复的单词',index2:58},
                {name:'JavaScript 实现千位分隔符方法',index2:59},
                {name:'Javascript创建对象的几种方式',index2:60},
                {name:'JavaScript 继承的实现方法有哪些？分别怎么写？',index2:61},
                {name:'JavaScript JS如何实现面向对象和继承机制？',index2:62},
                {name:'JavaScript 继承的6种方法',index2:63},
                {name:'JavaScript 如何实现继承？如何避免原型链上面的对象共享？',index2:64},
                {name:'JavaScript JS 怎么实现一个class(类)',index2:65},
                {name:'JavaScript 模块化开发怎么做？',index2:66},
                {name:'JavaScript 的原型，原型链都有什么特点？',index2:67},
                {name:'JavaScript 事件冒泡机制',index2:68},
                {name:'JavaScript 事件兼容性问题有哪些？怎么解决？',index2:69},
                {name:'JavaScript 写一个通用的事件侦听器函数',index2:70},
                {name:'JavaScript DOM2级绑定的优点以及兼容性问题',index2:71},
                {name:'JavaScript 事件IE与火狐的时间机制有什么区别？如何阻止冒泡？',index2:72},
                {name:'JavaScript 如何使用事件，以及IE和标准DOM事件模型之间存在的差别',index2:73},
                {name:'JavaScript 如何实现事件委托，举例说明',index2:74},
                {name:'JavaScript 求数组中的最大值',index2:75},
                {name:'JavaScript 数组去重',index2:76},
                {name:'JavaScript 计算出班级的平均分',index2:77},
                {name:'JavaScript 写出你知道的数组的方法和属性',index2:78},
                {name:'JavaScript 对象有哪些原生方法，列举一下',index2:79},
                {name:'JavaScript 数组按照从大到小的顺序排序',index2:80},
                {name:'JavaScript 请把这个数组里面的数组替换成中文',index2:81},
                {name:'JavaScript 删除数组中的第m项到第n项，用什么方法',index2:82},
                {name:'JavaScript 转化一个数字数据为function数组',index2:83},
                {name:'JavaScript 给Object数组进行排序',index2:84},
                {name:'JavaScript 返回一个合并过的数组',index2:85},
                {name:'JavaScript 对象的深度克隆',index2:86},
                {name:'一个页面输入URL到页面加载显示完成，中间发生了什么？',index2:87},
                {name:'重绘和回流是什么？谈一谈',index2:88},
                {name:'横向滑动的原理？轮播图的原理',index2:89},
                {name:'下拉刷新怎么实现?',index2:90},
                {name:'图片延迟加载的原理，延迟加载的实现原理',index2:91},
                {name:'JavaScript JS延迟加载的方式有哪些',index2:92},
                {name:'异步加载的方式有哪些？',index2:93},
                {name:'异步加载和延迟加载',index2:94},
                {name:'线程与进程的区',index2:95},
                {name:'什么叫优雅降级和渐进增强',index2:96},
                {name:'对网站重构的理解？怎么重构页面？',index2:97},
                {name:'HTML页面加载和解析流程',index2:98},
                {name:'浏览器加载和渲染html的顺序',index2:99},
                {name:'JavaScript 的加载',index2:100},
                {name:'JavaScript childNodes和children的区别',index2:101},
                {name:'JavaScript 编写一个；取得指定范围的随机数的方法',index2:102},
                {name:'JavaScript 常用的时间方法有哪些？',index2:103},
                {name:'JavaScript this关键字的表达什么意思?',index2:104},
            ],
            pageIndex:1,
            backgroundColor:{
                backgroundColor:'rgba(120,143,0,0.5)'
            }
        },
        {
            title:'JS书籍',
            lists:[
                {name:'JavaScript 高级程序设计',index2:0},
                {name:'JavaScript 权威指南',index2:1},
                {name:'JavaScript 忍者秘籍',index2:2},
                {name:'深入理解ES6',index2:3},
                {name:'ES6 标准入门',index2:4},
                {name:'高性能 JavaScript',index2:5},
                {name:'JavaScript 设计模式',index2:6},
                {name:'JavaScript 语言精粹',index2:7},
                {name:'JavaScript 学习指南',index2:8},
                {name:'JavaScript编程精解',index2:9},
                {name:'JavaScript框架设计',index2:10},
                {name:'深入理解JavaScript',index2:11},
                {name:'JavaScript经典实例',index2:12},
                {name:'数据结构与算法JavaScript描述',index2:13},
                {name:'JavaScript专家编程',index2:14},
                {name:'JavaScript网页动画设计',index2:15},
                {name:'JavaScript 面向对象精要',index2:16}
            ],
            pageIndex:2,
            backgroundColor:{
                backgroundColor:'rgba(143,10,0,0.5)'
            }
        },
        {
            title:'JS视频教程',
            lists:[
                {name:'尚硅谷最新版JavaScript基础全套教程完整版',src:'https://www.bilibili.com/video/BV1YW411T7GX?from=search&seid=17503589984388206706',index2:0},
                {name:'学习JS看这个就够了，全面打通 JAVASCRIPT 知识点',src:'https://www.bilibili.com/video/BV1NJ411W7wh?from=search&seid=17503589984388206706',index2:1},
                {name:'【星月教你做网站】HTML5+CSS+JS全方面解析',src:'https://www.bilibili.com/video/BV1ds411r7o7',index2:2},
                {name:'JS基础教程-黑马程序员',src:'https://www.bilibili.com/video/BV16t411z7Js?from=search&seid=17503589984388206706',index2:3},
                {name:'JS特效专题',src:'https://www.bilibili.com/video/BV1xt411D7iW',index2:4},
                ],
            pageIndex:3,
            backgroundColor:{
                backgroundColor:'rgba(0,143,143,0.5)'
            }
        }
    ]
}
export default data;