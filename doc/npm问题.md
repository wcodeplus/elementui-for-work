## npm问题解决方案


> cnpm是不会读取package-lock.json这个文件的，也不会生成package-lock.json这个文件，所以，cnpm是不支持依赖版本锁定的

## 比较

https://www.cnblogs.com/honkerzh/p/13810202.html

npm
cnpm
nrm
npx

yarn


问题一：资源文件是从哪里下载的？
npm config ls
查看registry 
registry = "https://registry.npmjs.org/"
（1）手机热点：最好是电信手机

问题二：各种下载工具（比较、使用）

（1）临时换源 
npm install 包的名字 --registry https://npmmirror.com/mirrors/
yarn save 包的名字 --registry https://npmmirror.com/mirrors/
（2）切换源
先安装 nrm 或yrm
npm install -g nrm
npm install -g yrm

列出可用源
nrm list
yrm list

测试一下源的反应速度
nrm test 
yrm test

* npm ------ 975ms
  yarn ----- 1547ms
  tencent -- 178ms
  cnpm ----- 744ms
  taobao --- 241ms
  npmMirror - 1669ms

使用某个源
nrm use tencent
yrm user tencent

使用双源工具
npm install -g cgr

cgr ls
cgr use
cgr test
同样的到底


The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.

使用的node版本太新了，那该怎么查看node版本呢？
（1）保留多个node版本，使用npx切换版本
（2）使用使用了管理员方式运行命令行
（3）通过npm命令来删除node_modules文件
npm install rimraf -g
rimraf node_modules


最后，有一些安装不成功的，可以先强制清除缓存再尝试安装
npm cache clean --force

问题三：.npmrc .yarnrc 等文件配置（几级？ -g  -D 等）


1. 查看npm当前registry
npm confis ls

2. 安装nrm用来切换registry
npm install nrm

3. 查看可用的registry
nrm test

npm ------ 981ms
yarn ----- 1187ms
tencent -- 212ms
cnpm ----- 15311ms
taobao --- 238ms
npmMirror - 1698ms

4. 切换组要的registry
nrm use npm

5. 使用npx切换node版本安装node_modules
npx -p node@6 npm install

这时候会提示是否需要使用node6来安装，选y
Need to install the following packages:
  node@6
Ok to proceed? (y) y





The package-lock.json file was created with an old version of npm,
so supplemental metadata must be fetched from the registry.


https://npmmirror.com/
https://mirrors.cloud.tencent.com/




nvm
https://github.com/coreybutler/nvm-windows/releases
C:\Users\Administrator\AppData\Roaming\nvm