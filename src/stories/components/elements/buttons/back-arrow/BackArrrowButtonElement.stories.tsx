import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {BackArrowButtonElement} from "../../../../../components/elements/buttons/back-arrow/BackArrowButtonElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/buttons/back-arrow/BackArrowButtonElement',
    component: BackArrowButtonElement,
} as ComponentMeta<typeof BackArrowButtonElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof BackArrowButtonElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <BackArrowButtonElement {...args}/>
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

