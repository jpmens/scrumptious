function(doc, req)
{
	//!code vendor/date/date.js

	var path = require("vendor/couchapp/lib/path").init(req);

	log(JSON.stringify(req));


	if(doc) {
		return [null, "You can't edit this"];
	}

	var doc = {};

	var shortio = function() {
		/* Borrowed from Jason Davies */
		/* Borrowed from Jan's io.git */
		function generateSecret(length) {
			var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			var secret = '';
			for (var i=0; i<length; i++) {
				secret += tab.charAt(Math.floor(Math.random() * tab.length));
			}
			return secret;
		}
		return generateSecret(4);
	}

	var shortened = shortio();
	doc._id = shortened;
	doc.type = 'bookmark';

	doc.url = req.form.url;
	doc.description = req.form.description;
	doc.title = req.form.title;

	if (req.form.tags) {
		var s = req.form.tags.replace(/[,; ]+/g, ',');
		doc.tags = s.split(',');
	}

	doc.date = (new Date()).rfc3339();

	return [doc, "Thanks for the new <a href='" + path.show('bookmark', shortened)  + "'>bookmark</a>.\n"];

	// Unfortunately, this doesn't work: code returned is 201 with a location header
	// which means the browser doesn't redirect.

	return [doc, {
		code: 302,
		headers: { "Location" : "/" },
		body: 'Redirecting'
	 }];

}
