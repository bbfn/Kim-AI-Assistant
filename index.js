const startBtn = document.querySelector("#start-btn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-us";
recognition.interimResults = false;
recognition.maxAlternatives = 1; 


const synth = window.speechSynthesis;

startBtn.addEventListener("click", () =>{
    recognition.start();
});

let  utter = new SpeechSynthesisUtterance("Hi,how are you?");
utter.onend = () => {
    recognition.start();
};

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length -1][0].transcript.trim();
  if (transcript === "hello") {
    recognition.stop(); 
   
utter.text = "Hi,how are you?";
synth.speak(utter);
  } 
  else if(transcript.includes("open YouTube","can you open Youtube")){
    window.open('https://www.youtube.com/')
    }  else if(transcript.includes("open Instagram")){
      window.open('https://www.instagram.com/')
      } 
      else if(transcript.includes("open WhatsApp")){
        window.open('https://web.whatsapp.com/')
        } 
        else if(transcript.includes("open calculator")){
          window.open('https://www.desmos.com/scientific')
          } 
    else if(transcript.includes("open series")){
      window.open('D:\series')
      } 
    else if(transcript.includes("open my document")){
      window.open('file:///C:/Users/RHODAH/Documents/findings.rtf')
      } 
    else if(transcript.includes("open games")){
      window.open('file:///D:/games/')
      } 
    else if(transcript.includes("play my music")){
      window.open('file:///D:/English%20worship/02%2010,000%20Reasons%20-%20Matt%20Redman%20(Bless%20the%20Lord).mp3')
      } 
    else if(transcript.includes("open citizen tv live")){
      window.open('https://www.youtube.com/watch?v=n8XXBk_Q8Rs')
      } 
    else if(transcript.includes("play YouTube music")){
      window.open('https://www.youtube.com/watch?v=uwllF3lvGLQ&list=RDuwllF3lvGLQ&start_radio=1')
      }
    else if(transcript.includes("open Facebook","can you open facebook")){
      window.open('https://wwww.Facebook.com/')
      }
      else if(transcript.includes("open PowerPoint")){
        window.open('https://www.office.com/launch/powerpoint?flight=unauthrefresh&auth=1')
        }
        else if(transcript.includes("open Wikipedia","can you open wikipedia")){
          window.open('https://wwww.wikipedia.com/')
          }
          else if(transcript.includes("open email","can you open email")){
            window.open('https://wwww.gmail.com/')
            }
            else if(transcript.includes("open Microsoft Word","can you open Microsoft Word")){
              window.open('https://www.office.com/launch/word?flight=unauthrefresh&auth=1')
          } 
          else if(transcript.includes("open Microsoft Excel"," can you open Microsoft Excel")){
            window.open('https://www.office.com/launch/excel?flight=unauthrefresh&auth=1')
            }
            else if(transcript.includes("open my picture")){
              window.open('file:///D:/vs/.vscode/key.jpg')
              }
          
          
  else if (transcript.includes("time")){
    const time =new Date().toLocaleString(undefined, {hour:"numeric", minute: "numeric"})
    const finalText = time;
  speech.text = finalText;
  }else if (transcript === "what is your name") {
    recognition.stop();
    utter.text = "i am Kim a virtual assistant" ;
    synth.speak(utter);
} else if (transcript === "who created you") {
  recognition.stop();
  utter.text = "John, a gretsa student" ;
  synth.speak(utter);
} else if (transcript === "Kim") {
  recognition.stop();
  utter.text = "yes boss,how can i help you" ;
  synth.speak(utter);
} else if (transcript === "can you tell me a joke") {
  recognition.stop();
  utter.text = "when you write 1000 line of code and exit without saving " ;
  synth.speak(utter);
} 
  else if (transcript === "goodbye") {
      recognition.stop();
      utter.text = "Hope to see you soon" ;
      synth.speak(utter);
  } 
  else {
    recognition.stop();
    utter.text = "i dont understand what you are saying";
    synth.speak(utter); 
}
};