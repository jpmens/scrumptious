# Truly Scrumptious bookmarks in CouchDB

## Changes

	2010-05-27 Incomplete: search keywords
	2010-06-01 Support for in-place edits of Title and Description

## Installation

	git clone git@github.com:jpmens/scrumptious.git
	cd scrumptious
	couchapp push http://localhost:5984/scrumptious

	> go to the URL shown

## URLs

Start here

	http://localhost:5984/scrumptious/_design/app/index.html

List all URLS

	http://localhost:5984/scrumptious/_design/app/_list/ls/all

Grab bookmarks file

	http://localhost:5984/scrumptious/_design/app/_list/bookmarksfile/all

## Credits

* Uses [jquery-in-place-editor](http://code.google.com/p/jquery-in-place-editor/) 
