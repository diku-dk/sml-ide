if ((typeof(compiler0$0CompBasisToLamb$1)) == "undefined") {compiler0$0CompBasisToLamb$1 = {};
};
(function(){var debug_man_enrich$69 = tools$0Flags$1$6.lookup_flag_entry$5164("debug_man_enrich");
var quotation$70 = tools$0Flags$1$6.is_on0$5161("quotation");
compiler0$0CompBasisToLamb$1.mk_CompBasis$71 = function(a$74){return a$74;
};
compiler0$0CompBasisToLamb$1.de_CompBasis$75 = function(a$78){return a$78;
};
compiler0$0CompBasisToLamb$1.empty$79 = [compiler0$0EliminateEq$1$4.empty$2674,compiler_objects$0LambdaBasics$1.empty$2899,compiler0$0OptLambda$1$14.empty$19630(0),compiler0$0LambdaStatSem$1.empty$210];
compiler0$0CompBasisToLamb$1.initial$84 = [compiler0$0EliminateEq$1$4.initial$2675,compiler_objects$0LambdaBasics$1.initial$2900,compiler0$0OptLambda$1$14.initial$19631(0),compiler0$0LambdaStatSem$1.initial$256];
compiler0$0CompBasisToLamb$1.plus$89 = function(v$104,v$698){var v$105 = v$104[3];
var v$106 = v$104[0];
var v$107 = v$104[2];
var v$108 = v$104[1];
var v$110 = v$698[3];
var v$111 = v$698[0];
var v$112 = v$698[2];
var v$113 = v$698[1];
var v$100 = compiler0$0LambdaStatSem$1.plus$262(v$105,v$110);
var v$101 = compiler0$0EliminateEq$1$4.plus$2676(v$106,v$111);
var v$102 = compiler0$0OptLambda$1$14.plus$19632(v$107,v$112);
return [v$101,compiler_objects$0LambdaBasics$1.plus$2901([v$108,v$113]),v$102,v$100];
};
compiler0$0CompBasisToLamb$1.layout_CompBasis$114 = function(v$127,v$129,v$128,v$126){var t$709;
var v$124 = [0,"; "];
t$709 = [[compiler0$0EliminateEq$1$4.layout_env$2708(v$127[0],v$127[1],v$127[2]),[compiler0$0OptLambda$1$14.layout_env$19770(v$128[0],v$128[1],v$128[2],v$128[3],v$128[4],v$128[5]),[compiler0$0LambdaStatSem$1.layout_env$590(v$126[0],v$126[1],v$126[2],v$126[3],v$126[4]),[compiler_objects$0LambdaBasics$1.layout$2932(v$129),null]]]],v$124,"}",1,"{"];
return [0,t$709];
};
compiler0$0CompBasisToLamb$1.enrich$163 = function(v$186,v$699){var v$188 = v$186[0];
var v$189 = v$186[2];
var v$190 = v$186[1];
var v$193 = v$699[0];
var v$194 = v$699[2];
var v$195 = v$699[1];
var t$712;
var v$647 = compiler0$0EliminateEq$1$4.enrich$2685(v$188,v$193);
if (debug_man_enrich$69[0]) {v$647?(basis$0TextIO$1.output$110([0],"\nEqEnv: enrich succeeded.")):(basis$0TextIO$1.output$110([0],"\nEqEnv: enrich failed."));
t$712 = v$647;
} else {t$712 = v$647;
};
if (t$712) {var t$711;
if (debug_man_enrich$69[0]) {basis$0TextIO$1.output$110([0],"\nTCEnv: enrich succeeded.");
t$711 = true;
} else {t$711 = true;
};
if (t$711) {var t$710;
var v$667 = compiler0$0OptLambda$1$14.enrich$19721(v$189,v$194);
if (debug_man_enrich$69[0]) {v$667?(basis$0TextIO$1.output$110([0],"\nOEnv: enrich succeeded.")):(basis$0TextIO$1.output$110([0],"\nOEnv: enrich failed."));
t$710 = v$667;
} else {t$710 = v$667;
};
if (t$710) {var v$677 = compiler_objects$0LambdaBasics$1.enrich$2909(v$190,v$195);
if (debug_man_enrich$69[0]) {v$677?(basis$0TextIO$1.output$110([0],"\nNEnv: enrich succeeded.")):(basis$0TextIO$1.output$110([0],"\nNEnv: enrich failed."));
return v$677;
} else {return v$677;
};
} else {return false;
};
} else {return false;
};
} else {return false;
};
};
compiler0$0CompBasisToLamb$1.match$196 = function(v$212,v$700){var v$213 = v$212[3];
var v$214 = v$212[0];
var v$215 = v$212[2];
var v$216 = v$212[1];
var v$219 = v$700[0];
return [compiler0$0EliminateEq$1$4.match$2686(v$214,v$219),v$216,v$215,v$213];
};
compiler0$0CompBasisToLamb$1.restrict$222 = function(v$294,v$701){var v$295 = v$294[0];
var v$296 = v$294[2];
var v$297 = v$294[3];
var v$298 = v$294[1];
var v$300 = v$701[0];
var v$301 = v$701[1];
var v$302 = v$701[2];
var v$303 = v$701[3];
var excons$233 = [compiler_objects$0Excon$1$1.ex_DIV$117,[compiler_objects$0Excon$1$1.ex_MATCH$118,[compiler_objects$0Excon$1$1.ex_BIND$119,[compiler_objects$0Excon$1$1.ex_SUBSCRIPT$122,[compiler_objects$0Excon$1$1.ex_SIZE$123,v$303]]]]];
var cons$234 = [compiler_objects$0Con$1$1.con_NIL$129,[compiler_objects$0Con$1$1.con_CONS$130,[compiler_objects$0Con$1$1.con_TRUE$127,[compiler_objects$0Con$1$1.con_FALSE$128,[compiler_objects$0Con$1$1.con_INTINF$133,v$302]]]]];
var cons$235 = (quotation$70(0))?[compiler_objects$0Con$1$1.con_QUOTE$131,[compiler_objects$0Con$1$1.con_ANTIQUOTE$132,cons$234]]:cons$234;
var tynames$240 = [special_objects$0TyName$1$1.tyName_LIST$272,[special_objects$0TyName$1$1.tyName_INTINF$232,[special_objects$0TyName$1$1.tyName_BOOL$212,[special_objects$0TyName$1$1.tyName_VECTOR$288,[special_objects$0TyName$1$1.tyName_CHARARRAY$292,v$301]]]]];
var tynames$241 = (quotation$70(0))?[special_objects$0TyName$1$1.tyName_FRAG$276,tynames$240]:tynames$240;
var NEnv1$246;
try {NEnv1$246 = (compiler_objects$0LambdaBasics$1.restrict$2902(v$298,v$300));
} catch(v$713) {NEnv1$246 = ((function(x$249){basis$0TextIO$1.output$110([0],"CompBasisToLamb.restrict: Normalize.restrict failed\n");
basis$0TextIO$1.output$110([0],"Normalize environment is:\n");
tools$0PrettyPrint$1.outputTree$1072([function(s$507){return basis$0TextIO$1.output$110([0],s$507);
},compiler_objects$0LambdaBasics$1.layout$2932(v$298),100]);
basis$0TextIO$1.output$110([0],"(end of normalize environment)\n");
throw x$249;
})(v$713));
};
var v$280;
try {v$280 = (compiler0$0EliminateEq$1$4.restrict$2687(v$295,[v$300,tynames$241]));
} catch(v$714) {v$280 = ((function(x$285){basis$0TextIO$1.output$110([0],"CompBasisToLamb.restrict: ElimiateEq.restrict failed\n");
basis$0TextIO$1.output$110([0],"Equality environment is:\n");
tools$0PrettyPrint$1.outputTree$1072([function(s$515){return basis$0TextIO$1.output$110([0],s$515);
},compiler0$0EliminateEq$1$4.layout_env$2708(v$295[0],v$295[1],v$295[2]),100]);
basis$0TextIO$1.output$110([0],"(end of equality environment)\n");
throw x$285;
})(v$714));
};
var v$281 = v$280[0];
var v$282 = v$280[1];
var lvars$261 = basis$0List$1.s$n$686(v$281,v$300);
var v$276 = compiler0$0OptLambda$1$14.restrict$19661(v$296,lvars$261,cons$235,tynames$241);
var v$277 = v$276[0];
var v$278 = v$276[1];
var v$279 = v$276[2];
var tynames$266 = [special_objects$0TyName$1$1.tyName_F64$260,v$279];
return [[v$282,NEnv1$246,v$277,compiler0$0LambdaStatSem$1.restrict$606(v$297,[v$278,excons$233,lvars$261,tynames$266])],lvars$261,tynames$266,v$278,excons$233];
};
var subtractPredefinedCons$304 = function(cons$307){return edlib$0Set$1.list$118(edlib$0Set$1.difference$371(function(a$535){return function(b$536){var v$540 = a$535[0];
var v$541 = b$536[0];
var v$542 = v$540[0][1];
var v$543 = v$541[0][1];
return (v$542[0] == v$543[0])?(v$542[1] == v$543[1]):false;
};
},edlib$0Set$1.fromList$126(function(a$545){return function(b$546){var v$550 = a$545[0];
var v$551 = b$546[0];
var v$552 = v$550[0][1];
var v$553 = v$551[0][1];
return (v$552[0] == v$553[0])?(v$552[1] == v$553[1]):false;
};
},cons$307),edlib$0Set$1.fromList$126(function(a$555){return function(b$556){var v$560 = a$555[0];
var v$561 = b$556[0];
var v$562 = v$560[0][1];
var v$563 = v$561[0][1];
return (v$562[0] == v$563[0])?(v$562[1] == v$563[1]):false;
};
},compiler_objects$0Con$1$1.consPredefined$134)));
};
compiler0$0CompBasisToLamb$1.restrict0$338 = function(v$379,v$702){var v$380 = v$379[0];
var v$381 = v$379[2];
var v$382 = v$379[3];
var v$383 = v$379[1];
var v$385 = v$702[0];
var v$386 = v$702[1];
var v$387 = v$702[2];
var v$388 = v$702[3];
var tynames$349 = special_objects$0TyName$1$3.list$3264(special_objects$0TyName$1$3.difference$3006(special_objects$0TyName$1$3.fromList$3273(v$386),special_objects$0TyName$1$3.fromList$3273(special_objects$0TyName$1$1.tynamesPredefined$304)));
var cons$350 = subtractPredefinedCons$304(v$387);
var excons$351 = edlib$0Set$1.list$118(edlib$0Set$1.difference$371(function(a$611){return function(b$612){var v$616 = a$611[0];
var v$617 = b$612[0];
var v$618 = v$616[0][1];
var v$619 = v$617[0][1];
return (v$618[0] == v$619[0])?(v$618[1] == v$619[1]):false;
};
},edlib$0Set$1.fromList$126(function(a$621){return function(b$622){var v$626 = a$621[0];
var v$627 = b$622[0];
var v$628 = v$626[0][1];
var v$629 = v$627[0][1];
return (v$628[0] == v$629[0])?(v$628[1] == v$629[1]):false;
};
},v$388),edlib$0Set$1.fromList$126(function(a$631){return function(b$632){var v$636 = a$631[0];
var v$637 = b$632[0];
var v$638 = v$636[0][1];
var v$639 = v$637[0][1];
return (v$638[0] == v$639[0])?(v$638[1] == v$639[1]):false;
};
},compiler_objects$0Excon$1$1.exconsPredefined$124)));
var NEnv1$352 = compiler_objects$0LambdaBasics$1.restrict$2902(v$383,v$385);
var v$376 = compiler0$0EliminateEq$1$4.restrict$2687(v$380,[v$385,tynames$349]);
var v$377 = v$376[0];
var v$378 = v$376[1];
var lvars$356 = basis$0List$1.s$n$686(v$377,v$385);
var v$372 = compiler0$0OptLambda$1$14.restrict$19661(v$381,lvars$356,cons$350,tynames$349);
var v$373 = v$372[0];
var v$374 = v$372[1];
var v$375 = v$372[2];
var tynames$361 = special_objects$0TyName$1$3.list$3264(special_objects$0TyName$1$3.difference$3006(special_objects$0TyName$1$3.fromList$3273(v$375),special_objects$0TyName$1$3.fromList$3273(special_objects$0TyName$1$1.tynamesPredefined$304)));
var cons$362 = subtractPredefinedCons$304(v$374);
return [[v$378,NEnv1$352,v$373,compiler0$0LambdaStatSem$1.restrict$606(v$382,[cons$362,excons$351,lvars$356,tynames$361])],lvars$356,tynames$361,cons$362,excons$351];
};
compiler0$0CompBasisToLamb$1.eq$389 = function(v$398,v$399){if (compiler0$0CompBasisToLamb$1.enrich$163(v$398,v$399)) {return compiler0$0CompBasisToLamb$1.enrich$163(v$399,v$398);
} else {return false;
};
};
compiler0$0CompBasisToLamb$1.pu$400 = pickle$0pickle$1.convert$2342([function(v$641){var v$642 = v$641[0];
var v$643 = v$641[1];
var v$644 = v$641[2];
return [v$643,v$644[1],v$644[0],v$642];
},function(v$645){return [v$645[3],v$645[0],[v$645[2],v$645[1]]];
}],pickle$0pickle$1.tup3Gen0$2349(compiler0$0LambdaStatSem$1.pu$710,compiler0$0EliminateEq$1$4.pu$4289,pickle$0pickle$1.pairGen0$983(compiler0$0OptLambda$1$14.pu$19889,compiler_objects$0LambdaBasics$1.pu$2944)));
return 0;
})();
