<?php
function utf2euc($str) { return iconv("UTF-8","cp949//IGNORE", $str); }
function is_ie() {
	if(!isset($_SERVER['HTTP_USER_AGENT']))return false;
	if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false) return true; // IE8
	if(strpos($_SERVER['HTTP_USER_AGENT'], 'Windows NT 6.1') !== false) return true; // IE11
	return false;
}
switch($_GET['d']){
	case 2:
		$filename1="1810200-00_제품설명서_S-150R.hwp";
		$path="../downloads/sonar/";
		$filesize=filesize($path.$filename1);
		break;
	case 1:
		$filename1="201810100-00_규격서(수중음파탐지시스템).hwp";
		$path="../downloads/sonar/";
		$filesize=filesize($path.$filename1);
		break;
}
if( is_ie() || true ) $filename = utf2euc($filename1);
header("Pragma: public");
header("Expires: 0");
header("Content-Type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Transfer-Encoding: binary");
header("Content-Length: $filesize");

readfile($path.$filename1);
?>