import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prototype18Component from "../../../../../components/sandbox/prototype/prototype-18/Prototype18Component";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-18/Prototype18Component',
    component: Prototype18Component,
} as ComponentMeta<typeof Prototype18Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype18Component> =
    (args) => <Prototype18Component {...args}/>

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
    name : "Sample",
    mainMetric: 100,
    subMetric: 200,
};

Base.storyName = "Base"
