(function($){
	$.fn.scroll_blk=function($opts){
		var defaults = {
			'wrapper':'',
			'block':'',
		};
		var params=$.extend(defaults,$opts);
		this.each(function(){
			var $ele=$(this),
				$block=$(params.block),
				$wrap=$(params.wrapper);
			var ele,block,wrap;
			var setup=function(){
				config();
				run();
			}
			var listend=function(){
				$(window).on('scroll',function(){
					var scr_top=$('body').scrollTop();
					console.log(scr_top);
					if(scr_top < ele.top){
						$ele.css({
							'position':'relative',
							'top':0
						});

					} else if(scr_top >= ele.top && scr_top <= wrap.bottom){
						$ele.css({
							'position':'fixed',
							'top':0,
							'width':ele.width,
							'height':ele.height
						});
					} else if(scr_top > wrap.bottom){
						$ele.css({
							'position':'absolute',
							'top':wrap.bottom - block.top
						});
					} else{
						return false;
					}
				});
			}
			var run=function(){
				console.log(ele);
				console.log(wrap);
				if(wrap.bott_pos > ele.bottom){
					listend();
				}
			}
			var config=function(){
				var ele_pos=$ele.offset();
				ele={
					'top':ele_pos.top,
					'left':ele_pos.left,
					'bottom':ele_pos.top + $ele.height(),
					'width':$ele.width(),
					'height':$ele.height(),
					'top_pos':$block - $ele.height()
				}
				var wrap_pos=$wrap.offset();
				console.log($(window).height());
				console.log();
				wrap={
					'bott_pos':wrap_pos.top + $wrap.height(),
					'bottom':wrap_pos.top + $wrap.height() - $(window).height()
				}
				var block_pos=$block.offset();
				block={
					'top':block_pos.top
				}
				$block.css({ 'position':'relative'} );
			}
			setup();			
		});
	}
})(jQuery)