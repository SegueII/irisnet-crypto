'use strict';

class Hex {
    static hexToBytes(hex) {
        let bytes = [];
        for (let c = 0; c < hex.length; c += 2) {
            bytes.push(parseInt(hex.substr(c, 2), 16));
        }
        return bytes;
    }

    static bytesToHex(bytes) {
        let hex = [];
        for (let i = 0; i < bytes.length; i++) {
            hex.push((bytes[i] >>> 4).toString(16));
            hex.push((bytes[i] & 0xF).toString(16));
        }
        return hex.join("");
    }

    static stringToHex(str){
        let bytes = [];
        for(var i = 0; i < str.length; i++){
            bytes.push(str.charCodeAt(i).toString(16));
        }
        return bytes.join("");
    }
}

module.exports = Hex;