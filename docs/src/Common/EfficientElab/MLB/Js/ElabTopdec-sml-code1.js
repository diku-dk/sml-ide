if ((typeof(basics$0ElabTopdec$1$1)) == "undefined") {basics$0ElabTopdec$1$1 = {};
};
(function(){basics$0ElabTopdec$1$1.impossible$62 = function(s$65){return tools$0Crash$1.impossible$59("ElabTopdec." + s$65);
};
basics$0ElabTopdec$1$1.noSome$66 = function(v$69,v$72){switch (v$69[0]) { case 1: {return tools$0Crash$1.impossible$59("ElabTopdec." + v$72);
 break; }default: {return v$69[1];
} };
};
basics$0ElabTopdec$1$1.quote$84 = function(s$87){return ("`" + s$87) + "'";
};
basics$0ElabTopdec$1$1.is_Some$88 = function(v$91){switch (v$91[0]) { case 1: {return false;
 break; }default: {return true;
} };
};
basics$0ElabTopdec$1$1.StringTree_to_string$98 = function(v$1049){return tools$0PrettyPrint$1.flatten1$389(v$1049);
};
var fix$1056 = {};
fix$1056.$pp_list = function(v$102,v$105){if (v$105 == null) {return "";
} else {var v$125 = v$105;
var v$126 = v$125[1];
if (v$126 == null) {var v$128 = v$125[0];
return v$102(v$128);
} else {var v$129 = v$126;
if (v$129[1] == null) {var v$132 = v$125[0];
var v$133 = v$129[0];
return ((v$102(v$132)) + " and ") + (v$102(v$133));
} else {var v$135 = v$125[0];
return ((v$102(v$135)) + ", ") + (fix$1056.$pp_list(v$102,v$126));
};
};
};
};
basics$0ElabTopdec$1$1.pp_list$99 = fix$1056.$pp_list;
basics$0ElabTopdec$1$1.oo$136 = function(v$141,v$142){return basics$0StatObject$1.oo$4792(v$141,v$142);
};
basics$0ElabTopdec$1$1.B_plus_E$143 = function(v$148,v$149){return basics$0ModuleEnvironments$1.plus_E$537(v$148,v$149);
};
basics$0ElabTopdec$1$1.B_plus_B$150 = function(v$155,v$156){return basics$0ModuleEnvironments$1.plus$415(v$155,v$156);
};
basics$0ElabTopdec$1$1.G_plus_G$157 = function(v$162,v$163){return basics$0ModuleEnvironments$1.plus$84(v$162,v$163);
};
basics$0ElabTopdec$1$1.B_plus_G$164 = function(v$169,v$170){return basics$0ModuleEnvironments$1.plus_G$591(v$169,v$170);
};
basics$0ElabTopdec$1$1.E_plus_E$171 = function(v$176,v$177){return basics$0Environments$1.plus$2441(v$176,v$177);
};
basics$0ElabTopdec$1$1.F_plus_F$178 = function(v$183,v$184){return basics$0ModuleEnvironments$1.plus$244(v$183,v$184);
};
basics$0ElabTopdec$1$1.B_plus_F$185 = function(v$190,v$191){return basics$0ModuleEnvironments$1.plus_F$627(v$190,v$191);
};
basics$0ElabTopdec$1$1.SE_plus_SE$192 = function(v$197,v$198){return basics$0Environments$1.plus$2136(v$197,v$198);
};
basics$0ElabTopdec$1$1.s$n$200 = function(x$203){return basis$0List$1.s$n$686(x$203[0],x$203[1]);
};
basics$0ElabTopdec$1$1.tynames_E$204 = function(E$207){return basics$0Environments$1.tynames$2609(E$207);
};
basics$0ElabTopdec$1$1.tynames_G$208 = function(G$211){return basics$0ModuleEnvironments$1.tynames$104(G$211);
};
basics$0ElabTopdec$1$1.tynames_F$212 = function(F$215){return basics$0ModuleEnvironments$1.tynames$264(F$215);
};
basics$0ElabTopdec$1$1.tyvars_Type$216 = function(tau$219){return basics$0StatObject$1.tyvars$1921(tau$219);
};
basics$0ElabTopdec$1$1.tyvars_B$$220 = function(B$223){return basics$0ModuleEnvironments$1.tyvars$$480(B$223);
};
basics$0ElabTopdec$1$1.pr_Env$224 = function(E$227){return tools$0PrettyPrint$1.outputTree$1072([function(v$1050){return basis$0General$1.print$163(v$1050);
},basics$0Environments$1.layout$2610(E$227),120]);
};
basics$0ElabTopdec$1$1.okConv$228 = function(v$1051){return basics$0ElabInfo$1.from_ParseInfo$231(v$1051);
};
basics$0ElabTopdec$1$1.errorConv$229 = function(v$234,v$235){return basics$0ElabInfo$1.plus_ErrorInfo$102(basics$0ElabInfo$1.from_ParseInfo$231(v$234),v$235);
};
basics$0ElabTopdec$1$1.typeConv$236 = function(v$241,v$242){return basics$0ElabInfo$1.plus_TypeInfo$128(basics$0ElabInfo$1.from_ParseInfo$231(v$241),v$242);
};
basics$0ElabTopdec$1$1.repeatedIdsError$243 = function(v$248,v$249){var v$988 = [24,v$249];
return basics$0ElabInfo$1.plus_ErrorInfo$102(basics$0ElabInfo$1.from_ParseInfo$231(v$248),v$988);
};
basics$0ElabTopdec$1$1.repeaters$250 = function(eq$253,ys$256){return basis$0List$1.filter$417(function(x$284){var t$1058;
var fix$1057 = {};
fix$1057.$occurences = function(v$1019){if (v$1019 == null) {return 0;
} else {var v$1020 = v$1019;
var v$1021 = v$1020[0];
var v$1022 = v$1020[1];
return SmlPrims.chk_ovf_i32(((eq$253([x$284,v$1021]))?1:0) + (fix$1057.$occurences(v$1022)));
};
};
var occurences$1018 = fix$1057.$occurences;
t$1058 = (occurences$1018(ys$256));
return t$1058 > 1;
},ys$256);
};
basics$0ElabTopdec$1$1.member$285 = function(v$765,x$288,xs$291){var fix$1059 = {};
fix$1059.$exists = function(v$783){lab$exists: while (true) {if (v$783 == null) {return false;
} else {var v$784 = v$783;
var v$785 = v$784[0];
var v$786 = v$784[1];
if (v$765([x$288,v$785])) {return true;
} else {var t$1060 = v$786;
var v$783 = t$1060;
continue lab$exists;
};
};
};
};
var exists$782 = fix$1059.$exists;
return exists$782(xs$291);
};
basics$0ElabTopdec$1$1.Sigma_match$295 = function(v$305,v$306,v$307){try {return [basics$0ElabInfo$1.from_ParseInfo$231(v$305),basics$0ModuleStatObject$1.match$646(v$306,v$307)];
} catch(v$1061) {return (function(v$304){var t$1062 = v$304;
if (t$1062[0] == basics$0ModuleStatObject$1.en$No_match$97) {var reason$301 = v$304[1];
var t$1063;
var v$994 = [19,reason$301];
t$1063 = (basics$0ElabInfo$1.plus_ErrorInfo$102(basics$0ElabInfo$1.from_ParseInfo$231(v$305),v$994));
return [t$1063,basics$0ModuleStatObject$1.instance$565(v$306)];
} else {throw v$304;
};
})(v$1061);
};
};
basics$0ElabTopdec$1$1.Sigma_match$$308 = function(v$334,v$335,v$336){try {var v$319 = basics$0ModuleStatObject$1.match$$665(v$335,v$336);
var v$320 = v$319[0];
var v$321 = v$319[1];
var v$322 = v$319[2];
var v$323 = v$319[3];
return [basics$0ElabInfo$1.from_ParseInfo$231(v$334),v$320,v$321,v$322,v$323];
} catch(v$1064) {return (function(v$327){var t$1065 = v$327;
if (t$1065[0] == basics$0ModuleStatObject$1.en$No_match$97) {var reason$324 = v$327[1];
var v$331 = basics$0ModuleStatObject$1.instance$$576(v$335);
var v$332 = v$331[0];
var v$333 = v$331[1];
var t$1066;
var v$996 = [19,reason$324];
t$1066 = (basics$0ElabInfo$1.plus_ErrorInfo$102(basics$0ElabInfo$1.from_ParseInfo$231(v$334),v$996));
return [t$1066,v$333,v$332,v$333,basics$0StatObject$1.Id$4341];
} else {throw v$327;
};
})(v$1064);
};
};
var fix$1067 = {};
fix$1067.$initial_TE = function(v$340){var v$354 = v$340[1];
var v$355 = v$354[1];
var v$356 = v$354[2];
var v$357 = v$354[4];
var TE$346 = basics$0Environments$1.init$2007(v$355,v$356);
switch (v$357[0]) { case 1: {return TE$346;
 break; }default: {var v$353 = v$357[1];
var TE$$352 = fix$1067.$initial_TE(v$353);
return basics$0Environments$1.plus$1790(TE$346,TE$$352);
} };
};
basics$0ElabTopdec$1$1.initial_TE$337 = fix$1067.$initial_TE;
basics$0ElabTopdec$1$1.Sigma_instance$$358 = function(a$361){return basics$0ModuleStatObject$1.instance$$576(a$361);
};
basics$0ElabTopdec$1$1.wellformed_TyStr$363 = function(tystr$402){var v$410 = basics$0Environments$1.to_theta_and_VE$1680(tystr$402);
var v$411 = v$410[0];
var v$412 = v$410[1];
if (basics$0StatObject$1.is_TyName$4141(v$411)) {return true;
} else {return basics$0Environments$1.is_empty$1174(v$412);
};
};
basics$0ElabTopdec$1$1.wellformed_TE$364 = function(TE$389){return basics$0Environments$1.fold$1838(function(tystr$392){return function(bool$395){if (bool$395) {var v$803 = basics$0Environments$1.to_theta_and_VE$1680(tystr$392);
var v$804 = v$803[0];
var v$805 = v$803[1];
if (basics$0StatObject$1.is_TyName$4141(v$804)) {return true;
} else {return basics$0Environments$1.is_empty$1174(v$805);
};
} else {return false;
};
};
},true,TE$389);
};
var fix$1068 = {};
fix$1068.$wellformed_E = function(E$368){var v$382 = basics$0Environments$1.un$2351(E$368);
var v$383 = v$382[0];
var v$384 = v$382[1];
var v$386 = v$382[3];
if (fix$1068.$wellformed_SE(v$383)) {if (basics$0Environments$1.fold$1838(function(tystr$807){return function(bool$808){if (bool$808) {var v$810 = basics$0Environments$1.to_theta_and_VE$1680(tystr$807);
var v$811 = v$810[0];
var v$812 = v$810[1];
if (basics$0StatObject$1.is_TyName$4141(v$811)) {return true;
} else {return basics$0Environments$1.is_empty$1174(v$812);
};
} else {return false;
};
};
},true,v$384)) {return syntax_objects$0RegVar$1$1.eqs$99(v$386,null);
} else {return false;
};
} else {return false;
};
};
fix$1068.$wellformed_SE = function(SE$415){return basics$0Environments$1.fold$2178(function(E$418){return function(bool$421){if (bool$421) {return fix$1068.$wellformed_E(E$418);
} else {return false;
};
};
},true,SE$415);
};
basics$0ElabTopdec$1$1.wellformed_E$365 = fix$1068.$wellformed_E;
basics$0ElabTopdec$1$1.wellformed_SE$362 = fix$1068.$wellformed_SE;
basics$0ElabTopdec$1$1.en$Share$426 = new String("Share");
basics$0ElabTopdec$1$1.update$427 = function(v$766,v$432){var v$440 = v$432[0];
var v$441 = v$432[1];
var v$442 = v$432[2];
var v$437 = tools$0FinMap$1.lookup$76(v$766,v$442,v$440);
switch (v$437[0]) { case 0: {var v$439 = v$437[1];
return tools$0FinMap$1.add$141(v$766,[v$440,[v$441,v$439],v$442]);
 break; }default: {return tools$0FinMap$1.add$141(v$766,[v$440,[v$441,null],v$442]);
} };
};
basics$0ElabTopdec$1$1.collect_TE$443 = function(v$523,v$524,v$525,v$526){var tcmap$450;
var fix$1069 = {};
fix$1069.$foldl = function(v$827,v$828){lab$foldl: while (true) {if (v$828 == null) {return v$827;
} else {var v$829 = v$828;
var v$830 = v$829[0];
var v$831 = v$829[1];
var t$1086 = basics$0Environments$1.Fold$1857((function(env$1073){return function(v$842){var v$1070 = env$1073[0];
var v$1071 = env$1073[1];
var v$1072 = env$1073[2];
var v$843 = v$842[0];
var v$844 = v$842[1];
return (function(env$1079){return function(acc$845){var v$1074 = env$1079[0];
var v$1075 = env$1079[1];
var v$1076 = env$1079[2];
var v$1077 = env$1079[3];
var v$1078 = env$1079[4];
var v$851 = v$1078((function(env$1081){return function(v$1023){var v$1080 = env$1081[0];
return v$1080(v$1023[0],v$1023[1]);
};
})([v$1077]),acc$845,v$1076);
switch (v$851[0]) { case 0: {var v$852 = v$851[1];
return v$1075((function(env$1083){return function(v$1024){var v$1082 = env$1083[0];
return v$1082(v$1024[0],v$1024[1]);
};
})([v$1077]),[v$1076,[v$1074,v$852],acc$845]);
 break; }default: {return v$1075((function(env$1085){return function(v$1025){var v$1084 = env$1085[0];
return v$1084(v$1025[0],v$1025[1]);
};
})([v$1077]),[v$1076,[v$1074,null],acc$845]);
} };
};
})([v$844,v$1070,v$843,v$1071,v$1072]);
};
})([tools$0FinMap$1.add$141,syntax_objects$0TyCon$1.eq_tycon$229,tools$0FinMap$1.lookup$76]),v$827,v$830);
var t$1087 = v$831;
var v$827 = t$1086;
var v$828 = t$1087;
continue lab$foldl;
};
};
};
var foldl$826 = fix$1069.$foldl;
var v$1037 = tools$0FinMap$1.empty$61(function(v$1026){return syntax_objects$0TyCon$1.eq_tycon$229(v$1026[0],v$1026[1]);
});
tcmap$450 = (foldl$826(v$1037,v$525));
return tools$0FinMap$1.Fold$481(function(v$1027){return syntax_objects$0TyCon$1.eq_tycon$229(v$1027[0],v$1027[1]);
},function(v$479){var v$480 = v$479[0];
var v$481 = v$480[1];
if (v$481 == null) {return v$479[1];
} else {var v$484 = v$481;
if (v$484[1] == null) {return v$479[1];
} else {var v$521 = v$480[0];
var v$522 = v$479[1];
var tynames$500 = basis$0List$1.map$697(function(tystr$853){var theta$854 = basics$0Environments$1.to_theta$1691(tystr$853);
var v$855 = basics$0StatObject$1.to_TyName$4079(theta$854);
switch (v$855[0]) { case 1: {throw [basics$0ElabTopdec$1$1.en$Share$426,[21,[syntax_objects$0TyCon$1.implode_LongTyCon$99(basis$0List$1.rev$682(v$524),v$521),theta$854]]];
 break; }default: {return v$855[1];
} };
},v$481);
var arity$501 = (tynames$500 == null)?(tools$0Crash$1.impossible$59("ElabTopdec.SHAREspec.collect")):tynames$500[0][0];
var fix$1088 = {};
fix$1088.$app = function(v$865){lab$app: while (true) {if (v$865 == null) {return 0;
} else {var v$866 = v$865;
var v$867 = v$866[0];
var v$868 = v$866[1];
if (v$867[0] == arity$501) {if (v$523(v$867)) {0;
} else {throw [basics$0ElabTopdec$1$1.en$Share$426,[20,[syntax_objects$0TyCon$1.implode_LongTyCon$99(basis$0List$1.rev$682(v$524),v$521),v$867]]];
};
} else {throw [basics$0ElabTopdec$1$1.en$Share$426,[22,tynames$500]];
};
var t$1089 = v$868;
var v$865 = t$1089;
continue lab$app;
};
};
};
var app$864 = fix$1088.$app;
app$864(tynames$500);
return [tynames$500,v$522];
};
};
},v$526,tcmap$450);
};
var fix$1090 = {};
fix$1090.$collect_E = function(v$559,v$560,v$561,v$562){var v$539;
var fix$1129 = {};
fix$1129.$foldl = function(v$928,v$929){lab$foldl: while (true) {if (v$929 == null) {return v$928;
} else {var v$930 = v$929;
var v$931 = v$930[0];
var v$932 = v$930[1];
var t$1130;
var v$936 = v$928[0];
var v$937 = v$928[1];
var v$938 = basics$0Environments$1.un$2351(v$931);
t$1130 = [[v$938[0],v$936],[v$938[1],v$937]];
var t$1131 = t$1130;
var t$1132 = v$932;
var v$928 = t$1131;
var v$929 = t$1132;
continue lab$foldl;
};
};
};
var foldl$927 = fix$1129.$foldl;
var v$1041 = [null,null];
v$539 = (foldl$927(v$1041,v$561));
var v$540 = v$539[0];
var v$541 = v$539[1];
var acc$538 = fix$1090.$collect_SE(v$559,v$560,v$540,v$562);
return basics$0ElabTopdec$1$1.collect_TE$443(v$559,v$560,v$541,acc$538);
};
fix$1090.$collect_SE = function(v$610,v$611,v$612,v$613){var smap$569;
var fix$1110 = {};
fix$1110.$foldl = function(v$885,v$886){lab$foldl: while (true) {if (v$886 == null) {return v$885;
} else {var v$887 = v$886;
var v$888 = v$887[0];
var v$889 = v$887[1];
var t$1127 = basics$0Environments$1.Fold$2197((function(env$1114){return function(v$900){var v$1111 = env$1114[0];
var v$1112 = env$1114[1];
var v$1113 = env$1114[2];
var v$901 = v$900[0];
var v$902 = v$900[1];
return (function(env$1120){return function(acc$903){var v$1115 = env$1120[0];
var v$1116 = env$1120[1];
var v$1117 = env$1120[2];
var v$1118 = env$1120[3];
var v$1119 = env$1120[4];
var v$909 = v$1119((function(env$1122){return function(v$1028){var v$1121 = env$1122[0];
return v$1121(v$1028[0],v$1028[1]);
};
})([v$1118]),acc$903,v$1117);
switch (v$909[0]) { case 0: {var v$910 = v$909[1];
return v$1116((function(env$1124){return function(v$1029){var v$1123 = env$1124[0];
return v$1123(v$1029[0],v$1029[1]);
};
})([v$1118]),[v$1117,[v$1115,v$910],acc$903]);
 break; }default: {return v$1116((function(env$1126){return function(v$1030){var v$1125 = env$1126[0];
return v$1125(v$1030[0],v$1030[1]);
};
})([v$1118]),[v$1117,[v$1115,null],acc$903]);
} };
};
})([v$902,v$1111,v$901,v$1112,v$1113]);
};
})([tools$0FinMap$1.add$141,syntax_objects$0StrId$1.eq_strid$181,tools$0FinMap$1.lookup$76]),v$885,v$888);
var t$1128 = v$889;
var v$885 = t$1127;
var v$886 = t$1128;
continue lab$foldl;
};
};
};
var foldl$884 = fix$1110.$foldl;
var v$1039 = tools$0FinMap$1.empty$61(function(v$1031){return syntax_objects$0StrId$1.eq_strid$181(v$1031[0],v$1031[1]);
});
smap$569 = (foldl$884(v$1039,v$612));
return tools$0FinMap$1.Fold$481(function(v$1032){return syntax_objects$0StrId$1.eq_strid$181(v$1032[0],v$1032[1]);
},function(v$598){var v$599 = v$598[0];
var v$600 = v$599[1];
if (v$600 == null) {return v$598[1];
} else {var v$603 = v$600;
if (v$603[1] == null) {return v$598[1];
} else {var v$608 = v$599[0];
var v$609 = v$598[1];
return fix$1090.$collect_E(v$610,[v$608,v$611],v$600,v$609);
};
};
},v$613,smap$569);
};
basics$0ElabTopdec$1$1.collect_E$528 = fix$1090.$collect_E;
basics$0ElabTopdec$1$1.collect_SE$527 = fix$1090.$collect_SE;
var fix$1091 = {};
fix$1091.$collapse = function(v$626,v$1033){lab$collapse: while (true) {if (v$626 == null) {return v$1033;
} else {var v$671 = v$626;
var v$672 = v$671[0];
var v$673 = v$671[1];
var fix$1092 = {};
fix$1092.$split = function(v$642,v$1034,v$1035){lab$split: while (true) {if (v$642 == null) {return [v$1034,v$1035];
} else {var v$649 = v$642;
var v$650 = v$649[0];
var v$651 = v$649[1];
if (special_objects$0TyName$1$3.isEmpty$2736(special_objects$0TyName$1$3.intersect$3053(v$650,v$672))) {var t$1093 = v$651;
var t$1094 = [v$650,v$1034];
var t$1095 = v$1035;
var v$642 = t$1093;
var v$1034 = t$1094;
var v$1035 = t$1095;
continue lab$split;
} else {var t$1096 = v$651;
var t$1097 = v$1034;
var t$1098 = [v$650,v$1035];
var v$642 = t$1096;
var v$1034 = t$1097;
var v$1035 = t$1098;
continue lab$split;
};
};
};
};
var split$628 = fix$1092.$split;
var v$660 = split$628(v$673,null,null);
var v$661 = v$660[1];
if (v$661 == null) {var v$662 = v$660[0];
var t$1099 = v$662;
var t$1100 = [v$672,v$1033];
var v$626 = t$1099;
var v$1033 = t$1100;
continue lab$collapse;
} else {var v$670 = v$660[0];
var Tnew$663;
var fix$1101 = {};
fix$1101.$foldl = function(v$946,v$947){lab$foldl: while (true) {if (v$947 == null) {return v$946;
} else {var v$948 = v$947;
var v$949 = v$948[0];
var v$950 = v$948[1];
var t$1102 = special_objects$0TyName$1$3.union$2914(v$949,v$946);
var t$1103 = v$950;
var v$946 = t$1102;
var v$947 = t$1103;
continue lab$foldl;
};
};
};
var foldl$945 = fix$1101.$foldl;
Tnew$663 = (foldl$945(v$672,v$661));
var t$1104 = [Tnew$663,v$670];
var t$1105 = v$1033;
var v$626 = t$1104;
var v$1033 = t$1105;
continue lab$collapse;
};
};
};
};
basics$0ElabTopdec$1$1.collapse$614 = fix$1091.$collapse;
var fix$1106 = {};
fix$1106.$find = function(v$691,v$1036){lab$find: while (true) {if (v$691 == null) {return tools$0Crash$1.impossible$59("ElabTopdec.IG.SHARINGspec.find");
} else {var v$693 = v$691;
var v$694 = v$693[1];
if (v$694 == null) {return [v$693[0],v$1036];
} else {var v$701 = v$693[0];
if (v$701[1]) {return [v$701,basis$0List$1.s$n$686(v$694,v$1036)];
} else {var t$1107 = v$694;
var t$1108 = [v$701,v$1036];
var v$691 = t$1107;
var v$1036 = t$1108;
continue lab$find;
};
};
};
};
};
basics$0ElabTopdec$1$1.find$675 = fix$1106.$find;
var fix$1109 = {};
fix$1109.$build = function(v$706){if (v$706 == null) {return [null,basics$0StatObject$1.Id$4341];
} else {var v$726 = v$706;
var v$727 = v$726[0];
var v$728 = v$726[1];
var v$723 = basics$0ElabTopdec$1$1.find$675(v$727,null);
var v$724 = v$723[0];
var v$725 = v$723[1];
var phi$716 = basics$0StatObject$1.from_T_and_tyname$4357(special_objects$0TyName$1$3.fromList$3273(v$725),v$724);
var v$720 = fix$1109.$build(v$728);
var v$721 = v$720[0];
var v$722 = v$720[1];
return [basis$0List$1.s$n$686(v$725,v$721),basics$0StatObject$1.oo$4792(v$722,phi$716)];
};
};
basics$0ElabTopdec$1$1.build$703 = fix$1109.$build;
basics$0ElabTopdec$1$1.share$729 = function(v$736,v$737){var Ts$734 = basis$0List$1.map$697(function(v$1052){return special_objects$0TyName$1$3.fromList$3273(v$1052);
},basics$0ElabTopdec$1$1.collect_E$528(v$736,null,v$737,null));
var Ts$735 = basis$0List$1.map$697(function(v$1053){return special_objects$0TyName$1$3.list$3264(v$1053);
},basics$0ElabTopdec$1$1.collapse$614(Ts$734,null));
return basics$0ElabTopdec$1$1.build$703(Ts$735);
};
basics$0ElabTopdec$1$1.share$738 = function(v$963,v$964){var Ts$965 = basis$0List$1.map$697(function(v$1054){return special_objects$0TyName$1$3.fromList$3273(v$1054);
},basics$0ElabTopdec$1$1.collect_E$528(v$963,null,v$964,null));
var Ts$966 = basis$0List$1.map$697(function(v$1055){return special_objects$0TyName$1$3.list$3264(v$1055);
},basics$0ElabTopdec$1$1.collapse$614(Ts$965,null));
return basics$0ElabTopdec$1$1.build$703(Ts$966);
};
return 0;
})();