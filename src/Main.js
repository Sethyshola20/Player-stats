import React from 'react';
import Card from './Card';


export default function Main() {
    return (
        <main className="main">
            <section className="players-grid">
                <Card 
                name={'Lewandowski'} 
                id='lewy'
                footerid={'bayern'}
                nameid={'lewa'}
                club={'BAYERN MUNCHEN'}
                clubid={'FCB'}
                games={'34'}
                goals={'38'}
                country={'POLAND'}
                link={'https://www.youtube.com/watch?v=WrFt76L35C0'}
                />

                <Card 
                name={'Benzema'} 
                id='benzema'
                footerid={'real'}
                nameid={'benze'}
                club={'REAL MADRID'}
                clubid={'RM'}
                games={'32'}
                goals={'39'}
                country={'FRANCE'}
                link={'https://www.youtube.com/watch?v=NxtFt2DQoT4'}
                />
                
                <Card 
                name={'Salah'} 
                id='salah'
                footerid={'pool'}
                nameid={'sal'}
                club={'LIVERPOOL'}
                clubid={'LFC'}
                games={'35'}
                goals={'36'}
                country={'EGYPT'}
                link={'https://www.youtube.com/watch?v=JBpas_FAYXU'}
                />
                
                <Card 
                name={'Mbappe'} 
                id='mbappe'
                footerid={'psg'}
                nameid={'mbap'}
                club={'PARIS SAINT GERMAIN'}
                clubid={'PSG'}
                games={'35'}
                goals={'45'}
                country={'FRANCE'}
                link={'https://www.youtube.com/watch?v=Jky2TwKV4Cw&t=10s'}
                />
                
                <Card 
                name={'Vlahovic'} 
                id='vlahovic'
                footerid={'juve'}
                nameid={'vla'}
                club={'JUVENTUS'}
                clubid={'JT'}
                games={'36'}
                goals={'27'}
                country={'SERBIA'}
                link={'https://www.youtube.com/watch?v=difL_MpoVkE'}
                />
            </section>
        </main>
    )
};