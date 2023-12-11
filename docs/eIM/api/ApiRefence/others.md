---
title: Others
---
## Others
<h4 style="font-size: 18px"> rt_port_read_flash</h4>
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

<h4 style="font-size: 18px"> rt_port_watch_dog</h4>
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

<h4 style="font-size: 18px"> rt_port_reset_esim</h4>
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
        <td></td>
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

<h4 style="font-size: 18px"> rt_port_get_buffer</h4>
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
