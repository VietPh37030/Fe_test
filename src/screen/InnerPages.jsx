import React from 'react'
import ContentComponent from '../component/ContentComponent'
import innerPagesData  from '../data/innerPagesData'

const InnerPages = () => {
  return (
    <div>
    <ContentComponent
      headerContent="9 Templates"
      titlePage="Inner Pages"
      contentPage="We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as possible."
      data={innerPagesData }
    />
  </div>
  )
}

export default InnerPages