
.PHONY: all
all:
	echo ' - make upgrade'

.PHONY: upgrade
upgrade:
	rm -rf smltojsonline
	cp -pa ~/gits/mlkit/js/smltojsonline smltojsonline
	mv docs docs_old
	mv smltojsonline docs
	touch docs/.nojekyll
