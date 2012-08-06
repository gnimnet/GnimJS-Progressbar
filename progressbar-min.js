/*
 *  This JavaScript file for Progress Bar
 *  this component works for GnimJS
 *  Version 0.1.0
 *  Write by Ming
 *  Date 2011.10.15
 */
(function(l,b,h){function c(a){this.$dom=b.isStr(a)?b('<div class="'+m+'"><div class="'+i+'"></div></div>').appendTo(a):b(a)}function j(){return c.fx&&b.fx?"anim":"css"}var m="progressbar",i="progressbar-value";c.prototype={set:function(a,f,d){var g=this.$dom,e=b.toInt(g[0].clientWidth*a),d=g.find("."+i)[j()]({width:e+"px"},c.fx&&b.fx?d:h);50>e?d.empty():d.html(f?f:b.toInt(100*a)+"%");return this},color:function(a,f,d,g){var e={},k={};a&&(e.borderColor=k.backgroundColor=a);f&&(e.backgroundColor=f);
d&&(e.color=d);this.$dom[j()](e,c.fx&&b.fx?g:h).find("."+i)[j()](k,c.fx&&b.fx?g:h);return this},appendTo:function(a){this.$dom.appendTo(a);return this}};c.fx=!0;l.Progressbar=c})(window,Gnim);
