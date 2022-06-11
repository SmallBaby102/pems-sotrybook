import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {HideShowIconElement} from "../../../../components/elements/icons/HideShowIconElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/icons/HideShowIconElement',
    component: HideShowIconElement,
} as ComponentMeta<typeof HideShowIconElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof HideShowIconElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <HideShowIconElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

