(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{439:function(t,e,l){"use strict";l.r(e);var r=l(17),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"bfc-block-formatting-context-块级格式化上下文"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#bfc-block-formatting-context-块级格式化上下文"}},[t._v("#")]),t._v(" BFC: block formatting context(块级格式化上下文)")]),t._v(" "),l("blockquote",[l("p",[t._v("w3c中关于"),l("a",{attrs:{href:"http://www.w3.org/TR/CSS2/visuren.html#block-formatting",target:"_blank",rel:"noopener noreferrer"}},[t._v("bfc"),l("OutboundLink")],1),t._v("的解释")]),t._v(" "),l("ul",[l("li",[t._v("浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的块级格式化上下文。")]),t._v(" "),l("li",[t._v("在一个块级格式化上下文里，盒子从包含块的顶端开始垂直地一个接一个地排列，两个盒子之间的垂直的间隙是由他们的margin 值所决定的。两个相邻的块级盒子的垂直外边距会发生叠加。")]),t._v(" "),l("li",[t._v("在块级格式化上下文中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘），即使存在浮动也是如此，除非这个盒子创建一个新的块级格式化上下文。")])])]),t._v(" "),l("h2",{attrs:{id:"触发条件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[t._v("#")]),t._v(" 触发条件")]),t._v(" "),l("blockquote",[l("p",[t._v("MDN中关于"),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("bfc的触发条件"),l("OutboundLink")],1)])]),t._v(" "),l("ul",[l("li",[t._v("根元素或其它包含它的元素")]),t._v(" "),l("li",[t._v("浮动 (元素的 float 不为 none)")]),t._v(" "),l("li",[t._v("绝对定位元素 (元素的 position 为 absolute 或 fixed)")]),t._v(" "),l("li",[t._v("行内块 inline-blocks (元素的 display: inline-block)")]),t._v(" "),l("li",[t._v("表格单元格 (元素的 display: table-cell，HTML表格单元格默认属性)")]),t._v(" "),l("li",[t._v("表格标题 (元素的 display: table-caption, HTML表格标题默认属性)")]),t._v(" "),l("li",[t._v("overflow 的值不为 visible的元素")]),t._v(" "),l("li",[t._v("弹性盒子 flex boxes (元素的 display: flex 或 inline-flex)")])]),t._v(" "),l("h2",{attrs:{id:"影响"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#影响"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),l("ul",[l("li",[t._v("阻止外边距合并")]),t._v(" "),l("li",[t._v("可以包含浮动的元素(清浮动)")]),t._v(" "),l("li",[t._v("可以阻止元素被浮动元素覆盖(用于布局)")])]),t._v(" "),l("h2",{attrs:{id:"参考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"http://www.html-js.com/article/1866",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS之BFC详解"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/50335287",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解盒模型与BFC"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);