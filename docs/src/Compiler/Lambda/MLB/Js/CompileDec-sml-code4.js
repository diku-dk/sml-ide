if ((typeof(compiler0$0CompileDec$1$4)) == "undefined") {compiler0$0CompileDec$1$4 = {};
};
(function(){compiler0$0CompileDec$1$4.eq_bal$3712 = function(v$3714,v$3715){switch (v$3714) { case 0: {switch (v$3715) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3715) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3715) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
compiler0$0CompileDec$1$4.s$j$2820 = function(v$2825,v$2826){return compiler0$0CompileDec$1$3.lt$2780(v$2825,v$2826);
};
compiler0$0CompileDec$1$4.s$kk$2827 = function(v$2836,v$2837){return ((compiler0$0CompileDec$1$3.lt$2780(v$2836,v$2837))?true:(compiler0$0CompileDec$1$3.lt$2780(v$2837,v$2836)))?false:true;
};
compiler0$0CompileDec$1$4.en$Impossible$2838 = new String("Impossible");
compiler0$0CompileDec$1$4.impossible$2839 = function(s$2842){var s$2843 = "Impossible.OrderSet." + s$2842;
basis$0General$1.print$163(s$2843);
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,s$2843];
};
compiler0$0CompileDec$1$4.empty$2851 = null;
compiler0$0CompileDec$1$4.singleton$2852 = function(i$2855){return [i$2855,null,null,2];
};
var fix$4060 = {};
fix$4060.$size = function(v$2859){if (v$2859 == null) {return 0;
} else {var v$2866 = v$2859;
var v$2867 = v$2866[1];
var v$2868 = v$2866[2];
return SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(1 + (fix$4060.$size(v$2867)))) + (fix$4060.$size(v$2868)));
};
};
compiler0$0CompileDec$1$4.size$2856 = fix$4060.$size;
compiler0$0CompileDec$1$4.isEmpty$2869 = function(v$2872){return (v$2872 == null)?true:false;
};
compiler0$0CompileDec$1$4.member$2877 = function(i$2880,s$2883){var fix$4061 = {};
fix$4061.$search = function(v$2887){lab$search: while (true) {if (v$2887 == null) {return false;
} else {var v$2903 = v$2887;
var v$2904 = v$2903[0];
var v$2905 = v$2903[1];
var v$2906 = v$2903[2];
if (((compiler0$0CompileDec$1$3.lt$2780(i$2880,v$2904))?true:(compiler0$0CompileDec$1$3.lt$2780(v$2904,i$2880)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2780(i$2880,v$2904)) {var t$4062 = v$2905;
var v$2887 = t$4062;
continue lab$search;
} else {var t$4063 = v$2906;
var v$2887 = t$4063;
continue lab$search;
};
};
};
};
};
var search$2884 = fix$4061.$search;
return search$2884(s$2883);
};
compiler0$0CompileDec$1$4.eq$2907 = function(s1$2910,s2$2913){if ((compiler0$0CompileDec$1$4.size$2856(s1$2910)) == (compiler0$0CompileDec$1$4.size$2856(s2$2913))) {var fix$4064 = {};
fix$4064.$eq$ = function(v$2921){lab$eq$: while (true) {if (v$2921 == null) {return true;
} else {var v$2937 = v$2921;
var v$2938 = v$2937[0];
var v$2939 = v$2937[1];
var v$2940 = v$2937[2];
var t$4068;
var fix$4065 = {};
fix$4065.$search = function(v$3985){lab$search: while (true) {if (v$3985 == null) {return false;
} else {var v$3986 = v$3985;
var v$3987 = v$3986[0];
var v$3988 = v$3986[1];
var v$3989 = v$3986[2];
if (((compiler0$0CompileDec$1$3.lt$2780(v$2938,v$3987))?true:(compiler0$0CompileDec$1$3.lt$2780(v$3987,v$2938)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2780(v$2938,v$3987)) {var t$4066 = v$3988;
var v$3985 = t$4066;
continue lab$search;
} else {var t$4067 = v$3989;
var v$3985 = t$4067;
continue lab$search;
};
};
};
};
};
var search$3984 = fix$4065.$search;
t$4068 = (search$3984(s2$2913));
if (t$4068) {if (fix$4064.$eq$(v$2939)) {var t$4069 = v$2940;
var v$2921 = t$4069;
continue lab$eq$;
} else {return false;
};
} else {return false;
};
};
};
};
var eq$$2918 = fix$4064.$eq$;
return eq$$2918(s1$2910);
} else {return false;
};
};
compiler0$0CompileDec$1$4.en$ALREADYTHERE$2941 = new String("ALREADYTHERE");
compiler0$0CompileDec$1$4.exn$ALREADYTHERE$2941 = [compiler0$0CompileDec$1$4.en$ALREADYTHERE$2941];
compiler0$0CompileDec$1$4.insert$2942 = function(k0$2945,t$2948){var fix$4070 = {};
fix$4070.$ins = function(v$2952){if (v$2952 == null) {return [true,[k0$2945,null,null,2]];
} else {var v$3105 = v$2952;
var v$3106 = v$3105[0];
var v$3107 = v$3105[1];
var v$3108 = v$3105[2];
var v$3109 = v$3105[3];
if (((compiler0$0CompileDec$1$3.lt$2780(k0$2945,v$3106))?true:(compiler0$0CompileDec$1$3.lt$2780(v$3106,k0$2945)))?false:true) {throw compiler0$0CompileDec$1$4.exn$ALREADYTHERE$2941;
} else {if (compiler0$0CompileDec$1$3.lt$2780(k0$2945,v$3106)) {var v$3034 = fix$4070.$ins(v$3107);
var v$3035 = v$3034[0];
var v$3036 = v$3034[1];
switch (v$3109) { case 2: {return v$3035?[true,[v$3106,v$3036,v$3108,1]]:[false,[v$3106,v$3036,v$3108,2]];
 break; }case 0: {return v$3035?[false,[v$3106,v$3036,v$3108,2]]:[false,[v$3106,v$3036,v$3108,0]];
 break; }default: {if (v$3035) {var v$3022;
if (v$3036 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree01!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree01!"];
} else {v$3022 = v$3036;
};
var v$3023 = v$3022[0];
var v$3024 = v$3022[1];
var v$3025 = v$3022[2];
var v$3026 = v$3022[3];
var t$4073;
var v$3919 = 1;
switch (v$3026) { case 0: {switch (v$3919) { case 0: {t$4073 = true;
 break; }default: {t$4073 = false;
} };
 break; }case 1: {switch (v$3919) { case 1: {t$4073 = true;
 break; }default: {t$4073 = false;
} };
 break; }case 2: {switch (v$3919) { case 2: {t$4073 = true;
 break; }default: {t$4073 = false;
} };
 break; } };
if (t$4073) {return [false,[v$3023,v$3024,[v$3106,v$3025,v$3108,2],2]];
} else {var v$3010;
if (v$3025 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree02!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree02!"];
} else {v$3010 = v$3025;
};
var v$3011 = v$3010[0];
var v$3012 = v$3010[1];
var v$3013 = v$3010[2];
var v$3014 = v$3010[3];
var t$4091 = false;
var t$4090;
var t$4089;
var t$4088 = v$3011;
var t$4087;
var t$4086;
var t$4085 = v$3023;
var t$4084 = v$3024;
var t$4083 = v$3012;
var t$4082;
var t$4081;
var v$3923 = 0;
switch (v$3014) { case 0: {switch (v$3923) { case 0: {t$4081 = true;
 break; }default: {t$4081 = false;
} };
 break; }case 1: {switch (v$3923) { case 1: {t$4081 = true;
 break; }default: {t$4081 = false;
} };
 break; }case 2: {switch (v$3923) { case 2: {t$4081 = true;
 break; }default: {t$4081 = false;
} };
 break; } };
t$4082 = (t$4081?1:2);
t$4086 = [t$4085,t$4084,t$4083,t$4082];
t$4087 = t$4086;
var t$4080;
var t$4079;
var t$4078 = v$3106;
var t$4077 = v$3013;
var t$4076 = v$3108;
var t$4075;
var t$4074;
var v$3925 = 1;
switch (v$3014) { case 0: {switch (v$3925) { case 0: {t$4074 = true;
 break; }default: {t$4074 = false;
} };
 break; }case 1: {switch (v$3925) { case 1: {t$4074 = true;
 break; }default: {t$4074 = false;
} };
 break; }case 2: {switch (v$3925) { case 2: {t$4074 = true;
 break; }default: {t$4074 = false;
} };
 break; } };
t$4075 = (t$4074?0:2);
t$4079 = [t$4078,t$4077,t$4076,t$4075];
t$4080 = t$4079;
t$4089 = [t$4088,t$4087,t$4080,2];
t$4090 = t$4089;
return [t$4091,t$4090];
};
} else {return [false,[v$3106,v$3036,v$3108,1]];
};
} };
} else {var v$3102 = fix$4070.$ins(v$3108);
var v$3103 = v$3102[0];
var v$3104 = v$3102[1];
switch (v$3109) { case 2: {return v$3103?[true,[v$3106,v$3107,v$3104,0]]:[false,[v$3106,v$3107,v$3104,2]];
 break; }case 1: {return v$3103?[false,[v$3106,v$3107,v$3104,2]]:[false,[v$3106,v$3107,v$3104,1]];
 break; }default: {if (v$3103) {var v$3090;
if (v$3104 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree03!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree03!"];
} else {v$3090 = v$3104;
};
var v$3091 = v$3090[0];
var v$3092 = v$3090[1];
var v$3093 = v$3090[2];
var v$3094 = v$3090[3];
var t$4092;
var v$3931 = 0;
switch (v$3094) { case 0: {switch (v$3931) { case 0: {t$4092 = true;
 break; }default: {t$4092 = false;
} };
 break; }case 1: {switch (v$3931) { case 1: {t$4092 = true;
 break; }default: {t$4092 = false;
} };
 break; }case 2: {switch (v$3931) { case 2: {t$4092 = true;
 break; }default: {t$4092 = false;
} };
 break; } };
if (t$4092) {return [false,[v$3091,[v$3106,v$3107,v$3092,2],v$3093,2]];
} else {var v$3078;
if (v$3092 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree04!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree04!"];
} else {v$3078 = v$3092;
};
var v$3079 = v$3078[0];
var v$3080 = v$3078[1];
var v$3081 = v$3078[2];
var v$3082 = v$3078[3];
var t$4110 = false;
var t$4109;
var t$4108;
var t$4107 = v$3079;
var t$4106;
var t$4105;
var t$4104 = v$3106;
var t$4103 = v$3107;
var t$4102 = v$3080;
var t$4101;
var t$4100;
var v$3935 = 0;
switch (v$3082) { case 0: {switch (v$3935) { case 0: {t$4100 = true;
 break; }default: {t$4100 = false;
} };
 break; }case 1: {switch (v$3935) { case 1: {t$4100 = true;
 break; }default: {t$4100 = false;
} };
 break; }case 2: {switch (v$3935) { case 2: {t$4100 = true;
 break; }default: {t$4100 = false;
} };
 break; } };
t$4101 = (t$4100?1:2);
t$4105 = [t$4104,t$4103,t$4102,t$4101];
t$4106 = t$4105;
var t$4099;
var t$4098;
var t$4097 = v$3091;
var t$4096 = v$3081;
var t$4095 = v$3093;
var t$4094;
var t$4093;
var v$3937 = 1;
switch (v$3082) { case 0: {switch (v$3937) { case 0: {t$4093 = true;
 break; }default: {t$4093 = false;
} };
 break; }case 1: {switch (v$3937) { case 1: {t$4093 = true;
 break; }default: {t$4093 = false;
} };
 break; }case 2: {switch (v$3937) { case 2: {t$4093 = true;
 break; }default: {t$4093 = false;
} };
 break; } };
t$4094 = (t$4093?0:2);
t$4098 = [t$4097,t$4096,t$4095,t$4094];
t$4099 = t$4098;
t$4108 = [t$4107,t$4106,t$4099,2];
t$4109 = t$4108;
return [t$4110,t$4109];
};
} else {return [false,[v$3106,v$3107,v$3104,0]];
};
} };
};
};
};
};
var ins$2949 = fix$4070.$ins;
try {return (ins$2949(t$2948))[1];
} catch(v$4071) {return (function(ALREADYTHERE$3116){var t$4072 = ALREADYTHERE$3116;
if (t$4072[0] == compiler0$0CompileDec$1$4.en$ALREADYTHERE$2941) {return t$2948;
} else {throw ALREADYTHERE$3116;
};
})(v$4071);
};
};
compiler0$0CompileDec$1$4.list$3117 = function(s$3120){var fix$4111 = {};
fix$4111.$f = function(v$3124,v$3127){lab$f: while (true) {if (v$3124 == null) {return v$3127;
} else {var v$3139 = v$3124;
var v$3140 = v$3139[0];
var v$3141 = v$3139[1];
var v$3142 = v$3139[2];
var t$4112 = v$3141;
var t$4113 = [v$3140,fix$4111.$f(v$3142,v$3127)];
var v$3124 = t$4112;
var v$3127 = t$4113;
continue lab$f;
};
};
};
var f$3121 = fix$4111.$f;
return f$3121(s$3120,null);
};
var fix$4114 = {};
fix$4114.$fromList = function(l$3147){if (l$3147 == null) {return compiler0$0CompileDec$1$4.empty$2851;
} else {var v$3154 = l$3147;
var v$3155 = v$3154[0];
var v$3156 = v$3154[1];
return compiler0$0CompileDec$1$4.insert$2942(v$3155,fix$4114.$fromList(v$3156));
};
};
compiler0$0CompileDec$1$4.fromList$3144 = fix$4114.$fromList;
var fix$4115 = {};
fix$4115.$union = function(s1$3160,s2$3163){lab$union: while (true) {if (s2$3163 == null) {return s1$3160;
} else {var v$3171 = s2$3163;
var v$3172 = v$3171[0];
var v$3173 = v$3171[1];
var v$3174 = v$3171[2];
var t$4116 = fix$4115.$union(compiler0$0CompileDec$1$4.insert$2942(v$3172,s1$3160),v$3173);
var t$4117 = v$3174;
var s1$3160 = t$4116;
var s2$3163 = t$4117;
continue lab$union;
};
};
};
compiler0$0CompileDec$1$4.union$3157 = fix$4115.$union;
var fix$4118 = {};
fix$4118.$addList = function(v$3178,v$3181){lab$addList: while (true) {if (v$3178 == null) {return v$3181;
} else {var v$3192 = v$3178;
var v$3193 = v$3192[0];
var v$3194 = v$3192[1];
var t$4119 = v$3194;
var t$4120 = compiler0$0CompileDec$1$4.insert$2942(v$3193,v$3181);
var v$3178 = t$4119;
var v$3181 = t$4120;
continue lab$addList;
};
};
};
compiler0$0CompileDec$1$4.addList$3175 = fix$4118.$addList;
compiler0$0CompileDec$1$4.en$NOTFOUND$3196 = new String("NOTFOUND");
compiler0$0CompileDec$1$4.exn$NOTFOUND$3196 = [compiler0$0CompileDec$1$4.en$NOTFOUND$3196];
compiler0$0CompileDec$1$4.remove$3197 = function(k0$3200,t$3203){var balance1$3204 = function(v$3207){if (v$3207 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance1 on an empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.(balance1 on an empty tree)"];
} else {var v$3272 = v$3207;
var v$3273 = v$3272[0];
var v$3274 = v$3272[1];
var v$3275 = v$3272[2];
switch (v$3272[3]) { case 1: {return [[v$3273,v$3274,v$3275,2],true];
 break; }case 2: {return [[v$3273,v$3274,v$3275,0],false];
 break; }default: {var v$3260;
if (v$3275 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree11!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree11!"];
} else {v$3260 = v$3275;
};
var v$3261 = v$3260[0];
var v$3262 = v$3260[1];
var v$3263 = v$3260[2];
switch (v$3260[3]) { case 1: {var v$3248;
if (v$3262 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree12!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree12!"];
} else {v$3248 = v$3262;
};
var v$3249 = v$3248[0];
var v$3250 = v$3248[1];
var v$3251 = v$3248[2];
var v$3252 = v$3248[3];
var t$4137;
var t$4136;
var t$4135 = v$3249;
var t$4134;
var t$4133;
var t$4132 = v$3273;
var t$4131 = v$3274;
var t$4130 = v$3250;
var t$4129;
var t$4128;
var v$3949 = 0;
switch (v$3252) { case 0: {switch (v$3949) { case 0: {t$4128 = true;
 break; }default: {t$4128 = false;
} };
 break; }case 1: {switch (v$3949) { case 1: {t$4128 = true;
 break; }default: {t$4128 = false;
} };
 break; }case 2: {switch (v$3949) { case 2: {t$4128 = true;
 break; }default: {t$4128 = false;
} };
 break; } };
t$4129 = (t$4128?1:2);
t$4133 = [t$4132,t$4131,t$4130,t$4129];
t$4134 = t$4133;
var t$4127;
var t$4126;
var t$4125 = v$3261;
var t$4124 = v$3251;
var t$4123 = v$3263;
var t$4122;
var t$4121;
var v$3951 = 1;
switch (v$3252) { case 0: {switch (v$3951) { case 0: {t$4121 = true;
 break; }default: {t$4121 = false;
} };
 break; }case 1: {switch (v$3951) { case 1: {t$4121 = true;
 break; }default: {t$4121 = false;
} };
 break; }case 2: {switch (v$3951) { case 2: {t$4121 = true;
 break; }default: {t$4121 = false;
} };
 break; } };
t$4122 = (t$4121?0:2);
t$4126 = [t$4125,t$4124,t$4123,t$4122];
t$4127 = t$4126;
t$4136 = [t$4135,t$4134,t$4127,2];
t$4137 = t$4136;
return [t$4137,true];
 break; }case 2: {return [[v$3261,[v$3273,v$3274,v$3262,0],v$3263,1],false];
 break; }default: {return [[v$3261,[v$3273,v$3274,v$3262,2],v$3263,2],true];
} };
} };
};
};
var balance2$3277 = function(v$3280){if (v$3280 == null) {basis$0General$1.print$163("Impossible.OrderSet.(balance2 on an empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.(balance2 on an empty tree)"];
} else {var v$3345 = v$3280;
var v$3346 = v$3345[0];
var v$3347 = v$3345[1];
var v$3348 = v$3345[2];
switch (v$3345[3]) { case 0: {return [[v$3346,v$3347,v$3348,2],true];
 break; }case 2: {return [[v$3346,v$3347,v$3348,1],false];
 break; }default: {var v$3333;
if (v$3347 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree21!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree21!"];
} else {v$3333 = v$3347;
};
var v$3334 = v$3333[0];
var v$3335 = v$3333[1];
var v$3336 = v$3333[2];
switch (v$3333[3]) { case 0: {var v$3321;
if (v$3336 == null) {basis$0General$1.print$163("Impossible.OrderSet.empty tree22!");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.empty tree22!"];
} else {v$3321 = v$3336;
};
var v$3322 = v$3321[0];
var v$3323 = v$3321[1];
var v$3324 = v$3321[2];
var v$3325 = v$3321[3];
var t$4154;
var t$4153;
var t$4152 = v$3322;
var t$4151;
var t$4150;
var t$4149 = v$3334;
var t$4148 = v$3335;
var t$4147 = v$3323;
var t$4146;
var t$4145;
var v$3961 = 0;
switch (v$3325) { case 0: {switch (v$3961) { case 0: {t$4145 = true;
 break; }default: {t$4145 = false;
} };
 break; }case 1: {switch (v$3961) { case 1: {t$4145 = true;
 break; }default: {t$4145 = false;
} };
 break; }case 2: {switch (v$3961) { case 2: {t$4145 = true;
 break; }default: {t$4145 = false;
} };
 break; } };
t$4146 = (t$4145?1:2);
t$4150 = [t$4149,t$4148,t$4147,t$4146];
t$4151 = t$4150;
var t$4144;
var t$4143;
var t$4142 = v$3346;
var t$4141 = v$3324;
var t$4140 = v$3348;
var t$4139;
var t$4138;
var v$3959 = 1;
switch (v$3325) { case 0: {switch (v$3959) { case 0: {t$4138 = true;
 break; }default: {t$4138 = false;
} };
 break; }case 1: {switch (v$3959) { case 1: {t$4138 = true;
 break; }default: {t$4138 = false;
} };
 break; }case 2: {switch (v$3959) { case 2: {t$4138 = true;
 break; }default: {t$4138 = false;
} };
 break; } };
t$4139 = (t$4138?0:2);
t$4143 = [t$4142,t$4141,t$4140,t$4139];
t$4144 = t$4143;
t$4153 = [t$4152,t$4151,t$4144,2];
t$4154 = t$4153;
return [t$4154,true];
 break; }case 2: {return [[v$3334,v$3335,[v$3346,v$3336,v$3348,1],0],false];
 break; }default: {return [[v$3334,v$3335,[v$3346,v$3336,v$3348,2],2],true];
} };
} };
};
};
var fix$4155 = {};
fix$4155.$remove_rightmost = function(v$3353){if (v$3353 == null) {basis$0General$1.print$163("Impossible.OrderSet.(remove_rightmost on empty tree)");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.(remove_rightmost on empty tree)"];
} else {var v$3367 = v$3353;
var v$3368 = v$3367[2];
if (v$3368 == null) {return [v$3367[1],v$3367[0],true];
} else {var v$3390 = v$3367[0];
var v$3391 = v$3367[1];
var v$3392 = v$3367[3];
var v$3386 = fix$4155.$remove_rightmost(v$3368);
var v$3387 = v$3386[0];
var v$3388 = v$3386[1];
if (v$3386[2]) {var v$3383 = balance2$3277([v$3390,v$3391,v$3387,v$3392]);
return [v$3383[0],v$3388,v$3383[1]];
} else {return [[v$3390,v$3391,v$3387,v$3392],v$3388,false];
};
};
};
};
var remove_rightmost$3350 = fix$4155.$remove_rightmost;
var fix$4156 = {};
fix$4156.$del = function(v$3396){if (v$3396 == null) {throw compiler0$0CompileDec$1$4.exn$NOTFOUND$3196;
} else {var v$3453 = v$3396;
var v$3454 = v$3453[0];
var v$3455 = v$3453[1];
var v$3456 = v$3453[2];
var v$3457 = v$3453[3];
if (compiler0$0CompileDec$1$3.lt$2780(k0$3200,v$3454)) {var v$3416 = fix$4156.$del(v$3455);
var v$3417 = v$3416[0];
if (v$3416[1]) {return balance1$3204([v$3454,v$3417,v$3456,v$3457]);
} else {return [[v$3454,v$3417,v$3456,v$3457],false];
};
} else {if (compiler0$0CompileDec$1$3.lt$2780(v$3454,k0$3200)) {var v$3430 = fix$4156.$del(v$3456);
var v$3431 = v$3430[0];
if (v$3430[1]) {return balance2$3277([v$3454,v$3455,v$3431,v$3457]);
} else {return [[v$3454,v$3455,v$3431,v$3457],false];
};
} else {if (v$3456 == null) {return [v$3455,true];
} else {if (v$3455 == null) {return [v$3456,true];
} else {var v$3449 = remove_rightmost$3350(v$3455);
var v$3450 = v$3449[0];
var v$3451 = v$3449[1];
if (v$3449[2]) {return balance1$3204([v$3451,v$3450,v$3456,v$3457]);
} else {return [[v$3451,v$3450,v$3456,v$3457],false];
};
};
};
};
};
};
};
var del$3393 = fix$4156.$del;
try {return (del$3393(t$3203))[0];
} catch(v$4157) {return (function(NOTFOUND$3464){var t$4158 = NOTFOUND$3464;
if (t$4158[0] == compiler0$0CompileDec$1$4.en$NOTFOUND$3196) {return t$3203;
} else {throw NOTFOUND$3464;
};
})(v$4157);
};
};
var fix$4159 = {};
fix$4159.$difference = function(s1$3468,s2$3471){lab$difference: while (true) {if (s1$3468 == null) {return null;
} else {if (s2$3471 == null) {return s1$3468;
} else {var v$3483 = s2$3471;
var v$3484 = v$3483[0];
var v$3485 = v$3483[1];
var v$3486 = v$3483[2];
var t$4160 = fix$4159.$difference(compiler0$0CompileDec$1$4.remove$3197(v$3484,s1$3468),v$3485);
var t$4161 = v$3486;
var s1$3468 = t$4160;
var s2$3471 = t$4161;
continue lab$difference;
};
};
};
};
compiler0$0CompileDec$1$4.difference$3465 = fix$4159.$difference;
compiler0$0CompileDec$1$4.intersect$3487 = function(s1$3490,s2$3493){var fix$4162 = {};
fix$4162.$inters = function(v$3497,v$3500){lab$inters: while (true) {if (v$3497 == null) {return v$3500;
} else {var v$3516 = v$3497;
var v$3517 = v$3516[0];
var v$3518 = v$3516[1];
var v$3519 = v$3516[2];
var t$4171 = v$3518;
var t$4170;
var t$4169 = fix$4162.$inters;
var t$4168 = v$3519;
var t$4167;
var t$4166;
var fix$4163 = {};
fix$4163.$search = function(v$4023){lab$search: while (true) {if (v$4023 == null) {return false;
} else {var v$4024 = v$4023;
var v$4025 = v$4024[0];
var v$4026 = v$4024[1];
var v$4027 = v$4024[2];
if (((compiler0$0CompileDec$1$3.lt$2780(v$3517,v$4025))?true:(compiler0$0CompileDec$1$3.lt$2780(v$4025,v$3517)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2780(v$3517,v$4025)) {var t$4164 = v$4026;
var v$4023 = t$4164;
continue lab$search;
} else {var t$4165 = v$4027;
var v$4023 = t$4165;
continue lab$search;
};
};
};
};
};
var search$4022 = fix$4163.$search;
t$4166 = (search$4022(s2$3493));
t$4167 = (t$4166?(compiler0$0CompileDec$1$4.insert$2942(v$3517,v$3500)):v$3500);
t$4170 = (t$4169(t$4168,t$4167));
var t$4172 = t$4171;
var t$4173 = t$4170;
var v$3497 = t$4172;
var v$3500 = t$4173;
continue lab$inters;
};
};
};
var inters$3494 = fix$4162.$inters;
return inters$3494(s1$3490,compiler0$0CompileDec$1$4.empty$2851);
};
compiler0$0CompileDec$1$4.partition$3521 = function(f$3524,s$3527){var fix$4174 = {};
fix$4174.$g = function(v$3531,v$3534){lab$g: while (true) {if (v$3531 == null) {return v$3534;
} else {var v$3552 = v$3531;
var v$3553 = v$3552[0];
var v$3554 = v$3552[1];
var v$3555 = v$3552[2];
var v$3557 = v$3534[0];
var v$3558 = v$3534[1];
var b$3547 = (f$3524(v$3553))?[compiler0$0CompileDec$1$4.insert$2942(v$3553,v$3557),v$3558]:[v$3557,compiler0$0CompileDec$1$4.insert$2942(v$3553,v$3558)];
var t$4175 = v$3555;
var t$4176 = fix$4174.$g(v$3554,b$3547);
var v$3531 = t$4175;
var v$3534 = t$4176;
continue lab$g;
};
};
};
var g$3528 = fix$4174.$g;
return g$3528(s$3527,[compiler0$0CompileDec$1$4.empty$2851,compiler0$0CompileDec$1$4.empty$2851]);
};
compiler0$0CompileDec$1$4.fold$3559 = function(f$3562,e$3565,t$3568){var fix$4177 = {};
fix$4177.$fold$ = function(v$3572,v$3575){lab$fold$: while (true) {if (v$3572 == null) {return v$3575;
} else {var v$3587 = v$3572;
var v$3588 = v$3587[0];
var v$3589 = v$3587[1];
var v$3590 = v$3587[2];
var t$4178 = v$3590;
var t$4179 = (f$3562(v$3588))(fix$4177.$fold$(v$3589,v$3575));
var v$3572 = t$4178;
var v$3575 = t$4179;
continue lab$fold$;
};
};
};
var fold$$3569 = fix$4177.$fold$;
return fold$$3569(t$3568,e$3565);
};
compiler0$0CompileDec$1$4.listmap$3592 = function(v$4056,v$4057){return basis$0List$1.map$697(v$4056,v$4057);
};
compiler0$0CompileDec$1$4.map$3593 = function(f$3596,t$3599){var t$4187 = compiler0$0CompileDec$1$4.fromList$3144;
var t$4186;
var t$4185 = basis$0List$1.map$697;
var t$4184 = f$3596;
var t$4183;
var fix$4180 = {};
fix$4180.$f = function(v$3859,v$3860){lab$f: while (true) {if (v$3859 == null) {return v$3860;
} else {var v$3863 = v$3859;
var v$3864 = v$3863[0];
var v$3865 = v$3863[1];
var v$3866 = v$3863[2];
var t$4181 = v$3865;
var t$4182 = [v$3864,fix$4180.$f(v$3866,v$3860)];
var v$3859 = t$4181;
var v$3860 = t$4182;
continue lab$f;
};
};
};
var f$3858 = fix$4180.$f;
t$4183 = (f$3858(t$3599,null));
t$4186 = (t$4185(t$4184,t$4183));
return t$4187(t$4186);
};
compiler0$0CompileDec$1$4.subst$3600 = function(v$3612,v$3613){return function(s$3607){var t$4191;
var fix$4188 = {};
fix$4188.$search = function(v$4031){lab$search: while (true) {if (v$4031 == null) {return false;
} else {var v$4032 = v$4031;
var v$4033 = v$4032[0];
var v$4034 = v$4032[1];
var v$4035 = v$4032[2];
if (((compiler0$0CompileDec$1$3.lt$2780(v$3613,v$4033))?true:(compiler0$0CompileDec$1$3.lt$2780(v$4033,v$3613)))?false:true) {return true;
} else {if (compiler0$0CompileDec$1$3.lt$2780(v$3613,v$4033)) {var t$4189 = v$4034;
var v$4031 = t$4189;
continue lab$search;
} else {var t$4190 = v$4035;
var v$4031 = t$4190;
continue lab$search;
};
};
};
};
};
var search$4030 = fix$4188.$search;
t$4191 = (search$4030(s$3607));
if (t$4191) {return compiler0$0CompileDec$1$4.insert$2942(v$3612,compiler0$0CompileDec$1$4.remove$3197(v$3613,s$3607));
} else {return s$3607;
};
};
};
compiler0$0CompileDec$1$4.apply$3614 = function(f$3617,s$3620){var fix$4192 = {};
fix$4192.$appl = function(v$3624){lab$appl: while (true) {if (v$3624 == null) {return 0;
} else {var v$3636 = v$3624;
var v$3637 = v$3636[0];
var v$3638 = v$3636[1];
var v$3639 = v$3636[2];
fix$4192.$appl(v$3638);
f$3617(v$3637);
var t$4193 = v$3639;
var v$3624 = t$4193;
continue lab$appl;
};
};
};
var appl$3621 = fix$4192.$appl;
return appl$3621(s$3620);
};
compiler0$0CompileDec$1$4.layoutSet$3640 = function(v$3659,v$3658,v$3657){return function(layoutItem$3648){return function(s$3651){var t$4194;
var v$3655 = [0,v$3658];
var t$4201;
var t$4200 = basis$0List$1.map$697;
var t$4199 = layoutItem$3648;
var t$4198;
var fix$4195 = {};
fix$4195.$f = function(v$3870,v$3871){lab$f: while (true) {if (v$3870 == null) {return v$3871;
} else {var v$3874 = v$3870;
var v$3875 = v$3874[0];
var v$3876 = v$3874[1];
var v$3877 = v$3874[2];
var t$4196 = v$3876;
var t$4197 = [v$3875,fix$4195.$f(v$3877,v$3871)];
var v$3870 = t$4196;
var v$3871 = t$4197;
continue lab$f;
};
};
};
var f$3869 = fix$4195.$f;
t$4198 = (f$3869(s$3651,null));
t$4201 = (t$4200(t$4199,t$4198));
t$4194 = [t$4201,v$3655,v$3659,3,v$3657];
return [0,t$4194];
};
};
};
compiler0$0CompileDec$1$4.pu_bal$3660 = pickle$0pickle$1.enumGen$2158(function(v$3879){var v$3880 = v$3879[0];
var v$3881 = v$3879[1];
switch (v$3880) { case 0: {switch (v$3881) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3881) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3881) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
},["OrderSet.bal",[1,[2,[0,null]]]]);
compiler0$0CompileDec$1$4.pu$3661 = function(pu_elt$3664){var funE$3673;
var v$4058 = null;
funE$3673 = (function(v$4059){return pickle$0pickle$1.con0$1988(v$4058,v$4059);
});
return pickle$0pickle$1.dataGen$1488(["OrderSet.Set",function(v$3885){return (v$3885 == null)?0:1;
},[funE$3673,[function(pu$3886){return pickle$0pickle$1.con1$2014(function(v$3887){return v$3887;
},function(v$3888){if (v$3888 == null) {basis$0General$1.print$163("Impossible.OrderSet.pu.N");
throw [compiler0$0CompileDec$1$4.en$Impossible$2838,"Impossible.OrderSet.pu.N"];
} else {return v$3888;
};
},pickle$0pickle$1.tup4Gen0$2377(pu_elt$3664,pu$3886,pu$3886,compiler0$0CompileDec$1$4.pu_bal$3660));
},null]]]);
};
return 0;
})();
