import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    BottomRightShadowBackgroundGradientElement
} from "../../../../../components/elements/backgrounds/bottom-right-shadow/BottomRightShadowBackgroundGradientElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/backgrounds/bottom-right-shadow/BottomRightShadowBackgroundGradientElement',
    component: BottomRightShadowBackgroundGradientElement,
} as ComponentMeta<typeof BottomRightShadowBackgroundGradientElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof BottomRightShadowBackgroundGradientElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <BottomRightShadowBackgroundGradientElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

