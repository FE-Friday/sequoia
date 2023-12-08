(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{337:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1、1045-access-denied-for-user-root-localhost-using-password-no"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、1045-access-denied-for-user-root-localhost-using-password-no"}},[s._v("#")]),s._v(" 1、1045 - Access denied for user 'root'@'localhost' (using password: NO)")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("原因: 没有在其他ip地址上访问的权限。需要登录mysql然后修改权限。\n格式: grant 权限 on 数据库名.表名 用户@登录主机 identified by “用户密码”;")])]),s._v(" "),t("blockquote",[t("p",[s._v("ALL PRIVILEGES表示赋给远程登录用户的权限，ALL PRIVILEGES表示所有的权限，你也可以单独或组合赋select,update,insert,delete权限；.：第一个表示要赋权的数据库名，当然表示全部数据库了，第二个表示数据库下的表名，同理，表示全部表，像我这样的懒人当然就直接用.了，反正都是自己开发用root表示要赋权的用户；%表示远程登录的IP（你用来登录的ip），如果要限制登录IP的话，这里就添你允许登录的IP，比如192.18.1.99等，%表示不限制IP，000000是用户远程登录的密码。就这么简单。这句运行以后再运行FLUSH PRIVILEGES，就可以了。")])]),s._v(" "),t("p",[s._v("解决：")]),s._v(" "),t("ol",[t("li",[s._v("mysql -uroot -p 进入mysql")]),s._v(" "),t("li",[s._v("修改权限")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("GRANT ALL PRIVILEGES ON *.* TO"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v(" WITH GRANT OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("更新配置")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("完整操作")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" with grant option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);