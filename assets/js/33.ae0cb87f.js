(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{339:function(t,s,a){"use strict";a.r(s);var v=a(4),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("MySQL 索引类似于书籍的索引，通过存储指向数据行的指针，可以快速定位和访问表中的特定数据。")]),t._v(" "),s("p",[t._v("打个比方，"),s("strong",[t._v("如果合理的设计且使用索引的 MySQL 是一辆兰博基尼的话，那么没有设计和使用索引的 MySQL 就是一个人力三轮车")]),t._v("。")]),t._v(" "),s("p",[t._v("拿汉语字典的目录页（索引）打比方，我们可以按拼音、笔画、偏旁部首等排序的目录（索引）快速查找到需要的字。")])]),t._v(" "),s("p",[t._v("MySQL 索引是一种数据结构，用于加快数据库查询的速度和性能。")]),t._v(" "),s("p",[t._v("索引分 "),s("strong",[t._v("单列索引")]),t._v(" 和 "),s("strong",[t._v("组合索引")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("单列索引，即一个索引只包含单个列，一个表可以有多个单列索引。")]),t._v(" "),s("li",[t._v("组合索引，即一个索引包含多个列。")])]),t._v(" "),s("p",[t._v("实际上，索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录。")]),t._v(" "),s("p",[t._v("索引虽然能够提高查询性能，但也需要注意以下几点：")]),t._v(" "),s("ul",[s("li",[t._v("索引需要占用额外的存储空间。")]),t._v(" "),s("li",[t._v("对表进行插入、更新和删除操作时，索引需要维护，可能会影响性能。")]),t._v(" "),s("li",[t._v("过多或不合理的索引可能会导致性能下降，因此需要谨慎选择和规划索引。")])]),t._v(" "),s("h2",{attrs:{id:"普通索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通索引"}},[t._v("#")]),t._v(" 普通索引")]),t._v(" "),s("p",[t._v("索引能够显著提高查询的速度，尤其是在大型表中进行搜索时。通过使用索引，MySQL 可以直接定位到满足查询条件的数据行，而无需逐行扫描整个表。")]),t._v(" "),s("h3",{attrs:{id:"创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[t._v("#")]),t._v(" 创建索引")]),t._v(" "),s("p",[t._v("普通索引是最常见的索引类型，用于加速对表中数据的查询。")]),t._v(" "),s("p",[t._v("使用 CREATE INDEX 语句可以创建普通索引。")]),t._v(" "),s("h4",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("CREATE INDEX index_name\nON table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ASC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("DESC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", column2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ASC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("DESC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("CREATE INDEX: 用于创建普通索引的关键字。")]),t._v(" "),s("li",[t._v("index_name: 指定要创建的索引的名称。索引名称在表中必须是唯一的。")]),t._v(" "),s("li",[t._v("table_name: 指定要在哪个表上创建索引。")]),t._v(" "),s("li",[t._v("(column1, column2, ...): 指定要索引的表列名。你可以指定一个或多个列作为索引的组合。这些列的数据类型通常是数值、文本或日期。")]),t._v(" "),s("li",[t._v("ASC和DESC（可选）: 用于指定索引的排序顺序。默认情况下，索引以升序（ASC）排序。")])])]),t._v(" "),s("h2",{attrs:{id:"唯一索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[t._v("#")]),t._v(" 唯一索引")]),t._v(" "),s("h2",{attrs:{id:"显示索引信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示索引信息"}},[t._v("#")]),t._v(" 显示索引信息")])])}),[],!1,null,null,null);s.default=_.exports}}]);