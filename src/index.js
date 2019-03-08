/* Acá va tu código */
const message=document.getElementById("message");
const number=document.getElementById("displace");
const buttonCipher=document.getElementById("button");
const result=document.getElementById("result");
const buttonDecipher=document.getElementById("button2");
const resultDecipher=document.getElementById("resultDecipher");

const clickCipher=()=>{
    let writtenMessage=message.value;
    let position=parseInt(number.value);
    let newMessage=cipher.encode(position,writtenMessage);
    return result.value=newMessage;
}
buttonCipher.addEventListener("click",clickCipher);

const clickDecipher=()=>{
      let writtenMessage= result.value;
      let position=parseInt(number.value);
      let renewMessage = cipher.decode(writtenMessage,position);
      console.log(renewMessage)
      resultDecipher.innerHTML=renewMessage;
}
buttonDecipher.addEventListener("click",clickDecipher);