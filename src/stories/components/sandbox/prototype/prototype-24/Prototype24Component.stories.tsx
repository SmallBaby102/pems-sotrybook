import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prototype24Component from "../../../../../components/sandbox/prototype/prototype-24/Prototype24Component";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-24/Prototype24Component',
    component: Prototype24Component,
} as ComponentMeta<typeof Prototype24Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype24Component> =
    (args) => <Prototype24Component {...args}/>

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
