$(function(){
	$('body *').removeAttr('style');
	$('body *').removeAttr('width');
	$('body *').removeAttr('height');

	$("#top3").addClass('top3');
	$("#top2").addClass('top2');
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW < 880){
		var headerH =0;
	}
	else{
		var headerH =63;
	}
	
	$(nav).on('click', function(){
		nav.removeClass('active');
  	    var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   			scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	var timer = false;
	$(window).bind('load resize',function(){	
		if (timer !== false){clearTimeout(timer);}
		timer = setTimeout(function(){
			var
				w = $(window).innerWidth(),
				bg = $('.bg'),
				bgH = bg.height();	
		});
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
		
	$(window).on('scroll', function(){
		var curPos = $(this).scrollTop();
		if(curPos > 80){
			$('#mainnav').addClass('changeNav');
		}
		else{
			$('#mainnav').removeClass('changeNav');
		}
	});

	// 遅延読み込み
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
			//クラスを付与
			$(this).addClass('active');
			}
		});
	});

});

// top遷移
function fm_hasClass(e, c)
{
	var classes = e.className;
	if (!classes) return false;
	if (classes === c) return true;
	return classes.search("\\b" + c + "\\b") != -1;
}
function fm_addClass(e, c)
{
	if (fm_hasClass(e, c)) return;
	var classes = e.className;
	if (classes && classes[classes.length-1] != " ")
		c = " " + c;
	e.className += c;
}
function fm_removeClass(e, c)
{
	var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
	e.className = e.className.replace(pattern, "");
}
function fm_addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}
fm_addEvent(window, 'load', function() {
	var offsettop;
	offsettop = 350;
	fm_addEvent(window, 'scroll', function() {
	if (offsettop < Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
		fm_addClass(document.body, 'is-fixed-pagetop');
	} if ((offsettop - 50) > Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
		fm_removeClass(document.body, 'is-fixed-pagetop');
	}
	});
});
