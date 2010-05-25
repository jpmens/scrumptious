function(doc) {
	if (doc.type == 'bookmark' && doc.tags && doc.tags.length > 0) {
		for (var i = 0; i < doc.tags.length; i++) {
			emit(doc.tags[i], {
				id: doc._id,
				url: doc.url,
				title: doc.title,
				date: doc.date,
				tags: doc.tags,
				desc: doc.description
			});
		}
	}
}
