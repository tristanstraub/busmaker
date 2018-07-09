all: build

build: target/public/index.html target/public/js/app.js target/public/css/garden.css
	mkdir -p build

	cp target/public/index.html build/
	cp target/public/js/app.js build/js
	cp target/public/css/garden.css build/css

target/public/index.html: boot-prod
target/public/js/app.js: boot-prod
target/public/css/garden.css: boot-prod

.PHONY: boot-prod
boot-prod:
	boot production build target

