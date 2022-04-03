import React from 'react';
import Card from './Card'


export default function Main() {
    return (
        <main className="main">
            <section className="players-grid">
                <Card 
                name={'Lewandowski'} 
                id='lewy'
                footerid={'bayern'}
                nameid={'lewa'}
                />
                
                <Card 
                name={'Benzema'} 
                id='benzema'
                footerid={'real'}
                nameid={'benze'}
                />
                
                <Card 
                name={'Salah'} 
                id='salah'
                footerid={'pool'}
                nameid={'sal'}
                />
                
                <Card 
                name={'Mbappe'} 
                id='mbappe'
                footerid={'psg'}
                nameid={'mbap'}
                />
                
                <Card 
                name={'Vlahovic'} 
                id='vlahovic'
                footerid={'juve'}
                nameid={'vla'}
                />
            </section>
        </main>
    )
};