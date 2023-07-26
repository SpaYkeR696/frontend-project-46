install:
	npm install

build:
	rm -rf dist
	npm run build

gendiff:
	node ./bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test