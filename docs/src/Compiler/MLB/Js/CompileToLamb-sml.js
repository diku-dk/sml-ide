if ((typeof(compiler0$0CompileToLamb$1)) == "undefined") {compiler0$0CompileToLamb$1 = {};
};
(function(){var eliminate_polymorphic_equality_p$66 = tools$0Flags$1$6.is_on0$5161("eliminate_polymorphic_equality");
var type_check_lambda_p$67 = tools$0Flags$1$6.is_on0$5161("type_check_lambda");
var print_opt_lambda_expression$68 = tools$0Flags$1$6.is_on0$5161("print_opt_lambda_expression");
var safeLinkTimeElimination$69;
var t$619 = tools$0Flags$1$6.add_bool_entry$4824;
var t$618;
var v$71 = [1];
var v$72 = ["Control",["safeLinkTimeElimination",null]];
t$618 = ["Treat this module as a library in the sense that\nthe code can be eliminated if it is not used,\neven if the code has side effects.",[false],"safeLinkTimeElimination",v$72,false,v$71];
safeLinkTimeElimination$69 = (t$619(t$618));
var optimise_p$242 = tools$0Flags$1$6.is_on0$5161("optimiser");
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
compiler_objects$0LambdaExp$1$4.reset$1582(0);
var v$466 = compiler0$0CompileDec$1$16.compileStrdecs$16040(fe$281,v$338,v$340);
var v$467 = v$466[0];
var v$468 = v$466[1];
var declared_lvars$469 = compiler_objects$0CompilerEnv$1$7.lvarsOfCEnv$5269(v$467);
var declared_excons$470 = compiler_objects$0CompilerEnv$1$7.exconsOfCEnv$5271(v$467);
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],".\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
var v$474 = compiler_objects$0LambdaBasics$1.norm$3346(v$337,v$468);
var v$475 = v$474[0];
var v$476 = v$474[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],".\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
var lamb$480 = compiler_objects$0LambdaBasics$1.close$2881(v$475);
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]) {var v$580 = compiler_objects$0LambdaExp$1$4.layoutLambdaPgm$5065(lamb$480);
var stringtree$497 = [0,[[v$580,null],[1],"",3,"Report: UnOpt: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$499){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$499);
},stringtree$497,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$327 = [lamb$480,v$467,v$476,declared_lvars$469,declared_excons$470];
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
var v$506 = tools$0Timing$1.timing_end_res$270("ElimEq",compiler0$0EliminateEq$1$4.elim_eq$4244(v$335,v$328));
var v$507 = v$506[0];
var v$508 = v$506[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]) {var v$590 = compiler_objects$0LambdaExp$1$4.layoutLambdaPgm$5065(v$507);
var stringtree$515 = [0,[[v$590,null],[1],"",3,"Lambda Program After Elimination of Pol. Eq.: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$517){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$517);
},stringtree$515,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
var v$594 = compiler0$0EliminateEq$1$4.layout_env$2708(v$508[0],v$508[1],v$508[2]);
var stringtree$521 = [0,[[v$594,null],[1],"",3,"Pol. Eq. Environment: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$523){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$523);
},stringtree$521,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$324 = [v$507,v$508];
} else {v$324 = [v$328,compiler0$0EliminateEq$1$4.empty$2674];
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
var v$533 = tools$0Timing$1.timing_end_res$270("OptLam",compiler0$0OptLambda$1$14.optimise$19734(v$336,v$325));
var v$534 = v$533[0];
var v$535 = v$533[1];
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
if (tools$0Flags$1$1.DEBUG_COMPILER$85[0]?true:(print_opt_lambda_expression$68(0))) {var v$606 = compiler_objects$0LambdaExp$1$4.layoutLambdaPgm$5065(v$534);
var stringtree$542 = [0,[[v$606,null],[1],"",3,"Report: Opt: "]];
tools$0PrettyPrint$1.outputTree$1072([function(s$544){return basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],s$544);
},stringtree$542,tools$0Flags$1$1.colwidth$100[0]]);
basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"\n\n");
} else {0;
};
v$321 = [v$534,v$535];
var v$322 = v$321[0];
var v$323 = v$321[1];
var TCEnv1$304;
if (type_check_lambda_p$67(0)) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"[Type checking lambda term...\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
tools$0Timing$1.timing_begin$111(0);
var env$$551 = tools$0Timing$1.timing_end_res$270("CheckLam",compiler0$0LambdaStatSem$1.type_check$2318(v$334,false,v$322));
if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"]\n\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
TCEnv1$304 = env$$551;
} else {TCEnv1$304 = compiler0$0LambdaStatSem$1.empty$210;
};
var t$620;
var v$556 = v$322[1];
var v$557 = v$556[0];
var v$558 = v$557[1];
if (v$558 == null) {var v$562 = v$556[1];
switch (v$562[0]) { case 15: {var v$563 = v$562[1];
t$620 = ((v$563[0] == null)?((v$563[1] == null)?true:false):false);
 break; }default: {t$620 = false;
} };
} else {var v$559 = v$558;
if (v$559[0] == null) {if (v$559[1] == null) {var v$560 = v$556[1];
switch (v$560[0]) { case 15: {var v$561 = v$560[1];
t$620 = ((v$561[0] == null)?((v$561[1] == null)?true:false):false);
 break; }default: {t$620 = false;
} };
} else {t$620 = false;
};
} else {t$620 = false;
};
};
if (t$620) {if (tools$0Flags$1$1.chat$86[0]) {basis$0TextIO$1.output$110(tools$0Flags$1$1.log$101[0],"Empty lambda program; skipping code generation.\n");
tools$0Flags$1$1.log$101[0];
0;
} else {0;
};
return [1,v$329];
} else {var safe$311 = compiler_objects$0LambdaExp$1$4.safeLambdaPgm$2266(v$322);
return [0,[v$329,[v$326,v$330,v$323,TCEnv1$304],v$322,safe$311?true:(safeLinkTimeElimination$69(0))]];
};
};
compiler0$0CompileToLamb$1.preHook$341 = function(v$343){return 0;
};
compiler0$0CompileToLamb$1.postHook$344 = function(v$617){return 0;
};
return 0;
})();
