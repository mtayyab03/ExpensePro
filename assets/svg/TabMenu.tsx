import React from "react";
import { Svg, G, Path, Defs } from "react-native-svg";

const TabMenu = () => {
    return (
        <Svg
            width='410'
            height='129'
            viewBox='0 0 410 129'
            fill='none'
        >
            <G filter='url(#filter0_d_6359_81594)'>
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M156.651 44C161.938 44 166.165 39.7868 167.968 34.8167C173.194 20.4094 188.246 10 206 10C223.754 10 238.806 20.4094 244.032 34.8167C245.835 39.7868 250.062 44 255.349 44H389C395.627 44 401 49.3726 401 56V118C401 118.552 400.552 119 400 119H12C11.4477 119 11 118.552 11 118V56C11 49.3726 16.3726 44 23 44H156.651Z'
                    fill='white'
                />
            </G>
            <Defs>
                <filter
                    id='filter0_d_6359_81594'
                    x='0'
                    y='0'
                    width='410'
                    height='129'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='-1' />
                    <feGaussianBlur stdDeviation='5' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_6359_81594'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_6359_81594'
                        result='shape'
                    />
                </filter>
            </Defs>
        </Svg>
    );
};

export default TabMenu;
