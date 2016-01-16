$(function(){
	function d(){
		if ($(this).find(".kids")){
			$(this).find(".kids").slideToggle();
		}
	}
	$(".footer-col .categories li").click(d);
	$(".footer-col .tags li").click(d);
});