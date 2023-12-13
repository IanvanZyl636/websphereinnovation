'use client'

import {useCallback} from "react";
import Particles from "react-particles";
import {Container, Engine} from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Background(){
    const particlesInit = useCallback(async (engine : Engine)  => {
        await loadStarsPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container:Container | undefined) => {
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={
            {
                position:"absolute",
                top:'50%',
                left:'50%',
                transform:'translateX(-50%) translateY(-50%)',
                height:"100%",
                width:"100%",
                minHeight:'1000px',
                minWidth:'1000px',}}
            loaded={particlesLoaded}
            options={{
                preset: "stars",
                style:{
                    position:"fixed",
                    top:"50%",
                    left:"50%",
                    transform:'translateX(-50%) translateY(-50%)',
                    minHeight:'1000px',
                    minWidth:'1000px',
                    height:"100%",
                    width:"100%"
                }
        }}
        />
    );
}