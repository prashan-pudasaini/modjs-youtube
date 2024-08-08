import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModDownChevronIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const DownChevronIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModDownChevronIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="down-chevron-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M1544 6140 c-96 -54 -143 -134 -144 -241 0 -130 -101 -21 1474 -1597
                        970 -972 1447 -1443 1481 -1463 44 -25 60 -29 133 -29 64 0 92 5 125 21 29 14
                        489 468 1483 1462 1586 1586 1484 1476 1484 1606 -1 107 -48 187 -144 241 -45
                        26 -61 30 -133 30 -65 0 -92 -5 -125 -22 -30 -15 -454 -432 -1357 -1335 -723
                        -722 -1322 -1313 -1331 -1313 -9 0 -607 591 -1330 1313 -904 903 -1328 1321
                        -1358 1335 -33 17 -60 22 -125 22 -72 0 -88 -4 -133 -30z"
                />
            </g>
        </ModDownChevronIcon>
    )
}

export default withSystemProps(forwardRef(DownChevronIcon))
