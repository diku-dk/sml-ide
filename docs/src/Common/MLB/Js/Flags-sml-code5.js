if ((typeof(tools$0Flags$1$5)) == "undefined") {tools$0Flags$1$5 = {};
};
(function(){tools$0Flags$1$5.eq_kindOfHelp$3760 = function(v$3762,v$3763){switch (v$3762) { case 0: {switch (v$3763) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$3763) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$3763) { case 2: {return true;
 break; }default: {return false;
} };
 break; } };
};
tools$0Flags$1$5.dir$2490 = [tools$0Flags$1$4.empty$396(0)];
tools$0Flags$1$5.bool_entry$2491 = function(e$2494){switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$2494[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("bool_entry: entry " + e$2494[2]) + " already in directory");
 break; }default: {var t$4658 = tools$0Flags$1$5.dir$2490;
var t$4657;
var t$4656 = tools$0Flags$1$4.add$672;
var t$4655 = e$2494[2];
var t$4654 = [3,e$2494];
var t$4653;
var v$2521 = e$2494[5];
switch (v$2521[0]) { case 0: {var v$2523 = v$2521[1];
t$4653 = (tools$0Flags$1$4.add$672(v$2523,[3,e$2494],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4653 = tools$0Flags$1$5.dir$2490[0];
} };
t$4657 = (t$4656(t$4655,t$4654,t$4653));
(t$4658[0] = t$4657,0);
var r$2506 = e$2494[1];
return function(v$2512){return r$2506[0];
};
} };
};
tools$0Flags$1$5.bool_action_entry$2532 = function(e$2535){switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$2535[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("bool_action_entry: entry " + e$2535[2]) + " already in directory");
 break; }default: {var t$4664 = tools$0Flags$1$5.dir$2490;
var t$4663;
var t$4662 = tools$0Flags$1$4.add$672;
var t$4661 = e$2535[2];
var t$4660 = [4,e$2535];
var t$4659;
var v$2553 = e$2535[6];
switch (v$2553[0]) { case 0: {var v$2555 = v$2553[1];
t$4659 = (tools$0Flags$1$4.add$672(v$2555,[4,e$2535],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4659 = tools$0Flags$1$5.dir$2490[0];
} };
t$4663 = (t$4662(t$4661,t$4660,t$4659));
return (t$4664[0] = t$4663,0);
} };
};
tools$0Flags$1$5.string_entry$2564 = function(e$2567){switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$2567[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("string_entry: entry " + e$2567[2]) + " already in directory");
 break; }default: {var t$4670 = tools$0Flags$1$5.dir$2490;
var t$4669;
var t$4668 = tools$0Flags$1$4.add$672;
var t$4667 = e$2567[2];
var t$4666 = [0,e$2567];
var t$4665;
var v$2594 = e$2567[4];
switch (v$2594[0]) { case 0: {var v$2596 = v$2594[1];
t$4665 = (tools$0Flags$1$4.add$672(v$2596,[0,e$2567],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4665 = tools$0Flags$1$5.dir$2490[0];
} };
t$4669 = (t$4668(t$4667,t$4666,t$4665));
(t$4670[0] = t$4669,0);
var r$2579 = e$2567[1];
return function(v$2585){return r$2579[0];
};
} };
};
tools$0Flags$1$5.stringlist_entry$2605 = function(e$2608){switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$2608[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("stringlist_entry: entry " + e$2608[2]) + " already in directory");
 break; }default: {var t$4676 = tools$0Flags$1$5.dir$2490;
var t$4675;
var t$4674 = tools$0Flags$1$4.add$672;
var t$4673 = e$2608[2];
var t$4672 = [1,e$2608];
var t$4671;
var v$2635 = e$2608[4];
switch (v$2635[0]) { case 0: {var v$2637 = v$2635[1];
t$4671 = (tools$0Flags$1$4.add$672(v$2637,[1,e$2608],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4671 = tools$0Flags$1$5.dir$2490[0];
} };
t$4675 = (t$4674(t$4673,t$4672,t$4671));
(t$4676[0] = t$4675,0);
var r$2620 = e$2608[1];
return function(v$2626){return r$2620[0];
};
} };
};
tools$0Flags$1$5.int_entry$2646 = function(e$2649){switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$2649[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("int_entry: entry " + e$2649[2]) + " already in directory");
 break; }default: {var t$4682 = tools$0Flags$1$5.dir$2490;
var t$4681;
var t$4680 = tools$0Flags$1$4.add$672;
var t$4679 = e$2649[2];
var t$4678 = [2,e$2649];
var t$4677;
var v$2676 = e$2649[4];
switch (v$2676[0]) { case 0: {var v$2678 = v$2676[1];
t$4677 = (tools$0Flags$1$4.add$672(v$2678,[2,e$2649],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4677 = tools$0Flags$1$5.dir$2490[0];
} };
t$4681 = (t$4680(t$4679,t$4678,t$4677));
(t$4682[0] = t$4681,0);
var r$2661 = e$2649[1];
return function(v$2667){return r$2661[0];
};
} };
};
tools$0Flags$1$5.lookup_flag_entry$2687 = function(key$2690){var v$2697 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2690);
switch (v$2697[0]) { case 0: {var v$2699 = v$2697[1];
switch (v$2699[0]) { case 3: {return v$2699[1][1];
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_flag_entry: entry " + key$2690) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_flag_entry: no entry " + key$2690) + " in directory");
} };
};
tools$0Flags$1$5.lookup_string_entry$2706 = function(key$2709){var v$2716 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2709);
switch (v$2716[0]) { case 0: {var v$2718 = v$2716[1];
switch (v$2718[0]) { case 0: {return v$2718[1][1];
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_string_entry: entry " + key$2709) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_string_entry: no entry " + key$2709) + " in directory");
} };
};
tools$0Flags$1$5.lookup_stringlist_entry$2725 = function(key$2728){var v$2735 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2728);
switch (v$2735[0]) { case 0: {var v$2737 = v$2735[1];
switch (v$2737[0]) { case 1: {return v$2737[1][1];
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_stringlist_entry: entry " + key$2728) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_stringlist_entry: no entry " + key$2728) + " in directory");
} };
};
tools$0Flags$1$5.lookup_int_entry$2744 = function(key$2747){var v$2754 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2747);
switch (v$2754[0]) { case 0: {var v$2756 = v$2754[1];
switch (v$2756[0]) { case 2: {return v$2756[1][1];
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_int_entry: entry " + key$2747) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("lookup_int_entry: no entry " + key$2747) + " in directory");
} };
};
tools$0Flags$1$5.get_string_entry$2763 = function(x$3824){var t$4683;
var v$4555 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],x$3824);
switch (v$4555[0]) { case 0: {var v$4556 = v$4555[1];
switch (v$4556[0]) { case 0: {t$4683 = v$4556[1][1];
 break; }default: {t$4683 = (tools$0Flags$1$1.die$69(("lookup_string_entry: entry " + x$3824) + " is of wrong kind"));
} };
 break; }default: {t$4683 = (tools$0Flags$1$1.die$69(("lookup_string_entry: no entry " + x$3824) + " in directory"));
} };
return t$4683[0];
};
tools$0Flags$1$5.get_stringlist_entry$2764 = function(x$3836){var t$4684;
var v$4563 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],x$3836);
switch (v$4563[0]) { case 0: {var v$4564 = v$4563[1];
switch (v$4564[0]) { case 1: {t$4684 = v$4564[1][1];
 break; }default: {t$4684 = (tools$0Flags$1$1.die$69(("lookup_stringlist_entry: entry " + x$3836) + " is of wrong kind"));
} };
 break; }default: {t$4684 = (tools$0Flags$1$1.die$69(("lookup_stringlist_entry: no entry " + x$3836) + " in directory"));
} };
return t$4684[0];
};
tools$0Flags$1$5.is_on0$2765 = function(key$2768){var v$2778 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2768);
switch (v$2778[0]) { case 0: {var v$2780 = v$2778[1];
switch (v$2780[0]) { case 3: {var v$2789 = v$2780[1];
var v$2790 = v$2789[1];
return function(v$2788){return v$2790[0];
};
 break; }case 4: {var v$2784 = v$2780[1];
var v$2785 = v$2784[1];
return function(v$2783){return v$2785[0];
};
 break; }default: {return tools$0Flags$1$1.die$69(("is_on0: entry " + key$2768) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("is_on0: no entry " + key$2768) + " in directory");
} };
};
tools$0Flags$1$5.is_on$2791 = function(k$2794){var t$4685;
var v$4566 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],k$2794);
switch (v$4566[0]) { case 0: {var v$4567 = v$4566[1];
switch (v$4567[0]) { case 3: {var v$4568 = v$4567[1];
var v$4569 = v$4568[1];
t$4685 = (function(v$4570){return v$4569[0];
});
 break; }case 4: {var v$4571 = v$4567[1];
var v$4572 = v$4571[1];
t$4685 = (function(v$4573){return v$4572[0];
});
 break; }default: {t$4685 = (tools$0Flags$1$1.die$69(("is_on0: entry " + k$2794) + " is of wrong kind"));
} };
 break; }default: {t$4685 = (tools$0Flags$1$1.die$69(("is_on0: no entry " + k$2794) + " in directory"));
} };
return t$4685(0);
};
tools$0Flags$1$5.turn_on$2795 = function(key$2798){var v$2808 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2798);
switch (v$2808[0]) { case 0: {var v$2810 = v$2808[1];
switch (v$2810[0]) { case 3: {return (v$2810[1][1][0] = true,0);
 break; }case 4: {var v$2816 = v$2810[1];
return v$2816[5](0);
 break; }default: {throw [basis$0Initial$1.en$Fail$54,("option " + key$2798) + " is of wrong kind"];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"invalid option: " + key$2798];
} };
};
tools$0Flags$1$5.turn_off$2823 = function(key$2826){var v$2836 = tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],key$2826);
switch (v$2836[0]) { case 0: {var v$2838 = v$2836[1];
switch (v$2838[0]) { case 3: {return (v$2838[1][1][0] = false,0);
 break; }case 4: {var v$2844 = v$2838[1];
return v$2844[4](0);
 break; }default: {return tools$0Flags$1$1.die$69(("turn_off: entry " + key$2826) + " is of wrong kind");
} };
 break; }default: {return tools$0Flags$1$1.die$69(("turn_off: no entry " + key$2826) + " in directory");
} };
};
tools$0Flags$1$5.add_string_entry$2851 = function(v$2861,v$2862){var e$3863 = ["",v$2862,v$2861,null,[1]];
switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$3863[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("string_entry: entry " + e$3863[2]) + " already in directory");
 break; }default: {var t$4691 = tools$0Flags$1$5.dir$2490;
var t$4690;
var t$4689 = tools$0Flags$1$4.add$672;
var t$4688 = e$3863[2];
var t$4687 = [0,e$3863];
var t$4686;
var v$3867 = e$3863[4];
switch (v$3867[0]) { case 0: {var v$3868 = v$3867[1];
t$4686 = (tools$0Flags$1$4.add$672(v$3868,[0,e$3863],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4686 = tools$0Flags$1$5.dir$2490[0];
} };
t$4690 = (t$4689(t$4688,t$4687,t$4686));
(t$4691[0] = t$4690,0);
var r$3869 = e$3863[1];
return function(v$3870){return r$3869[0];
};
} };
};
tools$0Flags$1$5.add_stringlist_entry$2863 = function(v$2873,v$2874){var e$3871 = ["",v$2874,v$2873,null,[1]];
switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$3871[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("stringlist_entry: entry " + e$3871[2]) + " already in directory");
 break; }default: {var t$4697 = tools$0Flags$1$5.dir$2490;
var t$4696;
var t$4695 = tools$0Flags$1$4.add$672;
var t$4694 = e$3871[2];
var t$4693 = [1,e$3871];
var t$4692;
var v$3875 = e$3871[4];
switch (v$3875[0]) { case 0: {var v$3876 = v$3875[1];
t$4692 = (tools$0Flags$1$4.add$672(v$3876,[1,e$3871],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4692 = tools$0Flags$1$5.dir$2490[0];
} };
t$4696 = (t$4695(t$4694,t$4693,t$4692));
(t$4697[0] = t$4696,0);
var r$3877 = e$3871[1];
return function(v$3878){return r$3877[0];
};
} };
};
tools$0Flags$1$5.add_int_entry$2875 = function(v$2885,v$2886){var e$3879 = ["",v$2886,v$2885,null,[1]];
switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$3879[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("int_entry: entry " + e$3879[2]) + " already in directory");
 break; }default: {var t$4703 = tools$0Flags$1$5.dir$2490;
var t$4702;
var t$4701 = tools$0Flags$1$4.add$672;
var t$4700 = e$3879[2];
var t$4699 = [2,e$3879];
var t$4698;
var v$3883 = e$3879[4];
switch (v$3883[0]) { case 0: {var v$3884 = v$3883[1];
t$4698 = (tools$0Flags$1$4.add$672(v$3884,[2,e$3879],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4698 = tools$0Flags$1$5.dir$2490[0];
} };
t$4702 = (t$4701(t$4700,t$4699,t$4698));
(t$4703[0] = t$4702,0);
var r$3885 = e$3879[1];
return function(v$3886){return r$3885[0];
};
} };
};
tools$0Flags$1$5.add_bool_entry$2887 = function(v$2898,v$2899){var e$3887 = ["",v$2899,v$2898,null,false,[1]];
switch ((tools$0Flags$1$4.lookup$412(tools$0Flags$1$5.dir$2490[0],e$3887[2]))[0]) { case 0: {return tools$0Flags$1$1.die$69(("bool_entry: entry " + e$3887[2]) + " already in directory");
 break; }default: {var t$4709 = tools$0Flags$1$5.dir$2490;
var t$4708;
var t$4707 = tools$0Flags$1$4.add$672;
var t$4706 = e$3887[2];
var t$4705 = [3,e$3887];
var t$4704;
var v$3891 = e$3887[5];
switch (v$3891[0]) { case 0: {var v$3892 = v$3891[1];
t$4704 = (tools$0Flags$1$4.add$672(v$3892,[3,e$3887],tools$0Flags$1$5.dir$2490[0]));
 break; }default: {t$4704 = tools$0Flags$1$5.dir$2490[0];
} };
t$4708 = (t$4707(t$4706,t$4705,t$4704));
(t$4709[0] = t$4708,0);
var r$3893 = e$3887[1];
return function(v$3894){return r$3893[0];
};
} };
};
tools$0Flags$1$5.lookup_notnull_menu$2900 = function(dir$2903,key$2906){var v$2943 = tools$0Flags$1$4.lookup$412(dir$2903,key$2906);
switch (v$2943[0]) { case 0: {var v$2949 = v$2943[1];
var t$4710;
switch (v$2949[0]) { case 3: {var v$3901 = v$2949[1];
t$4710 = ((v$3901[3] == null)?false:true);
 break; }case 4: {var v$3902 = v$2949[1];
t$4710 = ((v$3902[3] == null)?false:true);
 break; }case 0: {var v$3903 = v$2949[1];
t$4710 = ((v$3903[3] == null)?false:true);
 break; }case 2: {var v$3904 = v$2949[1];
t$4710 = ((v$3904[3] == null)?false:true);
 break; }default: {t$4710 = true;
} };
return t$4710?v$2943:[1];
 break; }default: {return [1];
} };
};
tools$0Flags$1$5.opt$2950 = function(s$2953){var v$2963;
var fix$4711 = {};
fix$4711.$h = function(v$3908,v$3909){lab$h: while (true) {if (v$3908 < 0) {return v$3909;
} else {var t$4712 = SmlPrims.chk_ovf_i32(v$3908 - 1);
var t$4713 = [s$2953.charCodeAt(v$3908),v$3909];
var v$3908 = t$4712;
var v$3909 = t$4713;
continue lab$h;
};
};
};
var h$3906 = fix$4711.$h;
v$2963 = (h$3906(SmlPrims.chk_ovf_i32(s$2953.length - 1),null));
if (v$2963 == null) {return [1];
} else {var v$2965 = v$2963;
switch (v$2965[0]) { case 45: {var v$2967 = v$2965[1];
if (v$2967 == null) {return [0,SmlPrims.implode(v$2963[1])];
} else {var v$2969 = v$2967;
switch (v$2969[0]) { case 45: {return [0,SmlPrims.implode(v$2969[1])];
 break; }default: {return [0,SmlPrims.implode(v$2963[1])];
} };
};
 break; }default: {return [1];
} };
};
};
tools$0Flags$1$5.negation$2976 = function(s$2979){var v$2989;
var fix$4714 = {};
fix$4714.$h = function(v$3919,v$3920){lab$h: while (true) {if (v$3919 < 0) {return v$3920;
} else {var t$4715 = SmlPrims.chk_ovf_i32(v$3919 - 1);
var t$4716 = [s$2979.charCodeAt(v$3919),v$3920];
var v$3919 = t$4715;
var v$3920 = t$4716;
continue lab$h;
};
};
};
var h$3917 = fix$4714.$h;
v$2989 = (h$3917(SmlPrims.chk_ovf_i32(s$2979.length - 1),null));
if (v$2989 == null) {return [1];
} else {var v$2991 = v$2989;
switch (v$2991[0]) { case 110: {var v$2993 = v$2991[1];
if (v$2993 == null) {return [1];
} else {var v$2995 = v$2993;
switch (v$2995[0]) { case 111: {var v$2997 = v$2995[1];
if (v$2997 == null) {return [1];
} else {var v$2999 = v$2997;
switch (v$2999[0]) { case 95: {return [0,SmlPrims.implode(v$2999[1])];
 break; }default: {return [1];
} };
};
 break; }default: {return [1];
} };
};
 break; }default: {return [1];
} };
};
};
tools$0Flags$1$5.lookup_key$3003 = function(key$3006,l$3009){var fix$4717 = {};
fix$4717.$look = function(v$3013){lab$look: while (true) {if (v$3013 == null) {return [1];
} else {var v$3025 = v$3013;
var v$3026 = v$3025[0];
var v$3027 = v$3026[0];
var v$3028 = v$3026[1];
var v$3029 = v$3025[1];
if (key$3006 == v$3027) {return [0,v$3028];
} else {var t$4718 = v$3029;
var v$3013 = t$4718;
continue lab$look;
};
};
};
};
var look$3010 = fix$4717.$look;
return look$3010(l$3009);
};
tools$0Flags$1$5.read_options$3030 = function(v$3275,v$3277,v$3276){var fix$4719 = {};
fix$4719.$loop = function(v$3039){lab$loop: while (true) {if (v$3039 == null) {return null;
} else {var v$3272 = v$3039;
var v$3273 = v$3272[0];
var v$3274 = v$3272[1];
var v$3051;
var v$4576;
var fix$4720 = {};
fix$4720.$h = function(v$4579,v$4580){lab$h: while (true) {if (v$4579 < 0) {return v$4580;
} else {var t$4721 = SmlPrims.chk_ovf_i32(v$4579 - 1);
var t$4722 = [v$3273.charCodeAt(v$4579),v$4580];
var v$4579 = t$4721;
var v$4580 = t$4722;
continue lab$h;
};
};
};
var h$4577 = fix$4720.$h;
v$4576 = (h$4577(SmlPrims.chk_ovf_i32(v$3273.length - 1),null));
if (v$4576 == null) {v$3051 = [1];
} else {var v$4581 = v$4576;
switch (v$4581[0]) { case 45: {var v$4582 = v$4581[1];
if (v$4582 == null) {v$3051 = [0,SmlPrims.implode(v$4576[1])];
} else {var v$4583 = v$4582;
switch (v$4583[0]) { case 45: {v$3051 = [0,SmlPrims.implode(v$4583[1])];
 break; }default: {v$3051 = [0,SmlPrims.implode(v$4576[1])];
} };
};
 break; }default: {v$3051 = [1];
} };
};
switch (v$3051[0]) { case 0: {var v$3271 = v$3051[1];
var v$3057;
var v$4643;
var fix$4723 = {};
fix$4723.$h = function(v$4645,v$4646){lab$h: while (true) {if (v$4645 < 0) {return v$4646;
} else {var t$4724 = SmlPrims.chk_ovf_i32(v$4645 - 1);
var t$4725 = [v$3271.charCodeAt(v$4645),v$4646];
var v$4645 = t$4724;
var v$4646 = t$4725;
continue lab$h;
};
};
};
var h$4644 = fix$4723.$h;
v$4643 = (h$4644(SmlPrims.chk_ovf_i32(v$3271.length - 1),null));
if (v$4643 == null) {v$3057 = [1];
} else {var v$4647 = v$4643;
switch (v$4647[0]) { case 110: {var v$4648 = v$4647[1];
if (v$4648 == null) {v$3057 = [1];
} else {var v$4649 = v$4648;
switch (v$4649[0]) { case 111: {var v$4650 = v$4649[1];
if (v$4650 == null) {v$3057 = [1];
} else {var v$4651 = v$4650;
switch (v$4651[0]) { case 95: {v$3057 = [0,SmlPrims.implode(v$4651[1])];
 break; }default: {v$3057 = [1];
} };
};
 break; }default: {v$3057 = [1];
} };
};
 break; }default: {v$3057 = [1];
} };
};
switch (v$3057[0]) { case 0: {var v$3095 = v$3057[1];
var v$3068;
var dir$3932 = tools$0Flags$1$5.dir$2490[0];
var v$3934 = tools$0Flags$1$4.lookup$412(dir$3932,v$3095);
switch (v$3934[0]) { case 0: {var v$3935 = v$3934[1];
var t$4726;
switch (v$3935[0]) { case 3: {var v$3937 = v$3935[1];
t$4726 = ((v$3937[3] == null)?false:true);
 break; }case 4: {var v$3938 = v$3935[1];
t$4726 = ((v$3938[3] == null)?false:true);
 break; }case 0: {var v$3939 = v$3935[1];
t$4726 = ((v$3939[3] == null)?false:true);
 break; }case 2: {var v$3940 = v$3935[1];
t$4726 = ((v$3940[3] == null)?false:true);
 break; }default: {t$4726 = true;
} };
v$3068 = (t$4726?v$3934:[1]);
 break; }default: {v$3068 = [1];
} };
switch (v$3068[0]) { case 0: {var v$3070 = v$3068[1];
switch (v$3070[0]) { case 3: {var v$3094 = v$3070[1];
if (v$3094[4]) {(v$3094[1][0] = false,0);
var t$4728 = v$3274;
var v$3039 = t$4728;
continue lab$loop;
} else {throw [basis$0Initial$1.en$Fail$54,"negation not allowed on option: " + v$3095];
};
 break; }case 4: {var v$3078 = v$3070[1];
v$3078[4](0);
var t$4727 = v$3274;
var v$3039 = t$4727;
continue lab$loop;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"negation not allowed on option: " + v$3095];
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"unknown option: " + v$3273];
} };
 break; }default: {var v$3112;
var dir$3946 = tools$0Flags$1$5.dir$2490[0];
var v$3948 = tools$0Flags$1$4.lookup$412(dir$3946,v$3271);
switch (v$3948[0]) { case 0: {var v$3949 = v$3948[1];
var t$4729;
switch (v$3949[0]) { case 3: {var v$3951 = v$3949[1];
t$4729 = ((v$3951[3] == null)?false:true);
 break; }case 4: {var v$3952 = v$3949[1];
t$4729 = ((v$3952[3] == null)?false:true);
 break; }case 0: {var v$3953 = v$3949[1];
t$4729 = ((v$3953[3] == null)?false:true);
 break; }case 2: {var v$3954 = v$3949[1];
t$4729 = ((v$3954[3] == null)?false:true);
 break; }default: {t$4729 = true;
} };
v$3112 = (t$4729?v$3948:[1]);
 break; }default: {v$3112 = [1];
} };
switch (v$3112[0]) { case 0: {var v$3114 = v$3112[1];
switch (v$3114[0]) { case 3: {var v$3214 = v$3114[1];
(v$3214[1][0] = true,0);
var t$4745 = v$3274;
var v$3039 = t$4745;
continue lab$loop;
 break; }case 4: {var v$3206 = v$3114[1];
v$3206[5](0);
var t$4744 = v$3274;
var v$3039 = t$4744;
continue lab$loop;
 break; }case 0: {var v$3198 = v$3114[1];
if (v$3274 == null) {throw [basis$0Initial$1.en$Fail$54,"missing argument to " + v$3273];
} else {var v$3195 = v$3274;
var v$3196 = v$3195[0];
var v$3197 = v$3195[1];
(v$3198[1][0] = v$3196,0);
var t$4743 = v$3197;
var v$3039 = t$4743;
continue lab$loop;
};
 break; }case 1: {var v$3180 = v$3114[1];
var fix$4730 = {};
fix$4730.$readToOpt = function(v$3140,v$4638){lab$readToOpt: while (true) {if (v$3140 == null) {return [basis$0List$1.rev$682(v$4638),null];
} else {var v$3142 = v$3140;
var v$3143 = v$3142[1];
if (v$3143 == null) {var v$3159 = v$3142[0];
var t$4732;
try {var t$4733;
if (0 >= v$3159.length) {throw CompilerInitial.exn$Subscript$52;
} else {t$4733 = (v$3159.charCodeAt(0));
};
t$4732 = (t$4733 == 45);
} catch(v$4731) {t$4732 = (((function(env$4734){return function(v$3966){return false;
};
})([]))(v$4731));
};
if (t$4732) {return [basis$0List$1.rev$682(v$4638),v$3140];
} else {var v$3152 = basis$0Path$1.ext$604(v$3159);
switch (v$3152[0]) { case 0: {var v$3158 = v$3152[1];
var t$4735;
switch (v$3158) { case "sml": {t$4735 = true;
 break; }case "sig": {t$4735 = true;
 break; }default: {t$4735 = false;
} };
return t$4735?[basis$0List$1.rev$682(v$4638),v$3140]:[basis$0List$1.rev$682([v$3159,v$4638]),null];
 break; }default: {return [basis$0List$1.rev$682([v$3159,v$4638]),null];
} };
};
} else {var v$3165 = v$3142[0];
var t$4737;
try {var t$4738;
if (0 >= v$3165.length) {throw CompilerInitial.exn$Subscript$52;
} else {t$4738 = (v$3165.charCodeAt(0));
};
t$4737 = (t$4738 == 45);
} catch(v$4736) {t$4737 = (((function(env$4739){return function(v$3972){return false;
};
})([]))(v$4736));
};
if (t$4737) {return [basis$0List$1.rev$682(v$4638),v$3140];
} else {var t$4740 = v$3143;
var t$4741 = [v$3165,v$4638];
var v$3140 = t$4740;
var v$4638 = t$4741;
continue lab$readToOpt;
};
};
};
};
};
var readToOpt$3122 = fix$4730.$readToOpt;
var v$3177 = readToOpt$3122(v$3274,null);
var v$3178 = v$3177[0];
var v$3179 = v$3177[1];
(v$3180[1][0] = v$3178,0);
var t$4742 = v$3179;
var v$3039 = t$4742;
continue lab$loop;
 break; }default: {var v$3238 = v$3114[1];
if (v$3274 == null) {throw [basis$0Initial$1.en$Fail$54,"missing argument to " + v$3273];
} else {var v$3235 = v$3274;
var v$3236 = v$3235[0];
var v$3237 = v$3235[1];
var v$3226 = basis$0Int32$1.fromString$462(v$3236);
switch (v$3226[0]) { case 0: {var v$3234 = v$3226[1];
(v$3238[1][0] = v$3234,0);
var t$4746 = v$3237;
var v$3039 = t$4746;
continue lab$loop;
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"expecting integer argument to " + v$3236];
} };
};
} };
 break; }default: {var v$3256;
var fix$4747 = {};
fix$4747.$look = function(v$3995){lab$look: while (true) {if (v$3995 == null) {return [1];
} else {var v$3996 = v$3995;
var v$3997 = v$3996[0];
var v$3998 = v$3997[0];
var v$3999 = v$3997[1];
var v$4000 = v$3996[1];
if (v$3271 == v$3998) {return [0,v$3999];
} else {var t$4748 = v$4000;
var v$3995 = t$4748;
continue lab$look;
};
};
};
};
var look$3994 = fix$4747.$look;
v$3256 = (look$3994(v$3276));
switch (v$3256[0]) { case 0: {var v$3270 = v$3256[1];
if (v$3274 == null) {var exn$4007 = [basis$0Initial$1.en$Fail$54,"missing argument to " + v$3273];
var v$4008;
var fix$4749 = {};
fix$4749.$look = function(v$4012){lab$look: while (true) {if (v$4012 == null) {return [1];
} else {var v$4013 = v$4012;
var v$4014 = v$4013[0];
var v$4015 = v$4014[0];
var v$4016 = v$4014[1];
var v$4017 = v$4013[1];
if (v$3271 == v$4015) {return [0,v$4016];
} else {var t$4750 = v$4017;
var v$4012 = t$4750;
continue lab$look;
};
};
};
};
var look$4011 = fix$4749.$look;
v$4008 = (look$4011(v$3275));
switch (v$4008[0]) { case 0: {var v$4022 = v$4008[1];
v$4022(0);
var t$4751 = v$3274;
var v$3039 = t$4751;
continue lab$loop;
 break; }default: {throw exn$4007;
} };
} else {var v$3267 = v$3274;
var v$3268 = v$3267[0];
var v$3269 = v$3267[1];
v$3270(v$3268);
var t$4752 = v$3269;
var v$3039 = t$4752;
continue lab$loop;
};
 break; }default: {var exn$4024 = [basis$0Initial$1.en$Fail$54,"unknown option: " + v$3273];
var v$4025;
var fix$4753 = {};
fix$4753.$look = function(v$4029){lab$look: while (true) {if (v$4029 == null) {return [1];
} else {var v$4030 = v$4029;
var v$4031 = v$4030[0];
var v$4032 = v$4031[0];
var v$4033 = v$4031[1];
var v$4034 = v$4030[1];
if (v$3271 == v$4032) {return [0,v$4033];
} else {var t$4754 = v$4034;
var v$4029 = t$4754;
continue lab$look;
};
};
};
};
var look$4028 = fix$4753.$look;
v$4025 = (look$4028(v$3275));
switch (v$4025[0]) { case 0: {var v$4039 = v$4025[1];
v$4039(0);
var t$4755 = v$3274;
var v$3039 = t$4755;
continue lab$loop;
 break; }default: {throw exn$4024;
} };
} };
} };
} };
 break; }default: {return v$3039;
} };
};
};
};
var loop$3036 = fix$4719.$loop;
return loop$3036(v$3277);
};
tools$0Flags$1$5.help$$3281 = function(key$3284){var v$3400;
var dir$4061 = tools$0Flags$1$5.dir$2490[0];
var v$4063 = tools$0Flags$1$4.lookup$412(dir$4061,key$3284);
switch (v$4063[0]) { case 0: {var v$4064 = v$4063[1];
var t$4756;
switch (v$4064[0]) { case 3: {var v$4066 = v$4064[1];
t$4756 = ((v$4066[3] == null)?false:true);
 break; }case 4: {var v$4067 = v$4064[1];
t$4756 = ((v$4067[3] == null)?false:true);
 break; }case 0: {var v$4068 = v$4064[1];
t$4756 = ((v$4068[3] == null)?false:true);
 break; }case 2: {var v$4069 = v$4064[1];
t$4756 = ((v$4069[3] == null)?false:true);
 break; }default: {t$4756 = true;
} };
v$3400 = (t$4756?v$4063:[1]);
 break; }default: {v$3400 = [1];
} };
switch (v$3400[0]) { case 0: {var v$3402 = v$3400[1];
switch (v$3402[0]) { case 3: {var v$3495 = v$3402[1];
var t$4798;
var t$4797;
var v$3490 = [v$3495[2],null];
var v$3491;
var v$4071 = v$3495[5];
switch (v$4071[0]) { case 1: {v$3491 = null;
 break; }default: {v$3491 = [v$4071[1],null];
} };
var v$3492 = [1];
t$4797 = [[0,v$3495[1][0]?"on":"off"],v$3495[0],v$3492,v$3490,v$3491];
var t$4783;
var v$4470 = [1];
if (v$3495[4]?false:true) {t$4783 = null;
} else {var t$4796;
var t$4795;
var t$4794 = [1];
var t$4793;
var t$4790;
var v$4473 = "Opposite of --" + v$3495[2];
var v$4080 = v$3495[5];
var t$4792 = v$4473;
var t$4791;
switch (v$4080[0]) { case 0: {t$4791 = (", -" + v$4080[1]);
 break; }default: {t$4791 = "";
} };
t$4790 = (t$4792 + t$4791);
t$4793 = (t$4790 + ".");
var t$4789 = v$4470;
var t$4788 = ["no_" + v$3495[2],null];
var t$4787;
var t$4786 = basis$0List$1.map$697;
var t$4785 = function(x$4084){return "no_" + x$4084;
};
var t$4784;
var v$4086 = v$3495[5];
switch (v$4086[0]) { case 1: {t$4784 = null;
 break; }default: {t$4784 = [v$4086[1],null];
} };
t$4787 = (t$4786(t$4785,t$4784));
t$4795 = [t$4794,t$4793,t$4789,t$4788,t$4787];
t$4796 = [t$4795,null];
t$4783 = t$4796;
};
t$4798 = [t$4797,t$4783];
return t$4798;
 break; }case 4: {var v$3472 = v$3402[1];
var t$4782;
var t$4781;
var v$3467 = [v$3472[2],null];
var v$3468;
var v$4087 = v$3472[6];
switch (v$4087[0]) { case 1: {v$3468 = null;
 break; }default: {v$3468 = [v$4087[1],null];
} };
t$4781 = [[0,v$3472[1][0]?"on":"off"],v$3472[0],[1],v$3467,v$3468];
var t$4780;
var t$4779;
var t$4778;
var t$4777 = [1];
var t$4776;
var t$4773;
var v$4487 = "Opposite of --" + v$3472[2];
var v$4095 = v$3472[6];
var t$4775 = v$4487;
var t$4774;
switch (v$4095[0]) { case 0: {t$4774 = (", -" + v$4095[1]);
 break; }default: {t$4774 = "";
} };
t$4773 = (t$4775 + t$4774);
t$4776 = (t$4773 + ".");
var t$4772 = [1];
var t$4771 = ["no_" + v$3472[2],null];
var t$4770;
var t$4769 = basis$0List$1.map$697;
var t$4768 = function(x$4099){return "no_" + x$4099;
};
var t$4767;
var v$4101 = v$3472[6];
switch (v$4101[0]) { case 1: {t$4767 = null;
 break; }default: {t$4767 = [v$4101[1],null];
} };
t$4770 = (t$4769(t$4768,t$4767));
t$4778 = [t$4777,t$4776,t$4772,t$4771,t$4770];
t$4779 = [t$4778,null];
t$4780 = t$4779;
t$4782 = [t$4781,t$4780];
return t$4782;
 break; }case 0: {var v$3449 = v$3402[1];
var t$4766;
var t$4764;
var v$3444 = [v$3449[2],null];
var v$3445;
var v$4102 = v$3449[4];
switch (v$4102[0]) { case 1: {v$3445 = null;
 break; }default: {v$3445 = [v$4102[1],null];
} };
var t$4765;
var a$3431 = basis$0String$1.toString$446(v$3449[1][0]);
t$4765 = ((a$3431 == "")?[1]:[0,a$3431]);
t$4764 = [t$4765,v$3449[0],[0,"S"],v$3444,v$3445];
t$4766 = [t$4764,null];
return t$4766;
 break; }case 1: {var v$3421 = v$3402[1];
var t$4763;
var t$4762;
var t$4761 = [1];
var t$4760 = v$3421[0];
var t$4759 = [0,"S"];
var t$4758 = [v$3421[2],null];
var t$4757;
var v$4108 = v$3421[4];
switch (v$4108[0]) { case 1: {t$4757 = null;
 break; }default: {t$4757 = [v$4108[1],null];
} };
t$4762 = [t$4761,t$4760,t$4759,t$4758,t$4757];
t$4763 = [t$4762,null];
return t$4763;
 break; }default: {var v$3517 = v$3402[1];
var t$4800;
var t$4799;
var v$3512 = [v$3517[2],null];
var v$3513;
var v$4109 = v$3517[4];
switch (v$4109[0]) { case 1: {v$3513 = null;
 break; }default: {v$3513 = [v$4109[1],null];
} };
t$4799 = [[0,basis$0Int32$1.toString$458(v$3517[1][0])],v$3517[0],[0,"N"],v$3512,v$3513];
t$4800 = [t$4799,null];
return t$4800;
} };
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"no help available for option: " + key$3284];
} };
};
tools$0Flags$1$5.print_help$3518 = function(tail$3521,x$3524){return SmlPrims.concat(basis$0List$1.map$332(function(v$4144){var v$4145 = v$4144[3];
var v$4146 = v$4144[4];
var v$4147 = v$4144[2];
var v$4148 = v$4144[0];
var v$4149 = v$4144[1];
var name$4150;
var t$4808;
var t$4807 = basis$0List$1.s$n$686;
var t$4804;
var fix$4803 = {};
fix$4803.$addBetween = function(v$4620){if (v$4620 == null) {return null;
} else {var v$4621 = v$4620;
var v$4622 = v$4621[1];
if (v$4622 == null) {return [v$4621[0],null];
} else {var v$4623 = v$4621[0];
var v$4624 = v$4622;
var v$4625 = v$4624[0];
var v$4626 = v$4624[1];
return [v$4623,[", ",fix$4803.$addBetween([v$4625,v$4626])]];
};
};
};
var addBetween$4619 = fix$4803.$addBetween;
t$4804 = (addBetween$4619(basis$0List$1.map$332(function(x$4151){var t$4806 = "--" + x$4151;
var t$4805;
switch (v$4147[0]) { case 1: {t$4805 = "";
 break; }default: {t$4805 = (" " + v$4147[1]);
} };
return t$4806 + t$4805;
},v$4145)));
t$4808 = (t$4807(t$4804,basis$0List$1.s$n$686(basis$0List$1.map$332(function(x$4157){var t$4802 = ", -" + x$4157;
var t$4801;
switch (v$4147[0]) { case 1: {t$4801 = "";
 break; }default: {t$4801 = (" " + v$4147[1]);
} };
return t$4802 + t$4801;
},v$4146),[" ",null])));
name$4150 = (SmlPrims.concat(t$4808));
var firstline$4163;
switch (v$4148[0]) { case 1: {firstline$4163 = (name$4150 + "\n");
 break; }default: {var v$4165 = v$4148[1];
var t$4812;
var t$4811;
var t$4809;
var n$4170 = SmlPrims.chk_ovf_i32(60 - v$4165.length);
var ssize$4172 = name$4150.length;
var fix$4810 = {};
fix$4810.$f = function(v$4174){switch (v$4174) { case 0: {return null;
 break; }default: {return [32,fix$4810.$f(SmlPrims.chk_ovf_i32(v$4174 - 1))];
} };
};
var f$4173 = fix$4810.$f;
t$4809 = ((n$4170 <= ssize$4172)?name$4150:(SmlPrims.concat([name$4150,[SmlPrims.implode(f$4173(SmlPrims.chk_ovf_i32(n$4170 - ssize$4172))),null]])));
t$4811 = (t$4809 + "(");
t$4812 = (t$4811 + v$4165);
firstline$4163 = (t$4812 + ")\n");
} };
var body$4175 = basis$0List$1.map$697(function(s$4177){return ("     " + s$4177) + "\n";
},basis$0String$1.tokens$224(function(c$4180){return c$4180 == 10;
},v$4149));
return SmlPrims.concat([firstline$4163,basis$0List$1.s$n$686(body$4175,[tail$3521,null])]);
},x$3524));
};
tools$0Flags$1$5.help$3601 = function(x$3604){return tools$0Flags$1$5.print_help$3518("",tools$0Flags$1$5.help$$3281(x$3604));
};
tools$0Flags$1$5.help_all$$3605 = function(v$3607){var dom$3608 = basis$0List$1.rev$682(tools$0Flags$1$4.dom$1012(tools$0Flags$1$5.dir$2490[0]));
var t$4823 = kitlib$0Listsort$1.sort$54;
var t$4822 = function(v$3725){var v$3726 = v$3725[0];
var v$3727 = v$3726[3];
var v$3728 = v$3725[1];
var v$3729 = v$3728[3];
var fix$4819 = {};
fix$4819.$cmp = function(v$4630,v$4639){lab$cmp: while (true) {if (v$4630 == null) {return (v$4639 == null)?2:0;
} else {if (v$4639 == null) {return 1;
} else {var v$4632 = v$4630;
var v$4633 = v$4632[0];
var v$4634 = v$4632[1];
var v$4635 = v$4639;
var v$4636 = v$4635[0];
var v$4637 = v$4635[1];
switch (basis$0String$1.compare$351(v$4633,v$4636)) { case 2: {var t$4820 = v$4634;
var t$4821 = v$4637;
var v$4630 = t$4820;
var v$4639 = t$4821;
continue lab$cmp;
 break; }case 1: {return 1;
 break; }default: {return 0;
} };
};
};
};
};
var cmp$4628 = fix$4819.$cmp;
return cmp$4628(v$3727,v$3729);
};
var t$4813;
var b$4237 = null;
var fix$4814 = {};
fix$4814.$foldl = function(v$4240,v$4241){lab$foldl: while (true) {if (v$4241 == null) {return v$4240;
} else {var v$4242 = v$4241;
var v$4243 = v$4242[0];
var v$4244 = v$4242[1];
var t$4815;
var v$4588;
var dir$4589 = tools$0Flags$1$5.dir$2490[0];
var v$4590 = tools$0Flags$1$4.lookup$412(dir$4589,v$4243);
switch (v$4590[0]) { case 0: {var v$4591 = v$4590[1];
var t$4816;
switch (v$4591[0]) { case 3: {var v$4592 = v$4591[1];
t$4816 = ((v$4592[3] == null)?false:true);
 break; }case 4: {var v$4593 = v$4591[1];
t$4816 = ((v$4593[3] == null)?false:true);
 break; }case 0: {var v$4594 = v$4591[1];
t$4816 = ((v$4594[3] == null)?false:true);
 break; }case 2: {var v$4595 = v$4591[1];
t$4816 = ((v$4595[3] == null)?false:true);
 break; }default: {t$4816 = true;
} };
v$4588 = (t$4816?v$4590:[1]);
 break; }default: {v$4588 = [1];
} };
switch (v$4588[0]) { case 0: {var v$4596 = v$4588[1];
switch (v$4596[0]) { case 2: {var v$4597 = v$4596[1];
var v$4598 = v$4597[4];
switch (v$4598[0]) { case 0: {var v$4599 = v$4598[1];
t$4815 = ((v$4599 == v$4243)?v$4240:(basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240)));
 break; }default: {t$4815 = (basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240));
} };
 break; }case 3: {var v$4600 = v$4596[1];
var v$4601 = v$4600[5];
switch (v$4601[0]) { case 0: {var v$4602 = v$4601[1];
t$4815 = ((v$4602 == v$4243)?v$4240:(basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240)));
 break; }default: {t$4815 = (basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240));
} };
 break; }case 4: {var v$4603 = v$4596[1];
var v$4604 = v$4603[6];
switch (v$4604[0]) { case 0: {var v$4605 = v$4604[1];
t$4815 = ((v$4605 == v$4243)?v$4240:(basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240)));
 break; }default: {t$4815 = (basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240));
} };
 break; }case 0: {var v$4606 = v$4596[1];
var v$4607 = v$4606[4];
switch (v$4607[0]) { case 0: {var v$4608 = v$4607[1];
t$4815 = ((v$4608 == v$4243)?v$4240:(basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240)));
 break; }default: {t$4815 = (basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240));
} };
 break; }default: {var v$4609 = v$4596[1];
var v$4610 = v$4609[4];
switch (v$4610[0]) { case 0: {var v$4611 = v$4610[1];
t$4815 = ((v$4611 == v$4243)?v$4240:(basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240)));
 break; }default: {t$4815 = (basis$0List$1.s$n$686(tools$0Flags$1$5.help$$3281(v$4243),v$4240));
} };
} };
 break; }default: {t$4815 = v$4240;
} };
var t$4817 = t$4815;
var t$4818 = v$4244;
var v$4240 = t$4817;
var v$4241 = t$4818;
continue lab$foldl;
};
};
};
var foldl$4239 = fix$4814.$foldl;
t$4813 = (foldl$4239(b$4237,dom$3608));
return t$4823(t$4822,t$4813);
};
tools$0Flags$1$5.help_all$3730 = function(v$3732){return tools$0Flags$1$5.print_help$3518("\n",tools$0Flags$1$5.help_all$$3605(0));
};
tools$0Flags$1$5.getOptions$3733 = function(v$4652){return tools$0Flags$1$5.help_all$$3605(v$4652);
};
return 0;
})();
