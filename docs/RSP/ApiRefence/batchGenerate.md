---
title: Batch Generate AC
---
## Batch Generate AC
Simlessly API (v1.0.0): Batch Generate AC

## POST
<https://rsp.simlessly.com/api/v1/ac/generateByBatch>

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
        <td>metaDatas</td>
        <td>List(Metadata)</td>
        <td>Mandatory</td>
        <td>Batch generate metadata(size: 1-200)</td>
        <td>/</td>
    </tr>
    <tr>
        <td>configName</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Configuration name in Simlessly platform </td>
        <td>templateRegualr01</td>
    </tr>
    <tr>
        <td>encryptionMode</td>
        <td>Integer</td>
        <td>Optional</td>
        <td>Default value is 1 (plaintext) when not filed</td>
        <td>/</td>
    </tr>
</table>

#### Metadata
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
        <td>ki</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>KI (32 bits, HEX) </td>
        <td>6BE2053E8580B135CD43443380DB7111</td>
    </tr>
    <tr>
        <td>opc</td>
        <td>String</td>
        <td>Optional</td>
        <td>OPC(32 bits, HEX) </td>
        <td>eg: 85304194B0D2A2F92847F1594529F6AA, Can be null when the configuration type is Conformance Test</td>
    </tr>
    <tr>
        <td>msidn</td>
        <td>String</td>
        <td>Optional</td>
        <td>MSIDN(15HEX)</td>
        <td>8613912345678</td>
    </tr>
    <tr>
        <td>impi</td>
        <td>String</td>
        <td>Optional</td>
        <td>IMS Param</td>
        <td>260036614799000@ims.mnc006.mcc260.3gppnetwork.org</td>
    </tr>
    <tr>
        <td>impu</td>
        <td>List(String)</td>
        <td>Optional</td>
        <td>IMS Param</td>
        <td>["sip:260036614799000@ims.mnc006.mcc260.3gppnetwork.org"]</td>
    </tr>
    <tr>
        <td>c9</td>
        <td>String</td>
        <td>Optional</td>
        <td>Applet Param</td>
        <td>0C3C0302984D3E05212B9A81FC07992113329595FF0400080520</td>
    </tr>
<tr>
        <td>cc</td>
        <td>String</td>
        <td>Optional</td>
        <td>Confirm Code</td>
        <td>1234</td>
    </tr>
    <tr>
        <td>expireTime</td>
        <td>String</td>
        <td>Optional</td>
        <td>Applet Param, The format: yyyy-MM-dd HH:mm:ss</td>
        <td>2023-03-07 12:00:00</td>
    </tr>
</table>

## Example of Request

```json
{
  "configName": " templateRegualr01",
  "encryptionMode": 1,
  "metaDatas": [
    {
      "iccid": " 89860468152080349618",
      "imsi": " 460048867619618",
      "ki": " 6BE2053E8580B135CD43443380DB7111",
      "opc": " 85304194B0D2A2F92847F1594529F6AA",
      "msidn": " 8613912345678",
      "impi": " 260036614799000@ims.mnc006.mcc260.3gppnetwork.org",
      "impu": ["sip:260036614799000@ims.mnc006.mcc260.3gppnetwork.org"],
      "c9": " 0C3C0302984D3E05212B9A81FC07992113329595FF0400080520",
      "cc": " 1234",
      "expireTime": " 2023-03-07 12:00:00",
      "configName": " templateRegualr01"
    }
  ]
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
        <td>batchCode</td>
        <td>String</td>
        <td>Optional</td>
        <td>Batch code</td>
        <td>B202303071234223</td>
    </tr>
</table>

## Example of Response

```json
{
  "obj":{
    "batchCode": "B202303071234223",
  },
  "success": true,
  " msg": " ",
  " code": " "
}
```