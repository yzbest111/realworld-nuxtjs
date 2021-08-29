## 部署流程

#### 最简单的部署方式
1. 配置Host + Port（nuxt.config.js）
2. 压缩发布包(手动压缩：.nuxt文件夹，static，nuxt.config.js，package.json，yarn.lock)
3. 把发布包传到服务端
4. 解压
5. 安装依赖
6. 启动服务
```bash
  登陆服务器
    ssh root@39.105.28.5
  根目录下创建文件夹
    mkdir realword-nuxt
  切换到该文件夹下
    cd realword-nuxt
  获取当前路径并复制，完成后退出
    pwd
    exit
  scp 命令将本地压缩包文件传输到远程服务器
    scp .\realword-nuxtjs.zip root@39.105.28.5:/root/realword-nuxt
  重新连接服务器，切换到前面创建的文件夹，并解压
    ssh root@39.105.28.5
    cd realword-nuxt
    unzip realword-nuxtjs.zip
  在服务端安装第三方包
    yarn
  启动服务
    yarn start

```

#### 自动化部署
