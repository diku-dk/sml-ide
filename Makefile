
.PHONY: all
all:
	@echo 'Possible targets:'
	@echo ' - make upgrade'
	@echo ' - make clean'

.PHONY: upgrade
upgrade:
	rm -rf smltojsonline
	cp -pa ~/gits/mlkit/js/smltojsonline smltojsonline
	mv docs docs_old
	mv smltojsonline docs
	touch docs/.nojekyll

.PHONY: clean
clean:
	rm -rf smltojsonline docs_old *~

JSFILES=$(shell cat docs/index.html | grep 'script type' | sed -e 's/^.*src=\"\([^"]*\)".*$$/\1/')

docs/all.js:
	(cd docs; cat $(JSFILES) > all.js)

docs/all2.js:
	(cd docs; cat index.html | grep 'script type' | sed -e 's/^.*src=\"\([^"]*\)".*$$/\1/' | xargs cat > all2.js)
