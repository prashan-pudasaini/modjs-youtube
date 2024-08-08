import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModCloseIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const CloseIcon = (
    { fill, height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModCloseIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="close-icon"
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M8015 8397 c-24 -13 -729 -711 -1776 -1759 -954 -956 -1741 -1738
                      -1748 -1738 -7 0 -791 777 -1741 1728 -1223 1221 -1742 1734 -1775 1751 -58
                      30 -131 38 -203 20 -48 -11 -66 -23 -117 -74 -51 -51 -63 -69 -74 -117 -18
                      -72 -10 -146 20 -203 17 -32 542 -564 1752 -1774 950 -950 1727 -1734 1727
                      -1741 0 -7 -782 -795 -1737 -1751 -1149 -1150 -1745 -1753 -1760 -1782 -30
                      -57 -32 -175 -4 -238 23 -52 90 -118 144 -142 59 -27 176 -23 236 7 36 19 469
                      446 1783 1760 955 955 1742 1736 1749 1736 6 0 794 -782 1751 -1737 1147
                      -1147 1753 -1745 1781 -1760 58 -30 179 -32 242 -3 54 25 104 73 133 129 31
                      60 31 192 0 253 -15 30 -570 591 -1760 1780 -956 955 -1738 1742 -1738 1748 0
                      7 782 794 1737 1750 1162 1163 1745 1753 1760 1782 30 59 32 179 3 243 -25 54
                      -73 104 -129 133 -59 31 -198 30 -256 -1z"
                />
            </g>
        </ModCloseIcon>
    )
}

export default withSystemProps(forwardRef(CloseIcon))
