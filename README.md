## 部署流程

#### 最简单的部署方式
1. 配置Host + Port（nuxt.config.js）
2. 压缩发布包(手动压缩：.nuxt文件夹，static，nuxt.config.js，package.json)
3. 把发布包传到服务端
4. 解压
5. 安装依赖
6. 启动服务
```bash
  登陆服务器
    ssh root@106.75.3.114
  根目录下创建文件夹
    mkdir realword-nuxt
  切换到该文件夹下
    cd realword-nuxt
  获取当前路径并复制，完成后退出
    pwd
    exit
  scp 命令将本地压缩包文件传输到远程服务器
    scp .\realword-nuxtjs.zip root@106.75.3.114:/root/realword-nuxt
  重新连接服务器，切换到前面创建的文件夹，并解压
    ssh root@106.75.3.114
    cd realword-nuxt
    unzip realword-nuxtjs.zip
  在服务端安装第三方包
    yarn
  启动服务
    yarn start

```

#### 自动化部署（以github action举例）

- 环境准备
  + linux服务器
  + 把代码提交到gitbub远程仓库

- 准备yml文件，在当前项目根目录新建.github/workflows/main.yml

- [配置github asscess token](https://github.com/settings/tokens)

- [配置github 当前项目的secrets](https://github.com/yzbest111/realworld-nuxtjs/settings/secrets/actions)

- 将本地代码打上标签，而后提交到github远程仓库

- 部署成功的服务器地址：http://106.75.3.114:3000/

