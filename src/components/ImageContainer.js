import React, { useEffect, useState } from 'react'
import fantasyDeer from '../assets/fantasy deer.jpg'
import RoundButton from './RoundButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageContainer() { 


    const [message, changeMsg] = useState({
        content: "",
        auther: ""
    })

    function renderMessage (json) {
        changeMsg({
            content: json[0].content,
            auther: json[0].author,
        })
    }

    useEffect(() => {
        fetch('https://api.quotable.io/quotes/random?limit=1')
        .then(response => response.json())
        .then(json => renderMessage(json))
    }, [])

    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <img
                src={fantasyDeer}
                alt="Fantasy Deer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '75%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div style={{
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '20px',
                    color: 'black',
                    textAlign: 'center',
                }}>
                    <h2 style={{
                        fontStyle: 'italic',
                    }}>"{message.content}"</h2>
                    <h2>- {message.auther}</h2>
                </div>
                <div style={{
                     display: "flex",
                     justifyContent: 'center',
                     alignItems: 'center',
                }}>
                </div>
            </div>
        </div>
    );
}
