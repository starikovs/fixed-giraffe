(function ($) {
    $.fn.fixedGiraffe = function () {
        var oldTop = $(window).scrollTop();
        //var oldTop;
        var viewportHeight = window.innerHeight;
        var el = this;
        var timer;
        var topOffset = parseInt(el.css('top'), 10);
        var height = el.outerHeight();
    
        //el.text(topOffset + height + 'x' + viewportHeight);
    
        $(window).scroll(function () {
          var scrollTop = $(this).scrollTop();
    			if (oldTop === null) { oldTop = scrollTop; }
                
          clearTimeout(timer);
          
          if (height + topOffset < viewportHeight) {
            timer = setTimeout(function () {
              console.log('AAA', 'small')
    					el.css('top', scrollTop + topOffset + 'px');         	
            }, 250);
            
            return;
          }
          
          if (oldTop < scrollTop) { // down
          	timer = setTimeout(function () {
            	if (el.offset().top + el.outerHeight()  < scrollTop + viewportHeight) {
    	        	console.log('AAA', 'down')
    						el.css('top', (scrollTop + viewportHeight) - (el.outerHeight() + topOffset) + 'px');
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

//jQuery('.f').fixedGiraffe();

