define("app/views/mixins/checkbox-storestate",["magix","../../mixins/checkbox-linkage","../../mixins/checkbox-storestate","../../mixins/gtip"],function(t,e,i){var a=t("magix");a.applyStyle("pabcd96",".pabcd96-e75{width:900px}.pabcd96-275{color:#ccc}");var s=t("../../mixins/checkbox-linkage"),c=t("../../mixins/checkbox-storestate"),d=t("../../mixins/gtip");i.exports=a.View.extend({tmpl:{html:'<h3>checkbox翻页保存状态mixin</h3><p class="pabcd96-275">该mixin通常与checkbox-linkage配合使用，所以配置也是使用的checkbox-linkage的配置</p><p>在示例中勾选一些checkbox，然后翻页再翻回来，你会发现之前选中的checkbox还会自动选上</p><h4>配置</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd96-e75"><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>linkage-name</td><td>控制全选\\取消的checkbox名称</td></tr><tr><td>linkage-parent-name</td><td>需要联动的子checkbox</td></tr></tbody></table><h4 class="pabcd16-28f">示例1</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd96-e75"><thead><tr mx-guid="g0">1</tr></thead><tbody mx-guid="g2">2</tbody><tfoot><tr><td mx-guid="g3" colspan="6" mx-view="app/gallery/mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>" mx-change="chageList1()"></td></tr></tfoot></table><div class="pabcd96-e75 pabcd16-c8d"><button class="pabcd16-fr pabcd16-mt5 pabcdf0-btn pabcdf0-046" mx-click="showEx1()">显示示例1选中的checkbox</button></div><h4 class="pabcd16-28f">示例2</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd96-e75"><thead><tr mx-guid="g4">4</tr></thead><tbody mx-guid="g6">5</tbody><tfoot><tr><td mx-guid="g7" colspan="6" mx-view="app/gallery/mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list2Page%>&size=<%@$$.list2Size%>" mx-change="chageList2()"></td></tr></tfoot></table><div class="pabcd96-e75 pabcd16-c8d"><button class="pabcd16-fr pabcd16-mt5 pabcdf0-btn pabcdf0-046" mx-click="showEx2()">显示示例2选中的checkbox</button></div><div class="pabcd96-e75 pabcd16-716 pabcd16-c8d"><button class="pabcd16-fr pabcd16-mt5 pabcdf0-btn pabcdf0-046" mx-click="show()">显示当前页面选中的checkbox</button></div>',subs:[{s:"1",keys:["headers"],tmpl:'<th><input type="checkbox" linkage-name="example1"/></th><%for(var i=0;i<$$.headers.length;i++){%><th><%=$$.headers[i]%></th><%}%>',path:'tr[mx-guid="g0"]'},{s:"2",keys:["list1"],tmpl:'<%for(var i=0;i<$$.list1.length;i++){%><tr mx-guid="g1">7</tr><%}%>',path:'tbody[mx-guid="g2"]'},{keys:["list1Page","list1Size"],path:'td[mx-guid="g3"]',attr:'mx-view="app/gallery/mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>"',attrs:[{n:"mx-view",v:1}]},{s:"4",keys:["headers"],tmpl:'<th><input type="checkbox" linkage-name="example2"/></th><%for(var i=0;i<$$.headers.length;i++){%><th><%=$$.headers[i]%></th><%}%>',path:'tr[mx-guid="g4"]'},{s:"5",keys:["list1"],tmpl:'<%for(var i=0;i<$$.list1.length;i++){%><tr mx-guid="g5">8</tr><%}%>',path:'tbody[mx-guid="g6"]'},{keys:["list2Page","list2Size"],path:'td[mx-guid="g7"]',attr:'mx-view="app/gallery/mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list2Page%>&size=<%@$$.list2Size%>"',attrs:[{n:"mx-view",v:1}]},{s:"7",keys:["headers"],tmpl:'<td><input type="checkbox" linkage-parent-name="example1" value="<%=$$.list1[i].id%>"/></td><%for(var j=0;j<$$.headers.length;j++){%><td><%=$$.list1[i][\'f\'+j]%></td><%}%>',path:'tr[mx-guid="g1"]',pKeys:["list1"]},{s:"8",keys:["list2","headers"],tmpl:'<td><input type="checkbox" linkage-parent-name="example2" value="<%=$$.list2[i].id%>"/></td><%for(var j=0;j<$$.headers.length;j++){%><td><%=$$.list2[i][\'f\'+j]%></td><%}%>',path:'tr[mx-guid="g5"]',pKeys:["list1"]}]},mixins:[s,d,c],init:function(){for(var t=[],e=0;e<5;e++)t[e]="示例字段"+e;for(var i=[],a=[],s=0;s<100;s++){for(var c={id:s},e=0;e<5;e++)c["f"+e]="字段内容"+s+"_"+e;i.push(c),a.push(c)}var d=this;d.$headers=t,d.$list1=i,d.$list2=a,d.$list1Page=1,d.$list2Page=1,d.$list1Size=10,d.$list2Size=10},getList:function(t){var e=this,i=e["$"+t],a=e["$"+t+"Page"],s=e["$"+t+"Size"];return i.slice((a-1)*s,a*s)},render:function(){var t=this;t.updater.digest({headers:t.$headers,list1:t.getList("list1"),list1Page:t.$list1Page,list1Size:t.$list1Size,list2:t.getList("list2")})},"chageList1<change>":function(t){var e=this;e.$list1Page=t.state.page,e.$list1Size=t.state.size,e.render()},"chageList2<change>":function(t){var e=this;e.$list2Page=t.state.page,e.$list2Size=t.state.size,e.render()},"showEx1<click>":function(){var t=this.getStoreState("example1");t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")},"showEx2<click>":function(){var t=this.getStoreState("example2");t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")},"show<click>":function(){var t=this.getStoreState();t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")}})});