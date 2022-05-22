import {Camera, Mesh, Scene} from "three";

export class AnimationScene {
        private cameras: Camera[] = []
        private objects: Mesh[] = []
    constructor(
        private scene: Scene,
    ) {
    }

}
