function(head, req)
{
	// !json templates.bookmarksfile
	// !code lib/mustache.js

	var path = require("vendor/couchapp/lib/path").init(req);
	var dateiso = require("vendor/date/date-iso8601rfc3339");
	var datefmt = require("vendor/date/date.format");

	provides("html", function() {
		var row;

		var data = {
			title: "Scrumptious Bookmarks",
		};

		send(Mustache.to_html(templates.bookmarksfile.head, data));

		while(row = getRow()) {

			var dt = new Date();
			dt.setISO8601(row.value.date);
			var timestamp = dt.getTime() / 1000;

			send(Mustache.to_html(templates.bookmarksfile.row, {
				url: row.value.url,
				date: timestamp,
				desc: row.value.desc,
				title: row.value.title
			}));
		}
		send(Mustache.to_html(templates.bookmarksfile.tail, data));
	});
}
