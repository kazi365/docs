---
title: HTTP Communication Interface
---
## HTTP Communication Interface

Type: typedef void* rt_http_ctx
At least tls1.2 shall be supported.
<h4 style="font-size: 18px"> rt_port_http_client_create</h4>
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_http_client_create(rt_http_ctx* http_client)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Create and initialize HTTP client</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>rt_http_ctx* http_client: the pointer to the HTTP client to be created</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>Success: RT_RES_SUCESS</br>
Failure: RT_RES_ERROR
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

<h4 style="font-size: 18px"> rt_port_http_client_destroy</h4>
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_http_client_destroy(rt_http_ctx http_client)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Destroy a specified HTTP client</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>http_client: HTTP client to be destroyed</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>Success: RT_RES_SUCESS</br>
Failure: RT_RES_ERROR
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

<h4 style="font-size: 18px"> rt_port_http_post</h4>
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">
        int rt_port_http_post(rt_http_ctx http_client, const char* http_host, unsigned int port, const char* http_api, const char* private_headers[], unsigned int private_header_cnt, const unsigned char* post_content, unsigned int post_len, unsigned int* http_rsp_addr, unsigned int* rsp_len, int* res_code, char* is_store_flash,char is_tls)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>HTTP client post request</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>
<pre><code>http_client: HTTP client that initiated the request
http_host: requested address
port: requested port number
http_api: api address
private_headers: login access info (pointer array)
private_header_cnt: number of login access info
post_content: requested content (in JSON string)
post_len: byte length of the requested content
is_tls: Is it encrypted by TLS?
Example:
http_host: quark-staging.redtea.io
port: 443
http_api: /gsma/rsp2/es9plus/initiateAuthentication
private_header: NULL
is_tls：1
URL of HTTPS address of the request: 
<a herf="https://quark-staging.redtea.io:443/gsma/rsp2/es9plus/initiateAuthentication">https://quark-staging.redtea.io:443/gsma/rsp2/es9plus/initiateAuthentication</a>
443 is the default HTTPS port.</code></pre>
        </td>
    </tr>
    <tr>
        <td>Output</td>
        <td>
        <pre>
<code>http_rsp_addr: flash address of the info responded by the</br> server (if is_store_flash != 0)
rsp_len: byte length of the info responded
res_code: code responded
is_store_flash: 0, which means that the response is stored in RAM,</br> the RAM address is obtained through 6.4 rt_port_get_buffer; !=0,</br> means the response is stored in flash.
Example of response:
Generally, the response is a JSON string, such as:
{
    "header":
    {
        "functionExecutionStatus":
            {
                "status":"Failed","statusCodeData":     
                {
                    "subjectCode":"0.0.0",
                    "reasonCode":"0.0",
                    "message":"Unknown error"
                }
            }
        }
    }
res_code: HTTP status code responded, if the request succeeded, res_code=200
</code></pre>
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>Success: RT_RES_SUCESS</br>
Failure: RT_RES_ERROR</br>
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>
