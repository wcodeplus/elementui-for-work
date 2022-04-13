## 介绍

给予ElementUI+vue2，工作项目的一些案例积累。

已经完成的案例如下表：

|序号|标题|
|---|---|
|001|语文|


<br/>


## 其他

### 项目运行

1. 安装依赖

```
npm install
```

2. 本地运行

```
npm run serve
```

3. 编译打包

```
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

# 出现10054错误
git config --global http.sslVerify "false"

# 更多可以参考
http://i.lckiss.com/?p=7397
```
