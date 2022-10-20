import { debug } from "console";
import { useParams } from "react-router-dom";


export default function MarkdownService() {
    let {mdType} = useParams();

    console.log(mdType)

    return (
        <h1>{mdType}</h1>
    )
}