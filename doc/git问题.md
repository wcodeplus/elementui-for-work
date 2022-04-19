Git :fatal: refusing to merge unrelated histories解决
$git pull origin master --allow-unrelated-histories


fatal: remote origin already exists.解决方法
1、先输入 git remote rm origin
2、再输入 git remote add origin**************

配置Github免密码登录
配置SSH Keys方式
配置Personal access tokens方式
参考地址：[](https://segmentfault.com/a/1190000040896617)

Git：443超时的解决办法
git config --global --unset http.proxy
git config --global --unset https.proxy


## 多个 git 账号

区别工作和私人的 git 账号

git 分三个层级的配置：system、global和local。

使用这个原理，就可以给一个电脑配置多个 git 账号。

### 工作账号（公司的gitlab，用global级别）

先查看现在的配置

```
git config --global --list
```
如果没有，就添加进去

```
git config --global user.name
git config --global user.email
```

如果错了，就先清空，再添加

```
git config --unset --global user.name
git config --unset --global user.emal

git config --global user.name
git config --global user.email
```

### 私人账号（自己的github，用local级别）

同样先查看，不过这个时候需要多一个步骤。

先找到一个新的目录，如 e:/wcode/ ，在这个目录下 

```
git init
git config --local user.name
git config --local user.email
```
这时候就可以在这个目录下，查看一下是不是添加成功了

```
git config --local --list
```

到现在为止，只要是 e:/wcode/ 目录，就会默认用 local 级别的git账号


[参考地址](http://i.lckiss.com/?p=7397)

## git 10054和443问题

**10054问题**（注意：看自己的项目是local还是global）

```
git config --local http.sslBackend "openssl"
git config --local https.sslBackend "openssl"
git config --local http.sslVerify "openssl"
git config --local https.sslVerify "openssl"

git config --local --unset http.proxy
git config --local --unset https.proxy
```

**443问题**

多提交几次，不行就换加速器或者用手机热点提交

## 本地未pull就开始写了

https://www.dovov.com/git-pull-rebasegit-pull-ff-only.html

远程： A-B-C
本地： A-B-D

在本地 pull --rebase 后
本地变成了  A-B-C-D
远程还是 A-B-C
再push上远程