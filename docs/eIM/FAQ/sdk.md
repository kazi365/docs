<h4 style="font-size: 18px">Q: How to implement the APDU sending and receiving interface?</h4>

A: If the module supports AT+CSIM instruction, the module can be used directly. For example, APDU 007000000, the input parameter is a 5-byte array, which needs to be converted to AT+CSIM = 10, "0070000001". If the device returns +CSIM: 6,”019000”, the output parameter is the 3-byte array 019000.  

If the module does not support AT+CSIM, you need to ask the module manufacturer to provide the corresponding API or AT interface.

<h4 style="font-size: 18px">Q: The rt_ipa_get_profile_info interface reports an error: “too many profile detected XXX”</h4>

A: You need to check the number of the Profiles imported, which cannot be 0, and need to be larger than the actual number of the Profiles.

<h4 style="font-size: 18px">Q: An error occurred in rt_ipa_init creation thread lock.</h4>

A: You need to pay attention to the implementation of thread lock in rt_port.c provided by us, the code of demo may be different in different platforms, which needs to be checked.

<h4 style="font-size: 18px">Q: There is a problem after switching the Profile (application channel failed, etc.)</h4>

A: Because different modules have different compatibility with the active refresh command, various problems may occur after the refresh. We recommend you to turn off and then turn on the medule by adding AT+CFUN=0 and AT+CFUN=1 to the program after switching the Profile.

<h4 style="font-size: 18px">Q: A error is reported during the Profile download process (Invalid SM-DP+ Address)</h4>

A: Check whether the server URL in the HTTP protocol is correct.

<h4 style="font-size: 18px">Q: An error is reported after sending APDU by AT+CSIM</h4>

A: Check whether the length of the length field in the AT+CSIM command is matching with the length of the actual string, the length of the actual string converted from array to Hexstring will double, please confirm whether the buffer is sufficient.

<h4 style="font-size: 18px">Q: How to troubleshoot if the TCP network cannot be connected?</h4>

A: Test the connection object by the ping command, and check whether the server URL is correct.

<h4 style="font-size: 18px">Q: How to troubleshoot if the Bootstrap cannot connect to network?</h4>

A: Confirm whether the Bootstrap is connected to the network, and if so, check whether the APN is correctly configured and whether it successfully dialed.


