function applyscripture(){
 	// INPUT
    let name = document.getElementById('nameInputBox').value;
    //PROCESSING
    let scripture = "And again I, " + name + ", would exhort you that ye would come unto Christ," +
        " and lay hold upon every good gift, and touch not evil gift," +
        " nor the unclean thing."
    // OUTPUT
    document.getElementById("output").innerHTML = scripture;
}