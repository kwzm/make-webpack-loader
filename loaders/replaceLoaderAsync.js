const loaderUtils = require('loader-utils')

// 不能用箭头函数定义
module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async()

  setTimeout(() => {
    const result = source.replace('dell', options.name)

    callback(null, result)
  }, 1000)
} 