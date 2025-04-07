function sanitzieForHtml (s: string) {
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function testFunc(s: string){
    return s;
}

export {sanitzieForHtml};
export {testFunc};
