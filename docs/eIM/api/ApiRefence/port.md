---
title: Underlayer Port API
---
## Standard C Library Interface
You can find the corresponding prototype for the above function in the standard C library, just copy the function name to the function pointer.

### rt_port_heap_malloc
 Same function as malloc.

### rt_port_heap_free
Same function as free.

### rt_port_sprintf
Same function as sprintf.

### rt_port_snprintf
Same function as snprintf.

### rt_port_sscanf
Same function as sscanf.

## Interfaces of Basic Functions 

### rt_port_log_print_array
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void rt_port_log_print_array(const char *tag, const char *array, int len)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>LOG interface, used for printing an array of length len</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>Tag: description of the tag to be printed</br>
Array: array to be printed</br>
Len: number of the items to be printed
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output
</td>
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

### rt_port_log_print
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void rt_port_log_print(char* log_level, char* file_name, int line_no, const char* msg, ...)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>LOG printing interface</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>log_level: LOG level</br>
File_name: file name</br>
Line_no: line number</br>
msg: LOG info
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output
</td>
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

## Modem Interfaces
### rt_port_modem_get_imei
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_modem_get_imei(char* imei, unsigned int* len)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get module IMEI</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>No output
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>IMEI: IMEI of the module</br>
Len: length of the returned IMEI
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>Success: RT_RES_SUCESS</br>
Failure: RT_RES_ERROR
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>Size of the IMEI buffer shall not be less than 15 bytes.</td>
    </tr>
</table>

### rt_port_modem_usim_transimit_apdu
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_modem_usim_transimit_apdu(const unsigned char* capdu, unsigned short capdu_len, unsigned char* rapdu, unsigned short* rapdu_len)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Send APDU command to the eSIM card</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>capdu: buf of the sent command</br>
capdu_len: length of the sent command</br>
Example (sending AT):</br>
capdu：0070800100     capu_len:10  </br>   
Corresponding AT+CSIM command: AT+CSIM=10,"0070800100"
</br>AT+CSIM=10,"0070800100"
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>rapdu: buf of received command
</br>
rapdu_len: length of received command
</br>
Example (sending AT):
</br>
If returned AT command is: +CSIM: 4,"9000"
</br>
rapdu: 9000     rapdu_len: 4

</td>
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


## Thread and Synchronization Interfaces

Type: typedef viod* rt_mutex_t;
### rt_task_sleep
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void rt_task_sleep(unsigned int time_sleep_ms)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Task sleep or cyclic waiting function</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>time_sleep_ms: sleep or waiting time (in ms)</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output
</td>
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

### rt_port_mutex_create
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_mutex_create(rt_mutex_t *mutex)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Create a mutex</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>/</td>
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

### rt_port_mutex_lock
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_mutex_lock(rt_mutex_t mutex)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Mutex locking</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>/</td>
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

### rt_port_mutex_unlock
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_mutex_unlock(rt_mutex_t mutex)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Mutex unlocking</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>/</td>
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

## HTTP Communication Interface

Type: typedef void* rt_http_ctx
At least tls1.2 shall be supported.
### rt_port_http_client_create
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

### rt_port_http_client_destroy
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

### rt_port_http_post
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

## Others
### rt_port_read_flash
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_port_read_flash(unsigned char* buf, unsigned int read_addr, unsigned int len)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Read FLASH data</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>buf: RAM buffer</br>
read_addr: FLASH address</br>
len: read length </br>
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>buf: data of len bytes length read</td>
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

### rt_port_watch_dog
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void rt_port_watch_dog(void)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Watchdog</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

### rt_port_reset_esim
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void rt_port_reset_esim(void)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Reset eSIM</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

### rt_port_get_buffer
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">void* rt_port_get_buffer(unsigned int *size)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get global buffer of the system </td>
    </tr>
    <tr>
        <td>Input</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>size: byte size of the buffer</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>buffer pointer</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>
