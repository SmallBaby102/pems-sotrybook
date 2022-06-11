import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeadingElement from "../../../../../components/elements/headings/heading/HeadingElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/headings/heading/HeadingElement',
    component: HeadingElement,
} as ComponentMeta<typeof HeadingElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof HeadingElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <HeadingElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

