import React, {Component} from 'react'
import Persist from './Persist'


window.__shadow_id = -1

/**
 * wraps `<Persist />` and components that hold the state with HOC
 *
 */
const Hoc = WrappedComponent => class extends WrappedComponent {

    constructor(props, context) {
        super(props, context)
        this.__id = ''
    }

    componentWillMount() {
        this.__id = `__react_time_machine_persist-${++window.__shadow_id}`
    }

    onMount = data => {
        this.setState(data)
    }

    render() {
        return (
            <div>
                {super.render()}
                <Persist
                    _id={this.__id}
                    _data={this.state}
                    _onMount={this.onMount} />
            </div>
        )
    }
}

export default Hoc
