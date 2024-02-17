import styled from "styled-components"
import Jovana from "./images/ec29f0b2-6d7e-4d68-bc74-5f4838afa12f.jpg"
import backgroundFlowers from "./images/3fb836f7c7007d0d5714527998472f36.jpg"
import AudioUm from "./audios/rodrigofaro.mp3"
import AudioDois from "./audios/audiodois.mp3"
import AudioQuatro from "./audios/audioquatro.mp3"
import AudioCinco from "./audios/audiocinco.mp3"
import { useEffect, useRef, useState } from "react"
import "./App.css"

const Cu = () => {
    const playCount = useRef(0);
    const [volume, setVolume] = useState(0.1);
    const audioRef = useRef(0.2);

    const playCountUm = useRef(0);
    const playCountCinco = useRef(0);

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };
    useEffect(() => {
        const audioInterval = setInterval(() => {
            const audio = new Audio(AudioUm);
            audio.play();
            playCount.current += 1;

            if (playCount.current >= 4) {
                clearInterval(audioInterval);
            }
        }, 3000);
        const audioCincoInterval = setInterval(() => {
            if (playCountCinco.current < 6) {
                const audio = new Audio(AudioQuatro);
                audio.play();
                playCountCinco.current += 1;

                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0;
                }, 2000);
            }
        }, 2100);

        const audioQuatroTimeout = setTimeout(() => {
            const audio = new Audio(AudioCinco);
            audio.play();
        }, 90000);

        return () => {
            clearInterval(audioInterval);
            clearInterval(audioCincoInterval);
            clearTimeout(audioQuatroTimeout);
        };
    }, []);
    return (<>
        <Main>
            <Img src={Jovana} alt="" />
            <H3Birthday style={{ fontFamily: "fontum" }}>FELIZ ANIVERSARIO</H3Birthday>
            <H3Princess style={{ fontFamily: "fontdois" }}>PRINCESA</H3Princess>
            <H3Thanks >OBRIGADO POR SER</H3Thanks>
            <H3Life style={{ fontFamily: "fontquatro" }}>PARTE DA MINHA VIDA</H3Life>
            <H3TeLove style={{ fontFamily: "fontcinco" }}>TE AMO</H3TeLove>
            <H3TooMuch style={{ fontFamily: "fontseis" }}>MUITO!</H3TooMuch>
            <audio src={AudioDois} autoPlay></audio>
        </Main>

    </>
    )
}

const Img = styled.img`
max-width: 240px;
animation: jello-horizontal 1.2s infinite;
`

const Main = styled.main`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${backgroundFlowers});
background-size: cover;
background-position: center;
`

const H3Birthday = styled.h1`
position: absolute;
bottom: 500px;
left: 20px;
color: purple;
animation: slide-in-top 0.5s both;
`

const H3Princess = styled.h3`
position: absolute;
bottom: 420px;
left: 170px;
font-size: 50px;
color: pink;
text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
animation: shadow-pop-tr 1.3s infinite alternate-reverse;
@media (max-width: 303px) {
    left: 120px;
}
`

const H3Thanks = styled.h3`
position: absolute;
bottom: 140px;
right: 100px;
color: yellow;
animation: swing 4s infinite;
text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
`

const H3Life = styled.p`
position: absolute;
bottom: 95px;
left: 80px;
color: green;
text-shadow:
    3px 1px 8px black,
    2px 2px 1px black;
font-size: 30px;
animation: tada 2.2s infinite;
@media (max-width: 303px) {
    left: 40px;
}
`

const H3TeLove = styled.h3`
position: absolute;
bottom: 55px;
left: 100px;
color: blue;
font-size: 30px;
text-shadow:
    3px 1px 8px yellow,
    2px 2px 1px yellow;
`

const H3TooMuch = styled.h3`
position: absolute;
bottom: 25px;
left: 100px;
color: ;
font-size: 35px;
animation: mt 2.2s infinite;

`

// const DivWords = styled.div`
// display: flex;
// position: absolute;
// `

export { Cu }