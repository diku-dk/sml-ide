if ((typeof(compiler0$0CompileDec$1$4)) == "undefined") {compiler0$0CompileDec$1$4 = {};
};
(function(){compiler0$0CompileDec$1$4.eq_bal$3701 = function(v$3703,v$3704){switch (v$3703) { case 0: {switch (v$3704) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3704) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3704) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler0$0CompileDec$1$4.s$j$2809 = function(v$2814,v$2815){return compiler0$0CompileDec$1$3.lt$2769(v$2814,v$2815);
};
compiler0$0CompileDec$1$4.s$kk$2816 = function(v$2825,v$2826){return ((compiler0$0CompileDec$1$3.lt$2769(v$2825,v$2826))?true:(compiler0$0CompileDec$1$3.lt$2769(v$2826,v$2825)))?false:true;
};
compiler0$0CompileDec$1$4.en$Impossible$2827 = new String("Impossible");
compiler0$0CompileDec$1$4.impossible$2828 = function(s$2831){var s$2832 = "Impossible.OrderSet." + s$2831;
basis$0General$1.print$163(s$2832);
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,s$2832];
};
compiler0$0CompileDec$1$4.empty$2840 = null;
compiler0$0CompileDec$1$4.singleton$2841 = function(i$2844){return [i$2844,null,null,2];
};
var fix$4075 = {};
fix$4075.$size = function(v$2848){if (v$2848 == null) {return 0;
} else {var v$2855 = v$2848;
var v$2856 = v$2855[1];
var v$2857 = v$2855[2];
return SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(1 + (fix$4075.$size(v$2856)))) + (fix$4075.$size(v$2857)));
};
};
compiler0$0CompileDec$1$4.size$2845 = fix$4075.$size;
compiler0$0CompileDec$1$4.isEmpty$2858 = function(v$2861){return (v$2861 == null)?true:false;
};
compiler0$0CompileDec$1$4.member$2866 = function(i$2869,s$2872){var fix$4076 = {};
fix$4076.$search = function(v$2876){lab$search: while (true) {if (v$2876 == null) {return false;
} else {var v$2892 = v$2876;
var v$2893 = v$2892[0];
var v$2894 = v$2892[1];
var v$2895 = v$2892[2];
if (((compiler0$0CompileDec$1$3.lt$2769(i$2869,v$2893))?true:(compiler0$0CompileDec$1$3.lt$2769(v$2893,i$2869)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2769(i$2869,v$2893)) {var t$4077 = v$2894;
var v$2876 = t$4077;
continue lab$search;
} else {var t$4078 = v$2895;
var v$2876 = t$4078;
continue lab$search;
};
};
};
};
};
var search$2873 = fix$4076.$search;
return search$2873(s$2872);
};
compiler0$0CompileDec$1$4.eq$2896 = function(s1$2899,s2$2902){if ((compiler0$0CompileDec$1$4.size$2845(s1$2899)) == (compiler0$0CompileDec$1$4.size$2845(s2$2902))) {var fix$4079 = {};
fix$4079.$eq$ = function(v$2910){lab$eq$: while (true) {if (v$2910 == null) {return true;
} else {var v$2926 = v$2910;
var v$2927 = v$2926[0];
var v$2928 = v$2926[1];
var v$2929 = v$2926[2];
var t$4083;
var fix$4080 = {};
fix$4080.$search = function(v$4000){lab$search: while (true) {if (v$4000 == null) {return false;
} else {var v$4001 = v$4000;
var v$4002 = v$4001[0];
var v$4003 = v$4001[1];
var v$4004 = v$4001[2];
if (((compiler0$0CompileDec$1$3.lt$2769(v$2927,v$4002))?true:(compiler0$0CompileDec$1$3.lt$2769(v$4002,v$2927)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2769(v$2927,v$4002)) {var t$4081 = v$4003;
var v$4000 = t$4081;
continue lab$search;
} else {var t$4082 = v$4004;
var v$4000 = t$4082;
continue lab$search;
};
};
};
};
};
var search$3999 = fix$4080.$search;
t$4083 = (search$3999(s2$2902));
if (t$4083) {if (fix$4079.$eq$(v$2928)) {var t$4084 = v$2929;
var v$2910 = t$4084;
continue lab$eq$;
} else {return false;
};
} else {return false;
};
};
};
};
var eq$$2907 = fix$4079.$eq$;
return eq$$2907(s1$2899);
} else {return false;
};
};
compiler0$0CompileDec$1$4.en$ALREADYTHERE$2930 = new String("ALREADYTHERE");
compiler0$0CompileDec$1$4.exn$ALREADYTHERE$2930 = [compiler0$0CompileDec$1$4.en$ALREADYTHERE$2930];
compiler0$0CompileDec$1$4.insert$2931 = function(k0$2934,t$2937){var fix$4085 = {};
fix$4085.$ins = function(v$2941){if (v$2941 == null) {return [true,[k0$2934,null,null,2]];
} else {var v$3094 = v$2941;
var v$3095 = v$3094[0];
var v$3096 = v$3094[1];
var v$3097 = v$3094[2];
var v$3098 = v$3094[3];
if (((compiler0$0CompileDec$1$3.lt$2769(k0$2934,v$3095))?true:(compiler0$0CompileDec$1$3.lt$2769(v$3095,k0$2934)))?false:true) {throw compiler0$0CompileDec$1$4.exn$ALREADYTHERE$2930;
} else {if (compiler0$0CompileDec$1$3.lt$2769(k0$2934,v$3095)) {var v$3023 = fix$4085.$ins(v$3096);
var v$3024 = v$3023[0];
var v$3025 = v$3023[1];
switch (v$3098) { case 2: {return v$3024?[true,[v$3095,v$3025,v$3097,1]]:[false,[v$3095,v$3025,v$3097,2]];
 break; }case 0: {return v$3024?[false,[v$3095,v$3025,v$3097,2]]:[false,[v$3095,v$3025,v$3097,0]];
 break; }default: {if (v$3024) {var v$3011;
if (v$3025 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree01!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree01!"];
} else {v$3011 = v$3025;
};
var v$3012 = v$3011[0];
var v$3013 = v$3011[1];
var v$3014 = v$3011[2];
var v$3015 = v$3011[3];
var t$4088;
var v$3930 = 1;
switch (v$3015) { case 0: {switch (v$3930) { case 0: {t$4088 = true;
 break; }default: {t$4088 = false;
} };
 break; }case 1: {switch (v$3930) { case 1: {t$4088 = true;
 break; }default: {t$4088 = false;
} };
 break; }case 2: {switch (v$3930) { case 2: {t$4088 = true;
 break; }default: {t$4088 = false;
} };
 break; } };
if (t$4088) {return [false,[v$3012,v$3013,[v$3095,v$3014,v$3097,2],2]];
} else {var v$2999;
if (v$3014 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree02!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree02!"];
} else {v$2999 = v$3014;
};
var v$3000 = v$2999[0];
var v$3001 = v$2999[1];
var v$3002 = v$2999[2];
var v$3003 = v$2999[3];
var t$4106 = false;
var t$4105;
var t$4104;
var t$4103 = v$3000;
var t$4102;
var t$4101;
var t$4100 = v$3012;
var t$4099 = v$3013;
var t$4098 = v$3001;
var t$4097;
var t$4096;
var v$3934 = 0;
switch (v$3003) { case 0: {switch (v$3934) { case 0: {t$4096 = true;
 break; }default: {t$4096 = false;
} };
 break; }case 1: {switch (v$3934) { case 1: {t$4096 = true;
 break; }default: {t$4096 = false;
} };
 break; }case 2: {switch (v$3934) { case 2: {t$4096 = true;
 break; }default: {t$4096 = false;
} };
 break; } };
t$4097 = (t$4096?1:2);
t$4101 = [t$4100,t$4099,t$4098,t$4097];
t$4102 = t$4101;
var t$4095;
var t$4094;
var t$4093 = v$3095;
var t$4092 = v$3002;
var t$4091 = v$3097;
var t$4090;
var t$4089;
var v$3936 = 1;
switch (v$3003) { case 0: {switch (v$3936) { case 0: {t$4089 = true;
 break; }default: {t$4089 = false;
} };
 break; }case 1: {switch (v$3936) { case 1: {t$4089 = true;
 break; }default: {t$4089 = false;
} };
 break; }case 2: {switch (v$3936) { case 2: {t$4089 = true;
 break; }default: {t$4089 = false;
} };
 break; } };
t$4090 = (t$4089?0:2);
t$4094 = [t$4093,t$4092,t$4091,t$4090];
t$4095 = t$4094;
t$4104 = [t$4103,t$4102,t$4095,2];
t$4105 = t$4104;
return [t$4106,t$4105];
};
} else {return [false,[v$3095,v$3025,v$3097,1]];
};
} };
} else {var v$3091 = fix$4085.$ins(v$3097);
var v$3092 = v$3091[0];
var v$3093 = v$3091[1];
switch (v$3098) { case 2: {return v$3092?[true,[v$3095,v$3096,v$3093,0]]:[false,[v$3095,v$3096,v$3093,2]];
 break; }case 1: {return v$3092?[false,[v$3095,v$3096,v$3093,2]]:[false,[v$3095,v$3096,v$3093,1]];
 break; }default: {if (v$3092) {var v$3079;
if (v$3093 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree03!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree03!"];
} else {v$3079 = v$3093;
};
var v$3080 = v$3079[0];
var v$3081 = v$3079[1];
var v$3082 = v$3079[2];
var v$3083 = v$3079[3];
var t$4107;
var v$3942 = 0;
switch (v$3083) { case 0: {switch (v$3942) { case 0: {t$4107 = true;
 break; }default: {t$4107 = false;
} };
 break; }case 1: {switch (v$3942) { case 1: {t$4107 = true;
 break; }default: {t$4107 = false;
} };
 break; }case 2: {switch (v$3942) { case 2: {t$4107 = true;
 break; }default: {t$4107 = false;
} };
 break; } };
if (t$4107) {return [false,[v$3080,[v$3095,v$3096,v$3081,2],v$3082,2]];
} else {var v$3067;
if (v$3081 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree04!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree04!"];
} else {v$3067 = v$3081;
};
var v$3068 = v$3067[0];
var v$3069 = v$3067[1];
var v$3070 = v$3067[2];
var v$3071 = v$3067[3];
var t$4125 = false;
var t$4124;
var t$4123;
var t$4122 = v$3068;
var t$4121;
var t$4120;
var t$4119 = v$3095;
var t$4118 = v$3096;
var t$4117 = v$3069;
var t$4116;
var t$4115;
var v$3946 = 0;
switch (v$3071) { case 0: {switch (v$3946) { case 0: {t$4115 = true;
 break; }default: {t$4115 = false;
} };
 break; }case 1: {switch (v$3946) { case 1: {t$4115 = true;
 break; }default: {t$4115 = false;
} };
 break; }case 2: {switch (v$3946) { case 2: {t$4115 = true;
 break; }default: {t$4115 = false;
} };
 break; } };
t$4116 = (t$4115?1:2);
t$4120 = [t$4119,t$4118,t$4117,t$4116];
t$4121 = t$4120;
var t$4114;
var t$4113;
var t$4112 = v$3080;
var t$4111 = v$3070;
var t$4110 = v$3082;
var t$4109;
var t$4108;
var v$3948 = 1;
switch (v$3071) { case 0: {switch (v$3948) { case 0: {t$4108 = true;
 break; }default: {t$4108 = false;
} };
 break; }case 1: {switch (v$3948) { case 1: {t$4108 = true;
 break; }default: {t$4108 = false;
} };
 break; }case 2: {switch (v$3948) { case 2: {t$4108 = true;
 break; }default: {t$4108 = false;
} };
 break; } };
t$4109 = (t$4108?0:2);
t$4113 = [t$4112,t$4111,t$4110,t$4109];
t$4114 = t$4113;
t$4123 = [t$4122,t$4121,t$4114,2];
t$4124 = t$4123;
return [t$4125,t$4124];
};
} else {return [false,[v$3095,v$3096,v$3093,0]];
};
} };
};
};
};
};
var ins$2938 = fix$4085.$ins;
try {return (ins$2938(t$2937))[1];
} catch(v$4086) {return (function(ALREADYTHERE$3105){var t$4087 = ALREADYTHERE$3105;
if (t$4087[0] == compiler0$0CompileDec$1$4.en$ALREADYTHERE$2930) {return t$2937;
} else {throw ALREADYTHERE$3105;
};
})(v$4086);
};
};
compiler0$0CompileDec$1$4.list$3106 = function(s$3109){var fix$4126 = {};
fix$4126.$f = function(v$3113,v$3116){lab$f: while (true) {if (v$3113 == null) {return v$3116;
} else {var v$3128 = v$3113;
var v$3129 = v$3128[0];
var v$3130 = v$3128[1];
var v$3131 = v$3128[2];
var t$4127 = v$3130;
var t$4128 = [v$3129,fix$4126.$f(v$3131,v$3116)];
var v$3113 = t$4127;
var v$3116 = t$4128;
continue lab$f;
};
};
};
var f$3110 = fix$4126.$f;
return f$3110(s$3109,null);
};
var fix$4129 = {};
fix$4129.$fromList = function(l$3136){if (l$3136 == null) {return compiler0$0CompileDec$1$4.empty$2840;
} else {var v$3143 = l$3136;
var v$3144 = v$3143[0];
var v$3145 = v$3143[1];
return compiler0$0CompileDec$1$4.insert$2931(v$3144,fix$4129.$fromList(v$3145));
};
};
compiler0$0CompileDec$1$4.fromList$3133 = fix$4129.$fromList;
var fix$4130 = {};
fix$4130.$union = function(s1$3149,s2$3152){lab$union: while (true) {if (s2$3152 == null) {return s1$3149;
} else {var v$3160 = s2$3152;
var v$3161 = v$3160[0];
var v$3162 = v$3160[1];
var v$3163 = v$3160[2];
var t$4131 = fix$4130.$union(compiler0$0CompileDec$1$4.insert$2931(v$3161,s1$3149),v$3162);
var t$4132 = v$3163;
var s1$3149 = t$4131;
var s2$3152 = t$4132;
continue lab$union;
};
};
};
compiler0$0CompileDec$1$4.union$3146 = fix$4130.$union;
var fix$4133 = {};
fix$4133.$addList = function(v$3167,v$3170){lab$addList: while (true) {if (v$3167 == null) {return v$3170;
} else {var v$3181 = v$3167;
var v$3182 = v$3181[0];
var v$3183 = v$3181[1];
var t$4134 = v$3183;
var t$4135 = compiler0$0CompileDec$1$4.insert$2931(v$3182,v$3170);
var v$3167 = t$4134;
var v$3170 = t$4135;
continue lab$addList;
};
};
};
compiler0$0CompileDec$1$4.addList$3164 = fix$4133.$addList;
compiler0$0CompileDec$1$4.en$NOTFOUND$3185 = new String("NOTFOUND");
compiler0$0CompileDec$1$4.exn$NOTFOUND$3185 = [compiler0$0CompileDec$1$4.en$NOTFOUND$3185];
compiler0$0CompileDec$1$4.remove$3186 = function(k0$3189,t$3192){var balance1$3193 = function(v$3196){if (v$3196 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance1 on an empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.(balance1 on an empty tree)"];
} else {var v$3261 = v$3196;
var v$3262 = v$3261[0];
var v$3263 = v$3261[1];
var v$3264 = v$3261[2];
switch (v$3261[3]) { case 1: {return [[v$3262,v$3263,v$3264,2],true];
 break; }case 2: {return [[v$3262,v$3263,v$3264,0],false];
 break; }default: {var v$3249;
if (v$3264 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree11!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree11!"];
} else {v$3249 = v$3264;
};
var v$3250 = v$3249[0];
var v$3251 = v$3249[1];
var v$3252 = v$3249[2];
switch (v$3249[3]) { case 1: {var v$3237;
if (v$3251 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree12!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree12!"];
} else {v$3237 = v$3251;
};
var v$3238 = v$3237[0];
var v$3239 = v$3237[1];
var v$3240 = v$3237[2];
var v$3241 = v$3237[3];
var t$4152;
var t$4151;
var t$4150 = v$3238;
var t$4149;
var t$4148;
var t$4147 = v$3262;
var t$4146 = v$3263;
var t$4145 = v$3239;
var t$4144;
var t$4143;
var v$3960 = 0;
switch (v$3241) { case 0: {switch (v$3960) { case 0: {t$4143 = true;
 break; }default: {t$4143 = false;
} };
 break; }case 1: {switch (v$3960) { case 1: {t$4143 = true;
 break; }default: {t$4143 = false;
} };
 break; }case 2: {switch (v$3960) { case 2: {t$4143 = true;
 break; }default: {t$4143 = false;
} };
 break; } };
t$4144 = (t$4143?1:2);
t$4148 = [t$4147,t$4146,t$4145,t$4144];
t$4149 = t$4148;
var t$4142;
var t$4141;
var t$4140 = v$3250;
var t$4139 = v$3240;
var t$4138 = v$3252;
var t$4137;
var t$4136;
var v$3962 = 1;
switch (v$3241) { case 0: {switch (v$3962) { case 0: {t$4136 = true;
 break; }default: {t$4136 = false;
} };
 break; }case 1: {switch (v$3962) { case 1: {t$4136 = true;
 break; }default: {t$4136 = false;
} };
 break; }case 2: {switch (v$3962) { case 2: {t$4136 = true;
 break; }default: {t$4136 = false;
} };
 break; } };
t$4137 = (t$4136?0:2);
t$4141 = [t$4140,t$4139,t$4138,t$4137];
t$4142 = t$4141;
t$4151 = [t$4150,t$4149,t$4142,2];
t$4152 = t$4151;
return [t$4152,true];
 break; }case 2: {return [[v$3250,[v$3262,v$3263,v$3251,0],v$3252,1],false];
 break; }default: {return [[v$3250,[v$3262,v$3263,v$3251,2],v$3252,2],true];
} };
} };
};
};
var balance2$3266 = function(v$3269){if (v$3269 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance2 on an empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.(balance2 on an empty tree)"];
} else {var v$3334 = v$3269;
var v$3335 = v$3334[0];
var v$3336 = v$3334[1];
var v$3337 = v$3334[2];
switch (v$3334[3]) { case 0: {return [[v$3335,v$3336,v$3337,2],true];
 break; }case 2: {return [[v$3335,v$3336,v$3337,1],false];
 break; }default: {var v$3322;
if (v$3336 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree21!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree21!"];
} else {v$3322 = v$3336;
};
var v$3323 = v$3322[0];
var v$3324 = v$3322[1];
var v$3325 = v$3322[2];
switch (v$3322[3]) { case 0: {var v$3310;
if (v$3325 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree22!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.empty tree22!"];
} else {v$3310 = v$3325;
};
var v$3311 = v$3310[0];
var v$3312 = v$3310[1];
var v$3313 = v$3310[2];
var v$3314 = v$3310[3];
var t$4169;
var t$4168;
var t$4167 = v$3311;
var t$4166;
var t$4165;
var t$4164 = v$3323;
var t$4163 = v$3324;
var t$4162 = v$3312;
var t$4161;
var t$4160;
var v$3972 = 0;
switch (v$3314) { case 0: {switch (v$3972) { case 0: {t$4160 = true;
 break; }default: {t$4160 = false;
} };
 break; }case 1: {switch (v$3972) { case 1: {t$4160 = true;
 break; }default: {t$4160 = false;
} };
 break; }case 2: {switch (v$3972) { case 2: {t$4160 = true;
 break; }default: {t$4160 = false;
} };
 break; } };
t$4161 = (t$4160?1:2);
t$4165 = [t$4164,t$4163,t$4162,t$4161];
t$4166 = t$4165;
var t$4159;
var t$4158;
var t$4157 = v$3335;
var t$4156 = v$3313;
var t$4155 = v$3337;
var t$4154;
var t$4153;
var v$3970 = 1;
switch (v$3314) { case 0: {switch (v$3970) { case 0: {t$4153 = true;
 break; }default: {t$4153 = false;
} };
 break; }case 1: {switch (v$3970) { case 1: {t$4153 = true;
 break; }default: {t$4153 = false;
} };
 break; }case 2: {switch (v$3970) { case 2: {t$4153 = true;
 break; }default: {t$4153 = false;
} };
 break; } };
t$4154 = (t$4153?0:2);
t$4158 = [t$4157,t$4156,t$4155,t$4154];
t$4159 = t$4158;
t$4168 = [t$4167,t$4166,t$4159,2];
t$4169 = t$4168;
return [t$4169,true];
 break; }case 2: {return [[v$3323,v$3324,[v$3335,v$3325,v$3337,1],0],false];
 break; }default: {return [[v$3323,v$3324,[v$3335,v$3325,v$3337,2],2],true];
} };
} };
};
};
var fix$4170 = {};
fix$4170.$remove_rightmost = function(v$3342){if (v$3342 == null) {basis$0General$1.print$163("Impossible.OrderSet.(remove_rightmost on empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.(remove_rightmost on empty tree)"];
} else {var v$3356 = v$3342;
var v$3357 = v$3356[2];
if (v$3357 == null) {return [v$3356[1],v$3356[0],true];
} else {var v$3379 = v$3356[0];
var v$3380 = v$3356[1];
var v$3381 = v$3356[3];
var v$3375 = fix$4170.$remove_rightmost(v$3357);
var v$3376 = v$3375[0];
var v$3377 = v$3375[1];
if (v$3375[2]) {var v$3372 = balance2$3266([v$3379,v$3380,v$3376,v$3381]);
return [v$3372[0],v$3377,v$3372[1]];
} else {return [[v$3379,v$3380,v$3376,v$3381],v$3377,false];
};
};
};
};
var remove_rightmost$3339 = fix$4170.$remove_rightmost;
var fix$4171 = {};
fix$4171.$del = function(v$3385){if (v$3385 == null) {throw compiler0$0CompileDec$1$4.exn$NOTFOUND$3185;
} else {var v$3442 = v$3385;
var v$3443 = v$3442[0];
var v$3444 = v$3442[1];
var v$3445 = v$3442[2];
var v$3446 = v$3442[3];
if (compiler0$0CompileDec$1$3.lt$2769(k0$3189,v$3443)) {var v$3405 = fix$4171.$del(v$3444);
var v$3406 = v$3405[0];
if (v$3405[1]) {return balance1$3193([v$3443,v$3406,v$3445,v$3446]);
} else {return [[v$3443,v$3406,v$3445,v$3446],false];
};
} else {if (compiler0$0CompileDec$1$3.lt$2769(v$3443,k0$3189)) {var v$3419 = fix$4171.$del(v$3445);
var v$3420 = v$3419[0];
if (v$3419[1]) {return balance2$3266([v$3443,v$3444,v$3420,v$3446]);
} else {return [[v$3443,v$3444,v$3420,v$3446],false];
};
} else {if (v$3445 == null) {return [v$3444,true];
} else {if (v$3444 == null) {return [v$3445,true];
} else {var v$3438 = remove_rightmost$3339(v$3444);
var v$3439 = v$3438[0];
var v$3440 = v$3438[1];
if (v$3438[2]) {return balance1$3193([v$3440,v$3439,v$3445,v$3446]);
} else {return [[v$3440,v$3439,v$3445,v$3446],false];
};
};
};
};
};
};
};
var del$3382 = fix$4171.$del;
try {return (del$3382(t$3192))[0];
} catch(v$4172) {return (function(NOTFOUND$3453){var t$4173 = NOTFOUND$3453;
if (t$4173[0] == compiler0$0CompileDec$1$4.en$NOTFOUND$3185) {return t$3192;
} else {throw NOTFOUND$3453;
};
})(v$4172);
};
};
var fix$4174 = {};
fix$4174.$difference = function(s1$3457,s2$3460){lab$difference: while (true) {if (s1$3457 == null) {return null;
} else {if (s2$3460 == null) {return s1$3457;
} else {var v$3472 = s2$3460;
var v$3473 = v$3472[0];
var v$3474 = v$3472[1];
var v$3475 = v$3472[2];
var t$4175 = fix$4174.$difference(compiler0$0CompileDec$1$4.remove$3186(v$3473,s1$3457),v$3474);
var t$4176 = v$3475;
var s1$3457 = t$4175;
var s2$3460 = t$4176;
continue lab$difference;
};
};
};
};
compiler0$0CompileDec$1$4.difference$3454 = fix$4174.$difference;
compiler0$0CompileDec$1$4.intersect$3476 = function(s1$3479,s2$3482){var fix$4177 = {};
fix$4177.$inters = function(v$3486,v$3489){lab$inters: while (true) {if (v$3486 == null) {return v$3489;
} else {var v$3505 = v$3486;
var v$3506 = v$3505[0];
var v$3507 = v$3505[1];
var v$3508 = v$3505[2];
var t$4186 = v$3507;
var t$4185;
var t$4184 = fix$4177.$inters;
var t$4183 = v$3508;
var t$4182;
var t$4181;
var fix$4178 = {};
fix$4178.$search = function(v$4038){lab$search: while (true) {if (v$4038 == null) {return false;
} else {var v$4039 = v$4038;
var v$4040 = v$4039[0];
var v$4041 = v$4039[1];
var v$4042 = v$4039[2];
if (((compiler0$0CompileDec$1$3.lt$2769(v$3506,v$4040))?true:(compiler0$0CompileDec$1$3.lt$2769(v$4040,v$3506)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2769(v$3506,v$4040)) {var t$4179 = v$4041;
var v$4038 = t$4179;
continue lab$search;
} else {var t$4180 = v$4042;
var v$4038 = t$4180;
continue lab$search;
};
};
};
};
};
var search$4037 = fix$4178.$search;
t$4181 = (search$4037(s2$3482));
t$4182 = (t$4181?(compiler0$0CompileDec$1$4.insert$2931(v$3506,v$3489)):v$3489);
t$4185 = (t$4184(t$4183,t$4182));
var t$4187 = t$4186;
var t$4188 = t$4185;
var v$3486 = t$4187;
var v$3489 = t$4188;
continue lab$inters;
};
};
};
var inters$3483 = fix$4177.$inters;
return inters$3483(s1$3479,compiler0$0CompileDec$1$4.empty$2840);
};
compiler0$0CompileDec$1$4.partition$3510 = function(f$3513,s$3516){var fix$4189 = {};
fix$4189.$g = function(v$3520,v$3523){lab$g: while (true) {if (v$3520 == null) {return v$3523;
} else {var v$3541 = v$3520;
var v$3542 = v$3541[0];
var v$3543 = v$3541[1];
var v$3544 = v$3541[2];
var v$3546 = v$3523[0];
var v$3547 = v$3523[1];
var b$3536 = (f$3513(v$3542))?[compiler0$0CompileDec$1$4.insert$2931(v$3542,v$3546),v$3547]:[v$3546,compiler0$0CompileDec$1$4.insert$2931(v$3542,v$3547)];
var t$4190 = v$3544;
var t$4191 = fix$4189.$g(v$3543,b$3536);
var v$3520 = t$4190;
var v$3523 = t$4191;
continue lab$g;
};
};
};
var g$3517 = fix$4189.$g;
return g$3517(s$3516,[compiler0$0CompileDec$1$4.empty$2840,compiler0$0CompileDec$1$4.empty$2840]);
};
compiler0$0CompileDec$1$4.fold$3548 = function(f$3551,e$3554,t$3557){var fix$4192 = {};
fix$4192.$fold$ = function(v$3561,v$3564){lab$fold$: while (true) {if (v$3561 == null) {return v$3564;
} else {var v$3576 = v$3561;
var v$3577 = v$3576[0];
var v$3578 = v$3576[1];
var v$3579 = v$3576[2];
var t$4193 = v$3579;
var t$4194 = (f$3551(v$3577))(fix$4192.$fold$(v$3578,v$3564));
var v$3561 = t$4193;
var v$3564 = t$4194;
continue lab$fold$;
};
};
};
var fold$$3558 = fix$4192.$fold$;
return fold$$3558(t$3557,e$3554);
};
compiler0$0CompileDec$1$4.listmap$3581 = function(v$4071,v$4072){return basis$0List$1.map$697(v$4071,v$4072);
};
compiler0$0CompileDec$1$4.map$3582 = function(f$3585,t$3588){var t$4202 = compiler0$0CompileDec$1$4.fromList$3133;
var t$4201;
var t$4200 = basis$0List$1.map$697;
var t$4199 = f$3585;
var t$4198;
var fix$4195 = {};
fix$4195.$f = function(v$3848,v$3849){lab$f: while (true) {if (v$3848 == null) {return v$3849;
} else {var v$3852 = v$3848;
var v$3853 = v$3852[0];
var v$3854 = v$3852[1];
var v$3855 = v$3852[2];
var t$4196 = v$3854;
var t$4197 = [v$3853,fix$4195.$f(v$3855,v$3849)];
var v$3848 = t$4196;
var v$3849 = t$4197;
continue lab$f;
};
};
};
var f$3847 = fix$4195.$f;
t$4198 = (f$3847(t$3588,null));
t$4201 = (t$4200(t$4199,t$4198));
return t$4202(t$4201);
};
compiler0$0CompileDec$1$4.subst$3589 = function(v$3601,v$3602){return function(s$3596){var t$4206;
var fix$4203 = {};
fix$4203.$search = function(v$4046){lab$search: while (true) {if (v$4046 == null) {return false;
} else {var v$4047 = v$4046;
var v$4048 = v$4047[0];
var v$4049 = v$4047[1];
var v$4050 = v$4047[2];
if (((compiler0$0CompileDec$1$3.lt$2769(v$3602,v$4048))?true:(compiler0$0CompileDec$1$3.lt$2769(v$4048,v$3602)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2769(v$3602,v$4048)) {var t$4204 = v$4049;
var v$4046 = t$4204;
continue lab$search;
} else {var t$4205 = v$4050;
var v$4046 = t$4205;
continue lab$search;
};
};
};
};
};
var search$4045 = fix$4203.$search;
t$4206 = (search$4045(s$3596));
if (t$4206) {return compiler0$0CompileDec$1$4.insert$2931(v$3601,compiler0$0CompileDec$1$4.remove$3186(v$3602,s$3596));
} else {return s$3596;
};
};
};
compiler0$0CompileDec$1$4.apply$3603 = function(f$3606,s$3609){var fix$4207 = {};
fix$4207.$appl = function(v$3613){lab$appl: while (true) {if (v$3613 == null) {return 0;
} else {var v$3625 = v$3613;
var v$3626 = v$3625[0];
var v$3627 = v$3625[1];
var v$3628 = v$3625[2];
fix$4207.$appl(v$3627);
f$3606(v$3626);
var t$4208 = v$3628;
var v$3613 = t$4208;
continue lab$appl;
};
};
};
var appl$3610 = fix$4207.$appl;
return appl$3610(s$3609);
};
compiler0$0CompileDec$1$4.layoutSet$3629 = function(v$3648,v$3647,v$3646){return function(layoutItem$3637){return function(s$3640){var t$4209;
var v$3644 = [0,v$3647];
var t$4216;
var t$4215 = basis$0List$1.map$697;
var t$4214 = layoutItem$3637;
var t$4213;
var fix$4210 = {};
fix$4210.$f = function(v$3859,v$3860){lab$f: while (true) {if (v$3859 == null) {return v$3860;
} else {var v$3863 = v$3859;
var v$3864 = v$3863[0];
var v$3865 = v$3863[1];
var v$3866 = v$3863[2];
var t$4211 = v$3865;
var t$4212 = [v$3864,fix$4210.$f(v$3866,v$3860)];
var v$3859 = t$4211;
var v$3860 = t$4212;
continue lab$f;
};
};
};
var f$3858 = fix$4210.$f;
t$4213 = (f$3858(s$3640,null));
t$4216 = (t$4215(t$4214,t$4213));
t$4209 = [t$4216,v$3644,v$3648,3,v$3646];
return [0,t$4209];
};
};
};
compiler0$0CompileDec$1$4.pu_bal$3649 = pickle$0pickle$1.enumGen$2158(function(v$3868){var v$3869 = v$3868[0];
var v$3870 = v$3868[1];
switch (v$3869) { case 0: {switch (v$3870) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3870) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3870) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderSet.bal",[1,[2,[0,null]]]]);
compiler0$0CompileDec$1$4.pu$3650 = function(pu_elt$3653){var funE$3662;
var v$4073 = null;
funE$3662 = (function(v$4074){return pickle$0pickle$1.con0$1988(v$4073,v$4074);
});
return pickle$0pickle$1.dataGen$1488(["OrderSet.Set",function(v$3885){return (v$3885 == null)?0:1;
},[funE$3662,[function(pu$3886){return pickle$0pickle$1.con1$2014(function(v$3887){return v$3887;
},function(v$3888){if (v$3888 == null) {basis$0General$1.print$163("Impossible.OrderSet.pu.N");
throw [compiler0$0CompileDec$1$4.en$Impossible$2827,"Impossible.OrderSet.pu.N"];
} else {return v$3888;
};
},(pickle$0pickle$1.convert0$2299(function(v$3897){var v$3898 = v$3897[0];
var v$3899 = v$3898[0];
var v$3900 = v$3898[1];
var v$3901 = v$3897[1];
return [v$3899,v$3900,v$3901[0],v$3901[1]];
},function(v$3902){return [[v$3902[0],v$3902[1]],[v$3902[2],v$3902[3]]];
}))(pickle$0pickle$1.pairGen0$983(pickle$0pickle$1.pairGen0$983(pu_elt$3653,pu$3886),pickle$0pickle$1.pairGen0$983(pu$3886,compiler0$0CompileDec$1$4.pu_bal$3649))));
},null]]]);
};
return 0;
})();
