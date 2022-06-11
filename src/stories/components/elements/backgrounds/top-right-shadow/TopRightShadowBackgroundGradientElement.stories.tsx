import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    TopRightShadowBackgroundGradientElement
} from "../../../../../components/elements/backgrounds/top-right-shadow/TopRightShadowBackgroundGradientElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/backgrounds/top-right-shadow/TopRightShadowBackgroundGradientElement',
    component: TopRightShadowBackgroundGradientElement,
} as ComponentMeta<typeof TopRightShadowBackgroundGradientElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof TopRightShadowBackgroundGradientElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <TopRightShadowBackgroundGradientElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

