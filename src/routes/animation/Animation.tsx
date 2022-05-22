import {BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import {RefObject, useEffect, useRef} from 'react'

import './Animation.css'

const handleKeyDown = (animationObjects: { scene: Scene, camera: PerspectiveCamera }, ev: KeyboardEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    const {
        scene, camera
    } = animationObjects
    switch (ev.code) {
        case 'ArrowRight':
            console.log("right") //eslint-disable-line
            break
        case 'ArrowLeft':
            console.log("left") //eslint-disable-line
            break
        case 'ArrowDown':
            camera.position.z = camera.position.z + 0.1
            break
        case 'ArrowUp':
            camera.position.z = camera.position.z - 0.1
            break
        default:
            break
    }
    console.log(camera.position) //eslint-disable-line
    camera.updateProjectionMatrix()
}

export default function Animation() {
    let isRendering = false
    let smoothRotation = false
    let animationBoxRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)
    const scene: Scene = new Scene()
    const camera: PerspectiveCamera = new PerspectiveCamera(
        75,
        2,
        0.1,
        5);
    camera.position.z = 2;

    const flipSmoothRotation = () => {
        smoothRotation = !smoothRotation
        setTimeout(flipSmoothRotation, Math.random() * 1250)
    }

    setTimeout(flipSmoothRotation, 3)

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new MeshPhongMaterial({color: 0x44aa88});
    const cube = new Mesh(geometry, material);
    scene.add(cube)

    // Add the light
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    let renderer:WebGLRenderer

    const updateAndRender = (time: DOMHighResTimeStamp) => {
        if(isRendering) {
            time *= 0.001;  // convert time to seconds
            cube.rotation.x = time + (smoothRotation ? 0 : ((Math.random()/10) - 0.05));
            cube.rotation.y = time + (smoothRotation ? 0 : ((Math.random()/10) - 0.05));
            cube.rotation.z = time + (smoothRotation ? 0 : ((Math.random()/10) - 0.05));
            renderer.render(scene, camera)
            requestAnimationFrame(updateAndRender)
        }
    }

    useEffect(() => {
        if(!animationBoxRef || !animationBoxRef.current) {
            throw new Error('Failed to load canvas')
        }

        camera.aspect = (animationBoxRef.current.clientWidth / animationBoxRef.current.clientHeight)
        camera.updateProjectionMatrix()

        // bind the keydown handler
        const keyDownHandler = (event: KeyboardEvent) => handleKeyDown({scene, camera}, event)

        document.addEventListener('keydown', keyDownHandler)

        if(renderer) {
            renderer.dispose()
        }

        renderer = new WebGLRenderer({canvas: animationBoxRef.current});
        renderer.setSize(
            animationBoxRef.current.clientWidth,
            animationBoxRef.current.clientHeight,
        );
        
        isRendering = true

        requestAnimationFrame(updateAndRender)

        return () => {
            isRendering = false
            document.removeEventListener('keydown', keyDownHandler)
            renderer?.dispose()
            cube?.removeFromParent()
            material?.dispose()
            geometry?.dispose()
            light?.dispose()
            camera?.removeFromParent()
            while (animationBoxRef?.current?.lastChild) {
                animationBoxRef?.current?.removeChild(animationBoxRef?.current?.lastChild);
            }
        }
    })
    return (
        <canvas ref={animationBoxRef}/>
    );
}
