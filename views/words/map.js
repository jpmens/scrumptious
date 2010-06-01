function(doc) {
	if (doc.type == 'bookmark') {
		// emit each tag as lowercase
		if (doc.tags && doc.tags.length > 0) {
			for (var i = 0; i < doc.tags.length; i++) {
				emit(doc.tags[i].toLowerCase(), {
						url: doc.url,
						title: doc.title
					});
			}
		}

		// emit each lowercase word in title
		if (doc.title) {
			var w = doc.title.split(/\s+/);
			for (var i = 0; i < w.length; i++) {
				if (w[i].length > 3) {
					emit(w[i].toLowerCase(), {
							url: doc.url,
							title: doc.title
						});
				}
			}
		}
	}
}
