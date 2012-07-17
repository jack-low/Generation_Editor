var strScriptPath;var strCreateFile;var text;var blobBuilder;var str1;var str2;var textList;var i;var myArray;window.onload = function () {	//textリストをサーバより取得する
	var resText = getTextlist();
	
	//取得したリストを配列に格納
	textList = resText.split("\n");	}function getTextlist() {

	var resText;

	req = new XMLHttpRequest();
	req.open('GET','files/date.txt',false);
	req.send(null);
	resText = req.responseText;

	return resText;
}function selct() {
         str1 = document.INPT.inpt.value;          if(str1 != ""){      alert("compiling");            // "," で切り出しを行う
        myArray = str1.split(",");                  
            

        // 配列数分（切り出しされた文字列数分）ループして内容を表示する
        for (i=0; i<myArray.length; i++) {                   myArray[i] =  myArray[i].replace(/test/g,textList[i]);
           document.OUPT.oupt.value = document.OUPT.oupt.value+myArray[i];                            
        }       document.OUPT.oupt.value = document.OUPT.oupt.value.replace(/undefined/g, "");      strat();		          }else {      alert("入力ミス");      }
}function strat() {
		        text = document.OUPT.oupt.value;
		        var blobBuilder;
		        // ①BlobBuilderの作成
		        if ("MozBlobBuilder" in window) {
		            blobBuilder = new MozBlobBuilder();
		        } else if ("WebKitBlobBuilder" in window) {
		            blobBuilder = new WebKitBlobBuilder();
		        }
		        // ②BlobBuilderにテキストを追加する
		        blobBuilder.append(text);
		        var a = document.createElement("a");
		        var label = document.createTextNode("ダウンロード");
		        var disp = document.getElementById("disp");
		        // ③createObjectURLで②のテキストへのリンクを作成
		        if (window.URL) {
		            disp.innerHTML = '<a href="' + window.URL.createObjectURL(blobBuilder.getBlob()) + '" target="_blank">ファイルダウンロード</a>';
		        } else if (window.webkitURL) {
		            disp.innerHTML = '<a href="' + window.webkitURL.createObjectURL(blobBuilder.getBlob()) + '" target="_blank">ファイルダウンロード</a>';
		        }
		    }
//テキストボックスの文字を削除する
function CLR(){
  document.INPT.inpt.value="";  document.OUPT.oupt.value="";
}