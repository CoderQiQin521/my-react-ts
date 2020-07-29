import React, { useState, useEffect } from 'react'
// react两种组件 class组件 函数式组件
// 一个函数组件,hooks
interface Props {
  /**一个字符串传参 */
  ee: string
}

export default function Test(props: Props) {
  const [str, setStr] = useState('嘿嘿')
  let [count, setCount] = useState(1)
  const { ee } = props
  useEffect(() => {
    console.log('useEffect')
    // setStr('useEffect')
  }, [])

  useEffect(() => {
    console.log('更新啦')
  }, [str])

  return (
    <div>
      我是{str}test组件--{ee}--{count}
      <button
        onClick={() => {
          // setStr('1321312')
          console.log('count: ', count)
          setCount((count += 1))
        }}
      >
        按钮
      </button>
    </div>
  )
}
