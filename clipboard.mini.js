(function(){init();function init(){var elCopyBox=document.getElementsByClassName("copy-box");if(elCopyBox.length>0){for(var i=0;i<elCopyBox.length;i++){var elBox=elCopyBox[i];var elCopyContent=elBox.getElementsByClassName("copy-content")[0];var elCopyBtn=elBox.getElementsByClassName("copy-btn")[0];if(elCopyContent&&elCopyBtn&&window.clipboardData){var ie="ie";elCopyEvent(elCopyContent,elCopyBtn,ie)}else{if(elCopyContent&&elCopyBtn){elCopyEvent(elCopyContent,elCopyBtn)}}}}}function elCopyEvent(elCopyContent,elCopyBtn,ie){if(ie){ieBrowser(elCopyContent,elCopyBtn);return}if(elCopyContent.value!==undefined){elCopyBtn.onclick=function(){elCopyContent.focus();elCopyContent.select();document.execCommand("copy");copySuccess(elCopyBtn)}}else{elCopyBtn.onclick=function(){var elAssistInput=getElAssistInput();elAssistInput.style.display="block";elAssistInput.value=elCopyContent.innerText;elAssistInput.focus();elAssistInput.select();document.execCommand("copy");elAssistInput.style.display="none";copySuccess(elCopyBtn)}}}function ieBrowser(elCopyContent,elCopyBtn){if(elCopyContent.value!==undefined){elCopyBtn.onclick=function(){window.clipboardData.setData("Text",elCopyContent.value);copySuccess(elCopyBtn);return}}else{elCopyBtn.onclick=function(){window.clipboardData.setData("Text",elCopyContent.innerText);copySuccess(elCopyBtn);return}}}function getElAssistInput(){var elAssistInput=document.getElementById("assist-input");if(!elAssistInput){elAssistInput=document.createElement("input");elAssistInput.id="assist-input";elAssistInput.style.position="fixed";elAssistInput.style.width="20px";elAssistInput.style.right="-20px";elAssistInput.style.bottom="100px";elAssistInput.style.zIndex=1999999;elAssistInput.style.overflow="hidden";document.body.appendChild(elAssistInput)}return elAssistInput}function copySuccess(elCopyBtn){if(elCopyBtn.classList.contains("copy-btn-success")){var text=elCopyBtn.innerText;elCopyBtn.innerText="Copied!";setTimeout(function(){elCopyBtn.innerText=text},1000)}}})();