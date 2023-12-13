import {TextareaStylesType} from "@material-tailwind/react";

const textAreaTheme:TextareaStylesType  = {
    defaultProps: {
        variant: 'standard',
        size: 'md',
        color: 'white',
        resize: false
    },
    valid: {
        colors: ['white']
    },
    styles: {
        variants: {
            static:{},
            outlined:{},
            standard: {
                colors: {
                    textarea: {
                        white: {
                            color: "text-white",
                            borderColor: "border-white",
                            borderColorFocused: "focus:border-white",
                        },
                    },
                    label: {
                        white: {
                            color: "!text-white peer-focus:text-white",
                            after: "after:border-white peer-focus:after:border-white",
                        },
                    },
                },
            }
        }
    }
}

export default textAreaTheme;
