function isIsogram(str) {
    let lowerStr = str.toLowerCase();
    for(let i = 0; i < lowerStr.length; i++) {
        for(let j = i+1; j < lowerStr.length; j++) {
        if(lowerStr[i] === lowerStr[j]) return false
        }
    }
    return true;
}
