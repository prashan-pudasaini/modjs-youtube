import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModKubernetesIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const KubernetesIcon = (
    { height, width, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModKubernetesIcon
            {...props}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1165"
            height={height}
            width={width}
            data-test="kubernetes-icon"
        >
            <title>Kubernetes Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M711.000000,1166.000000 
      C474.000000,1166.000000 237.500000,1166.000000 1.000000,1166.000000 
      C1.000000,777.666687 1.000000,389.333344 1.000000,1.000000 
      C401.000000,1.000000 801.000000,1.000000 1201.000000,1.000000 
      C1201.000000,389.333344 1201.000000,777.666687 1201.000000,1166.000000 
      C1037.833374,1166.000000 874.666687,1166.000000 711.000000,1166.000000 
      M22.910858,690.250610 
      C19.446884,704.365967 15.460649,718.280945 17.808260,733.251892 
      C19.349676,743.081665 21.551498,752.720154 26.759510,760.930542 
      C33.308964,771.255798 41.278214,780.702209 48.889614,790.326355 
      C57.743668,801.521851 66.929741,812.453979 75.868896,823.583008 
      C86.026161,836.228516 96.020859,849.004517 106.176231,861.651550 
      C116.343300,874.313110 126.657089,886.856750 136.841080,899.504822 
      C147.328293,912.529419 157.703751,925.643982 168.189194,938.670044 
      C177.045609,949.672302 186.030228,960.571411 194.884445,971.575439 
      C206.698700,986.258362 218.413254,1001.021423 230.224747,1015.706604 
      C239.065964,1026.698853 248.050003,1037.576660 256.864868,1048.589722 
      C265.453003,1059.319702 273.825684,1070.222168 282.440796,1080.930176 
      C292.734375,1093.724365 303.422791,1106.207153 313.512238,1119.158081 
      C329.062683,1139.118774 349.656647,1149.761230 374.529266,1149.822754 
      C520.515625,1150.183594 666.503296,1150.014282 812.490540,1149.957886 
      C819.757690,1149.955078 827.034058,1149.476074 834.289795,1148.979614 
      C852.718750,1147.718506 868.383301,1139.999390 881.186707,1127.070679 
      C889.014099,1119.166626 895.745117,1110.158203 902.782410,1101.494751 
      C913.323303,1088.517822 923.675720,1075.387939 934.154663,1062.360352 
      C942.992432,1051.373169 951.939880,1040.473999 960.759644,1029.472534 
      C972.227478,1015.167908 983.572998,1000.765198 995.053223,986.470642 
      C1005.213745,973.819214 1015.518555,961.283752 1025.701172,948.650024 
      C1036.295044,935.506042 1046.826538,922.311951 1057.370605,909.127991 
      C1066.268799,898.001892 1075.126343,886.843384 1084.037720,875.727905 
      C1093.983887,863.321838 1103.982910,850.958191 1113.935181,838.557007 
      C1121.728882,828.845581 1129.450439,819.076111 1137.269165,809.384949 
      C1146.124756,798.408508 1155.048950,787.487183 1163.951294,776.548401 
      C1170.370117,768.661194 1176.128174,760.400208 1179.692993,750.744324 
      C1183.249146,741.111877 1185.755493,731.029541 1184.715088,720.987610 
      C1183.394409,708.243347 1180.307739,695.655579 1177.566040,683.091248 
      C1173.195312,663.062378 1168.498291,643.104431 1163.907471,623.123779 
      C1155.894653,588.249451 1147.849487,553.382629 1139.833496,518.509033 
      C1134.180542,493.914886 1128.574951,469.309814 1122.908813,444.718689 
      C1116.922729,418.738342 1110.898804,392.766693 1104.875977,366.794830 
      C1097.924927,336.820892 1090.786133,306.889221 1084.062256,276.864502 
      C1080.185181,259.551880 1073.395630,243.915634 1060.150635,231.726364 
      C1052.287354,224.489929 1043.034668,219.452515 1033.310669,214.934006 
      C1002.351135,200.547943 971.620422,185.669449 940.812805,170.957062 
      C920.019714,161.027145 899.254639,151.038452 878.461548,141.108398 
      C847.950439,126.537361 817.423950,111.998482 786.907043,97.439644 
      C765.681152,87.313339 744.466370,77.163925 723.235901,67.047356 
      C693.001160,52.640205 662.819641,38.119141 632.491333,23.911509 
      C615.717285,16.053528 598.078125,14.479839 580.412109,20.076485 
      C569.912292,23.402857 559.786499,28.072474 549.774170,32.742146 
      C526.673035,43.516361 503.751343,54.674934 480.742432,65.647385 
      C458.775696,76.122856 436.777802,86.533104 414.817291,97.021584 
      C391.677551,108.073265 368.567749,119.187645 345.441315,130.267151 
      C323.498444,140.779617 301.552307,151.285370 279.605042,161.788712 
      C256.617584,172.789841 233.633911,183.798904 210.635345,194.776779 
      C196.481171,201.532990 182.426254,208.515717 168.103897,214.896469 
      C148.852127,223.473343 132.916306,235.870728 124.560974,255.480103 
      C119.827072,266.590240 117.576462,278.817200 114.755775,290.671600 
      C108.955559,315.047943 103.542526,339.516205 97.935547,363.938721 
      C91.234848,393.125183 84.485306,422.300476 77.780624,451.486023 
      C72.131577,476.076416 66.529114,500.677460 60.882957,525.268555 
      C54.218285,554.295654 47.544800,583.320801 40.845272,612.339905 
      C34.913921,638.031738 28.941610,663.714233 22.910858,690.250610 z"
            />
            <path
                fill="#326CE5"
                opacity="1.000000"
                stroke="none"
                d="M22.949120,689.825684 
      C28.941610,663.714233 34.913921,638.031738 40.845272,612.339905 
      C47.544800,583.320801 54.218285,554.295654 60.882957,525.268555 
      C66.529114,500.677460 72.131577,476.076416 77.780624,451.486023 
      C84.485306,422.300476 91.234848,393.125183 97.935547,363.938721 
      C103.542526,339.516205 108.955559,315.047943 114.755775,290.671600 
      C117.576462,278.817200 119.827072,266.590240 124.560974,255.480103 
      C132.916306,235.870728 148.852127,223.473343 168.103897,214.896469 
      C182.426254,208.515717 196.481171,201.532990 210.635345,194.776779 
      C233.633911,183.798904 256.617584,172.789841 279.605042,161.788712 
      C301.552307,151.285370 323.498444,140.779617 345.441315,130.267151 
      C368.567749,119.187645 391.677551,108.073265 414.817291,97.021584 
      C436.777802,86.533104 458.775696,76.122856 480.742432,65.647385 
      C503.751343,54.674934 526.673035,43.516361 549.774170,32.742146 
      C559.786499,28.072474 569.912292,23.402857 580.412109,20.076485 
      C598.078125,14.479839 615.717285,16.053528 632.491333,23.911509 
      C662.819641,38.119141 693.001160,52.640205 723.235901,67.047356 
      C744.466370,77.163925 765.681152,87.313339 786.907043,97.439644 
      C817.423950,111.998482 847.950439,126.537361 878.461548,141.108398 
      C899.254639,151.038452 920.019714,161.027145 940.812805,170.957062 
      C971.620422,185.669449 1002.351135,200.547943 1033.310669,214.934006 
      C1043.034668,219.452515 1052.287354,224.489929 1060.150635,231.726364 
      C1073.395630,243.915634 1080.185181,259.551880 1084.062256,276.864502 
      C1090.786133,306.889221 1097.924927,336.820892 1104.875977,366.794830 
      C1110.898804,392.766693 1116.922729,418.738342 1122.908813,444.718689 
      C1128.574951,469.309814 1134.180542,493.914886 1139.833496,518.509033 
      C1147.849487,553.382629 1155.894653,588.249451 1163.907471,623.123779 
      C1168.498291,643.104431 1173.195312,663.062378 1177.566040,683.091248 
      C1180.307739,695.655579 1183.394409,708.243347 1184.715088,720.987610 
      C1185.755493,731.029541 1183.249146,741.111877 1179.692993,750.744324 
      C1176.128174,760.400208 1170.370117,768.661194 1163.951294,776.548401 
      C1155.048950,787.487183 1146.124756,798.408508 1137.269165,809.384949 
      C1129.450439,819.076111 1121.728882,828.845581 1113.935181,838.557007 
      C1103.982910,850.958191 1093.983887,863.321838 1084.037720,875.727905 
      C1075.126343,886.843384 1066.268799,898.001892 1057.370605,909.127991 
      C1046.826538,922.311951 1036.295044,935.506042 1025.701172,948.650024 
      C1015.518555,961.283752 1005.213745,973.819214 995.053223,986.470642 
      C983.572998,1000.765198 972.227478,1015.167908 960.759644,1029.472534 
      C951.939880,1040.473999 942.992432,1051.373169 934.154663,1062.360352 
      C923.675720,1075.387939 913.323303,1088.517822 902.782410,1101.494751 
      C895.745117,1110.158203 889.014099,1119.166626 881.186707,1127.070679 
      C868.383301,1139.999390 852.718750,1147.718506 834.289795,1148.979614 
      C827.034058,1149.476074 819.757690,1149.955078 812.490540,1149.957886 
      C666.503296,1150.014282 520.515625,1150.183594 374.529266,1149.822754 
      C349.656647,1149.761230 329.062683,1139.118774 313.512238,1119.158081 
      C303.422791,1106.207153 292.734375,1093.724365 282.440796,1080.930176 
      C273.825684,1070.222168 265.453003,1059.319702 256.864868,1048.589722 
      C248.050003,1037.576660 239.065964,1026.698853 230.224747,1015.706604 
      C218.413254,1001.021423 206.698700,986.258362 194.884445,971.575439 
      C186.030228,960.571411 177.045609,949.672302 168.189194,938.670044 
      C157.703751,925.643982 147.328293,912.529419 136.841080,899.504822 
      C126.657089,886.856750 116.343300,874.313110 106.176231,861.651550 
      C96.020859,849.004517 86.026161,836.228516 75.868896,823.583008 
      C66.929741,812.453979 57.743668,801.521851 48.889614,790.326355 
      C41.278214,780.702209 33.308964,771.255798 26.759510,760.930542 
      C21.551498,752.720154 19.349676,743.081665 17.808260,733.251892 
      C15.460649,718.280945 19.446884,704.365967 22.949120,689.825684 
      M764.333496,994.197876 
      C774.605652,1002.250061 785.914062,1003.135132 794.676514,996.572632 
      C803.619385,989.875061 807.150391,977.194336 802.197388,965.934448 
      C799.007263,958.682312 794.473511,952.010071 790.412720,945.154480 
      C782.110596,931.138672 773.439697,917.329895 765.573059,903.075867 
      C763.687927,899.660156 763.347534,894.629517 764.137634,890.712952 
      C764.935791,886.756531 765.312439,883.415649 763.403503,879.848572 
      C762.726318,878.583130 762.456604,877.099548 761.950073,875.561279 
      C763.263184,874.753967 764.386475,874.063171 765.509949,873.372559 
      C793.687012,856.051025 818.646118,834.941650 840.142639,809.789429 
      C866.960388,778.411133 887.053040,743.196899 900.057373,703.999146 
      C901.139709,700.737000 902.333191,699.458557 906.057678,700.456787 
      C908.530212,701.119507 911.992798,701.117065 914.015869,699.837341 
      C919.248291,696.527466 924.642761,695.685913 930.252441,697.453003 
      C945.616211,702.292664 960.851807,707.537659 976.187988,712.467163 
      C983.918884,714.952087 991.641541,717.685364 999.575378,719.263000 
      C1011.166199,721.567871 1023.498352,714.196594 1027.336670,703.591187 
      C1031.147339,693.062134 1026.789429,680.804382 1016.013062,675.031433 
      C1010.439758,672.045898 1003.929443,670.151306 997.634644,669.299377 
      C981.488525,667.114319 965.188232,666.084290 949.024597,664.007690 
      C939.314026,662.760071 929.393433,661.254822 923.820740,651.215149 
      C923.059814,649.844360 920.506409,649.108093 918.657410,648.775146 
      C914.517456,648.029785 913.424194,646.023438 913.996094,641.861694 
      C917.255737,618.140808 917.241272,594.319031 914.581665,570.578247 
      C908.987000,520.635925 892.604675,474.455505 865.186340,432.259216 
      C864.491943,431.190613 863.950134,430.022888 863.282471,428.801453 
      C865.449463,426.788513 867.596985,425.144653 869.276306,423.113678 
      C870.451660,421.692169 871.548950,419.790344 871.702332,418.018280 
      C872.148010,412.869812 874.037415,408.520264 878.270142,405.652374 
      C892.028809,396.330200 905.935730,387.227081 919.757141,377.997009 
      C926.246399,373.663513 933.163330,369.798065 939.005371,364.709076 
      C947.244873,357.531738 950.695557,348.071960 947.307617,337.226532 
      C944.312500,327.638672 937.084717,322.649353 927.331726,321.538757 
      C919.681335,320.667603 912.728699,323.134308 906.951782,328.052155 
      C901.390198,332.786560 896.302979,338.078735 891.015503,343.134369 
      C879.470459,354.173187 868.174133,365.492767 856.218506,376.067017 
      C853.207031,378.730530 848.155396,379.826447 843.924805,380.158569 
      C839.919617,380.472992 836.482239,381.013947 833.445862,383.695343 
      C832.235229,384.764496 830.768860,385.543945 829.587646,386.341400 
      C828.934143,386.073151 828.564209,386.019531 828.336243,385.810822 
      C827.355591,384.912781 826.407349,383.978485 825.463684,383.040924 
      C771.685120,329.610565 707.331726,298.180878 631.807617,290.089447 
      C628.539551,289.739319 627.813477,288.384399 627.594666,285.383545 
      C627.389038,282.563263 627.007996,278.954681 625.222351,277.206085 
      C620.502625,272.584198 618.571594,267.199982 619.016663,260.983124 
      C619.978638,247.544800 621.312988,234.133484 622.442078,220.706650 
      C623.331238,210.133636 625.067078,199.526047 624.749451,188.984344 
      C624.361389,176.103806 613.699341,166.202621 601.650696,165.595032 
      C590.274231,165.021332 579.020020,173.879150 577.324036,186.418640 
      C576.228516,194.518661 576.690308,203.045685 577.833313,211.187759 
      C580.334656,229.005432 583.251343,246.752914 582.239746,264.821747 
      C582.088989,267.515472 581.304443,270.685822 579.657227,272.681763 
      C575.695984,277.481750 572.993469,282.459625 574.196960,289.195831 
      C494.573700,296.930145 427.087494,329.101746 372.292725,385.774628 
      C367.882019,384.027527 364.037079,381.300323 360.157623,381.250366 
      C354.349579,381.175598 349.144775,380.433411 344.917877,376.466644 
      C333.513153,365.763824 322.296692,354.860718 310.949066,344.096619 
      C304.804382,338.267853 298.988403,331.963287 292.230896,326.940613 
      C282.468292,319.684326 269.369324,320.324097 261.135132,327.350586 
      C249.753555,337.062836 250.270737,354.954865 262.780670,365.439514 
      C268.732147,370.427582 275.593414,374.339386 282.094391,378.660736 
      C295.661682,387.679260 309.444153,396.391693 322.714783,405.825562 
      C325.758301,407.989136 327.826355,412.329346 329.009857,416.087738 
      C330.296448,420.173523 331.511688,423.854309 335.177551,426.379364 
      C336.202789,427.085571 336.932129,428.221344 337.737701,429.095490 
      C294.653381,496.137451 278.027466,568.857849 288.434845,648.143311 
      C281.137390,648.323486 276.892975,652.384705 272.807953,657.274536 
      C270.856110,659.610840 267.381531,661.533936 264.354523,661.972351 
      C246.101746,664.616272 227.785934,666.834045 209.476273,669.072205 
      C200.860474,670.125427 192.227036,671.077576 184.751114,676.001282 
      C175.437485,682.135376 171.182495,692.623962 173.878265,702.300354 
      C176.741562,712.578064 186.073608,720.542358 197.260849,719.678894 
      C206.523483,718.963989 215.725739,716.068054 224.698120,713.305115 
      C239.771591,708.663269 254.605865,703.250122 269.617157,698.397888 
      C274.385895,696.856445 279.501099,696.012329 284.140808,698.858948 
      C288.355621,701.444763 292.597656,702.375244 297.376678,700.885071 
      C298.397522,700.566833 299.602356,700.838684 300.698914,700.838684 
      C301.054077,701.619934 301.379395,702.202148 301.592316,702.822876 
      C326.602875,775.733398 371.974884,832.377441 437.542145,872.838318 
      C440.173706,874.462158 440.504120,876.029053 439.107544,878.455933 
      C436.768707,882.520203 436.665558,886.499878 437.811554,891.216858 
      C438.707001,894.902405 438.278137,899.825562 436.457825,903.097290 
      C428.380035,917.615051 419.496918,931.682007 411.093109,946.022339 
      C406.820129,953.313843 401.902283,960.467041 399.099579,968.332520 
      C392.540802,986.738831 406.402527,1003.890808 424.785706,1000.849243 
      C433.392548,999.425232 439.972290,994.469055 443.653229,986.711975 
      C447.268158,979.094116 449.843445,970.980469 452.830383,963.067566 
      C458.342316,948.465637 463.517548,933.724426 469.525970,919.330444 
      C471.048859,915.682251 474.666901,911.996460 478.250458,910.357239 
      C482.492798,908.416809 485.505066,906.176758 487.301270,902.004150 
      C487.806366,900.830688 488.711029,899.829285 489.597137,898.502197 
      C525.636230,911.970154 562.658386,919.071655 601.018433,919.171631 
      C639.520447,919.271973 676.730774,912.384155 713.049805,898.988831 
      C714.454590,901.458069 715.521606,903.713135 716.951233,905.708435 
      C717.852295,906.966125 719.141479,908.407288 720.522827,908.780334 
      C726.891724,910.500122 730.955322,914.644165 733.182007,920.549622 
      C738.923828,935.777649 744.652222,951.016113 750.009216,966.381836 
      C753.413696,976.146912 756.247437,986.095337 764.333496,994.197876 z"
            />
            <path
                fill="#FEFEFF"
                opacity="1.000000"
                stroke="none"
                d="M764.061829,993.964417 
      C756.247437,986.095337 753.413696,976.146912 750.009216,966.381836 
      C744.652222,951.016113 738.923828,935.777649 733.182007,920.549622 
      C730.955322,914.644165 726.891724,910.500122 720.522827,908.780334 
      C719.141479,908.407288 717.852295,906.966125 716.951233,905.708435 
      C715.521606,903.713135 714.454590,901.458069 713.049805,898.988831 
      C676.730774,912.384155 639.520447,919.271973 601.018433,919.171631 
      C562.658386,919.071655 525.636230,911.970154 489.597137,898.502197 
      C488.711029,899.829285 487.806366,900.830688 487.301270,902.004150 
      C485.505066,906.176758 482.492798,908.416809 478.250458,910.357239 
      C474.666901,911.996460 471.048859,915.682251 469.525970,919.330444 
      C463.517548,933.724426 458.342316,948.465637 452.830383,963.067566 
      C449.843445,970.980469 447.268158,979.094116 443.653229,986.711975 
      C439.972290,994.469055 433.392548,999.425232 424.785706,1000.849243 
      C406.402527,1003.890808 392.540802,986.738831 399.099579,968.332520 
      C401.902283,960.467041 406.820129,953.313843 411.093109,946.022339 
      C419.496918,931.682007 428.380035,917.615051 436.457825,903.097290 
      C438.278137,899.825562 438.707001,894.902405 437.811554,891.216858 
      C436.665558,886.499878 436.768707,882.520203 439.107544,878.455933 
      C440.504120,876.029053 440.173706,874.462158 437.542145,872.838318 
      C371.974884,832.377441 326.602875,775.733398 301.592316,702.822876 
      C301.379395,702.202148 301.054077,701.619934 300.698914,700.838684 
      C299.602356,700.838684 298.397522,700.566833 297.376678,700.885071 
      C292.597656,702.375244 288.355621,701.444763 284.140808,698.858948 
      C279.501099,696.012329 274.385895,696.856445 269.617157,698.397888 
      C254.605865,703.250122 239.771591,708.663269 224.698120,713.305115 
      C215.725739,716.068054 206.523483,718.963989 197.260849,719.678894 
      C186.073608,720.542358 176.741562,712.578064 173.878265,702.300354 
      C171.182495,692.623962 175.437485,682.135376 184.751114,676.001282 
      C192.227036,671.077576 200.860474,670.125427 209.476273,669.072205 
      C227.785934,666.834045 246.101746,664.616272 264.354523,661.972351 
      C267.381531,661.533936 270.856110,659.610840 272.807953,657.274536 
      C276.892975,652.384705 281.137390,648.323486 288.434845,648.143311 
      C278.027466,568.857849 294.653381,496.137451 337.737701,429.095490 
      C336.932129,428.221344 336.202789,427.085571 335.177551,426.379364 
      C331.511688,423.854309 330.296448,420.173523 329.009857,416.087738 
      C327.826355,412.329346 325.758301,407.989136 322.714783,405.825562 
      C309.444153,396.391693 295.661682,387.679260 282.094391,378.660736 
      C275.593414,374.339386 268.732147,370.427582 262.780670,365.439514 
      C250.270737,354.954865 249.753555,337.062836 261.135132,327.350586 
      C269.369324,320.324097 282.468292,319.684326 292.230896,326.940613 
      C298.988403,331.963287 304.804382,338.267853 310.949066,344.096619 
      C322.296692,354.860718 333.513153,365.763824 344.917877,376.466644 
      C349.144775,380.433411 354.349579,381.175598 360.157623,381.250366 
      C364.037079,381.300323 367.882019,384.027527 372.292725,385.774628 
      C427.087494,329.101746 494.573700,296.930145 574.196960,289.195831 
      C572.993469,282.459625 575.695984,277.481750 579.657227,272.681763 
      C581.304443,270.685822 582.088989,267.515472 582.239746,264.821747 
      C583.251343,246.752914 580.334656,229.005432 577.833313,211.187759 
      C576.690308,203.045685 576.228516,194.518661 577.324036,186.418640 
      C579.020020,173.879150 590.274231,165.021332 601.650696,165.595032 
      C613.699341,166.202621 624.361389,176.103806 624.749451,188.984344 
      C625.067078,199.526047 623.331238,210.133636 622.442078,220.706650 
      C621.312988,234.133484 619.978638,247.544800 619.016663,260.983124 
      C618.571594,267.199982 620.502625,272.584198 625.222351,277.206085 
      C627.007996,278.954681 627.389038,282.563263 627.594666,285.383545 
      C627.813477,288.384399 628.539551,289.739319 631.807617,290.089447 
      C707.331726,298.180878 771.685120,329.610565 825.463684,383.040924 
      C826.407349,383.978485 827.355591,384.912781 828.336243,385.810822 
      C828.564209,386.019531 828.934143,386.073151 829.587646,386.341400 
      C830.768860,385.543945 832.235229,384.764496 833.445862,383.695343 
      C836.482239,381.013947 839.919617,380.472992 843.924805,380.158569 
      C848.155396,379.826447 853.207031,378.730530 856.218506,376.067017 
      C868.174133,365.492767 879.470459,354.173187 891.015503,343.134369 
      C896.302979,338.078735 901.390198,332.786560 906.951782,328.052155 
      C912.728699,323.134308 919.681335,320.667603 927.331726,321.538757 
      C937.084717,322.649353 944.312500,327.638672 947.307617,337.226532 
      C950.695557,348.071960 947.244873,357.531738 939.005371,364.709076 
      C933.163330,369.798065 926.246399,373.663513 919.757141,377.997009 
      C905.935730,387.227081 892.028809,396.330200 878.270142,405.652374 
      C874.037415,408.520264 872.148010,412.869812 871.702332,418.018280 
      C871.548950,419.790344 870.451660,421.692169 869.276306,423.113678 
      C867.596985,425.144653 865.449463,426.788513 863.282471,428.801453 
      C863.950134,430.022888 864.491943,431.190613 865.186340,432.259216 
      C892.604675,474.455505 908.987000,520.635925 914.581665,570.578247 
      C917.241272,594.319031 917.255737,618.140808 913.996094,641.861694 
      C913.424194,646.023438 914.517456,648.029785 918.657410,648.775146 
      C920.506409,649.108093 923.059814,649.844360 923.820740,651.215149 
      C929.393433,661.254822 939.314026,662.760071 949.024597,664.007690 
      C965.188232,666.084290 981.488525,667.114319 997.634644,669.299377 
      C1003.929443,670.151306 1010.439758,672.045898 1016.013062,675.031433 
      C1026.789429,680.804382 1031.147339,693.062134 1027.336670,703.591187 
      C1023.498352,714.196594 1011.166199,721.567871 999.575378,719.263000 
      C991.641541,717.685364 983.918884,714.952087 976.187988,712.467163 
      C960.851807,707.537659 945.616211,702.292664 930.252441,697.453003 
      C924.642761,695.685913 919.248291,696.527466 914.015869,699.837341 
      C911.992798,701.117065 908.530212,701.119507 906.057678,700.456787 
      C902.333191,699.458557 901.139709,700.737000 900.057373,703.999146 
      C887.053040,743.196899 866.960388,778.411133 840.142639,809.789429 
      C818.646118,834.941650 793.687012,856.051025 765.509949,873.372559 
      C764.386475,874.063171 763.263184,874.753967 761.950073,875.561279 
      C762.456604,877.099548 762.726318,878.583130 763.403503,879.848572 
      C765.312439,883.415649 764.935791,886.756531 764.137634,890.712952 
      C763.347534,894.629517 763.687927,899.660156 765.573059,903.075867 
      C773.439697,917.329895 782.110596,931.138672 790.412720,945.154480 
      C794.473511,952.010071 799.007263,958.682312 802.197388,965.934448 
      C807.150391,977.194336 803.619385,989.875061 794.676514,996.572632 
      C785.914062,1003.135132 774.605652,1002.250061 764.061829,993.964417 
      M818.241821,730.711975 
      C825.918640,717.549500 832.495850,703.896423 837.446045,689.276978 
      C835.671997,688.813416 834.569458,688.434387 833.435303,688.242065 
      C793.577087,681.483337 753.733765,674.633301 713.844849,668.060486 
      C700.782654,665.908203 690.880127,671.546204 687.485046,682.345947 
      C685.477905,688.730835 686.907959,694.810608 689.397522,700.799072 
      C701.149170,729.066223 712.849487,757.354736 724.567200,785.635986 
      C728.626648,795.433472 732.683594,805.231995 736.951111,815.535828 
      C770.955139,793.619934 797.663208,765.611694 818.241821,730.711975 
      M434.409058,414.900696 
      C431.180725,417.882050 427.952362,420.863403 424.480255,424.069885 
      C450.702789,442.661041 476.199982,460.786224 501.754120,478.830688 
      C511.535400,485.737549 521.094849,493.058380 531.389038,499.113312 
      C543.954163,506.503906 559.636780,498.766632 562.040283,484.459869 
      C563.219666,477.439667 563.631165,470.269714 564.058838,463.147644 
      C565.725464,435.396240 567.272339,407.637573 568.835022,379.880005 
      C569.299988,371.620697 569.670898,363.356079 570.122742,354.339691 
      C518.590210,361.043976 473.723969,380.844147 434.409058,414.900696 
      M353.163513,559.866333 
      C349.361481,582.806885 348.539246,605.822937 351.044586,629.067444 
      C352.072449,629.021790 352.759521,629.121033 353.367615,628.945862 
      C392.681915,617.625244 432.047455,606.476562 471.265350,594.830627 
      C484.129272,591.010742 489.765350,581.879395 488.236084,570.128235 
      C487.382080,563.566406 483.344910,558.904907 478.741180,554.766235 
      C448.879395,527.920959 418.936951,501.165344 389.007324,474.395508 
      C388.217285,473.688873 387.273010,473.154694 386.409729,472.546478 
      C372.858215,491.441345 358.668640,528.702820 353.163513,559.866333 
      M822.583435,621.013733 
      C831.941284,623.669312 841.299133,626.324890 851.168030,629.125488 
      C855.866211,572.590332 843.838135,520.647156 814.859009,472.272217 
      C813.609558,473.215759 812.774841,473.757050 812.042114,474.412445 
      C792.801819,491.620453 773.539185,508.803741 754.352600,526.071472 
      C742.350342,536.873352 730.069885,547.408997 718.647461,558.799377 
      C708.758606,568.660522 711.792725,585.001343 723.973267,591.524292 
      C726.735962,593.003723 729.721558,594.186951 732.733582,595.062500 
      C762.409851,603.688293 792.113403,612.220337 822.583435,621.013733 
      M560.356384,769.880249 
      C547.177734,793.724915 533.999084,817.569580 520.583008,841.843994 
      C574.449097,859.563782 627.719177,859.388184 681.069092,842.164185 
      C680.958191,841.368103 680.980896,841.178284 680.905945,841.042419 
      C660.902344,804.786194 641.099182,768.416992 620.797180,732.328552 
      C610.111938,713.334778 588.352234,716.877136 580.405090,733.374268 
      C574.494446,745.644104 567.347656,757.318481 560.356384,769.880249 
      M373.716400,710.710571 
      C394.193268,754.027466 424.720032,788.472229 464.959869,814.919861 
      C465.611633,813.792175 465.989899,813.279419 466.226715,812.707886 
      C481.687134,775.403198 497.245270,738.138000 512.441528,700.725952 
      C514.246094,696.283325 515.185364,690.894897 514.593323,686.187927 
      C513.008362,673.585327 502.273041,666.380005 488.585724,668.562073 
      C461.178436,672.931335 433.836304,677.709656 406.470001,682.335266 
      C392.760803,684.652466 379.057617,687.005127 364.653961,689.460693 
      C367.688568,696.660950 370.512543,703.361450 373.716400,710.710571 
      M768.085693,416.400360 
      C729.072937,382.084473 683.957031,361.335327 631.569397,354.371490 
      C631.995422,361.420715 632.383118,367.526611 632.730408,373.634796 
      C634.763062,409.381775 636.734985,445.132294 638.839294,480.875061 
      C639.619385,494.125610 650.287354,503.121796 663.319946,500.928253 
      C667.864624,500.163300 672.435913,497.690552 676.290649,494.991608 
      C704.524292,475.223083 732.578857,455.198792 760.690125,435.255310 
      C765.784546,431.641083 770.879517,428.027649 776.311401,424.174683 
      C773.410156,421.426025 771.010071,419.152130 768.085693,416.400360 
      M567.247314,632.127380 
      C577.437927,637.036438 587.581665,642.047974 597.866516,646.750977 
      C599.533447,647.513184 602.128235,647.571106 603.780762,646.822083 
      C613.478271,642.425842 623.090027,637.823120 632.559143,632.956238 
      C634.282898,632.070374 635.904785,629.819336 636.395874,627.897583 
      C638.947021,617.913269 641.270020,607.862244 643.292786,597.758423 
      C643.708496,595.681702 643.182556,592.771301 641.935303,591.115356 
      C635.624390,582.736206 629.025085,574.566223 622.285278,566.525574 
      C621.109192,565.122437 618.793884,563.964783 616.977478,563.924561 
      C606.151306,563.684692 595.315247,563.704773 584.487732,563.912048 
      C582.786621,563.944580 580.592285,564.941345 579.510132,566.233032 
      C572.665527,574.402893 566.024353,582.745605 559.443726,591.131409 
      C558.508972,592.322571 557.528015,594.225769 557.820618,595.515259 
      C560.572998,607.646118 563.597656,619.715271 567.247314,632.127380 z"
            />
            <path
                fill="#336CE5"
                opacity="1.000000"
                stroke="none"
                d="M818.087280,731.043884 
      C797.663208,765.611694 770.955139,793.619934 736.951111,815.535828 
      C732.683594,805.231995 728.626648,795.433472 724.567200,785.635986 
      C712.849487,757.354736 701.149170,729.066223 689.397522,700.799072 
      C686.907959,694.810608 685.477905,688.730835 687.485046,682.345947 
      C690.880127,671.546204 700.782654,665.908203 713.844849,668.060486 
      C753.733765,674.633301 793.577087,681.483337 833.435303,688.242065 
      C834.569458,688.434387 835.671997,688.813416 837.446045,689.276978 
      C832.495850,703.896423 825.918640,717.549500 818.087280,731.043884 z"
            />
            <path
                fill="#336DE5"
                opacity="1.000000"
                stroke="none"
                d="M434.671570,414.663940 
      C473.723969,380.844147 518.590210,361.043976 570.122742,354.339691 
      C569.670898,363.356079 569.299988,371.620697 568.835022,379.880005 
      C567.272339,407.637573 565.725464,435.396240 564.058838,463.147644 
      C563.631165,470.269714 563.219666,477.439667 562.040283,484.459869 
      C559.636780,498.766632 543.954163,506.503906 531.389038,499.113312 
      C521.094849,493.058380 511.535400,485.737549 501.754120,478.830688 
      C476.199982,460.786224 450.702789,442.661041 424.480255,424.069885 
      C427.952362,420.863403 431.180725,417.882050 434.671570,414.663940 z"
            />
            <path
                fill="#336CE5"
                opacity="1.000000"
                stroke="none"
                d="M353.265930,559.447266 
      C358.668640,528.702820 372.858215,491.441345 386.409729,472.546478 
      C387.273010,473.154694 388.217285,473.688873 389.007324,474.395508 
      C418.936951,501.165344 448.879395,527.920959 478.741180,554.766235 
      C483.344910,558.904907 487.382080,563.566406 488.236084,570.128235 
      C489.765350,581.879395 484.129272,591.010742 471.265350,594.830627 
      C432.047455,606.476562 392.681915,617.625244 353.367615,628.945862 
      C352.759521,629.121033 352.072449,629.021790 351.044586,629.067444 
      C348.539246,605.822937 349.361481,582.806885 353.265930,559.447266 z"
            />
            <path
                fill="#336CE5"
                opacity="1.000000"
                stroke="none"
                d="M822.196289,620.896362 
      C792.113403,612.220337 762.409851,603.688293 732.733582,595.062500 
      C729.721558,594.186951 726.735962,593.003723 723.973267,591.524292 
      C711.792725,585.001343 708.758606,568.660522 718.647461,558.799377 
      C730.069885,547.408997 742.350342,536.873352 754.352600,526.071472 
      C773.539185,508.803741 792.801819,491.620453 812.042114,474.412445 
      C812.774841,473.757050 813.609558,473.215759 814.859009,472.272217 
      C843.838135,520.647156 855.866211,572.590332 851.168030,629.125488 
      C841.299133,626.324890 831.941284,623.669312 822.196289,620.896362 z"
            />
            <path
                fill="#336DE5"
                opacity="1.000000"
                stroke="none"
                d="M560.553894,769.569153 
      C567.347656,757.318481 574.494446,745.644104 580.405090,733.374268 
      C588.352234,716.877136 610.111938,713.334778 620.797180,732.328552 
      C641.099182,768.416992 660.902344,804.786194 680.905945,841.042419 
      C680.980896,841.178284 680.958191,841.368103 681.069092,842.164185 
      C627.719177,859.388184 574.449097,859.563782 520.583008,841.843994 
      C533.999084,817.569580 547.177734,793.724915 560.553894,769.569153 z"
            />
            <path
                fill="#336CE5"
                opacity="1.000000"
                stroke="none"
                d="M373.526428,710.386230 
      C370.512543,703.361450 367.688568,696.660950 364.653961,689.460693 
      C379.057617,687.005127 392.760803,684.652466 406.470001,682.335266 
      C433.836304,677.709656 461.178436,672.931335 488.585724,668.562073 
      C502.273041,666.380005 513.008362,673.585327 514.593323,686.187927 
      C515.185364,690.894897 514.246094,696.283325 512.441528,700.725952 
      C497.245270,738.138000 481.687134,775.403198 466.226715,812.707886 
      C465.989899,813.279419 465.611633,813.792175 464.959869,814.919861 
      C424.720032,788.472229 394.193268,754.027466 373.526428,710.386230 z"
            />
            <path
                fill="#336DE5"
                opacity="1.000000"
                stroke="none"
                d="M768.347839,416.639282 
      C771.010071,419.152130 773.410156,421.426025 776.311401,424.174683 
      C770.879517,428.027649 765.784546,431.641083 760.690125,435.255310 
      C732.578857,455.198792 704.524292,475.223083 676.290649,494.991608 
      C672.435913,497.690552 667.864624,500.163300 663.319946,500.928253 
      C650.287354,503.121796 639.619385,494.125610 638.839294,480.875061 
      C636.734985,445.132294 634.763062,409.381775 632.730408,373.634796 
      C632.383118,367.526611 631.995422,361.420715 631.569397,354.371490 
      C683.957031,361.335327 729.072937,382.084473 768.347839,416.639282 z"
            />
            <path
                fill="#336DE5"
                opacity="1.000000"
                stroke="none"
                d="M566.895508,631.964783 
      C563.597656,619.715271 560.572998,607.646118 557.820618,595.515259 
      C557.528015,594.225769 558.508972,592.322571 559.443726,591.131409 
      C566.024353,582.745605 572.665527,574.402893 579.510132,566.233032 
      C580.592285,564.941345 582.786621,563.944580 584.487732,563.912048 
      C595.315247,563.704773 606.151306,563.684692 616.977478,563.924561 
      C618.793884,563.964783 621.109192,565.122437 622.285278,566.525574 
      C629.025085,574.566223 635.624390,582.736206 641.935303,591.115356 
      C643.182556,592.771301 643.708496,595.681702 643.292786,597.758423 
      C641.270020,607.862244 638.947021,617.913269 636.395874,627.897583 
      C635.904785,629.819336 634.282898,632.070374 632.559143,632.956238 
      C623.090027,637.823120 613.478271,642.425842 603.780762,646.822083 
      C602.128235,647.571106 599.533447,647.513184 597.866516,646.750977 
      C587.581665,642.047974 577.437927,637.036438 566.895508,631.964783 z"
            />
        </ModKubernetesIcon>
    )
}

export default withSystemProps(forwardRef(KubernetesIcon))
