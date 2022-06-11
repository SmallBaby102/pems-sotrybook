import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PricerangeElement from "../../../../../components/elements/sliders/pricerange/PricerangeElement";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export default {
    title: 'components/elements/sliders/pricerange/PricerangeElement',
    component: PricerangeElement,
} as ComponentMeta<typeof PricerangeElement>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const Template: ComponentStory<typeof PricerangeElement> =
    (args) =>
        <div className="ml-4 mt-4">
            <PricerangeElement />
        </div>;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const Base = Template.bind({});
Base.args = {
};

Base.storyName = "Base"

