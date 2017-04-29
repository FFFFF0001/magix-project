define("app/views/coms/popover",["magix"],function(E,A,B){var t=E("magix");t.applyStyle("pabcd49",".pabcd49-e75{width:900px}"),B.exports=t.View.extend({tmpl:{html:'<h3>Popover组件</h3><h4>配置项</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd49-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>string</td><td>提示内容</td><td></td></tr><tr><td>width</td><td>number</td><td>提示框宽度</td><td></td></tr><tr><td>placement</td><td>string</td><td>提示框在目标的方位</td><td>right</td></tr><tr><td>align</td><td>string</td><td>提示框与目标对齐方式</td><td>center</td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div class="pabcd16-c8d"><button class="pabcdf0-btn" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">提示右</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top">提示上</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom">提示下</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left">提示左</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top">提示左顶部对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top">提示右顶部对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left">提示上左对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right">提示上右对齐</button></div><div class="pabcd16-716"><button class="pabcdf0-btn" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom&align=left">提示下左对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom&align=right">提示下右对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=bottom">提示左底部对齐</button><button class="pabcdf0-btn pabcd16-043" mx-view="app/gallery/mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=bottom">提示右底部对齐</button></div>',subs:[]},render:function(){this.updater.digest()}})});