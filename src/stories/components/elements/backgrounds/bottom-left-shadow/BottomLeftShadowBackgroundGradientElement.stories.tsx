import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    BottomLeftShadowBackgroundGradientElement
} from "../../../../../components/elements/backgrounds/bottom-left-shadow/BottomLeftShadowBackgroundGradientElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/backgrounds/bottom-left-shadow/BottomLeftShadowBackgroundGradientElement',
    component: BottomLeftShadowBackgroundGradientElement,
} as ComponentMeta<typeof BottomLeftShadowBackgroundGradientElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof BottomLeftShadowBackgroundGradientElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <BottomLeftShadowBackgroundGradientElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

