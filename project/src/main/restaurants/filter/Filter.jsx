import Button from "../../../ui/Button.jsx"
import "./Filter.css"

function Filter(){
    return(
        <div className="filter">
            <Button style={{backgroundColor: '#e4aa1eeb', width: 163 + 'px', height: 24 + 'px'}}> Открыты сейчас</Button>
            <Button style={{ width: 89 + 'px'}}>Все</Button>
        </div>
    )
}

export default Filter;