if ((typeof(xmlrpc$0WSeq$1)) == "undefined") {xmlrpc$0WSeq$1 = {};
};
(function(){var fix$266 = {};
fix$266.$eq_wseq = function(v$225,v$226){lab$eq_wseq: while (true) {switch (v$225[0]) { case 0: {switch (v$226[0]) { case 0: {return true;
 break; }default: {return false;
} };
 break; }case 1: {switch (v$226[0]) { case 1: {return true;
 break; }default: {return false;
} };
 break; }case 2: {switch (v$226[0]) { case 2: {var v$227 = v$225[1];
var v$228 = v$226[1];
if (fix$266.$eq_wseq(v$227[0],v$228[0])) {var t$270 = v$227[1];
var t$271 = v$228[1];
var v$225 = t$270;
var v$226 = t$271;
continue lab$eq_wseq;
} else {return false;
};
 break; }default: {return false;
} };
 break; }case 3: {switch (v$226[0]) { case 3: {var v$230 = v$225[1];
var v$231 = v$226[1];
var fix$267 = {};
fix$267.$eq_list = function(v$240,v$241){lab$eq_list: while (true) {if (v$240 == null) {return (v$241 == null)?true:false;
} else {if (v$241 == null) {return false;
} else {var v$242 = v$240;
var v$243 = v$241;
if (v$242[0] == v$243[0]) {var t$268 = v$242[1];
var t$269 = v$243[1];
var v$240 = t$268;
var v$241 = t$269;
continue lab$eq_list;
} else {return false;
};
};
};
};
};
var eq_list$238 = fix$267.$eq_list;
return eq_list$238(v$230,v$231);
 break; }default: {return false;
} };
 break; }case 4: {switch (v$226[0]) { case 4: {return v$225[1] == v$226[1];
 break; }default: {return false;
} };
 break; } };
};
};
xmlrpc$0WSeq$1.eq_wseq$223 = fix$266.$eq_wseq;
xmlrpc$0WSeq$1.prmap$63 = function(v$66,v$69){if (v$69 == null) {return [1];
} else {var v$102 = v$69;
var v$103 = v$102[0];
var v$104 = v$102[1];
var fix$272 = {};
fix$272.$loop = function(v$83,v$86){if (v$86 == null) {return v$66(v$83);
} else {var v$98 = v$86;
var v$99 = v$98[0];
var v$100 = v$98[1];
return [2,[v$66(v$83),fix$272.$loop(v$99,v$100)]];
};
};
var loop$80 = fix$272.$loop;
return loop$80(v$103,v$104);
};
};
xmlrpc$0WSeq$1.prsep$105 = function(v$108,v$111,v$114){if (v$114 == null) {return [1];
} else {var v$151 = v$114;
var v$152 = v$151[0];
var v$153 = v$151[1];
var fix$273 = {};
fix$273.$loop = function(v$131,v$134){if (v$134 == null) {return v$111(v$131);
} else {var v$146 = v$134;
var v$147 = v$146[0];
var v$148 = v$146[1];
return [2,[[2,[v$111(v$131),v$108]],fix$273.$loop(v$147,v$148)]];
};
};
var loop$128 = fix$273.$loop;
return loop$128(v$152,v$153);
};
};
var fix$274 = {};
fix$274.$flatten = function(v$157,v$160){lab$flatten: while (true) {switch (v$157[0]) { case 1: {return v$160;
 break; }case 0: {return ["\n",v$160];
 break; }case 4: {return [v$157[1],v$160];
 break; }case 3: {var v$182 = v$157[1];
return basis$0List$1.s$n$268(v$182,v$160);
 break; }default: {var v$189 = v$157[1];
var v$190 = v$189[0];
var v$191 = v$189[1];
var t$275 = v$190;
var t$276 = fix$274.$flatten(v$191,v$160);
var v$157 = t$275;
var v$160 = t$276;
continue lab$flatten;
} };
};
};
var flatten$154 = fix$274.$flatten;
xmlrpc$0WSeq$1.flatten$193 = function(seq$196){return SmlPrims.concat(flatten$154(seq$196,null));
};
return 0;
})();
