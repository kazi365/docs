---
title: Interfaces of Basic Functions 
---
## Interfaces of Basic Functions 

<h4 style="font-size: 18px">  rt_port_log_print_array</h4>
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

<h4 style="font-size: 18px">  rt_port_log_print</h4>
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
