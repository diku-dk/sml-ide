if ((typeof(smltojs0$0SmlToJsComp$1$9)) == "undefined") {smltojs0$0SmlToJsComp$1$9 = {};
};
(function(){smltojs0$0SmlToJsComp$1$9.mk_name$5033;
var c$5034 = [0];
smltojs0$0SmlToJsComp$1$9.mk_name$5033 = (function(v$5036){return ["top" + (basis$0Int32$1.toString$458(c$5034[0])),(c$5034[0] = (SmlPrims.chk_ovf_i32(c$5034[0] + 1)),0)][0];
});
smltojs0$0SmlToJsComp$1$9.print_error_report$5037 = function(report$5040){return tools$0Report$1.print$$242(report$5040,tools$0Flags$1$1.log$101[0]);
};
smltojs0$0SmlToJsComp$1$9.en$PARSE_ELAB_ERROR$5041 = new String("PARSE_ELAB_ERROR");
smltojs0$0SmlToJsComp$1$9.compile$5042 = function(v$5102,v$5103){tools$0Flags$1$1.reset_warnings$110(0);
var mlbfile$5047 = smltojs0$0SmlToJsComp$1$9.mk_name$5033(0);
(special_objects$0Name$1.bucket$144[0] = null,0);
special_objects$0Name$1.baseSet$61(mlbfile$5047);
var v$5097 = smltojs0$0SmlToJsComp$1$4.un$1009(v$5102);
var v$5098 = v$5097[0];
var v$5099 = v$5097[1];
var v$5100 = v$5097[2];
var v$5101 = v$5097[3];
var res$5054 = basics$0ParseElab$1.parse_elab$275(mlbfile$5047,v$5099,v$5098,[0,v$5103]);
switch (res$5054[0]) { case 1: {var v$5074 = res$5054[1];
var v$5075 = v$5074[0];
var v$5076 = v$5074[1];
basis$0General$1.print$163("\n");
tools$0Report$1.print$$242(v$5075,tools$0Flags$1$1.log$101[0]);
throw [smltojs0$0SmlToJsComp$1$9.en$PARSE_ELAB_ERROR$5041,v$5076];
 break; }default: {var v$5092 = res$5054[1];
var v$5094 = v$5092[1];
var v$5095 = v$5092[0];
var v$5096 = v$5092[3];
smltojs0$0SmlToJsComp$1$1.chat$82("[opacity elimination begin...]");
var v$5089 = basics$0OpacityElim$1.opacity_elimination$1586(v$5100,v$5096);
var v$5090 = v$5089[0];
var v$5091 = v$5089[1];
smltojs0$0SmlToJsComp$1$1.chat$82("[opacity elimination end...]");
smltojs0$0SmlToJsComp$1$1.chat$82("[interpretation begin...]");
var smlfile$5081 = smltojs0$0SmlToJsComp$1$9.mk_name$5033(0);
var v$5086 = smltojs0$0SmlToJsComp$1$8.interp$4319(false,mlbfile$5047,v$5101,v$5090,smlfile$5081);
var v$5087 = v$5086[0];
var v$5088 = v$5086[1];
var fix$5171 = {};
fix$5171.$app = function(v$5152){lab$app: while (true) {if (v$5152 == null) {return 0;
} else {var v$5153 = v$5152;
var v$5154 = v$5153[0];
var v$5155 = v$5153[1];
if (v$5154[0][2]) {0;
} else {var v$5159 = v$5154[0][1];
(v$5154[0] = [[false],v$5159,true],0);
};
var t$5172 = v$5155;
var v$5152 = t$5172;
continue lab$app;
};
};
};
var app$5151 = fix$5171.$app;
app$5151(special_objects$0Name$1.bucket$144[0]);
(special_objects$0Name$1.bucket$144[0] = null,0);
smltojs0$0SmlToJsComp$1$1.chat$82("[interpretation end...]");
return [smltojs0$0SmlToJsComp$1$4.mk$1005([v$5094,v$5095,v$5091,v$5087]),v$5088];
} };
};
smltojs0$0SmlToJsComp$1$9.execute$5104 = function(mc$5107){return smltojs0$0SmlToJsComp$1$5.exec_mc$2608(mc$5107);
};
smltojs0$0SmlToJsComp$1$9.load_url$5108 = function(v$5110){throw [basis$0Initial$1.en$Fail$54,"SmlToJsComp.load_url not implemented"];
};
smltojs0$0SmlToJsComp$1$9.link$5111 = function(v$5113){throw [basis$0Initial$1.en$Fail$54,"SmlToJsComp.link not implemented"];
};
smltojs0$0SmlToJsComp$1$9.pp$5114 = function(v$5170){return smltojs0$0SmlToJsComp$1$5.pp_mc$2573(v$5170);
};
return 0;
})();
