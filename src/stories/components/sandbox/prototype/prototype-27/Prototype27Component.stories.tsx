import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prototype27Component from "../../../../../components/sandbox/prototype/prototype-27/Prototype27Component";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-27/Prototype27Component',
    component: Prototype27Component,
} as ComponentMeta<typeof Prototype27Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype27Component> =
    (args) => <Prototype27Component {...args}/>

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
