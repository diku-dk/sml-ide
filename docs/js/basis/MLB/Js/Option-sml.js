if ((typeof(basis$0Option$1)) == "undefined") {basis$0Option$1 = {};
};
(function(){basis$0Option$1.getOpt$55 = function(v$197){return basis$0General$1.getOpt$107(v$197[0],v$197[1]);
};
basis$0Option$1.isSome$56 = function(v$198){return function(v$200){return basis$0General$1.isSome$122(v$200);
};
};
basis$0Option$1.valOf$57 = function(v$199){return function(v$201){return basis$0General$1.valOf$130(v$201);
};
};
basis$0Option$1.filter$58 = function(p$61,x$64){return (p$61(x$64))?[0,x$64]:[1];
};
basis$0Option$1.map$69 = function(v$72,v$75){switch (v$75[0]) { case 1: {return [1];
 break; }default: {var v$86 = v$75[1];
return [0,v$72(v$86)];
} };
};
basis$0Option$1.app$87 = function(v$90,v$93){switch (v$93[0]) { case 1: {return 0;
 break; }default: {var v$104 = v$93[1];
return v$90(v$104);
} };
};
basis$0Option$1.join$105 = function(v$108){switch (v$108[0]) { case 1: {return [1];
 break; }default: {return v$108[1];
} };
};
basis$0Option$1.mapPartial$115 = function(v$118,v$121){switch (v$121[0]) { case 1: {return [1];
 break; }default: {var v$132 = v$121[1];
return v$118(v$132);
} };
};
basis$0Option$1.compose$133 = function(v$147,v$148){return function(x$140){var v$145 = v$148(x$140);
switch (v$145[0]) { case 1: {return [1];
 break; }default: {var v$146 = v$145[1];
return [0,v$147(v$146)];
} };
};
};
basis$0Option$1.composePartial$149 = function(v$163,v$164){return function(x$156){var v$161 = v$164(x$156);
switch (v$161[0]) { case 1: {return [1];
 break; }default: {var v$162 = v$161[1];
return v$163(v$162);
} };
};
};
return 0;
})();
