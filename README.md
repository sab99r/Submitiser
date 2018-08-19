Submitiser
========

A tiny <1KB jQuery plugin to Ajax submit ($.post) input[text] on FocusOut and on Enter Key press.

[SABEER] http://www.sab99r.com

Usage
--------

Dependency
```html
    <script src="jquery.min.js"></script>
    <script src="submitiser.min.js"></script>
```

HTML
```html
    <input type="text" name="any_name" value="" class="any-class" data-id="primary_key_value"/>
    <!-- Must add 'name' and 'data-id' -->
```

SCRIPT
```html
    <script>
        $('.any-class').submitise({
            'url':'http://server-submit-api-url'
        });
    </script>
```

Example with All Options
------------------------

```html
    <script>
        $('.any-class').submitise({
            'url':'http://server-submit-api-url',
            'submitOnEnter':true, /* default(true) enable input submit on enter key press */
            'submitOnFocusOut':true, /* default(true) enable input submit on focus out */
            'successColor':'#00b159', /* default(#00b159) input text color when server response {"status":"success"} */
            'failedColor':'#d11141', /* default(#d11141) input text color when server response {"status":"failed"} */
            'colorTimeOut':2000, /*(in milliseconds) time to revert the input text color to default */
            onSuccess:function(response){ /* callback on submit success */
                console.log(response);//json response from server
                /* No need to implement onSuccess callback if you don't want additional handling. 
                Text color changing behavior will auto implement if the server response has {"status":"success"} OR {"status":"failed"}  */
            }
        });
    </script>
```

# Licence

Copyright 2018 [www.sab99r.com]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
