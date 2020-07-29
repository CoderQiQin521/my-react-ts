import React, { useState, useEffect } from 'react'
// react两种组件 class组件 函数式组件
// 一个函数组件,hooks
interface Props {
  /**一个字符串传参 */
  ee: string
}

export default function Test(props: Props) {
  const [str, setStr] = useState('嘿嘿')
  const { ee } = props
  useEffect(() => {
    console.log('useEffect')
    setStr('useEffect')
  }, [])
  return (
    <div>
      我是{str}test组件--{ee}
    </div>
  )
}
