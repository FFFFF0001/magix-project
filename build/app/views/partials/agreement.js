define("app/views/partials/agreement",["magix"],function(i,t,e){var a=i("magix");a.applyStyle("p99",".p99-bcb{height:400px}"),e.exports=a.View.extend({tmpl:{html:'<div class="p61-255"><h4 class="p61-254">使用协议</h4></div><div class="p61-7f2 p99-bcb">目前暂无约束，可自由使用，<a href="https://github.com/thx/magix-project/issues/new" target="_blank">欢迎提意见或建议</a></div><div class="p61-0f5 p16-c8d"><a mx-click="enter();" class="pf0-btn pf0-046 p16-mt5">确定</a></div>',subs:[]},init:function(i){this.$dialog=i.dialog},render:function(){this.updater.digest()},"enter<click>":function(){this.$dialog.close()}},{dialogOptions:{width:800}})});