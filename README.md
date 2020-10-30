# Simple URL Shortener
A challenge from freeCodeCamp.org

The challenge consists in making a Node.js API to shorten an URL received via POST.

## Usage
- Do a POST request to the endpoint `api/shorturl/new`. The POST should be in the following example format: `{url: "https://www.google.com.br"}`.
- The endpoint will return the original URL and the shortened one.
- To access the shortened URL, use the endpoint `api/shorturl/:id`.

If you pass a invalid URL, an error will be returned.
