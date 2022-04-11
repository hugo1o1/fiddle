import React from 'react'
import { Button } from 'antd'
import 'antd/lib/button/style/index.css'
export default function Home(props) {

  const {data } = props
  return (
    <div>
      <Button>{data}</Button>
    </div>
  )
}
