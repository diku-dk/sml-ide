if ((typeof(edlib$0ListSort$1)) == "undefined") {edlib$0ListSort$1 = {};
};
(function(){var fix$208 = {};
fix$208.$sort = function(v$57,v$60){if (v$60 == null) {return null;
} else {var v$79 = v$60;
var v$80 = v$79[1];
if (v$80 == null) {return [v$79[0],null];
} else {var v$83 = v$80;
if (v$83[1] == null) {var v$90 = v$79[0];
var v$91 = v$83[0];
return ((v$57(v$90))(v$91))?[v$90,[v$91,null]]:[v$91,[v$90,null]];
} else {var v$95 = edlib$0edListPair$1.unravel$140(v$60);
var v$96 = v$95[0];
var v$97 = v$95[1];
var fix$216 = {};
fix$216.$merge = function(v$205,v$166){if (v$166 == null) {return v$205;
} else {if (v$205 == null) {return v$166;
} else {var v$168 = v$205;
var v$169 = v$168[0];
var v$170 = v$168[1];
var v$171 = v$166;
var v$172 = v$171[0];
var v$173 = v$171[1];
return ((v$57(v$169))(v$172))?[v$169,fix$216.$merge(v$170,v$166)]:[v$172,fix$216.$merge(v$205,v$173)];
};
};
};
var merge$164 = fix$216.$merge;
return merge$164(fix$208.$sort(v$57,v$96),fix$208.$sort(v$57,v$97));
};
};
};
};
edlib$0ListSort$1.sort$54 = fix$208.$sort;
var fix$209 = {};
fix$209.$perms = function(v$127){if (v$127 == null) {return [null,null];
} else {var v$134 = v$127;
var v$135 = v$134[0];
var v$136 = v$134[1];
var t$214;
var v$190 = null;
var fix$215 = {};
fix$215.$foldR = function(v$192){if (v$192 == null) {return v$190;
} else {var v$193 = v$192;
var v$194 = v$193[0];
var v$195 = v$193[1];
var y$197 = fix$215.$foldR(v$195);
return basis$0List$1.s$n$686(v$194,y$197);
};
};
var foldR$191 = fix$215.$foldR;
t$214 = (function(v$206){return foldR$191(v$206);
});
var t$213;
var t$212 = basis$0List$1.map$697;
var t$211;
var fix$210 = {};
fix$210.$plug = function(v$200){if (v$200 == null) {return [[v$135,null],null];
} else {var v$201 = v$200;
var v$202 = v$201[0];
var v$203 = v$201[1];
return [[v$135,v$200],basis$0List$1.map$697(function(l$204){return [v$202,l$204];
},fix$210.$plug(v$203))];
};
};
var plug$199 = fix$210.$plug;
t$211 = (function(v$207){return plug$199(v$207);
});
t$213 = (t$212(t$211,fix$209.$perms(v$136)));
return t$214(t$213);
};
};
edlib$0ListSort$1.perms$124 = fix$209.$perms;
return 0;
})();
