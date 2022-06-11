import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MoreVerticalIconElement} from "../../../../components/elements/icons/MoreVerticalIconElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/icons/MoreVerticalIconElement',
    component: MoreVerticalIconElement,
} as ComponentMeta<typeof MoreVerticalIconElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof MoreVerticalIconElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <MoreVerticalIconElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

