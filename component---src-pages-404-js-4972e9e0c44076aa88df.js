(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(160),o=n(158);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(t){t.exports={data:{site:{siteMetadata:{title:"리자몽의 개발공부 로그"}}}}},158:function(t,e,n){"use strict";var a=n(159),r=n(0),i=n.n(r),o=n(1),l=n.n(o),s=n(165),c=n.n(s),u=n(54);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,l=t.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=d;var m="1025518380"},159:function(t){t.exports={data:{site:{siteMetadata:{title:"리자몽의 개발공부 로그",description:"공부한 내용을 정리하는 개발 로그입니다",author:"김지운"}}}}},160:function(t,e,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(1),l=n.n(o),s=n(54),c=n(7),u=n.n(c),d=n(161),m=(n(147),function(t){function e(){return t.apply(this,arguments)||this}u()(e,t);var n=e.prototype;return n.showSettings=function(t){t.preventDefault()},n.render=function(){return i.a.createElement(d.slide,null,i.a.createElement(s.Link,{to:"/"},"Home"),i.a.createElement(s.Link,{to:"/about"},"About"),i.a.createElement(s.Link,{to:"/postlist"},"Category"))},e}(i.a.Component)),p=(n(148),function(t){var e=t.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement(m,null)),i.a.createElement("div",{className:"title"},i.a.createElement("h1",{style:{margin:0,display:"inline-block"}},i.a.createElement(s.Link,{to:"/",style:{color:"#fffce1",textDecoration:"none"}},e))))});p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var y=p,f=(n(149),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"2.5rem auto",maxWidth:800}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});f.propTypes={children:l.a.node.isRequired};e.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-4972e9e0c44076aa88df.js.map