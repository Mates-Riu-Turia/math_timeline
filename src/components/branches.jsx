import { useParams } from "react-router-dom";

export function Branches() {
    const {age} = useParams();

    return (
        <h1>{age}</h1>
    );
}