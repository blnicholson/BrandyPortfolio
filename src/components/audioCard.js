import React from 'react'
import AudioCard from 'audiocard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  ButtonPlay,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const PodcastAudioCard = (props) => (
  <AudioCard
                title={props.title}
                art={props.art}
                source={props.source}
                skipBackSeconds={10}
                skipForwardSeconds={30}
                color="white"
                background="transparent"
                progressBarBackground="darkorange"
                progressBarCompleteBackground="darkGray"
              />
)

export default PodcastAudioCard