define("underscore backbone backboneCommon ajaxControl command text!template/memoria/MemoriaTop.html text!css/memoria/MemoriaTop.css".split(" "),function(d,h,a,b,c,k,l){var f,e,m=h.View.extend({initialize:function(a){this.template=d.template(k);this.createDom()},render:function(){this.$el.html(this.template(b.getPageJson()));return this},createDom:function(){a.setGlobalView();a.content.append(this.render().el);a.firstNaviCheck(f);a.ready.hide()}});return{needModelIdObj:[{id:"user"},{id:"gameUser"},
{id:"itemList"},{id:"userItemList"},{id:"userStatusList"},{id:"userCharaList"},{id:"userCardList"},{id:"userDeckList"},{id:"userDoppelList"},{id:"userLive2dList"},{id:"userPieceList"}],fetch:function(){b.pageModelGet(this.needModelIdObj)},init:function(){f=b.getPageJson();a.setStyle(l);e=new m},startCommand:function(){c.changeBg("web_0020.ExportJson");c.startBgm(a.settingBgm);var g=[],b=d.sample(a.storage.userPieceList.toJSON(),5);b&&d.each(b,function(a,b){g.push(a.pieceId)});c.displayMemoriaTop(g)},
remove:function(a){e&&e.remove();c.stopMemoriaTop();a()}}});