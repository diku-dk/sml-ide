if ((typeof(smltojs0$0SmlToJsCompApp$1$1)) == "undefined") {smltojs0$0SmlToJsCompApp$1$1 = {};
};
(function(){smltojs0$0SmlToJsCompApp$1$1.codemirror_module$54 = "sml";
smltojs0$0SmlToJsCompApp$1$1.application_title$55 = "SMLtoJs Online";
smltojs0$0SmlToJsCompApp$1$1.application_logo$56 = "smltojs_logo_transparent_small.png";
smltojs0$0SmlToJsCompApp$1$1.syntaxhighlight$57 = true;
smltojs0$0SmlToJsCompApp$1$1.about$58 = function(v$60){var v$672;
var v$674;
var v$676;
var v$678;
var v$680;
var v$682;
var attrs$348 = null;
var elem$349;
var v$684;
var v$686;
var v$688;
var v$690;
var v$692;
var v$694;
var v$696;
var v$698;
var v$700;
var v$702 = document.createTextNode("This Standard ML IDE allows programmers to build client-based web ");
var v$703 = document.createTextNode("applications using Standard ML. Use the File-menu to create ");
var e$395 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$395,v$702);
(function(e,a){return e.appendChild(a);})(e$395,v$703);
v$700 = e$395;
var v$701 = document.createTextNode("and organize files. Use the documentation to the right for ");
var e$391 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$391,v$700);
(function(e,a){return e.appendChild(a);})(e$391,v$701);
v$698 = e$391;
var v$699 = document.createTextNode("navigating the part of the Standard ML Basis Library ");
var e$387 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$387,v$698);
(function(e,a){return e.appendChild(a);})(e$387,v$699);
v$696 = e$387;
var v$697 = document.createTextNode("available to the programmer. Additional libraries are ");
var e$383 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$383,v$696);
(function(e,a){return e.appendChild(a);})(e$383,v$697);
v$694 = e$383;
var v$695 = document.createTextNode("supported, including libraries Js and JsCore for interacting ");
var e$379 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$379,v$694);
(function(e,a){return e.appendChild(a);})(e$379,v$695);
v$692 = e$379;
var v$693 = document.createTextNode("with native JavaScript. Programs are compiled and executed ");
var e$375 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$375,v$692);
(function(e,a){return e.appendChild(a);})(e$375,v$693);
v$690 = e$375;
var v$691 = document.createTextNode("using the top-level menu item Compile->Run. The print ");
var e$371 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$371,v$690);
(function(e,a){return e.appendChild(a);})(e$371,v$691);
v$688 = e$371;
var v$689 = document.createTextNode("function can be used to output text to the Output tab in ");
var e$367 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$367,v$688);
(function(e,a){return e.appendChild(a);})(e$367,v$689);
v$686 = e$367;
var v$687 = document.createTextNode("the lower part of the IDE. For a quick demonstration, load the Demo-file available from ");
var e$363 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$363,v$686);
(function(e,a){return e.appendChild(a);})(e$363,v$687);
v$684 = e$363;
var v$685 = document.createTextNode("the File-menu.");
var e$359 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$359,v$684);
(function(e,a){return e.appendChild(a);})(e$359,v$685);
elem$349 = e$359;
var newelem$350 = document.createElement("p");
var fix$880 = {};
fix$880.$app = function(v$352){lab$app: while (true) {if (v$352 == null) {return 0;
} else {var v$353 = v$352;
var v$354 = v$353[0];
var v$355 = v$353[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$350,v$354[0],v$354[1]);
var t$881 = v$355;
var v$352 = t$881;
continue lab$app;
};
};
};
var app$351 = fix$880.$app;
app$351(attrs$348);
(function(e,a){return e.appendChild(a);})(newelem$350,elem$349);
v$682 = newelem$350;
var v$683;
var attrs$408 = null;
var elem$409;
var v$704;
var v$706;
var v$708 = document.createTextNode("Created files appear in the File Tree to the left. If you ");
var v$709 = document.createTextNode("have a Dropbox account, your files may be kept in a special ");
var e$427 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$427,v$708);
(function(e,a){return e.appendChild(a);})(e$427,v$709);
v$706 = e$427;
var v$707 = document.createTextNode("area of your Dropbox, visible only to you. The application ");
var e$423 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$423,v$706);
(function(e,a){return e.appendChild(a);})(e$423,v$707);
v$704 = e$423;
var v$705 = document.createTextNode("is only requesting access to this special part of your Dropbox.");
var e$419 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$419,v$704);
(function(e,a){return e.appendChild(a);})(e$419,v$705);
elem$409 = e$419;
var newelem$410 = document.createElement("p");
var fix$882 = {};
fix$882.$app = function(v$412){lab$app: while (true) {if (v$412 == null) {return 0;
} else {var v$413 = v$412;
var v$414 = v$413[0];
var v$415 = v$413[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$410,v$414[0],v$414[1]);
var t$883 = v$415;
var v$412 = t$883;
continue lab$app;
};
};
};
var app$411 = fix$882.$app;
app$411(attrs$408);
(function(e,a){return e.appendChild(a);})(newelem$410,elem$409);
v$683 = newelem$410;
var e$346 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$346,v$682);
(function(e,a){return e.appendChild(a);})(e$346,v$683);
v$680 = e$346;
var v$681;
var attrs$433 = null;
var elem$434 = document.createTextNode("A Note on Privacy");
var newelem$435 = document.createElement("h4");
var fix$884 = {};
fix$884.$app = function(v$437){lab$app: while (true) {if (v$437 == null) {return 0;
} else {var v$438 = v$437;
var v$439 = v$438[0];
var v$440 = v$438[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$435,v$439[0],v$439[1]);
var t$885 = v$440;
var v$437 = t$885;
continue lab$app;
};
};
};
var app$436 = fix$884.$app;
app$436(attrs$433);
(function(e,a){return e.appendChild(a);})(newelem$435,elem$434);
v$681 = newelem$435;
var e$342 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$342,v$680);
(function(e,a){return e.appendChild(a);})(e$342,v$681);
v$678 = e$342;
var v$679;
var attrs$443 = null;
var elem$444;
var v$710;
var v$712;
var v$714;
var v$716 = document.createTextNode("The programs you keep in the file tree are not visible ");
var v$717 = document.createTextNode("to anyone but you. Information about your programs and the ");
var e$466 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$466,v$716);
(function(e,a){return e.appendChild(a);})(e$466,v$717);
v$714 = e$466;
var v$715 = document.createTextNode("programs themselves only leaves your web-browser for ");
var e$462 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$462,v$714);
(function(e,a){return e.appendChild(a);})(e$462,v$715);
v$712 = e$462;
var v$713 = document.createTextNode("syncronizing with your Dropbox datastore. The Dropbox ");
var e$458 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$458,v$712);
(function(e,a){return e.appendChild(a);})(e$458,v$713);
v$710 = e$458;
var v$711 = document.createTextNode("datastore is visible only to you.");
var e$454 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$454,v$710);
(function(e,a){return e.appendChild(a);})(e$454,v$711);
elem$444 = e$454;
var newelem$445 = document.createElement("p");
var fix$886 = {};
fix$886.$app = function(v$447){lab$app: while (true) {if (v$447 == null) {return 0;
} else {var v$448 = v$447;
var v$449 = v$448[0];
var v$450 = v$448[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$445,v$449[0],v$449[1]);
var t$887 = v$450;
var v$447 = t$887;
continue lab$app;
};
};
};
var app$446 = fix$886.$app;
app$446(attrs$443);
(function(e,a){return e.appendChild(a);})(newelem$445,elem$444);
v$679 = newelem$445;
var e$338 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$338,v$678);
(function(e,a){return e.appendChild(a);})(e$338,v$679);
v$676 = e$338;
var v$677;
var attrs$473 = null;
var elem$474 = document.createTextNode("Contributors");
var newelem$475 = document.createElement("h4");
var fix$888 = {};
fix$888.$app = function(v$477){lab$app: while (true) {if (v$477 == null) {return 0;
} else {var v$478 = v$477;
var v$479 = v$478[0];
var v$480 = v$478[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$475,v$479[0],v$479[1]);
var t$889 = v$480;
var v$477 = t$889;
continue lab$app;
};
};
};
var app$476 = fix$888.$app;
app$476(attrs$473);
(function(e,a){return e.appendChild(a);})(newelem$475,elem$474);
v$677 = newelem$475;
var e$334 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$334,v$676);
(function(e,a){return e.appendChild(a);})(e$334,v$677);
v$674 = e$334;
var v$675;
var attrs$483 = null;
var elem$484;
var v$718;
var v$720;
var v$722;
var v$724;
var v$726;
var v$728;
var v$730;
var v$732;
var v$734;
var v$736;
var v$738;
var v$740;
var v$742;
var v$744;
var v$746 = document.createTextNode("The IDE is based on ");
var v$747;
var attrs$807 = [["href","http://www.smlserver.org/smltojs"],[["target","_blank"],null]];
var elem$808 = document.createTextNode("SMLtoJs");
var newelem$809 = document.createElement("a");
var fix$890 = {};
fix$890.$app = function(v$811){lab$app: while (true) {if (v$811 == null) {return 0;
} else {var v$812 = v$811;
var v$813 = v$812[0];
var v$814 = v$812[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$809,v$813[0],v$813[1]);
var t$891 = v$814;
var v$811 = t$891;
continue lab$app;
};
};
};
var app$810 = fix$890.$app;
app$810(attrs$807);
(function(e,a){return e.appendChild(a);})(newelem$809,elem$808);
v$747 = newelem$809;
var e$550 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$550,v$746);
(function(e,a){return e.appendChild(a);})(e$550,v$747);
v$744 = e$550;
var v$745 = document.createTextNode(", a Standard ML to JavaScript compiler. The IDE also uses the ");
var e$546 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$546,v$744);
(function(e,a){return e.appendChild(a);})(e$546,v$745);
v$742 = e$546;
var v$743;
var attrs$816 = [["href","http://www.dojotoolkit.org"],[["target","_blank"],null]];
var elem$817 = document.createTextNode("Dojo");
var newelem$818 = document.createElement("a");
var fix$892 = {};
fix$892.$app = function(v$820){lab$app: while (true) {if (v$820 == null) {return 0;
} else {var v$821 = v$820;
var v$822 = v$821[0];
var v$823 = v$821[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$818,v$822[0],v$822[1]);
var t$893 = v$823;
var v$820 = t$893;
continue lab$app;
};
};
};
var app$819 = fix$892.$app;
app$819(attrs$816);
(function(e,a){return e.appendChild(a);})(newelem$818,elem$817);
v$743 = newelem$818;
var e$542 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$542,v$742);
(function(e,a){return e.appendChild(a);})(e$542,v$743);
v$740 = e$542;
var v$741 = document.createTextNode(" framework as the basis for the IDE GUI widgets and the ");
var e$538 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$538,v$740);
(function(e,a){return e.appendChild(a);})(e$538,v$741);
v$738 = e$538;
var v$739;
var attrs$825 = [["href","https://www.dropbox.com/developers/datastore"],[["target","_blank"],null]];
var elem$826 = document.createTextNode("Dropbox Datastore API");
var newelem$827 = document.createElement("a");
var fix$894 = {};
fix$894.$app = function(v$829){lab$app: while (true) {if (v$829 == null) {return 0;
} else {var v$830 = v$829;
var v$831 = v$830[0];
var v$832 = v$830[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$827,v$831[0],v$831[1]);
var t$895 = v$832;
var v$829 = t$895;
continue lab$app;
};
};
};
var app$828 = fix$894.$app;
app$828(attrs$825);
(function(e,a){return e.appendChild(a);})(newelem$827,elem$826);
v$739 = newelem$827;
var e$534 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$534,v$738);
(function(e,a){return e.appendChild(a);})(e$534,v$739);
v$736 = e$534;
var v$737 = document.createTextNode(" for allowing users to store their data in Dropbox. The IDE also uses ");
var e$530 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$530,v$736);
(function(e,a){return e.appendChild(a);})(e$530,v$737);
v$734 = e$530;
var v$735;
var attrs$834 = [["href","http://codemirror.net"],[["target","_blank"],null]];
var elem$835 = document.createTextNode("CodeMirror");
var newelem$836 = document.createElement("a");
var fix$896 = {};
fix$896.$app = function(v$838){lab$app: while (true) {if (v$838 == null) {return 0;
} else {var v$839 = v$838;
var v$840 = v$839[0];
var v$841 = v$839[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$836,v$840[0],v$840[1]);
var t$897 = v$841;
var v$838 = t$897;
continue lab$app;
};
};
};
var app$837 = fix$896.$app;
app$837(attrs$834);
(function(e,a){return e.appendChild(a);})(newelem$836,elem$835);
v$735 = newelem$836;
var e$526 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$526,v$734);
(function(e,a){return e.appendChild(a);})(e$526,v$735);
v$732 = e$526;
var v$733 = document.createTextNode(" as the foundation for the Standard ML editor features, including syntax-highligting (support provided by Ken Friis Larsen). ");
var e$522 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$522,v$732);
(function(e,a){return e.appendChild(a);})(e$522,v$733);
v$730 = e$522;
var v$731 = document.createTextNode(" The sources for this IDE are");
var e$518 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$518,v$730);
(function(e,a){return e.appendChild(a);})(e$518,v$731);
v$728 = e$518;
var v$729 = document.createTextNode(" available by download from the Github MLKit repository and are distributed");
var e$514 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$514,v$728);
(function(e,a){return e.appendChild(a);})(e$514,v$729);
v$726 = e$514;
var v$727 = document.createTextNode(" under the GPL2 license; some parts of the sources are also available under the MIT license.");
var e$510 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$510,v$726);
(function(e,a){return e.appendChild(a);})(e$510,v$727);
v$724 = e$510;
var v$725 = document.createTextNode(" For information about licenses, please consult the sources, which are available");
var e$506 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$506,v$724);
(function(e,a){return e.appendChild(a);})(e$506,v$725);
v$722 = e$506;
var v$723 = document.createTextNode(" from the ");
var e$502 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$502,v$722);
(function(e,a){return e.appendChild(a);})(e$502,v$723);
v$720 = e$502;
var v$721;
var attrs$843 = [["href","https://github.com/melsman/mlkit"],[["target","_blank"],null]];
var elem$844 = document.createTextNode("Github MLKit Repository");
var newelem$845 = document.createElement("a");
var fix$898 = {};
fix$898.$app = function(v$847){lab$app: while (true) {if (v$847 == null) {return 0;
} else {var v$848 = v$847;
var v$849 = v$848[0];
var v$850 = v$848[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$845,v$849[0],v$849[1]);
var t$899 = v$850;
var v$847 = t$899;
continue lab$app;
};
};
};
var app$846 = fix$898.$app;
app$846(attrs$843);
(function(e,a){return e.appendChild(a);})(newelem$845,elem$844);
v$721 = newelem$845;
var e$498 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$498,v$720);
(function(e,a){return e.appendChild(a);})(e$498,v$721);
v$718 = e$498;
var v$719 = document.createTextNode(".");
var e$494 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$494,v$718);
(function(e,a){return e.appendChild(a);})(e$494,v$719);
elem$484 = e$494;
var newelem$485 = document.createElement("p");
var fix$900 = {};
fix$900.$app = function(v$487){lab$app: while (true) {if (v$487 == null) {return 0;
} else {var v$488 = v$487;
var v$489 = v$488[0];
var v$490 = v$488[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$485,v$489[0],v$489[1]);
var t$901 = v$490;
var v$487 = t$901;
continue lab$app;
};
};
};
var app$486 = fix$900.$app;
app$486(attrs$483);
(function(e,a){return e.appendChild(a);})(newelem$485,elem$484);
v$675 = newelem$485;
var e$330 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$330,v$674);
(function(e,a){return e.appendChild(a);})(e$330,v$675);
v$672 = e$330;
var v$673;
var attrs$563 = null;
var elem$564;
var v$748;
var v$750;
var v$752;
var v$754;
var v$756;
var v$758 = document.createTextNode("The IDE and SMLtoJs are written by ");
var v$759;
var attrs$852 = [["href","http://www.elsman.com"],[["target","_blank"],null]];
var elem$853 = document.createTextNode("Martin Elsman");
var newelem$854 = document.createElement("a");
var fix$902 = {};
fix$902.$app = function(v$856){lab$app: while (true) {if (v$856 == null) {return 0;
} else {var v$857 = v$856;
var v$858 = v$857[0];
var v$859 = v$857[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$854,v$858[0],v$858[1]);
var t$903 = v$859;
var v$856 = t$903;
continue lab$app;
};
};
};
var app$855 = fix$902.$app;
app$855(attrs$852);
(function(e,a){return e.appendChild(a);})(newelem$854,elem$853);
v$759 = newelem$854;
var e$594 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$594,v$758);
(function(e,a){return e.appendChild(a);})(e$594,v$759);
v$756 = e$594;
var v$757 = document.createTextNode(". For information about using ");
var e$590 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$590,v$756);
(function(e,a){return e.appendChild(a);})(e$590,v$757);
v$754 = e$590;
var v$755;
var attrs$861 = [["href","http://www.smlserver.org/smltojs"],[["target","_blank"],null]];
var elem$862 = document.createTextNode("SMLtoJs");
var newelem$863 = document.createElement("a");
var fix$904 = {};
fix$904.$app = function(v$865){lab$app: while (true) {if (v$865 == null) {return 0;
} else {var v$866 = v$865;
var v$867 = v$866[0];
var v$868 = v$866[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$863,v$867[0],v$867[1]);
var t$905 = v$868;
var v$865 = t$905;
continue lab$app;
};
};
};
var app$864 = fix$904.$app;
app$864(attrs$861);
(function(e,a){return e.appendChild(a);})(newelem$863,elem$862);
v$755 = newelem$863;
var e$586 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$586,v$754);
(function(e,a){return e.appendChild(a);})(e$586,v$755);
v$752 = e$586;
var v$753 = document.createTextNode(" in an offline setting, consult the ");
var e$582 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$582,v$752);
(function(e,a){return e.appendChild(a);})(e$582,v$753);
v$750 = e$582;
var v$751;
var attrs$870 = [["href","http://www.smlserver.org/smltojs"],[["target","_blank"],null]];
var elem$871 = document.createTextNode("SMLtoJs");
var newelem$872 = document.createElement("a");
var fix$906 = {};
fix$906.$app = function(v$874){lab$app: while (true) {if (v$874 == null) {return 0;
} else {var v$875 = v$874;
var v$876 = v$875[0];
var v$877 = v$875[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$872,v$876[0],v$876[1]);
var t$907 = v$877;
var v$874 = t$907;
continue lab$app;
};
};
};
var app$873 = fix$906.$app;
app$873(attrs$870);
(function(e,a){return e.appendChild(a);})(newelem$872,elem$871);
v$751 = newelem$872;
var e$578 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$578,v$750);
(function(e,a){return e.appendChild(a);})(e$578,v$751);
v$748 = e$578;
var v$749 = document.createTextNode(" web site.");
var e$574 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$574,v$748);
(function(e,a){return e.appendChild(a);})(e$574,v$749);
elem$564 = e$574;
var newelem$565 = document.createElement("p");
var fix$908 = {};
fix$908.$app = function(v$567){lab$app: while (true) {if (v$567 == null) {return 0;
} else {var v$568 = v$567;
var v$569 = v$568[0];
var v$570 = v$568[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$565,v$569[0],v$569[1]);
var t$909 = v$570;
var v$567 = t$909;
continue lab$app;
};
};
};
var app$566 = fix$908.$app;
app$566(attrs$563);
(function(e,a){return e.appendChild(a);})(newelem$565,elem$564);
v$673 = newelem$565;
var e$326 = document.createDocumentFragment();
(function(e,a){return e.appendChild(a);})(e$326,v$672);
(function(e,a){return e.appendChild(a);})(e$326,v$673);
return e$326;
};
smltojs0$0SmlToJsCompApp$1$1.demoinput$76 = [0,basis$0String$1.concatWith$182("\n",["fun loop (n,acc) : IntInf.int =",["  if n = 0 then acc",["  else loop(n-1,n*acc)",["",["fun fac n =",["  print (\"fac(\" ^ IntInf.toString n ^ \") = \" ^",["         IntInf.toString (loop(n,1)) ^ \"\\n\")",["",["val () = List.app fac [10,20,30,40]",null]]]]]]]]])];
var basislibs$87 = ["Initial",["General",["Option",["List",["ListPair",["Vector",["VectorSlice",["Array",["ArraySlice",["Array2",["ByteTable",["ByteSlice",["StringCvt",["String2",["Substring",["Text",["Bool",["IntInfRep",["Word32",["Word8",["Word31",["Pack32Little",["Pack32Big",["Byte",["Int32",["Int31",["Math",["Real",["IntInf",["Time",["Random",["Path",["Date",["Timer",["TextIO",["JsCore",["Js",["Html",["Rwp",["XMLrpcClient",["dojo",["formlets",["utest",null]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
smltojs0$0SmlToJsCompApp$1$1.script_paths$88 = basis$0List$1.s$n$686(basis$0List$1.map$332(function(n$604){return ("js/basis/MLB/Js/" + n$604) + ".sml.o.eb.js";
},basislibs$87),basis$0List$1.map$332(function(n$607){return ("js/basis/MLB/Js/" + n$607) + ".js";
},["Array2-sml",["ArraySlice-sml-code1",["ArraySlice-sml-code3",["VectorSlice-sml-code1",["VectorSlice-sml-code3",["ByteTable-sml-code11",["ByteTable-sml-code14",["ByteTable-sml-code16",["ByteTable-sml-code17",["ByteTable-sml-code20",["ByteTable-sml-code22",["ByteTable-sml-code3",["ByteTable-sml-code5",["ByteTable-sml-code6",["ByteTable-sml-code9",["ByteSlice-sml-code1",["ByteSlice-sml-code10",["ByteSlice-sml-code12",["ByteSlice-sml-code3",["ByteSlice-sml-code4",["ByteSlice-sml-code6",["ByteSlice-sml-code7",["ByteSlice-sml-code9",["Bool-sml",["Char-sml",["Byte-sml",["StrBase-sml",["Math-sml",["Html-sml",["Rwp-sml",["Parsercomb-sml",["XMLrpcClient-sml-code1",["XMLrpcClient-sml-code2",["XMLrpcClient-sml-code3",["utest-sml",null]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]));
var envRef$97 = [[1]];
smltojs0$0SmlToJsCompApp$1$1.compute$102 = function(f$105,inputstring$108){basis$0General$1.print$163(("[Compiling file " + f$105) + "]\n");
var e$132;
var v$618 = envRef$97[0];
switch (v$618[0]) { case 0: {e$132 = v$618[1];
 break; }default: {throw [basis$0Initial$1.en$Fail$54,"impossible: load_env_all"];
} };
var v$148;
var rt$621 = SmlPrims.getrealtime();
v$148 = [smltojs0$0SmlToJsComp$1$9.compile$5042(e$132,inputstring$108),basis$0Timer$1.checkRealTimer$120(rt$621)];
var v$149 = v$148[0];
var v$151 = v$149[1];
var v$152 = v$148[1];
basis$0General$1.print$163(("[Compile time: " + (basis$0Time$1.toString$150(v$152[0],v$152[1]))) + "]\n");
try {basis$0General$1.print$163("[Executing]\n");
var v$142;
var rt$630 = SmlPrims.getrealtime();
v$142 = [smltojs0$0SmlToJsComp$1$9.execute$5104(v$151),basis$0Timer$1.checkRealTimer$120(rt$630)];
var v$143 = v$142[1];
basis$0General$1.print$163("\n");
return basis$0General$1.print$163(("[Execution time: " + (basis$0Time$1.toString$150(v$143[0],v$143[1]))) + "]\n");
} catch(v$910) {return (function(s$m$147){return basis$0General$1.print$163(("Uncaught exception " + s$m$147[0]) + "\n");
})(v$910);
};
};
smltojs0$0SmlToJsCompApp$1$1.computeLabel$154 = "Compile->Run";
smltojs0$0SmlToJsCompApp$1$1.onloadhook$155 = function(v$209){var fix$911 = {};
fix$911.$load_envs = function(v$183,v$186){lab$load_envs: while (true) {if (v$186 == null) {(envRef$97[0] = [0,v$183],0);
return v$209(" Done]\n");
} else {var v$204 = v$186;
var v$205 = v$204[0];
var v$206 = v$204[1];
(function(i,f){return setTimeout(f,i);})(0,(function(env$920){return function(v$202){var v$912 = env$920[0];
var v$913 = env$920[1];
var v$914 = env$920[2];
var v$915 = env$920[3];
var v$916 = env$920[4];
var v$917 = env$920[5];
var v$918 = env$920[6];
var v$919 = env$920[7];
var t$925 = v$919;
var t$922;
var v$797;
try {v$918(".");
var eb_s$655 = (new Function("",("return " + v$917) + "_sml_eb;"))();
v$797 = (v$916(v$915,eb_s$655));
} catch(v$921) {v$797 = (((function(env$924){return function(s$m$661){var v$923 = env$924[0];
v$923(("load_env problem: " + ((function(e){return e.toString()})(s$m$661))) + "\n");
throw s$m$661;
};
})([v$918]))(v$921));
};
t$922 = (v$914([v$913,v$797]));
return t$925(t$922,v$912);
};
})([v$206,v$183,smltojs0$0SmlToJsComp$1$5.plus$2541,smltojs0$0SmlToJsComp$1$5.pu$2548,pickle$0pickle$1.unpickle$2271,v$205,v$209,fix$911.$load_envs]));
return 0;
};
};
};
var load_envs$180 = fix$911.$load_envs;
v$209("[Loading Basis Library ");
return load_envs$180(smltojs0$0SmlToJsComp$1$5.initial$2540(0),basislibs$87);
};
smltojs0$0SmlToJsCompApp$1$1.dropboxKey$210 = [0,"384tq7rviyh4lrg"];
smltojs0$0SmlToJsCompApp$1$1.fileExtensions$211 = ["sml",["sig",["mlb",["txt",null]]]];
smltojs0$0SmlToJsCompApp$1$1.rightPane$212 = [0,function(v$214){var attrs$665 = [["src","js/doc/str_idx.html"],[["style","height:100%; width:100%; border:0;"],null]];
var newelem$666 = document.createElement("iframe");
var fix$926 = {};
fix$926.$app = function(v$668){lab$app: while (true) {if (v$668 == null) {return 0;
} else {var v$669 = v$668;
var v$670 = v$669[0];
var v$671 = v$669[1];
(function(e,a,b){return e.setAttribute(a,b);})(newelem$666,v$670[0],v$670[1]);
var t$927 = v$671;
var v$668 = t$927;
continue lab$app;
};
};
};
var app$667 = fix$926.$app;
app$667(attrs$665);
return newelem$666;
}];
return 0;
})();