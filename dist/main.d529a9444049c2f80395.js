!function(){var e={5973:function(e,t,n){"use strict";var r,a,o,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(9204);for(var l=n(5776),c=n(5776),s=n(5776),m=n(3936),u=n(5712),g=n(9040),d=n(4544),h=n(4511),p=n(2429),v=n(2650),f=n(7910),b=n(3165),C=n(1250),I=n(6679),E=n(6018),A=function(){return l.createElement(p.AlertApp,{koreanMessage:"페이지를 찾을 수 없습니다!",englishMessage:"Page not found!"})},y=function(){return l.createElement(p.AlertApp,{koreanMessage:"에러가 발생했습니다!",englishMessage:"Got an error!"})},w=function(e){var t=e.path,n=void 0===t?"":t;return c.useEffect((function(){window.location.href=n})),null},S=function(e){function t(t){var n=t.children,r=void 0===n?null:n,a=e.call(this,{children:r})||this;return a.state={hasError:!1},a}return i(t,e),t.prototype.componentDidCatch=function(e,t){this.setState({hasError:!0},(function(){console.error(null==e?void 0:e.toString()),console.error(null==t?void 0:t.componentStack)}))},t.prototype.render=function(){return this.state.hasError?l.createElement(y,null):this.props.children},t}(c.Component),N=function(e){var t=e.routes,n=void 0===t?[]:t;return m.useRoutes(n.map((function(e,t){var n=e.path,r=e.element;return{path:n,element:l.createElement(S,{key:t},r)}})))},k=document.getElementsByClassName("Temporary");k.length>0;)null===(o=null===(a=k[0])||void 0===a?void 0:a.parentNode)||void 0===o||o.removeChild(k[0]);s.render(l.createElement((function(){return l.createElement(m.BrowserRouter,null,l.createElement("div",{className:u.css({overflowY:"hidden",width:"100%",height:"100%",margin:0,padding:0,backgroundColor:"#000000"})},l.createElement(h.LanguageProvider,null,l.createElement(E.MediaProvider,null,l.createElement(g.StatusBar,{showTime:!0}),l.createElement(N,{routes:[{path:"/",element:l.createElement(v.HomeScreen,null)},{path:"about",element:l.createElement(f.AboutApp,null)},{path:"cv",element:l.createElement(b.CVApp,null)},{path:"project",element:l.createElement(C.ProjectApp,null)},{path:"music",element:l.createElement(I.MusicApp,null)},{path:"c3dmb",element:l.createElement(w,{path:"https://avantgarde95.github.io/C3DMB"})},{path:"*",element:l.createElement(A,null)}]}),l.createElement(d.NavigationBar,{showNavigators:!0})))))}),null),document.body)},7910:function(e,t,n){"use strict";t.__esModule=!0,t.AboutApp=void 0;var r=n(5776),a=n(5776),o=n(5712),i=n(3461),l=n(172);n(162);var c=n(5196),s=n(4511),m=n(6646),u=n(5783),g=n(4802),d=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:o.css({font:"1.5rem",fontWeight:"bold"})},n)},h=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("ul",{className:o.css({listStyle:"none",paddingLeft:0,marginBottom:"1.5rem"})},n)},p=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("li",null,r.createElement("div",{className:o.css({display:"inline-block",marginLeft:"0.5rem",width:"1.5rem",height:"0.9rem",fontSize:"0.6rem"})},r.createElement(c.Icon,{definition:i.faStar})),r.createElement("div",{className:o.css({display:"inline-block",verticalAlign:"top",width:"calc(100% - 2rem)"})},n))},v=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,l=void 0===i?null:i,c=a.useContext(u.ThemeContext);return r.createElement("a",{className:o.css({wordBreak:"break-all",color:c.lightColor,"&:hover, &:active":{color:c.darkColor}}),target:"_blank",rel:"noopener noreferrer",href:n},l)},f=function(e){var t=e.src,n=void 0===t?"":t,i=e.alt,c=void 0===i?"":i,s=a.useContext(u.ThemeContext),m=a.createRef();return a.useEffect((function(){var e=m.current;null!==e&&new l.Luminous(e,{sourceAttribute:"src",caption:c})})),r.createElement("img",{className:o.css([s.boxStyle,s.highlightStyle,{cursor:"pointer",width:"12rem",height:"12rem",marginRight:"0.7rem","&:last-child":{marginRight:0}}]),ref:m,src:n,alt:c,title:c})},b=function(e){var t=e.images,n=void 0===t?[{src:"",alt:""}]:t;return r.createElement("div",{className:o.css({overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",marginLeft:"1px",marginRight:"1px",marginBottom:"1.5rem"})},n.map((function(e){var t=e.src,n=e.alt;return r.createElement(f,{src:t,alt:n})})))},C=[{src:n(6670),alt:"Real-time rendering (Rasterization)"},{src:n(7478),alt:"Real-time rendering (Ray tracing)"},{src:n(4048),alt:"Augmented reality (Microsoft HoloLens)"}],I=[{src:n(1351),alt:"My guitar"},{src:n(8316),alt:"My concert"},{src:n(316),alt:"My music"}],E=function(){var e=a.useContext(u.ThemeContext);return r.createElement("div",{className:o.css([e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}])},r.createElement("div",{className:o.css({fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"})},r.createElement(s.Korean,null,"소개"),r.createElement(s.English,null,"About")),r.createElement("div",{className:o.css({marginBottom:"1.5rem"})},r.createElement(s.Korean,null,"반가워요! 컴퓨터와 음악에 관심이 있습니다 :)"),r.createElement(s.English,null,"Welcome! I'm interested in computers and music :)")),r.createElement(d,null,r.createElement(s.Korean,null,"관심사 (컴퓨터)"),r.createElement(s.English,null,"Interests (Computer)")),r.createElement(h,null,r.createElement(p,null,r.createElement(s.Korean,null,"컴퓨터 그래픽스(CG), 특히 실시간 렌더링, 3D 모델링, 증강현실(AR), 가상현실(VR)에 관심이 있습니다."),r.createElement(s.English,null,"I'm interested in computer graphics, especially real-time rendering, 3D modeling, augmented reality(AR), and virtual reality(VR).")),r.createElement(p,null,r.createElement(s.Korean,null,"웹 개발에도 관심이 있습니다."),r.createElement(s.English,null,"I'm also interested in web development."))),r.createElement(b,{images:C}),r.createElement(d,null,r.createElement(s.Korean,null,"관심사 (음악)"),r.createElement(s.English,null,"Interests (Music)")),r.createElement(h,null,r.createElement(p,null,r.createElement(s.Korean,null,"취미로 피아노와 기타를 연주합니다. 가끔씩 작곡/편곡에도 도전합니다."),r.createElement(s.English,null,"I play piano and guitar as a hobby. Sometimes I also try to compose and arrange music.")),r.createElement(p,null,r.createElement(s.Korean,null,"헤비메탈, 재즈, 클래식 음악을 즐겨 듣습니다. 다른 장르의 음악들도 종종 들어요."),r.createElement(s.English,null,"I like hearing heavy metal, jazz, and classical music. I also listen to music from other genres."))),r.createElement(b,{images:I}),r.createElement(d,null,r.createElement(s.Korean,null,"연락처"),r.createElement(s.English,null,"Contacts")),r.createElement(h,null,r.createElement(p,null,r.createElement(s.Korean,null,"이메일 1"),r.createElement(s.English,null,"Email 1"),": ",r.createElement(v,{url:"mailto:95phm@kaist.ac.kr"},"95phm@kaist.ac.kr")),r.createElement(p,null,r.createElement(s.Korean,null,"이메일 2"),r.createElement(s.English,null,"Email 2"),": ",r.createElement(v,{url:"mailto:mathematicianscott@gmail.com"},"mathematicianscott@gmail.com"))))};t.AboutApp=function(){return r.createElement(m.App,{koreanTitle:"소개",englishTitle:"About",background:g},r.createElement(u.ThemeProvider,{lightColor:"#00e9f9",darkColor:"#0090ff"},r.createElement(E,null)))}},2429:function(e,t,n){"use strict";t.__esModule=!0,t.AlertApp=void 0;var r=n(5776),a=n(5712),o=n(6688),i=n(5196),l=n(4511),c=n(6646);t.AlertApp=function(e){var t=e.koreanMessage,n=void 0===t?"":t,s=e.englishMessage,m=void 0===s?"":s;return r.createElement(c.App,{koreanTitle:n,englishTitle:m},r.createElement("div",{className:a.css({display:"table",textAlign:"center",width:"100%",height:"100%",color:"#ffffff",backgroundColor:"#202020"})},r.createElement("span",{className:a.css({display:"table-cell",verticalAlign:"middle",fontSize:"1.5rem"})},r.createElement(l.Korean,null,n," ",r.createElement(i.Icon,{definition:o.faHome}),"을 눌러 돌아가세요."),r.createElement(l.English,null,m," Click ",r.createElement(i.Icon,{definition:o.faHome})," to return."))))}},6646:function(e,t,n){"use strict";t.__esModule=!0,t.App=void 0;var r=n(5776),a=n(5776),o=n(5712),i=n(1734),l=n(4511),c=o.keyframes({from:{opacity:.5},to:{opacity:1}});t.App=function(e){var t=e.koreanTitle,n=void 0===t?"":t,s=e.englishTitle,m=void 0===s?"":s,u=e.background,g=void 0===u?null:u,d=e.children,h=void 0===d?null:d,p=a.useContext(l.LanguageContext).currentLanguage;return a.useEffect((function(){var e="Korean"===p?n:m;e.length>0&&(document.title=e)})),r.createElement(i.Screen,{background:g},r.createElement("div",{className:o.css({width:"100%",height:"100%",animation:c+" 0.15s"})},h))}},3165:function(e,t,n){"use strict";t.__esModule=!0,t.CVApp=void 0;var r=n(5776),a=n(5712),o=n(6646);t.CVApp=function(){return r.createElement(o.App,{koreanTitle:"이력",englishTitle:"CV"},r.createElement("iframe",{className:a.css({border:"none",width:"100%",height:"100%",backgroundColor:"#d1d1d1"}),src:"https://drive.google.com/file/d/1_SuQg0TrQjYRTmmI-Jv9UsbO6slMCaSP/preview",width:"100%",height:"100%"}))}},6679:function(e,t,n){"use strict";t.__esModule=!0,t.MusicApp=void 0;var r=n(5776),a=n(5776),o=n(5712),i=n(4953),l=n(341),c=n(6646),s=n(5783),m=n(4511),u=n(5196),g=n(9446),d=n(7107),h=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,l=void 0===i?null:i,c=a.useContext(s.ThemeContext);return r.createElement("a",{className:o.css({wordBreak:"break-all",color:c.lightColor,"&:hover, &:active":{color:c.darkColor}}),target:"_blank",rel:"noopener noreferrer",href:n},l)},p=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:o.css({font:"1.5rem",fontWeight:"bold",marginBottom:"1rem"})},n)},v=function(e){var t=e.id,n=void 0===t?"":t,i=a.useContext(s.ThemeContext);return r.createElement("div",{className:o.css({position:"relative",height:0,paddingBottom:"56.25%"})},r.createElement("iframe",{className:o.css([i.boxStyle,i.highlightStyle,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}]),key:n,frameBorder:0,allowFullScreen:!0,src:"https://www.youtube.com/embed/"+n}))},f=function(e){var t=e.ids,n=void 0===t?[]:t,c=a.useContext(s.ThemeContext),m=a.useState(0),g=m[0],d=m[1],h=g<=0,p=g>=n.length-1;return r.createElement("div",{className:o.css({width:"100%",maxWidth:"640px"})},r.createElement(v,{id:n[g]}),r.createElement("div",{className:o.css({height:"3rem",marginTop:"1rem",marginBottom:"1rem"})},r.createElement("button",{className:o.css({float:"left",cursor:"pointer",fontSize:"2rem",border:"none",color:h?"#444444":c.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":h?{}:{color:c.lightColor}}),disabled:h,onClick:function(){h||d(g-1)}},r.createElement(u.Icon,{definition:i.faArrowAltCircleLeft})),r.createElement("button",{className:o.css({float:"right",cursor:"pointer",fontSize:"2rem",border:"none",color:p?"#444444":c.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":p?{}:{color:c.lightColor}}),disabled:p,onClick:function(){p||d(g+1)}},r.createElement(u.Icon,{definition:l.faArrowAltCircleRight}))))},b=function(){var e=a.useContext(s.ThemeContext);return r.createElement("div",{className:o.css([e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}])},r.createElement("div",{className:o.css({fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"})},r.createElement(m.Korean,null,"음악"),r.createElement(m.English,null,"Musics")),r.createElement("div",{className:o.css({marginBottom:"1.5rem"})},r.createElement(m.Korean,null,"영상들을 불러오는데에 시간이 걸리니 잠시 기다려주세요. 모든 영상들을 보려면 ",r.createElement(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"유튜브"),"를 방문해주세요."),r.createElement(m.English,null,"It takes some time to load the videos, so please wait a moment. To see the all videos, visit ",r.createElement(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"YouTube"),".")),r.createElement(p,null,r.createElement(m.Korean,null,"기타 연주들"),r.createElement(m.English,null,"My guitar playings")),r.createElement(f,{ids:d.myGuitarPlayings}),r.createElement(p,null,r.createElement(m.Korean,null,"피아노 연주들"),r.createElement(m.English,null,"My piano playings")),r.createElement(f,{ids:d.myPianoPlayings}),r.createElement(p,null,r.createElement(m.Korean,null,"작곡 / 편곡"),r.createElement(m.English,null,"Compositions / Arrangements")),r.createElement(f,{ids:d.myPieces}))};t.MusicApp=function(){return r.createElement(c.App,{koreanTitle:"음악",englishTitle:"Musics",background:g},r.createElement(s.ThemeProvider,{lightColor:"#77ff00",darkColor:"#21d948"},r.createElement(b,null)))}},1250:function(e,t,n){"use strict";t.__esModule=!0,t.ProjectApp=void 0;var r=n(5776),a=n(5776),o=n(5712),i=n(4511),l=n(6646),c=n(5783),s=n(6018),m=n(3619),u=n(3145),g=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,l=void 0===i?null:i,s=a.useContext(c.ThemeContext);return r.createElement("a",{className:o.css({wordBreak:"break-all",color:s.lightColor,"&:hover, &:active":{color:s.darkColor}}),target:"_blank",rel:"noopener noreferrer",href:n},l)},d=function(e){var t=e.url,n=void 0===t?"":t,a=e.children,i=void 0===a?null:a;return r.createElement("a",{className:o.css({display:"table",wordBreak:"break-all",marginBottom:"0.5rem",fontSize:"1.5rem",color:"#f9ab0d","&:hover, &:active":{color:"#d9890d"}}),target:"_blank",rel:"noopener noreferrer",href:n},i)},h=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:o.css({width:"100%"})},n)},p=function(e){var t,n,i,l,m=e.projects,u=void 0===m?[]:m,g=a.useContext(c.ThemeContext),p=a.useContext(s.MediaContext).wideScreenQuery,v=a.useState(0),f=v[0],b=v[1],C=u[f],I=o.css([g.boxStyle,g.highlightStyle,(t={display:"inline-block",cursor:"pointer",textAlign:"center",width:"16rem",height:"12rem",marginRight:"1rem",marginBottom:0,fontSize:"2rem",color:"rgba(0, 0, 0, 0)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:hover, &:active, &:focus":g.textStyle},t[p]={display:"block",marginRight:0,marginBottom:"1rem"},t)]);return r.createElement(a.Fragment,null,r.createElement("div",{className:o.css((n={display:"inline-block",position:"relative",width:"100%",height:"14rem",minHeight:"14rem",marginRight:0},n[p]={float:"left",width:"18rem",height:"100%",marginRight:"1rem"},n))},r.createElement("div",{className:o.css((i={position:"absolute",overflow:"auto",whiteSpace:"nowrap",top:0,right:0,bottom:0,left:0},i[p]={whiteSpace:"normal"},i))},u.map((function(e,t){var n=e.imageURL,a=e.name;return r.createElement("button",{className:o.css([I,{title:a,backgroundImage:"url("+n+")"}]),onClick:function(){b(t)}},a)})))),r.createElement("div",{className:o.css((l={display:"inline-block",position:"relative",width:"100%",height:"calc(100% - 15rem)",minHeight:"7rem",marginBottom:"1rem"},l[p]={float:"right",width:"calc(100% - 19rem)",height:"100%"},l))},r.createElement("div",{className:o.css({position:"absolute",overflow:"auto",top:0,right:0,bottom:0,left:0})},r.createElement(d,{url:C.repositoryURL},C.name),r.createElement(h,null,C.description))))},v=function(){var e=a.useContext(c.ThemeContext);return r.createElement("div",{className:o.css([e.textStyle,{display:"table",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem"}])},r.createElement("div",{className:o.css({display:"table-row",height:0})},r.createElement("div",{className:o.css({fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"})},r.createElement(i.Korean,null,"프로젝트"),r.createElement(i.English,null,"Projects")),r.createElement("div",{className:o.css({marginBottom:"1.5rem"})},r.createElement(i.Korean,null,"모든 프로젝트들을 보려면 ",r.createElement(g,{url:"https://github.com/Avantgarde95"},"깃허브"),"를 방문해주세요."),r.createElement(i.English,null,"To see the all projects, visit ",r.createElement(g,{url:"https://github.com/Avantgarde95"},"GitHub"),"."))),r.createElement("div",{className:o.css({display:"table-row",height:"100%"})},r.createElement(p,{projects:u})))};t.ProjectApp=function(){return r.createElement(l.App,{koreanTitle:"프로젝트",englishTitle:"Projects",background:m},r.createElement(c.ThemeProvider,{lightColor:"#f9ab0d",darkColor:"#d9890d"},r.createElement(v,null)))}},5783:function(e,t,n){"use strict";t.__esModule=!0,t.ThemeProvider=t.ThemeContext=void 0;var r=n(5776),a=n(5776),o=n(5712);t.ThemeContext=a.createContext({}),t.ThemeProvider=function(e){var n=e.defaultColor,a=void 0===n?"#ffffff":n,i=e.lightColor,l=void 0===i?"#ffffff":i,c=e.darkColor,s=void 0===c?"#ffffff":c,m=e.children,u=void 0===m?null:m,g="0 0 2px "+s+", 0 0 4px "+l;return r.createElement(t.ThemeContext.Provider,{value:{defaultColor:a,lightColor:l,darkColor:s,textStyle:o.css({color:a,textShadow:g}),boxStyle:o.css({boxShadow:g,backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+a,borderRadius:0}),highlightStyle:o.css({"&:hover, &:active, &:focus":{color:l,border:"solid 1px "+l}})}},u)}},5196:function(e,t,n){"use strict";t.__esModule=!0,t.Icon=void 0;var r=n(5776);n(2258),t.Icon=function(e){var t=e.definition,n=void 0===t?{}:t,a=e.className,o=void 0===a?"":a;return r.createElement("svg",{"aria-hidden":!0,focusable:!1,className:o+" svg-inline--fa fa-"+n.iconName,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+n.icon[0]+" "+n.icon[1]},r.createElement("path",{fill:"currentColor",d:n.icon[4]}))}},4511:function(e,t,n){"use strict";t.__esModule=!0,t.English=t.Korean=t.LanguageProvider=t.LanguageContext=void 0;var r=n(5776),a=n(5776);t.LanguageContext=a.createContext({}),t.LanguageProvider=function(e){var n=e.children,o=void 0===n?null:n,i=a.useState("English"),l=i[0],c=i[1];return r.createElement(t.LanguageContext.Provider,{value:{currentLanguage:l,changeLanguage:function(e){c(e)}}},o)},t.Korean=function(e){var n=e.children,o=void 0===n?null:n;return r.createElement(r.Fragment,null,"Korean"===a.useContext(t.LanguageContext).currentLanguage&&o)},t.English=function(e){var n=e.children,o=void 0===n?null:n;return r.createElement(r.Fragment,null,"English"===a.useContext(t.LanguageContext).currentLanguage&&o)}},6018:function(e,t,n){"use strict";t.__esModule=!0,t.MediaProvider=t.MediaContext=void 0;var r=n(5776),a=n(5776);t.MediaContext=a.createContext({}),t.MediaProvider=function(e){var n=e.wideScreenMinWidth,a=void 0===n?769:n,o=e.children,i=void 0===o?null:o;return r.createElement(t.MediaContext.Provider,{value:{wideScreenMinWidth:a,wideScreenQuery:"@media (min-width: "+a+"px)",narrowScreenQuery:"@media (max-width: "+(a-1)+"px)"}},i)}},2650:function(e,t,n){"use strict";t.__esModule=!0,t.HomeScreen=void 0;var r=n(5776),a=n(5776),o=n(3936),i=n(5712),l=n(6375),c=n(7452),s=n(6766),m=n(491),u=n(8138),g=n(8279),d=n(9853),h=n(8190),p=n(8658),v=n(5213),f=n(1734),b=n(5196),C=n(4511),I=function(e){var t=e.title,n=void 0===t?"":t,a=e.path,l=void 0===a?"":a,c=e.color,s=void 0===c?"#ffffff":c,m=e.children,u=void 0===m?null:m,g=o.useNavigate(),d=i.css({display:"inline-block",cursor:"pointer",textAlign:"center",verticalAlign:"middle",width:"4rem",height:"4rem",margin:"auto",border:"none",borderRadius:"1rem",lineHeight:"4rem",fontSize:"2.5rem",backgroundColor:"#ffffff",transition:"all 0.1s","&:hover, &:active, &:focus":{transform:"scale(0.85)"}});return l.startsWith("http")?r.createElement("a",{className:i.css([d,{color:s}]),title:n,tabIndex:0,target:"_blank",rel:"noopener noreferrer",href:l},u):r.createElement("button",{className:i.css([d,{color:s}]),title:n,onClick:function(){g(l)}},u)},E=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:i.css({textAlign:"center",margin:"1rem auto auto auto",color:"#ffffff"})},n)},A=function(e){var t=e.width,n=void 0===t?0:t,a=e.height,o=void 0===a?0:a,l=e.children,c=void 0===l?null:l;return r.createElement("div",{className:i.css({display:"inline-block",boxSizing:"border-box",width:n+"rem",height:o+"rem",paddingTop:"1rem",webkitTapHighlightColor:"rgba(255, 255, 255, 0)"})},c)},y=function(e){var t=e.width,n=void 0===t?0:t,a=e.height,o=void 0===a?0:a,l=e.children,c=void 0===l?null:l;return r.createElement("div",{className:i.css({display:"inline-block",width:n+"rem",height:o+"rem"})},c)},w=[{koreanName:"소개",englishName:"About",path:"about",icon:l.faIdCard,color:"#007aeb"},{koreanName:"이력",englishName:"CV",path:"cv",icon:c.faFileAlt,color:"#aaaaaa"},{koreanName:"프로젝트",englishName:"Projects",path:"project",icon:m.faLaptopCode,color:"#876766"},{koreanName:"음악",englishName:"Musics",path:"music",icon:h.faMusic,color:"#1cb81d"},{koreanName:"블로그",englishName:"Blog",path:"https://Avantgarde95.github.io/blog",icon:s.faNewspaper,color:"#677963"},{koreanName:"코드",englishName:"Code",path:"https://github.com/Avantgarde95/Avantgarde95.github.io",icon:v.faCode,color:"#a4b353"},{koreanName:"깃허브",englishName:"GitHub",path:"https://github.com/Avantgarde95",icon:p.faGithub,color:"#211f1f"},{koreanName:"유튜브",englishName:"YouTube",path:"https://www.youtube.com/user/Scottparkmusic",icon:u.faYoutube,color:"#ff0000"},{koreanName:"페이스북",englishName:"Facebook",path:"https://www.facebook.com/s.ramanujan",icon:d.faFacebookSquare,color:"#3b5998"},{koreanName:"인스타그램",englishName:"Instagram",path:"https://www.instagram.com/hunminpark95",icon:g.faInstagram,color:"#c13584"}];t.HomeScreen=function(e){var t=e.appWidth,n=void 0===t?8:t,o=e.appHeight,l=void 0===o?8:o,c=e.maxAppsPerLine,s=void 0===c?5:c,m=a.useContext(C.LanguageContext).currentLanguage;return a.useEffect((function(){document.title="Korean"===m?"홈":"Home"})),r.createElement(f.Screen,null,r.createElement("div",{className:i.css({textAlign:"center",width:"100%",height:"100%"})},r.createElement("div",{className:i.css({display:"inline-block",maxWidth:n*s+"rem"})},w.map((function(e){return r.createElement(A,{width:n,height:l},r.createElement(I,{title:e.englishName,path:e.path,color:e.color},r.createElement(b.Icon,{definition:e.icon})),r.createElement(E,null,r.createElement(C.Korean,null,e.koreanName),r.createElement(C.English,null,e.englishName)))})),Array.apply(null,Array(s)).map((function(){return r.createElement(y,{width:n,height:l})})))))}},4544:function(e,t,n){"use strict";t.__esModule=!0,t.NavigationBar=void 0;var r=n(5776),a=n(5776),o=n(3936),i=n(5712),l=n(5346),c=n(6688),s=n(5196),m=n(4511),u=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("span",{className:i.css({display:"table-cell",textAlign:"center",width:"4rem"})},n)},g=n(7302),d=n(3770);t.NavigationBar=function(e){var t=e.showNavigators,n=void 0===t||t,h=o.useNavigate(),p=a.useContext(m.LanguageContext).changeLanguage,v=i.css({cursor:"pointer",display:"inline-block",verticalAlign:"middle",transition:"all 0.1s",width:"3rem",height:"2.5rem",border:"none",lineHeight:"2.5rem",fontSize:"2rem",color:"#ffffff",backgroundColor:"transparent","&:hover, &:active, &:focus":{transform:"scale(0.9)"}}),f=i.css([v,{backgroundSize:"auto 2rem",backgroundRepeat:"no-repeat",backgroundPosition:"center"}]);return r.createElement("div",{className:i.css({display:"table",width:"100%"})},r.createElement(u,null,n&&r.createElement("button",{className:v,title:"Back",onClick:function(){h(-1)}},r.createElement(s.Icon,{definition:l.faArrowLeft}))),r.createElement(u,null,r.createElement(m.English,null,r.createElement("button",{className:i.css([f,{backgroundImage:"url("+d+")"}]),title:"To Korean",onClick:function(){p("Korean")}})),r.createElement(m.Korean,null,r.createElement("button",{className:i.css([f,{backgroundImage:"url("+g+")"}]),title:"To English",onClick:function(){p("English")}}))),r.createElement(u,null,n&&r.createElement("button",{className:v,title:"Home",onClick:function(){h("/")}},r.createElement(s.Icon,{definition:c.faHome}))))}},1734:function(e,t,n){"use strict";t.__esModule=!0,t.Screen=void 0;var r=n(5776),a=n(5712),o=n(408),i=a.keyframes({"0%":{opacity:1},"50%":{opacity:.2},"100%":{opacity:1}});t.Screen=function(e){var t=e.background,n=void 0===t?null:t,l=e.children,c=void 0===l?null:l;return r.createElement("div",{className:a.css({position:"relative",zIndex:0,overflowY:"auto",width:"100%",height:"calc(100% - 4.5rem)","&:after":{content:'""',zIndex:-1,backgroundImage:"url("+(null===n?o:n)+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",top:0,left:0,position:"absolute",width:"100%",height:"100%",animation:i+" 5s infinite"}})},c)}},9040:function(e,t,n){"use strict";t.__esModule=!0,t.StatusBar=void 0;var r=n(5776),a=n(5712),o=n(1871),i=n(8307),l=n(8017),c=n(5196),s=n(1246),m=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:a.css({float:"left",height:"100%"})},n)},u=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("div",{className:a.css({float:"right",height:"100%"})},n)},g=function(e){var t=e.children,n=void 0===t?null:t;return r.createElement("span",{className:a.css({marginLeft:"0.2rem",marginRight:"0.2rem"})},n)};t.StatusBar=function(e){var t=e.showTime,n=void 0===t||t;return r.createElement("div",{className:a.css({boxSizing:"border-box",width:"100%",height:"2rem",paddingLeft:"0.3rem",paddingRight:"0.3rem",lineHeight:"2rem",color:"#ffffff"})},r.createElement(m,null,r.createElement(g,null,"Hunmin Park")),r.createElement(u,null,r.createElement(g,null,r.createElement(c.Icon,{definition:o.faWifi})),r.createElement(g,null,r.createElement(c.Icon,{definition:i.faSignal})),r.createElement(g,null,r.createElement(c.Icon,{definition:l.faBatteryFull})),n&&r.createElement(g,null,r.createElement(s.TimeProvider,null,r.createElement(s.Hour,null),":",r.createElement(s.Minute,null)," ",r.createElement(s.AMPM,null)))))}},1246:function(e,t,n){"use strict";t.__esModule=!0,t.AMPM=t.WeekDay=t.MonthDay=t.Month=t.Minute=t.Hour=t.TimeProvider=void 0;var r=n(5776),a=n(5776),o=["January","February","March","April","May","June","July","August","September","November","December"],i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function l(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),monthDay:e.getDate()-1,weekDay:e.getDay(),hour:e.getHours(),minute:e.getMinutes()}}var c=a.createContext({year:0,month:0,monthDay:0,weekDay:0,hour:0,minute:0});t.TimeProvider=function(e){var t=e.children,n=void 0===t?null:t,o=a.useState(l()),i=o[0],s=o[1];return a.useEffect((function(){var e=setInterval((function(){s(l)}),1e4);return function(){clearInterval(e)}})),r.createElement(c.Provider,{value:i},n)},t.Hour=function(){var e=a.useContext(c).hour%12;return r.createElement(r.Fragment,null,""+(0===e?12:e))},t.Minute=function(){var e,t=a.useContext(c).minute;return r.createElement(r.Fragment,null,""+(e=t,2,(""+(Math.pow(10,2)+e)).slice(1)))},t.Month=function(){var e=a.useContext(c).month;return r.createElement(r.Fragment,null,o[e])},t.MonthDay=function(){var e=a.useContext(c).monthDay;return r.createElement(r.Fragment,null,""+(e+1))},t.WeekDay=function(){var e=a.useContext(c).weekDay;return r.createElement(r.Fragment,null,i[e])},t.AMPM=function(){var e=a.useContext(c).hour;return r.createElement(r.Fragment,null,e>=12?"PM":"AM")}},3619:function(e,t,n){e.exports=n.p+"bbd63ba6af2ad8f70d80864ea349fbb6.png"},8316:function(e,t,n){e.exports=n.p+"56108b22ef76da426d37c6c2f8a6e7fd.jpg"},9446:function(e,t,n){e.exports=n.p+"2ea394845f911efacb3af63bc0c07f97.png"},4802:function(e,t,n){e.exports=n.p+"cc9fa57f7ec5aa558bb85222ae6b9265.png"},4048:function(e,t,n){e.exports=n.p+"c0768d472d083b829dcd7f75092306fd.png"},6670:function(e,t,n){e.exports=n.p+"0417a6471b2d68b6cbae0cbe3f9ddb4f.png"},7478:function(e,t,n){e.exports=n.p+"ce28326cc94feeee6329485943fcef2c.png"},316:function(e,t,n){e.exports=n.p+"8649a0d0d89dcf0d9c6bda1d61ab5cce.png"},1351:function(e,t,n){e.exports=n.p+"27f53db573c65c9a3ea484ad72a8f5c8.jpg"},408:function(e,t,n){e.exports=n.p+"8feb58426fb1684be9d9ad6f569bed02.png"},3770:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iIzY2NjY2NiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmZmZmYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},7302:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iI2ZmZmZmZiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiM2NjY2NjYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},9204:function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){var n=t>0?0|t:0;return this.substring(n,n+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},7107:function(e){"use strict";e.exports=JSON.parse('{"myGuitarPlayings":["K2Sgds1zqyU","sZyXjyn2FzE","yO065TpzO7o","-PzDmPmA0MQ","P_FYhu2O4hc","JY65VlkXE34","VZbgQIrHSH0","593vOChs26I","5zPrh_S7fk4","d6OPH32Zsa0","jgkiT8_qRNw","-_5xyia2_6g","FL48Sqx-bpo","xpt_CteDTn8","gOeEcsSS6uU","kg8j4JQVabQ","t-6dHdCf-gA","-d3pdcPdZcE","HYo3vOGLTCc","p76UpqEdStM","Un_jqD9IC_I","sO-XDFd8kp0","lj3iI1IOGL4","HjcfYic1Z28","z6-lU-tbljI","U9Wt25Wlebw","1xGFKMZt1zg","chIYkquEq6k","VE3p1sU1Gd0","Nn8VCR0rBns","tw5wt4YQEbQ","_FeSem_EdDA","RPXpCsO5IYY","ZrFngKzw-WU","Tubvf1cQ8s8","fyrC5TPjBf0","yipCvvK2ncU","zZhOjvNWOjM","EgTafIgIRB4","1-RtoLTBUWo","zpqVWio9VhY","DblrAysTKm8","LxOkMrh-zAI","NGI70D0Xjus"],"myPianoPlayings":["UkFKk86VyOU","pX1-GgGFRW4"],"myPieces":["dLUGYHSSOGQ","7rCuy-mkL0E","IVN5QXtj-pw","nmKKVU8Lhwk","CorXqWnVrn8","TArbml7moSQ","WQtNMF0EfdQ","BU-U7i0CqOI","X8vwCzxVMcE","cASndgM7XwU","yipCvvK2ncU","b5ZXCtTiBVs","5UW6jQs_bEo","tw5wt4YQEbQ","1NdFoolaPlY","l4FG-oSiLf4","6a9X0VWm2bQ","WwgJSilQcYU","zZhOjvNWOjM","SlIfJKGK0bc"]}')},3145:function(e){"use strict";e.exports=JSON.parse('[{"name":"ArchiPi","description":"Simulation of Archimedes\' polygonal algorithm","repositoryURL":"https://github.com/Avantgarde95/ArchiPi","imageURL":"https://raw.githubusercontent.com/Avantgarde95/ArchiPi/master/Screenshot7.png"},{"name":"archipi-web","description":"Archimedes\' method for approximating π. Created for celebrating π day! (2019.03.14)","repositoryURL":"https://github.com/Avantgarde95/archipi-web","imageURL":"https://raw.githubusercontent.com/Avantgarde95/archipi-web/master/Screenshot.png"},{"name":"asciirain","description":"Rain of the characters","repositoryURL":"https://github.com/Avantgarde95/asciirain","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciirain/master/image/Screenshot.png"},{"name":"asciisnow","description":"Snow of the characters","repositoryURL":"https://github.com/Avantgarde95/asciisnow","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciisnow/master/image/Screenshot.png"},{"name":"MyPage","description":"My website!","repositoryURL":"https://github.com/Avantgarde95/Avantgarde95.github.io","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Avantgarde95.github.io/master/image/AboutApp.png"},{"name":"blog","description":"My blog!","repositoryURL":"https://github.com/Avantgarde95/blog","imageURL":"https://raw.githubusercontent.com/Avantgarde95/blog/master/Screenshot.png"},{"name":"C3DMB","description":"Code for \'Collaborative 3D modeling system based on blockchain\'","repositoryURL":"https://github.com/Avantgarde95/C3DMB","imageURL":"https://raw.githubusercontent.com/Avantgarde95/C3DMB/master/Screenshot.png"},{"name":"CGLab","description":"KAIST CS580 Computer graphics projects","repositoryURL":"https://github.com/Avantgarde95/CGLab","imageURL":"https://raw.githubusercontent.com/Avantgarde95/CGLab/master/Screenshot.png"},{"name":"DailyBread-old","description":"DailyBread viewer in python","repositoryURL":"https://github.com/Avantgarde95/DailyBread-old","imageURL":"https://raw.githubusercontent.com/Avantgarde95/DailyBread-old/master/Screenshot.png"},{"name":"Gauss","description":"Implementation of Gaussian elimination in Pthread / OpenMP","repositoryURL":"https://github.com/Avantgarde95/Gauss","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Gauss/master/Screenshot.png"},{"name":"guitarsayo","description":"악기 구매 도우미","repositoryURL":"https://github.com/Avantgarde95/guitarsayo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/guitarsayo/master/Screenshot.jpg"},{"name":"HandyClock","description":"Simple clock written in python","repositoryURL":"https://github.com/Avantgarde95/HandyClock","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HandyClock/master/Screenshot.png"},{"name":"HoloLight","description":null,"repositoryURL":"https://github.com/Avantgarde95/HoloLight","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HoloLight/master/Screenshot.png"},{"name":"HQ9","description":"Simple implementation of HQ9+ in python","repositoryURL":"https://github.com/Avantgarde95/HQ9","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HQ9/master/Screenshot.png"},{"name":"Image2Term","description":"Draw an image on the terminal.","repositoryURL":"https://github.com/Avantgarde95/Image2Term","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Image2Term/master/Screenshot.png"},{"name":"Blowing Bubble","description":"KAIST-CS482 (2016), Interactive Computer Graphics, Team 4","repositoryURL":"https://github.com/Avantgarde95/kaist_cs482_2016_team4","imageURL":"https://raw.githubusercontent.com/Avantgarde95/kaist_cs482_2016_team4/master/Screenshot.png"},{"name":"LangtonAnt","description":"Simple simulation of (multi-color) Langton\'s ant (in python)","repositoryURL":"https://github.com/Avantgarde95/LangtonAnt","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LangtonAnt/master/ScreenshotSimple.png"},{"name":"LiKo","description":"KAIST CS374 Team Project","repositoryURL":"https://github.com/Avantgarde95/LiKo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LiKo/master/TestExample.png"},{"name":"Lucky","description":null,"repositoryURL":"https://github.com/Avantgarde95/Lucky","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Lucky/master/Screenshot.png"},{"name":"LucyViewer","description":"Simple Embree ray tracing demo","repositoryURL":"https://github.com/Avantgarde95/LucyViewer","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LucyViewer/master/Screenshot.png"},{"name":"Mandelbrot","description":"Mandelbrot generator, made for fun","repositoryURL":"https://github.com/Avantgarde95/Mandelbrot","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Mandelbrot/master/Screenshot.png"},{"name":"MorseSimulator","description":"Simple Morse code simulator in python","repositoryURL":"https://github.com/Avantgarde95/MorseSimulator","imageURL":"https://raw.githubusercontent.com/Avantgarde95/MorseSimulator/master/Screenshot.png"},{"name":"PaintTalk","description":"Draw a picture by using natural language","repositoryURL":"https://github.com/Avantgarde95/PaintTalk","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PaintTalk/master/extra/TreeDemo.png"},{"name":"PathFinder","description":"Simple implementation of path-finder which uses genetic algorithm.","repositoryURL":"https://github.com/Avantgarde95/PathFinder","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PathFinder/master/Screenshot.png"},{"name":"pyMalbolge","description":"Malbolge interpreter in python","repositoryURL":"https://github.com/Avantgarde95/pyMalbolge","imageURL":"https://raw.githubusercontent.com/Avantgarde95/pyMalbolge/master/Screenshot.png"},{"name":"PySIC","description":"A simple programming language I made for studying PL.","repositoryURL":"https://github.com/Avantgarde95/PySIC","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PySIC/master/Screenshot.png"},{"name":"SimpleLang","description":"a SIMPLE LANGuage - Simple toy language I made for studying","repositoryURL":"https://github.com/Avantgarde95/SimpleLang","imageURL":"https://raw.githubusercontent.com/Avantgarde95/SimpleLang/master/Screenshot.png"},{"name":"TeX2Hwp","description":"TeX-to-Hwp converter written in Java (Proof-of-concept GUI app)","repositoryURL":"https://github.com/Avantgarde95/TeX2Hwp","imageURL":"https://raw.githubusercontent.com/Avantgarde95/TeX2Hwp/master/Screenshot.png"},{"name":"WhereToGoNow","description":"KAIST CS408 Computer science project","repositoryURL":"https://github.com/Avantgarde95/WhereToGoNow","imageURL":"https://raw.githubusercontent.com/Avantgarde95/WhereToGoNow/master/Screenshot.png"},{"name":"Whitespace","description":"Write Whitespace code by using human-readable code.","repositoryURL":"https://github.com/Avantgarde95/Whitespace","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Whitespace/master/Screenshot.png"}]')}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.x=function(){},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="dist/",function(){var e={179:0},t=[[5973,983]],r=function(){},a=function(a,o){for(var i,l,c=o[0],s=o[1],m=o[2],u=o[3],g=0,d=[];g<c.length;g++)l=c[g],n.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(i in s)n.o(s,i)&&(n.m[i]=s[i]);for(m&&m(n),a&&a(o);d.length;)d.shift()();return u&&t.push.apply(t,u),r()},o=self.webpackChunk=self.webpackChunk||[];function i(){for(var r,a=0;a<t.length;a++){for(var o=t[a],i=!0,l=1;l<o.length;l++){var c=o[l];0!==e[c]&&(i=!1)}i&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var l=n.x;n.x=function(){return n.x=l||function(){},(r=i)()}}(),n.x()}();