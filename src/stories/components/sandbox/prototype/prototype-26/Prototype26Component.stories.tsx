import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prototype26Component from "../../../../../components/sandbox/prototype/prototype-26/Prototype26Component";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-26/Prototype26Component',
    component: Prototype26Component,
} as ComponentMeta<typeof Prototype26Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype26Component> =
    (args) => <Prototype26Component {...args}/>

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
