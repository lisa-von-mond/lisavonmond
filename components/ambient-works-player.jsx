import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

export function AmbientWorksPlayer(){

    return(
<MultipleTracksWrapper>

<SingleTrackWrapper>
<h3>momo // 2019</h3>
<ReactAudioPlayer
  src="/momo.mp3"
  controls
  controlsList="nodownload"
/>
</SingleTrackWrapper>

<SingleTrackWrapper>

<h3>floating 2018 // 2019</h3>
<div>
<ReactAudioPlayer
  src="/floating 2018.mp3"
  controls
  controlsList="nodownload"
/>
</div>
</SingleTrackWrapper>

<SingleTrackWrapper>
<h3>bin ich ein leuchtturm // 2018</h3>
<ReactAudioPlayer
  src="/bin ich ein leuchtturm.mp3"
  controls
  controlsList="nodownload"
/>
</SingleTrackWrapper>

<SingleTrackWrapper>
<h3>morning glory // 2018</h3>
<ReactAudioPlayer
  src="/morning glory.mp3"
  controls
  controlsList="nodownload"
/>
</SingleTrackWrapper>

</MultipleTracksWrapper>
    )
}


const MultipleTracksWrapper = styled.div`
display:flex
flex-direction:column;
gap: 2rem;

`

const SingleTrackWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
`


