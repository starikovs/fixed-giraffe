(function ($) {                                                                                               
    $.fn.fixedGiraffe = function (filterCallback) {                                                           
        var oldTop = $(window).scrollTop();                                                                   
        var viewportHeight = window.innerHeight;                                                              
        var el = this;                                                                                        
        var timer;                                                                                            
        var topOffset = parseInt(el.css('top'), 10);
        
        $(window).scroll(function () {                                                                        
            if (!filterCallback(el)) { return; }                                                              
                                                                                                              
            var scrollTop = $(this).scrollTop();                                                              
            if (oldTop === null) { oldTop = scrollTop; }                                                      
                                                                                                              
            clearTimeout(timer);                                                                              
                                                                                                              
            if (el.outerHeight() + topOffset < viewportHeight) {                                              
                timer = setTimeout(function () {                                                              
                    console.log('AAA', 'small')                                                               
                    el.css('top', scrollTop + topOffset + 'px');                                              
                }, 250);                                                                                      
                                                                                                              
                return;                                                                                       
            }                                                                                                 
                                                                                                              
            if (oldTop < scrollTop) { // down                                                                 
                timer = setTimeout(function () {                                                              
                    var elHeight = el.outerHeight();                                                          
                                                                                                              
                    if (el.offset().top + elHeight  < scrollTop + viewportHeight) {                           
                        console.log('AAA', 'down')                                                            
                        el.css('top', (scrollTop + viewportHeight) - (elHeight + topOffset) + 'px');          
                    }                                                                                         
                                                                                                              
                    oldTop = null;                                                                            
                }, 250);                                                                                      
                                                                                                              
                return;                                                                                       
            }                                                                                                 
                                                                                                              
            if (oldTop > scrollTop) { // up                                                                   
                timer = setTimeout(function () {                                                              
                    if (el.offset().top - topOffset > scrollTop) {                                            
                        console.log('AAA', 'up', el.offset().top, scrollTop)                                  
                        el.css('top', scrollTop + topOffset + 'px');                                          
                    }                                                                                         
                    //console.log('AAA', 'up', oldTop, scrollTop, Math.round(oldTop - scrollTop));            
                    oldTop = null;                                                                            
                }, 500);                                                                                      
            }                                                                                                 
                                                                                                              
            //oldTop = scrollTop;                                                                             
        });                                                                                                   
                                                                                                              
        return this;                                                                                          
    };                                                                                                        
})(jQuery);
