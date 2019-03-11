

window.cipher = {
  encode: (offset,string) => {
    /* Acá va tu código */
    let newMessage="";
    for(let i=0; i<string.length; i++){
      //cifrado para Mayúsculas
      if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAscii=((((string[i].charCodeAt())-65)+offset)%26+65);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;
      
      //cifrado para Minúsculas
      } else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122){
        let numberAscii=((((string[i].charCodeAt())-97)+offset)%26+97);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      //cifrado para números
      }else if(string[i].charCodeAt()>=48 && string[i].charCodeAt()<=57){
        let numberAscii=((((string[i].charCodeAt())-48)+offset)%10+48);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      //cifrado para hallar la Ñ Y ñ
      }else if(string[i].charCodeAt()>=209 && string[i].charCodeAt()<=255){
        let numberAscii=((((string[i].charCodeAt())-209)+offset)%47+209);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;
        
      //cifrado de espacio a parentesis
      }else if(string[i].charCodeAt()>=32 && string[i].charCodeAt()<=47){
        let numberAscii=((((string[i].charCodeAt())-32)+offset)%16+32);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }else{
        newMessage=newMessage+string[i];
      }

    }
    return newMessage;

  },
  decode: (string,offset) => {
    /* Acá va tu código */
    let newMessage="";
    for(let i=0; i<string.length; i++){
      if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAscii=((((string[i].charCodeAt())-90)-offset)%26+90);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      } else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122){
        let numberAscii=((((string[i].charCodeAt())-122)-offset)%26+122);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }else if(string[i].charCodeAt()>=48 && string[i].charCodeAt()<=57){
        let numberAscii=((((string[i].charCodeAt())-57)-offset)%10+57);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }else if(string[i].charCodeAt()>=209 && string[i].charCodeAt()<=255){
        let numberAscii=((((string[i].charCodeAt())-255)-offset)%47+255);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }else if(string[i].charCodeAt()>=32 && string[i].charCodeAt()<=47){
        let numberAscii=((((string[i].charCodeAt())-47)-offset)%16+47);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }else{
        newMessage=newMessage+string[i];
      }

    }
    return newMessage;
  
  },
};
