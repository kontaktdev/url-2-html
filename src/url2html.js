class Url2Html {
    constructor() {
        this.elements = document.querySelectorAll('[data-url2html]');
    }

    /**
     * Sanitize URL parameter value to prevent JavaScript injection
     *
     * @param value
     * @returns {*}
     */
    sanitizeInput(value) {
        // Regular expression to allow only alphanumeric characters, spaces, and specific characters
        // like dots, commas, etc.
        return value.replace(/[^A-Za-z0-9,. -]/g, '');
    }

    /**
     * Get parameter value from URL
     * @param name
     * @returns {*|string}
     */
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        let paramValue = results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

        // Sanitize the parameter value to prevent JavaScript injection
        paramValue = this.sanitizeInput(paramValue);

        return paramValue;
    }

    /**
     * Replace placeholders in HTML with sanitized parameter values
     */
    replacePlaceholders() {
        this.elements.forEach(element => {
            const paramName = element.getAttribute('data-url2html');
            const paramValue = this.getUrlParameter(paramName);


            // Replace content only if sanitized parameter value exists
            if (paramValue !== '') {
                element.textContent = paramValue;
            }
        });
    }

    /**
     * initialize and replace placeholders when the page loads
     */
    init() {
        this.replacePlaceholders();
    }
}

const url2html = new Url2Html();
url2html.init();
