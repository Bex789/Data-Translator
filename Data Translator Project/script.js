var stuff = "stuff"
$('.inputSelect').click(function(event){   
        // Iterate each checkbox
        $(':checkbox').each(function(){
            if(this.className == 'inputSelect'){
                this.checked = false; 
            }                      
        });
    this.checked=true
})

$('#outAll').click(function(event){   
    if(this.checked){
        // Iterate each checkbox
        $(':checkbox').each(function(){
            if(this.className == 'outputSelect'){
                this.checked = true; 
            }                      
        });
    }else{
        $(':checkbox').each(function(){
            if(this.className == 'outputSelect'){
                this.checked = false; 
            }                     
        });
    }
}); 

// Translates the selected input into the selected output
function TextToBinary(input,out){
    out += "Binary\r\n"
    for (var i = 0; i < input.length; i++) {
        var value = input[i].charCodeAt(0).toString(2).padStart(8, '0');
        out += value + " ";
    }
    return out
}    
function TextToHex(input,out){
    out += "Hex\r\n"
    for (var i = 0; i < input.length; i++) {
        var value = input[i].charCodeAt(0).toString(16);
        out += value + " ";
    }
    return out
}
function TextToAscii(input,out){
    out += "Ascii\r\n"
    for (var i = 0; i < input.length; i++) {
        var value = input[i].charCodeAt(0);
        out += value + " ";
    }
    return out
}
function BinaryToText(input,out){
    out += "Text\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = String.fromCharCode(parseInt(input[i],2));
        out += value;
    }
    return out
}
function BinaryToHex(input,out){
    out += "Hex\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],2).toString(16);
        out += value + " ";
    }
    return out
}
function BinaryToAscii(input,out){
    out += "Ascii\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],2);
        out += value + " ";
    }
    return out
}
function HexToText(input,out){
    out += "Text\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = String.fromCharCode(parseInt(input[i],16));
        out += value;
    }
    return out
}
function HexToBinary(input,out){
    out += "Binary\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],16).toString(2).padStart(8, '0');
        out += value + " ";
    }
    return out
}
function HexToAscii(input,out){
    out += "Ascii\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],16);
        out += value + " ";
    }
    return out
}
function AsciiToText(input,out){
    out += "Text\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = String.fromCharCode(input[i]);
        out += value;
    }
    return out
}
function AsciiToBinary(input,out){
    out += "Binary\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],0).toString(2).padStart(8, '0');
        out += value + " ";
    }
    return out
}
function AsciiToHex(input,out){
    out += "Hex\r\n"
    input = input.split(' ')
    for (var i = 0; i < input.length; i++) {
        var value = parseInt(input[i],0).toString(16);
        out += value + " ";
    }
    return out
}







function submitted(){
    // Takes the value from the IDs of the HTML elements and assigns a variable to it.
    // Input Checkboxes
    userInput = $("#inputArea").val();
    inText = document.getElementById('inText')
    inBinary = document.getElementById('inBinary')
    inHex = document.getElementById('inHex')
    inAscii = document.getElementById('inAscii')
    // Output Checkboxes
    outText = document.getElementById('outText')
    outBinary = document.getElementById('outBinary')
    outHex = document.getElementById('outHex')
    outAscii = document.getElementById('outAscii')
    outAll = document.getElementById('outAll')
    console.log(outAscii.checked)
    var result = ""
    
     // Sorts out the checkboxes so the right functions are called to translate the input correctly
    if(inText.checked){
        if(outBinary.checked){
            result = TextToBinary(userInput,result) + '\r\n' + '\r\n' 
        }
        if(outHex.checked){
            result = TextToHex(userInput,result) + '\r\n' + '\r\n'
        }
        if(outAscii.checked){
            result = TextToAscii(userInput,result) + '\r\n' + '\r\n'
        }
    }else if(inBinary.checked){
        if(outText.checked){
            result = BinaryToText(userInput,result) + '\r\n' + '\r\n'
        }
        if(outHex.checked){
            result = BinaryToHex(userInput,result) + '\r\n' + '\r\n'
        }
        if(outAscii.checked){
            result = BinaryToAscii(userInput,result) + '\r\n' + '\r\n'
        }
    }else if(inHex.checked){
        if(outText.checked){
            result = HexToText(userInput,result) + '\r\n' + '\r\n'
        }
        if(outBinary.checked){
            result = HexToBinary(userInput,result) + '\r\n' + '\r\n'
        }
        if(outAscii.checked){
            result = HexToAscii(userInput,result) + '\r\n' + '\r\n'
        }
    }else if(inAscii.checked){
        if(outText.checked){
            result = AsciiToText(userInput,result) + '\r\n' + '\r\n'
        }
        if(outBinary.checked){
            result = AsciiToBinary(userInput,result) + '\r\n' + '\r\n'
        }
        if(outHex.checked){
            result = AsciiToHex(userInput,result) + '\r\n' + '\r\n'
        }
    // If the same output option is selected as the input then output the input text
    }else{
        result = userInput
    }
    // Outputs the translated input
    document.getElementById('outputArea').value = result;





















    //document.getElementById('outputArea').innerHTML = stuff + '\r\n' + result;
    

/*if(outText.checked){
    document.getElementById('outputArea').innerHTML = "Text" + '\r\n' + result;
}else if(outBinary.checked){
    document.getElementById('outputArea').innerHTML = "Binary" + '\r\n' + result;
}else if(outHex.checked){
    document.getElementById('outputArea').innerHTML = "Hex" + '\r\n' + result;
}else if(outAscii.checked){
    document.getElementById('outputArea').innerHTML = "Ascii" + '\r\n' + result;
}*/

// stuff === varible that will have value of checked put in for header for output

// while loop maybe
// maybe put in if statements above


// https://stackoverflow.com/questions/22374920/underline-a-part-of-text-in-textarea


/*for (let i = 0; i == headings.length; i++) {
    text += "The number is " + i + "<br>";
}*/







    



    /*if(binary == True){
        amount++
    }
    if(hex == True){
        amount++
    }
    if(ascii == True){
        amount++
    }
    if(text == True){
        amount++
    }
    if(all == True){
        amount++
    }
    
    if(amount == 1){
        //no br
    }else(amount == 2){
        //1 br on top of second
    }*/

    /*if(){

    }*/

}






function clearBtn(){
    console.log(stuff)
    document.getElementById('outputArea').value = "";
    document.getElementById('inputArea').value = "";

    $(':checkbox').each(function(){
        if(this.id == 'inText'){
            this.checked = true; 
        }else {
            this.checked = false
        }                      
    });
}
