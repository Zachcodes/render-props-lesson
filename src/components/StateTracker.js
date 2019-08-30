import React, { Component } from 'react'

export default class StateTracker extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleChange = e => {
        let {name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return this.props.render({
            handleChange: this.handleChange,
            value: this.state.name
        })
    }
}