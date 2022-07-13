var vizhener = {
    ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
    en : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    square : [],
    genSqViz : function (lang) {
        var l = this[lang], square = [];
        for (var i = 0; i < l.length; i++) {
            this.square[i] = l.slice(i).concat(l.slice(0, i));
        }
    },
    encryption : function (lang, text, key) {
        if (lang !== "ru" && lang !== "en" || text.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < text.length; i++) {
            s += this.square[this[lang].indexOf(text[i])]
            [this[lang].indexOf(key[i])];//ТУТ ДОРОБИТЬ
        }
        return s;
    },
    decryption : function (lang, key, cipher) {
        if (lang !== "ru" && lang !== "en" || cipher.length !== key.length) return false;
        this.genSqViz(lang);
        var s = "";
        for (var i = 0; i < cipher.length; i++) {
            var row = this[lang].indexOf(key[i]);
                coll = this.square[row].indexOf(cipher[i]);
            s += this[lang][coll];
        }
        return s;
    }
    //console.log(s);
};
console.log("Ключ-шифрування: ", (vizhener.encryption("ru", "ПОЛЯКАНАСТАСИЯ", "АМИНЬАМИНЬАМИН")));
console.log("Текст-шифру: ", vizhener.decryption("ru", "АМИНЬАМИНЬАМИН", "ВАРВАРВАРВАРВА"));

