$(document).ready(function(){
    $(function () {              
              //绑定滚动条事件  
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                sTop = parseInt(sTop);  
                if (sTop >= 600) {  
                    if (!$("#foot-top").is(":visible")) {  
                        try {  
                            $("#foot-top").slideDown();  
                        } catch (e) {  
                            $("#foot-top").show();  
                        }                        
                    }  
                }  
                else {  
                    if ($("#foot-top").is(":visible")) {  
                        try {  
                            $("#foot-top").slideUp();  
                        } catch (e) {  
                            $("#foot-top").hide();  
                        }                         
                    }  
                }   
            });  
        });
});
$(document).ready(function(){
    $(function () {              
            //绑定滚动条事件  
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                sTop = parseInt(sTop);  
                if (sTop >= 600) {  
                    if (!$("#main-nav").is(":visible")) {  
                        try {  
                            $("#main-nav").slideDown();  
                        } catch (e) {  
                            $("#main-nav").show();  
                        }                        
                    }  
                }  
                else {  
                    if ($("#main-nav").is(":visible")) {  
                        try {  
                            $("#main-nav").slideUp();  
                        } catch (e) {  
                            $("#main-nav").hide();  
                        }                         
                    }  
                }   
            });  
        });
});


/*move到top*/
$(document).ready(function(){
    $("#foot-top").click(function()
        {
            $('body,html').animate({scrollTop:0},800);
        });
});


$(document).ready(function(){
    $("#header #nav li:eq(0),#nav-move li:eq(0) a").click(function()
        {
            $('body,html').animate({scrollTop:868},800);
            return false;
        });
});


$(document).ready(function(){
    $("#header #nav li:eq(1),#nav-move li:eq(1) a").click(function()
        {
            $('body,html').animate({scrollTop:1668},800);
            return false;
        });
});


$(document).ready(function(){
    $("#header #nav li:eq(2),#nav-move li:eq(2) a").click(function()
        {
            $('body,html').animate({scrollTop:3068},800);
             return false;
        });
});


$(document).ready(function(){
    $("#header #nav li:eq(3),#nav-move li:eq(3) a").click(function()
        {
            $('body,html').animate({scrollTop:3868},800);
            return false;
        });
});



/*右上角的nav*/
$(document).ready(function(){
    var width=$(document.body).outerWidth(true);
    $("#main-nav div").mouseover(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: width-150});
           
        });
    $("#main-nav div").mouseout(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: width});
           
        });
    $("#nav-move").mouseover(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: width-150});
           
        });
    $("#nav-move").mouseout(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left:width});
            
        });
});