export function isInFrame() {
  var result = false;
  try {
    if(window.self !== window.top)
      { result = true; }
     else {
        result = false;
     }
    } catch (e) {
         result = true;
    }
    return result;
}

export function isInMobile(){
  var result = false;
  try{
    result = window.navigator.userAgent.toLowerCase().includes("mobi");
  }catch{
    result = false;
  }
  return result;
}
