if ((typeof(edlib$0Set$1)) == "undefined") {edlib$0Set$1 = {};
};
(function(){edlib$0Set$1.eq_Set$564 = function(v$568,v$565){var v$566 = v$565[0];
var v$567 = v$565[1];
switch (v$567[0]) { case 0: {var v$569 = v$566[1];
var v$570 = v$567[1];
var fix$924 = {};
fix$924.$eq_list = function(v$574,v$575){lab$eq_list: while (true) {if (v$574 == null) {return (v$575 == null)?true:false;
} else {if (v$575 == null) {return false;
} else {var v$576 = v$574;
var v$577 = v$575;
if (v$568([v$576[0],v$577[0]])) {var t$925 = v$576[1];
var t$926 = v$577[1];
var v$574 = t$925;
var v$575 = t$926;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$572 = fix$924.$eq_list;
return eq_list$572(v$569,v$570);
 break; }default: {return false;
} };
};
edlib$0Set$1.empty$113 = function(v$923){return [0,null];
};
edlib$0Set$1.singleton$114 = function(elem$117){return [0,[elem$117,null]];
};
edlib$0Set$1.list$118 = function(v$121){return v$121[1];
};
edlib$0Set$1.fromList$126 = function(elemEq$129,l$132){var t$932;
var fix$927 = {};
fix$927.$dropRepeats = function(v$735){lab$dropRepeats: while (true) {if (v$735 == null) {return null;
} else {var v$736 = v$735;
var v$737 = v$736[1];
if (v$737 == null) {return [v$736[0],null];
} else {var v$738 = v$736[0];
var t$930;
var fix$928 = {};
fix$928.$memberEq = function(v$855){lab$memberEq: while (true) {if (v$855 == null) {return false;
} else {var v$856 = v$855;
var v$857 = v$856[0];
var v$858 = v$856[1];
if ((elemEq$129(v$738))(v$857)) {return true;
} else {var t$929 = v$858;
var v$855 = t$929;
continue lab$memberEq;
};
};
};
};
var memberEq$854 = fix$928.$memberEq;
t$930 = (memberEq$854(v$737));
if (t$930) {var t$931 = v$737;
var v$735 = t$931;
continue lab$dropRepeats;
} else {return [v$738,fix$927.$dropRepeats(v$737)];
};
};
};
};
};
var dropRepeats$734 = fix$927.$dropRepeats;
t$932 = (dropRepeats$734(l$132));
return [0,t$932];
};
edlib$0Set$1.isEmpty$133 = function(v$136){return (v$136[1] == null)?true:false;
};
var fix$933 = {};
fix$933.$member = function(v$145,v$148,v$151){lab$member: while (true) {var v$163 = v$151[1];
if (v$163 == null) {return false;
} else {var v$172 = v$163;
var v$173 = v$172[0];
var v$174 = v$172[1];
if ((v$145(v$148))(v$173)) {return true;
} else {var t$934 = v$145;
var t$935 = v$148;
var t$936 = [0,v$174];
var v$145 = t$934;
var v$148 = t$935;
var v$151 = t$936;
continue lab$member;
};
};
};
};
edlib$0Set$1.member$142 = fix$933.$member;
edlib$0Set$1.size$175 = function(v$178){var v$182 = v$178[1];
var fix$937 = {};
fix$937.$acc = function(v$581,v$582){lab$acc: while (true) {if (v$581 == null) {return v$582;
} else {var v$583 = v$581;
var v$584 = v$583[1];
var t$938 = v$584;
var t$939 = SmlPrims.chk_ovf_i32(v$582 + 1);
var v$581 = t$938;
var v$582 = t$939;
continue lab$acc;
};
};
};
var acc$580 = fix$937.$acc;
return acc$580(v$182,0);
};
edlib$0Set$1.eq$213 = function(elemEq$216,s1$219,s2$222){var v$235 = s1$219[1];
var t$954;
var t$950;
var v$586 = s1$219[1];
var fix$951 = {};
fix$951.$acc = function(v$589,v$590){lab$acc: while (true) {if (v$589 == null) {return v$590;
} else {var v$591 = v$589;
var v$592 = v$591[1];
var t$952 = v$592;
var t$953 = SmlPrims.chk_ovf_i32(v$590 + 1);
var v$589 = t$952;
var v$590 = t$953;
continue lab$acc;
};
};
};
var acc$588 = fix$951.$acc;
t$950 = (acc$588(v$586,0));
var t$946;
var v$594 = s2$222[1];
var fix$947 = {};
fix$947.$acc = function(v$597,v$598){lab$acc: while (true) {if (v$597 == null) {return v$598;
} else {var v$599 = v$597;
var v$600 = v$599[1];
var t$948 = v$600;
var t$949 = SmlPrims.chk_ovf_i32(v$598 + 1);
var v$597 = t$948;
var v$598 = t$949;
continue lab$acc;
};
};
};
var acc$596 = fix$947.$acc;
t$946 = (acc$596(v$594,0));
t$954 = (t$950 == t$946);
if (t$954) {var fix$940 = {};
fix$940.$allContained = function(v$756,v$757){lab$allContained: while (true) {if (v$756 == null) {return true;
} else {var v$758 = v$756;
var v$759 = v$758[0];
var v$760 = v$758[1];
var t$943;
var fix$941 = {};
fix$941.$member = function(v$861){lab$member: while (true) {var v$862 = v$861[1];
if (v$862 == null) {return false;
} else {var v$863 = v$862;
var v$864 = v$863[0];
var v$865 = v$863[1];
if ((elemEq$216(v$759))(v$864)) {return true;
} else {var t$942 = [0,v$865];
var v$861 = t$942;
continue lab$member;
};
};
};
};
var member$860 = fix$941.$member;
t$943 = (member$860(v$757));
if (t$943) {var t$944 = v$760;
var t$945 = v$757;
var v$756 = t$944;
var v$757 = t$945;
continue lab$allContained;
} else {return false;
};
};
};
};
var allContained$755 = fix$940.$allContained;
return allContained$755(v$235,s2$222);
} else {return false;
};
};
edlib$0Set$1.en$Empty$237 = new String("Empty");
edlib$0Set$1.select$238 = function(v$241){var v$248 = v$241[1];
if (v$248 == null) {throw [edlib$0Set$1.en$Empty$237,"select"];
} else {var v$249 = v$248;
return [v$249[0],[0,v$249[1]]];
};
};
edlib$0Set$1.insert$252 = function(elemEq$255,elem$258,s$261){var v$275 = s$261[1];
var t$957;
var fix$955 = {};
fix$955.$member = function(v$868){lab$member: while (true) {var v$869 = v$868[1];
if (v$869 == null) {return false;
} else {var v$870 = v$869;
var v$871 = v$870[0];
var v$872 = v$870[1];
if ((elemEq$255(elem$258))(v$871)) {return true;
} else {var t$956 = [0,v$872];
var v$868 = t$956;
continue lab$member;
};
};
};
};
var member$867 = fix$955.$member;
t$957 = (member$867(s$261));
return t$957?s$261:[0,[elem$258,v$275]];
};
var fix$958 = {};
fix$958.$intersect = function(v$279,v$282,v$285){lab$intersect: while (true) {var v$297 = v$285[1];
if (v$297 == null) {return edlib$0Set$1.empty$113(0);
} else {var v$306 = v$297;
var v$307 = v$306[0];
var v$308 = v$306[1];
var t$961;
var fix$959 = {};
fix$959.$member = function(v$875){lab$member: while (true) {var v$876 = v$875[1];
if (v$876 == null) {return false;
} else {var v$877 = v$876;
var v$878 = v$877[0];
var v$879 = v$877[1];
if ((v$279(v$307))(v$878)) {return true;
} else {var t$960 = [0,v$879];
var v$875 = t$960;
continue lab$member;
};
};
};
};
var member$874 = fix$959.$member;
t$961 = (member$874(v$282));
if (t$961) {var s$603 = fix$958.$intersect(v$279,v$282,[0,v$308]);
var v$608 = s$603[1];
var t$964;
var fix$962 = {};
fix$962.$member = function(v$882){lab$member: while (true) {var v$883 = v$882[1];
if (v$883 == null) {return false;
} else {var v$884 = v$883;
var v$885 = v$884[0];
var v$886 = v$884[1];
if ((v$279(v$307))(v$885)) {return true;
} else {var t$963 = [0,v$886];
var v$882 = t$963;
continue lab$member;
};
};
};
};
var member$881 = fix$962.$member;
t$964 = (member$881(s$603));
return t$964?s$603:[0,[v$307,v$608]];
} else {var t$965 = v$279;
var t$966 = v$282;
var t$967 = [0,v$308];
var v$279 = t$965;
var v$282 = t$966;
var v$285 = t$967;
continue lab$intersect;
};
};
};
};
edlib$0Set$1.intersect$276 = fix$958.$intersect;
var fix$968 = {};
fix$968.$partition$ = function(v$911,v$332,v$912,v$913){lab$partition$: while (true) {var v$333 = v$332[1];
if (v$333 == null) {return [v$912,v$913];
} else {var v$342 = v$333;
var v$343 = v$342[0];
var v$344 = v$342[1];
if (v$911(v$343)) {var t$974 = v$911;
var t$973 = [0,v$344];
var t$969;
var v$616 = v$912[1];
var t$972;
var fix$970 = {};
fix$970.$member = function(v$889){lab$member: while (true) {var v$890 = v$889[1];
if (v$890 == null) {return false;
} else {var v$891 = v$890;
var v$892 = v$891[1];
var t$971 = [0,v$892];
var v$889 = t$971;
continue lab$member;
};
};
};
var member$888 = fix$970.$member;
t$972 = (member$888(v$912));
t$969 = (t$972?v$912:[0,[v$343,v$616]]);
var t$975 = t$974;
var t$976 = t$973;
var t$977 = t$969;
var t$978 = v$913;
var v$911 = t$975;
var v$332 = t$976;
var v$912 = t$977;
var v$913 = t$978;
continue lab$partition$;
} else {var t$985 = v$911;
var t$984 = [0,v$344];
var t$983 = v$912;
var t$979;
var v$626 = v$913[1];
var t$982;
var fix$980 = {};
fix$980.$member = function(v$895){lab$member: while (true) {var v$896 = v$895[1];
if (v$896 == null) {return false;
} else {var v$897 = v$896;
var v$898 = v$897[1];
var t$981 = [0,v$898];
var v$895 = t$981;
continue lab$member;
};
};
};
var member$894 = fix$980.$member;
t$982 = (member$894(v$913));
t$979 = (t$982?v$913:[0,[v$343,v$626]]);
var t$986 = t$985;
var t$987 = t$984;
var t$988 = t$983;
var t$989 = t$979;
var v$911 = t$986;
var v$332 = t$987;
var v$912 = t$988;
var v$913 = t$989;
continue lab$partition$;
};
};
};
};
var partition$$316 = fix$968.$partition$;
edlib$0Set$1.partition$347 = function(f$350,s$353){return partition$$316(f$350,s$353,edlib$0Set$1.empty$113(0),edlib$0Set$1.empty$113(0));
};
edlib$0Set$1.remove$354 = function(eq$357,elem$360,set$363){return (partition$$316(function(a$725){return ((eq$357(elem$360))(a$725))?false:true;
},set$363,edlib$0Set$1.empty$113(0),edlib$0Set$1.empty$113(0)))[0];
};
var fix$990 = {};
fix$990.$difference = function(v$374,v$377,v$380){lab$difference: while (true) {var v$392 = v$380[1];
if (v$392 == null) {return v$377;
} else {var v$398 = v$392;
var v$399 = v$398[0];
var v$400 = v$398[1];
var s$$395 = (partition$$316((function(env$993){return function(a$638){var v$991 = env$993[0];
var v$992 = env$993[1];
return ((v$992(v$991))(a$638))?false:true;
};
})([v$399,v$374]),v$377,edlib$0Set$1.empty$113(0),edlib$0Set$1.empty$113(0)))[0];
var t$994 = v$374;
var t$995 = s$$395;
var t$996 = [0,v$400];
var v$374 = t$994;
var v$377 = t$995;
var v$380 = t$996;
continue lab$difference;
};
};
};
edlib$0Set$1.difference$371 = fix$990.$difference;
edlib$0Set$1.union$401 = function(elemEq$404,v$407,v$410){var v$418 = v$407[1];
var v$420 = v$410[1];
var t$1002;
var fix$997 = {};
fix$997.$dropRepeats = function(v$819){lab$dropRepeats: while (true) {if (v$819 == null) {return null;
} else {var v$820 = v$819;
var v$821 = v$820[1];
if (v$821 == null) {return [v$820[0],null];
} else {var v$822 = v$820[0];
var t$1000;
var fix$998 = {};
fix$998.$memberEq = function(v$901){lab$memberEq: while (true) {if (v$901 == null) {return false;
} else {var v$902 = v$901;
var v$903 = v$902[0];
var v$904 = v$902[1];
if ((elemEq$404(v$822))(v$903)) {return true;
} else {var t$999 = v$904;
var v$901 = t$999;
continue lab$memberEq;
};
};
};
};
var memberEq$900 = fix$998.$memberEq;
t$1000 = (memberEq$900(v$821));
if (t$1000) {var t$1001 = v$821;
var v$819 = t$1001;
continue lab$dropRepeats;
} else {return [v$822,fix$997.$dropRepeats(v$821)];
};
};
};
};
};
var dropRepeats$818 = fix$997.$dropRepeats;
t$1002 = (dropRepeats$818(basis$0List$1.s$n$686(v$418,v$420)));
return [0,t$1002];
};
var fix$1003 = {};
fix$1003.$closure$ = function(v$914,v$437,v$915,v$916){lab$closure$: while (true) {if (v$437 == null) {return v$916;
} else {var v$448 = v$437;
var v$449 = v$448[0];
var v$450 = v$448[1];
var more$441 = v$915(v$449);
var new$445;
var fix$1004 = {};
fix$1004.$difference = function(v$832,v$833){lab$difference: while (true) {var v$834 = v$833[1];
if (v$834 == null) {return v$832;
} else {var v$835 = v$834;
var v$836 = v$835[0];
var v$837 = v$835[1];
var s$$838 = (partition$$316((function(env$1007){return function(a$839){var v$1005 = env$1007[0];
var v$1006 = env$1007[1];
return ((v$1006(v$1005))(a$839))?false:true;
};
})([v$836,v$914]),v$832,edlib$0Set$1.empty$113(0),edlib$0Set$1.empty$113(0)))[0];
var t$1008 = s$$838;
var t$1009 = [0,v$837];
var v$832 = t$1008;
var v$833 = t$1009;
continue lab$difference;
};
};
};
var difference$831 = fix$1004.$difference;
new$445 = (difference$831(more$441,v$916));
var v$446 = new$445[1];
var t$1019 = v$914;
var t$1018 = basis$0List$1.s$n$686(v$450,v$446);
var t$1017 = v$915;
var t$1010;
var v$645 = v$916[1];
var v$647 = new$445[1];
var t$1016;
var fix$1011 = {};
fix$1011.$dropRepeats = function(v$842){lab$dropRepeats: while (true) {if (v$842 == null) {return null;
} else {var v$843 = v$842;
var v$844 = v$843[1];
if (v$844 == null) {return [v$843[0],null];
} else {var v$845 = v$843[0];
var t$1014;
var fix$1012 = {};
fix$1012.$memberEq = function(v$907){lab$memberEq: while (true) {if (v$907 == null) {return false;
} else {var v$908 = v$907;
var v$909 = v$908[0];
var v$910 = v$908[1];
if ((v$914(v$845))(v$909)) {return true;
} else {var t$1013 = v$910;
var v$907 = t$1013;
continue lab$memberEq;
};
};
};
};
var memberEq$906 = fix$1012.$memberEq;
t$1014 = (memberEq$906(v$844));
if (t$1014) {var t$1015 = v$844;
var v$842 = t$1015;
continue lab$dropRepeats;
} else {return [v$845,fix$1011.$dropRepeats(v$844)];
};
};
};
};
};
var dropRepeats$841 = fix$1011.$dropRepeats;
t$1016 = (dropRepeats$841(basis$0List$1.s$n$686(v$645,v$647)));
t$1010 = [0,t$1016];
var t$1020 = t$1019;
var t$1021 = t$1018;
var t$1022 = t$1017;
var t$1023 = t$1010;
var v$914 = t$1020;
var v$437 = t$1021;
var v$915 = t$1022;
var v$916 = t$1023;
continue lab$closure$;
};
};
};
var closure$$421 = fix$1003.$closure$;
edlib$0Set$1.closure$453 = function(eq$456,f$459,s$462){var v$472 = s$462[1];
return closure$$421(eq$456,v$472,f$459,s$462);
};
edlib$0Set$1.map$473 = function(f$476,v$479){var v$486 = v$479[1];
return [0,edlib$0edList$1.map$55(f$476,v$486)];
};
edlib$0Set$1.apply$487 = function(f$490,v$493){var v$500 = v$493[1];
var fix$1024 = {};
fix$1024.$apply = function(v$650){lab$apply: while (true) {if (v$650 == null) {return 0;
} else {var v$651 = v$650;
var v$652 = v$651[0];
var v$653 = v$651[1];
f$490(v$652);
var t$1025 = v$653;
var v$650 = t$1025;
continue lab$apply;
};
};
};
var apply$649 = fix$1024.$apply;
return apply$649(v$500);
};
edlib$0Set$1.fold$501 = function(f$504,base$507,v$510){var v$519 = v$510[1];
var fix$1026 = {};
fix$1026.$foldL = function(v$656,v$657){lab$foldL: while (true) {if (v$657 == null) {return v$656;
} else {var v$658 = v$657;
var v$659 = v$658[0];
var v$660 = v$658[1];
var t$1027 = (f$504(v$659))(v$656);
var t$1028 = v$660;
var v$656 = t$1027;
var v$657 = t$1028;
continue lab$foldL;
};
};
};
var foldL$655 = fix$1026.$foldL;
return foldL$655(base$507,v$519);
};
edlib$0Set$1.fold$$520 = function(v$523,v$526){var v$535 = v$526[1];
if (v$535 == null) {throw [edlib$0Set$1.en$Empty$237,"fold'"];
} else {return edlib$0edList$1.foldL$$1736(v$523,v$535);
};
};
return 0;
})();
