# GruntJS With RequireJS

GruntJS对RequireJS进行自动化处理。还使用了almond.js对代码进行性能优化，替换掉RequireJS，从而达到最佳的性能。除此之外，本例子也覆盖了前端优化的其它部分，主要有图片的压缩，JS和CSS的合并、压缩，对所有静态文件的文件根据其内容加上hash，然后把CSS、HTML等文件中对所有的静态文件名替换成加上hash的新文件名。对所有的静态内容的路径上加上CDN的URL，最后将所有的静态文件上传到七牛CDN上去。htpp://d.177991.com是一个基于NodeJS项目，实现了整个过程。如果需要没有使用RequireJS的例子，请看使用[Grunt with CDN](http://git.augmentum.com.cn/frontend/gruntjs-with-cdn/tree/master)。

## RequireJS优化
基于RequireJS模块化开发出来的代码默认会有多个HTTP请求，性能比较差，RequireJS官方提供了r.js工具可以将一个页面上的所有模块压缩在一个文件里，原理就是它会根据模块的依赖关系依次把所有需要的模块放到一个文件里，从而达到减少HTTP请求的目的。GruntJS官方提供了contrib-requirejs插件来自动化优化。这里还需要解决日常开发和自动化处理不冲突的问题，因为开发调试阶段是不会作优化的，所以既要保证代码在优化前可以使用，又要保证优化后也可以使用。传统经过r.js优化之后的代码至少有2个请求，一个是requirejs，另一个是我们的代码，这个已经是RequireJS官方推荐的最佳优化了。但是既然我们只有一个JS文件了，我们干嘛还要使用RequireJS呢，毕竟RequireJS文件还是很大的。所以我们最后使用almond.js来替换RequieJS，因为almond.js实现了AMD规范的几个接口。这里为了在优化时去掉HTML代码中对RequireJS的引用，使用了grunt-preprocess插件，它可以对文本进行操作，我们在这里利用它去掉引用RequireJS的代码。

## 用法
1. grunt build
2. grunt upload

我本来是想将2个步骤合成一个步骤执行的，但是貌似因为执行cdn上传是用的异步操作，导致合并失败。
