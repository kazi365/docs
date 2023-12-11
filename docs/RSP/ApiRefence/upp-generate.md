---
title: Generate AC By UPP
---
## Generate AC By UPP
Simlessly API (v1.0.0): Generate AC By UPP

## POST
<https://rsp.simlessly.com/api/v1/profile/addByUpp>

## Parameters of Request   

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>iccid</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>ICCID (length: 19-20)</td>
        <td>89860468152080349618</td>
    </tr>
    <tr>
        <td>imsi</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>IMSI (length: 15) </td>
        <td>460048867619618</td>
    </tr>
    <tr>
        <td>upp</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>KI (32 bits, HEX) </td>
        <td>6BE2053E8580B135CD43443380DB7111</td>
    </tr>
    <tr>
        <td>configName</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Please select the configuration type as 'UPP' for optimization.</td>
        <td>UPP001</td>
    </tr>
</table>

## Example of Request
```json
{
  "iccid": " 89860468152080349618",
  "imsi": " 460048867619618",
  "upp": " 6BE2053E8580B135CD43443380DB7111",
  "configName": " UPP001"
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
    <tr>
        <td>activationCode</td>
        <td>String</td>
        <td>Optional</td>
        <td>AC</td>
        <td>1$rsp-eu.redteamobile.com$CE261FCF57EFCB7C492DD8ECF43C5ADD</td>
    </tr>
</table>


## Example of Response
```json
 {
  "obj":{
    "iccid": "89860468152080348700",
    "activationCode": "1$rsp-eu.redteamobile.com$CE261FCF57EFCB7C492DD8ECF43C5ADD"
  },
  "success": true,
  "msg": "",
  "code": "00000"
}
```