import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubheadingElement from "../../../../../components/elements/headings/subheading/SubheadingElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/headings/subheading/SubheadingElement',
    component: SubheadingElement,
} as ComponentMeta<typeof SubheadingElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof SubheadingElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <SubheadingElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
    text: "Example Sub Heading"
};

Base.storyName = "Base"

