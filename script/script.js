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
