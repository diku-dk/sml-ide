if ((typeof(tools$0Flags$1$1)) == "undefined") {tools$0Flags$1$1 = {};
};
(function(){tools$0Flags$1$1.outLine$61 = function(s$64){return basis$0General$1.print$163(s$64 + "\n");
};
tools$0Flags$1$1.quote$65 = function(s$68){return ("\"" + (basis$0String$1.toString$446(s$68))) + "\"";
};
tools$0Flags$1$1.die$69 = function(s$72){return tools$0Crash$1.impossible$59("Flags." + s$72);
};
tools$0Flags$1$1.has_sml_source_ext$73 = function(s$76){switch (s$76) { case "sml": {return true;
 break; }case "sig": {return true;
 break; }default: {return false;
} };
};
tools$0Flags$1$1.install_dir$83 = ["You_did_not_set_path_to_install_dir"];
tools$0Flags$1$1.raggedRight$84 = tools$0PrettyPrint$1.raggedRight$64;
tools$0Flags$1$1.DEBUG_COMPILER$85 = [false];
tools$0Flags$1$1.chat$86 = [false];
tools$0Flags$1$1.type_check_lambda$87 = [true];
tools$0Flags$1$1.eliminate_polymorphic_equality$88 = [true];
tools$0Flags$1$1.print_types$89 = [false];
tools$0Flags$1$1.region_inference$90 = [true];
tools$0Flags$1$1.print_opt_lambda_expression$91 = [false];
tools$0Flags$1$1.enhanced_atbot_analysis$92 = [false];
tools$0Flags$1$1.region_profiling$93 = [false];
tools$0Flags$1$1.print_region_flow_graph$94 = [false];
tools$0Flags$1$1.print_all_program_points$95 = [false];
tools$0Flags$1$1.program_points$96 = [null];
tools$0Flags$1$1.region_paths$97 = [null];
tools$0Flags$1$1.log_to_file$98 = [false];
tools$0Flags$1$1.c_compiler$99 = ["gcc"];
tools$0Flags$1$1.colwidth$100 = tools$0PrettyPrint$1.colwidth$65;
tools$0Flags$1$1.log$101 = [[0]];
tools$0Flags$1$1.dummy$102 = function(v$104){return basis$0General$1.print$163("uninitialised function reference in Flags!");
};
tools$0Flags$1$1.comp_ref$105 = [function(v$225){return basis$0General$1.print$163("uninitialised function reference in Flags!");
}];
tools$0Flags$1$1.current_source_file$106 = ["sources.pm"];
tools$0Flags$1$1.import_basislib$107 = [true];
tools$0Flags$1$1.timings_stream$108 = [[1]];
var warnings$109 = [null];
tools$0Flags$1$1.reset_warnings$110 = function(v$112){return (warnings$109[0] = null,0);
};
tools$0Flags$1$1.warn$113 = function(report$116){return (warnings$109[0] = [report$116,warnings$109[0]],0);
};
tools$0Flags$1$1.warn_string$117 = function(x$232){return (warnings$109[0] = [tools$0Report$1.line$60(x$232),warnings$109[0]],0);
};
tools$0Flags$1$1.report_warnings$118 = function(v$120){var v$125 = warnings$109[0];
if (v$125 == null) {return 0;
} else {if (tools$0Flags$1$1.log_to_file$98[0]) {var t$294 = basis$0General$1.print$163;
var t$293;
var t$292;
var t$291;
var t$290;
var t$289 = "\n*** ";
var t$288;
var t$287 = basis$0Int32$1.toString$458;
var t$286;
var fix$283 = {};
fix$283.$acc = function(v$243,v$244){lab$acc: while (true) {if (v$243 == null) {return v$244;
} else {var v$245 = v$243;
var v$246 = v$245[1];
var t$284 = v$246;
var t$285 = SmlPrims.chk_ovf_i32(v$244 + 1);
var v$243 = t$284;
var v$244 = t$285;
continue lab$acc;
};
};
};
var acc$242 = fix$283.$acc;
t$286 = (acc$242(v$125,0));
t$288 = (t$287(t$286));
t$290 = (t$289 + t$288);
t$291 = (t$290 + " warning");
var t$282;
if (v$125 == null) {t$282 = "s";
} else {var v$140 = v$125;
t$282 = ((v$140[1] == null)?"":"s");
};
t$292 = (t$291 + t$282);
t$293 = (t$292 + " printed on log file\n");
t$294(t$293);
} else {0;
};
var reports$128 = basis$0List$1.rev$682(v$125);
var report$129 = tools$0Report$1.s$hh$64(tools$0Report$1.line$60(" *** Warnings ***"),tools$0Report$1.flatten$87(reports$128));
return tools$0Report$1.print$$242(report$129,tools$0Flags$1$1.log$101[0]);
};
};
tools$0Flags$1$1.scan_string$143 = function(getc$146,cs$149){var fix$295 = {};
fix$295.$loop = function(v$169,v$170){lab$loop: while (true) {var v$163 = getc$146(v$169);
switch (v$163[0]) { case 0: {var v$165 = v$163[1];
var v$166 = v$165[0];
switch (v$166) { case 34: {var v$167 = v$165[1];
return [0,[SmlPrims.implode(basis$0List$1.rev$682(v$170)),v$167]];
 break; }default: {var v$168 = v$165[1];
var t$296 = v$168;
var t$297 = [v$166,v$170];
var v$169 = t$296;
var v$170 = t$297;
continue lab$loop;
} };
 break; }default: {return [1];
} };
};
};
var loop$150 = fix$295.$loop;
var v$176 = getc$146((basis$0StringCvt$1.splitl$206(function(c$253){return (c$253 == 32)?true:((9 <= c$253)?(c$253 <= 13):false);
},getc$146,cs$149))[1]);
switch (v$176[0]) { case 0: {var v$178 = v$176[1];
switch (v$178[0]) { case 34: {var v$180 = v$178[1];
return loop$150(v$180,null);
 break; }default: {return [1];
} };
 break; }default: {return [1];
} };
};
tools$0Flags$1$1.getc$182 = function(v$185){if (v$185 == null) {return [1];
} else {var v$192 = v$185;
return [0,[v$192[0],v$192[1]]];
};
};
return 0;
})();
