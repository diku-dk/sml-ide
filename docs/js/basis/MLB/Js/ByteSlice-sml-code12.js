if ((typeof(basis$0ByteSlice$1$12)) == "undefined") {basis$0ByteSlice$1$12 = {};
};
(function(){basis$0ByteSlice$1$12.sub_array_unsafe$3368 = function(v$4298,v$4299){return v$4298[v$4299];
};
basis$0ByteSlice$1$12.update_array_unsafe$3375 = function(v$4300,v$4301,v$4302){return (v$4300[v$4301] = v$4302,0);
};
basis$0ByteSlice$1$12.alloc_array_unsafe$3384 = function(i$3387){return Array(i$3387);
};
basis$0ByteSlice$1$12.length_array$3388 = function(a$3391){return a$3391.length;
};
basis$0ByteSlice$1$12.sub_vector_unsafe$3392 = function(v$4303,v$4304){return v$4303.charCodeAt(v$4304);
};
basis$0ByteSlice$1$12.length_vector$3399 = function(v$3402){return v$3402.length;
};
basis$0ByteSlice$1$12.length$3403 = function(v$4305,v$4306,v$4307){return v$4307;
};
basis$0ByteSlice$1$12.sub$3412 = function(v$3427,v$4308){var v$3428 = v$3427[0];
var v$3429 = v$3427[1];
var v$3430 = v$3427[2];
if ((v$4308 < 0)?true:(v$4308 >= v$3430)) {throw CompilerInitial.exn$Subscript$52;
} else {return v$3428[SmlPrims.chk_ovf_i32(v$3429 + v$4308)];
};
};
basis$0ByteSlice$1$12.update$3432 = function(v$3448,v$4309,v$4310){var v$3449 = v$3448[0];
var v$3450 = v$3448[1];
var v$3451 = v$3448[2];
if ((v$4309 < 0)?true:(v$4309 >= v$3451)) {throw CompilerInitial.exn$Subscript$52;
} else {return (v$3449[SmlPrims.chk_ovf_i32(v$3450 + v$4309)] = v$4310,0);
};
};
basis$0ByteSlice$1$12.slice$3454 = function(v$3487,v$3488,v$3489){var alen$3460 = v$3487.length;
switch (v$3489[0]) { case 1: {if ((0 <= v$3488)?(v$3488 <= alen$3460):false) {return [v$3487,v$3488,SmlPrims.chk_ovf_i32(alen$3460 - v$3488)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$3486 = v$3489[1];
if ((0 <= v$3488)?((0 <= v$3486)?(v$3486 <= (SmlPrims.chk_ovf_i32(alen$3460 - v$3488))):false):false) {return [v$3487,v$3488,v$3486];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0ByteSlice$1$12.full$3490 = function(a$3493){return [a$3493,0,a$3493.length];
};
basis$0ByteSlice$1$12.subslice$3494 = function(v$4311,v$4312,v$3511){switch (v$3511[0]) { case 1: {var v$3521 = v$4311[0];
var v$3522 = v$4311[1];
var v$3523 = v$4311[2];
if ((0 <= v$4312)?(v$4312 <= v$3523):false) {return [v$3521,SmlPrims.chk_ovf_i32(v$3522 + v$4312),SmlPrims.chk_ovf_i32(v$3523 - v$4312)];
} else {throw CompilerInitial.exn$Subscript$52;
};
 break; }default: {var v$3538 = v$4311[0];
var v$3539 = v$4311[1];
var v$3540 = v$4311[2];
var v$3542 = v$3511[1];
if ((0 <= v$4312)?((0 <= v$3542)?(v$3542 <= (SmlPrims.chk_ovf_i32(v$3540 - v$4312))):false):false) {return [v$3538,SmlPrims.chk_ovf_i32(v$3539 + v$4312),v$3542];
} else {throw CompilerInitial.exn$Subscript$52;
};
} };
};
basis$0ByteSlice$1$12.base$3543 = function(sli$3546){return sli$3546;
};
basis$0ByteSlice$1$12.vector$3547 = function(v$3566,v$3567,v$3568){var newvec$3553 = Array(v$3568);
var fix$4320 = {};
fix$4320.$copy = function(j$3557){lab$copy: while (true) {if (j$3557 < v$3568) {(newvec$3553[j$3557] = v$3566[SmlPrims.chk_ovf_i32(v$3567 + j$3557)],0);
var t$4321 = SmlPrims.chk_ovf_i32(j$3557 + 1);
var j$3557 = t$4321;
continue lab$copy;
} else {return 0;
};
};
};
var copy$3554 = fix$4320.$copy;
copy$3554(0);
return SmlPrims.charArrayToString(newvec$3553);
};
basis$0ByteSlice$1$12.copy$3569 = function(v$4313,v$4314,v$3609){var v$3610 = v$3609[0];
var v$3611 = v$3609[1];
var v$3612 = v$3609[2];
if ((v$4313 < 0)?true:((SmlPrims.chk_ovf_i32(v$4313 + v$3612)) > v$4314.length)) {throw CompilerInitial.exn$Subscript$52;
} else {if (v$3611 < v$4313) {var fix$4322 = {};
fix$4322.$hi2lo = function(j$3588){lab$hi2lo: while (true) {if (j$3588 >= 0) {(v$4314[SmlPrims.chk_ovf_i32(v$4313 + j$3588)] = v$3610[SmlPrims.chk_ovf_i32(v$3611 + j$3588)],0);
var t$4323 = SmlPrims.chk_ovf_i32(j$3588 - 1);
var j$3588 = t$4323;
continue lab$hi2lo;
} else {return 0;
};
};
};
var hi2lo$3585 = fix$4322.$hi2lo;
return hi2lo$3585(SmlPrims.chk_ovf_i32(v$3612 - 1));
} else {var fix$4324 = {};
fix$4324.$lo2hi = function(j$3598){lab$lo2hi: while (true) {if (j$3598 < v$3612) {(v$4314[SmlPrims.chk_ovf_i32(v$4313 + j$3598)] = v$3610[SmlPrims.chk_ovf_i32(v$3611 + j$3598)],0);
var t$4325 = SmlPrims.chk_ovf_i32(j$3598 + 1);
var j$3598 = t$4325;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$3595 = fix$4324.$lo2hi;
return lo2hi$3595(0);
};
};
};
basis$0ByteSlice$1$12.copyVec$3615 = function(v$3649,v$3648,v$3647){var v$3644 = v$3647[0];
var v$3645 = v$3647[1];
var v$3646 = v$3647[2];
if ((v$3649 < 0)?true:((SmlPrims.chk_ovf_i32(v$3649 + v$3646)) > v$3648.length)) {throw CompilerInitial.exn$Subscript$52;
} else {var fix$4326 = {};
fix$4326.$lo2hi = function(j$3632){lab$lo2hi: while (true) {if (j$3632 < v$3646) {(v$3648[SmlPrims.chk_ovf_i32(v$3649 + j$3632)] = (v$3644.charCodeAt(SmlPrims.chk_ovf_i32(v$3645 + j$3632))),0);
var t$4327 = SmlPrims.chk_ovf_i32(j$3632 + 1);
var j$3632 = t$4327;
continue lab$lo2hi;
} else {return 0;
};
};
};
var lo2hi$3629 = fix$4326.$lo2hi;
return lo2hi$3629(0);
};
};
basis$0ByteSlice$1$12.isEmpty$3650 = function(v$4315,v$4316,v$4317){return v$4317 == 0;
};
basis$0ByteSlice$1$12.concat$3655 = function(slis$3658){var fix$4328 = {};
fix$4328.$acc = function(v$3662,v$3665){lab$acc: while (true) {if (v$3662 == null) {return v$3665;
} else {var v$3676 = v$3662;
var v$3677 = v$3676[0];
var v$3678 = v$3677[2];
var v$3679 = v$3676[1];
var t$4329 = v$3679;
var t$4330 = SmlPrims.chk_ovf_i32(v$3678 + v$3665);
var v$3662 = t$4329;
var v$3665 = t$4330;
continue lab$acc;
};
};
};
var acc$3659 = fix$4328.$acc;
var len$3681 = acc$3659(slis$3658,0);
var newvec$3682;
if (len$3681 > 16777211) {throw CompilerInitial.exn$Size$53;
} else {newvec$3682 = (Array(len$3681));
};
var fix$4331 = {};
fix$4331.$copyall = function(v$3690,v$3693){lab$copyall: while (true) {if (v$3693 == null) {return 0;
} else {var v$3719 = v$3693;
var v$3720 = v$3719[0];
var v$3721 = v$3720[0];
var v$3722 = v$3720[1];
var v$3723 = v$3720[2];
var v$3724 = v$3719[1];
var fix$4332 = {};
fix$4332.$copyv1 = function(j$3709){lab$copyv1: while (true) {if (j$3709 < v$3723) {(newvec$3682[SmlPrims.chk_ovf_i32(v$3690 + j$3709)] = v$3721[SmlPrims.chk_ovf_i32(v$3722 + j$3709)],0);
var t$4333 = SmlPrims.chk_ovf_i32(j$3709 + 1);
var j$3709 = t$4333;
continue lab$copyv1;
} else {return 0;
};
};
};
var copyv1$3706 = fix$4332.$copyv1;
copyv1$3706(0);
var t$4334 = SmlPrims.chk_ovf_i32(v$3690 + v$3723);
var t$4335 = v$3724;
var v$3690 = t$4334;
var v$3693 = t$4335;
continue lab$copyall;
};
};
};
var copyall$3687 = fix$4331.$copyall;
copyall$3687(0,slis$3658);
return SmlPrims.charArrayToString(newvec$3682);
};
basis$0ByteSlice$1$12.getItem$3727 = function(v$4318,v$4319,v$3740){switch (v$3740) { case 0: {return [1];
 break; }default: {return [0,[v$4318[v$4319],[v$4318,SmlPrims.chk_ovf_i32(v$4319 + 1),SmlPrims.chk_ovf_i32(v$3740 - 1)]]];
} };
};
basis$0ByteSlice$1$12.find$3745 = function(p$3748,v$3753){var v$3767 = v$3753[0];
var v$3768 = v$3753[1];
var v$3769 = v$3753[2];
var stop$3754 = SmlPrims.chk_ovf_i32(v$3768 + v$3769);
var fix$4336 = {};
fix$4336.$lr = function(j$3758){lab$lr: while (true) {if (j$3758 < stop$3754) {if (p$3748(v$3767[j$3758])) {return [0,v$3767[j$3758]];
} else {var t$4337 = SmlPrims.chk_ovf_i32(j$3758 + 1);
var j$3758 = t$4337;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$3755 = fix$4336.$lr;
return lr$3755(v$3768);
};
basis$0ByteSlice$1$12.exists$3770 = function(p$3773,v$3778){var v$3792 = v$3778[0];
var v$3793 = v$3778[1];
var v$3794 = v$3778[2];
var stop$3779 = SmlPrims.chk_ovf_i32(v$3793 + v$3794);
var fix$4338 = {};
fix$4338.$lr = function(j$3783){lab$lr: while (true) {if (j$3783 < stop$3779) {if (p$3773(v$3792[j$3783])) {return true;
} else {var t$4339 = SmlPrims.chk_ovf_i32(j$3783 + 1);
var j$3783 = t$4339;
continue lab$lr;
};
} else {return false;
};
};
};
var lr$3780 = fix$4338.$lr;
return lr$3780(v$3793);
};
basis$0ByteSlice$1$12.all$3795 = function(p$3798,v$3803){var v$3817 = v$3803[0];
var v$3818 = v$3803[1];
var v$3819 = v$3803[2];
var stop$3804 = SmlPrims.chk_ovf_i32(v$3818 + v$3819);
var fix$4340 = {};
fix$4340.$lr = function(j$3808){lab$lr: while (true) {if (j$3808 >= stop$3804) {return true;
} else {if (p$3798(v$3817[j$3808])) {var t$4341 = SmlPrims.chk_ovf_i32(j$3808 + 1);
var j$3808 = t$4341;
continue lab$lr;
} else {return false;
};
};
};
};
var lr$3805 = fix$4340.$lr;
return lr$3805(v$3818);
};
basis$0ByteSlice$1$12.app$3820 = function(f$3823,v$3828){var v$3840 = v$3828[0];
var v$3841 = v$3828[1];
var v$3842 = v$3828[2];
var stop$3829 = SmlPrims.chk_ovf_i32(v$3841 + v$3842);
var fix$4342 = {};
fix$4342.$lr = function(j$3833){lab$lr: while (true) {if (j$3833 < stop$3829) {f$3823(v$3840[j$3833]);
var t$4343 = SmlPrims.chk_ovf_i32(j$3833 + 1);
var j$3833 = t$4343;
continue lab$lr;
} else {return 0;
};
};
};
var lr$3830 = fix$4342.$lr;
return lr$3830(v$3841);
};
basis$0ByteSlice$1$12.map$3843 = function(f$3846,v$3851){var v$3866 = v$3851[0];
var v$3867 = v$3851[1];
var v$3868 = v$3851[2];
var newvec$3852 = Array(v$3868);
var stop$3853 = SmlPrims.chk_ovf_i32(v$3867 + v$3868);
var fix$4344 = {};
fix$4344.$lr = function(j$3857){lab$lr: while (true) {if (j$3857 < stop$3853) {(newvec$3852[SmlPrims.chk_ovf_i32(j$3857 - v$3867)] = (f$3846(v$3866[j$3857])),0);
var t$4345 = SmlPrims.chk_ovf_i32(j$3857 + 1);
var j$3857 = t$4345;
continue lab$lr;
} else {return 0;
};
};
};
var lr$3854 = fix$4344.$lr;
lr$3854(v$3867);
return newvec$3852;
};
basis$0ByteSlice$1$12.foldl$3869 = function(f$3872,e$3875,v$3880){var v$3893 = v$3880[0];
var v$3894 = v$3880[1];
var v$3895 = v$3880[2];
var stop$3881 = SmlPrims.chk_ovf_i32(v$3894 + v$3895);
var fix$4346 = {};
fix$4346.$lr = function(j$3885,res$3888){lab$lr: while (true) {if (j$3885 < stop$3881) {var t$4347 = SmlPrims.chk_ovf_i32(j$3885 + 1);
var t$4348 = f$3872([v$3893[j$3885],res$3888]);
var j$3885 = t$4347;
var res$3888 = t$4348;
continue lab$lr;
} else {return res$3888;
};
};
};
var lr$3882 = fix$4346.$lr;
return lr$3882(v$3894,e$3875);
};
basis$0ByteSlice$1$12.foldr$3896 = function(f$3899,e$3902,v$3907){var v$3919 = v$3907[0];
var v$3920 = v$3907[1];
var v$3921 = v$3907[2];
var fix$4349 = {};
fix$4349.$rl = function(j$3911,res$3914){lab$rl: while (true) {if (j$3911 >= v$3920) {var t$4350 = SmlPrims.chk_ovf_i32(j$3911 - 1);
var t$4351 = f$3899([v$3919[j$3911],res$3914]);
var j$3911 = t$4350;
var res$3914 = t$4351;
continue lab$rl;
} else {return res$3914;
};
};
};
var rl$3908 = fix$4349.$rl;
return rl$3908(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$3920 + v$3921)) - 1),e$3902);
};
basis$0ByteSlice$1$12.modify$3922 = function(f$3925,v$3930){var v$3942 = v$3930[0];
var v$3943 = v$3930[1];
var v$3944 = v$3930[2];
var stop$3931 = SmlPrims.chk_ovf_i32(v$3943 + v$3944);
var fix$4352 = {};
fix$4352.$lr = function(j$3935){lab$lr: while (true) {if (j$3935 < stop$3931) {(v$3942[j$3935] = (f$3925(v$3942[j$3935])),0);
var t$4353 = SmlPrims.chk_ovf_i32(j$3935 + 1);
var j$3935 = t$4353;
continue lab$lr;
} else {return 0;
};
};
};
var lr$3932 = fix$4352.$lr;
return lr$3932(v$3943);
};
basis$0ByteSlice$1$12.findi$3945 = function(p$3948,v$3953){var v$3967 = v$3953[0];
var v$3968 = v$3953[1];
var v$3969 = v$3953[2];
var stop$3954 = SmlPrims.chk_ovf_i32(v$3968 + v$3969);
var fix$4354 = {};
fix$4354.$lr = function(j$3958){lab$lr: while (true) {if (j$3958 < stop$3954) {if (p$3948([j$3958,v$3967[j$3958]])) {return [0,[j$3958,v$3967[j$3958]]];
} else {var t$4355 = SmlPrims.chk_ovf_i32(j$3958 + 1);
var j$3958 = t$4355;
continue lab$lr;
};
} else {return [1];
};
};
};
var lr$3955 = fix$4354.$lr;
return lr$3955(v$3968);
};
basis$0ByteSlice$1$12.appi$3970 = function(f$3973,v$3978){var v$3990 = v$3978[0];
var v$3991 = v$3978[1];
var v$3992 = v$3978[2];
var stop$3979 = SmlPrims.chk_ovf_i32(v$3991 + v$3992);
var fix$4356 = {};
fix$4356.$lr = function(j$3983){lab$lr: while (true) {if (j$3983 < stop$3979) {f$3973([j$3983,v$3990[j$3983]]);
var t$4357 = SmlPrims.chk_ovf_i32(j$3983 + 1);
var j$3983 = t$4357;
continue lab$lr;
} else {return 0;
};
};
};
var lr$3980 = fix$4356.$lr;
return lr$3980(v$3991);
};
basis$0ByteSlice$1$12.mapi$3993 = function(f$3996,v$4001){var v$4016 = v$4001[0];
var v$4017 = v$4001[1];
var v$4018 = v$4001[2];
var newvec$4002 = Array(v$4018);
var stop$4003 = SmlPrims.chk_ovf_i32(v$4017 + v$4018);
var fix$4358 = {};
fix$4358.$lr = function(j$4007){lab$lr: while (true) {if (j$4007 < stop$4003) {(newvec$4002[SmlPrims.chk_ovf_i32(j$4007 - v$4017)] = (f$3996([j$4007,v$4016[j$4007]])),0);
var t$4359 = SmlPrims.chk_ovf_i32(j$4007 + 1);
var j$4007 = t$4359;
continue lab$lr;
} else {return 0;
};
};
};
var lr$4004 = fix$4358.$lr;
lr$4004(v$4017);
return newvec$4002;
};
basis$0ByteSlice$1$12.foldli$4019 = function(f$4022,e$4025,v$4030){var v$4043 = v$4030[0];
var v$4044 = v$4030[1];
var v$4045 = v$4030[2];
var stop$4031 = SmlPrims.chk_ovf_i32(v$4044 + v$4045);
var fix$4360 = {};
fix$4360.$lr = function(j$4035,res$4038){lab$lr: while (true) {if (j$4035 < stop$4031) {var t$4361 = SmlPrims.chk_ovf_i32(j$4035 + 1);
var t$4362 = f$4022([j$4035,v$4043[j$4035],res$4038]);
var j$4035 = t$4361;
var res$4038 = t$4362;
continue lab$lr;
} else {return res$4038;
};
};
};
var lr$4032 = fix$4360.$lr;
return lr$4032(v$4044,e$4025);
};
basis$0ByteSlice$1$12.foldri$4046 = function(f$4049,e$4052,v$4057){var v$4069 = v$4057[0];
var v$4070 = v$4057[1];
var v$4071 = v$4057[2];
var fix$4363 = {};
fix$4363.$rl = function(j$4061,res$4064){lab$rl: while (true) {if (j$4061 >= v$4070) {var t$4364 = SmlPrims.chk_ovf_i32(j$4061 - 1);
var t$4365 = f$4049([j$4061,v$4069[j$4061],res$4064]);
var j$4061 = t$4364;
var res$4064 = t$4365;
continue lab$rl;
} else {return res$4064;
};
};
};
var rl$4058 = fix$4363.$rl;
return rl$4058(SmlPrims.chk_ovf_i32((SmlPrims.chk_ovf_i32(v$4070 + v$4071)) - 1),e$4052);
};
basis$0ByteSlice$1$12.modifyi$4072 = function(f$4075,v$4080){var v$4092 = v$4080[0];
var v$4093 = v$4080[1];
var v$4094 = v$4080[2];
var stop$4081 = SmlPrims.chk_ovf_i32(v$4093 + v$4094);
var fix$4366 = {};
fix$4366.$lr = function(j$4085){lab$lr: while (true) {if (j$4085 < stop$4081) {(v$4092[j$4085] = (f$4075([j$4085,v$4092[j$4085]])),0);
var t$4367 = SmlPrims.chk_ovf_i32(j$4085 + 1);
var j$4085 = t$4367;
continue lab$lr;
} else {return 0;
};
};
};
var lr$4082 = fix$4366.$lr;
return lr$4082(v$4093);
};
basis$0ByteSlice$1$12.collate$4095 = function(cmp$4098,v$4106){var v$4133 = v$4106[0];
var v$4134 = v$4133[0];
var v$4135 = v$4133[1];
var v$4136 = v$4133[2];
var v$4137 = v$4106[1];
var v$4138 = v$4137[0];
var v$4139 = v$4137[1];
var v$4140 = v$4137[2];
var stop$4107 = (v$4136 < v$4140)?v$4136:v$4140;
var fix$4368 = {};
fix$4368.$h = function(j$4115){lab$h: while (true) {if (j$4115 == stop$4107) {return (v$4136 < v$4140)?0:((v$4136 > v$4140)?1:2);
} else {var v$4132 = cmp$4098([v$4134[SmlPrims.chk_ovf_i32(v$4135 + j$4115)],v$4138[SmlPrims.chk_ovf_i32(v$4139 + j$4115)]]);
switch (v$4132) { case 2: {var t$4369 = SmlPrims.chk_ovf_i32(j$4115 + 1);
var j$4115 = t$4369;
continue lab$h;
 break; }default: {return v$4132;
} };
};
};
};
var h$4112 = fix$4368.$h;
return h$4112(0);
};
return 0;
})();