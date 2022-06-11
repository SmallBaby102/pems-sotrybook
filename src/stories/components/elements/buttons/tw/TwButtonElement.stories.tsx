import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TwButtonElement} from "../../../../../components/elements/buttons/tw/TwButtonElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/buttons/tw/TwButtonElement',
    component: TwButtonElement,
} as ComponentMeta<typeof TwButtonElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof TwButtonElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <TwButtonElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

