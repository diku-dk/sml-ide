if ((typeof(tools$0Crash$1)) == "undefined") {tools$0Crash$1 = {};
};
(function(){tools$0Crash$1.en$CRASH$54 = new String("CRASH");
tools$0Crash$1.exn$CRASH$54 = [tools$0Crash$1.en$CRASH$54];
tools$0Crash$1.impossible$59 = function(msg$62){var msg$63 = "Impossible: " + msg$62;
basis$0General$1.print$163(msg$63 + "\n");
throw tools$0Crash$1.exn$CRASH$54;
};
tools$0Crash$1.assert$66 = function(v$78,v$135){if (v$135) {return 0;
} else {var msg$75 = "Assert fails: " + v$78;
basis$0General$1.print$163(msg$75 + "\n");
throw tools$0Crash$1.exn$CRASH$54;
};
};
tools$0Crash$1.unimplemented$80 = function(msg$83){var msg$84 = "Unimplemented: " + msg$83;
basis$0General$1.print$163(msg$84 + "\n");
throw tools$0Crash$1.exn$CRASH$54;
};
return 0;
})();
