import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

export function AmbientWorksPlayer(){

    return(
<MultipleTracksWrapper>

<SingleTrackWrapper>
<h3>momo<br></br>&#47;&#47; 2019</h3>
<ReactAudioPlayer
  src="/momo.mp3"
  controls
  controlsList="nodownload"
/>
</SingleTrackWrapper>

<SingleTrackWrapper>

<h3>floating 2018<br></br>&#47;&#47; 2019</h3>
<div>
<ReactAudioPlayer
  src="/floating 2018.mp3"
  controls
  controlsList="nodownload"
/>
</div>
</SingleTrackWrapper>

<SingleTrackWrapper>
<h3>bin ich ein leuchtturm<br></br>&#47;&#47; 2018</h3>
<ReactAudioPlayer
  src="/bin ich ein leuchtturm.mp3"
  controls
  controlsList="nodownload"
/>
</SingleTrackWrapper>

<SingleTrackWrapper>
<h3>morning glory<br></br>&#47;&#47; 2018</h3>
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
width:100%;
display:flex
flex-direction:column;
gap: 2rem;

`

const SingleTrackWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content: space-between;
align-items:center;
`


