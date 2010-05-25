/* bmlet.js
 * CouchDB show function to produce the bookmarlet, containing
 * the full URL to this CouchDB instance.
 */
function(doc, req)
{
	var ddoc = this;
	var path = require("vendor/couchapp/lib/path").init(req);
	var mustache = require("lib/mustache-s");

	var data = {};
	data.header	= {
			title: 'Bookmarklet',
			cssdir:  path.asset('style'),
			}; // for partials
	data.footer	= {};
	data.pageTitle	= 'Bookmarklet install';
	data.url		= path.absolute('/'+req.info.db_name+'/'+ddoc._id+'/_update/post');
	data.cssdir	= path.asset('style');
	


	return mustache.to_html(ddoc.templates.bmlet, data, ddoc.templates.partials);
}
