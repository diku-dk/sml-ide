if ((typeof(basics$0OverloadingInfo$1)) == "undefined") {basics$0OverloadingInfo$1 = {};
};
(function(){var values_64bit$74 = tools$0Flags$1$6.is_on0$5161("values_64bit");
var tag_values$75 = tools$0Flags$1$6.is_on0$5161("tag_values");
basics$0OverloadingInfo$1.resolvedIntDefault$76 = function(v$78){var v$177 = tag_values$75(0);
var v$178 = values_64bit$74(0);
return v$177?(v$178?[11]:[13]):(v$178?[10]:[12]);
};
basics$0OverloadingInfo$1.resolvedWordDefault$90 = function(v$92){var v$179 = tag_values$75(0);
var v$180 = values_64bit$74(0);
return v$179?(v$180?[4]:[6]):(v$180?[3]:[5]);
};
basics$0OverloadingInfo$1.string$104 = function(v$107){switch (v$107[0]) { case 0: {return "UNRESOLVED_IDENT";
 break; }case 1: {return "UNRESOLVED_DOTDOTDOT";
 break; }case 13: {return "RESOLVED_INT31";
 break; }case 12: {return "RESOLVED_INT32";
 break; }case 11: {return "RESOLVED_INT63";
 break; }case 10: {return "RESOLVED_INT64";
 break; }case 9: {return "RESOLVED_INTINF";
 break; }case 8: {return "RESOLVED_REAL";
 break; }case 7: {return "RESOLVED_STRING";
 break; }case 14: {return "RESOLVED_CHAR";
 break; }case 2: {return "RESOLVED_WORD8";
 break; }case 6: {return "RESOLVED_WORD31";
 break; }case 5: {return "RESOLVED_WORD32";
 break; }case 4: {return "RESOLVED_WORD63";
 break; }default: {return "RESOLVED_WORD64";
} };
};
basics$0OverloadingInfo$1.layout$144 = function(x$175){var v$185;
switch (x$175[0]) { case 0: {v$185 = "UNRESOLVED_IDENT";
 break; }case 1: {v$185 = "UNRESOLVED_DOTDOTDOT";
 break; }case 13: {v$185 = "RESOLVED_INT31";
 break; }case 12: {v$185 = "RESOLVED_INT32";
 break; }case 11: {v$185 = "RESOLVED_INT63";
 break; }case 10: {v$185 = "RESOLVED_INT64";
 break; }case 9: {v$185 = "RESOLVED_INTINF";
 break; }case 8: {v$185 = "RESOLVED_REAL";
 break; }case 7: {v$185 = "RESOLVED_STRING";
 break; }case 14: {v$185 = "RESOLVED_CHAR";
 break; }case 2: {v$185 = "RESOLVED_WORD8";
 break; }case 6: {v$185 = "RESOLVED_WORD31";
 break; }case 5: {v$185 = "RESOLVED_WORD32";
 break; }case 4: {v$185 = "RESOLVED_WORD63";
 break; }default: {v$185 = "RESOLVED_WORD64";
} };
return [1,v$185];
};
return 0;
})();
