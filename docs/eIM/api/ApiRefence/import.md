---
title: Batch Import
---
## Batch Import
## POST
<https://sim.express/v1/profile/importProfileList>

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
        <td>prfileItems</td>
        <td>String</td>
        <td>Mandatory(Less than 1,000 Profiles)</td>
        <td>/</td>
        <td>/</td>
    </tr>
</table>

### ImportProfileItem

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
        <td>Mandatory (19-20 digit)</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>eid</td>
        <td>String</td>
        <td>Mandatory (32-digit)</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>imei</td>
        <td>String</td>
        <td>Mandatory (15-digit)</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>ac</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>cc</td>
        <td>String</td>
        <td>Optional</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>apn</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>/</td>
    </tr>
</table>

## Example of Request

```json
    {
	    "profileItems":[
            {
                "iccid":"12345678912345678919",
                "eid":"35203000100100000000000000287435",
                "imei":"861111111111115",
                "ac":"1",
                "cc":"",
                "apn":"1"
            },
            {
                "iccid":"12345678912345678912",
                "eid":"35203000100100000000000000287435",
                "imei":"861111111111115",
                "ac":"1",
                "cc":"",
                "apn":"1"
            },
            {
                "iccid":"12345678912345678915",
                "eid":"35203000100100000000000000287435",
                "imei":"861111111111115",
                "ac":"1",
                "cc":"",
                "apn":"1"
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
        <td>code</td>
        <td>String</td>
        <td>Optional</td>
        <td>Message response </td>
        <td>"0"</td>
    </tr>
    <tr>
        <td>errorMsg</td>
        <td>String</td>
        <td>Optional</td>
        <td>Error description. The error code is empty when there is no error.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>profileItems</td>
        <td>List< ImportProfileItem></td>
        <td>Optional</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>resultItems</td>
        <td>List< Result></td>
        <td>Optional</td>
        <td>/</td>
        <td>/</td>
    </tr>
</table>

### Result
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>result</td>
        <td>String</td>
        <td>Optional</td>
        <td>SUCCEED/FAILED</td>
        <td>/</td>
    </tr>
    <tr>
        <td>reason</td>
        <td>String</td>
        <td>Optional</td>
        <td>/</td>
        <td>/</td>
    </tr>
</table>

## Example of Response

```json
{
    "errorCode":"0",
    "errorMsg":null,
    "profileItems":[
        {
            "Iccid":"12345678912345678919",
            "Eid":"35203000100100000000000000287435",
            "Imei":"861111111111115",
            "Ac":"1",
            "cc":"",
            "Apn":"1"
        },
        {
            "Iccid":"12345678912345678912",
            "Eid":"35203000100100000000000000287435",
            "Imei":"861111111111115",
            "ac":"1",
            "cc":"",
            "apn":"1"  
        },
        {
            "iccid":"12345678912345678915",
            "eid":"35203000100100000000000000287435",
            "imei":"861111111111115",
            "ac":"1",
            "cc":"",
            "apn":"1"
        }
    ],

    "resultList":[
        {"result":"FAILED","reason":"the iccid is exist in db, iccid:[12345678912345678919]"},
        {"result":"FAILED","reason":"the iccid is exist in db, iccid:[12345678912345678912]"},
        {"result":"FAILED","reason":"the iccid is exist in db, iccid:[12345678912345678915]"}
    ]
}
```