(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{453:function(t,e,s){"use strict";s.r(e);var n=s(17),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"项目背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),s("ul",[s("li",[t._v("项目名：创合汇慕课。")]),t._v(" "),s("li",[t._v("概述：具有直播功能的演说慕课网站，包含会员系统，评论系统，笔记，微信支付，微信分享。")])]),t._v(" "),s("h2",{attrs:{id:"开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[t._v("用户进入公众号，通过授权链接回调进入首页（授权链接只能携带两个参数）。")]),t._v(" "),s("li",[t._v("授权链接返回的url上带有参数code，通过code参数向后台请求openid。openid是唯一账号的认证。")]),t._v(" "),s("li",[t._v("登录系统，本地存储登录时间，请求到的过期时间，token,code（用来刷新token），loginType（游客，随便看看用户，注册用户）")]),t._v(" "),s("li",[t._v("进入到首页的时候判断本地存储的loginType类型，如果是游客，跳转到登陆页，如果是随便看看，直接进首页，如果是注册用户获取本地token。")]),t._v(" "),s("li",[t._v("token，作为所有非首页展示页面的请求令牌。注册用户获取token，判断token是否存在，不存在跳转登陆页，存在继续判断是否过期，过期跳登陆页。")])]),t._v(" "),s("h2",{attrs:{id:"jssdk调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jssdk调用"}},[t._v("#")]),t._v(" JSSDK调用")]),t._v(" "),s("ol",[s("li",[t._v("首先在页面js最前面加载jweixin.js文件，用于初始化签名参数。（js安全域名）")]),t._v(" "),s("li",[t._v("获取js签名参数，通过token，openid等参数请求js签名参数，配置wx.config")]),t._v(" "),s("li",[t._v("通过wx.ready()函数初始化完成之后调用jssdk里的方法。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);