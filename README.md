> 目标: 前端开发移动端及H5时候，不需要再关心移动设备的大小，只需要按照固定
  设计稿的px值布局

# Vue-cli项目，rem解决方案

最近做移动端，用Vue结合lib-flexible和px2rem-loader做移动端的网页适配

[最终项目代码分支master](https://github.com/kkxiaojun/vue-app/tree/master)

## flexible
* 动态改写meta标签
* 给<html>元素添加data-dpr属性，并动态改写data-dpr的值
* 给<html>元素添加font-size属性，并动态改写font-size的值

## px2rem
将px转化为rem

## vue-cli添加flexible
```javascript
    npm install lib-flexible

    // 在main.js中引入
    import 'lib-flexible'
```

## vue-cli添加px2rem-loader
在`build/util.js`中
```javascript
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 64 //设计稿宽度/10
    }
  }
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
```

# vue-cli,vw解决方案
[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

[最终项目代码分支vue-vw](https://github.com/kkxiaojun/vue-app/tree/vue-vw)
