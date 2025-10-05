 const htmlCode=document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const outPut = document.getElementById("output");
function run (){
   let htmlOutput = htmlCode.value;
   let cssOutput = cssCode.value;
   let jsOutput = jsCode.value;
    outPut.contentDocument.body.innerHTML = htmlOutput +"<style>"+cssOutput+"<style>";
   outPut.contentWindow.eval(jsOutput); //“Iframe ke andar wali window me, jsOutput variable me jo JavaScript code hai, use execute karo.”
}
