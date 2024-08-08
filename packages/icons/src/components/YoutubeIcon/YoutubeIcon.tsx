import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModYoutubeIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
    background-color: #cd201f;
    padding: 12px;
    border-radius: 0.125em;
`

const YoutubeIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModYoutubeIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
            data-test="youtube-icon"
        >
            <g
                transform="translate(0.000000,876.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
            >
                {' '}
                <path d="M2273 7736 c-56 -18 -99 -50 -131 -100 l-27 -41 -3 -3220 c-2 -1771 0 -3244 3 -3273 13 -106 106 -184 219 -184 67 0 101 13 204 80 31 20 65 41 75 47 9 5 77 48 150 94 72 47 164 105 202 129 66 42 139 89 245 158 25 16 52 33 61 39 42 25 161 101 229 145 88 56 201 129 236 150 13 8 87 56 164 105 77 50 150 96 163 103 12 7 56 35 97 62 41 27 106 68 144 92 38 24 79 50 92 58 29 19 159 102 182 115 9 6 44 28 77 50 33 22 68 44 77 50 15 9 114 71 183 115 13 8 76 49 140 90 64 41 127 82 140 90 13 8 45 28 72 44 26 16 93 59 149 95 55 36 109 71 120 78 19 12 75 48 230 146 45 29 119 76 165 105 46 29 118 75 159 103 41 27 84 53 95 59 11 6 54 32 95 59 41 28 106 69 144 93 38 24 79 50 92 58 12 8 55 35 94 60 39 25 82 52 94 60 13 8 54 34 92 58 38 24 103 65 144 92 41 27 117 75 168 107 260 162 345 218 383 251 69 60 96 159 67 243 -25 75 -59 103 -316 265 -34 21 -90 57 -125 79 -34 23 -91 59 -126 80 -35 22 -73 47 -86 55 -12 8 -53 34 -91 58 -38 24 -103 65 -144 93 -41 27 -84 53 -95 59 -11 6 -54 32 -95 59 -41 27 -147 95 -235 151 -88 56 -194 123 -235 150 -41 27 -115 74 -165 105 -49 31 -124 79 -165 106 -41 26 -85 54 -97 61 -12 7 -74 47 -138 88 -129 84 -143 93 -211 134 -26 16 -93 59 -148 95 -56 36 -109 70 -118 76 -16 9 -126 78 -172 108 -11 6 -47 30 -81 53 -33 22 -67 43 -75 47 -8 4 -49 29 -90 57 -41 27 -84 54 -95 60 -11 6 -54 32 -95 59 -41 28 -106 69 -143 93 -38 24 -79 50 -92 58 -13 8 -54 34 -92 58 -37 24 -102 65 -143 92 -41 27 -106 68 -144 92 -38 24 -79 50 -91 58 -12 8 -53 34 -91 58 -38 23 -112 70 -164 103 -52 34 -135 87 -185 119 -49 31 -121 77 -160 102 -90 58 -185 119 -207 133 -15 9 -119 74 -183 115 -96 61 -169 107 -184 115 -11 6 -25 16 -32 21 -15 12 -98 34 -121 33 -7 0 -32 -6 -55 -13z m353 -671 c18 -14 35 -25 38 -25 3 0 35 -20 72 -45 36 -25 67 -45 69 -45 3 0 24 -13 47 -29 24 -16 68 -44 98 -63 30 -20 100 -64 155 -100 97 -62 451 -288 499 -318 79 -49 170 -107 236 -151 41 -27 84 -54 95 -59 11 -6 54 -33 95 -60 41 -27 116 -74 165 -105 50 -31 124 -78 165 -105 41 -27 106 -68 143 -92 38 -24 79 -50 92 -58 13 -8 54 -34 92 -58 37 -24 102 -65 143 -92 41 -27 84 -54 95 -60 11 -5 54 -32 95 -59 66 -44 157 -102 236 -151 71 -44 413 -263 499 -319 55 -36 108 -70 117 -76 25 -15 157 -97 184 -115 12 -8 55 -35 94 -60 39 -25 82 -52 94 -60 13 -8 54 -34 92 -58 38 -24 103 -65 144 -92 41 -27 106 -68 143 -92 38 -24 79 -50 92 -58 13 -8 55 -34 93 -58 38 -24 77 -51 86 -60 14 -17 11 -21 -47 -59 -72 -47 -175 -113 -198 -128 -64 -39 -166 -104 -229 -145 -41 -27 -106 -68 -144 -92 -38 -24 -79 -50 -92 -58 -12 -8 -53 -34 -91 -58 -37 -24 -113 -72 -168 -107 -55 -35 -129 -82 -165 -105 -36 -22 -141 -90 -235 -150 -93 -60 -199 -127 -235 -150 -36 -23 -110 -70 -165 -105 -55 -35 -131 -84 -168 -107 -38 -24 -79 -50 -91 -58 -13 -8 -54 -34 -92 -58 -38 -24 -103 -65 -144 -93 -41 -27 -84 -54 -95 -59 -11 -6 -53 -32 -92 -58 -40 -26 -146 -93 -235 -150 -90 -57 -197 -125 -238 -152 -41 -27 -115 -74 -165 -105 -49 -31 -124 -78 -165 -106 -41 -27 -82 -52 -90 -57 -8 -4 -42 -25 -75 -46 -87 -56 -151 -97 -230 -148 -38 -24 -119 -76 -178 -114 -59 -38 -119 -76 -132 -84 -13 -8 -56 -35 -95 -60 -40 -25 -80 -50 -89 -55 -9 -6 -49 -32 -89 -58 -40 -26 -77 -47 -82 -47 -7 0 -10 946 -10 2760 0 2081 3 2760 12 2760 6 0 26 -11 44 -25z" />{' '}
            </g>
        </ModYoutubeIcon>
    )
}

export default withSystemProps(forwardRef(YoutubeIcon))
