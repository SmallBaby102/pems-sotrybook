import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    TopLeftShadowBackgroundGradientElement
} from "../../../../../components/elements/backgrounds/top-left-shadow/TopLeftShadowBackgroundGradientElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/backgrounds/top-left-shadow/TopLeftShadowBackgroundGradientElement',
    component: TopLeftShadowBackgroundGradientElement,
} as ComponentMeta<typeof TopLeftShadowBackgroundGradientElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof TopLeftShadowBackgroundGradientElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <TopLeftShadowBackgroundGradientElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

