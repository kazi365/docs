---
title: QueryDownloadInfo
---
## QueryDownloadInfo
The customer query the download information imported on the Lookup Server in advance.

## POST 

[https://sim.express/v1/downloadInfo/get](https://sim.express/v1/downloadInfo/get)

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
        <td>deviceInfo</td>
        <td>DeviceInfo</td>
        <td>Mandatory</td>
        <td>Packet Object (Base 64)</td>
        <td>
        MYGHoAUEAwEAAKE6MTigIgQgIt<br/>
        xbHiu3bdpTHO7QLNjpX7SL38sk<br/>
        i26BS3fmq7HonG+hEgQQqu+1cd<br/>
        pcDrk+o8EaD1gQZqJCBEDOxe4W<br/>
        aNo0x3KuV8D7P5xVwcaCyWtn+S<br/>
        cElqC4u9BscZcthdWjcz+JXDGe<br/>
        ys/onOpr6MdDqP7CKnZNiEKFf9Ju</td>
    </tr>
</table>

### DeviceInfo

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>version</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Version info</td>
        <td>000000</td>
    </tr>
    <tr>
        <td>uids</td>
        <td>Uids</td>
        <td>Mandatory</td>
        <td>Unique ID of AES KEY</td>
        <td>/</td>
    </tr>
    <tr>
        <td>signature</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Package signature</td>
        <td>/</td>
    </tr>
</table>

### Uids
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>imei</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>eid</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>/</td>
    </tr>
</table>

## Example of Request
```json
    RT-AccessCode:9a27677cd8d0453cbc591dd0bab38df3
    RT-Timestamp:1636449441
    RT-RequestID:93dd0135dc34553e
    RT-Signature:4d816ced17826f69c607a5226afaeac41f7acfdbd9e19d4461eb0c72237749a5
 
    {
        "deviceInfo":"MYGHoAUEAwEAAKE6MTigIgQgItxbHiu3bdpTHO7QLNjpX7SL38ski26BS3fmq7HonG+hEgQQqu+1cdpcDrk+o8EaD1gQZqJCBEDOxe4WaNo0x3KuV8D7P5xVwca
        CyWtn+ScElqC4u9BscZcthdWjcz+JXDGeys/onOpr6MdDqP7CKnZNiEKFf9Ju"
    }
```
## Parameter of Response 
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
        <td>"0"</td>
    </tr>
    <tr>
        <td>errorMsg</td>
        <td>String</td>
        <td>optional</td>
        <td>Error description, error code is empty when there is no error.</td>
        <td>""</td>
    </tr>
    <tr>
        <td>downloadItemList</td>
        <td>List< DownloadItem ></td>
        <td>optional</td>
        <td>Encrypted downloadInfo, base64</td>
        <td>/</td>
    </tr>
</table>

### DownloadItem
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>downloadId</td>
        <td>String</td>
        <td>Mandatory</td>
        <td></td>
        <td>773125949681462</td>
    </tr>
    <tr>
        <td>rplmn</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Registered Operator</td>
        <td>46000</td>
    </tr>
    <tr>
        <td>downloadInfo</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>
        lBcmGG4Hrw6KiKDYGYhwc3mHYxWfs</br>
        CcF2b0GqfyRXPsd5h6RXVeykfH/79</br>
        rvSTRLhp13O59rT87bDnxzxGQtJM2</br>
        j+eI3sVXAhQtg+5LEwl3FI78qLvB2</br>
        OG5kT3GjpVHk
        </td>
    </tr>
    <tr>
        <td>iccid</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>iccid</td>
        <td>/</td>
    </tr>
    <tr>
        <td>apn</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>apn，apn1，apn2，apn3</td>
        <td>/</td>
    </tr>
</table>

### DownloadInfo
<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>MOC</th>
        <th style="width:200px;">Description</th>
        <th style="width:450px;">Example</th>
    </tr>
    <tr>
        <td>ac</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>iccid</td>
        <td>String</td>
        <td>optional</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <td>cc</td>
        <td>String</td>
        <td>optional</td>
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

## Example of Response
```json
{
    "code": "0",
 	"errorMsg": null,
  	"downloadItemList": [
    	{
      		"downloadId": "773125949681462",
      		"rplmn": "46000",
 		    "Iccid": "XXXXXXXXXXXXXX",
 	        "downloadInfo": "lBcmGG4Hrw6KiKDYGYhwc3mHYxWfsCcF2b0GqfyRXPsd5h6RXVeykfH/79rvSTRLhp13O59rT87bDnxzxGQtJM2j+eI3sVXAhQtg+5LEwl3FI78qLvB2OG5kT3GjpVHk"
    	}
  	]
}
```