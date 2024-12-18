//	HYPE.documents["headlines"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="headlines.hyperesources",f="headlines",g="headlines_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/headlines_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_768F||null!=window.HYPE_dtl_768F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-768.full.min.js":"HYPE-768.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_768"+c,"HYPE_dtl_768"+c,a,d),false==!0&&(a=a||k("HYPE_w_768","HYPE_wdtl_768","HYPE-768.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_768","HYPE-768.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeFunction",source:"function(hypeDocument, element, event) {\t\n\twindow.storyCount = 0;\n}",identifier:"7"},{name:"updatedStory",source:"function(hypeDocument, element, event) {\t\n\tvar storyTitle = new Array();\n\tvar storyBody = new Array();\n\t\n\tstoryTitle[0] = \"Headline: Messi's MLS Magic Continues: Inter Miami Secures Playoff Spot\";\n\tstoryBody[0] = \"Lionel Messi's impact on Major League Soccer continues to astound. Inter Miami, led by the Argentine superstar, has clinched a playoff berth, solidifying their position as a major force in the league. Messi's arrival has sparked a resurgence for the club, drawing record-breaking crowds and inspiring a new generation of soccer fans. As the playoffs approach, expectations are high for Messi and Inter Miami to make a deep run in the tournament.\";\n\n\tstoryTitle[1] = \"Ronaldo's Al-Nassr Stumbles, Faces Tough Road Ahead\";\n\tstoryBody[1] = \"Cristiano Ronaldo's Al-Nassr has faced a setback in recent matches, raising concerns about their performance in the Saudi Pro League. Despite the Portuguese star's continued goal-scoring prowess, the team has struggled to maintain consistency. With tough fixtures on the horizon, Al-Nassr will need to improve their overall team performance to secure a strong position in the league.\";\n\n\tstoryTitle[2] = \"Women's World Cup 2023: A Tournament for the Ages\";\n\tstoryBody[2] = \"The 2023 FIFA Women's World Cup was a historic event that showcased the incredible talent and passion of women's soccer. The tournament featured thrilling matches, stunning goals, and unforgettable moments. The final between Spain and England captivated audiences worldwide, highlighting the growing popularity of women's football.\";\n\n\tvar numberOfStories = storyTitle.length;\n\t\n\thypeDocument.getElementById(\"textHeadline\").innerHTML = storyTitle[window.storyCount];\n\thypeDocument.getElementById(\"textStory\").innerHTML = storyBody[window.storyCount];\n\t\n\t\n\tif (window.storyCount == (numberOfStories - 1)) {\n\t\twindow.storyCount = 0;\n\t} else {\n\t\twindow.storyCount = window.storyCount + 1;\n\t}\n\t\n}",identifier:"8"},{name:"initialize1",source:"function(hypeDocument, element, event) {\t\n\twindow.storyCount = 0;\n\t\n}",identifier:"19"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_768"+c](f,g,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},
l,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],[{A:{a:[{p:4,h:"19"}]},o:"3",p:"600px",cA:false,Y:810,Z:128,c:"#00FFC5",L:[],bY:1,d:810,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"20"},{f:"c",y:0,z:1.15,i:"a",e:0,s:-810,o:"21"},{f:"c",p:2,y:0.01,z:9.29,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},s:{a:[{p:4,h:"8"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:1,z:8,i:"e",e:1,s:1,o:"20"},{f:"c",y:1.15,z:7,i:"a",e:0,s:0,o:"21"},{f:"c",y:8.15,z:1.15,i:"a",e:810,s:0,o:"21"},{f:"c",y:9,z:1,i:"e",e:0,s:1,o:"20"},{f:"c",p:2,y:10,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:10,i:"e",s:0,z:0,o:"20",f:"c"},{y:10,i:"a",s:810,z:0,o:"21",f:"c"}],f:30,b:[]}},bZ:180,O:["20","21"],n:"Untitled Layout","_":0,v:{"20":{aU:8,G:"#000",c:794,aV:8,r:"inline",d:34,e:0,s:"Arial,Helvetica,Sans-Serif",t:18,Z:"break-word",v:"bold",i:"textHeadline",w:"headline headline headline<br><br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:0},"21":{aU:8,G:"#000",c:794,aV:8,r:"inline",d:62,s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",i:"textStory",w:"Story story story\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-810,F:"center",b:50}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();