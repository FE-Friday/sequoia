(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{302:function(t,s,a){t.exports=a.p+"assets/img/0001.b6216645.png"},303:function(t,s,a){t.exports=a.p+"assets/img/0002.be58c362.png"},338:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"sql简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql简介"}},[t._v("#")]),t._v(" SQL简介")]),t._v(" "),s("p",[t._v("SQL (Structured Query Language:结构化查询语言) 是用于管理关系数据库管理系统（RDBMS）。")]),t._v(" "),s("p",[t._v("SQL 的范围包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。")]),t._v(" "),s("h2",{attrs:{id:"sql是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql是什么"}},[t._v("#")]),t._v(" SQL是什么")]),t._v(" "),s("ol",[s("li",[t._v("SQL 指结构化查询语言，全称是 Structured Query Language。")]),t._v(" "),s("li",[t._v("SQL 让您可以访问和处理数据库，包括数据插入、查询、更新和删除。")]),t._v(" "),s("li",[t._v("SQL 在1986年成为 ANSI（American National Standards Institute 美国国家标准化组织）的一项标准，在 1987 年成为国际标准化组织（ISO）标准。")])]),t._v(" "),s("h2",{attrs:{id:"sql语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql语法"}},[t._v("#")]),t._v(" SQL语法")]),t._v(" "),s("p",[t._v('一个数据库通常包含一个或多个表。每个表有一个名字标识（例如:"Websites"）,表包含带有数据的记录（行）。')]),t._v(" "),s("p",[t._v("在本教程中，我们在 MySQL 的 RUNOOB 数据库中创建了 Websites 表，用于存储网站记录。")]),t._v(" "),s("p",[t._v('我们可以通过以下命令查看 "Websites" 表的数据：')]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入密码连接数据库")]),t._v("\nmysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("uroot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看数据库列表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:a(302),alt:"数据库列表"}})]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用RUNOOB数据库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" RUNOOB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 查看 "Websites" 表的数据')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Websites"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:a(303),alt:"数据列表"}})]),t._v(" "),s("h2",{attrs:{id:"sql语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql语句"}},[t._v("#")]),t._v(" SQL语句")]),t._v(" "),s("p",[t._v("我们在数据库上执行的大部分工作都由 SQL 语句完成。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("注意： SQL 对大小写不敏感：SELECT 与 select 是相同的。")])]),t._v(" "),s("h2",{attrs:{id:"sql-语句后面的分号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句后面的分号"}},[t._v("#")]),t._v(" SQL 语句后面的分号？")]),t._v(" "),s("p",[t._v("某些数据库系统要求在每条 SQL 语句的末端使用分号。")]),t._v(" "),s("p",[t._v("分号是在数据库系统中分隔每条 SQL 语句的标准方法，这样就可以在对服务器的相同请求中执行一条以上的 SQL 语句。")]),t._v(" "),s("p",[t._v("在本教程中，我们将在每条 SQL 语句的末端使用分号。")]),t._v(" "),s("h2",{attrs:{id:"一些常用的sql命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些常用的sql命令"}},[t._v("#")]),t._v(" 一些常用的SQL命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SELECT")]),s("td",[t._v("从数据库中提取数据")])]),t._v(" "),s("tr",[s("td",[t._v("UPDATE")]),s("td",[t._v("更新数据库中的数据")])]),t._v(" "),s("tr",[s("td",[t._v("DELETE")]),s("td",[t._v("从数据库中删除数据")])]),t._v(" "),s("tr",[s("td",[t._v("INSERT INTO")]),s("td",[t._v("向数据库中插入新数据")])]),t._v(" "),s("tr",[s("td",[t._v("CREATE DATABASE")]),s("td",[t._v("创建新数据库")])]),t._v(" "),s("tr",[s("td",[t._v("ALTER DATABASE")]),s("td",[t._v("修改数据库")])]),t._v(" "),s("tr",[s("td",[t._v("CREATE TABLE")]),s("td",[t._v("创建新表")])]),t._v(" "),s("tr",[s("td",[t._v("ALTER TABLE")]),s("td",[t._v("变更（改变）数据库表")])]),t._v(" "),s("tr",[s("td",[t._v("DROP TABLE")]),s("td",[t._v("删除表")])]),t._v(" "),s("tr",[s("td",[t._v("CREATE INDEX")]),s("td",[t._v("创建索引（搜索键")])]),t._v(" "),s("tr",[s("td",[t._v("DROP INDEX")]),s("td",[t._v("删除索引")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);