$(function () {

	// 헤더 상단 붙임
	$(window).on('scroll', headerFixed)

	function headerFixed() {
		var headerEl = $("header");
		var headerH = headerEl.height();
		var windowT = $(window).scrollTop();

		if (windowT >= headerH) {
			headerEl.addClass('active');
		} else {
			headerEl.removeClass('active');
		}
	}

	// vnf
	$('#fullpage').fullpage({
		css3: false,
		sectionsColor: ['', '#fff', '#666', '', '#666'],
		navigation: true,
		navigationPosition: 'right',
		sectionSelector: '.section',
		scrollOverflow: true,
		afterLoad: function (anchorLink, index) {
			if (index == 5) {
				$(".bd-left").stop(true).delay(50).animate({
					"left": "0px",
					"opacity": "1"
				}, 500);
				$(".bd-right").stop(true).delay(50).animate({
					"left": "0px",
					"opacity": "1"
				}, 500);
			} else {
				$(".bd-left").stop(true).animate({
					"left": "-300px",
					"opacity": "0"
				});
				$(".bd-right").stop(true).animate({
					"left": "300px",
					"opacity": "0"
				});
			}

			if ($(window).width() <= 767) {
				if (index == 6) {
					$(".banner").hide();
				} else {
					$(".banner").show();
				}
			}
		}
	});

	if ($(window).width() >= 767) {
		$(".cate-type").hover(function () {
			$(this).find(".hidden-txt").stop(true).slideToggle("fast");
		});
	}
})