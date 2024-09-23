# Programmers at work

[原文](https://programmersatwork.wordpress.com/bill-gates-1986/)

正文
As chief executive officer of Microsoft, William H. (Bill) Gates is considered one of the driving forces behind today’s personal computing and office automation industry. Gates started his career in computer software at a young age. Both Gates and Microsoft co-founder, Paul Allen, worked as programming consultants while attending high school in Seattle, Washington. In 1974, Gates, then an undergraduate at Harvard University, worked with Allen to develop a BASIC programming language for the first commercial microcomputer, the MITS Altair. After the successful completion of this project, the two formed Microsoft to develop and market software for the emerging microcomputer marketplace.
作为前微软CEO，比尔盖茨被认为是当今家用办公与计算机行业背后的最大的那个 BOSS，他很早就拿编程当饭吃了。保罗艾伦，一个也很牛逼的程序员，跟中途退学的盖茨一起为首款个人商用电脑开发了 BASIC 语言（可以被这个计算器编辑和运行的语言，可以理解为 Java 和 JVM 的关系）。在这个项目成功之后，两个人携手组建了微软，开启了他们在个人消费领域软件行业的统治时代。
Microsoft has set standards for the software industry in languages, operating systems, and application software. Gates has provided the vision for the company’s new product ideas and technologies. He also provides hands-on guidance to the technology groups that develop new products, devoting his time to reviewing and refining the software that Microsoft sells.
微软建立了包括编程语言、操作系统和应用在内的许多行业标准，盖茨在其中扮演了一个产品总监的角色，把控产品和技术方向，指导团队开发路线，打磨产品。
Gates is a native of the Seattle, Washington area and resides there today. He was born in 1955.
他一直在老家呆着，恋家的男人。
INTERVIEWER: You obviously have a lot of responsibilities as chief executive officer of Microsoft. Do you still program?
你事情那么多，有时间写代码吗？
GATES: No, I don’t. I still help design algorithms and basic approaches, and sometimes I look at code. But since I worked on the IBM PC BASIC and the Model 100, I haven’t had a chance to actually create a program myself.
我没时间写代码了，不过我很关注算法和其实现，有时也会做做 code review
INTERVIEWER: What kind of role do you play in the development of programs at Microsoft?
你在项目开发中扮演的角色是什么
GATES: I do two key things. One is to choose features to put into programs. To do that, you have to have a reasonable understanding of what’s easy and what’s not easy to do. You also have to understand what sort of product “family” strategy you’re pursuing, and what’s happening with the hardware.
我只做两件事
第一、提出和决定产品的功能，做决定很难的，因为要考虑方方面面，从产品线到硬件适配都要考虑
I also work on the best way to implement that new feature, so that it will be small and fast. For example, I wrote a memo about how to design and implement a feature we used on Excel to make the program recalculate the formulas every time the screen changes.
第二、探索新功能，比如在 excel 上有个关于公式与渲染有关的功能就是我写的最小原型去论证的
In the first four years of the company, there was no Microsoft program that I wasn’t involved in actually writing and designing. In all those initial products, whether it was BASIC, FORTRAN, BASIC 6800, or BASIC 6502, not a line of code went out that I didn’t look over. But now we have about 160 programmers, so I mostly do reviews of products and algorithms.
刚开始的四年，我参与了所有的程序设计和开发工作，后面人多了，就不需要我做这些事了。
INTERVIEWER: What do you consider your greatest achievement ever in programming?
你作为程序员取得的最大的成就是什么？
GATES: I’d have to say BASIC for the 8080, because of the effect it’s had, and because of how appropriate it was at the time, and because we managed to get it so small. It was the original program we wrote when we decided to start Microsoft.
当然是 BASIC for 8080 PC
Three of us knew that original program by heart. We got a chance to completely rewrite it one summer down in Albuquerque, and I thought we could save a few bytes and tighten things up. We just tuned the program very, very carefully, and ended up with a 4K BASIC interpreter.
我作为创始程序员，向打磨一件艺术品一样对待 BASIC for 8080
When you know a program that well, you feel that nobody can look at the code and say, “There’s a better way to do this.” That feeling’s really nice, and the fact that the program was used on a lot of machines makes it an exciting program to have written.
它真的是一件完美的作品！
I also feel really good about the software on the Model 100, especially about how we squeezed in a very useful small editor. I worked with Jey Suzuki, a Japanese programmer, to put that together. We had very limited time to finish the project. When you do software that gets burned into ROM, you don’t get an opportunity to make mistakes.
还有 Model 100，一个小型编辑器。
INTERVIEWER: What do you consider the most difficult part of computer programming?
你认为开发里最难的事情是什么？
GATES: The hardest part is deciding what the algorithms are, and then simplifying them as much as you can. It’s difficult to get things down to their simplest forms. You have to simulate in your mind how the program’s going to work, and you have to have a complete grasp of how the various pieces of the program work together. The finest pieces of software are those where one individual has a complete sense of exactly how the program works. To have that, you have to really love the program and concentrate on keeping it simple, to an incredible degree.
最困难的部分是弄清楚算法是什么以及如何让它们尽可能简单。使事物变得非常简单是很难的。你必须在脑海中想象程序将如何运行，并且你必须理解程序的所有不同部分是如何结合在一起的。最好的软件是由完全了解其工作原理的人制作的。为了做到这一点，你必须热爱程序并专注于保持它的极致简单。【gpt】
INTERVIEWER: With computers increasing so much in power and memory, are programs becoming more complex, or just sloppier? How is that affecting the way people write programs?
你如何看待如今的程序与开发的？
GATES: We’re no longer in the days where every program is super well crafted. But at the heart of the programs that make it to the top, you’ll find that the key internal code was done by a few people who really knew what they were doing.
现在时代变了，程序员已经不像过去一样珍惜他们的羽毛了。还是我们这些老人靠谱。
It’s not quite as important now to squeeze things down into a 4K memory area. You’re seeing a lot more cases where people can afford to use C, instead of using assembly language. Unfortunately, many programs are so big that there is no one individual who really knows all the pieces, and so the amount of code sharing you get isn’t as great. Also, the opportunity to go back and really rewrite something isn’t quite as great, because there’s always a new set of features that you’re adding on to the same program.
现在的人连汇编语言都不会写都敢称为程序员了！
The worst programs are the ones where the programmers doing the original work don’t lay a solid foundation, and then they’re not involved in the program in the future. Working with those programs gets to the point that I call “experimental programming.” The programmers understand so little about those programs that they can’t understand how changes might affect speed, for instance. They might use code that already exists, or they might not understand what dependencies will break if they change something. So they add new code, and then they run it and they say, “Oh look, it doesn’t work that way.” That’s a very, very inefficient way to deal with a program, but a lot of projects end up exactly like that.
最糟糕的是，现在的程序就像被后妈养大的，还是一天换一个后妈，到最后谁也不知道它的屁股上是不是有个胎记了。这种程序一直长到20岁，名字叫💩山，谁也不敢动他了，只能屎上雕花。
INTERVIEWER: In a company like Microsoft, where you have 160 programmers, how do you go about creating an environment where you can develop successful programs?
微软拥有 160名程序员，你是如何协调他们的工作，创造成功的产品的？
GATES: One way is to have small project teams, typically four or five people, and one of those people has to have the proven ability to really absorb a program. And when that lead person is uncertain about something, he or she should be able discuss it with even more experienced programmers.
小组化，一个老人和四个菜鸟，遇到老人也搞不定的事情，老人去老人组找他的老人。（递归）
Part of our strategy is getting the programmers to think everything through before they go to the coding phase. Writing the design documents is crucial, because a lot of simplification comes when you see problems expressed as algorithms. They’re kind of in the smallest form then, where you can see what the overlap is.
我们的部分策略是让程序员在进入编码阶段之前就把所有事情都想清楚。撰写设计文档至关重要，因为当你看到问题以算法的形式表达时，很多问题都会简化。因为当你看到问题以算法的形式表达出来时，很多问题就简化了，这也可以让我们看到不同问题的相似之处。
Another important element is code review, making sure that you look through the code and see if senior people can provide hints about how to do something better. And you have to review similar projects that have gone super, super well; programmers can look at how those other people performed previously, and get ideas from the other project about how to improve their own program.
代码审查也是关键一环，需要仔细检查代码，并寻求资深人士的建议，以优化实现方式。同时，审视那些非常成功的相似项目也十分重要；程序员可以通过分析这些项目的表现，从中吸取灵感，以此来提升自己程序的质量。
INTERVIEWER: Where do the ideas for programs come from?
程序的灵感来自于哪里？
GATES: Well, there’s no formal process, that’s for sure. At Microsoft, there’s usually a brainstorming session at night or on the weekends. Everybody has a general idea, like, we want to do the world’s best word processor. And we want it to allow a technical publications department to do everything they want to do. We’ll sit and talk. Well, how could we make it really fast? Could we put a drawing capability in, or could we do kerning without making the program super slow? A variety of problems will get talked through and some neat ideas will come up.
没有什么正式的流程，不过我们会在每周末晚上来一次头脑风暴，参与者都雄心壮志，希望让 word 成为世界上最棒的文字编辑器，我们也鼓励大家去实现自己的想法。我们会坐下来探讨：怎样才能提升处理速度？能否加入绘图功能，或者在不大幅减慢程序的情况下实现字距调整？在讨论中，我们会解决各种问题，并产生一些创新的想法。
INTERVIEWER: Basically it’s a group effort?
所以说，这是团队努力的结果？
GATES: In terms of deciding what programs are going to do, a fairly large group makes suggestions. Then there’s a filtering process. Eventually I’ll decide which of the ideas makes sense, and I’ll make sure we have champions who are personally involved in making that product succeed. We decide to do very, very few projects because it takes incredible focusing on a lot of resources to get a product out there and set a new world-class standard.
大家群策群力，会有许多的建议涌现，当然，是要筛选的，我来决定这件事，并且会选拔那个最给力的家伙当作冠军。我们目标是做世界上最伟大的软件，这很难，只能集中力量办一件大事。
INTERVIEWER: There’s a lot of talk about how large software companies find it difficult to attract talented people who can produce great software, because these mavericks are so independent that they want to work on their own. How do you attract and keep good people at Microsoft?
我们都知道，越是大的公司就越难以吸引哪些”天才”程序员，你是如何做的呢？
GATES: Great programmers are critical to create software products. But we don’t believe in a prima donna approach, where just because somebody’s good we let him not comment his code, or not communicate with other people, or impose his beliefs on everyone else.
我承认厉害的程序员很有用，但是我不会惯他们的。
We want people who really respect each other. I think most great programmers like to be around other great programmers. When they think up an incredible algorithm, they like having peers who can appreciate the cleverness that went into it, because when you’re creating something like that and you have that model in your mind, it’s a lonely thing. If you thought a process had to be complicated, and then you figure out a way to make it simpler, that makes you feel great. But you want to get some feedback from other people. Once you get a few great people, then others come.
作为打工人，他一定要有团队性。在这个前提下，我们认为创造绣好的环境会聚集优秀的人，没有人喜欢孤芳自赏，只要一个优秀的程序员，就会有更多的优秀的程序员。
The old rule used to be that a manager of a programmer was always a better programmer, and there were no what we called “technical inversions,” where a programmer works for somebody who doesn’t know how to program. We still follow that philosophy: At certain levels we’ve got business managers, but we don’t have non-programmers really managing programming projects.
我们不会让不懂程序的人来管理软件项目的，绝对不会出现外行领导内行的情况，除非有时候我们需要卖软件的时候，我们才会有一个营销经理。
INTERVIEWER: Do you think there are any particular rules for creating a good program?
你有没有什么写程序的独门秘方？
GATES: Some people just jump in and start coding, and others think it all through before they sit down, but I think you’d find that the programmers who sit down and code at the beginning are only using that as a scratch pad. It’s what’s going on in their heads that’s most important.
You’ve got to have somebody who’s super smart. A great programmer thinks about the program on a constant basis, whether driving or eating. That method takes an incredible amount of mental energy.
有些人刚开始就投入编程，而另一些人则在动手前深思熟虑。但开始编程的人实际上只是在做初稿。关键在于他们脑海中的思考过程。你需要的是一个极富智慧的人。一个优秀的程序员会在任何时候，无论是驾车还是进餐，都持续思考着编程问题。这样的专注需要巨大的心力。
INTERVIEWER: How would you describe your style of programming?
你会怎样形容你自己的编程方式？
GATES: I like to think the whole program through at a design level before I sit down and write any of the code. And once I write the code, I like to go back and rewrite it entirely one time.The most important part of writing a program is designing the data structures. The second most important part is breaking the various code pieces down. Until you really get in there and write it out, you don’t have the keenest sense of what the common subroutines should be.
The really great programs I’ve written have all been ones that I have thought about for a huge amount of time before I ever wrote them. I wrote a BASIC interpreter for a minicomputer in high school. I made massive mistakes in that program, and then I got to look at some other BASIC interpreters. So by the time I sat down to do Microsoft BASIC in 1975, it wasn’t a question of whether I could write the program, but rather a question of whether I could squeeze it into 4K and make it super fast. I was on edge the whole time thinking, “Will this thing be fast enough? Will somebody come along and do it faster?”
I have an image in my head of this person named Norton that I met at TRW. He always showed me when I wasn’t doing super well. So if I’m sloppy or lazy, I always imagine that he’s going to walk up, look at the program, and tell me, “Look, here’s a better way to do that.” Little inefficiencies can slip into the program along the way, and if you want to really feel good about it, you’ve got to maintain the thought that you’re not going to let that stuff creep in. That’s why it’s kind of painful sometimes if you have somebody else working on the project. They never code stuff exactly the way you like to see it coded. I remember when we were working on BASIC, I’d go back and recode other people’s sections of code, without making any dramatic improvement. That bothers people when you go in and do that, but sometimes you just feel like you have to do it.
我习惯于在动手编程前，先在设计层面彻底思考整个程序。编写完代码后，我倾向于再全面重写一遍。最关键的编程环节是设计数据结构，其次是细化代码模块。你必须亲自动手写代码，才能深刻理解哪些应是关键的子程序。
我编写的杰出程序都是经过长时间深思熟虑的。高中时，我为一台小型计算机编写了BASIC解释器，其中犯了重大错误。后来，我研究了其他BASIC解释器。因此，当1975年我开始编写微软BASIC时，挑战不在于能否编写它，而在于如何将其压缩至4K且运行迅速。我一直在想：“它的速度够快吗？会不会有人做得更快？”
我记得在TRW遇到的诺顿。他总是在我表现不佳时出现。如果我马虎或懒惰，我就会想象他检查我的程序，并指出更佳方法。程序中可能潜藏着细微的效率问题，要想真正自豪，就必须防止这些问题悄悄出现。这就是为什么有时候别人参与项目会令人苦恼，他们的编码方式可能不尽如人意。我记得在开发BASIC时，我经常重写别人的代码，尽管并未大幅改进。这种做法可能会引起不满，但有时你觉得这是必要的。

未待完续...
