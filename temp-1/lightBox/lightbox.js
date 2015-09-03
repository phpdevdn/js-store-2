(function($){
$.fn.lightbox=function(opts){
	var defaults={
		'block':'',
		'url':'',
		'content':'no content'
	};
	var params=$.extend(defaults,opts);
	this.each(function(){
		var	$box=$('.boxBlk'),
			$url=$box.find('img'),
			$content=$box.find('.conBox'),
			$larr=$box.find('.lft-arrow'),
			$rarr=$box.find('.rgt-arrow'),
			$block=$('#'+params.block,window.parent.document)
		;
		var setup=function(){
			display(params.url,params.content);
			listend();
		}
		var listend=function(){
			$larr.on('click',{'arr':0},arr_func);
			$rarr.on('click',{'arr':1},arr_func);
		}
		var arr_func=function(evt){
			evt.preventDefault();
 			var $act_blk=$block.find('.active');
 			var $curr_blk='';
 			if(evt.data.arr==0){
 				$curr_blk=($act_blk.prev().length) ? $act_blk.prev() : $block.children(':last-child');

 			}else{
 				$curr_blk=($act_blk.next().length) ? $act_blk.next() : $block.children(':first-child');
 			}
			var url_img=$curr_blk.find('.img-lk').attr('href');
			var con_img=$curr_blk.find('.con-img').html();
			$act_blk.removeClass('active');
			$curr_blk.addClass('active');
			display(url_img,con_img);

		}
		var display=function($lk,$con){
			$url.attr({
				'src':'http://'+$(location).attr('host')+'/'+$lk
			});
			$content.html($con);
		}
		setup();
		// console.log(params.content);

	});
}	
})(jQuery);
