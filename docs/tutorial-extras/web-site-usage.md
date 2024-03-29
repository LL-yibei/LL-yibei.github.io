---
theme: github
---

# 简单了解Auth2.0

## 概念

OAuth2.0是一种关于在线授权的网络标准。

OAuth 2.0 无需共享用户的信息，允许授权第三方应用访问他们存储在另外的服务上的数据。Web 是 OAuth 2 的主要平台，它规范了如何处理对第三方客户端类型（基于浏览器的应用程序、服务器端 Web 应用程序、本机/移动应用程序、连接设备等）的委托访问。

## 角色

*   资源服务器(Resource server)：服务提供商存放用户生成的资源的服务器。接受并验证来自客户端的访问令牌，并返回适当的资源。
*   客户端(Client)：是需要访问受保护资源的系统。要访问资源，客户端必须持有适当的访问令牌。
*   授权服务器(Authorization server)：第三方服务专门用来处理认证的服务器。
*   授权服务器在成功验证资源所有者并获得授权后，向客户端发放访问令牌。授权服务器主要有两个端点：授权端点（处理用户的交互式身份验证和同意）和令牌端点（参与机器对机器交互）。

**OAuth2.0的作用就是让"客户端"安全可控地获取"用户"的授权，与"服务提供商"进行交互。**

