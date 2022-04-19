转载至：[面向切面编程简介](https://nuysoft.github.io/2013/09/04/intro-to-aspect-oriented-programming)

------------------

面向切面编程（AOP）是一种增强对象和方法的行为的技术，可以无侵入地增加功能。AOP 允许你从“外部”增加新行为，以及合并和修改既有的行为。

虽然有多项技术可以用于增加或合并行为，例如继承、组合和代码，但是 AOP 在许多情况下被证明更具灵活性和低侵入性，可以是你技术工具箱的一项有益补充。

让我们用一个简单的例子来看看它是如何工作的。

假设我们的代码中含有下面的简单对象。

function Thing() {}

Thing.prototype.doSomething = function(x, y) {
    var result;

    // compute some result using x and y

    return result;
};
假设我们像下面这样，在应用程序中通过编码使用了上面对象的许多实例。

var thing = new Thing();

// some time later, and possibly even in
// another part of the application
var result = thing.doSomething(x, y);
1. 增加行为 ⬆
现在，假设我们怀疑 Thing.prototype.doSomething 是性能问题的根源，我们想要记录它的输入 x 和 y，计算 result 所花费的时间，以及 result 的值。

1.1 修改所有的调用点 ⬆
有一种方式可以在调用 Thing.prototype.doSomething 的每个场景记录数据：

var start = Date.now();

var result = thing.doSomething(x, y);

console.log((Date.now() - start) + 'ms', x, y, result);
显然，如果在应用程序中多次调用了 Thing.prototype.doSomething，那么上面的做法将会导致大量的剪切和粘贴。你可以会错过一些地方，或者更糟的是，在收集完数据之后你可能忘了移除某些代码。

1.2 修改源代码 ⬆
另一种方式是修改 Thing 的源代码：

Thing.prototype.doSomething = function(x, y) {
    var result;

    var start = Date.now();

    // compute some result using x and y

    console.log((Date.now() - start) + 'ms', x, y, result);

    return result;
};
虽然这种方式集中了变化，但具有相当的侵入性：需要改变 Thing 的源代码。假设 Thing.prototype.doSomething 是一个更复杂些的方法，含有多个 return 点，以及一些 try/catch/finally 块。此时，为了收集需要的数据而且不改变方法的行为，修改源代码并不容易。

如果你还想以类似的方式来分析其他的方法，你仍然需要改变它们的源代码。


1.3 使用继承 ⬆
还有一种方式可以避免修改 Thing 的源代码，即使用继承来：

function ProfiledThing() {
    Thing.apply(this, arguments);
}

ProfiledThing.prototype = Object.create(Thing.prototype);

ProfiledThing.prototype.doSomething = function() {
    var start = Date.now();

    var result = Thing.prototype.doSomething.apply(this, arguments);

    console.log((Date.now() - start) + 'ms', x, y, result);

    return result;
}
这种方式避免了修改 Thing 的源代码，但是有一个重要问题：需要改变代码中调用构造函数 new Thing() 的每个点，使它们转而调用构造函数 new ProfiledThing()。

虽然有其他办法可以缓解这个问题，但是到目前为止，我们应该清晰的意识到，需要一种更好的方式来引入这种分析行为。

2. 分离关注点 ⬆
这种分析行为有一个有趣的特性，它与 Thing 的主要或首要功能无关。它是一个（额外的）附属功能。

创建 Thing 很可能是为了在特定的领域下解决特定的问题。而上面的方案则试图为 Thing 的领域引入与之无关的行为，而 Thing 的领域对于分析行为一无所知。

Thing 不需要知道任何有关分析行为的事情来完成其工作，但是上面的的方法却强制使 Thing 的领域关注分析行为。

我们需要的技术是，以一种可控的、无侵入的方式引入这类行为。不仅可以有力的保留 Thing 的行为，而且不需要修改 Thing 的源代码，或者修改任何创建或消费 Thing 的代码。

3. 引入 AOP ⬆
正如前文所述，AOP 是一项可以无侵入地增加行为的技术。在 JavaScript 中，实现这项技术非常简单。甚至不需要借助任何工具或库就可以实现，尽管工具或库会有所帮助（建立一种可复用的模式）。

如果你曾经实现过下面所示的代码，那么你已经在 JavaScript 中实现了 AOP：

var origDoSomething = thing.doSomething;

// Method replacement is a simple form of AOP
thing.doSomething = function() {
    doSomethingElseFirst();

    return origDoSomething.apply(this, arguments);
}
上面的代码为 thing.doSomething 有效地增加了行为。现在，当 thing.doSomething 被调用时，doSomethingElseFirst 将先被执行，然后再执行原来的行为。

从 AOP 的角度，我们可以说 doSomethingElseFirst 是应用于 thing.doSomething 的一个行为切面。明确地讲，doSomethingElseFirst 称作“before advice”...也就是说，我们建议 thing.doSomething 应该在执行它本来的任务之前先执行 doSomethingElseFirst。AOP 实现通常会提供多种 advice 类型，例如 before、after、afterReturning、afterThrowing 以及 around。

译注：advice 表示具体要执行的操作，通过 before、after、afterReturning、afterThrowing 来区别是在之前、之后、返回之后还是异常之后执行 advice，通过 around 代替（之前+之后，或模拟）原来的操作。

关于上面的简单例子，有几个重要的事情需要注意：

Thing 的源代码没有被改变。
thing 的消费者不需要改变。
doSomething 的行为得以保留，例如它的上下文和参数。
Thing 对 doSomethingElseFirst 一无所知，并且不依赖它。因此 Thing 的单元测试也不需要更新。当然，我们需要为 doSomethingElseFirst 编写单元测试，但除此之外，再没有新的代码需要测试用例。
3.1 AOP 应用示例 ⬆
让我们以 AOP 的方式来为 Thing 增加分析行为。

var origDoSomething = Thing.prototype.doSomething;

Thing.prototype.doSomething = function() {
    var start = Date.now();

    var result = origDoSomething.apply(this, arguments);

    console.log((Date.now() - start) + 'ms', x, y, result);

    return result;
}
我们再次使用了方法替换技术，但是这次替换的是 Thing 原型上的一个方法。所有的 Thing 示例将使用这个新的、具备分析行为的 doSomething。这类切面称为“around advice”，因为是同时在原始方法的之前和之后执行了某些额外的行为。

尽管这看起来与前面的继承示例非常类似，但是有一个非常重要的区别：我们没有引入新的构造函数，因此 Thing 的消费者不需要改变。

4. AOP 实践 ⬆
通过无侵入地为单个原型的单个方法添加分析行为，简单地演示了 AOP 在 JavaScript 中是如何实现的，不知如此，该技术还可以用于执行更复杂和更有趣的事情，例如：

收集整个引用的分析数据
跟踪程序执行过程来可视化调用树（栈）
自动重新执行失败的异步 I/O，例如 XHR 或数据库请求
在应用程序中以松耦合的方式连接合作组件（协同工作），而不是使用事件或 Pub/Sub。
在后面的教程中，我们将看到更多的关于如何实现 AOP 的例子，以及它的适用场景。

译注：

AOP 的适用场景包括但不限于日志记录、性能统计、安全控制、事务处理、异常处理等等。
JBoss AOP 1.3 Javadoc