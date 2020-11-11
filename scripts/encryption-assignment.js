
    
    //ENCRYPTION HERE
    function encrypt(){

        let plaintext = prompt("Enter your plaintext message here :)");
        let ciphertext = "";
        let firstletter = "";
        plaintext = plaintext.split(" "); // String is slplit around spaces to create a list of words

        for( let i = 0 ; i < plaintext.length ; i = i + 1 ){ // for each word in the plaintext, do the following
          if (plaintext[i].length > 2) { // If the current word is 2 or more letters, do the following:

            ciphertext += (plaintext[i]).replace(/a/g, "1").replace(/e/g, "5").replace(/i/g, "9").replace(/o/g, "15").replace(/u/g, "21"); // replace each vowel with the number placement in the alphabet eg.  e is the fifth letter of the alphabet
          
            ciphertext += firstletter + "bi "; // Add the first letter and "bi" to the end of the current word 
          } else {
            ciphertext += (plaintext[i] + "bi ")  // Words of length 2 or less are added to the message, unaltered
          }
        }
        document.getElementById("encrypted").innerHTML = ciphertext;
      }
    
      //DECRYPTION HERE 

      function decrypt(){
       
        let ciphertext = prompt("Enter your encrypted message here :)");
        let plaintext = "";
        let cipherList = ciphertext.split(" ");
        for( let i = 0 ; i < cipherList.length ; i = i + 1 ){ // for each word in the ciphertext, do the following
            if (cipherList[i].length > 2) { // If the current word is 2  or more letters, do the following:
                plaintext += (cipherList[i]).replace(/1/g, "a").replace(/5/g, "e").replace(/9/g, "i").replace(/"15"/g, "o").replace(/u/g, "21").replace(/bi/g, " "); // replace these numbers with the the special value 
              console.log ("testing if statement")
               // plaintext += firstletter; // Add the first letter and "bi" to the end of the current word 
              } else {
                plaintext += (cipherList[i])  // Words of length 2 or less are added to the message, unaltered
              }
            }
            document.getElementById("decrypted").innerHTML = plaintext;
          }
            





        
      