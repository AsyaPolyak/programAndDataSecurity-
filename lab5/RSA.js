(function (globalScope){
    /* @build-code */

    var RSA = {
        modulus: 0,
        exponent: "10001",

        seed: rng_seed_time,

        lineBreak: linebrk,
        hex2Base64: hex2b64,

        encrypt: function (str, modulus, exponent){
            var rsa = new RSAKey;
            rsa.setPublic(modulus || RSA.modulus, exponent || RSA.exponent);
            return  rsa.encrypt(str);
        },

        encrypt64: function (str, modulus, exponent){
            var res = RSA.encrypt(str, modulus, exponent);
            return  linebrk(hex2b64(res));
        }
    };

    // @export
    if( typeof module !== 'undefined' && module.exports ){
        module.exports = RSA;
    }
    else {
        globalScope.RSA = RSA;
    }
})(this);
