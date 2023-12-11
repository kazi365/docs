---
title: Modem Interfaces
---
## Modem Interfaces
<h4 style="font-size: 18px"> rt_port_modem_get_imei</h4>
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

<h4 style="font-size: 18px"> rt_port_modem_usim_transimit_apdu</h4>
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

