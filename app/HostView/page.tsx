'use client'

import { 
    ControlButton,
    HostControlGrid
} from './styles';
import io from 'socket.io-client';
const socket = io('http://192.168.5.58:3001');

const HostView = () => {
    const spinTheWheel = () => {
        socket.emit('chat message');
    };

    const endTheRound = () => {
        console.log('fired')
        socket.emit('end the round')
    }

    const laughTrack = () => {
        socket.emit("laugh track")
    }

    const controls = [{
        id: 'wheelSpin',
        fnc: spinTheWheel,
        label: "Spin the Wheel"
    }, {
        id: 'roundEnd',
        fnc: endTheRound,
        label: "End Round"
    }, {
        id: 'laughTrack',
        fnc: laughTrack,
        label: "Laugh Track"
    }];

    return (
        <HostControlGrid>
            {controls.map(({fnc, id, label}) => <ControlButton key={id} onClick={fnc}>{label}</ControlButton>)}
            {/* <button onClick={laughTrack}>Cue the Laughter</button> */}
        </HostControlGrid>
    )
};

export default HostView