

function callNativeDevice(functionName, parameters) {
	
	//alert(functionName)
	//alert(parameters['callback'])
	
	if (typeof MTKDevicePlatform == 'undefined') {
		alert('平台參數未定義')
	} else if (MTKDevicePlatform == 'iOS') {
		
		window.webkit.messageHandlers[functionName].postMessage(parameters);
		
	} else if (MTKDevicePlatform == 'Android') {
		var jsonString = JSON.stringify(parameters)
		window.mobile[functionName](jsonString)
	} else {
		alert('平台參數為空值或不合法')
	}
}
		
