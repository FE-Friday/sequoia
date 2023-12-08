(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{350:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文介绍如何在 mysql 中防止数据表出现重复数据及如何删除数据表中的重复数据。")]),s._v(" "),a("h2",{attrs:{id:"防止表中出现重复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止表中出现重复数据"}},[s._v("#")]),s._v(" 防止表中出现重复数据")]),s._v(" "),a("p",[s._v("MySQL 数据表中通过设置指定的字段为 "),a("code",[s._v("PRIMARY KEY")]),s._v("（主键） 或者 "),a("code",[s._v("UNIQUE")]),s._v("（唯一）索引来保证数据的唯一性。")]),s._v(" "),a("h3",{attrs:{id:"primary-key-主键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-key-主键"}},[s._v("#")]),s._v(" PRIMARY KEY 主键")]),s._v(" "),a("p",[s._v("如果你想设置表中字段 first_name，last_name 数据不能重复，你可以设置双主键模式来设置数据的唯一性， 如果你设置了双主键，那么那个键的默认值不能为 NULL，可设置为 NOT NULL。如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("CREATE TABLE person_tbl\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   first_name CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOT NULL,\n   last_name CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOT NULL,\n   sex CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n   PRIMARY KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果我们设置了唯一索引，那么在插入重复数据时，SQL 语句将无法执行成功,并抛出错。")])]),s._v(" "),a("p",[a("strong",[s._v("INSERT IGNORE INTO 与 INSERT INTO 的区别就是 INSERT IGNORE INTO 会忽略数据库中已经存在的数据")]),s._v("，如果数据库没有数据，就插入新的数据，如果有数据的话就跳过这条数据。")]),s._v(" "),a("p",[s._v("这样就可以保留数据库中已经存在数据，达到在间隙中插入数据的目的。")]),s._v(" "),a("p",[s._v("以下实例使用了 INSERT IGNORE INTO，执行后不会出错，也不会向数据表中插入重复数据：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert ignore into person_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jay'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert ignore into person_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jay'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert ignore into person_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jay'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from person_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sex  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jay       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("INSERT IGNORE INTO 当插入数据时，在设置了记录的唯一性后，如果插入重复数据，将不返回错误，只以警告形式返回。")]),s._v(" "),a("p",[s._v("而 REPLACE INTO 如果存在 primary 或 unique 相同的记录，则先删除掉，再插入新记录。")])]),s._v(" "),a("h3",{attrs:{id:"unique-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-索引"}},[s._v("#")]),s._v(" UNIQUE 索引")]),s._v(" "),a("p",[s._v("另一种设置数据的唯一性方法是添加一个 UNIQUE 索引，如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据表")]),s._v("\nCREATE TABLE person_tbl2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   first_name CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOT NULL,\n   last_name CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOT NULL,\n   sex CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n   UNIQUE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 replace into 写入数据")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" replace into person_tbl2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"统计重复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计重复数据"}},[s._v("#")]),s._v(" 统计重复数据")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据表")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create table person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  first_name char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" not null,\n  last_name char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" not null,\n  sex char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入数据")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into person_tbl3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jar'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看数据")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from person_tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sex  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NULL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------+-----------+------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计重复数据")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" as repetitions, last_name, first_name\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" from person_tbl3\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" group by last_name, first_name\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" having repetitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-------------+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" repetitions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("以上查询语句将返回 person_tbl3 表中重复的记录数。")]),s._v(" "),a("p",[s._v("一般情况下，查询重复的值，请执行以下操作：")]),s._v(" "),a("ul",[a("li",[s._v("确定哪一列包含的值可能会重复")]),s._v(" "),a("li",[s._v("在数据列中使用COUNT(*)列出的那些列")]),s._v(" "),a("li",[s._v("在GROUP BY子句中列出的列")]),s._v(" "),a("li",[s._v("HAVING子句设置重复数大于1")])])]),s._v(" "),a("h2",{attrs:{id:"过滤重复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤重复数据"}},[s._v("#")]),s._v(" 过滤重复数据")]),s._v(" "),a("p",[s._v("如果需要读取不重复的数据可以在 SELECT 语句中使用 DISTINCT 关键字来过滤重复数据。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" last_name, first_name from person_tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" distinct last_name, first_name from person_tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("你也可以使用 GROUP BY 来读取数据表中不重复的数据：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" last_name, first_name from person_tbl3 group by last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" first_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Jar       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Thomas     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"删除重复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除重复数据"}},[s._v("#")]),s._v(" 删除重复数据")]),s._v(" "),a("p",[s._v("如果你想删除数据表中的重复数据，你可以使用以下的SQL语句：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create table tmp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" last_name, first_name, sex\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" from person_tbl3\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" group by last_name, first_name, sex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRecords: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Duplicates: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  Warnings: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" drop table person_tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" alter table tmp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" to person_tbl3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("当然你也可以在数据表中添加 INDEX（索引） 和 PRIMAY KEY（主键）这种简单的方法来删除表中的重复记录。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALTER IGNORE TABLE person_tbl\n    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ADD PRIMARY KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name, first_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);