import React from 'react'
import Banner from '../Banner/Banner'
import Rowposter from '../Rowposter/Rowposter'
import { music, western, horror, mystery, thriller, sciencefiction, fantasy, family, comedy, crime, originals } from '../../Config/url'
import Footer from '../Footer/Footer'


function Homescreen() {

  return (
    <div>
      <Banner />
      <Rowposter title='Netflix Originals' url={originals} originals />
      <Rowposter title='Comedy' isSmall url={comedy} />
      <Rowposter title='Crime' isSmall url={crime} />
      <Rowposter title='Family' isSmall url={family} />
      <Rowposter title='Horror' isSmall url={horror} />
      <Rowposter title='Thriller' isSmall url={thriller} />
      <Rowposter title='Mystery' isSmall url={mystery} />
      <Rowposter title='Science Fiction' isSmall url={sciencefiction} />
      <Rowposter title='Fantasy' isSmall url={fantasy} />
      <Rowposter title='Music' isSmall url={music} />
      <Rowposter title='Western' isSmall url={western} />
      <Footer></Footer>
    </div>

  )
}

export default Homescreen