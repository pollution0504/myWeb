export function getEmailAppPassword() {return "tonzqceqdngkeybr"}
var clicks = 0;
var OPC = 1;
var sam;
function increase(){
    clicks = clicks + OPC;
    counter.innerHTML = clicks;
}
function reset(){
    clicks = 0;
    OPC = 1;
    counter.innerHTML = clicks;
}
function multiply(sam){
    OPC+=1;
}