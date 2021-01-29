
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
	rm -rf smltojsonline
	rm -rf docs_old
