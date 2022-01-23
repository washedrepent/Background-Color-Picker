import "./Color.css";

export default function Color(props) {
    return (
        <div className='color-element'>
            <h2 className='color-title'>{props.hex}</h2>
            <div className='color-box' style={{ backgroundColor: props.hex }} />
            <button className='color-btn' onClick={props.changeBG}>
                Set BG Color
            </button>
        </div>
    );
}
