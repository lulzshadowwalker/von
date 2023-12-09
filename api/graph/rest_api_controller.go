package graph

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
)

type RestApiController struct {
	Baseurl string
}

func NewRestApiController(baseurl string) RestApiController {
	return RestApiController{
		Baseurl: baseurl,
	}
}

func get[T any](c RestApiController, endpoint string) (t T, err error) {
	path, err := url.JoinPath(c.Baseurl, endpoint)
	if err != nil {
		return t, fmt.Errorf("invalid endpoint/url %q", err)
	}

	res, err := http.Get(path)
	if err != nil {
		return t, fmt.Errorf("http request failed %q", err)
	}

	data, err := io.ReadAll(res.Body)
	if err != nil {
		return t, fmt.Errorf("cannot read response body into buffer %q", err)
	}
	res.Body.Close()

	err = json.Unmarshal(data, &t)
	if err != nil {
		return t, fmt.Errorf("cannot decode json into struct %q", err)
	}

	return t, nil
}

func post[T any](c RestApiController, endpoint string, payload any, successStatusCodes ...int) (t T, err error) {
	data, err := json.Marshal(payload)
	if err != nil {
		return t, fmt.Errorf("cannot encode input as json %q", err)
	}

	path, err := url.JoinPath(c.Baseurl, endpoint)
	if err != nil {
		return t, fmt.Errorf("invalid endpoint/url %q", err)
	}

	res, err := http.Post(path, "application/json", bytes.NewBuffer(data))
	if err != nil {
		return t, fmt.Errorf("cannot make http request %q", err)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return t, fmt.Errorf("cannot read response body into buffer %q", err)
	}

	if res.StatusCode != http.StatusOK {
		isStatusCodeAllowed := func() bool {
			for _, s := range successStatusCodes {
				if s == res.StatusCode {
					return true
				}
			}

			return false
		}()

		if !isStatusCodeAllowed {
			response := make(map[string]any)
			err := json.Unmarshal(body, &response)
			if err != nil {
				return t, fmt.Errorf("cannot deocde response body (status: %s) %q", res.Status, err)
			}

			return t, fmt.Errorf("(%s) %s %v", res.Status, response["message"], response["data"])
		}
	}

	err = json.Unmarshal(body, &t)
	if err != nil {
		return t, fmt.Errorf("cannot decode response into struct %q", err)
	}

	return t, nil
}
