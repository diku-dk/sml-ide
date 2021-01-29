# sml-ide
SMLtoJs Online IDE

## Deploying a new version of the IDE

First checkout the MLKit sources from github.com/melsman/mlkit:

```
$ git clone https://github.com/melsman/mlkit
$ cd mlkit
$ ./autobuild
$ ./configure
$ make smltojs smltojs_basislibs
$ cd js
$ make smltojsonline

$ cp -pa smltojsonline ~/gits/sml-ide/smltojsonline
$ cd ~/gits/sml-ide/
$ rm -rf docs
$ mv smltojsonline docs
$ touch docs/.nojekyll

$ git status
... maybe git add new files...

$ git commit -am "new version"
$ git push
$ git tag v...
$ git push --tags
```
