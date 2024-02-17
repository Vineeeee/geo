import styled from "styled-components"
import Back from "./images/Designsemnome.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./App.css"

const Date = () => {
    const navigateTo = useNavigate();
    const [change, setChange] = useState('')
    const [showParagraph, setShowParagraph] = useState(false)
    console.log(change);

    const handleChange = (e) => {
        const { value } = e.target;
        setChange(value);
        if (value === "2024-02-22") {
            setShowParagraph(true);
            navigateTo('/feliz-aniversario-gatinha')
        } else if(value!="2024-02-22"){
            setShowParagraph(true)
        }     
        else {
            setShowParagraph(false);
        }
    };

    return (
        <Main>
            <input type="date" name="dates" id="1" onChange={handleChange} />
            {showParagraph ? <ParagraphOne>Data de aniversário errada.</ParagraphOne> : <ParagraphaTwo>Insira sua data de aniversário</ParagraphaTwo>}
        </Main>
    )
}

const Main = styled.main`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url(${Back});
background-size: cover;
background-position: center;
`

const ParagraphOne = styled.p`
color: white;
padding-top: 10px;
animation: op 0.5s infinite alternate-reverse;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const ParagraphaTwo = styled.p`
color: white;
padding-top: 10px;
animation: ca 1s;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export { Date }