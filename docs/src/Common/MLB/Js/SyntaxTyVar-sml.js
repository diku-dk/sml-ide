if ((typeof(syntax_objects$0SyntaxTyVar$1)) == "undefined") {syntax_objects$0SyntaxTyVar$1 = {};
};
(function(){syntax_objects$0SyntaxTyVar$1.eq_SyntaxTyVar$125 = function(v$127,v$128){switch (v$128[0]) { case 0: {return v$127[1] == v$128[1];
 break; }default: {return false;
} };
};
syntax_objects$0SyntaxTyVar$1.mk_TyVar$58 = function(v$59){return [0,v$59];
};
syntax_objects$0SyntaxTyVar$1.pr_tyvar$60 = function(v$63){return v$63[1];
};
syntax_objects$0SyntaxTyVar$1.isEquality$68 = function(v$71){var v$92 = v$71[1];
var v$82;
var fix$143 = {};
fix$143.$h = function(v$135,v$136){lab$h: while (true) {if (v$135 < 0) {return v$136;
} else {var t$144 = SmlPrims.chk_ovf_i32(v$135 - 1);
var t$145 = [v$92.charCodeAt(v$135),v$136];
var v$135 = t$144;
var v$136 = t$145;
continue lab$h;
};
};
};
var h$133 = fix$143.$h;
v$82 = (h$133(SmlPrims.chk_ovf_i32(v$92.length - 1),null));
if (v$82 == null) {return false;
} else {var v$84 = v$82;
switch (v$84[0]) { case 39: {var v$86 = v$84[1];
if (v$86 == null) {return false;
} else {var v$88 = v$86;
switch (v$88[0]) { case 39: {return true;
 break; }default: {return false;
} };
};
 break; }default: {return false;
} };
};
};
syntax_objects$0SyntaxTyVar$1.pu$93 = pickle$0pickle$1.convert$2342([function(v$94){return [0,v$94];
},function(v$97){return v$97[1];
}],pickle$0pickle$1.string$909);
return 0;
})();