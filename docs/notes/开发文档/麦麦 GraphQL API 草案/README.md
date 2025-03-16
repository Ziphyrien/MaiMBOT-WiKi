---
permalink: /Development/GraphQL-API/README/
title: README
createTime: 2025/03/16 18:02:42
---
# 麦麦 GraphQL API 草案
::: note
本文档搬运自晴猫大佬的[MaiMBot 开发文档](https://docs.mai-mai.org/)
:::
## 概述

本草案是为了设计用于**配置 / 监控 / 管理麦麦**的 API。

## 设计原则

- 本API应该是*基于 GraphQL*的
- 本API应该是*易于文档化*的
- 本API应该是*易于维护*的
- 本API应该是*简单*的
- 本API应该是*安全*的


## 认证

- 本API应该是基于Token的认证
- 除了公共 endpoint, 所有请求统一使用请求头  
  `Authorization: Bearer <token>` 进行认证

## 功能

### 获取状态

首先，我们需要一个接口来获取麦麦的状态概览，例如当前是否在正常运行，当前的 Uptime，当前的版本，模型的 Token 消耗情况等。
