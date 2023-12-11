---
title: Thread and Synchronization Interfaces
---
## Thread and Synchronization Interfaces

Type: typedef viod* rt_mutex_t;
<h4 style="font-size: 18px">  rt_task_sleep</h4>
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

<h4 style="font-size: 18px">  rt_port_mutex_create</h4>
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
        <td></td>
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

<h4 style="font-size: 18px">  rt_port_mutex_lock</h4>
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

<h4 style="font-size: 18px">  rt_port_mutex_unlock</h4>
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
