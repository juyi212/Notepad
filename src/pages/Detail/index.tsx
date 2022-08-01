import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams<{ id: string;}>();
    
    useEffect(() => {
        
    }, [])

    return (
        <div>
        
        </div>
    )
}

export default Detail;