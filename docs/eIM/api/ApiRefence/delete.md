---
title: DeleteDownloadInfoResult
---
## DeleteDownloadInfoResult
The customer needs to delete the download information after successfully installing the download information, otherwise the queried download information will be returned continuously.

## POST
<https://sim.express/v1/downloadInfo/delete>

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
        <td>downloadIdList</td>
        <td>List< String></td>
        <td>Mandatory</td>
        <td>/</td>
        <td>"000000000000000", "773125985995677"</td>
    </tr>
</table>

## Example of Request
```json
    RT-AccessCode:9a27677cd8d0453cbc591dd0bab38df3
    RT-Timestamp:1636444494440
    RT-RequestID:93dd0135dc34553e
    RT-Signature:3e5cb3bb4edb2f6f1c4b99018029ee8ed099b2c5e51f5fbf070ca8aaf1061504
 
    {
        "downloadIdList":["000000000000000", "773125985995677"]
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
        <td>Mandatory</td>
        <td>Return code, 0 means succeeded.</td>
        <td>0</td>
    </tr>
    <tr>
        <td>errorMsg</td>
        <td>String</td>
        <td>optional</td>
        <td>Error description, error code is empty when there is no error.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>deleteDownloadInfoResultList</td>
        <td>DeleteDownloadInfoResult</td>
        <td>optional</td>
        <td>Deletion result</td>
        <td>/</td>
    </tr>
</table>

### DeleteDownloadInfoResult

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>code</td>
        <td>String</td>
        <td>optional</td>
        <td>Return code, 0 means succeeded.</td>
        <td>0</td>
    </tr>
    <tr>
        <td>errorMsg</td>
        <td>String</td>
        <td>optional</td>
        <td>Error description, error code is empty when there is no error.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>downloadId</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Download ID</td>
        <td>773125985995677</td>
    </tr>
</table>

## Example of Response
```json
 {
    "code": 0,
    "errorMsg": null,
    "deleteDownloadInfoResultList": [
        {
            "downloadId": "000000000000000",
            "code": "80001",
            "errorMsg": "download id not found, pls check!"
        },
        {
            "downloadId": "773125985995677",
            "code": 0,
            "errorMsg": ""
            }
    ]
}
```