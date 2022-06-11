import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonElement from "../../../../../components/elements/buttons/button/ButtonElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/buttons/button/ButtonElement',
    component: ButtonElement,
} as ComponentMeta<typeof ButtonElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof ButtonElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <ButtonElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

