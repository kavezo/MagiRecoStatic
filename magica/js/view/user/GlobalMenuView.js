var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(d,f,a){if(a.get||a.set)throw new TypeError("ES3 does not support getters and setters.");d!=Array.prototype&&d!=Object.prototype&&(d[f]=a.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var d=$jscomp.global.Symbol.iterator;d||(d=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[d]&&$jscomp.defineProperty(Array.prototype,d,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(d){var f=0;return $jscomp.iteratorPrototype(function(){return f<d.length?{done:!1,value:d[f++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(d){$jscomp.initSymbolIterator();d={next:d};d[$jscomp.global.Symbol.iterator]=function(){return this};return d};$jscomp.makeIterator=function(d){$jscomp.initSymbolIterator();$jscomp.initSymbol();$jscomp.initSymbolIterator();var f=d[Symbol.iterator];return f?f.call(d):$jscomp.arrayIterator(d)};
define("underscore backbone backboneCommon ajaxControl command text!template/base/GlobalMenu.html js/view/user/APPopup".split(" "),function(d,f,a,l,w,x,q){var u=f.View.extend({initialize:function(){this.listenTo(this.model,"change",this.render);this.render()},render:function(){var b=a.storage.userStatusList,c={},e=f.Model.extend();c.ACP=b.findWhere({statusId:"ACP"}).toJSON().point||"0";c.MAX_ACP=b.findWhere({statusId:"MAX_ACP"}).toJSON().point||"0";this.model=new e(c);b=this.model.toJSON();d.each(b,
function(b,c){a.doc.querySelector("."+c).textContent=b})},removeView:function(){this.model.clear();delete this.model;this.off();this.remove()}}),p,z=f.View.extend({events:function(){var b={};b[a.cgti+" #menu"]=this.menuToggle;b[a.cgti+" #ap"]=this.apPopup;b[a.cgti+" #money"]=this.moneyPopup;b[a.cgti+" .backLinkBtn"]=this.backLinkHandler;b[a.cgti+" .helpBtn"]=this.helpPop;b[a.cgti+" .linkBtn.btnOverlay"]=this.locationCheck;return b},initialize:function(a){this.listenTo(this,"removeView",this.removeView);
this.listenTo(this,"firstPopup",this.firstPopup);this.listenTo(this,"optionSet",this.optionSet);this.campaignBadgeView=null;this.template=d.template(x);this.createDom(a)},render:function(){this.$el.html(this.template(a.storage))},createDom:function(b){this.render();this.listenTo(a.storage.userItemList,"change",this.itemChangeHandler);this.listenTo(a.storage.userStatusList,"change",this.statusDisplay);this.listenTo(a.storage.userDailyChallengeList,"change",this.missionBadgeCnt);this.listenTo(a.storage.userTotalChallengeList,
"change",this.missionBadgeCnt);this.listenTo(a.storage.userLimitedChallengeList,"change",this.missionBadgeCnt);var c=this.helpArraySet(a.location);"noneActive"!==c.setType&&(a.addClass(this.el.getElementsByClassName("helpBtn")[0],"on"),this.el.getElementsByClassName("helpBtn")[0].dataset.type=c.setType.toString(),this.el.getElementsByClassName("helpBtn")[0].dataset.title=c.popTitle);a.doc.getElementById("globalMenuContainer").appendChild(this.el);this.statusDisplay();this.itemChangeHandler();this.missionBadgeCnt();
this.pagePerHandler(b);this.userRankHandler();a.thisPlatform||a.setPlatForm(l.getPageJson());a.acpTimeCure&&(clearInterval(a.acpTimeCure),a.acpTimeCure=null);a.storage.userStatusList&&(a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON().point>=a.storage.userStatusList.findWhere({statusId:"MAX_ACP"}).toJSON().point||this.autoCureSet())},userRankHandler:function(){for(var b=a.storage.gameUser.toJSON(),c=a.doc.createDocumentFragment(),e=(b.level+"").split(""),d=0,h=e.length;d<h;d++){var f=
a.doc.createElement("img");f.src=resDir+"/magica/resource/image_web/common/number/"+e[d]+".png";c.appendChild(f)}a.doc.getElementById("exp").getElementsByClassName("userRank")[0].appendChild(c);c=b.totalExpForNextLevel;e=b.totalExpForCurrentLevel||0;b=b.exp;d=c-b;a.doc.getElementById("exp").getElementsByClassName("pointWrap")[0].textContent="In: "+d;b=Math.round((b-e)/(c-e)*100)+"%";a.doc.getElementById("exp").getElementsByClassName("gaugeInner")[0].style.width=b},autoCureSet:function(b){if(a.storage.userStatusList&&
a.storage.userStatusList.findWhere({statusId:"ACP"})&&a.storage.userStatusList.findWhere({statusId:"MAX_ACP"})){var c=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON();this.currentTime=b?b:Date.parse(l.getPageJson().currentTime)/1E3;var e=Date.parse(c.checkedAt)/1E3+60*c.checkPeriod,d=e-this.currentTime,h=this;if(-1>d){b=0;for(var f=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON(),r=a.storage.userStatusList.findWhere({statusId:"MAX_ACP"}).toJSON().point;0>d&&b+c.point<r;)b++,
e+=60*f.checkPeriod,d=e-h.currentTime;var g=new Date(1E3*(e-60*c.checkPeriod)),d=g.getFullYear(),f=10>g.getMonth()?"0"+(g.getMonth()+1):g.getMonth()+1,r=10>g.getDate()?"0"+g.getDate():g.getDate(),m=10>g.getHours()?"0"+g.getHours():g.getHours(),p=10>g.getMinutes()?"0"+g.getMinutes():g.getMinutes(),g=10>g.getSeconds()?"0"+g.getSeconds():g.getSeconds(),f=d+"/"+f+"/"+r+" "+m+":"+p+":"+g,d=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON();d.checkedAt=f;d.point=b+c.point;c=a.storage.userStatusList.findWhere({statusId:"ACP"});
c.clear({silent:!0});c.set(d);c=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON()}c.point>=a.storage.userStatusList.findWhere({statusId:"MAX_ACP"}).toJSON().point||(a.cureSpTimeCount=0,a.cureSpTimeCountStartAt=Date.parse(new Date),a.acpTimeCure=setInterval(function(){if(a.storage.userStatusList){if(a.cureSpTimeCount=Math.floor((Date.parse(new Date)-a.cureSpTimeCountStartAt)/1E3)|0,a.storage.userStatusList.findWhere({statusId:"ACP"})&&a.storage.userStatusList.findWhere({statusId:"MAX_ACP"})){var b=
a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON(),c=a.storage.userStatusList.findWhere({statusId:"MAX_ACP"}).toJSON();if(b.point<c.point){if(a.doc.getElementById("apPointWrap")){var d=e-h.currentTime-a.cureSpTimeCount,f=d+300*(c.point-b.point-1),c=d/60|0,d=d-60*c|0,g=f/60/60|0,n=f/60-60*g|0,f=f-60*n-3600*g|0;a.doc.getElementById("apFullTime").textContent=c+":"+("0"+d).slice(-2)+".";a.doc.getElementById("apFullTime2").textContent=0<g?g+":"+("0"+n).slice(-2)+":"+("0"+f).slice(-2):n+":"+
("0"+f).slice(-2)+"."}if(!(h.currentTime+a.cureSpTimeCount<e)){h.currentTime=e;e+=60*b.checkPeriod;a.cureSpTimeCountStartAt=Date.parse(new Date);var k=new Date(1E3*h.currentTime),c=k.getFullYear(),f=10>k.getMonth()?"0"+(k.getMonth()+1):k.getMonth()+1,d=10>k.getDate()?"0"+k.getDate():k.getDate(),g=10>k.getHours()?"0"+k.getHours():k.getHours(),n=10>k.getMinutes()?"0"+k.getMinutes():k.getMinutes(),k=10>k.getSeconds()?"0"+k.getSeconds():k.getSeconds(),f=c+"/"+f+"/"+d+" "+g+":"+n+":"+k,c=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON();
c.checkedAt=f;c.point=b.point+b.periodicPoint;b=a.storage.userStatusList.findWhere({statusId:"ACP"});b.clear({silent:!0});b.set(c)}}else clearInterval(a.acpTimeCure),a.doc.getElementById("apPointWrap")&&q.apCureEvents(),a.cureSpTimeCount=0,e=h.currentTime=null}}else clearInterval(a.acpTimeCure),a.doc.getElementById("apPointWrap")&&q.apCureEvents(),a.cureSpTimeCount=0,e=h.currentTime=null},1E3))}},statusDisplay:function(){this.userStatusView?this.userStatusView.render():(u.prototype.parentView=this,
this.userStatusView=new u({el:a.doc.getElementById("status")}));a.doc.getElementById("apPointWrap")&&q.apCureEvents()},itemChangeHandler:function(){var b=a.storage.userItemList,c=b.findWhere({itemId:"PRESENTED_MONEY"})?b.findWhere({itemId:"PRESENTED_MONEY"}).toJSON().quantity:0,b=b.findWhere({itemId:"MONEY"})?b.findWhere({itemId:"MONEY"}).toJSON().quantity:0,d=a.doc.querySelector("#money .pointWrap");(d.textContent|0)!==c+b&&(d.textContent=c+b);a.storage.userItemList&&l.getPageJson().currentTime&&
(l.getPageJson(),0==a.periodCheck(l.getPageJson().currentTime,"2020/07/04 23:59:59")?a.addClass(a.doc.getElementById("gachaBadge"),"freeRareGacha"):(c=a.storage.gameUser.get("freeGachaAt")?a.storage.gameUser.get("freeGachaAt"):"",""===c||c.substr(0,10)!==l.getPageJson().currentTime.substr(0,10)?(a.addClass(a.doc.getElementById("gachaBadge"),"on"),a.doc.getElementById("gachaBadge").textContent="Free"):(c=a.storage.userItemList.findWhere({itemId:"YELL"})?a.storage.userItemList.findWhere({itemId:"YELL"}).toJSON().quantity:
0,199<c?(c=Math.floor(c/200),a.addClass(a.doc.getElementById("gachaBadge"),"on"),a.doc.getElementById("gachaBadge").textContent=c):a.removeClass(a.doc.getElementById("gachaBadge"),"on"))))},missionBadgeCnt:function(){if(a.storage.userDailyChallengeList&&a.storage.userTotalChallengeList&&!this.onceTimeFlg){this.onceTimeFlg=!0;var b=0,c=l.getPageJson().currentTime?l.getPageJson().currentTime.substr(0,10):null;a.storage.userDailyChallengeList.each(function(a,d){d=a.toJSON();var e=!1;d.limitAt?d.limitAt!==
c&&(e=!0):a.set({limitAt:c});e||d.receivedAt&&d.receivedAt.substr(0,10)===c||d.clearedCount>=d.challenge.count&&b++});a.storage.userTotalChallengeList.each(function(a,c){a=a.toJSON();a.receivedAt||a.clearedCount>=a.challenge.count&&b++});var d=Date.parse(l.getPageJson().currentTime);a.storage.userLimitedChallengeList.each(function(a,c){c=a.toJSON();var e=!1;c.limitAt?c.limitAt<d&&(e=!0):a.set({limitAt:Date.parse(c.endAt)});e||c.receivedAt||c.clearedCount>=c.challenge.count&&b++});0<b?(a.addClass(a.doc.getElementById("missionBadge"),
"on"),a.doc.getElementById("missionBadge").textContent=b):a.removeClass(a.doc.getElementById("missionBadge"),"on");this.onceTimeFlg=!1}},pagePerHandler:function(b){var c=0;d.each(b,function(){c++});0<c?(b.hideMenu&&a.addClass(a.doc.getElementById("menu"),"noneDisp"),b.hideBackLink&&a.addClass(a.doc.getElementsByClassName("backLinkBtn")[0],"noneDisp"),b.hideStatus&&a.addClass(a.doc.getElementById("status"),"noneDisp")):("MyPage"!==a.location?(a.addClass(a.doc.getElementById("rank"),"noneDisp"),a.addClass(a.doc.getElementById("etcMenu"),
"noneDisp")):(a.addClass(a.doc.getElementById("sideMenuBg"),"noneDisp"),a.addClass(a.doc.getElementsByClassName("homeBtn")[0],"noneDisp"),a.addClass(a.doc.getElementsByClassName("backLinkBtn")[0],"noneDisp")),"DeckFormation"!=a.location&&"EventAccomplishDeck"!=a.location||a.addClass(a.doc.getElementById("status"),"noneDisp"),"MemoriaEquip"!=a.location&&"MemoriaSetEquip"!=a.location||a.addClass(a.doc.getElementById("menu"),"noneDisp"))},menuToggle:function(b){a.isScrolled()||(b.preventDefault(),"DeckFormation"==
a.location&&a.holdDeck||"EventAccomplishDeck"==a.location&&a.holdDeck?a.pageObj.deckChangeConf():(b=a.doc.getElementById("sideMenu"),b.classList.contains("anim")?(a.addClass(b,"close"),a.removeClass(b,"anim"),a.addClass(a.doc.getElementById("sideMenuBg"),"close"),a.removeClass(a.doc.getElementById("sideMenuBg"),"anim"),"MyPage"===a.location&&(a.removeClass(a.doc.getElementById("status"),"myPageShow"),a.addClass(a.doc.getElementById("status"),"myPageHide"),a.doc.getElementById("mypageBanner")&&a.addClass(a.doc.getElementById("mypageBanner"),
"hide"),a.pageObj.menuHide())):(a.addClass(b,"anim"),a.removeClass(b,"close"),a.addClass(a.doc.getElementById("sideMenuBg"),"anim"),a.removeClass(a.doc.getElementById("sideMenuBg"),"close"),"MyPage"===a.location&&(a.removeClass(a.doc.getElementById("status"),"myPageHide"),a.addClass(a.doc.getElementById("status"),"myPageShow"),a.doc.getElementById("mypageBanner")&&a.removeClass(a.doc.getElementById("mypageBanner"),"hide"),a.pageObj.menuShow()))))},backLinkHandler:function(b){b.preventDefault();b.stopPropagation();
a.isScrolled()||a.isDoubleTouch()||(w.startSe(1003),"true"===b.currentTarget.getAttribute("data-noLink")?b.currentTarget.setAttribute("data-noLink",""):a.backLinkHandler())},apPopup:function(b,c,d){if(b&&(b.preventDefault(),a.isScrolled()))return;q.instantPopup(c,d)},moneyPopup:function(b){b&&b.preventDefault();if(!a.isScrolled()){a.tapBlock(!0);p&&p.removeView();var c=this;require(["js/view/purchase/PurchasePopup"],function(b){var d=function(d){a.tapBlock(!1);b.prototype.parentView||(b.prototype.parentView=
c);p=new b(d)};window.isLocal?require(["text!/magica/json/money/shop/list.json"],function(a){d(a)}):l.ajaxSimpleGet(a.linkList.moneyShopList,"",d)})}},helpPop:function(b){b.preventDefault();a.isScrolled()||a.setHelpPopup(b.currentTarget.dataset.type,b.currentTarget.dataset.title)},helpArraySet:function(a){var b={};switch(a){case "CharaListTop":b.popTitle="Magical Girls";b.setType=["03","14_02"];break;case "CharaListCompose":case "CharaListCustomize":case "CharaListComposeMagia":case "CharaListEquip":b.popTitle=
"Enhancing Magical Girls";b.setType=["04","14_03"];break;case "MemoriaTop":case "MemoriaList":case "MemoriaCompose":b.popTitle="Memoria";b.setType=["05","14_04"];break;case "GachaTop":b.popTitle="Fate Weave";b.setType=["11","14_01"];break;case "MissionTop":b.popTitle="Missions";b.setType=["12"];break;case "ShopTop":b.popTitle="The Shop";b.setType=["13"];break;case "MainQuest":b.popTitle="Quests";b.setType=["06","07"];break;case "CharaQuest":b.popTitle="Quests";b.setType=["06","07"];break;case "SubQuest":b.popTitle=
"Quests";b.setType=["06","07","14_08"];break;case "FormationTop":case "DeckFormation":b.popTitle="Teams";b.setType=["08","14_06","14_07"];break;case "ArenaTop":case "ArenaFreeRank":case "ArenaRanking":case "ArenaReward":case "ArenaHistory":case "ArenaSimulate":b.popTitle="Mirrors";b.setType=["10","14_05"];break;case "PresentList":case "PresentHistory":b.popTitle="Presents";b.setType=["15_01","15_02"];break;case "ItemListTop":b.popTitle="Items";b.setType=["04_07"];break;case "FollowTop":b.popTitle=
"Follow";b.setType=["09"];break;case "MemoriaSetList":b.popTitle="About Memoria Sets";b.setType=["05_04"];break;default:b.setType="noneActive"}return b},getUserStatus:function(){return this.userStatusView.model.toJSON()},optionSet:function(a){this.createDom(a)},locationCheck:function(b){b.preventDefault();a.isScrolled()||b.currentTarget.dataset.href==="#/"+a.location&&this.menuToggle(b)},awakeSuspend:function(a){var b=this;l.ajaxSimpleGet("/magica/api/page/ResumeBackground","",function(a){a=window.isLocal?
JSON.parse(a):a;b.suspendRefresh(a.currentTime)})},suspendRefresh:function(b){var c=Date.parse(b)/1E3;a.acpTimeCure&&clearInterval(a.acpTimeCure);this.autoCureSet(c);"EventRaidTop"!==a.location&&"ArenaTop"!==a.location&&"ArenaFreeRank"!==a.location&&"ArenaRanking"!==a.location||a.pageObj.awakeSuspend(c);"EventAccomplishDeck"!==a.location&&"EventAccomplishRecovery"!==a.location&&"EventAprilFoolTop"!==a.location||a.pageObj.awakeSuspend(b)},addCampaignBanner:function(){var b=l.getPageJson();b&&(this.removeCampaignBanner(),
b.campaignList&&(b=a.campaignParse(b.campaignList),b.BOX_GACHA&&(this.campaignBannerView=new y({cpData:b}),this.el.querySelector("#sideBigBtns").appendChild(this.campaignBannerView.render().el))))},addCampaignBadge:function(){var b=l.getPageJson();if(b){var c={expp:!1,yell:!1,expc:!1,cc:!1,ep:!1,freeAtNotClear:!1,arena:!1};this.removeCampaignBadge();if(b.campaignList){b=a.campaignParse(b.campaignList);console.log(b);b.POINT_UP&&b.POINT_UP.globalBadge&&(b.POINT_UP.EXPP&&(c.expp=!0),b.POINT_UP.YELL&&
(c.yell=!0));b.HALF_AP&&(c.halfAp=b.HALF_AP.bgImgPath);b.ARENA_REWARD_UP&&(c.arena=b.ARENA_REWARD_UP.magnification);var e;if(c.expp||c.yell||c.expc||c.cc||c.ep||c.halfAp||c.freeAtNotClear)e=f.Model.extend({}),m.prototype.template=d.template(this.el.querySelector("#CampaignBadgeTemp").textContent),b=a.doc.createDocumentFragment(),this.campaignBadgeView=new m({model:new e(c)}),b.appendChild(this.campaignBadgeView.render().el),this.el.querySelector("#sideBigBtns").appendChild(b);a.storage.gameUser.toJSON().closeFunctions&&
-1<a.storage.gameUser.toJSON().closeFunctions.indexOf("ARENA")||!c.arena||(e=f.Model.extend({}),m.prototype.template=d.template(this.el.querySelector("#ArenaCampaignBadgeTemp").textContent),b=a.doc.createDocumentFragment(),this.arenaCampaignBadgeView=new m({model:new e(c)},!0),b.appendChild(this.arenaCampaignBadgeView.render().el),this.el.querySelector("#sideBigBtns").appendChild(b))}}},addEventBadge:function(){var b=l.getPageJson();if(b&&(this.removeEventBadge(),b.eventList)){var c=a.storage.gameUser.toJSON().closeFunctions.split(","),
e=null;if(e=b.eventList.filter(function(a,b){if("TOWER"==a.eventType||"DAILYTOWER"==a.eventType||"BRANCH"==a.eventType||"ARENAMISSION"==a.eventType||"SINGLERAID"==a.eventType||"STORYRAID"==a.eventType||"TRAINING"==a.eventType||"ACCOMPLISH"==a.eventType||"DUNGEON"==a.eventType||"RAID"==a.eventType||"ARENARANKING"==a.eventType&&-1===c.indexOf("ARENA"))return!0})[0]){var n=f.Model.extend({});t.prototype.template=d.template(this.el.querySelector("#EventBadgeTemp").textContent);t.prototype.rootView=this;
var b=b.currentTime.split(" ")[0],h=e.endAt.split(" ")[0],m=e.endAt.split(" ")[1];e.endAtText="";b==h?(h=$jscomp.makeIterator(m.split(":")),b=h.next().value,h=h.next().value,e.endAtText="Until ",e.endAtText+=b%12+":"+h+" ",e.endAtText+=["AM","PM"][Math.floor(b/12)]):e.endAtText="Until "+Number(h.split("/")[1])+"/"+Number(h.split("/")[2]);b=a.doc.createDocumentFragment();this.eventBadgeView=new t({model:new n(e)});b.appendChild(this.eventBadgeView.render().el);this.el.querySelector("#sideBigBtns").appendChild(b)}}},
removeCampaignBanner:function(){this.campaignBannerView&&(this.campaignBannerView.removeView(),this.campaignBannerView=null)},removeCampaignBadge:function(){this.campaignBadgeView&&(this.campaignBadgeView.removeView(),this.campaignBadgeView=null)},removeEventBadge:function(){this.eventBadgeView&&(this.eventBadgeView.removeView(),this.eventBadgeView=null)},removeView:function(){a.acpTimeCure&&(clearInterval(a.acpTimeCure),a.acpTimeCure=null);this.bannerView&&this.bannerView.removeView();this.userStatusView&&
this.userStatusView.removeView();this.eventBadgeView&&this.eventBadgeView.removeView();this.campaignBadgeView&&this.campaignBadgeView.removeView();a.globalMenuView=null;this.off();this.remove()}}),y=f.View.extend({tagName:"li",className:"campaignBanner TE se_decide linkBtn",attributes:{"data-href":"#/CampaignBoxGachaTop"},initialize:function(a){this.template="\x3cimg src\x3d'"+a.cpData.BOX_GACHA.bannerImgPath+"' /\x3e"},render:function(){this.$el.html(this.template);return this},removeView:function(){this.off();
this.remove()}}),m=f.View.extend({tagName:"li",className:"campaignBadgeWrap",events:function(){var a={};a["webkitAnimationEnd .campaignBadge"]=this.animationTrigger;return a},initialize:function(a,c){c&&(this.arenaBadge=!0);this.cnt=0},render:function(){this.$el.html(this.template({model:this.model.toJSON()}));this.domCnt=this.el.querySelectorAll(".campaignBadge").length;1==this.domCnt?a.addClass(this.el.querySelectorAll(".campaignBadge")[0],"only"):a.addClass(this.el.querySelectorAll(".campaignBadge")[0],
"off");this.arenaBadge&&a.addClass(this.el,"ARENA");return this},animationTrigger:function(b){b.currentTarget.classList.contains("off")?(a.removeClass(b.currentTarget,"off"),this.cnt=this.cnt+1>=this.domCnt?0:this.cnt+1,a.addClass(this.el.querySelectorAll(".campaignBadge")[this.cnt],"on")):(a.addClass(b.currentTarget,"off"),a.removeClass(b.currentTarget,"on"))},removeView:function(){this.off();this.remove()}}),A={TOWER:"#/EventTowerTop",DAILYTOWER:"#/EventDailyTowerTop",BRANCH:"#/EventBranchTop",
ARENAMISSION:"#/EventArenaMissionTop",ARENARANKING:"#/ArenaTop",SINGLERAID:"#/EventSingleRaidTop",STORYRAID:"#/EventStoryRaidTop",TRAINING:"#/EventTrainingTop",ACCOMPLISH:"#/EventAccomplishTop",DUNGEON:"#/EventDungeonTop",RAID:"#/EventRaidTop"},v={TOWER:"tower",DAILYTOWER:"dailytower",BRANCH:"branch",ARENAMISSION:"arenaMission",ARENARANKING:"arenaranking",SINGLERAID:"singleraid",STORYRAID:"storyraid",TRAINING:"training",ACCOMPLISH:"accomplish",DUNGEON:"dungeon",RAID:"raid"},t=f.View.extend({tagName:"li",
events:function(){var b={};b[a.cgti]=this.locationCheck;return b},className:function(){return"eventBadgeWrap TE linkBtn se_decide "+this.model.get("eventType").toLowerCase()},initialize:function(a){a="arenaranking"===v[this.model.get("eventType")]?"/magica/resource/image_web/event/arenaranking/common/event_pop.png":"/magica/resource/image_web/event/"+v[this.model.get("eventType")]+"/"+this.model.toJSON().eventId+"/event_pop.png";this.model.set({imagePath:a})},render:function(){this.$el.html(this.template({model:this.model.toJSON()}));
this.model.toJSON().eventType.toLowerCase().charAt(0).toUpperCase();this.model.toJSON().eventType.toLowerCase().slice(1).toLowerCase();this.el.dataset.href=A[this.model.get("eventType")];return this},locationCheck:function(b){b.preventDefault();a.isScrolled()||b.currentTarget.dataset.href==="#/"+a.location&&this.rootView.menuToggle(b)},removeView:function(){this.off();this.remove()}});return z});