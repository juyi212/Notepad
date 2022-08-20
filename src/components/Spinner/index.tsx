import { Circles } from  'react-loader-spinner'

const Spinner = () => {
    return (
        <div style={{
            position: "relative",
            top: "50%",
            left: "50%",
        }}>
            <Circles 
                height = "50"
                width = "50"
            />
        </div>
    )
}

export default Spinner; 