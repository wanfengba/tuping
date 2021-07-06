    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      //document.oncopy = function () {
        //return false;
     // }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

      //询问框
      layer.confirm('<font face="楷体"><p>我喜欢的他啊.他威武霸气才高八斗文武双全温柔</p><p>浪漫机智勇猛成熟稳重气吞山河空前绝后雷霆万钓 </p><p>千年难遇运.筹帷幄出神入化闭月羞花</p><p>沉鱼落雁倾国倾城惊为天人脚踏七彩祥云。</p></font>', {
        btn: ['<font face="楷体">对不起</font>','<font face="楷体">晚风好温柔</font>'] //按钮
      }, function(){
        layer.msg('<font face="楷体"><p>伴随一生美佟年，</p><p>年少有为韩商言。</p></font>', {icon: 1});
      }, function(){
        layer.msg('<font face="楷体">我说晚风温柔，你说真的好温柔……</font>', {
          time: 20000, //20s后自动关闭
          btn: ['<font face="楷体">温柔</font>', '<font face="楷体">真的好温柔</font>']
        });
      });  

          return false;
        }
        //ctrl+u
        if (event.ctrlKey && window.event.keyCode == 85) {
          return false;
        }
        //ctrl+shift+i
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
          return false;
        }
        // Ctrl+S
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
          return false;
        }
      };

    });