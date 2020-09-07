if ((typeof(compiler0$0OptLambda$1$6)) == "undefined") {compiler0$0OptLambda$1$6 = {};
};
(function(){compiler0$0OptLambda$1$6.en$DiGraphExn$2500 = new String("DiGraphExn");
compiler0$0OptLambda$1$6.pp$2501 = function(t$2504){return tools$0PrettyPrint$1.flatten$936(tools$0PrettyPrint$1.format$937(tools$0Flags$1$1.colwidth$100[0],t$2504));
};
compiler0$0OptLambda$1$6.log$2505 = function(s$2508){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$2508 + "\n");
};
compiler0$0OptLambda$1$6.die$2509 = function(errmsg$2512){return tools$0Crash$1.impossible$59("IntDiGraph." + errmsg$2512);
};
compiler0$0OptLambda$1$6.footnote$2513 = function(v$4016,v$4017){return v$4016;
};
compiler0$0OptLambda$1$6.freshAttributes$2520 = function(v$2522){var v$2523 = [false];
var v$2524 = [0];
var v$2525 = [0];
return [[0],v$2524,v$2525,[0],v$2523];
};
compiler0$0OptLambda$1$6.getOutSet$2528 = function(n$2531){return n$2531[0][1][2];
};
compiler0$0OptLambda$1$6.getNodes$2537 = function(out$2540){return basis$0List$1.map$332(function(v$2544){return v$2544[0];
},out$2540[0]);
};
compiler0$0OptLambda$1$6.getAttributes$2547 = function(n$2550){return n$2550[0][1][0];
};
compiler0$0OptLambda$1$6.setAttributes$2556 = function(n$2559,attr$2562){return (n$2559[0][1][0][0] = attr$2562,0);
};
compiler0$0OptLambda$1$6.getVisited$2563 = function(n$2566){return n$2566[0][1][0][0][4];
};
compiler0$0OptLambda$1$6.setVisited$2571 = function(n$2574,visited$2577){return (n$2574[0][1][0][0][4][0] = visited$2577,0);
};
compiler0$0OptLambda$1$6.getInEdges$2582 = function(n$2585){return n$2585[0][1][0][0][1];
};
compiler0$0OptLambda$1$6.setInEdges$2590 = function(n$2593,i$2596){return (n$2593[0][1][0][0][1][0] = i$2596,0);
};
compiler0$0OptLambda$1$6.getOutEdges$2601 = function(n$2604){return n$2604[0][1][0][0][2];
};
compiler0$0OptLambda$1$6.setOutEdges$2609 = function(n$2612,u$2615){return (n$2612[0][1][0][0][2][0] = u$2615,0);
};
compiler0$0OptLambda$1$6.getDfsNo$2620 = function(n$2623){return n$2623[0][1][0][0][0];
};
compiler0$0OptLambda$1$6.setDfsNo$2628 = function(n$2631,u$2634){return (n$2631[0][1][0][0][0][0] = u$2634,0);
};
compiler0$0OptLambda$1$6.getSccNo$2639 = function(n$2642){return n$2642[0][1][0][0][3];
};
compiler0$0OptLambda$1$6.setSccNo$2647 = function(n$2650,u$2653){return (n$2650[0][1][0][0][3][0] = u$2653,0);
};
compiler0$0OptLambda$1$6.mkGraph$2658 = function(v$2660){return [compiler0$0OptLambda$1$5.empty$291(0)];
};
compiler0$0OptLambda$1$6.mkNode$2661 = function(i$2664){var t$4025;
var t$4022;
var v$2665 = [i$2664];
var v$2666 = [null];
var t$4024;
var t$4023;
var v$3220 = [false];
var v$3221 = [0];
var v$3222 = [0];
t$4023 = [[0],v$3221,v$3222,[0],v$3220];
t$4024 = [t$4023];
t$4022 = [t$4024,v$2665,v$2666];
t$4025 = [0,t$4022];
return [t$4025];
};
compiler0$0OptLambda$1$6.getInfoNode$2668 = function(n$2671){return n$2671[0][1][1];
};
compiler0$0OptLambda$1$6.setInfoNode$2677 = function(n$2680,i$2683){return (n$2680[0][1][1][0] = i$2683,0);
};
compiler0$0OptLambda$1$6.getNodeId$2689 = function(n$2692){return n$2692[0][1][1][0];
};
compiler0$0OptLambda$1$6.findNode$2693 = function(id$2696,g$2699){var v$2704 = compiler0$0OptLambda$1$5.lookup$307(g$2699[0],id$2696);
switch (v$2704[0]) { case 0: {return v$2704[1];
 break; }default: {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"DiGraph error in findNode: Node doesn't exist."];
} };
};
compiler0$0OptLambda$1$6.findNodeOpt$2707 = function(id$2710,g$2713){return compiler0$0OptLambda$1$5.lookup$307(g$2713[0],id$2710);
};
compiler0$0OptLambda$1$6.addNode$2714 = function(n$2717,g$2720){switch ((compiler0$0OptLambda$1$5.lookup$307(g$2720[0],n$2717[0][1][1][0]))[0]) { case 1: {return (g$2720[0] = (compiler0$0OptLambda$1$5.add$567(n$2717[0][1][1][0],n$2717,g$2720[0])),0);
 break; }default: {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"DiGraph error in addNode: Node allready exist."];
} };
};
compiler0$0OptLambda$1$6.addNodeWithUpdate$2725 = function(n$2728,g$2731){try {switch ((compiler0$0OptLambda$1$5.lookup$307(g$2731[0],n$2728[0][1][1][0]))[0]) { case 1: {return (g$2731[0] = (compiler0$0OptLambda$1$5.add$567(n$2728[0][1][1][0],n$2728,g$2731[0])),0);
 break; }default: {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"DiGraph error in addNode: Node allready exist."];
} };
} catch(v$4026) {return (function(v$2734){var t$4027 = v$2734;
if (t$4027[0] == compiler0$0OptLambda$1$6.en$DiGraphExn$2500) {var n$3239;
var id$3245 = n$2728[0][1][1][0];
var v$3247 = compiler0$0OptLambda$1$5.lookup$307(g$2731[0],id$3245);
switch (v$3247[0]) { case 0: {n$3239 = v$3247[1];
 break; }default: {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"DiGraph error in findNode: Node doesn't exist."];
} };
var i$3240 = n$2728[0][1][1][0];
return (n$3239[0][1][1][0] = i$3240,0);
} else {throw v$2734;
};
})(v$4026);
};
};
compiler0$0OptLambda$1$6.findEdge$2735 = function(n1$2738,n2$2741){var v$2744 = n1$2738[0];
var v$2758 = v$2744[1];
var v$2759 = v$2758[2];
try {return (edlib$0edList$1.first$1115(function(v$2752){return v$2752[0] == n2$2741;
},v$2759[0]))[1];
} catch(v$4028) {return (function(v$2757){var t$4029 = v$2757;
if (t$4029[0] == edlib$0edList$1.en$First$1114) {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"Digraph error in findEdge: Edge does not exist."];
} else {throw v$2757;
};
})(v$4028);
};
};
compiler0$0OptLambda$1$6.findEdgeOpt$2760 = function(n1$2763,n2$2766){var v$2769 = n1$2763[0];
var v$2783 = v$2769[1];
var v$2784 = v$2783[2];
try {return [0,(edlib$0edList$1.first$1115(function(v$2777){return v$2777[0] == n2$2766;
},v$2784[0]))[1]];
} catch(v$4030) {return (function(v$2782){var t$4031 = v$2782;
if (t$4031[0] == edlib$0edList$1.en$First$1114) {return [1];
} else {throw v$2782;
};
})(v$4030);
};
};
compiler0$0OptLambda$1$6.addEdge$2785 = function(n1$2788,n2$2791,info$2794){var v$2797 = n1$2788[0];
var v$2806 = v$2797[1];
var v$2807 = v$2806[2];
var t$4035;
var t$4034;
var fix$4032 = {};
fix$4032.$member = function(v$3970){lab$member: while (true) {if (v$3970 == null) {return false;
} else {var v$3971 = v$3970;
var v$3972 = v$3971[0];
var v$3973 = v$3971[1];
if (n2$2791 == v$3972) {return true;
} else {var t$4033 = v$3973;
var v$3970 = t$4033;
continue lab$member;
};
};
};
};
var member$3969 = fix$4032.$member;
t$4034 = (member$3969(basis$0List$1.map$332(function(v$3278){return v$3278[0];
},v$2807[0])));
t$4035 = (t$4034 == false);
if (t$4035) {(v$2807[0] = [[n2$2791,info$2794],v$2807[0]],0);
var u$3282 = SmlPrims.chk_ovf_i32(n1$2788[0][1][0][0][2][0] + 1);
(n1$2788[0][1][0][0][2][0] = u$3282,0);
var i$3289 = SmlPrims.chk_ovf_i32(n2$2791[0][1][0][0][1][0] + 1);
return (n2$2791[0][1][0][0][1][0] = i$3289,0);
} else {return 0;
};
};
compiler0$0OptLambda$1$6.addEdgeWithUpdate$2808 = function(n1$2811,n2$2814,info$2817){var v$2820 = n1$2811[0];
var v$2839 = v$2820[1];
var v$2840 = v$2839[2];
var t$4039;
var t$4038;
var fix$4036 = {};
fix$4036.$member = function(v$3979){lab$member: while (true) {if (v$3979 == null) {return false;
} else {var v$3980 = v$3979;
var v$3981 = v$3980[0];
var v$3982 = v$3980[1];
if (n2$2814 == v$3981) {return true;
} else {var t$4037 = v$3982;
var v$3979 = t$4037;
continue lab$member;
};
};
};
};
var member$3978 = fix$4036.$member;
t$4038 = (member$3978(basis$0List$1.map$332(function(v$3310){return v$3310[0];
},v$2840[0])));
t$4039 = (t$4038 == false);
if (t$4039) {(v$2840[0] = [[n2$2814,info$2817],v$2840[0]],0);
var u$3314 = SmlPrims.chk_ovf_i32(n1$2811[0][1][0][0][2][0] + 1);
(n1$2811[0][1][0][0][2][0] = u$3314,0);
var i$3321 = SmlPrims.chk_ovf_i32(n2$2814[0][1][0][0][1][0] + 1);
return (n2$2814[0][1][0][0][1][0] = i$3321,0);
} else {return (v$2840[0] = (basis$0List$1.map$332(function(v$2832){var v$2837 = v$2832[0];
var v$2838 = v$2832[1];
return (v$2837 == n2$2814)?[v$2837,info$2817]:[v$2837,v$2838];
},v$2840[0])),0);
};
};
compiler0$0OptLambda$1$6.rootNodes$2841 = function(g$2844){return compiler0$0OptLambda$1$5.fold$1036(function(v$3335){var v$3336 = v$3335[0];
var v$3337 = v$3335[1];
return (v$3336[0][1][0][0][1][0] == 0)?[v$3336,v$3337]:v$3337;
},null,g$2844[0]);
};
compiler0$0OptLambda$1$6.leafNodes$2856 = function(g$2859){return compiler0$0OptLambda$1$5.fold$1036(function(v$3341){var v$3342 = v$3341[0];
var v$3343 = v$3341[1];
return (v$3342[0][1][0][0][2][0] == 0)?[v$3342,v$3343]:v$3343;
},null,g$2859[0]);
};
compiler0$0OptLambda$1$6.succNodes$2871 = function(n$2874){var v$2877 = n$2874[0];
var v$2878 = v$2877[1];
var v$2879 = v$2878[2];
return basis$0List$1.map$332(function(v$3347){return v$3347[0];
},v$2879[0]);
};
compiler0$0OptLambda$1$6.predNodes$2880 = function(n$2883,g$2886){return compiler0$0OptLambda$1$5.fold$1036(function(v$3360){var v$3361 = v$3360[0];
var v$3362 = v$3360[1];
var v$3363 = v$3361[0];
var v$3364 = v$3363[1];
var v$3365 = v$3364[2];
var t$4042;
var fix$4040 = {};
fix$4040.$member = function(v$3377){lab$member: while (true) {if (v$3377 == null) {return false;
} else {var v$3378 = v$3377;
var v$3379 = v$3378[0];
var v$3380 = v$3378[1];
if (n$2883 == v$3379) {return true;
} else {var t$4041 = v$3380;
var v$3377 = t$4041;
continue lab$member;
};
};
};
};
var member$3376 = fix$4040.$member;
t$4042 = (member$3376(basis$0List$1.map$332(function(v$3374){return v$3374[0];
},v$3365[0])));
return t$4042?[v$3361,v$3362]:v$3362;
},null,g$2886[0]);
};
compiler0$0OptLambda$1$6.fold$2903 = function(f$2906,acc$2909,g$2912){return compiler0$0OptLambda$1$5.fold$1036(f$2906,acc$2909,g$2912[0]);
};
compiler0$0OptLambda$1$6.reachable$2913 = function(n$2916){var fix$4043 = {};
fix$4043.$reachable$ = function(v$2938,v$4018){var v$2939 = v$2938[0][1];
var v$2940 = v$2939[2];
if (v$2938[0][1][0][0][4][0] == false) {(v$2938[0][1][0][0][4][0] = true,0);
var t$4047;
var v$3988 = [v$2938,v$4018];
var fix$4048 = {};
fix$4048.$foldr = function(v$3990){if (v$3990 == null) {return v$3988;
} else {var v$3991 = v$3990;
var v$3992 = v$3991[0];
var v$3993 = v$3991[1];
var v$3995 = fix$4048.$foldr(v$3993);
return fix$4043.$reachable$(v$3992,v$3995);
};
};
var foldr$3989 = fix$4048.$foldr;
t$4047 = (function(v$4021){return foldr$3989(v$4021);
});
return t$4047(basis$0List$1.map$332(function(v$3411){return v$3411[0];
},v$2940[0]));
} else {return v$4018;
};
};
var reachable$$2917 = fix$4043.$reachable$;
var fix$4044 = {};
fix$4044.$SetVisitedFalse = function(node$2945){var v$2956 = node$2945[0][1];
var v$2957 = v$2956[2];
if (node$2945[0][1][0][0][4][0] == true) {(node$2945[0][1][0][0][4][0] = false,0);
var fix$4045 = {};
fix$4045.$app = function(v$3425){lab$app: while (true) {if (v$3425 == null) {return 0;
} else {var v$3426 = v$3425;
var v$3427 = v$3426[0];
var v$3428 = v$3426[1];
fix$4044.$SetVisitedFalse(v$3427);
var t$4046 = v$3428;
var v$3425 = t$4046;
continue lab$app;
};
};
};
var app$3424 = fix$4045.$app;
return app$3424(basis$0List$1.map$332(function(v$3430){return v$3430[0];
},v$2957[0]));
} else {return 0;
};
};
var SetVisitedFalse$2942 = fix$4044.$SetVisitedFalse;
return [reachable$$2917(n$2916,null),SetVisitedFalse$2942(n$2916)][0];
};
compiler0$0OptLambda$1$6.domGraph$2958 = function(g$2961){return compiler0$0OptLambda$1$5.dom$907(g$2961[0]);
};
compiler0$0OptLambda$1$6.rangeGraph$2962 = function(g$2965){return compiler0$0OptLambda$1$5.range$934(g$2965[0]);
};
compiler0$0OptLambda$1$6.layoutNode$2966 = function(layoutInfo$2969,n$2972){return [0,[null,[1],"",0,layoutInfo$2969(n$2972[0][1][1][0])]];
};
compiler0$0OptLambda$1$6.layoutGraph$2978 = function(layoutInfo$2981,layoutEdgeInfo$2984,layoutId$2987,rootNodes$2990){var fix$4049 = {};
fix$4049.$makeChildren = function(level$2995,node$2998){return basis$0List$1.map$332(function(v$3002){var v$3021 = v$3002[0];
var v$3022 = v$3002[1];
if (v$3021[0][1][0][0][4][0] == false) {(v$3021[0][1][0][0][4][0] = true,0);
var startStr$3009 = ((("   --" + (layoutId$2987(node$2998[0][1][1][0]))) + (layoutEdgeInfo$2984(v$3022))) + "-->   ") + (layoutInfo$2981(v$3021[0][1][1][0]));
var t$4061;
var v$3012 = startStr$3009.length;
t$4061 = [fix$4049.$makeChildren(SmlPrims.chk_ovf_i32(level$2995 + startStr$3009.length),v$3021),[1],";",v$3012,startStr$3009];
return [0,t$4061];
} else {var startStr$3015 = (((("   --" + (layoutId$2987(node$2998[0][1][1][0]))) + (layoutEdgeInfo$2984(v$3022))) + "-->   [*") + (layoutId$2987(v$3021[0][1][1][0]))) + "*]";
return [0,[[[1," "],null],[1],";",startStr$3015.length,startStr$3015]];
};
},node$2998[0][1][2][0]);
};
var makeChildren$2992 = fix$4049.$makeChildren;
var t$4060;
var t$4059;
var t$4058 = basis$0List$1.rev$257;
var t$4057;
var fix$4050 = {};
fix$4050.$foldl = function(v$3481,v$3482){lab$foldl: while (true) {if (v$3482 == null) {return v$3481;
} else {var v$3483 = v$3482;
var v$3484 = v$3483[0];
var v$3485 = v$3483[1];
var t$4051;
if (v$3484[0][1][0][0][4][0] == false) {(v$3484[0][1][0][0][4][0] = true,0);
var t$4054;
var t$4053;
var t$4052;
var v$3511 = layoutInfo$2981(v$3484[0][1][1][0]);
t$4052 = [makeChildren$2992(0,v$3484),[1],"",0,v$3511];
t$4053 = [0,t$4052];
t$4054 = [t$4053,v$3481];
t$4051 = t$4054;
} else {t$4051 = v$3481;
};
var t$4055 = t$4051;
var t$4056 = v$3485;
var v$3481 = t$4055;
var v$3482 = t$4056;
continue lab$foldl;
};
};
};
var foldl$3480 = fix$4050.$foldl;
var v$4019 = null;
t$4057 = (foldl$3480(v$4019,rootNodes$2990));
t$4059 = (t$4058(t$4057));
t$4060 = [t$4059,[1],"...Finishing layout of graph]",0,"[Starting layout of graph..."];
return [0,t$4060];
};
compiler0$0OptLambda$1$6.exportGraphVCG$3046 = function(title$3049,layoutInfo$3052,layoutEdgeInfo$3055,layoutId$3058,classes$3061,g$3064,out$3067){var attrGraph$3132 = (((((((((((("title: \"" + title$3049) + "\"") + "\n") + "splines: yes") + "\n") + "finetuning: no") + "\n") + "folding: 1") + "\n") + "orientation: left_to_right") + "\n") + "ignore_singles: yes") + "\n";
var range_g$3134 = compiler0$0OptLambda$1$5.range$934(g$3064[0]);
basis$0TextIO$1.output$110(out$3067,"graph: {\n");
basis$0TextIO$1.output$110(out$3067,attrGraph$3132);
basis$0List$1.map$697(function(v$3667){var v$3668 = v$3667[0];
var v$3669 = v$3667[1];
return basis$0TextIO$1.output$110(out$3067,(((("classname " + (basis$0Int32$1.toString$458(v$3668))) + ":\"") + v$3669) + "\"") + "\n");
},classes$3061);
basis$0List$1.map$697(function(node$3675){var titleNode$3676 = ("title: \"" + (layoutId$3058(node$3675[0][1][1][0]))) + "\" ";
var labelNode$3679 = ("label: \"" + (layoutInfo$3052(node$3675[0][1][1][0]))) + "\" ";
return basis$0TextIO$1.output$110(out$3067,(("node: {" + titleNode$3676) + labelNode$3679) + "}\n");
},range_g$3134);
basis$0List$1.map$697(function(node$3687){var sourcename$3688 = ("sourcename: \"" + (layoutId$3058(node$3687[0][1][1][0]))) + "\" ";
return basis$0List$1.map$697(function(v$3693){var v$3694 = v$3693[0];
var v$3695 = v$3693[1];
return basis$0TextIO$1.output$110(out$3067,((((((("edge: {" + sourcename$3688) + (("targetname: \"" + (layoutId$3058(v$3694[0][1][1][0]))) + "\" ")) + "class: ") + "1 ") + "label: \" ") + (layoutEdgeInfo$3055(v$3695))) + "\"") + "}\n");
},node$3687[0][1][2][0]);
},range_g$3134);
basis$0List$1.map$697(function(v$3706){var v$3707 = v$3706[0];
var v$3708 = v$3706[1];
var v$3709 = v$3706[2];
var class$3710 = ("class: " + (basis$0Int32$1.toString$458(v$3707))) + " ";
var fix$4062 = {};
fix$4062.$app = function(v$3716){lab$app: while (true) {if (v$3716 == null) {return 0;
} else {var v$3717 = v$3716;
var v$3718 = v$3717[0];
var v$3719 = v$3717[1];
var v$3721 = v$3718[0];
var v$3722 = v$3718[1];
var t$4073 = basis$0TextIO$1.output$110;
var t$4072 = out$3067;
var t$4071;
var t$4070;
var t$4069 = (("edge: {" + (("sourcename: \"" + (layoutId$3058(v$3721[0][1][1][0]))) + "\" ")) + (("targetname: \"" + (layoutId$3058(v$3722[0][1][1][0]))) + "\" ")) + class$3710;
var t$4063;
var edgeInfo$3735;
var v$3736 = v$3721[0];
var v$3737 = v$3736[1];
var v$3738 = v$3737[2];
try {edgeInfo$3735 = (edlib$0edList$1.first$1115((function(env$4066){return function(v$3739){var v$4065 = env$4066[0];
return v$3739[0] == v$4065;
};
})([v$3722]),v$3738[0]))[1];
} catch(v$4064) {edgeInfo$3735 = (((function(env$4067){return function(v$3745){var t$4068 = v$3745;
if (t$4068[0] == edlib$0edList$1.en$First$1114) {throw [compiler0$0OptLambda$1$6.en$DiGraphExn$2500,"Digraph error in findEdge: Edge does not exist."];
} else {throw v$3745;
};
};
})([]))(v$4064));
};
t$4063 = (((("label: \"" + v$3708) + "(") + (layoutEdgeInfo$3055(edgeInfo$3735))) + ")\"");
t$4070 = (t$4069 + t$4063);
t$4071 = (t$4070 + "}\n");
t$4073(t$4072,t$4071);
var t$4074 = v$3719;
var v$3716 = t$4074;
continue lab$app;
};
};
};
var app$3715 = fix$4062.$app;
return app$3715(v$3709);
},classes$3061);
return basis$0TextIO$1.output$110(out$3067,"}\n");
};
return 0;
})();