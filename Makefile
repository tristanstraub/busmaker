.PHONY: boot-prod release clean

all: build

clean:
	rm -fr build

boot-prod:
	# TODO replace with production build. Externs are neededin pixi.cljs
	boot whitespace build target

target/public/index.html: boot-prod
target/public/js/app.js: boot-prod
target/public/css/garden.css: boot-prod
target/public/widgets/*.svg: boot-prod

build: target/public/index.html target/public/js/app.js target/public/css/garden.css target/public/widgets/*.svg
	mkdir -p build build/widgets build/css build/js

	cp target/public/index.html build/
	cp -R target/public/js/* build/js
	cp target/public/css/garden.css build/css
	cp target/public/widgets/*.svg build/widgets

release:
	git checkout gh-pages
	git pull
	git merge master
	$(MAKE) clean build
	git add build
	git commit -am "RELEASE"
	git push
	git checkout master
	git merge gh-pages
	git push
