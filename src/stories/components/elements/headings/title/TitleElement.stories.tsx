import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TitleElement} from "../../../../../components/elements/headings/title/TitleElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/headings/title/TitleElement',
    component: TitleElement,
} as ComponentMeta<typeof TitleElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof TitleElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <TitleElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
    Text : "Example Text"
};

Base.storyName = "Base"

