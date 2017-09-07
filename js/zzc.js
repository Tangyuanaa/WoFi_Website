//download APP
function getPosition() {
            var top = document.documentElement.scrollTop;
            var left = document.documentElement.scrollLeft;
            var height = document.documentElement.clientHeight;
            var width = document.documentElement.clientWidth;
            left = 200;
			top=200;
            width = 500;
            height=300;
            return { top: top, left: left, height: height, width: width };
        }
        //屏蔽输入，显示蒙板
        function showMask(id) {
            var obj = document.getElementById(id);
            obj.style.width = document.body.clientWidth;
            obj.style.height = document.body.clientHeight;
            obj.style.display = "block";
        }
        //隐藏蒙板
        function hideMask(id) {
            document.getElementById(id).style.display = "none";
        }
        //显示弹出框
        function showPop(id) {
            showMask('mask');
            var width = 300;  //弹出框的宽度
            var height = 170;  //弹出框的高度
            var obj = document.getElementById(id);
            obj.style.display = "block";
            obj.style.position = "absolute";
            obj.style.zindex = "10";
            obj.style.overflow = "hidden";
            obj.style.width = width + "px";
            obj.style.height = height + "px";
            var Position = getPosition();
            leftadd = (Position.width - width) / 2;
            topadd = (Position.height - height) / 2;
            obj.style.top = (Position.top + topadd) + "px";
            obj.style.left = (Position.left + leftadd) + "px";
            window.onscroll = function() {
                var Position = getPosition();
                obj.style.top = (Position.top + topadd) + "px";
                obj.style.left = (Position.left + leftadd) + "px";
            };
            
        }
        //隐含
        function hidePop(id) {
        hideMask('mask');
            document.getElementById(id).style.display = "none";
		}
