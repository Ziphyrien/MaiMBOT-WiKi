---
createTime: 2024/11/19 19:56:00
permalink: /tools/dev-sidecar/
icon: mdi:car-side
title: dev-sidecar
---
::: note
搬运自项目的README              
一般启动软件即可进行Github访问加速
:::
<RepoCard repo="docmirror/dev-sidecar" />
开发者边车，命名取自service-mesh的service-sidecar，意为为开发者打辅助的边车工具（以下简称ds）
通过本地代理的方式将https请求代理到一些国内的加速通道上

<a href='https://github.com/docmirror/dev-sidecar'><img alt="GitHub stars" src="https://img.shields.io/github/stars/docmirror/dev-sidecar?logo=github"></a>

> Gitee上的同步项目已被封禁，此项目将不再更新与维护 【狗头保命】
>
> 我将继续奋战在开源一线，为社区贡献更多更好的开源项目。
> 感兴趣的可以关注我的主页 [【github】](https://github.com/greper) [【gitee】](https://gitee.com/greper)

## 打个广告

> [https://github.com/certd/certd](https://github.com/certd/certd)
> 我的开源证书管理工具项目，全自动申请和部署证书，有需求的可以去试试，帮忙点个star

## 重要提醒

> ------------------------------重要提醒1---------------------------------
>
> 注意：由于electron无法监听windows的关机事件，开着ds情况下直接重启电脑，会导致无法上网，你可以手动启动ds即可恢复网络，你也可以将ds设置为开机自启。
>
> 关于此问题的更多讨论请前往：[https://github.com/docmirror/dev-sidecar/issues/109](https://github.com/docmirror/dev-sidecar/issues/109)
>
> 注：此问题已在 `1.8.9` 版本中得到解决。

> ------------------------------重要提醒2---------------------------------
>
> 注意：本应用启动会自动修改系统代理，所以会与其他代理软件有冲突，请务必不要一起使用。
> 本应用主要目的在于直连访问github，如果你已经有飞机了，那建议还是不要用这个自行车（ds）了

## 一、 特性

### 1.1、 dns优选（解决\*\*\*污染问题）

- 根据网络状况智能解析最佳域名ip地址，获取最佳网络速度
- 解决一些网站和库无法访问或访问速度慢的问题
- 建议遇到打开比较慢的国外网站，可以优先尝试将该域名添加到dns设置中（注意：被\*\*\*封杀的无效）

### 1.2、 请求拦截

- 拦截打不开的网站，代理到加速镜像站点上去。
- 可配置多个镜像站作为备份
- 具备测速机制，当访问失败或超时之后，自动切换到备用站点，使得目标服务高可用

### 1.3、 github加速

- github 直连加速 (通过修改sni实现，感谢 [fastGithub](https://github.com/dotnetcore/FastGithub) 提供的思路)
- release、source、zip下载加速
- clone 加速
- 头像加速
- 解决readme中图片引用无法加载的问题
- gist.github.com 加速
- 解决git push 偶尔失败需要输入账号密码的问题（fatal: TaskCanceledException encountered / fatal: HttpRequestException encountered）
- raw/blame加速

> 以上部分功能通过 `X.I.U` 的油猴脚本实现， 以下是仓库和脚本下载链接，大家可以去支持一下。
>
> - [https://github.com/XIU2/UserScript](https://github.com/XIU2/UserScript)
> - [https://greasyfork.org/scripts/412245](https://greasyfork.org/scripts/412245)
>
> 由于此脚本在ds中是打包在本地的，更新会不及时，你可以直接通过浏览器安装油猴插件使用此脚本，从而获得最新更新（ds本地的可以通过 `加速服务->基本设置->启用脚本` 进行关闭）。

### 1.4、 Stack Overflow 加速

- 将ajax.google.com代理到加速CDN上
- recaptcha 图片验证码加速

### 1.5、 npm加速

- 支持开启npm代理
- 官方与淘宝npm registry一键切换
- 某些npm install的时候，并且使用cnpm也无法安装时，可以尝试开启npm代理再试

**_安全警告_**：

- 请勿使用来源不明的服务地址，有隐私和账号泄露风险
- 本应用及服务端承诺不收集任何信息。介意者请使用安全模式。

## 二、快速开始

支持windows、Mac、Linux(Ubuntu)

### 2.1、DevSidecar桌面应用

#### 1）下载安装包

- release下载
  [Github Release](https://github.com/docmirror/dev-sidecar/releases)

> Windows: 请选择DevSidecar-x.x.x.exe
> Mac: 请选择DevSidecar-x.x.x.dmg
> Ubuntu: 请选择DevSidecar-x.x.x.deb
> 其他linux: 请选择DevSidecar-x.x.x.AppImage (未做测试，不保证能用)

#### 2）安装后打开

> 注意：mac版安装需要在“系统偏好设置->安全性与隐私->通用”中解锁并允许应用安装

![](/dev-sidecar/index.png)

#### 3）安装根证书

第一次打开会提示安装证书，根据提示操作即可

#### 4）开始加速吧

去试试打开github

### 2.2、开启前 vs 开启后

|          | 开启前                     | 开启后                              |
| -------- | -------------------------- | ----------------------------------- |
| 头像     | ![](/dev-sidecar/avatar2.png) | ![](/dev-sidecar/avatar1.png)       |
| clone    | ![](/dev-sidecar/clone-before.png) | ![](/dev-sidecar/clone.png)         |
| zip 下载 | ![](/dev-sidecar/download-before.png) | ![](/dev-sidecar/download.png)秒下的，实在截不到速度的图 |

## 三、模式说明

### 3.1、安全模式

- 此模式：关闭拦截、关闭增强、开启dns优选、开启测速
- 最安全，无需安装证书，可以在浏览器地址栏左侧查看域名证书
- 功能也最弱，只有特性1，相当于查询github的国外ip，手动改hosts一个意思。
- github的可访问性不稳定，取决于IP测速，如果有绿色ip存在，就 `有可能` 可以直连访问。
  ![](/dev-sidecar/speed.png)

### 3.2、默认模式

- 此模式：开启拦截、关闭增强、开启dns优选、开启测速
- 需要安装证书，通过修改sni直连访问github
- 功能上包含特性1/2/3/4。

## 四、 最佳实践

- 把dev-sidecar一直开着就行了（注意windows下开着ds重启电脑，会无法上网，重新打开ds即可。）
- 建议遇到打开比较慢的国外网站，可以尝试将该域名添加到dns设置中（注意：被\*\*\*封杀的无效）

### 其他加速

#### 1）git clone 加速

- 方式1：快捷复制：

  > 开启脚本支持，然后在复制clone链接下方，即可复制到加速链接

- 方式2：

  > 1. 使用方式：用实际的名称替换 `{}` 的内容，即可加速clone [https://hub.fastgit.org/{username}/{reponame}.git](https://hub.fastgit.org/%7Busername%7D/%7Breponame%7D.git)
  > 2. clone 出来的 remote "origin" 为fastgit的地址，需要手动改回来
  > 3. 你也可以直接使用他们的clone加速工具 [fgit-go](https://github.com/FastGitORG/fgit-go)

#### 2）`github.com` 的镜像网站（注意：部分镜像网站不能登录）

> 1. [hub.fastgit.org](https://hub.fastgit.org/) （2024/11/18：这个好像失效了？）
> 2. [github.com.cnpmjs.org](https://github.com.cnpmjs.org/) 这个很容易超限（2024/11/18：这个好像失效了？）
> 3. [dgithub.xyz](https://dgithub.xyz/)

## 五、api

### 5.1、拦截配置

```js
const intercepts = {
  'github.com': {
    '/.*/.*/releases/download/': {
      redirect: 'download.fastgit.org'
    },
    '.*': {
      proxy: 'github.com',
      sni: 'baidu.com'
    }
  },
  'ajax.googleapis.com': {
    '.*': {
      proxy: 'ajax.loli.net',
      backup: ['ajax.proxy.ustclug.org'],
      test: 'ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
      replace: '/(.*)/xxx'
    }
  },
  'clients*.google.com': {
    '.*': {
      abort: true
    }
  }
}
```

### 5.2、DNS优选配置

```json
{
  "dns": {
    "mapping": {
      "api.github.com": "cloudflare",
      "gist.github.com": "cloudflare",
      "*.githubusercontent.com": "cloudflare"
    }
  }
}
```

## 六、问题排查

### 6.1、dev-sidecar的前两个开关没有处于打开状态

1. 尝试将开关按钮手动打开
2. 请尝试右键dev-sidecar图标，点退出。再重新打开
3. 如果还不行，请将日志发送给作者

如果是mac系统，可能是下面的原因：

#### 1）Mac系统使用时，首页的系统代理开关无法打开

出现这个问题可能是没有开启系统代理命令的执行权限

```
networksetup -setwebproxy 'WiFi' 127.0.0.1 31181
#看是否有如下错误提示
** Error: Command requires admin privileges.
```

如果有上面的错误提示，请尝试如下方法：

> 系统偏好设置→安全性与隐私→通用→高级→取消勾选“访问系统范围的偏好设置需要输入管理员密码”

### 6.2、没有加速效果

1. 请确认访问的网站地址是https开头
2. 检查浏览器插件或代理软件冲突
3. 确认浏览器代理设置为使用系统代理
4. 尝试更换浏览器

### 6.3、浏览器打开提示证书不受信任

![](/dev-sidecar/crt-error.png)

#### 浏览器处理步骤：

1. 重新安装证书后重启浏览器
2. 火狐浏览器需手动导入证书至“证书颁发机构”

### 6.4、打开github显示连接超时

1. 检查测速界面github.com是否有可用IP
2. 安全模式下等待刷新
3. 增强模式下可能因访问量大导致超时

### 6.5、查看日志

日志路径：加速服务→日志按钮→打开日志文件夹
![](/dev-sidecar/log.png)

### 6.6、应用意外关闭导致没有网络

解决方案：
1. 重新打开应用
2. [手动关闭系统代理设置](#手动恢复网络代理设置)
3. 设置应用为开机自启

### 6.7、手动恢复网络代理设置

1. 关闭系统代理设置：
   - Windows：设置→网络→手动关闭代理
   - Mac：系统偏好→网络→高级→代理→取消勾选
2. 清除git代理设置：
   ```shell
   git config --global --unset http.proxy
   git config --global --unset https.proxy
   git config --global --unset http.sslVerify
   ```
3. 清除npm代理设置：
   ```shell
   npm config delete proxy
   npm config delete https-proxy
   ```

## 七、贡献代码

### 7.1、环境准备

```shell
git clone https://github.com/docmirror/dev-sidecar
cd dev-sidecar
pnpm install
cd packages/gui
npm run electron
```

### 7.2、提交PR

欢迎提交改进代码或问题修复

## 八、联系作者

加群备注dev-sidecar：
- QQ 2群：[667666069](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=n4nksr4sji93vZtD5e8YEHRT6qbh6VyQ&authKey=XKBZnzmoiJrAFyOT4V%2BCrgX5c13ds59b84g%2FVRhXAIQd%2FlAiilsuwDRGWJct%2B570&noverify=0&group_code=667666069)
- QQ 4群：[438148299](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=i_NCBB5f_Bkm2JsEV1tLs2TkQ79UlCID&authKey=nMsVJbJ6P%2FGNO7Q6vsVUadXRKnULUURwR8zvUZJnP3IgzhHYPhYdcBCHvoOh8vYr&noverify=0&group_code=438148299)

## 九、其他项目

- [fast-crud](https://github.com/fast-crud/fast-crud)
- [certd](https://github.com/certd/certd)
- [trident-sync](https://github.com/handsfree-work/trident-sync)

---

**特别鸣谢**
- [lerna](https://lerna.js.org/)
- [FastGit](https://fastgit.org/)
- [ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN)
