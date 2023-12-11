---
title: Terminal IPA SDK
---
## InitializeIPA
<table>
    <tr>
        <td>Prototype</td>
        <td>int rt_ipa_init(void *arg)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td style="width:650px;">IPA SDK Initialization Interface</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>arg: Initialization parameter, is Null if no special requirements.</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>
            0: Success</br>
            < 0: Failed
        </td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

## GetEID
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_get_eid(unsigned char *eid)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get EID of eSIM card</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>EID: EID buffer</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>EID:  obtained hexadecimal EID</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>EID buffer shall not be less than 33 bytes.</td>
    </tr>
</table>

## GetProfileInfo
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_get_profile_info(profile_info_t *profile_info, unsigned int *num)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get Profile info</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>profile_info: Profile buffer<br/>   num: maximum number of Profile info that can be stored in the Profile buffer
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>
       Profile_info: Obtained Profile info<br/>
        Num: number of actually obtained Profile info
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
<td>

```c
The types of profile_info_t are as follows:
    typedef PROFILE_INFO {
        char iccid[21];       /* 20-digit ICCID, padded with F */
        unsigned char profile_class;   /* 0 test, 1 provisioning, 2operational*/
        unsigned char profile_state; /* 0 disabled, 1 enabled */
    } profile_info_t;
A Profile info is about 23 bytes. If it is estimated that 10 Profile can be stored at the maximum,  
 the receiving buffer should be no less than sizeof(profile_info_t)*10 bytes.
```
 </td>
    </tr>
</table>

## EnableProfile
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_enable_profile(const char *iccid)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Enable Profile for a specified ICCID</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>ICCID: ICCID of the Profile to be enabled</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

## RequestDeviceInfo
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_request_device_info(unsigned char *info, unsigned int *info_size)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get device info</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>Info: Device info buffer<br/>
Info_size: Size of device info buffer
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>Info: Obtained device info<br/>
Info_size: Length of the obtained device info
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>Device info buffer shall be not less than 184 bytes.</td>
    </tr>
</table>

## DownloadProfile
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_download_profile(const unsigned char *info, unsigned int info_len)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Request to download Profile</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>
info: DownloadInfo<br/>
Info_len: Length of DownloadInfo<br/>
Content of downloadinfo in JSON requested by the platform API, do not include the quotation marks <br/>

```json
{
	“downloadId”:”7d35d9037f4f91a267fd9411790bbb”
 	“rplmn”:”46001”
 	“downloadInfo”:””
}
```
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>

## RequesteSIMInfo
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_request_esim_info(unsigned char *info, unsigned int *info_size)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Get eSIM info</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>info: eSIM info buffer<br/>
info_size: size of eSIM info buffer
</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>info: Obtained eSIM info<br/>
info_size: length of obtained eSIM info

</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>Device info buf shall not be less than 80 bytes.</td>
    </tr>
</table>

## eSIMOSUpgrade
<table>
    <tr>
        <td>Prototype</td>
        <td style="width:650px;">int rt_ipa_upgrade_esim_os(unsigned int addr, unsigned int length)</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Request to upgrade eSIM OS</td>
    </tr>
    <tr>
        <td>Input</td>
        <td>addr: eSIM OS upgrade package address</br>
length: size of eSIM OS upgrade package</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>No output
</td>
    </tr>
    <tr>
        <td>Response</td>
        <td>0: Success</br>
< 0: Failed
</td>
    </tr>
    <tr>
        <td>Remarks</td>
        <td>/</td>
    </tr>
</table>
