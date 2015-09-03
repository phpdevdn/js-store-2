$(document).ready(function(){
	var box=(function(){
		var $blk=$(".lightBoxSlider"),
			$img_blk=$blk.find('.image-blk'),
			$img_lk=$img_blk.find('a.img-lk');
			$modal=$("#myModal");
			$con_modal=$modal.find('.modal-content');
			$iframe=$("<iframe></iframe>").attr({
				'id':'iframe-1',
				'src':'http://'+$(location).attr('host')+'/lightBox/index.html',
				'width':900,
				'height':450,
				'scrolliing':'no'
				});
		var setup=function(){
			config();
			listend();
		}
		var listend=function(){
			$img_lk.on('click',link_func);
			
		}
		var link_func=function(evt){
			evt.preventDefault();
			var url=$(this).attr('href');
			$img_blk.removeClass('active');
			$(this).parent('.image-blk').addClass('active');			
			$con_modal.append($iframe);
			$iframe.on('load',function(){
				var opts={
				'block':$blk.attr('id'),
				'url':url,
				'content':$cont.html()
			};
			var vari=$(this)[0].contentWindow.light(opts);
			})
			var $cont=$(this).siblings('.con-img');						
			$modal.modal();
						
		}
		var config=function(){
			$img_lk.attr({
				"data-toggle" :"modal",
				 "data-target" : $modal.attr('id')
			});
		}
		return {
			'setup':setup(),
		}
		;

	})();
	$('.scr-ele').scroll_blk({
		'wrapper':'.scr-wrap',
		'block':'.scr-blk'
	});
});