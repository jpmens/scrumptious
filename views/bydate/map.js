function(doc) {
	if (doc.type != 'bookmark' || !doc.url) {
		return;
	}
	emit(doc.date, {
		id: doc._id,
		url: doc.url,
		title: doc.title,
		date: doc.date,
		tags: doc.tags,
		desc: doc.description
	});
}
