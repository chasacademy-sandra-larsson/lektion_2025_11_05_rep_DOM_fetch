const API_URL = "http://api.sr.se/api/v2/channels?format=json&size=100";

const channelList = document.getElementById("channel-list");


 async function getChannels() {

    try {
        // Hämta JSON från API_URL
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        // Konvertera JSON till JS objekt
        const data = await response.json();

        return data;

    } catch(error) {
        console.error("Error", error)
    }

}

async function displayChannels() {

    const data = await getChannels();
     
    data.channels.forEach(function (channel) {

        // HTML-sträng metod html = `<li>....</li>`
        // Testa själv!


        // Skapa elementen i DOM:en och lägga till attribut osv...
        // Vi gör denna metod denna gång!

        // Hämta rätt data från varje kanal
        const image = channel.image;
        const audioUrl = channel.liveaudio.url;
        const channelName = channel.name;
        const color = channel.color;

        // Skapa element 
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const audio = document.createElement("audio");
        const source = document.createElement("source");


        // Haka på attributen
        img.setAttribute("src", image);
        img.setAttribute("alt", channelName);

        //https://www.w3schools.com/html/html5_audio.asp
        audio.setAttribute("controls", true);
        source.setAttribute("src", audioUrl);
        source.setAttribute("type", "audio/mp3");
    
        // Lägga till text till element
        h2.textContent = channelName;

        // Lägga till dem i DOM:en
         li.appendChild(img);
         li.append(div);
         div.appendChild(h2);
         div.appendChild(audio);
        //https://www.w3schools.com/html/html5_audio.asp
         audio.appendChild(source);


         // Lägg till klasser/styling 
         div.classList.add("right");
         div.style.backgroundColor = `#${color}`;


        // Lägg till li till ul-listan
        channelList.appendChild(li);


    });
}

displayChannels();