if ((typeof(syntax_objects$0TyCon$1)) == "undefined") {syntax_objects$0TyCon$1 = {};
};
(function(){syntax_objects$0TyCon$1.eq_tycon$229 = function(v$231,v$232){switch (v$232[0]) { case 0: {return v$231[1] == v$232[1];
 break; }default: {return false;
} };
};
syntax_objects$0TyCon$1.eq_longtycon$236 = function(v$238,v$239){switch (v$239[0]) { case 0: {var v$240 = v$238[1];
var v$241 = v$239[1];
var t$285;
var fix$282 = {};
fix$282.$eq_list = function(v$246,v$247){lab$eq_list: while (true) {if (v$246 == null) {return (v$247 == null)?true:false;
} else {if (v$247 == null) {return false;
} else {var v$248 = v$246;
var v$249 = v$247;
if (syntax_objects$0StrId$1.eq_strid$181(v$248[0],v$249[0])) {var t$283 = v$248[1];
var t$284 = v$249[1];
var v$246 = t$283;
var v$247 = t$284;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$244 = fix$282.$eq_list;
t$285 = (eq_list$244(v$240[0],v$241[0]));
if (t$285) {var v$267 = v$240[1];
var v$268 = v$241[1];
switch (v$268[0]) { case 0: {return v$267[1] == v$268[1];
 break; }default: {return false;
} };
} else {return false;
};
 break; }default: {return false;
} };
};
syntax_objects$0TyCon$1.pr_TyCon$62 = function(v$65){return v$65[1];
};
syntax_objects$0TyCon$1.pr_LongTyCon$71 = function(v$74){var v$96 = v$74[1];
var v$97 = v$96[0];
var v$98 = v$96[1];
var string_list$79 = basis$0List$1.map$697(function(s$82){return (syntax_objects$0StrId$1.pr_StrId$61(s$82)) + ".";
},v$97);
var fix$286 = {};
fix$286.$join = function(v$86){if (v$86 == null) {return "";
} else {var v$93 = v$86;
var v$94 = v$93[0];
var v$95 = v$93[1];
return v$94 + (fix$286.$join(v$95));
};
};
var join$83 = fix$286.$join;
return (join$83(string_list$79)) + v$98[1];
};
syntax_objects$0TyCon$1.implode_LongTyCon$99 = function(v$277,v$278){return [0,[v$277,v$278]];
};
syntax_objects$0TyCon$1.explode_LongTyCon$106 = function(v$109){var v$114 = v$109[1];
return [v$114[0],v$114[1]];
};
syntax_objects$0TyCon$1.tycon_INT$117 = [0,"int"];
syntax_objects$0TyCon$1.tycon_INT31$118 = [0,"int31"];
syntax_objects$0TyCon$1.tycon_INT32$119 = [0,"int32"];
syntax_objects$0TyCon$1.tycon_INT63$120 = [0,"int63"];
syntax_objects$0TyCon$1.tycon_INT64$121 = [0,"int64"];
syntax_objects$0TyCon$1.tycon_INTINF$122 = [0,"intinf"];
syntax_objects$0TyCon$1.tycon_WORD$123 = [0,"word"];
syntax_objects$0TyCon$1.tycon_WORD8$124 = [0,"word8"];
syntax_objects$0TyCon$1.tycon_WORD31$125 = [0,"word31"];
syntax_objects$0TyCon$1.tycon_WORD32$126 = [0,"word32"];
syntax_objects$0TyCon$1.tycon_WORD63$127 = [0,"word63"];
syntax_objects$0TyCon$1.tycon_WORD64$128 = [0,"word64"];
syntax_objects$0TyCon$1.tycon_REAL$129 = [0,"real"];
syntax_objects$0TyCon$1.tycon_F64$130 = [0,"f64"];
syntax_objects$0TyCon$1.tycon_STRING$131 = [0,"string"];
syntax_objects$0TyCon$1.tycon_CHAR$132 = [0,"char"];
syntax_objects$0TyCon$1.tycon_EXN$133 = [0,"exn"];
syntax_objects$0TyCon$1.tycon_REF$134 = [0,"ref"];
syntax_objects$0TyCon$1.tycon_BOOL$135 = [0,"bool"];
syntax_objects$0TyCon$1.tycon_LIST$136 = [0,"list"];
syntax_objects$0TyCon$1.tycon_FRAG$137 = [0,"frag"];
syntax_objects$0TyCon$1.tycon_ARRAY$138 = [0,"array"];
syntax_objects$0TyCon$1.tycon_VECTOR$139 = [0,"vector"];
syntax_objects$0TyCon$1.tycon_CHARARRAY$140 = [0,"chararray"];
syntax_objects$0TyCon$1.tycon_FOREIGNPTR$141 = [0,"foreignptr"];
syntax_objects$0TyCon$1.tycon_UNIT$144 = [0,"unit"];
syntax_objects$0TyCon$1.mk_TyCon$145 = function(v$146){return [0,v$146];
};
syntax_objects$0TyCon$1.mk_LongTyCon$147 = function(ids$150){var v$156 = basis$0List$1.rev$682(ids$150);
if (v$156 == null) {return tools$0Crash$1.impossible$59("TyCon.mk_LongTyCon");
} else {var v$159 = v$156;
var v$160 = v$159[0];
var v$161 = v$159[1];
return [0,[basis$0List$1.map$697(function(v$281){return syntax_objects$0StrId$1.mk_StrId$103(v$281);
},basis$0List$1.rev$682(v$161)),[0,v$160]]];
};
};
syntax_objects$0TyCon$1.s$j$162 = function(v$279,v$280){return v$279[1] < v$280[1];
};
syntax_objects$0TyCon$1.is_$true$_$nil$_etc$171 = function(tycon$174){switch (tycon$174[1]) { case "true": {return true;
 break; }case "false": {return true;
 break; }case "nil": {return true;
 break; }case "::": {return true;
 break; }case "ref": {return true;
 break; }default: {return false;
} };
};
syntax_objects$0TyCon$1.is_$it$$188 = function(v$191){switch (v$191[1]) { case "it": {return true;
 break; }default: {return false;
} };
};
syntax_objects$0TyCon$1.pu$197 = pickle$0pickle$1.convert$2342([function(v$198){return [0,v$198];
},function(v$201){return v$201[1];
}],pickle$0pickle$1.string$909);
return 0;
})();
