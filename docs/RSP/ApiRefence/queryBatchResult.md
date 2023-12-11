---
title: Query Batch AC Generation Results
---
## Query Batch AC Generation Results
Simlessly API (v1.0.0) : List AC Batch Info
## POST
<https://rsp.simlessly.com/api/v1/batch/info>

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
        <td>batchCode</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Batch code</td>
        <td>B202303071234223</td>
    </tr>
</table>



## Example of Request

```json
{
  "batchCode": "B202303071234223"
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
        <td>batchTaskInfo</td>
        <td>BatchTaskInfo</td>
        <td>Mandatory</td>
        <td>Batch task info</td>
        <td>JSON see below BatchTaskInfo table.</td>
    </tr>
    <tr>
        <td>results</td>
        <td>List(Result)</td>
        <td>Mandatory</td>
        <td>Result</td>
        <td>JSON see below Result table.</td>
    </tr>
</table>

### BatchTaskInfo
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
        <td>Mandatory</td>
        <td>Batch code</td>
        <td>B202303071234223</td>
    </tr>
    <tr>
        <td>taskType</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Tast type</td>
        <td>GENERATE AC</td>
    </tr>
    <tr>
        <td>status</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Status</td>
        <td>COMPLETE/PROCESSING</td>
    </tr>
    <tr>
        <td>total</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Total</td>
        <td>100</td>
    </tr>
    <tr>
        <td>succeedNum</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Number of successful AC generations</td>
        <td>100</td>
    </tr>
    <tr>
        <td>failedNum</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Number of failed AC generations</td>
        <td>0</td>
    </tr>
    <tr>
        <td>createTime</td>
        <td>Date</td>
        <td>Mandatory</td>
        <td>Creation time</td>
        <td>2022/08/30 11:00:23</td>
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
        <td>success</td>
        <td>Boolean</td>
        <td>Mandatory</td>
        <td>Whether the AC generation is successful</td>
        <td>true</td>
    </tr>
    <tr>
        <td>errorReason</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Failure reason</td>
        <td>“PROFILE EXECUTION_ERROR, generateByProfileMetadata, ICCID [89860468152080348704] already existsById.”</td>
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
        <td>Mandatory</td>
        <td>EID</td>
        <td>null or example[89086030202200000022000014352016]</td>
    </tr>
    <tr>
        <td>activationCode</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>AC</td>
        <td>1$rsp-eu.simlessly.com$CE261FCF57EFCB7C492DD8ECF43C5ADD</td>
    </tr>
</table>

## Example of Response

```json
{

  "obj":{
    "batchTaskInfo": {
      "batchCode": "B20230321123213",
      "taskType": "GENERATE AC",
      "status": "COMPLETE",
      "total":10,
      "resultUrl":”https://rsp.seamlessly.com/docs/example.xlsx”,
      "succeed": 10,
      "failed": 0,
      "createTime": "2022/08/30 11:00:23",
    },
    "result":[ {
      "success": "false",
      "errorReson": "PROFILE EXECUTION_ERROR, generateByProfileMetadata, ICCID    [89860468152080348704] already existsById.",
      "iccid": "89860468152080348700",
      "eid": "89086030202200000022000014352016",
      "activationCode": "1$rsp-eu.redteamobile.com$CE261FCF57EFCB7C492DD8ECF43C5ADD"
    }],
  },
  "success": true,
  "msg": " ",
  " code": " "
}
```