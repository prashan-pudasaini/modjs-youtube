import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModQuoteIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const QuoteIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModQuoteIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="quote-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M1657 7853 l-1657 -3 0 -3361 0 -3361 1675 1675 1675 1675 0 1683 c0
1683 0 1710 -30 1696 -3 -1 -751 -3 -1663 -4z"
                />
                <path
                    d="M5642 7852 c-10 -7 -12 -681 -12 -3352 0 -1839 2 -3346 5 -3349 3 -3
756 745 1673 1662 917 917 1673 1667 1680 1667 9 0 12 344 12 1685 l0 1685
-1659 0 c-913 0 -1665 2 -1673 5 -7 3 -19 1 -26 -3z"
                />
            </g>
        </ModQuoteIcon>
    )
}

export default withSystemProps(forwardRef(QuoteIcon))
