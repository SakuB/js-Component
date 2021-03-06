define(['jquery','jqueryUI'],function($,$UI){
    function Window(){
        this.cfg={
            width:500,
            height:300,
            title:"系统消息",
            content:"",
            handler4AlertBtn:null,
            hasCloseBtn:false,
            skinClassName:null,
            handler4CloseBtn:null,
            text4AlertBtn:"确定",
            isDraggable:true,
            dragHandle:null
        }
    };
    Window.prototype={
        alert:function(cfg){
                var CFG=$.extend(this.cfg,cfg);
                var boundingBox=$(
                    '<div class="window_boundingBox">'+
                        '<div class="window_header">'+CFG.title+'</div>'+
                        '<div class="window_body">'+CFG.content+'</div>'+
                        '<div class="window_footer"><input type="button" value="'+CFG.text4AlertBtn+'" class="window_alertBtn"/></div>'+
                    '</div>'
                );
                var btn=boundingBox.find('.window_alertBtn');
                boundingBox.appendTo('body');
                btn.click(function(){
                    CFG.handler4AlertBtn && CFG.handler4AlertBtn();
                    boundingBox.remove();
                });
                boundingBox.css({
                    width:CFG.width+'px',
                    height:CFG.height+'px',
                    left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
                    top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
                });
                if(CFG.hasCloseBtn){
                    var closeBtn=$('<span class="window_closeBtn"></span>');
                    closeBtn.appendTo(boundingBox);
                    closeBtn.click(function(){
                        CFG.handler4CloseBtn && CFG.handler4CloseBtn();
                        boundingBox.remove();
                    });
                };
                if(CFG.skinClassName){
                    boundingBox.addClass(CFG.skinClassName);
                };
                if(CFG.isDraggable){
                    if(CFG.dragHandle){
                        boundingBox.draggable({handle:CFG.dragHandle});
                    }else{
                        boundingBox.draggable();
                    }
                }
        },
        confim:function(){},
        prompt:function(){}
    }
    return {
        Window:Window
    }
});
