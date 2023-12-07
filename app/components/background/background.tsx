'use client'

import {useCallback} from "react";
import Particles from "react-particles";
import {Container, Engine} from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Background(){
    const particlesInit = useCallback(async (engine : Engine)  => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadStarsPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container:Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={{position:"absolute",top:0,left:0,height:"100%",width:"100%"}}
            loaded={particlesLoaded}
            options={{
                preset: "stars",
                style:{
                    position:"fixed",
                    top:"0",
                    left:"0",
                    height:"100%",
                    width:"100%"
                }
        }}
        />
    );
}