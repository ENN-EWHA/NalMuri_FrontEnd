import React from 'react';
import styled from 'styled-components';

const Test=() =>{
    return(
        <Container>
            <Sad>

            </Sad>
            <Happy>
            
            </Happy>
            <Gloomy>

            </Gloomy>
            <Surprised>

            </Surprised>
            <Angry>

            </Angry>
            <Disgusted>

            </Disgusted>
            <Fearful>

            </Fearful>
        </Container>

    )
    
}
export default Test;

const Container=styled.div`
height:100%;
width:1500px;
background:whitesmoke;
display: flex;
justify-content:space-around;
margin:auto;
padding-top:20px;
padding-right: 50px;

flex-wrap:wrap;
`;
const Sad=styled.div`
height: 400px;
width:300px;
background:#E7F3EA;

border-radius:10px;
`;
const Happy=styled.div`
height: 400px;
width:300px;
background: #FFF9D9;

border-radius:10px;
`;

const Gloomy=styled.div`
height: 400px;
width:300px;
background: #ECECED;

border-radius:10px;
`;
const Surprised=styled.div`
height: 400px;
width:300px;
background:#FFECDC;

border-radius:10px;
`;
const Fearful=styled.div`
height: 400px;
width:300px;
background: #FDD7DD;

border-radius:10px;
`;

const Disgusted=styled.div`
height: 400px;
width:300px;
background:#EDE8F8;

border-radius:10px;
`;
const Angry=styled.div`
height: 400px;
width:300px;
background: #DDEAF9;

border-radius:10px;
`;