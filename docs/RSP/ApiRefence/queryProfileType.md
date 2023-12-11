---
title: Query Profile Type 
---
## Query Profile Type
Simlessly API (v1.0.0): List Config
## POST
<https://rsp.simlessly.com/api/v1/config/list>

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
        <td>configName</td>
        <td>String</td>
        <td>optional</td>
        <td>Configuration name</td>
        <td>/</td>
    </tr>
    <tr>
        <td>pageParam</td>
        <td>PageParam</td>
        <td>mandatory</td>
        <td>Page parameters</td>
        <td>/</td>
    </tr>
</table>



## Example of Request

```json
{
  "configName":"configName",
  "pageParam": {
    "total": 0,
    "pageNum": 1,
    "pageSize": 10
  }
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
        <td>configs</td>
        <td>List< String></td>
        <td>Mandatory</td>
        <td>List of configuration names</td>
        <td>templateRegualr01, templateRegualr02</td>
    </tr>
    <tr>
        <td>pageParam</td>
        <td>PageParam</td>
        <td>Mandatory</td>
        <td>Page parameters</td>
        <td></td>
    </tr>
</table>

### PageParam
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>total</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Total number of configuration names</td>
        <td>/</td>
    </tr>
    <tr>
        <td>pageNum</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Page number, value range: 1-10000</td>
        <td>/</td>
    </tr>
    <tr>
        <td>pageSize</td>
        <td>Integer</td>
        <td>Mandatory</td>
        <td>Number of configuration names on each page, value range: 1-1000</td>
        <td>/</td>
    </tr>
</table>

## Example of Response

```json
{

  "obj":{
    "configs": [
      "templateRegualr01", "templateRegualr01"
    ],
    "pageParam":{
      "total":0,
      "pageNum":1,
      "pageSize":10
    }
  },
  "success": true,
  "msg": "",
  "code": "00000"
}
```