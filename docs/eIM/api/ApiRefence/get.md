---
title: GeteSIMOSUpgradePackageURL
---
## GeteSIMOSUpgradePackageURL
The customer check the available upgrade package on the Lookup Server according to the version number.

## POST
<https://sim.express/v1/upgradePackage/get>

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
        <td>version</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Device version</td>
        <td>000000</td>
    </tr>
    <tr>
        <td>cardBatchNo</td>
        <td>String</td>
        <td>Mandatory</td>
        <td>Card batch number</td>
        <td>20211208</td>
    </tr>
</table>

## Example of Request

```json
    RT-AccessCode:9a27677cd8d0453cbc591dd0bab38df3
    RT-Timestamp:1636444494440
    RT-RequestID:93dd0135dc34553e
    RT-Signature:3e5cb3bb4edb2f6f1c4b99018029ee8ed099b2c5e51f5fbf070ca8aaf1061504
 
    {
        "version":"000000",
        "cardBatchNo":"20211208"
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
        <td>Return code, 0 means succeeded.</td>
        <td>0</td>
    </tr>
    <tr>
        <td>errorMsg</td>
        <td>String</td>
        <td>Optional</td>
        <td>Error description, error code is empty when there is no error.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>upgradeItem</td>
        <td>UpgradeItem</td>
        <td>Optional</td>
        <td>Information required for upgrade, returned if there is a new version, or it will be empty.</td>
        <td>/</td>
    </tr>
</table>

### UpgradeItem

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
        <td>Optional</td>
        <td>Version number</td>
        <td>000001</td>
    </tr>
    <tr>
        <td>upgradePackageUrl</td>
        <td>String</td>
        <td>Optional</td>
        <td>Upgrade package URL, HexString</td>
        <td>/</td>
    </tr>
</table>

## Example of Response

```json
{
  	"code": "0",
 	"errorMsg": null,
  	"upgradeItem": 
    	{
      		"version": "",
      		"upgradePackageUrl": ""
    	}
  	
}
```