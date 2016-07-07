$(document).ready(function(){
    $(function () {              
            //绑定滚动条事件  
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(window).scrollTop();  
                sTop = parseInt(sTop);  
                if (sTop >= 300) {  
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

$(document).ready(function(){
    $("#main-nav img").mouseover(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: "1198px"});
           
        });
    $("#main-nav img").mouseout(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: "1348px"});
           
        });
    $("#nav-move").mouseover(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: "1198px"});
           
        });
    $("#nav-move").mouseout(function()
        {   
             $("#nav-move").stop();  
            $("#nav-move").animate({left: "1348px"});
            
        });
});