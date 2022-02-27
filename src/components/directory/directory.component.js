import { Component } from 'react'
import './directory.style.scss'
import sections from './sattic_directory'
import MenuItem from '../menu-item/menu-item.component'
class Directory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: sections
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id,title,imageUrl,size})=>{
                    return <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl}
                    size={size}
                    />
                })}
            </div>
        )
    }
}

export default Directory