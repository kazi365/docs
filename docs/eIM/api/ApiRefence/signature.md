---
title: Signature
---
## Key Parameters of Request Header:

<table>
    <tr>
        <th>Parameters</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>RT-AccessCode</td>
        <td>the identifier of the requester, provided by RedteaHub, is used in the request header when calling the API.</td>
    </tr>
    <tr>
        <td>RT-Timestamp</td>
        <td>the second timestamp of the current time, which is valid for 10 minutes and is used in the request header.</td>
    </tr>
    <tr>
        <td>RT-RequestID</td>
        <td>the UUID generated in each request, the same RequestID can only be used once (in the request header)</td>
    </tr>
    <tr>
        <td>RT-Signature</td>
        <td>packet signature result, which is case insensitive and used in request header</td>
    </tr>
</table>

## Signature Calculation:
### Calculation by HMACSHA256:
- signData = Timestamp + RequestID + AccessCode + RequestBody
- signature = HMACSHA256(signData, SecretCode)

```java
//Java signature algorithm implementation

public static String HMACSHA256(String data, String secretCode) throws Exception {
        Mac sha256HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secretKey = new SecretKeySpec(secretCode.getBytes("UTF-8"), "HmacSHA256");
        sha256HMAC.init(secretKey);
        byte[] array = sha256HMAC.doFinal(data.getBytes("UTF-8"));
        StringBuilder sb = new StringBuilder();
        for (byte item : array) {
            sb.append(Integer.toHexString((item & 0xFF) | 0x100).substring(1, 3));
        }
        return sb.toString().toUpperCase();
    }

```

## Field Description

|  <div style="width:290px">Field</div>   |  <div style="width:290px">Description</div> |
|  :----:  | :----:  |
| SecretCode  | Secret key allocated by Redtea Mobile, not transmitted via the Internet |
| AccessCode  | Public key allocated by Redtea Mobile, used for signature encryption |

## Signature Demo
```
Timestamp=1628670421
RequestID=4ce9d9cdac9e4e17b3a2c66c358c1ce2
AccessCode=11111
SecretCode=1111
RequestBody={"imsi":"326543826"}
signData=16286704214ce9d9cdac9e4e17b3a2c66c358c1ce211111{"imsi":"326543826"}
signature=7EB765E27DF5373DEA2DBC8C41A7D9557743E46C8054750F3D851B3FD01D0835