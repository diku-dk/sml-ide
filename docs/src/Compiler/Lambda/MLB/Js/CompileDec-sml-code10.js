if ((typeof(compiler0$0CompileDec$1$10)) == "undefined") {compiler0$0CompileDec$1$10 = {};
};
(function(){var fix$8188 = {};
fix$8188.$succeed = function(v$8178,v$7086,v$8179,v$8180){if (v$7086 == null) {return [0,v$8179];
} else {var v$7123 = v$7086;
var v$7124 = v$7123[0];
var v$7125 = v$7123[1];
var v$7105 = v$7124[0];
if (v$7105 == null) {if (v$7124[1] == null) {if (v$7124[2] == null) {return fix$8188.$succeed(compiler0$0CompileDec$1$5.norm$4281(v$8178),v$7125,v$8179,v$8180);
} else {return compiler0$0CompileDec$1$1.die$91("succeed");
};
} else {return compiler0$0CompileDec$1$1.die$91("succeed");
};
} else {var v$7109 = v$7124[1];
if (v$7109 == null) {return compiler0$0CompileDec$1$1.die$91("succeed");
} else {var v$7111 = v$7124[2];
if (v$7111 == null) {return compiler0$0CompileDec$1$1.die$91("succeed");
} else {var v$7113 = v$7105;
var v$7114 = v$7113[0];
var v$7115 = v$7113[1];
var v$7116 = v$7109;
var v$7117 = v$7116[0];
var v$7118 = v$7116[1];
var v$7119 = v$7111;
var v$7120 = v$7119[0];
var v$7121 = v$7119[1];
return fix$8188.$match_pat(v$7114,v$7117,v$7120,v$8178,[[v$7115,v$7118,v$7121],v$7125],v$8179,v$8180);
};
};
};
};
};
fix$8188.$match_atpat = function(v$7334,v$7335,v$7336,v$7337,v$7338,v$7339,v$7340){switch (v$7334[0]) { case 0: {var t$8255 = fix$8188.$succeed;
var t$8254;
if (v$7337 == null) {t$8254 = null;
} else {var v$7918 = v$7337;
var v$7919 = v$7918[0];
t$8254 = [[v$7919[0],[v$7336,v$7919[1]]],v$7918[1]];
};
return t$8255(t$8254,v$7338,v$7339,v$7340);
 break; }case 1: {var v$7326 = v$7334[1];
var v$7327 = v$7326[0];
var v$7328 = v$7326[1];
var tau$7325 = compiler0$0CompileDec$1$1.typeScon$923(v$7327);
return fix$8188.$match_con([1,[v$7328,tau$7325]],null,[v$7335,v$7336,v$7337,v$7338,v$7339,v$7340]);
 break; }case 4: {var v$7319 = v$7334[1];
var v$7320 = v$7319[0];
var v$7303 = compiler0$0CompileDec$1$1.to_TypeInfo$494(v$7320);
switch (v$7303[0]) { case 0: {var v$7305 = v$7303[1];
switch (v$7305[0]) { case 0: {var t$8253 = fix$8188.$succeed;
var t$8252;
if (v$7337 == null) {t$8252 = null;
} else {var v$7922 = v$7337;
var v$7923 = v$7922[0];
t$8252 = [[v$7923[0],[v$7336,v$7923[1]]],v$7922[1]];
};
return t$8253(t$8252,v$7338,v$7339,v$7340);
 break; }case 18: {var v$7314 = v$7305[1];
var v$7315 = v$7314[3];
var v$7316 = v$7314[2];
return fix$8188.$match_con([3,[v$7320,v$7316,true,compiler0$0CompileDec$1$2.span_from_int$1937(v$7315)]],null,[v$7335,v$7336,v$7337,v$7338,v$7339,v$7340]);
 break; }case 15: {var v$7307 = v$7305[1];
var v$7308 = v$7307[1];
return fix$8188.$match_con([2,[v$7308,true]],null,[v$7335,v$7336,v$7337,v$7338,v$7339,v$7340]);
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat (LONGIDatpat ...)");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat (LONGIDatpat ...)");
} };
 break; }case 2: {var v$7288 = v$7334[1];
var v$7290 = v$7288[1];
var patrows$7241;
switch (v$7290[0]) { case 1: {patrows$7241 = null;
 break; }default: {var v$7255 = v$7290[1];
patrows$7241 = (compiler0$0CompileDec$1$1.makeList$505(function(v$7251){switch (v$7251[0]) { case 0: {return v$7251[1][3];
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat: DOTDOTDOT");
} };
},v$7255));
} };
var argpats$7256 = basis$0List$1.map$697(function(v$7262){switch (v$7262[0]) { case 0: {var v$7276 = v$7262[1];
var v$7277 = v$7276[0];
var v$7278 = v$7276[2];
var v$7269 = compiler0$0CompileDec$1$1.to_TypeInfo$494(v$7277);
switch (v$7269[0]) { case 0: {var v$7271 = v$7269[1];
switch (v$7271[0]) { case 10: {return [v$7271[1][0],v$7278];
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat: RECORDatpat info");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat: RECORDatpat info");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_atpat: RECORDatpat patrow");
} };
},patrows$7241);
var argpats$7279 = edlib$0ListSort$1.sort$54(function(v$7282){var v$7287 = v$7282[0];
return function(v$7285){return v$7287 < v$7285[0];
};
},argpats$7256);
var t$8251 = fix$8188.$match_con;
var t$8250;
var t$8249;
var t$8248;
var fix$8245 = {};
fix$8245.$acc = function(v$7930,v$7931){lab$acc: while (true) {if (v$7930 == null) {return v$7931;
} else {var v$7932 = v$7930;
var v$7933 = v$7932[1];
var t$8246 = v$7933;
var t$8247 = SmlPrims.chk_ovf_i32(v$7931 + 1);
var v$7930 = t$8246;
var v$7931 = t$8247;
continue lab$acc;
};
};
};
var acc$7929 = fix$8245.$acc;
t$8248 = (acc$7929(argpats$7279,0));
t$8249 = [t$8248];
t$8250 = [0,t$8249];
return t$8251(t$8250,argpats$7279,[v$7335,v$7336,v$7337,v$7338,v$7339,v$7340]);
 break; }default: {var v$7331 = v$7334[1];
var v$7333 = v$7331[1];
return fix$8188.$match_pat(v$7333,v$7335,v$7336,v$7337,v$7338,v$7339,v$7340);
} };
};
fix$8188.$match_pat = function(v$7205,v$7206,v$7207,v$7208,v$7209,v$7210,v$7211){switch (v$7205[0]) { case 4: {var v$7202 = v$7205[1];
var v$7204 = v$7202[1];
return fix$8188.$match_atpat(v$7204,v$7206,v$7207,v$7208,v$7209,v$7210,v$7211);
 break; }case 3: {var v$7197 = v$7205[1];
var v$7198 = v$7197[0];
var v$7200 = v$7197[2];
var v$7182 = compiler0$0CompileDec$1$1.to_TypeInfo$494(v$7198);
switch (v$7182[0]) { case 0: {var v$7184 = v$7182[1];
switch (v$7184[0]) { case 18: {var v$7193 = v$7184[1];
var v$7194 = v$7193[3];
var v$7195 = v$7193[2];
return fix$8188.$match_con([3,[v$7198,v$7195,false,compiler0$0CompileDec$1$2.span_from_int$1937(v$7194)]],[[0,[4,[basics$0PostElabGrammar$1$2.bogus_info$162,v$7200]]],null],[v$7206,v$7207,v$7208,v$7209,v$7210,v$7211]);
 break; }case 15: {var v$7186 = v$7184[1];
var v$7187 = v$7186[1];
return fix$8188.$match_con([2,[v$7187,false]],[[0,[4,[basics$0PostElabGrammar$1$2.bogus_info$162,v$7200]]],null],[v$7206,v$7207,v$7208,v$7209,v$7210,v$7211]);
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_pat (CONSpat ...)");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_pat (CONSpat ...)");
} };
 break; }case 1: {var v$7168 = v$7205[1];
var v$7170 = v$7168[1];
return fix$8188.$match_pat(v$7170,v$7206,v$7207,v$7208,v$7209,v$7210,v$7211);
 break; }case 2: {var v$7160 = v$7205[1];
var v$7166 = v$7160[3];
return fix$8188.$match_pat(v$7166,v$7206,v$7207,v$7208,v$7209,v$7210,v$7211);
 break; }default: {return compiler0$0CompileDec$1$1.die$91("match_pat (UNRES_INFIXpat ...)");
} };
};
fix$8188.$fail = function(v$8177,v$7063){if (v$7063 == null) {return compiler0$0CompileDec$1$9.fail_edge$6960(0);
} else {var v$7066 = v$7063;
var v$7067 = v$7066[0];
var v$7068 = v$7067[0];
var v$7069 = v$7067[1];
var v$7070 = v$7066[1];
return fix$8188.$match_pat(v$7068,null,v$8177,null,null,v$7069,v$7070);
};
};
fix$8188.$match_con = function(pcon$7343,argpats$7346,v$7354){var v$7403 = v$7354[0];
var v$7404 = v$7354[1];
var v$7405 = v$7354[2];
var v$7406 = v$7354[3];
var v$7407 = v$7354[4];
var v$7408 = v$7354[5];
switch (compiler0$0CompileDec$1$5.staticmatch$4335(pcon$7343,v$7404)) { case 0: {var t$8236 = fix$8188.$succeed;
var t$8235 = [[pcon$7343,null],v$7405];
var t$8234;
var t$8233;
var t$8232;
var t$8231 = basis$0List$1.map$697(function(v$7903){return v$7903[1];
},argpats$7346);
var t$8230 = basis$0List$1.map$697(function(v$7904){return [v$7904[0],pcon$7343,v$7403];
},argpats$7346);
var t$8229;
switch (v$7404[0]) { case 1: {t$8229 = (basis$0List$1.map$697(function(v$7906){return [1,compiler0$0CompileDec$1$5.empty$4217];
},argpats$7346));
 break; }default: {t$8229 = v$7404[1][1];
} };
t$8232 = [t$8231,t$8230,t$8229];
t$8233 = [t$8232,v$7406];
t$8234 = t$8233;
return t$8236(t$8235,t$8234,v$7407,v$7408);
 break; }case 1: {return fix$8188.$fail(compiler0$0CompileDec$1$5.buildtermd$4298(v$7405,v$7404,v$7406),v$7408);
 break; }default: {var left$7397;
var t$8244 = fix$8188.$succeed;
var t$8243 = [[pcon$7343,null],v$7405];
var t$8242;
var t$8241;
var t$8240;
var t$8239 = basis$0List$1.map$697(function(v$7909){return v$7909[1];
},argpats$7346);
var t$8238 = basis$0List$1.map$697(function(v$7910){return [v$7910[0],pcon$7343,v$7403];
},argpats$7346);
var t$8237;
switch (v$7404[0]) { case 1: {t$8237 = (basis$0List$1.map$697(function(v$7912){return [1,compiler0$0CompileDec$1$5.empty$4217];
},argpats$7346));
 break; }default: {t$8237 = v$7404[1][1];
} };
t$8240 = [t$8239,t$8238,t$8237];
t$8241 = [t$8240,v$7406];
t$8242 = t$8241;
left$7397 = (t$8244(t$8243,t$8242,v$7407,v$7408));
var right$7398;
var newtermd$7913 = compiler0$0CompileDec$1$5.addneg$4245(v$7404,pcon$7343);
right$7398 = (fix$8188.$fail(compiler0$0CompileDec$1$5.buildtermd$4298(v$7405,newtermd$7913,v$7406),v$7408));
return (compiler0$0CompileDec$1$5.edge_eq$4445([left$7397,right$7398]))?left$7397:[0,compiler0$0CompileDec$1$9.ifeq_node$6949([v$7403,pcon$7343,left$7397,right$7398])];
} };
};
compiler0$0CompileDec$1$10.succeed$7049 = fix$8188.$succeed;
compiler0$0CompileDec$1$10.match_atpat$7047 = fix$8188.$match_atpat;
compiler0$0CompileDec$1$10.match_pat$7048 = fix$8188.$match_pat;
compiler0$0CompileDec$1$10.fail$7050 = fix$8188.$fail;
compiler0$0CompileDec$1$10.match_con$7046 = fix$8188.$match_con;
compiler0$0CompileDec$1$10.env_from$7409 = function(declarations_to_be_made$7412){var fix$8189 = {};
fix$8189.$foldl = function(v$7942,v$7943){lab$foldl: while (true) {if (v$7943 == null) {return v$7942;
} else {var v$7944 = v$7943;
var v$7945 = v$7944[0];
var v$7946 = v$7944[1];
var t$8190;
var v$8126 = v$7945[0];
var v$8127 = v$7945[1];
var v$8128 = v$8127[0];
var v$8129 = v$8127[1];
var v$8130 = v$8127[2];
t$8190 = (compiler_objects$0CompilerEnv$1$7.declareVar$4780(v$8126,[v$8128,v$8129,v$8130],v$7942));
var t$8191 = t$8190;
var t$8192 = v$7946;
var v$7942 = t$8191;
var v$7943 = t$8192;
continue lab$foldl;
};
};
};
var foldl$7941 = fix$8189.$foldl;
return foldl$7941(compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647,declarations_to_be_made$7412);
};
compiler0$0CompileDec$1$10.pr_tau$7429 = function(tau$7432){return tools$0PrettyPrint$1.flatten1$389(compiler_objects$0LambdaExp$1$4.layoutType$2999(tau$7432));
};
compiler0$0CompileDec$1$10.pr_il$7433 = function(il$7436){var fix$8193 = {};
fix$8193.$pr_l = function(v$7954){if (v$7954 == null) {return "";
} else {var v$7955 = v$7954;
var v$7956 = v$7955[1];
if (v$7956 == null) {var v$7961 = v$7955[0];
return tools$0PrettyPrint$1.flatten1$389(compiler_objects$0LambdaExp$1$4.layoutType$2999(v$7961));
} else {var v$7957 = v$7955[0];
var v$7958 = v$7956;
var v$7959 = v$7958[0];
var v$7960 = v$7958[1];
return ((tools$0PrettyPrint$1.flatten1$389(compiler_objects$0LambdaExp$1$4.layoutType$2999(v$7957))) + ",") + (fix$8193.$pr_l([v$7959,v$7960]));
};
};
};
var pr_l$7953 = fix$8193.$pr_l;
return ("[" + (pr_l$7953(il$7436))) + "]";
};
var fix$8194 = {};
fix$8194.$compile_path = function(env$7441,obj$7444,path$7447){var v$7453 = compiler0$0CompileDec$1$2.lookupPath$2291(env$7441,path$7447);
switch (v$7453[0]) { case 0: {var v$7461 = v$7453[1];
return [function(x$7457){return x$7457;
},[1,[null,v$7461[0],null]],v$7461[1],compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647];
 break; }default: {return fix$8194.$compile_path0(env$7441,obj$7444,path$7447);
} };
};
fix$8194.$compile_path0 = function(v$7466,v$7469,v$7472){var Excon_n2$7507 = function(obj$7739){var v$7636 = v$7472;
var v$7637 = v$7636[1];
switch (v$7637[0]) { case 2: {var v$7733 = v$7637[1];
var v$7734 = v$7733[0];
var v$7735 = v$7636[2];
var v$7726 = fix$8194.$compile_path(v$7466,v$7469,v$7735);
var v$7727 = v$7726[0];
var v$7728 = v$7726[1];
var v$7729 = v$7726[3];
var v$7723 = compiler0$0CompileDec$1$1.lookupLongexcon$180(v$7466,v$7734,[0,"compile_path"]);
var v$7724 = v$7723[0];
var v$7725 = v$7723[1];
var t$8228 = v$7727;
var t$8227 = [10,[[12,v$7724],[v$7728,null]]];
var t$8226;
switch (v$7725[0]) { case 3: {var v$7716 = v$7725[1];
var v$7717 = v$7716[0];
if (v$7717 == null) {t$8226 = (compiler0$0CompileDec$1$1.die$91("Unary exconstructor does not have well-formed arrow-type"));
} else {var v$7719 = v$7717;
t$8226 = ((v$7719[1] == null)?v$7719[0]:(compiler0$0CompileDec$1$1.die$91("Unary exconstructor does not have well-formed arrow-type")));
};
 break; }default: {t$8226 = (compiler0$0CompileDec$1$1.die$91("Unary exconstructor does not have well-formed arrow-type"));
} };
return [t$8228,t$8227,t$8226,v$7729];
 break; }case 0: {var v$7694 = v$7469[0];
var v$7695 = v$7636[0];
var v$7696 = v$7637[1];
var v$7697 = v$7696[0];
var v$7698 = v$7636[2];
if ((0 <= v$7695)?(v$7695 < v$7697):false) {var v$7683 = fix$8194.$compile_path(v$7466,v$7469,v$7698);
var v$7684 = v$7683[0];
var v$7685 = v$7683[1];
var v$7686 = v$7683[2];
var v$7687 = v$7683[3];
var tau$7648;
switch (v$7686[0]) { case 1: {var v$7659 = v$7686[1];
var t$8225;
var t$8224;
var fix$8221 = {};
fix$8221.$acc = function(v$7972,v$7973){lab$acc: while (true) {if (v$7972 == null) {return v$7973;
} else {var v$7974 = v$7972;
var v$7975 = v$7974[1];
var t$8222 = v$7975;
var t$8223 = SmlPrims.chk_ovf_i32(v$7973 + 1);
var v$7972 = t$8222;
var v$7973 = t$8223;
continue lab$acc;
};
};
};
var acc$7971 = fix$8221.$acc;
t$8224 = (acc$7971(v$7659,0));
t$8225 = (t$8224 == v$7697);
if (t$8225) {var fix$8218 = {};
fix$8218.$h = function(v$7980,v$7981){lab$h: while (true) {if (v$7980 == null) {throw CompilerInitial.exn$Subscript$52;
} else {var v$7982 = v$7980;
var v$7983 = v$7982[0];
var v$7984 = v$7982[1];
if (v$7981 == 0) {return v$7983;
} else {var t$8219 = v$7984;
var t$8220 = SmlPrims.chk_ovf_i32(v$7981 - 1);
var v$7980 = t$8219;
var v$7981 = t$8220;
continue lab$h;
};
};
};
};
var h$7979 = fix$8218.$h;
if (v$7695 < 0) {throw CompilerInitial.exn$Subscript$52;
} else {tau$7648 = (h$7979(v$7659,v$7695));
};
} else {tau$7648 = (compiler0$0CompileDec$1$1.die$91("Wrong record arity"));
};
 break; }default: {tau$7648 = (compiler0$0CompileDec$1$1.die$91("compile_path0.RECORDtype expected. Type is " + (tools$0PrettyPrint$1.flatten1$389(compiler_objects$0LambdaExp$1$4.layoutType$2999(v$7686)))));
} };
var select$7660 = [10,[[1,v$7695],[v$7685,null]]];
switch (v$7694[0]) { case 1: {var v$7667 = v$7694[1];
if (v$7667[0] == null) {var lvar$7992 = compiler_objects$0Lvars$1$1.newLvar$75(0);
var env$$$7993 = compiler0$0CompileDec$1$2.declarePath$2298(v$7472,lvar$7992,tau$7648,compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647);
return [function(x$7998){return v$7684([12,[select$7660,[[lvar$7992,null,tau$7648],null],x$7998]]);
},[1,[null,lvar$7992,null]],tau$7648,compiler_objects$0CompilerEnv$1$7.plus$4919(v$7687,env$$$7993)];
} else {return [v$7684,select$7660,tau$7648,v$7687];
};
 break; }default: {var lvar$8000 = compiler_objects$0Lvars$1$1.newLvar$75(0);
var env$$$8001 = compiler0$0CompileDec$1$2.declarePath$2298(v$7472,lvar$8000,tau$7648,compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647);
return [function(x$8006){return v$7684([12,[select$7660,[[lvar$8000,null,tau$7648],null],x$8006]]);
},[1,[null,lvar$8000,null]],tau$7648,compiler_objects$0CompilerEnv$1$7.plus$4919(v$7687,env$$$8001)];
} };
} else {return compiler0$0CompileDec$1$1.die$91("compile_path: i's range");
};
 break; }default: {return compiler0$0CompileDec$1$1.die$91("compile_path: scon");
} };
};
if (v$7472 == null) {return [function(x$7516){return x$7516;
},v$7469[0],v$7469[1],compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647];
} else {var v$7521 = v$7472;
switch (v$7521[0]) { case 0: {var v$7523 = v$7521[1];
switch (v$7523[0]) { case 3: {var v$7631 = v$7469[0];
var v$7632 = v$7523[1];
var v$7633 = v$7632[0];
var v$7634 = v$7521[2];
var v$7531 = compiler0$0CompileDec$1$1.to_TypeInfo$494(v$7633);
switch (v$7531[0]) { case 0: {var v$7533 = v$7531[1];
switch (v$7533[0]) { case 18: {var v$7625 = v$7533[1];
var v$7626 = v$7625[2];
var v$7627 = v$7625[1];
var v$7544 = compiler0$0CompileDec$1$1.lookupLongid$226(v$7466,v$7626,[1,v$7633]);
switch (v$7544[0]) { case 17: {var v$7620 = v$7544[1];
var v$7621 = v$7620[0];
var v$7622 = v$7620[1];
var v$7623 = v$7620[2];
var lv_opt$7566 = compiler0$0CompileDec$1$2.lookupLvarDecon$2267(v$7466,v$7634);
var il$$7567 = basis$0List$1.map$697(function(v$8187){return compiler0$0CompileDec$1$1.compileType$707(v$8187);
},v$7627);
var v$7615 = fix$8194.$compile_path(v$7466,v$7469,v$7634);
var v$7616 = v$7615[0];
var v$7617 = v$7615[1];
var v$7619 = v$7615[3];
var tau$7573;
switch (v$7623[0]) { case 3: {var v$7582 = v$7623[1];
var v$7583 = v$7582[0];
if (v$7583 == null) {tau$7573 = (compiler0$0CompileDec$1$1.die$91("Unary constructor does not have well-formed arrow-type"));
} else {var v$7585 = v$7583;
if (v$7585[1] == null) {var v$7590 = v$7585[0];
var S$7587 = (compiler0$0CompileDec$1$1.mk_subst$803(function(v$7589){return "compile_path0.con";
}))([v$7622,il$$7567]);
tau$7573 = (compiler0$0CompileDec$1$1.on_Type$785(S$7587,v$7590));
} else {tau$7573 = (compiler0$0CompileDec$1$1.die$91("Unary constructor does not have well-formed arrow-type"));
};
};
 break; }default: {tau$7573 = (compiler0$0CompileDec$1$1.die$91("Unary constructor does not have well-formed arrow-type"));
} };
var decon$7592 = [10,[[13,[v$7621,il$$7567,lv_opt$7566]],[v$7617,null]]];
switch (v$7631[0]) { case 1: {var v$7599 = v$7631[1];
if (v$7599[0] == null) {var lvar$8016 = compiler_objects$0Lvars$1$1.newLvar$75(0);
var env$$$8017 = compiler0$0CompileDec$1$2.declarePath$2298(v$7472,lvar$8016,tau$7573,compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647);
return [function(x$8022){return v$7616([12,[decon$7592,[[lvar$8016,null,tau$7573],null],x$8022]]);
},[1,[null,lvar$8016,null]],tau$7573,compiler_objects$0CompilerEnv$1$7.plus$4919(v$7619,env$$$8017)];
} else {return [v$7616,decon$7592,tau$7573,v$7619];
};
 break; }default: {var lvar$8024 = compiler_objects$0Lvars$1$1.newLvar$75(0);
var env$$$8025 = compiler0$0CompileDec$1$2.declarePath$2298(v$7472,lvar$8024,tau$7573,compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647);
return [function(x$8030){return v$7616([12,[decon$7592,[[lvar$8024,null,tau$7573],null],x$8030]]);
},[1,[null,lvar$8024,null]],tau$7573,compiler_objects$0CompilerEnv$1$7.plus$4919(v$7619,env$$$8025)];
} };
 break; }case 1: {if (v$7627 == null) {return compiler0$0CompileDec$1$1.die$91("compile_path: ref instances");
} else {var v$7552 = v$7627;
if (v$7552[1] == null) {var v$7563 = v$7552[0];
var v$7559 = fix$8194.$compile_path(v$7466,v$7469,v$7634);
var v$7560 = v$7559[0];
var v$7561 = v$7559[1];
var v$7562 = v$7559[3];
var tau$7558 = compiler0$0CompileDec$1$1.compileType$707(v$7563);
return [v$7560,[10,[[11,[[2,[[tau$7558,null],special_objects$0TyName$1$1.tyName_REF$280]]]],[v$7561,null]]],tau$7558,v$7562];
} else {return compiler0$0CompileDec$1$1.die$91("compile_path: ref instances");
};
};
 break; }default: {return compiler0$0CompileDec$1$1.die$91("compile_path: Con, longid");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("compile_path: Con, info");
} };
 break; }default: {return compiler0$0CompileDec$1$1.die$91("compile_path: Con, info");
} };
 break; }default: {return Excon_n2$7507(0);
} };
 break; }default: {switch (v$7521[1][0]) { case 3: {return compiler0$0CompileDec$1$1.die$91("compile_path: _, Con _");
 break; }default: {return Excon_n2$7507(0);
} };
} };
};
};
compiler0$0CompileDec$1$10.compile_path$7438 = fix$8194.$compile_path;
compiler0$0CompileDec$1$10.compile_path0$7437 = fix$8194.$compile_path0;
compiler0$0CompileDec$1$10.mk_declarations_to_be_made$7745 = function(declarations_to_be_made$7769,obj$7772,e$7775,env$7778){var v$7783;
var b$8036 = [function(x$7871){return x$7871;
},e$7775,env$7778];
var fix$8195 = {};
fix$8195.$foldl = function(v$8039,v$8040){lab$foldl: while (true) {if (v$8040 == null) {return v$8039;
} else {var v$8041 = v$8040;
var v$8042 = v$8041[0];
var v$8043 = v$8041[1];
var t$8196;
var v$8144 = v$8042[1];
var v$8145 = v$8144[0];
var v$8146 = v$8144[1];
var v$8147 = v$8144[2];
var v$8148 = v$8042[2];
var v$8150 = v$8039[0];
var v$8151 = v$8039[1];
var v$8152 = v$8039[2];
var v$8153 = obj$7772[0];
var obj$8154;
switch (v$8153[0]) { case 1: {var v$8155 = v$8153[1];
var v$8156 = v$8155[1];
var v$8157 = v$8155[0];
var v$8158 = v$8155[2];
var v$8159 = obj$7772[1];
obj$8154 = [[1,[basis$0List$1.map$697((function(env$8199){return function(v$8160){var v$8197 = env$8199[0];
var v$8198 = env$8199[1];
switch (v$8160[0]) { case 0: {var v$8161 = v$8160[1];
var t$8202;
var fix$8200 = {};
fix$8200.$exists = function(v$8163){lab$exists: while (true) {if (v$8163 == null) {return false;
} else {var v$8164 = v$8163;
var v$8165 = v$8164[0];
var v$8166 = v$8164[1];
if (v$8161 == v$8165) {return true;
} else {var t$8201 = v$8166;
var v$8163 = t$8201;
continue lab$exists;
};
};
};
};
var exists$8162 = fix$8200.$exists;
t$8202 = (exists$8162(v$8198));
if (t$8202) {return v$8160;
} else {return v$8197(0);
};
 break; }default: {return v$8160;
} };
};
})([compiler_objects$0LambdaExp$1$4.intDefaultType$1700,v$8146]),v$8157),v$8156,v$8158]],v$8159];
 break; }default: {obj$8154 = (compiler0$0CompileDec$1$1.die$91("mk_declarations_to_be_made.skip0"));
} };
var v$8167 = compiler0$0CompileDec$1$10.compile_path$7438(v$8152,obj$8154,v$8148);
var v$8168 = v$8167[0];
var v$8169 = v$8167[1];
var v$8170 = v$8167[3];
if (v$8146 == null) {t$8196 = [(function(env$8205){return function(x$8171){var v$8203 = env$8205[0];
var v$8204 = env$8205[1];
return v$8204(v$8203(x$8171));
};
})([v$8168,v$8150]),[12,[v$8169,[[v$8145,v$8146,v$8147],null],v$8151]],compiler_objects$0CompilerEnv$1$7.plus$4919(v$8152,v$8170)];
} else {var t$8208 = v$8150;
var t$8207;
var t$8206;
var v$8172 = [[v$8145,v$8146,v$8147],null];
t$8206 = [v$8168(v$8169),v$8172,v$8151];
t$8207 = [12,t$8206];
t$8196 = [t$8208,t$8207,v$8152];
};
var t$8209 = t$8196;
var t$8210 = v$8043;
var v$8039 = t$8209;
var v$8040 = t$8210;
continue lab$foldl;
};
};
};
var foldl$8038 = fix$8195.$foldl;
v$7783 = (foldl$8038(b$8036,declarations_to_be_made$7769));
var v$7784 = v$7783[0];
var v$7785 = v$7783[1];
return v$7784(v$7785);
};
compiler0$0CompileDec$1$10.compile_rhs$$7746 = function(compile_no$7749,obj$7752,env$7755,rhs$$7758){var v$7765 = rhs$$7758[0];
var v$7766 = rhs$$7758[1];
var env_rhs$7762;
var t$8217 = compiler_objects$0CompilerEnv$1$7.plus$4919;
var t$8216 = env$7755;
var t$8215;
var fix$8211 = {};
fix$8211.$foldl = function(v$8084,v$8085){lab$foldl: while (true) {if (v$8085 == null) {return v$8084;
} else {var v$8086 = v$8085;
var v$8087 = v$8086[0];
var v$8088 = v$8086[1];
var t$8212;
var v$8091 = v$8087[0];
var v$8092 = v$8087[1];
var v$8093 = v$8092[0];
var v$8094 = v$8092[1];
var v$8095 = v$8092[2];
t$8212 = (compiler_objects$0CompilerEnv$1$7.declareVar$4780(v$8091,[v$8093,v$8094,v$8095],v$8084));
var t$8213 = t$8212;
var t$8214 = v$8088;
var v$8084 = t$8213;
var v$8085 = t$8214;
continue lab$foldl;
};
};
};
var foldl$8083 = fix$8211.$foldl;
t$8215 = (foldl$8083(compiler_objects$0CompilerEnv$1$7.emptyCEnv$4647,v$7765));
env_rhs$7762 = (t$8217(t$8216,t$8215));
var lexp$7763 = compile_no$7749([v$7766,env_rhs$7762]);
return compiler0$0CompileDec$1$10.mk_declarations_to_be_made$7745(v$7765,obj$7752,lexp$7763,env$7755);
};
return 0;
})();
