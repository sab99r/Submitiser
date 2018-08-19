/*
 * SUBMITISER
 * version: 1.0
 * author: SABEER (sab99r)
 * url: https://github.com/sab99r/submitiser
 */
$.fn.submitise = function(options){

    var defaults = {
        'url':'', /* server submit url */
        'submitOnEnter':true, /* enable input submit on enter key press */
        'submitOnFocusOut':true, /* enable input submit on focus out */
        'successColor':'#00b159', /* input text color when server response status=success */
        'failedColor':'#d11141', /* input text color when server response status=failed */
        'colorTimeOut':2000, /* time to revert the input text color to default */
        onSuccess:function(event,response){}, /* callback on submit success */
    };
    var settings = $.extend({},defaults,options);

    this.each(function(){
        var $this = $(this);

        $this.data('def-value',$this.val());

        if(settings.submitOnFocusOut){
            $this.focusout(function(){
                post(settings,$this);
            });
        }
        
        if(settings.submitOnEnter){
            $this.on('keypress',function(e){
                if(e.keyCode == 13)
                {
                    post(settings,$this);
                }
            });
        }

    });
    
}

function post(settings,$this){

    if($this.val().trim()==''){
        return;
    }

    if($this.data('def-value')==$this.val()){
        return;
    }

    var data = {
        id:$this.data('id')
    };
    data[$this.attr('name')] = $this.val();

    $.post(settings.url,data,function(response){
        $this.data('def-value',$this.val());

        //If status response is there set style on input
        if(typeof response.status != 'undefined') {
            var currentColor = $this.css('color');
            if(response.status=='success'){
                $this.css('color',settings.successColor);
                setTimeout(function(){
                    $this.css('color',currentColor);
                },settings.colorTimeOut)
            }else{
                $this.css('color',settings.failedColor);
            }            
        }

        if (typeof settings.onSuccess == 'function') { 
            settings.onSuccess.call($this,response);
        }
    },'json');
}