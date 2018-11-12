/**
 * Created by messi on 2018/10/30
 */
import React, {PropTypes as T, Component} from 'react'

class Persist extends Component {
    static propTypes = {
        _id: T.string,
        _data: T.any,
        _onMount: T.func
    }

    componentWillReceiveProps(persistProps) {
        if (JSON.stringify(this.props._data) !== JSON.stringify(persistProps._data)) {
            window.sessionStorage.setItem(this.props._id, JSON.stringify(persistProps._data))
        }
    }

    componentDidMount() {
        const data = window.sessionStorage.getItem(this.props._id)
        if (typeof data !== 'undefined' && data !== null) {
            this.props._onMount(JSON.parse(data))
        }
    }

    render() {
        return null
    }

}

export default Persist