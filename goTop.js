//返回頂部
function BacktoTop(obj) {
    var _this = $(obj);
    _this.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            _this.addClass("showThis");
            //判断是否是IE6
            // if ($.browser.msie && $.browser.version == 6.0) {
            //     _this.css({
            //         bottom: 'auto',
            //         top: $(window).height() - $(_this).height() + $(window).scrollTop()
            //     })
            // }
        } else {
            _this.removeClass("showThis");
        }
    })
}