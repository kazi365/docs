---
title: Release Order
---
## Release Order
Simlessly API (v1.0.0): Release Order
## POST
<https://rsp.simlessly.com/gsma/rsp2/es2plus/releaseProfile>

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
</table>



## Example of Request

```json
{
  "iccid":"8985211116317800004"
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