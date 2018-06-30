function talk(){
   var content_value=document.getElementById("content").value;
    if (content_value==""){
        alert("請輸入文字!")
    }
    else if(content_value=="你好嗎?"){
        $("#chat").append("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
        setTimeout(function(){
            $("#chat").append("<div class='alert alert-primary right' role='alert'>我很好。</div>")
        },1500);
        document.getElementById("content").value = "";
        
    }
    else if(content_value=="你好!"){
        $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
        setTimeout(function(){
            $("#chat").append("<div class='alert alert-primary right' role='alert'>我很好! 你人真好!</div>")
        },1500);
        
        document.getElementById("content").value = "";
    }
    else if(content_value=="吃飽沒?"){
        setTimeout(function(){
            $("#chat").append("<div class='alert alert-primary right' role='alert'>嗯! 午餐很好吃!</div>")
        },1500);
        
        $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
        document.getElementById("content").value = "";
    }
    else if(content_value=="幾點了?"){
        $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
        var dt =new Date();
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();
        setTimeout(function(){
            $("#chat").append("<div class='alert alert-primary right' role='alert'>"+hours+":"+minutes+":"+seconds+"</div>")
        },1500);
        
        
         document.getElementById("content").value = "";
    }
        else if(content_value=="你在幹什麼?"){
            setTimeout(function(){
                $("#chat").append("<div class='alert alert-primary right' role='alert'>聊天啊!</div>")
            },1500);
            
            $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
            document.getElementById("content").value = "";
        }
        else if(content_value=="你想喝什麼?"){
            setTimeout(function(){
                $("#chat").append("<div class='alert alert-primary right' role='alert'>果汁!</div>")
            },1500);
            
            $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
            document.getElementById("content").value = ""; 
        }
            else if(content_value=="你在哪所學校就讀?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>天母國小! 一所機器人學校!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
        document.getElementById("content").value = "";
            }
            else if(content_value=="你從哪裡來?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>臺灣啊! 是個很優的機器人島。</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你會說英語嗎?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>Yes, I can! How are you?</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你在幹嘛?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>跟你聊天啊!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你是誰?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>機器人啊!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }    
            else if(content_value=="你是男生還女生?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>你要我是女生，我就是女生。你要我是男生，我就是男生!我是機器人啊!</div>")
                },1500);

                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
                    
            }      
            else if(content_value=="你喜歡甚麼?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>看書啊。跟聊天!</div>")
                },1500);

                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
                    
            }
          
         
            else if(content_value=="嗨!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>嗨!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }                     
            else if(content_value=="嗨"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>哈囉!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你幾歲?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>10歲。</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="謝謝!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>^o^。</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="謝謝"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>>_<</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="我討厭你!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>...</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="我恨你!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>哼!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你人真好!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>呵。</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你吃飽了嗎?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>嗯! 謝謝關心!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="謝謝!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>不用客氣!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="說一些笑話吧!"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>有一天，有一個兔子去警察局問:「有沒有蘿蔔?」警察回答沒有。連續好幾天，兔子都問同樣的問題，警察說:「你在問，我就把你的耳朵剪掉!」隔天，兔子到警察局問:「請問有沒有剪刀?」警察說:「沒有!」兔子高興地問:「那有沒有蘿蔔?!」@_@ >_<</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="你叫甚麼名字?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>可以叫我Robbie!^_^</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            else if(content_value=="圓周率是多少?"){
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>3.1415926535897932384626433832795028841971693993...有無限多哦!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }
            
            else {
                setTimeout(function(){
                    $("#chat").append("<div class='alert alert-primary right' role='alert'>太難，我聽不懂! 請輸入旁邊的訊息! 要記得輸入標點符號哦!</div>")
                },1500);
                
                $("#chat").html("<div class='alert alert-success' role='alert'>"+content_value+"</div>")
                document.getElementById("content").value = "";
            }    
}
