import addContext from 'mochawesome/addContext.js';

function Logger(response, _this) {
        let jsonRequest = {
                Type: "Request",
                Method: response.config.method,
                Endpoint: response.config.url,
                Headers: response.config.headers,
                params: response.config.params,
                Body: JSON.stringify(response.config.data),
        }
        let jsonResponse = {
                Type: "Response",
                Path: response.request.path,
                StatusCode: response.status + " " + response.statusText,
                Headers: response.headers,
                Body: JSON.stringify(response.data),
        }
        console.log(jsonRequest);
        console.log(jsonResponse);
        addContext(_this, JSON.stringify(jsonRequest, null, 2));
        addContext(_this, JSON.stringify(jsonResponse, null, 2));
};

export{ Logger }