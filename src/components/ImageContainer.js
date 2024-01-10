import React from 'react'
import fantasyDeer from '../assets/fantasy deer.jpg'
import RoundButton from './RoundButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageContainer() {
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
                    }}>“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein</h2>
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
