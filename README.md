# Truly Scrumptious bookmarks in CouchDB

This CouchApp implements a del.icio.us-like bookmarking application on top of CouchDB. URLs with title, tags, and description are POSTed into a CouchDB update-handler. Read about it and view some screenshots [here](http://blog.fupps.com/2010/05/25/truly-scrumptious-bookmarks-in-couchdb/).

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

This small app uses the following modules:

* [mustache.js](http://github.com/janl/mustache.js)
* [jQuery](http://jquery.com/)
* [jQuery UI](http://jqueryui.com/)
* [jquery-in-place-editor](http://code.google.com/p/jquery-in-place-editor/) 
* [date parser](http://dansnetwork.com/2008/11/01/javascript-iso8601rfc3339-date-parser/)
* [date format](http://blog.stevenlevithan.com/archives/date-time-format)
