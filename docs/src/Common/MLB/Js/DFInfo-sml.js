if ((typeof(basics$0DFInfo$1)) == "undefined") {basics$0DFInfo$1 = {};
};
(function(){basics$0DFInfo$1.eq_DFInfo$118 = function(v$120,v$121){switch (v$120[0]) { case 0: {switch (v$121[0]) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$121[0]) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$121[0]) { case 2: {return true;
 break; }default: {return false;
} };
 break; }case 3: {switch (v$121[0]) { case 3: {return true;
 break; }default: {return false;
} };
 break; }case 4: {switch (v$121[0]) { case 4: {return true;
 break; }default: {return false;
} };
 break; }case 5: {switch (v$121[0]) { case 5: {var v$122 = v$120[1];
var v$123 = v$121[1];
return tools$0FinMap$1.eq_map$653(function(v$135){return syntax_objects$0Ident$1.eq_id$248(v$135[0],v$135[1]);
},function(v$136){return basics$0InfixBasis$1.eq_InfixEntry$217(v$136[0],v$136[1]);
},[v$122,v$123]);
 break; }default: {return false;
} };
 break; }case 6: {switch (v$121[0]) { case 6: {return true;
 break; }default: {return false;
} };
 break; }case 7: {switch (v$121[0]) { case 7: {return true;
 break; }default: {return false;
} };
 break; }case 8: {switch (v$121[0]) { case 8: {return true;
 break; }default: {return false;
} };
 break; } };
};
basics$0DFInfo$1.string$68 = function(v$71){switch (v$71[0]) { case 1: {return "UNITEXP";
 break; }case 2: {return "TUPLE";
 break; }case 8: {return "CASE";
 break; }case 6: {return "IF_df";
 break; }case 3: {return "ORELSE_df";
 break; }case 7: {return "FUN_df";
 break; }case 0: {return "VALIT_df";
 break; }case 4: {return "INFIX_df";
 break; }default: {return "INFIX_BASIS";
} };
};
basics$0DFInfo$1.layout$90 = function(x$127){var v$133;
switch (x$127[0]) { case 1: {v$133 = "UNITEXP";
 break; }case 2: {v$133 = "TUPLE";
 break; }case 8: {v$133 = "CASE";
 break; }case 6: {v$133 = "IF_df";
 break; }case 3: {v$133 = "ORELSE_df";
 break; }case 7: {v$133 = "FUN_df";
 break; }case 0: {v$133 = "VALIT_df";
 break; }case 4: {v$133 = "INFIX_df";
 break; }default: {v$133 = "INFIX_BASIS";
} };
return [1,v$133];
};
return 0;
})();
