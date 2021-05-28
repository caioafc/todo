(function () {
	"use strict";
	function init(resolve, reject, rawResponse) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200 || xhttp.status === 201 ||xhttp.status === 204  || xhttp.status === 504 )   {
					if	( +xhttp.status === 204 || +xhttp.status === 504 ) {
						resolve(+xhttp.status)
					}
					if (xhttp.responseText || xhttp.response === "") {
						try {
							resolve(JSON.parse(xhttp.responseText));
						} catch (e) {
							resolve(xhttp.responseText);
						}
					} else {
						reject("Empty response");
					}

				} else {
					reject(rawResponse ? xhttp : xhttp.responseText);
				}
			}
		};

		xhttp.onerror = function (e) {
			reject("There was a network error.".concat(e));
		};

		return xhttp;
	}

	module.exports = {
		"get": function (url, opts) {
			return new Promise(function (resolve, reject) {
				if (window.XMLHttpRequest) {
					let xhttp = init(resolve, reject);
					xhttp.open("GET", url);
					if (opts && opts.contentType) {
						xhttp.setRequestHeader("content-type", opts.contentType);
					} else {
						xhttp.setRequestHeader("accept", "application/json;charset=UTF-8");
						xhttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
					}
					xhttp.send();
				} else {
					reject("AJAX Calls not supported on this browser");
				}
			});
		},
		"post": function (url, requestParams = {}, opts = {}) {
			return new Promise(function (resolve, reject) {
				if (window.XMLHttpRequest) {
					let xhttp = init(resolve, reject);
					xhttp.open("POST", url);
					if (opts && opts.contentType ){
						if (opts.contentType !== "multipart/form-data") {
							xhttp.setRequestHeader("content-type", opts.contentType);
						}
						xhttp.send(requestParams);
					} else {
						xhttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
						xhttp.send(JSON.stringify(requestParams));
					}

				} else {
					reject("AJAX Calls not supported on this browser");
				}
			});
		},
		"put": function (url, requestParams) {
			return new Promise(function (resolve, reject) {
				if (!requestParams)
					requestParams = {};

				if (window.XMLHttpRequest) {
					let xhttp = init(resolve, reject);

					xhttp.open("PUT", url);
					xhttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
					xhttp.send(JSON.stringify(requestParams));
				} else {
					reject("AJAX Calls not supported on this browser");
				}
			});
		},
		"delete": function (url) {
			return new Promise(function (resolve, reject) {
				if (window.XMLHttpRequest) {
					let xhttp = init(resolve, reject);

					xhttp.open("DELETE", url);
					xhttp.setRequestHeader("content-type", "application/json;charset=UTF-8");
					xhttp.send();
				} else {
					reject("AJAX Calls not supported on this browser");
				}
			});
		}
	};
}());