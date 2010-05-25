function(doc) {
	if (doc.type != 'bookmark' || !doc.url) {
		return;
	}
	emit(doc._id, {
		id: doc._id,
		url: doc.url,
		title: doc.title,
		date: doc.date,
		tags: doc.tags,
		desc: doc.description
	});
}
