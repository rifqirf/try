class RC4 {
  
  constructor(key, boxLength = 256) {
    this.key = key;
    this.boxLength = boxLength;
  }

  encrypt(plain) {
    let cipher = "";
    
    return cipher;
  }

  decrypt(cipher) {
    let plain = "";

    return plain;
  }

}

/*
 * 
 * Author : Rifqi Restu Fauzi
 * 
 * Copyright (c) 2019
 * 
 * RC4 Encryption Algorithm
 * 
 * Algorithm: 
 * 1. Inisialisasi S-Box
 * 
 * 2. Inisialis K Box
 * 
 * 3. permutasi S-Box
 * 
 * 4. Pembangkitan Keystream (Yay, we Get keystream)
 * 
 * 5. XOR Keystream with key
 * 
 */

// Inisialisasi S Box
let plainText = "budiman tulus raharja";
let key = "anak rajin";
let len = 256;
let sBox = [];
for(let i = 0; i < len; i++) {
  sBox.push(i);
}
console.log(sBox);
// Inisialisasi K Box
let kBox = [];
for(let i = 0; i < len; i++) {
  kBox.push(key.replace(" ", "").charCodeAt(i));
}
console.log(kBox);
// Permutasi S Box
let rep = 0;
let j = 0, i = 0;
for(let i = 0; i < len; i++) {
  j = (j + sBox[i] + kBox[i]) % len;
  // Change sBox[i] with sBox[j]
  rep = sBox[i];
  sBox[i] = sBox[j];
  sBox[j] = rep;
}
console.log(sBox);
// Generate Keystream
i = 0, j =0;
let t = 0, k = [];
for(let l = 0; l < plainText.length; l++) {
  i = (l + 1) % len;
  j = (l + sBox[i]) % len;
  // Change sBox[i] with sBox[j]
  rep = sBox[i];
  sBox[i] = sBox[j];
  sBox[j] = rep;

  t = (sBox[i] + sBox[j]) % len;
  k.push(sBox[t]); 
}
console.log(k);
// XOR ASCII for every character in plain text with keystream
let cipher = "";

for (i = 0; i < plainText.length; i++) {
  let code = parseInt(plainText.charCodeAt(i) ^ k[i]);
  cipher += String.fromCharCode(parseInt(code));
}
console.log(cipher);