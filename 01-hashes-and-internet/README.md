# Hashes and the Internet

### Define
- Server and Client Relationship
- Request & Response Lifecycle
- APIs
- HTTP Requests - specifically `GET` requests
- JSON (string formatted as a "hash")

### Prerequisites
- Installing `rest-client` gem ([Documentation](https://github.com/rest-client/rest-client))
- Installing `json` gem ([Documentation](https://github.com/flori/json))
- To install a gem `gem install <gem name>`


### Exercise
- Write an application that takes a search term from a user
- Makes a request to the GoogleBooks API and get gets back some result
  - API URL is `https://www.googleapis.com/books/v1/volumes?q={embed search term}`
- Display the 1) title, 2) author name, and description for each book

### Additional Resources
- [Why should I care about HTTP?](https://dev.to/raddevon/why-should-i-care-about-http-2em3)
- [How the Web Works (Pt. 3)](https://medium.freecodecamp.org/how-the-web-works-part-iii-http-rest-e61bc50fa0a)
- [4 Ways to Parse a JSON API](https://www.twilio.com/blog/2015/10/4-ways-to-parse-a-json-api-with-ruby.html)
