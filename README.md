## 介绍

给予ElementUI+vue2，工作项目的一些案例积累。

已经完成的案例如下表：

|序号|标题|
|---|---|
|001|语文|


<br/>


## 其他

### 项目运行

1. 说明

本项目要求node版本8.17.0

可以用nvm来管理node版本

[nvm下载地址](https://nodejs.org/zh-cn/download/releases/)

安装好后，修改nvm安装目录下的settings.txt，添加

```
node_mirror:npmmirror.com/mirrors/node/
npm_mirror:npmmirror.com/mirrors/npm/
```

再用nvm来安装node

```
nvm install 8.17.0
nvm list
nvm use 8.17.0
node -v
npm -v
```


2. 安装

```
# 安装依赖
npm install

# 本地运行
npm run serve

# 编译打包
npm run build
```

<br/>

### git多用户

进入本项目后，设置单独的local级git账户

```bash
cd /elementui-for-work/

# 查看本项目是否有local账户
git config --local --list

# 有的话，直接用，或者删掉
git config --unset --local user.name
git config --unset --local user.email

# 没有，则为本项目（也就是本目录）添加一个local账户
git config --local user.name "user1"
git config --local user.emai user1@email.com

# 查看一下是否添加成功
git config --local --list

# 执行代码git常规操作（添加本目录代码到github远程仓库）
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/wcodeplus/elementui-for-work.git
git push -u origin main

# 出现10054问题
先查看local下的list是否有http.sslVerify
git config --local --list

没有的话，就添加一下（添加到local，不然无效）
git config --local http.sslVerify "false"

# 出现443问题

git config --global http.proxy http://127.0.0.1:8080
git config --global https.proxy http://127.0.0.1:8080

取消
git config --global --unset http.proxy

参考：https://blog.csdn.net/loulansd/article/details/121844302

# 更多可以参考
http://i.lckiss.com/?p=7397
```
