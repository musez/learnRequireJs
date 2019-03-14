require.config({
    // 用于加载模块的根路径。
    // baseUrl: "./lib",
    // map告诉RequireJS在任何模块之前，都先载入这个css模块
    // map: {
    //     '*': {
    //         css: './../lib/css.min.js'
    //     }
    // },
    // 用于映射不存在根路径下面的模块路径。
    paths: {
        jquery: "./../lib/jquery.min",
        // 'jquery-bootstrap': "//cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min",
        layer: '//cdn.bootcss.com/layer/2.3/layer',
    },
    // 配置在脚本/模块外面并没有使用RequireJS的函数依赖并且初始化函数。假设underscore并没有使用 RequireJS定义，但是你还是想通过RequireJS来使用它，那么你就需要在配置中把它定义为一个shim。
    shims: {
        layer: {
            deps: [
                // 'jquery',
                // 'css!//cdn.bootcss.com/layer/2.3/skin/layer.css'
            ],
            exports: "layer"
        },
        // 'jquery-bootstrap': {
        //     deps: [
        //         'jquery',
        //         'css!//cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css', //css!声明样式依赖
        //     ]
        // }
    },
})

define(['jquery',"layer"], function ($,layer) {
    layer.alert("fdsafsadfsa")
    // document.getElementById("myDiv").style.backgroundColor = "red";
    $("#myDiv").css("backgroundColor", "red")
})
