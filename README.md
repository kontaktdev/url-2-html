# URL2HTML Templater

The URL2HTML Templater is a lightweight JavaScript library that enables dynamic content population in HTML 
elements based on URL parameters. It facilitates the quick insertion of URL parameter values into designated 
HTML elements, aiding customization and personalization for various web applications.

## Features

- Dynamic insertion of URL parameter values into HTML elements.
- Flexible usage for customizing web pages based on URL parameters.
- Supports quick integration and ease of use.

## Usage

### Installation

To use the URL2HTML Templater in your project, clone the repository and include **url2html.min.js** file in your HTML:

```html
<script src="../src/url2html.min.js"></script>
```

### Usage

Define HTML elements with **data-url2html** attributes to specify where URL parameter values should be inserted:

```html
<h2 data-url2html="title">Default Fallback Title</h2>
<p data-url2html="some_other_var">Default Fallback Text</p>
```

Visit your web page with URL parameters, for example:

```html
https://example.com/index.html?title=Dynamic%20Title&some_other_var=Dynamic%20Text
```

### Purpose

The URL2HTML Templater can be utilized for various purposes, including:

- Customized websites: Easily pass variables from the URL to HTML elements for marketing purposes or 
  personalized content presentation.
- Dynamic landing pages: Quickly adapt content based on URL parameters to create targeted landing pages.

### Contributing
Contributions, issues, and feature requests are welcome!