import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModLeftArrowIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const LeftArrowIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModLeftArrowIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="left-arrow-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                {' '}
                <path d="M2214 6685 c-38 -19 -279 -255 -1075 -1052 -664 -666 -1032 -1041 -1042 -1065 -26 -56 -22 -115 12 -173 20 -34 365 -385 1048 -1067 1049 -1048 1059 -1057 1135 -1058 64 0 148 54 178 114 24 51 26 122 5 174 -11 26 -266 287 -853 875 -664 664 -834 839 -822 847 10 6 1463 10 3976 10 3400 0 3966 2 3995 14 76 32 129 109 129 185 0 75 -62 162 -132 188 -25 9 -979 12 -4000 12 -2902 1 -3969 4 -3974 12 -4 7 335 353 829 848 587 587 841 847 852 873 16 39 19 94 9 146 -13 63 -118 141 -190 142 -16 0 -52 -11 -80 -25z" />{' '}
            </g>
        </ModLeftArrowIcon>
    )
}

export default withSystemProps(forwardRef(LeftArrowIcon))
