if ((typeof(tools$0FinMapEq$1)) == "undefined") {tools$0FinMapEq$1 = {};
};
(function(){tools$0FinMapEq$1.empty$57 = function(v$648){return null;
};
tools$0FinMapEq$1.singleton$58 = function(p$61){return [p$61,null];
};
tools$0FinMapEq$1.isEmpty$62 = function(v$65){return (v$65 == null)?true:false;
};
var fix$649 = {};
fix$649.$lookup = function(v$73,v$76,v$79){lab$lookup: while (true) {if (v$76 == null) {return [1];
} else {var v$99 = v$76;
var v$100 = v$99[0];
var v$101 = v$100[0];
var v$102 = v$100[1];
var v$103 = v$99[1];
if (v$73([v$101,v$79])) {return [0,v$102];
} else {var t$650 = v$73;
var t$651 = v$103;
var t$652 = v$79;
var v$73 = t$650;
var v$76 = t$651;
var v$79 = t$652;
continue lab$lookup;
};
};
};
};
tools$0FinMapEq$1.lookup$70 = fix$649.$lookup;
tools$0FinMapEq$1.add$176 = function(eq$179,v$184){var v$189 = v$184[0];
var v$190 = v$184[1];
var v$191 = v$184[2];
var t$657;
var fix$654 = {};
fix$654.$isin = function(v$632,v$597){lab$isin: while (true) {if (v$597 == null) {return false;
} else {var v$599 = v$597;
var v$600 = v$599[0];
var v$601 = v$600[0];
var v$602 = v$599[1];
if (eq$179([v$632,v$601])) {return true;
} else {var t$655 = v$632;
var t$656 = v$602;
var v$632 = t$655;
var v$597 = t$656;
continue lab$isin;
};
};
};
};
var isin$595 = fix$654.$isin;
t$657 = (isin$595(v$189,v$191));
if (t$657) {var fix$653 = {};
fix$653.$ins = function(v$633,v$634,v$606){if (v$606 == null) {return [[v$633,v$634],null];
} else {var v$609 = v$606;
var v$610 = v$609[0];
var v$611 = v$610[0];
var v$612 = v$609[1];
return (eq$179([v$611,v$633]))?[[v$633,v$634],v$612]:[v$610,fix$653.$ins(v$633,v$634,v$612)];
};
};
var ins$604 = fix$653.$ins;
return ins$604(v$189,v$190,v$191);
} else {return [[v$189,v$190],v$191];
};
};
var fix$658 = {};
fix$658.$plus = function(v$195,v$198){lab$plus: while (true) {var v$211 = v$198[1];
if (v$211 == null) {return v$198[0];
} else {var v$215 = v$198[0];
var v$216 = v$211;
var v$217 = v$216[0];
var v$218 = v$217[0];
var v$219 = v$217[1];
var v$220 = v$216[1];
var t$666 = v$195;
var t$665;
var t$664;
var t$663;
var fix$660 = {};
fix$660.$isin = function(v$635,v$616){lab$isin: while (true) {if (v$616 == null) {return false;
} else {var v$618 = v$616;
var v$619 = v$618[0];
var v$620 = v$619[0];
var v$621 = v$618[1];
if (v$195([v$635,v$620])) {return true;
} else {var t$661 = v$635;
var t$662 = v$621;
var v$635 = t$661;
var v$616 = t$662;
continue lab$isin;
};
};
};
};
var isin$614 = fix$660.$isin;
t$663 = (isin$614(v$218,v$215));
if (t$663) {var fix$659 = {};
fix$659.$ins = function(v$636,v$637,v$625){if (v$625 == null) {return [[v$636,v$637],null];
} else {var v$628 = v$625;
var v$629 = v$628[0];
var v$630 = v$629[0];
var v$631 = v$628[1];
return (v$195([v$630,v$636]))?[[v$636,v$637],v$631]:[v$629,fix$659.$ins(v$636,v$637,v$631)];
};
};
var ins$623 = fix$659.$ins;
t$664 = (ins$623(v$218,v$219,v$215));
} else {t$664 = [[v$218,v$219],v$215];
};
t$665 = [t$664,v$220];
var t$667 = t$666;
var t$668 = t$665;
var v$195 = t$667;
var v$198 = t$668;
continue lab$plus;
};
};
};
tools$0FinMapEq$1.plus$192 = fix$658.$plus;
var fix$669 = {};
fix$669.$remove = function(v$224,v$227){var v$240 = v$227[1];
if (v$240 == null) {return [1];
} else {var v$254 = v$227[0];
var v$255 = v$240;
var v$256 = v$255[0];
var v$257 = v$256[0];
var v$258 = v$256[1];
var v$259 = v$255[1];
if (v$224([v$254,v$257])) {return [0,v$259];
} else {var v$251 = fix$669.$remove(v$224,[v$254,v$259]);
switch (v$251[0]) { case 1: {return [1];
 break; }default: {return [0,[[v$257,v$258],v$251[1]]];
} };
};
};
};
tools$0FinMapEq$1.remove$221 = fix$669.$remove;
tools$0FinMapEq$1.mergeMap$260 = function(v$263,v$266,v$269,v$272){if (v$269 == null) {return v$272;
} else {if (v$272 == null) {return v$269;
} else {var fix$670 = {};
fix$670.$insert = function(v$638,v$639,v$311){if (v$311 == null) {return [[v$638,v$639],null];
} else {var v$320 = v$311;
var v$321 = v$320[0];
var v$322 = v$321[0];
var v$323 = v$321[1];
var v$324 = v$320[1];
return (v$263([v$322,v$638]))?[[v$322,v$266([v$323,v$639])],v$324]:[[v$322,v$323],fix$670.$insert(v$638,v$639,v$324)];
};
};
var insert$296 = fix$670.$insert;
var fix$671 = {};
fix$671.$foldl = function(v$527,v$528){lab$foldl: while (true) {if (v$528 == null) {return v$527;
} else {var v$529 = v$528;
var v$530 = v$529[0];
var v$531 = v$529[1];
var t$672;
var v$576 = v$530[0];
var v$577 = v$530[1];
t$672 = (insert$296(v$576,v$577,v$527));
var t$673 = t$672;
var t$674 = v$531;
var v$527 = t$673;
var v$528 = t$674;
continue lab$foldl;
};
};
};
var foldl$526 = fix$671.$foldl;
return foldl$526(v$269,v$272);
};
};
};
tools$0FinMapEq$1.dom$336 = function(eq$339,m$342){return edlib$0Set$1.fromList$126(function(a$345){return function(b$348){return eq$339([a$345,b$348]);
};
},basis$0List$1.map$697(function(v$351){return v$351[0];
},m$342));
};
tools$0FinMapEq$1.range$353 = function(x$356){return basis$0List$1.map$697(function(v$359){return v$359[1];
},x$356);
};
tools$0FinMapEq$1.list$361 = function(x$364){return x$364;
};
tools$0FinMapEq$1.composemap$365 = function(f$368,m$371){return basis$0List$1.map$697(function(v$375){var v$376 = v$375[0];
var v$377 = v$375[1];
return [v$376,f$368(v$377)];
},m$371);
};
tools$0FinMapEq$1.ComposeMap$378 = function(f$381,m$384){return basis$0List$1.map$697(function(v$388){var v$389 = v$388[0];
var v$390 = v$388[1];
return [v$389,f$381([v$389,v$390])];
},m$384);
};
tools$0FinMapEq$1.fold$391 = function(f$394,x$397,m$400){var fix$675 = {};
fix$675.$foldl = function(v$536,v$537){lab$foldl: while (true) {if (v$537 == null) {return v$536;
} else {var v$538 = v$537;
var v$539 = v$538[0];
var v$540 = v$538[1];
var t$676;
var v$581 = v$539[1];
t$676 = (f$394([v$581,v$536]));
var t$677 = t$676;
var t$678 = v$540;
var v$536 = t$677;
var v$537 = t$678;
continue lab$foldl;
};
};
};
var foldl$535 = fix$675.$foldl;
return foldl$535(x$397,m$400);
};
tools$0FinMapEq$1.Fold$410 = function(f$413,x$416,m$419){var fix$679 = {};
fix$679.$foldl = function(v$545,v$546){lab$foldl: while (true) {if (v$546 == null) {return v$545;
} else {var v$547 = v$546;
var v$548 = v$547[0];
var v$549 = v$547[1];
var t$680;
var v$585 = v$548[0];
var v$586 = v$548[1];
t$680 = (f$413([[v$585,v$586],v$545]));
var t$681 = t$680;
var t$682 = v$549;
var v$545 = t$681;
var v$546 = t$682;
continue lab$foldl;
};
};
};
var foldl$544 = fix$679.$foldl;
return foldl$544(x$416,m$419);
};
tools$0FinMapEq$1.filter$429 = function(v$646,v$647){return basis$0List$1.filter$417(v$646,v$647);
};
tools$0FinMapEq$1.reportMap$430 = function(f$433,m$436){return tools$0Report$1.flatten$87(basis$0List$1.map$697(f$433,m$436));
};
tools$0FinMapEq$1.reportMapSORTED$437 = function(lt$440,f$443,m$446){var m$551 = edlib$0ListSort$1.sort$54(function(v$449){var v$454 = v$449[0];
return function(v$452){var v$453 = v$452[0];
return lt$440([v$454,v$453]);
};
},m$446);
return tools$0Report$1.flatten$87(basis$0List$1.map$697(f$443,m$551));
};
tools$0FinMapEq$1.layoutMap$455 = function(v$489,v$491,v$490,v$488){return function(layoutDom$464){return function(layoutRan$467){return function(m$470){var t$683;
var v$486 = [0,v$490];
t$683 = [basis$0List$1.map$697(function(v$552){var v$553 = v$552[0];
var v$554 = v$552[1];
var t$684;
var v$555 = [0,v$489];
t$684 = [[layoutDom$464(v$553),[layoutRan$467(v$554),null]],v$555,"",0,""];
return [0,t$684];
},m$470),v$486,v$491,0,v$488];
return [0,t$683];
};
};
};
};
return 0;
})();
