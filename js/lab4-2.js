function applyscripture(){
 	// INPUT
    let name = document.getElementById('nameInputBox').value;
    //PROCESSING
    let scripture = "I, " + name + ", having been born of goodly parents," +
        " therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless," +
        " having been highly favored of the Lord in all my days;" + "yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days. "
    // OUTPUT
    document.getElementById("output").innerHTML = scripture;
}


