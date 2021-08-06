const fs = require('fs')

var files = fs.readdirSync('./images/') // 需要复制的所有图片

try{
  files.forEach(item => {
    var readStream = fs.createReadStream('./images/' + item) // 被复制文件
    // 创建一个写入流
    var writeStream = fs.createWriteStream('./public/' + item) // 复制到的目标位置及文件
    // 读取流的内容通过管道流写入到输出流
    readStream.pipe(writeStream)
  })
} catch(e) {
  console.log(e)
}
