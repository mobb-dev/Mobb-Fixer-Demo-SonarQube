/*
    MOBB.dev unsafe code example for DOM XSS 
*/

import {testFunc} from "./stringSanitize";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unsafe_var1 = urlParams.get('var1');
const unsafe_var2 = urlParams.get('var2');
const unsafe_div = window.document.getElementById("vulnerableDiv")!;

if (unsafe_var1){
    const unsafe_html1 = '<b>' + unsafe_var1 + '</b>';
    Here is an XSS:
    document.write(unsafe_var1)
    document.writeln('<b>' + unsafe_var1 + '</b>')
    document.write(testFunc(unsafe_html1))
    
}
if (unsafe_var2){
    if (unsafe_div){
        const unsafe_html2 = '<h1>' + unsafe_var2 + '</h1>';
        unsafe_div.innerHTML = unsafe_var2;
        unsafe_div.outerHTML = unsafe_html2;
        unsafe_div.innerHTML = '<h1>' + unsafe_var2 + '</h1>';
        unsafe_div.innerHTML = testFunc(unsafe_var2);
    }
}
