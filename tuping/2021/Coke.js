function detectIE() {
        var n = window.navigator.userAgent,
            e = n.indexOf("MSIE ");
        if (e > 0) {
            return parseInt(n.substring(e + 5, n.indexOf(".", e)), 10)
        }
        if (n.indexOf("Trident/") > 0) {
            var r = n.indexOf("rv:");
            return parseInt(n.substring(r + 3, n.indexOf(".", r)), 10)
        }
        var i = n.indexOf("Edge/");
        return i > 0 && parseInt(n.substring(i + 5, n.indexOf(".", i)), 10)
    };
    detectIE() && (alert('当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。'), (location.href = 'https://www.baidu.com'))
    localStorage.getItem("data-night") && document.querySelector("html").setAttribute("data-night", "night");
    window.Coke = {
        THEME_URL: `https://xiaoqingshu.wfvp.cc/usr/themes/Coke/`,
        LIVE2D: `off`,
        BASE_API: `https://xiaoqingshu.wfvp.cc/index.php/Coke/api`,
        DYNAMIC_BACKGROUND: `off`,
        WALLPAPER_BACKGROUND_PC: ``,
        IS_MOBILE: /windows phone|iphone|android/gi.test(window.navigator.userAgent),
        BAIDU_PUSH: false,
        DOCUMENT_TITLE: ``,
        LAZY_LOAD: `https://cdn.jsdelivr.net/npm/typecho-Coke-next@6.0.0/assets/img/lazyload.jpg`,
        BIRTHDAY: ``,
        MOTTO: `有钱终成眷属，没钱亲眼目睹`,
        PAGE_SIZE: `2`
    }
 /*joe主题里的
     感谢joe*/
        document.addEventListener("DOMContentLoaded",
        ()=>{const e=e=>window.btoa(unescape(encodeURIComponent(e))),t=e=>decodeURIComponent(escape(window.atob(e))),a=$(".Coke_detail").attr("data-cid");$.ajax({url:Coke.BASE_API,type:"POST",dataType:"json",data:{routeType:"baidu_record",site:window.location.href},success(e){if(e.data&&"已收录"===e.data)$("#Coke_Baidu_Record").css("color","#67C23A"),$("#Coke_Baidu_Record").html("已收录");else if(Coke.BAIDU_PUSH){$("#Coke_Baidu_Record");
        const e=setTimeout(function(){$.ajax({url:Coke.BASE_API,type:"POST",dataType:"json",data:{routeType:"baidu_push",domain:window.location.protocol+"//"+window.location.hostname,url:encodeURI(window.location.href)},success(e){e.data.error?$("#Coke_Baidu_Record").html('<span style="color: #F56C6C">推送失败，请检查！</span>'):$("#Coke_Baidu_Record").html('<span style="color: #67C23A">推送成功！</span>')}}),clearTimeout(e)},1e3)}else{const e=`https://ziyuan.baidu.com/linksubmit/url?sitename=${encodeURI(window.location.href)}`;$("#Coke_Baidu_Record").html(`<a target="_blank" href="${e}" rel="noopener noreferrer nofollow" style="color: #F56C6C">未收录，提交收录</a>`)}}}),Prism.highlightAll(),$("pre[class*='language-']").each(function(e,t){let a=$(t).find("code[class*='language-']").text(),o=$('<span class="copy"><i class="fa fa-clone"></i></span>');new ClipboardJS(o[0],{text:()=>a}).on("success",()=>Qmsg.success("复制成功！")),$(t).append(o)}),$(".Coke_detail__article img:not(img.owo_image)").each(function(){$(this).wrap($(`<span style="display: block;" data-fancybox="Coke" href="${$(this).attr("src")}"></span>`))}),$(".Coke_detail__article a:not(.Coke_detail__article-anote)").each(function(){$(this).attr({target:"_blank",rel:"noopener noreferrer nofollow"})});{let o=localStorage.getItem(e("views"))?JSON.parse(t(localStorage.getItem(e("views")))):[];const i=o.includes(a);i||$.ajax({url:Coke.BASE_API,type:"POST",dataType:"json",data:{routeType:"handle_views",cid:a},success(t){if(1!==t.code)return;$("#Coke_Article_Views").html(`${t.data.views} 阅读`),o.push(a);const i=e("views"),s=e(JSON.stringify(o));localStorage.setItem(i,s)}})}{let o=localStorage.getItem(e("agree"))?JSON.parse(t(localStorage.getItem(e("agree")))):[];o.includes(a)?$(".Coke_detail__agree .icon-1").addClass("active"):$(".Coke_detail__agree .icon-2").addClass("active");let i=!1;$(".Coke_detail__agree .icon").on("click",function(){if(i)return;i=!0,o=localStorage.getItem(e("agree"))?JSON.parse(t(localStorage.getItem(e("agree")))):[];let s=o.includes(a);$.ajax({url:Coke.BASE_API,type:"POST",dataType:"json",data:{routeType:"handle_agree",cid:a,type:s?"disagree":"agree"},success(t){if(1!==t.code)return;if($(".Coke_detail__agree .text").html(t.data.agree),s){const e=o.findIndex(e=>e===a);o.splice(e,1),$(".Coke_detail__agree .icon-1").removeClass("active"),$(".Coke_detail__agree .icon-2").addClass("active"),$(".Coke_detail__agree .icon").removeClass("active")}else o.push(a),$(".Coke_detail__agree .icon-2").removeClass("active"),$(".Coke_detail__agree .icon-1").addClass("active"),$(".Coke_detail__agree .icon").addClass("active");const i=e("agree"),l=e(JSON.stringify(o));localStorage.setItem(i,l)},complete(){i=!1}})})}{let e=!1;$(".Coke_detail__article-protected").on("submit",function(t){t.preventDefault();const o=$(this).attr("action")+"&time="+ +new Date,i=$(this).find('input[type="password"]').val();if(""===i.trim())return Qmsg.info("请输入访问密码！");e||(e=!0,$.ajax({url:o,type:"POST",data:{cid:a,protectCID:a,protectPassword:i},dataType:"text",success(t){let a=[],o="";a=$(t).contents(),Array.from(a).forEach(e=>{"container"===e.parentNode.className&&(o=e)}),/Coke/.test(t)?location.reload():(Qmsg.warning(o.textContent.trim()||""),e=!1,$(".Coke_comment__respond-form .foot .submit button").html("发表评论"))}}))})}if($(".Coke_detail__article-video").length>0){const e=$(".Coke_detail__article-video .play iframe").attr("data-player");$(".Coke_detail__article-video .episodes .item").on("click",function(){$(this).addClass("active").siblings().removeClass("active");const t=$(this).attr("data-src");$(".Coke_detail__article-video .play iframe").attr({src:e+t})}),$(".Coke_detail__article-video .episodes .item").first().click()}$(".Coke_detail__operate-share").length&&($(".Coke_detail__operate-share > svg").on("click",e=>{e.stopPropagation(),$(".Coke_detail__operate-share").toggleClass("active")}),$(document).on("click",()=>$(".Coke_detail__operate-share").removeClass("active")))}),window.addEventListener("load",function(){{const e=new URLSearchParams(location.search).get("scroll");if(e){const t=$(".Coke_header").height();let a=null;if(a=$("#"+e).length>0?$("#"+e):$("."+e),a&&a.length>0){const e=a.offset().top-t-15;window.scrollTo({top:e,behavior:"smooth"})}}}});