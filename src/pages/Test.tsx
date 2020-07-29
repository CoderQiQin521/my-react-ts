import React, { useState, useEffect } from 'react'
// react两种组件 class组件 函数式组件
// 一个函数组件,hooks
export default function Test(props: any) {
  const [str, setStr] = useState('heiheiehieeieh')
  useEffect(() => {
    console.log('useEffect')
    setStr('useEffect')
  }, [])
  return (
    <div>
      我是{str}test组件{props.ee}
    </div>
  )
}
