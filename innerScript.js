'use strict'
function getLocaclStorageInfo()
{
	document.querySelector('._info').innerText = localStorage.getItem('test');
}
getLocaclStorageInfo()