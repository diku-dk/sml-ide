if ((typeof(oauth$0oauth$1)) == "undefined") {oauth$0oauth$1 = {};
};
(function(){var getCookie$121 = function(k$124){var cookies$125 = basis$0String$1.tokens$224(function(c$128){return c$128 == 59;
},(function(document){return document.cookie;})(js$0Js$1.document$88));
var pairs$129 = basis$0List$1.map$697(function(s$334){var v$335 = basis$0String$1.tokens$224(function(c$336){return c$336 == 61;
},s$334);
if (v$335 == null) {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$334];
} else {var v$337 = v$335;
var v$338 = v$337[1];
if (v$338 == null) {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$334];
} else {var v$339 = v$338;
if (v$339[1] == null) {return [v$337[0],v$339[0]];
} else {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$334];
};
};
};
},cookies$125);
var fix$658 = {};
fix$658.$look = function(v$602){lab$look: while (true) {if (v$602 == null) {return [1];
} else {var v$603 = v$602;
var v$604 = v$603[0];
var v$605 = v$604[0];
var v$606 = v$604[1];
var v$607 = v$603[1];
if (k$124 == v$605) {return [0,v$606];
} else {var t$659 = v$607;
var v$602 = t$659;
continue lab$look;
};
};
};
};
var look$601 = fix$658.$look;
return look$601(pairs$129);
};
oauth$0oauth$1.getLocation$158 = function(v$160){return (function(){return window.location.href;})();
};
oauth$0oauth$1.client$163 = function(x$166){return x$166;
};
oauth$0oauth$1.token$167 = function(v$652,v$653,v$654){var v$175 = getCookie$121("oauth_access_token");
switch (v$175[0]) { case 0: {var v$177 = v$175[1];
return [0,v$177];
 break; }default: {try {var v$184 = basis$0String$1.tokens$224(function(c$241){return c$241 == 35;
},(function(){return window.location.href;})());
if (v$184 == null) {return [1];
} else {var v$186 = v$184;
var v$187 = v$186[1];
if (v$187 == null) {return [1];
} else {var v$189 = v$187;
if (v$189[1] == null) {var v$237 = v$189[0];
var args$191 = basis$0String$1.tokens$224(function(c$194){return c$194 == 38;
},v$237);
var arg_pairs$195 = basis$0List$1.map$697(function(s$383){var v$384 = basis$0String$1.tokens$224(function(c$385){return c$385 == 61;
},s$383);
if (v$384 == null) {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$383];
} else {var v$386 = v$384;
var v$387 = v$386[1];
if (v$387 == null) {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$383];
} else {var v$388 = v$387;
if (v$388[1] == null) {return [v$386[0],v$388[0]];
} else {throw [basis$0Initial$1.en$Fail$54,"OAuth.keyvalues: " + s$383];
};
};
};
},args$191);
var v$234 = getCookie$121("oauth_state");
switch (v$234[0]) { case 0: {var v$236 = v$234[1];
var v$622;
var fix$661 = {};
fix$661.$look = function(v$624){lab$look: while (true) {if (v$624 == null) {return [1];
} else {var v$625 = v$624;
var v$626 = v$625[0];
var v$627 = v$626[0];
var v$628 = v$626[1];
var v$629 = v$625[1];
if ("state" == v$627) {return [0,v$628];
} else {var t$662 = v$629;
var v$624 = t$662;
continue lab$look;
};
};
};
};
var look$623 = fix$661.$look;
v$622 = (look$623(arg_pairs$195));
switch (v$622[0]) { case 0: {var v$630 = v$622[1];
if (v$630 == v$236) {0;
} else {throw [basis$0Initial$1.en$Fail$54,(("OAuth.token: Expecting state arg " + v$236) + " - got ") + v$630];
};
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"OAuth.token: Expecting a state parameter"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"OAuth.token: Expecting state cookie"];
} };
var v$633;
var fix$663 = {};
fix$663.$look = function(v$635){lab$look: while (true) {if (v$635 == null) {return [1];
} else {var v$636 = v$635;
var v$637 = v$636[0];
var v$638 = v$637[0];
var v$639 = v$637[1];
var v$640 = v$636[1];
if ("token_type" == v$638) {return [0,v$639];
} else {var t$664 = v$640;
var v$635 = t$664;
continue lab$look;
};
};
};
};
var look$634 = fix$663.$look;
v$633 = (look$634(arg_pairs$195));
switch (v$633[0]) { case 0: {var v$641 = v$633[1];
if (v$641 == "bearer") {0;
} else {throw [basis$0Initial$1.en$Fail$54,"OAuth.token: Expecting token_type arg bearer - got " + v$641];
};
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"OAuth.token: Expecting a token_type parameter"];
} };
var t$216;
var v$221;
var fix$665 = {};
fix$665.$look = function(v$644){lab$look: while (true) {if (v$644 == null) {return [1];
} else {var v$645 = v$644;
var v$646 = v$645[0];
var v$647 = v$646[0];
var v$648 = v$646[1];
var v$649 = v$645[1];
if ("access_token" == v$647) {return [0,v$648];
} else {var t$666 = v$649;
var v$644 = t$666;
continue lab$look;
};
};
};
};
var look$643 = fix$665.$look;
v$221 = (look$643(arg_pairs$195));
switch (v$221[0]) { case 0: {t$216 = v$221[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"OAuth.token: Expecting access_token"];
} };
(function(document,value){document.cookie=value;})(js$0Js$1.document$88,"oauth_access_token=" + t$216);
(function(document,value){document.cookie=value;})(js$0Js$1.document$88,"oauth_state= ; expires = Thu, 01 Jan 1970 00:00:00 GMT");
return [0,t$216];
} else {return [1];
};
};
};
} catch(v$660) {return (function(v$245){var t$667 = v$245;
if (t$667[0] == basis$0Initial$1.en$Fail$54) {return [1];
} else {throw v$245;
};
})(v$660);
};
} };
};
oauth$0oauth$1.authorize$246 = function(v$271,v$272,v$273){var state$266;
var v$655 = SmlPrims.getrealtime();
state$266 = (basis$0Time$1.toString$150(v$655[0],v$655[1]));
var args$267 = [["client_id",v$272],[["state",state$266],[["redirect_uri",v$273],[["response_type","token"],null]]]];
var newloc$268 = (v$271 + "?") + (basis$0String$1.concatWith$182("&",basis$0List$1.map$697(function(v$479){return (v$479[0] + "=") + v$479[1];
},args$267)));
(function(document,value){document.cookie=value;})(js$0Js$1.document$88,"oauth_state=" + state$266);
return (function(url){return (window.location = url);})(newloc$268);
};
oauth$0oauth$1.logout$274 = function(v$656,v$657,v$282){(function(document,value){document.cookie=value;})(js$0Js$1.document$88,"oauth_access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT");
(function(document,value){document.cookie=value;})(js$0Js$1.document$88,"oauth_state= ; expires = Thu, 01 Jan 1970 00:00:00 GMT");
return (function(url){return (window.location = url);})(v$282);
};
return 0;
})();