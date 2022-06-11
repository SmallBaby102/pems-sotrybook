import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prototype07Component from "../../../../../components/sandbox/prototype/prototype-07/Prototype07Component";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-07/Prototype07Component',
    component: Prototype07Component,
} as ComponentMeta<typeof Prototype07Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype07Component> =
    (args) => <Prototype07Component {...args}/>

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

