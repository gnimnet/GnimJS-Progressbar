/*
 *  This JavaScript file for Progress Bar
 *  this component works for GnimJS
 *  Version 0.1.0
 *  Write by Ming
 *  Date 2011.10.15
 */
(function(window,$,UNDEFINED){
    var CLASS_PB='progressbar';
    var CLASS_PB_V='progressbar-value';
    function Progressbar(conSelector){
        var self=this;
        if($.isStr(conSelector)){
            self.$dom=$('<div class="'+CLASS_PB+'"><div class="'+CLASS_PB_V+'"></div></div>').appendTo(conSelector);
        }else{
            self.$dom=$(conSelector);
        }
    }
    Progressbar.prototype={
        set:function(progress,text,speed){
            var $dom=this.$dom;
            var width=$dom[0].clientWidth;
            var valueWidth=$.toInt(width*progress);
            var $value=$dom.find('.'+CLASS_PB_V)[_name()]({width:valueWidth+'px'},_speed(speed));
            if(valueWidth<50){
                $value.empty();
            }else{
                $value.html(text?text:($.toInt(progress*100)+'%'));
            }
            return this;
        },
        color:function(border,background,text,speed){
            var style1={};
            var style2={};
            if(border){
                style1.borderColor=style2.backgroundColor=border;
            }
            if(background){
                style1.backgroundColor=background;
            }
            if(text){
                style1.color=text;
            }
            this.$dom[_name()](style1,_speed(speed)).find('.'+CLASS_PB_V)[_name()](style2,_speed(speed));
            return this;
        },
        appendTo:function(conSelector){
            this.$dom.appendTo(conSelector);
            return this;
        }
    };
    Progressbar.fx=true;
    /* private static functions */
    function _name(){
        return (Progressbar.fx && $.fx)?'anim':'css';
    }
    function _speed(speed){
        return (Progressbar.fx && $.fx)?speed:UNDEFINED;
    }
    /* set Progressbar to window */
    window.Progressbar=Progressbar;
})(window,Gnim);