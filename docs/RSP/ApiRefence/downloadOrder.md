---
title: Download Order
---
## Download Order
Simlessly API (v1.0.0): Download Order
## POST
<https://rsp.simlessly.com/gsma/rsp2/es2plus/downloadOrder>

## Parameters of Request

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>iccid</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>ICCID (length: 19-20)</td>
        <td>89860468152080349618</td>
    </tr>
    <tr>
        <td>eid</td>
        <td>String</td>
        <td>Optional</td>
        <td>EID</td>
        <td>null or example[89086030202200000022000014352016]</td>
    </tr>
    <tr>
        <td>configName</td>
        <td>String</td>
        <td>optional</td>
        <td>Configuration name</td>
        <td>/</td>
    </tr>
</table>

## Example of Request

```json
{
  "iccid":"8985211116317800004",
  "eid":"35203000100100000000000021371840",
  "configName":"TemplateRegular"
}
```
## Parameters of Response
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>iccid</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>ICCID (length: 19-20)</td>
        <td>89860468152080349618</td>
    </tr>
</table>


## Example of Response

```json
{

  "obj":{
    "iccid":"8985211116317800004"
  },
  "success": true,
  "msg":"",
  "code":"00000 "
}
```