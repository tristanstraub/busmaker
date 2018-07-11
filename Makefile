all: build

clean:
	rm -fr build

build: target/public/index.html target/public/js/app.js target/public/css/garden.css target/public/widgets/*.svg
	mkdir -p build build/widgets build/css build/js

	cp target/public/index.html build/
	cp -R target/public/js/* build/js
	cp target/public/css/garden.css build/css
	cp target/public/widgets/*.svg build/widgets

target/public/index.html: boot-prod
target/public/js/app.js: boot-prod
target/public/css/garden.css: boot-prod

.PHONY: boot-prod
boot-prod:
	# TODO replace with production build. Externs are neededin pixi.cljs
	boot development build target

