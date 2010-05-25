function(doc, req) {
	if(!doc) {
		return "Nothing to redirect to";
	}

	return {
		code: 302,
		headers: {"Location": doc.url},
		body: "If you don't get redirected, please go to " + doc.url + "\n"
	};
}
