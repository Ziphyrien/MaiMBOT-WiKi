---
title: Bot配置
createTime: 2025/03/11 20:15:21
permalink: /config/config_file/
---

> [!WARNING]
> 鉴于当前更新过于迅速，当前版本的wiki可能跟不上配置文件参数更新速度（当前版本：`2025/03/12`）

## 一、.env.prod文件
首先我们定义一下你要用的API key
```ini
DEEP_SEEK_KEY=         #Deepseek官方
CHAT_ANY_WHERE_KEY=    #ChatAnyWhere
SILICONFLOW_KEY=       #硅基流动
```
把在配置环境中获取到的 API key **按照注释**填到对应的位置
## 二、config/bot_config.toml文件

首先有部分必须填的配置我们要填写

#### 1. 机器人名字与QQ
这部分是机器人名字部分
```ini
[bot]
qq = "机器人QQ号"  # 必填
nickname = "麦麦"  # 机器人昵称，你喊的时候回回答你
alias_names = ["小麦", "阿麦"]  # 机器人别名
# alias_names: 配置机器人可使用的别名。当机器人在群聊或对话中被调用时，别名可以作为直接命令或提及机器人的关键字使用。
# 该配置项为字符串数组。例如: ["小麦", "阿麦"]
```
#### 2. 人格人设
这部分是设定麦麦的人设的，用来设定日程安排和人格
```ini
[personality]
prompt_personality = [
    "曾经是一个学习地质的女大学生，现在学习心理学和脑科学，你会刷贴吧",
    "是一个女大学生，你有黑色头发，你会刷小红书"
] #两条以上，配置人设，用英文逗号分开
prompt_schedule = "一个曾经学习地质,现在学习心理学和脑科学的女大学生，喜欢刷qq，贴吧，知乎和小红书" #配置日程提示词，让AI生成日程
```
注意，prompt_personality需要两条以上，并用**英文逗号**分开

#### 3. 麦麦能回复的群聊
参考注释填写
```ini
[groups]
talk_allowed = [
    
]      # 允许对话的群号，必填，每行一个数字，用英文逗号隔开
talk_frequency_down = []   # 降低回复频率的群号
ban_user_id = []      # 禁止回复的用户QQ号
```
注意，talk_allowed需用**英文逗号**分开

至此，你的麦麦应该可以开始运行了

## 注意事项

1. API密钥安全
- 妥善保管API密钥
- 不要将含有密钥的配置文件上传至公开仓库，不要截图时不小心发给他人
2. 配置修改：
- 修改配置后需重启服务
- 使用默认服务(硅基流动)时无需修改模型配置
- QQ号和群号使用数字格式(机器人QQ号除外)
3. 其他说明：
- 项目处于测试阶段，可能存在未知问题
- 建议初次使用保持默认配置
参考资料：

1. [MaiMBot Document](https://github.com/SengokuCola/MaiMBot)