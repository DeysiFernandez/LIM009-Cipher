

window.cipher = {
  encode: (offset,string) => {
    /* Acá va tu código */
    let newMessage="";
    for(let i=0; i<string.length; i++){
      if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAscii=((((string[i].charCodeAt())-65)+offset)%26+65);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      } else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122){
        let numberAscii=((((string[i].charCodeAt())-97)+offset)%26+97);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }
      else{
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
        let numberAscii=((((string[i].charCodeAt())+65)-offset)%26+65);
        console.log(numberAscii);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      } else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122){
        let numberAscii=((((string[i].charCodeAt())-97)-offset)%26+97);
        let letterCipher=String.fromCharCode(numberAscii);
        newMessage=newMessage+letterCipher;

      }
      else{
        newMessage=newMessage+string[i];
      }

    }
    return newMessage;
  
  },
};
