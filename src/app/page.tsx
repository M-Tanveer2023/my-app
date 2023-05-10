import Image from 'next/image'

import Card from '../../component/card'
import Component1 from '../../component/component'

export default function Home() {
  return (
   <div>
    <h3>
      Hello Tanveer
      <Card/>
      <Component1/>
    </h3>
   </div>
  )
}
