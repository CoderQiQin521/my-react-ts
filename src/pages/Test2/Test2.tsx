import * as React from 'react'

interface Props {}

interface State {
  name: string
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      name: '阿萨德发送大',
    }
  }
}
