---
title: Cancel Order
---
## Cancel Order
Simlessly API (v1.0.0): Cancel Order
## POST
<https://rsp.simlessly.com/gsma/rsp2/es2plus/cancelOrder>

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
        <td>ac</td>
        <td>String</td>
        <td>Optional</td>
        <td>Activitied Code</td>
        <td>1$rsp-xian.redteaready.cn$2C056EC0786EE4A4F0B6EE4F4A5D7136</td>
    </tr>
</table>

## Example of Request

```json
{
  "iccid":"8985211116317800004",
  "eid":"35203000100100000000000021371840",
  "ac":"1$rsp-xian.redteaready.cn$2C056EC0786EE4A4F0B6EE4F4A5D7136"
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

</table>

## Example of Response

```json
{
  "obj":null,
  "success": true,
  "msg":"",
  "code":"00000 "
}
```