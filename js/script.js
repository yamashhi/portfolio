$(function(){
	let images = document.querySelectorAll(".lazyload");
	lazyload(images);

	// 遅延読み込み
	ScrollReveal().reveal('.animation', {
		delay: 500, // アニメーション開始までの時間
		duration: 1600, // アニメーション完了にかかる時間
	});

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

				if(w > 800){
					$(function(){		
					  $(".prof_text").css({'font-size':'18px'});
						  $(".prof_text").css({'font-size':'18px'});
					});
				}
				else{
					$(function(){		
					  $(".prof_text").css({'font-size':'14px'});
						  $(".prof_text").css({'font-size':'14px'});
					});
				}
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

	$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		speed: 500,//スライドのスピード。初期値は300。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
		variableWidth: true,//幅の違う画像の高さを揃えて表示
		dots: true,//下部ドットナビゲーションの表示
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
