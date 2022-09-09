var popup = document.getElementsByClassName("popup");

for(let i=0; i<popup.length; i++)
{
    popup[i].addEventListener("click", function()
    {
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        if(content.style.maxHeight)
        {
            content.style.maxHeight = null;
        }
        else
        {
            content.style.maxHeight = content.scrollHeight + "px"
        }
    });
}

function getTime()
{
    let today = new Date();
    hours = today.getHours();
    min = today.getMinutes();

    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(min < 10)
    {
        min = "0" + min;
    }

    let time = hours + ":" + min;
    return time;
}

function firstBotMessage()
{
    let firstMessage = "Hello there! Please select FAQ: <br/><br/> 1. Food recommendations <br/> 2. Destination places <br/> 3. Transport Hub </br> 4. Information <br/> 5. Educations"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
    $("#display-time").append(time);
    document.getElementById("user-input").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText)
{
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chat-box").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse()
{
    let userText = $('#textInput').val();

    if(userText == "")
    {
        userText = "Send button clicked!"
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chat-box").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => 
    {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText)
{
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chat-box").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton()
{
    getResponse();
}

$("#textInput").keypress(function(e)
{
    if(e.which == 13)
    {
        getResponse();
    }
});

