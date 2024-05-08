
var count = 0
var background = document.getElementById("backgroundText")
function addText(countPass){
    if(count < 10000){
    var text = ""
    var tempCount = 0
    while(tempCount < countPass){
        tempCount++
        var random = Math.round(Math.random())
        if(random == 1){
            text += "1"
        }
        else{
            text+="0"
        }
    }
    count += 1
    background.textContent+=text
    setTimeout(addText, .1, 6)
    }

        
        
    
}


var sampleLorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor varius diam, in consequat augue egestas aliquet. Vivamus at ornare dui. Nulla aliquam gravida dignissim. Nulla facilisi. Etiam ornare tellus sit amet gravida pretium. Aenean id faucibus felis. Quisque accumsan ligula in libero finibus, vitae bibendum augue pulvinar. Nullam ultrices tincidunt ligula, sit amet elementum tortor euismod eu. Suspendisse potenti. Aliquam ut sapien sit amet urna vehicula laoreet non in mi. Praesent sit amet eros vulputate, lacinia mi at, gravida ex. Aenean at malesuada velit. Suspendisse sit amet enim vitae elit convallis fringilla vitae at justo. Nullam molestie sodales libero, nec porttitor nunc aliquet ac. Maecenas ac fringilla est, sit amet eleifend est."
var sampleLorem2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"



function scrambleText(){
    newText = ""
    for(i=0; i<background.textContent.length; i++){
        var random = Math.round(Math.random())
        if(random == 1){
            newText += "1"
        }
        else{
            newText+="0"
        }
    }
    background.textContent=newText
    setTimeout(scrambleText, 50)
}

function scrambleTextArray(indexArray, textElement, wantedText){
    let difference = wantedText.length - textElement.textContent.length
    let edited = false

    for(j = 0; j<11; j++){
        if(difference>0){
            let randomChar = charList[Math.floor(Math.random() * charList.length)]
            textElement.textContent += randomChar
            difference--
            edited = true
        }
        if(difference<0){
            difference++
            textElement.textContent = textElement.textContent.substring(0, textElement.textContent.length-1)
            edited = true
        }
    }

    let newText = ""
    for(i=0; i<textElement.textContent.length; i++){
        if(indexArray.includes(i) || i>=wantedText.length){
            let random = Math.floor(Math.random() * charList.length)
            newText+=charList[random]
        }
        else{
            newText+=textElement.textContent.charAt(i)
        }

    }
    textElement.textContent=newText
    if(!edited){
        for(i=0; i<12; i++){
            if(indexArray.length > 0){
                let index = indexArray.pop()
                let oldText = textElement.textContent
                let replaceText = ""
                let newCharacter = ""
                if(index < wantedText.length){
                    newCharacter = wantedText.charAt(index)
                }
                
                replaceText = oldText.substring(0, index) + newCharacter + oldText.substring(index+1)
                textElement.textContent = replaceText
                
            }
        }
    }
    

    if(indexArray.length>0){
        setTimeout(scrambleTextArray, 50, indexArray, textElement, wantedText)
    }
}

function scrambleInImproved(targetElement, wantedText){
    let needed = wantedText.length
    let have = targetElement.textContent.length
    let difference = needed-have
    var editIndexes = []
    for(i = 0; i<needed; i++){
        editIndexes.push(i)
    }
    editIndexes = shuffle(editIndexes)

    scrambleTextArray(editIndexes, targetElement, wantedText)

    

}


function shuffle(arr){
    let index = arr.length-1
    while(index != 0){
        let random = Math.floor(Math.random() * index)
        let saver = arr[index]
        arr[index] = arr[random]
        arr[random] = saver
        index--
    }
    return arr
}



var charList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' ', ' ', ' ']


function readyFunc1(){
    ready1 = true
}

function readyFunc2(){
    ready2 = true
}

function readyFunc3(){
    ready3 = true
}


