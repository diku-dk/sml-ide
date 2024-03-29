if ((typeof(compiler0$0CompileToLamb$1)) == "undefined") {compiler0$0CompileToLamb$1 = {};
};
(function(){var eliminate_polymorphic_equality_p$66 = tools$0Flags$1$6.is_on0$5191("eliminate_polymorphic_equality");
var type_check_lambda_p$67 = tools$0Flags$1$6.is_on0$5191("type_check_lambda");
var print_opt_lambda_expression$68 = tools$0Flags$1$6.is_on0$5191("print_opt_lambda_expression");
var safeLinkTimeElimination$69;
var t$643 = tools$0Flags$1$6.add_bool_entry$4854;
var t$642;
var v$71 = [1];
var v$72 = ["Control",["safeLinkTimeElimination",null]];
t$642 = ["Treat this module as a library in the sense that\nthe code can be eliminated if it is not used,\neven if the code has side effects.",[false],"safeLinkTimeElimination",v$72,false,v$71];
safeLinkTimeElimination$69 = (t$643(t$642));
var optimise_p$242 = tools$0Flags$1$6.is_on0$5191("optimiser");
compiler0$0CompileToLamb$1.compile$278 = function(fe$281,v$286){var v$338 = v$286[0];
var v$339 = v$286[1];
var v$340 = v$286[2];
var v$334 = v$339[3];
var v$335 = v$339[0];
var v$336 = v$339[2];
var v$337 = v$339[1];
var v$327;
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Compiling abstract syntax tree into lambda language..\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
compiler_objects$0LambdaExp$1$4.reset$1608(0);
var v$475 = compiler0$0CompileDec$1$16.compileStrdecs$16142(fe$281,v$338,v$340);
var v$476 = v$475[0];
var v$477 = v$475[1];
var declared_lvars$478 = compiler_objects$0CompilerEnv$1$7.lvarsOfCEnv$5321(v$476);
var declared_excons$479 = compiler_objects$0CompilerEnv$1$7.exconsOfCEnv$5323(v$476);
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],".\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
var v$483 = compiler_objects$0LambdaBasics$1.norm$3346(v$337,v$477);
var v$484 = v$483[0];
var v$485 = v$483[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],".\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
var lamb$489 = compiler_objects$0LambdaBasics$1.close$2881(v$484);
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]) {var v$598 = compiler_objects$0LambdaExp$1$4.layoutPgm$3265(lamb$489);
var stringtree$506 = [0,[[v$598,null],[1],"",3,"Report: UnOpt: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$508){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$508);
},stringtree$506,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$327 = [lamb$489,v$476,v$485,declared_lvars$478,declared_excons$479];
var v$328 = v$327[0];
var v$329 = v$327[1];
var v$330 = v$327[2];
var v$324;
if (eliminate_polymorphic_equality_p$66(0)) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Eliminating polymorphic equality...\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
tools$0Timing$1.timing_begin$111(0);
var v$515;
var v$606 = compiler0$0EliminateEq$1$4.elim_eq$4270(v$335,v$328);
tools$0Timing$1.timing_end$218("ElimEq");
v$515 = v$606;
var v$519 = v$515[0];
var v$520 = v$515[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]) {var v$610 = compiler_objects$0LambdaExp$1$4.layoutPgm$3265(v$519);
var stringtree$527 = [0,[[v$610,null],[1],"",3,"Lambda Program After Elimination of Pol. Eq.: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$529){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$529);
},stringtree$527,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
var v$614 = compiler0$0EliminateEq$1$4.layout_env$2734(v$520[0],v$520[1],v$520[2]);
var stringtree$533 = [0,[[v$614,null],[1],"",3,"Pol. Eq. Environment: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$535){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$535);
},stringtree$533,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$324 = [v$519,v$520];
} else {v$324 = [v$328,compiler0$0EliminateEq$1$4.empty$2700];
};
var v$325 = v$324[0];
var v$326 = v$324[1];
var v$321;
if (optimise_p$242(0)) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Optimising lambda term...\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
} else {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Rewriting lambda term...\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
};
tools$0Timing$1.timing_begin$111(0);
var v$545;
var v$624 = compiler0$0OptLambda$1$14.optimise$20143(v$336,v$325);
tools$0Timing$1.timing_end$218("OptLam");
v$545 = v$624;
var v$549 = v$545[0];
var v$550 = v$545[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]?true:(print_opt_lambda_expression$68(0))) {var v$628 = compiler_objects$0LambdaExp$1$4.layoutPgm$3265(v$549);
var stringtree$557 = [0,[[v$628,null],[1],"",3,"Report: Opt: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$559){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$559);
},stringtree$557,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$321 = [v$549,v$550];
var v$322 = v$321[0];
var v$323 = v$321[1];
var TCEnv1$304;
if (type_check_lambda_p$67(0)) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Type checking lambda term...\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
tools$0Timing$1.timing_begin$111(0);
var env$$566;
var v$636 = compiler0$0LambdaStatSem$1.type_check$2353(v$334,false,v$322);
tools$0Timing$1.timing_end$218("CheckLam");
env$$566 = v$636;
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
TCEnv1$304 = env$$566;
} else {TCEnv1$304 = compiler0$0LambdaStatSem$1.empty$210;
};
var t$644;
var v$574 = v$322[1];
var v$575 = v$574[0];
var v$576 = v$575[1];
if (v$576 == null) {var v$580 = v$574[1];
switch (v$580[0]) { case 15: {var v$581 = v$580[1];
t$644 = ((v$581[0] == null)?((v$581[1] == null)?true:false):false);
 break; }default: {t$644 = false;
} };
} else {var v$577 = v$576;
if (v$577[0] == null) {if (v$577[1] == null) {var v$578 = v$574[1];
switch (v$578[0]) { case 15: {var v$579 = v$578[1];
t$644 = ((v$579[0] == null)?((v$579[1] == null)?true:false):false);
 break; }default: {t$644 = false;
} };
} else {t$644 = false;
};
} else {t$644 = false;
};
};
if (t$644) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"Empty lambda program; skipping code generation.\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
return [1,v$329];
} else {var safe$311 = compiler_objects$0LambdaExp$1$4.safeLambdaPgm$2296(v$322);
return [0,[v$329,[v$326,v$330,v$323,TCEnv1$304],v$322,safe$311?true:(safeLinkTimeElimination$69(0))]];
};
};
compiler0$0CompileToLamb$1.preHook$341 = function(v$343){return 0;
};
compiler0$0CompileToLamb$1.postHook$344 = function(v$641){return 0;
};
return 0;
})();
