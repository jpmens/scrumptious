function(doc, req)
{
	var ddoc = this;
	var path = require("vendor/couchapp/lib/path").init(req);
	var mustache = require("lib/mustache-s");


	doc.header	= {		// for partials
			title: 'Scrumptious Bookmark ' + doc._id,
			cssdir:  path.asset('style'),
			libdir:  path.asset('lib'),
			}; 
	doc.footer	= {};
	//doc.listall	= path.list('ls', 'all') + '?limit=20';
	doc.listall	= path.list('ls', 'bydate', { descending:true, limit:20});
	doc.bytag	= path.list('ls', 'bytag');

	doc.dbname	= req.info.db_name;

	return mustache.to_html(ddoc.templates.bookmark, doc, ddoc.templates.partials);
}
