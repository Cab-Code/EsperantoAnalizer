var textInput= document.getElementById("textInput")
var submit = document.getElementById("submit")
var originalText = ""

function XwNc(main){
    //this function counts haw many words has N characters
    var result = []
    console.log(result)
    console.log(main)
    for(text of main){
        filtredText = text.replaceAll(".", "").replaceAll(",", "").replaceAll(";", "").replaceAll(":", "")
        lW = filtredText.length //---> Longitud de la palabra
        //console.log(filtredText, lW)
        if (result[lW] == undefined){
            result[lW] = 1
        }else{
            result[lW] = result[lW] + 1
        }

    }
    return result
}

function simpleTextAnalyzer(text){
    var temp = []
    //Character filtering
    var filtredText
    filtredText = text.replaceAll(".", "").replaceAll(",", "").replaceAll(";", "").replaceAll(":", "")
    //End character filtering

    numCharacters = filtredText.trim().length

    temp = text.split(" ")
    var wordsCharacter = XwNc(temp)
    numWords = temp.length
    temp = text.split(".")
    numSentences = temp.length

    alert(`characters: ${numCharacters}\n words: ${numWords} \n Sentences: ${numSentences}`)
    console.log(wordsCharacter)

}

function tTTraditional(original){
    //Text to traditional Esperanto writing
    var traditionalText = original.replaceAll("cx", "ĉ").replaceAll("gx", "ĝ").replaceAll("hx", "ĥ")
        traditionalText = traditionalText.replaceAll("jx", "ĵ").replaceAll("sx", "ŝ").replaceAll("ux", "ŭ")
    return(traditionalText)

}

function standarText(){
    originalText.toLowerCase()
    traditional = !originalText.includes("x")
    if (traditional) {
        alert("Sistem working...")
        simpleTextAnalyzer(originalText)
    } else {
        simpleTextAnalyzer(tTTraditional(originalText))

        
    }

}

function getText(){
    originalText = textInput.value
    standarText()
}

submit.addEventListener("click", getText)

