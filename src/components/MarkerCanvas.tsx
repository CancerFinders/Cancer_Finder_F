import { useEffect, useRef, useState } from "react";

export default function MarkerCanvas(props:any) {

    interface CanvasState {
        width: number,
        height: number,
        ctx: CanvasRenderingContext2D | null,
        pixelArray: [any]
        
    } 

    const stateObject: CanvasState = {
        width: props.data.img[0].length,
        height: props.data.img.length,
        ctx: null,
        pixelArray: props.data.img
    }
        
    const [canvasState, setCanvasState] = useState(stateObject)

    // Adding alpha and pixels data converting. 
    // Drowning image in canvas
    const drawImage = () => {
        let alphaPixelArray: [any] = [...canvasState.pixelArray];

        // Adding Alpha to pixel info
        alphaPixelArray.forEach((row : Array<any>) => row.forEach((el: Array<number>) => el[3] = 100))
        
        const canvasImg = new Uint8ClampedArray(alphaPixelArray.flat(Infinity))
    
        const imageData: ImageData = new ImageData(canvasImg, canvasState.width, canvasState.height)

        canvasState.ctx?.putImageData(imageData, 0, 0)
    }
    
    const canvasRef = useRef(null);

    useEffect(() => {
        // Canvas onMount initialisation
        const canvas: HTMLCanvasElement = canvasRef.current!;
        setCanvasState({
            ...canvasState,
            ctx: canvas.getContext("2d")
        })
      }, []);

    useEffect(() => {
        drawImage();
    }, [canvasState])

      

    return(
        <canvas id='marker-canvas' 
            ref={canvasRef} 
            width={canvasState.width}
            height={canvasState.height}
        >

        </canvas>
    )
}