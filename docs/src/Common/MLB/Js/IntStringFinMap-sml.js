if ((typeof(tools$0IntStringFinMap$1)) == "undefined") {tools$0IntStringFinMap$1 = {};
};
(function(){tools$0IntStringFinMap$1.fold$62 = function(f$65,a$68,im$71){return tools$0IntFinMapPT$1.fold$407(function(v$75){var v$76 = v$75[0];
var v$77 = v$75[1];
return tools$0StringFinMap$1$2.fold$870(f$65,v$77,v$76);
},a$68,im$71);
};
tools$0IntStringFinMap$1.Fold$78 = function(f$81,a$84,im$87){return tools$0IntFinMapPT$1.Fold$447(function(v$92){var v$102 = v$92[0];
var v$103 = v$102[0];
var v$104 = v$102[1];
var v$105 = v$92[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$97){var v$98 = v$97[0];
var v$99 = v$98[0];
var v$100 = v$98[1];
var v$101 = v$97[1];
return f$81([[[v$103,v$99],v$100],v$101]);
},v$105,v$104);
},a$84,im$87);
};
tools$0IntStringFinMap$1.dom$106 = function(m$109){var a$523 = null;
return tools$0IntFinMapPT$1.Fold$447(function(v$525){var v$526 = v$525[0];
var v$527 = v$526[0];
var v$528 = v$526[1];
var v$529 = v$525[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$530){return [[v$527,v$530[0][0]],v$530[1]];
},v$529,v$528);
},a$523,m$109);
};
tools$0IntStringFinMap$1.empty$117 = function(v$842){return tools$0IntFinMapPT$1.empty$136(0);
};
tools$0IntStringFinMap$1.singleton$118 = function(v$124,v$833){var v$125 = v$124[0];
var v$126 = v$124[1];
return tools$0IntFinMapPT$1.singleton$148(v$125,tools$0StringFinMap$1$2.singleton$126(v$126,v$833));
};
tools$0IntStringFinMap$1.isEmpty$128 = function(v$843){return function(v$844){return tools$0IntFinMapPT$1.isEmpty$155(v$844);
};
};
tools$0IntStringFinMap$1.lookup$129 = function(m$132,v$136){var v$143 = v$136[0];
var v$144 = v$136[1];
var v$141 = tools$0IntFinMapPT$1.lookup$203(m$132,v$143);
switch (v$141[0]) { case 1: {return [1];
 break; }default: {var v$142 = v$141[1];
return tools$0StringFinMap$1$2.lookup$141(v$142,v$144);
} };
};
tools$0IntStringFinMap$1.add$237 = function(v$250,v$834,v$835){var v$251 = v$250[0];
var v$252 = v$250[1];
var v$248 = tools$0IntFinMapPT$1.lookup$203(v$835,v$251);
switch (v$248[0]) { case 1: {return tools$0IntFinMapPT$1.add$279(v$251,tools$0StringFinMap$1$2.singleton$126(v$252,v$834),v$835);
 break; }default: {var v$249 = v$248[1];
return tools$0IntFinMapPT$1.add$279(v$251,tools$0StringFinMap$1$2.add$401(v$252,v$834,v$249),v$835);
} };
};
tools$0IntStringFinMap$1.plus$255 = function(v$260,v$261){return tools$0IntFinMapPT$1.mergeMap$397(function(v$836){return tools$0StringFinMap$1$2.plus$413(v$836[0],v$836[1]);
},v$260,v$261);
};
tools$0IntStringFinMap$1.remove$262 = function(v$280,v$837){var v$281 = v$280[0];
var v$282 = v$280[1];
var v$272 = tools$0IntFinMapPT$1.lookup$203(v$837,v$281);
switch (v$272[0]) { case 1: {return [1];
 break; }default: {var v$279 = v$272[1];
var v$277 = tools$0StringFinMap$1$2.remove$721(v$282,v$279);
switch (v$277[0]) { case 1: {return [1];
 break; }default: {var v$278 = v$277[1];
return [0,tools$0IntFinMapPT$1.add$279(v$281,v$278,v$837)];
} };
} };
};
tools$0IntStringFinMap$1.range$284 = function(m$287){var a$593 = null;
return tools$0IntFinMapPT$1.Fold$447(function(v$595){var v$596 = v$595[0];
var v$598 = v$596[1];
var v$599 = v$595[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$600){return [v$600[0][1],v$600[1]];
},v$599,v$598);
},a$593,m$287);
};
tools$0IntStringFinMap$1.composemap$295 = function(f$298,m$301){return tools$0IntFinMapPT$1.composemap$542(function(v$839){return tools$0StringFinMap$1$2.composemap$824(f$298,v$839);
},m$301);
};
tools$0IntStringFinMap$1.ComposeMap$302 = function(f$305,m$308){return tools$0IntFinMapPT$1.ComposeMap$577(function(v$312){var v$319 = v$312[0];
var v$320 = v$312[1];
return tools$0StringFinMap$1$2.ComposeMap$847(function(v$316){var v$317 = v$316[0];
var v$318 = v$316[1];
return f$305([[v$319,v$317],v$318]);
},v$320);
},m$308);
};
tools$0IntStringFinMap$1.list$321 = function(m$324){var a$606 = null;
return tools$0IntFinMapPT$1.Fold$447(function(v$608){var v$609 = v$608[0];
var v$610 = v$609[0];
var v$611 = v$609[1];
var v$612 = v$608[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$613){var v$614 = v$613[0];
return [[[v$610,v$614[0]],v$614[1]],v$613[1]];
},v$612,v$611);
},a$606,m$324);
};
tools$0IntStringFinMap$1.filter$326 = function(f$329,t$332){return tools$0IntFinMapPT$1.Fold$447(function(v$621){var v$622 = v$621[0];
var v$623 = v$622[0];
var v$624 = v$622[1];
var v$625 = v$621[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$626){var v$627 = v$626[0];
var v$628 = v$627[0];
var v$629 = v$627[1];
var v$630 = v$626[1];
var v$827 = [v$623,v$628];
if (f$329([v$827,v$629])) {var v$784 = v$827[0];
var v$785 = v$827[1];
var v$786 = tools$0IntFinMapPT$1.lookup$203(v$630,v$784);
switch (v$786[0]) { case 1: {return tools$0IntFinMapPT$1.add$279(v$784,tools$0StringFinMap$1$2.singleton$126(v$785,v$629),v$630);
 break; }default: {var v$787 = v$786[1];
return tools$0IntFinMapPT$1.add$279(v$784,tools$0StringFinMap$1$2.add$401(v$785,v$629,v$787),v$630);
} };
} else {return v$630;
};
},v$625,v$624);
},tools$0IntFinMapPT$1.empty$136(0),t$332);
};
var fix$845 = {};
fix$845.$addList = function(v$349,v$352){lab$addList: while (true) {if (v$349 == null) {return v$352;
} else {var v$364 = v$349;
var v$365 = v$364[0];
var v$366 = v$365[0];
var v$367 = v$365[1];
var v$368 = v$364[1];
var t$847 = v$368;
var t$846;
var v$641 = v$366[0];
var v$642 = v$366[1];
var v$645 = tools$0IntFinMapPT$1.lookup$203(v$352,v$641);
switch (v$645[0]) { case 1: {t$846 = (tools$0IntFinMapPT$1.add$279(v$641,tools$0StringFinMap$1$2.singleton$126(v$642,v$367),v$352));
 break; }default: {var v$646 = v$645[1];
t$846 = (tools$0IntFinMapPT$1.add$279(v$641,tools$0StringFinMap$1$2.add$401(v$642,v$367,v$646),v$352));
} };
var t$848 = t$847;
var t$849 = t$846;
var v$349 = t$848;
var v$352 = t$849;
continue lab$addList;
};
};
};
tools$0IntStringFinMap$1.addList$346 = fix$845.$addList;
tools$0IntStringFinMap$1.fromList$370 = function(l$373){return tools$0IntStringFinMap$1.addList$346(l$373,tools$0IntFinMapPT$1.empty$136(0));
};
tools$0IntStringFinMap$1.mergeMap$374 = function(f$377,im1$380,im2$383){return tools$0IntFinMapPT$1.mergeMap$397(function(v$387){var v$388 = v$387[0];
var v$389 = v$387[1];
return tools$0StringFinMap$1$2.mergeMap$1111(f$377,v$388,v$389);
},im1$380,im2$383);
};
tools$0IntStringFinMap$1.en$Restrict$390 = new String("Restrict");
tools$0IntStringFinMap$1.restrict$391 = function(v$411,v$412,v$413){var fix$850 = {};
fix$850.$foldl = function(v$665,v$666){lab$foldl: while (true) {if (v$666 == null) {return v$665;
} else {var v$667 = v$666;
var v$668 = v$667[0];
var v$669 = v$667[1];
var t$851;
var v$797;
var v$798 = v$668[0];
var v$799 = v$668[1];
var v$800 = tools$0IntFinMapPT$1.lookup$203(v$412,v$798);
switch (v$800[0]) { case 1: {v$797 = [1];
 break; }default: {var v$801 = v$800[1];
v$797 = (tools$0StringFinMap$1$2.lookup$141(v$801,v$799));
} };
switch (v$797[0]) { case 0: {var v$802 = v$797[1];
var v$803 = v$668[0];
var v$804 = v$668[1];
var v$805 = tools$0IntFinMapPT$1.lookup$203(v$665,v$803);
switch (v$805[0]) { case 1: {t$851 = (tools$0IntFinMapPT$1.add$279(v$803,tools$0StringFinMap$1$2.singleton$126(v$804,v$802),v$665));
 break; }default: {var v$806 = v$805[1];
t$851 = (tools$0IntFinMapPT$1.add$279(v$803,tools$0StringFinMap$1$2.add$401(v$804,v$802,v$806),v$665));
} };
 break; }default: {throw [tools$0IntStringFinMap$1.en$Restrict$390,v$411(v$668)];
} };
var t$852 = t$851;
var t$853 = v$669;
var v$665 = t$852;
var v$666 = t$853;
continue lab$foldl;
};
};
};
var foldl$664 = fix$850.$foldl;
return foldl$664(tools$0IntFinMapPT$1.empty$136(0),v$413);
};
tools$0IntStringFinMap$1.enrich$414 = function(en$417,v$421){var v$442 = v$421[0];
var v$443 = v$421[1];
return tools$0IntFinMapPT$1.Fold$447(function(v$687){var v$688 = v$687[0];
var v$689 = v$688[0];
var v$690 = v$688[1];
var v$691 = v$687[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$692){var v$693 = v$692[0];
var v$694 = v$693[0];
var v$695 = v$693[1];
if (v$692[1]) {var v$811;
var v$814 = tools$0IntFinMapPT$1.lookup$203(v$442,v$689);
switch (v$814[0]) { case 1: {v$811 = [1];
 break; }default: {var v$815 = v$814[1];
v$811 = (tools$0StringFinMap$1$2.lookup$141(v$815,v$694));
} };
switch (v$811[0]) { case 0: {var v$816 = v$811[1];
return en$417([v$816,v$695]);
 break; }default: {return false;
} };
} else {return false;
};
},v$691,v$690);
},true,v$443);
};
tools$0IntStringFinMap$1.layoutMap$444 = function(v$477,v$479,v$478,v$476){return function(layoutDom$453){return function(layoutRan$456){return function(m$459){var t$858;
var t$857;
var t$856 = basis$0List$1.map$697;
var t$855 = function(v$463){var v$469 = v$463[0];
var v$470 = v$463[1];
return [0,[[layoutDom$453(v$469),[layoutRan$456(v$470),null]],[0,v$477],"",3,""]];
};
var t$854;
var a$706 = null;
t$854 = (tools$0IntFinMapPT$1.Fold$447(function(v$708){var v$709 = v$708[0];
var v$710 = v$709[0];
var v$711 = v$709[1];
var v$712 = v$708[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$713){var v$714 = v$713[0];
return [[[v$710,v$714[0]],v$714[1]],v$713[1]];
},v$712,v$711);
},a$706,m$459));
t$857 = (t$856(t$855,t$854));
t$858 = [t$857,[0,v$478],v$479,3,v$476];
return [0,t$858];
};
};
};
};
tools$0IntStringFinMap$1.reportMap$480 = function(f$483,t$486){var t$863 = tools$0Report$1.flatten$87;
var t$862;
var t$861 = basis$0List$1.map$697;
var t$860 = f$483;
var t$859;
var a$722 = null;
t$859 = (tools$0IntFinMapPT$1.Fold$447(function(v$724){var v$725 = v$724[0];
var v$726 = v$725[0];
var v$727 = v$725[1];
var v$728 = v$724[1];
return tools$0StringFinMap$1$2.Fold$903(function(v$729){var v$730 = v$729[0];
return [[[v$726,v$730[0]],v$730[1]],v$729[1]];
},v$728,v$727);
},a$722,t$486));
t$862 = (t$861(t$860,t$859));
return t$863(t$862);
};
tools$0IntStringFinMap$1.pu$488 = function(pu_dom$491,pu_r$494){return tools$0IntFinMapPT$1.pu$893(pickle$0pickle$1.int$729,tools$0StringFinMap$1$2.pu$1291(pickle$0pickle$1.string$909,pu_r$494));
};
return 0;
})();
