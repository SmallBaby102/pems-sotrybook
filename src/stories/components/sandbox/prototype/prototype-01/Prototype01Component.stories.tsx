import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Prototype01Component from "../../../../../components/sandbox/prototype/prototype-01/Prototype01Component";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/sandbox/prototype/prototype-01/Prototype01Component',
    component: Prototype01Component,
} as ComponentMeta<typeof Prototype01Component>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof Prototype01Component> =
    (args) => <Prototype01Component {...args}/>

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

