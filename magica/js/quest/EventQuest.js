define("underscore backbone backboneCommon ajaxControl command QuestUtil text!template/quest/EventQuest.html text!css/quest/EventQuest.css text!css/quest/QuestCommon.css js/view/quest/QuestListPartsView js/view/quest/ClearAnimationsView".split(" "),function(c,A,b,n,g,k,B,C,D,v,J){function E(){h=[];c.each(f.userSectionList,function(a){var b=a.section.questType;if("COMPOSE"==b||"MATERIAL"==b)a.section.questBattleList=[],c.each(f.userQuestBattleList,function(e){a.section.sectionId===e.questBattle.sectionId&&
(e.questType=b,a.section.questBattleList.push(e))}),a.section.questBattleList.sort(function(a,b){return a.questBattle.sectionIndex-b.questBattle.sectionIndex}),h.push(a)});return h}var m=null,w,f,h,l,d,p,q,r,t,G={MONDAY:["FIRE","TIMBER"],TUESDAY:["WATER","LIGHT"],WEDNESDAY:["TIMBER","DARK"],THURSDAY:["LIGHT","FIRE"],FRIDAY:["DARK","WATER"],WEEKEND:"FIRE WATER TIMBER DARK LIGHT CC".split(" ")},H={MONDAY:["DARK"],TUESDAY:["FIRE"],WEDNESDAY:["WATER"],THURSDAY:["TIMBER"],FRIDAY:["LIGHT"],WEEKEND:["FIRE",
"WATER","TIMBER","DARK","LIGHT"]},u=[],I=A.View.extend({events:function(){var a={};a[b.cgti+" .missionBtn"]=this.missionToggle;a[b.cgti+" .questTitle"]=this.toggleOpen;a[b.cgti+" .weeklySchedulePopBtn"]=this.schedulePop;return a},initialize:function(a){this.template=c.template(B);this.createDom()},render:function(){this.$el.html(this.template(n.getPageJson()));return this},createView:function(){h=E();u=[];c.each(h,function(a,b){switch(a.section.questType){case "COMPOSE":d=a;break;case "MATERIAL":l=
a}!a.canPlay||"COMPOSE"!==a.section.questType&&"MATERIAL"!==a.section.questType||c.each(a.section.questBattleList,function(b,x){0===x?Array.prototype.push.apply(u,k.dropItemJson(b).list):0<x&&a.section.questBattleList[x-1].cleared&&Array.prototype.push.apply(u,k.dropItemJson(b).list)})});v.prototype.parentView=this;v.prototype.template=c.template($("#QuestListParts").text());var a=d&&d.section&&d.section.dayOfTheWeekQuestType?{MONDAY:["Mon.",""],TUESDAY:["Tues.",""],WEDNESDAY:["Wed.",""],THURSDAY:["Thurs.",
""],FRIDAY:["Fri.",""],WEEKEND:["Weekend",""]}[d.section.dayOfTheWeekQuestType]:["",""];d.weekText=a[0];l.weekText=a[0];var e=z(d,null,b.doc.querySelector("#composeWrap")),F=z(l,null,b.doc.querySelector("#materialWrap"));b.doc.getElementById("composeQuestWrap").appendChild(e);b.doc.getElementById("materialQuestWrap").appendChild(F);c.each(b.doc.querySelectorAll(".questTitle.chapter"),function(b){b.querySelector(".week1").textContent=a[0];b.querySelector(".week2").textContent=a[1]});c.each(G[d.section.dayOfTheWeekQuestType],
function(a){b.removeClass(b.doc.querySelector("#composeTitle ."+a),"off")});c.each(H[d.section.dayOfTheWeekQuestType],function(a){b.removeClass(b.doc.querySelector("#materialTitle ."+a),"off")})},createDom:function(){var a=this;q=p=t=r=this.campaignData=null;f.campaignList&&(this.campaignData=b.campaignParse(f.campaignList));this.campaignData&&this.campaignData.FREE_AT_NOT_CLEAR&&c.each(this.campaignData.FREE_AT_NOT_CLEAR.questType,function(a,b){"COMPOSE"==a?r=!0:"MATERIAL"==a?t=!0:"ALL"==a&&(t=r=
!0)});this.campaignData&&this.campaignData.HALF_AP&&c.each(this.campaignData.HALF_AP.questType,function(a,b){"COMPOSE"==a?p=!0:"MATERIAL"==a?q=!0:"ALL"==a&&(q=p=!0)});b.setGlobalView({});b.content.append(this.render().el);g.setWebView();this.createView();if(this.campaignData.POINT_UP&&!this.campaignData.POINT_UP.globalBadge&&0<this.campaignData.POINT_UP.pointUpType.length){var e=b.doc.getElementById("questLinkBtnWrap");-1<this.campaignData.POINT_UP.pointUpType.indexOf("MAIN")&&b.addClass(e.getElementsByClassName("main")[0],
"pointUp");if(-1<this.campaignData.POINT_UP.pointUpType.indexOf("SUB")){var d=b.storage.gameUser.toJSON();d.closeFunctions&&-1===d.closeFunctions.indexOf("ARENA")&&b.addClass(e.getElementsByClassName("side")[0],"pointUp")}(-1<this.campaignData.POINT_UP.pointUpType.indexOf("CHARA")||-1<this.campaignData.POINT_UP.pointUpType.indexOf("COSTUME"))&&b.addClass(e.getElementsByClassName("chara")[0],"pointUp");(-1<this.campaignData.POINT_UP.pointUpType.indexOf("COMPOSE")||-1<this.campaignData.POINT_UP.pointUpType.indexOf("MATERIAL"))&&
b.addClass(e.getElementsByClassName("event")[0],"pointUp")}b.scrollSet("questLinkListWrap","scrollInner");m&&b.forceScrollPreset("questLinkListWrap","scrollInner",m,!0);var y=0;c.each(f.userSectionList,function(a,b){"SUB"==a.section.questType&&y++});y||(b.removeClass(b.doc.querySelector(".side"),"linkBtn"),b.addClass(b.doc.querySelector(".side"),"off"));g.getBaseData(b.getNativeObj());k.canPlayQuestNum();k.eventTabSwitch(f.eventList);a=this;g.weekQuestTopUnset();setTimeout(function(){a&&a.dropsCommand(u)},
300);b.ready.hide()},modelSend:function(a){switch(a.currentTarget.parentNode.querySelector(".params .questType").dataset.questtype){case "COMPOSE":return d;case "MATERIAL":return l}},missionToggle:function(a){a.preventDefault();if(!b.isScrolled()){a=b.doc.querySelector("#questLinkListWrap");var e=b.doc.querySelector("#questLinkListWrap").className;-1!==e.indexOf("first")?a.className="second scrollInner":-1!==e.indexOf("second")&&(a.className="first scrollInner")}},toggleOpen:function(a){a.preventDefault();
!b.isScrolled()&&a.currentTarget.parentNode.classList.contains("questLinkList")&&(a.currentTarget.parentNode.classList.toggle("open"),g.startSe(1002),b.scrollRefresh())},schedulePop:function(a){a.preventDefault();b.isScrolled()||new b.PopupClass({popupType:"typeB",popupId:"schedulePop"},$("#WeeklySchedule").text())},dropsCommand:function(a){a=c.uniq(a);for(var b=a.length;0<b;)b=b-1|0,-1===a[b].indexOf("compose_")&&-1===a[b].indexOf("item_gift_")&&a.splice(b,1);var d=[];a=c.sample(a,6);c.each(a,function(a,
b){b=a.split("_");a=-1<a.indexOf("item_gift")?"resource/image_native/gift/"+b[0]+"_"+b[1]+"_a_"+b[2]+".png":4>b.length?"resource/image_native/item/"+b[0]+"_"+b[1]+"_"+b[2]+"_a.png":"resource/image_native/item/"+b[0]+"_"+b[1]+"_"+b[2]+"_a_"+b[3]+".png";d.push(a)});g.weekQuestTopSet(d);d=null}}),z=function(a,d,g){var e=!1,f=!1,k=[],h;n.getPageJson().campaignList&&(h=b.campaignParse(n.getPageJson().campaignList));c.each(a.section.questBattleList,function(b,d){if(!e||b.cleared){switch(b.questBattle.sectionIndex){case 1:b.questTitle=
"BATTLE ◆ BEGINNER";b.questClass="BEGINNER";break;case 2:b.questTitle="BATTLE ◆ INITIATE";b.questClass="INITIATE";break;case 3:b.questTitle="BATTLE ◆ ADVANCED";b.questClass="ADVANCED";break;case 4:b.questTitle="BATTLE ◆ MASTER",b.questClass="MASTER"}b.questBattle.title&&(b.questTitle=b.questBattle.title,b.questClass=b.questBattle.title);switch(b.questType){case "COMPOSE":b.questTypeText="Labyrinth of Enhancement";break;case "MATERIAL":b.questTypeText="Labyrinth of Awakening"}k.push(b);b.cleared||
(e=!0,f&&m&&(m=b.questBattleId));m==b.questBattleId&&(f=!0)}b.weekText=a.weekText});(e||f)&&b.addClass(g,"open");k.sort(function(b,a){return b.questBattle.sectionIndex>a.questBattle.sectionIndex?-1:b.questBattle.sectionIndex<a.questBattle.sectionIndex?1:0});var l=b.doc.createDocumentFragment();c.each(k,function(a,c){console.log(c,a);a.missionRewardCode=b.itemSet(a.questBattle.missionRewardCode);a.chestColor=a.missionRewardCode.chestColor;if(!a.cleared&&h.FREE_AT_NOT_CLEAR&&h.FREE_AT_NOT_CLEAR.sectionIds&&
-1<h.FREE_AT_NOT_CLEAR.sectionIds.indexOf(String(a.questBattle.sectionId)))a.campaignFreeAtNotClear=!0,a.overwriteAp=0;else switch(a.questType){case "COMPOSE":!a.cleared&&r?(a.campaignFreeAtNotClear=!0,a.overwriteAp=0):p&&(a.halfAp=Math.ceil(a.questBattle.ap/2),a.overwriteAp=Math.ceil(a.questBattle.ap/2));break;case "MATERIAL":!a.cleared&&t?(a.campaignFreeAtNotClear=!0,a.overwriteAp=0):q&&(a.halfAp=Math.ceil(a.questBattle.ap/2),a.overwriteAp=Math.ceil(a.questBattle.ap/2))}c=new v({model:a});d&&(c.parentView=
d);c.el.dataset.scrollHash=a.questBattleId;l.appendChild(c.render().el)});return l};return{needModelIdObj:[{id:"user"},{id:"gameUser"},{id:"itemList"},{id:"userItemList"},{id:"giftList"},{id:"userGiftList"},{id:"userStatusList"},{id:"userCharaList"},{id:"userCardList"},{id:"userDeckList"},{id:"userDoppelList"},{id:"userLive2dList"},{id:"userChapterList"},{id:"userSectionList"},{id:"userQuestBattleList"},{id:"userFollowList"},{id:"userQuestAdventureList"}],fetch:function(a){m=a?a:null;n.pageModelGet(this.needModelIdObj)},
init:function(){b.setStyle(C+D);f=n.getPageJson();l={};d={};k.supportPickUp(f);w=new I;b.searchQuestGiftId=null},startCommand:function(){g.changeBg("web_0019.jpg");g.startBgm("bgm04_movie12")},remove:function(a){w&&w.remove();g.weekQuestTopUnset();a()}}});