# 本项目是一个web前端交流社区，带有markdown的教学内容展示+论坛前后台（Vue2+springboot+MySQL)





# 前端:

下载后运行npm i 安装依赖，

无需更改其他内容，

npm run server 启动



如果要上线到服务器

请修改main.js中的

Vue.prototype.$baseUrl = 'http://localhost:9091'

请修改utils下request.js中的

 baseURL: 'http://localhost:9091'

localhost都修改为你的服务器ip，端口自定义，前端修改后端也要修改

npm run build生成dist文件

将dist上传到你的服务器

因为路由为history模式，需要配置nginx

# 后端:

java1.8

maven自动安装依赖，

首先进入application.yml修改以下内容

```
username: root   #你本地的数据库用户名
password: 123456 #你本地的数据库密码
url: jdbc:mysql://localhost:3306/forum?useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true&useSSL=false&serverTimezone=GMT%2b8&allowPublicKeyRetrieval=true
```

username: 
password:

url中forum改为你的数据库名字

启动项目，如果导入数据库后不做更改url无需改变



java后端项目上线服务器很简单，自行百度

# 数据库:

Mysql

将springboot文件下的sql文件运行