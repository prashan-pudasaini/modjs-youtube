import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModSearchIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const SearchIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModSearchIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-100 400 900 400"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="search-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2150 5971 c-1281 -205 -2201 -1300 -2143 -2551 92 -1954 2287 -3040
3942 -1950 l175 115 563 -558 c965 -957 1040 -1027 1101 -1027 130 0 231 117
203 235 -9 37 -266 304 -807 837 l-794 782 72 80 c530 587 721 1546 464 2336
-372 1147 -1586 1890 -2776 1701z m695 -381 c1636 -246 2376 -2154 1322 -3410
-1015 -1209 -2991 -926 -3608 518 -644 1510 644 3140 2286 2892z"
                />
            </g>
        </ModSearchIcon>
    )
}

export default withSystemProps(forwardRef(SearchIcon))
