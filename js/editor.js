var strScriptPath;var strCreateFile;var text;var blobBuilder;function selct() {
    document.OUTP.outp.value = document.INPT.inpt.value;    text = document.INPT.inpt.value;    if(document.OUTP.outp.value != ""){      var str1=document.OUTP.outp.value;      alert("compiling");            strat();		          }else {      alert("入力ミス");      }
}function strat() {
		        var text = document.INPT.inpt.value;
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
  document.INPT.inpt.value="";  document.OUTP.outp.value="";
}