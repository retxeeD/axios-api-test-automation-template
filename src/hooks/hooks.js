import addContext from 'mochawesome/addContext.js';

function Logger(response, _this) {
        let data = response.config.data;
        if (data) {
                if (data.charAt(0) == "{" && data.slice(-1) == "}")
                        data = JSON.parse(data);
        }
        let jsonRequest = {
                Type: "Request",
                Method: response.config.method,
                BaseUrl: response.config.baseURL,
                Endpoint: response.config.url,
                Headers: response.config.headers,
                params: response.config.params,
                Body: JSON.stringify(response.config.data),
        }
        let jsonResponse = {
                Type: "Response",
                StatusCode: `${response.status} ${response.statusText}`,
                Path: `${response.request.path}`,
                Headers: response.headers,
                Body: JSON.stringify(response.data),
        }
        console.log(jsonRequest);
        console.log(jsonResponse);
        addContext(_this, JSON.stringify(jsonRequest, null, 2));
        addContext(_this, JSON.stringify(jsonResponse, null, 2));
};

export{ Logger }