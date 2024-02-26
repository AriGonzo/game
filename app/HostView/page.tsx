'use client'

import { 
    HostControlGrid
} from './styles';
import io from 'socket.io-client';
const socket = io('http://192.168.5.58:3001');

const HostView = () => {
    const sendMessage = () => {
        socket.emit('chat message');
    };

    const endTheRound = () => {
        console.log('fired')
        socket.emit('end the round')
    }

    const laughTrack = () => {
        socket.emit("laugh track")
    }

    return (
        <HostControlGrid>
            <button onClick={sendMessage}>Spinnner</button>
            <button onClick={endTheRound}>End the round</button>
            <button onClick={laughTrack}>Cue the Laughter</button>
        </HostControlGrid>
    )
};

export default HostView