var mode1 = 1
var ready1 = true
var default1 = "If you’ve spoken to people in artistic communities, read the news, or just generally follow popular conversations, you have probably heard that AI functions by “stealing” from real artists. This comes from the way that modern generative AI’s are created. As finding a “formula” for art manually is likely an impossible task, modern generative AI’s employ a technique called “machine learning”, where they are given a large amount of input and output data, and automatically derive a function that maps between them. This, of course, requires massive quantities of data to work effectively, especially for complicated bots, that say, want to mimic human speech or art. This often necessitates using media scraped from the internet, taken without the consent of the original creators."
var altText1 = "While there are counter arguments to the idea that using people's work without permission to train AI is amoral or wrong, they often fall short in practice. Supporters will argue that what AI does can't be called theft, as it simply uses the material it's given to “learn”, as a human studying art or writing would. This claim has some truth to it. “Neural Networks”, the basis behind the architecture of modern machine learning models, were designed to mimic a way we believed human thought worked, a creation inspired by the natural world. But at the end of the day, we do not fully understand how the brain works, and we do know what neural networks do. To say a piece of math is a good analogy for human thinking is a gross oversimplification. On top of that, AI’s have been known to use direct quotes or passages from other people's writing, pushing back on the common claims that everything they produce is an original work taken from their “learning”"
document.getElementById("B1").onclick = function(){
    if(mode1 == 1 && ready1){
        ready1 = false
        setTimeout(readyFunc1, 6000)
        scrambleInImproved(document.getElementById("TEXT2"), altText1)
        mode1 = 2
    }
    else if(ready1){
        ready1 = false
        setTimeout(readyFunc1, 6000)
        scrambleInImproved(document.getElementById("TEXT2"), default1)
        mode1 = 1
    }
}



var mode2 = 1
var ready2 = true
var default2 = "A more mainstream and perhaps older fear regarding AI, is that of job security. The threat is obvious: if a robot can think like a human, it can do human work. And you don't need to pay robots. This has led to a great deal of worry regarding the threat of AI “replacing” humans in the workforce, leading to a dystopian future where humans lose their value and ability to earn. While new technologies have been replacing jobs since humans realized how to grow crops, AI does possess a unique threat in how general it can be, theoretically being capable of any “intellectual” based work, posing a potential risk to an amount of jobs larger than any technology we have seen before."
var altText2 = "To me, this is less of a concern. While I have already mentioned it, I'll say it again: AI is not on the same level as humans. Not even close. It is inevitable that there will be some level of job loss from AI automation, but it does not prove a threat higher than any other revolutionary invention from the past. It's also worth remembering that in the long term, automation has served humanity, not hurt it. While there has always been pushback against new inventions that threaten jobs, this often disappears as the technology is increasingly incorporated into society, and the benefits are seen. It's not impossible that AI is the first major player to break that rule, but I dont think it's likely. "
document.getElementById("B2").onclick = function(){
    if(mode2 == 1 && ready2){
        ready2 = false
        setTimeout(readyFunc2, 6000)
        scrambleInImproved(document.getElementById("TEXT3"), altText2)
        mode2 = 2
    }
    else if(ready2){
        ready2 = false
        setTimeout(readyFunc2, 6000)
        scrambleInImproved(document.getElementById("TEXT3"), default2)
        mode2 = 1
    }
}



var mode3 = 1
var ready3 = true
var default3 = "While you can argue all day about the validity of the previous arguments, some threats are less theoretical than others. AI as a tool for misinformation is already causing problems with falsified information online. While people have been spreading fake stories since the dawn of time, AI automation has made convincing news reports, videos, images, and much more easier than ever, leading to obvious problems. The conversation around AI generated misinformation is less about if it's a problem, and more about how we should address it. Regulation around what commercial AI can generate, with stricter guidelines on content moderation has been floated as a potential fix, while at the same time people have argued that increased regulation would just lead to a neutering of AI capabilities."
var altText3 = "I believe that it is undeniable action must be taken to halt damage done by AI created misinformation. While the potential drawbacks from limiting content aren't none, and hasty regulation surrounding new technologies has frequently done more harm than good, inaction is the wrong choice. We are already seeing AI used as a way to create made-up headlines meant to cause confusion and sway voters, something that interferes with the bedrock of our democratic society."
document.getElementById("B3").onclick = function(){
    if(mode3 == 1 && ready3){
        ready3 = false
        setTimeout(readyFunc3, 6000)
        scrambleInImproved(document.getElementById("TEXT4"), altText3)
        mode3 = 2
    }
    else if(ready3){
        ready3 = false
        setTimeout(readyFunc3, 6000)
        scrambleInImproved(document.getElementById("TEXT4"), default3)
        mode3 = 1
    }
}


setTimeout(addText, 3800, 6)
scrambleText()
//setTimeout(scrambleIn, 6000, document.getElementById("TEXT1"), sampleLorem2)


