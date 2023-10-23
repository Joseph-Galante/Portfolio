type Props = {
  classNames?: string,
};

const Projects = (props: Props) => (
  <svg viewBox="0 0 420 420" width={50} height={50} {...props}>
    <path
      fill="#1A1A1A"
      d=" M124.723808,49.846367   C129.853760,38.592392 138.426468,33.647057 150.308319,33.973351   C155.635208,34.119637 161.012955,34.350246 166.280838,33.763435   C168.407852,33.526505 170.855316,31.611313 172.209717,29.765001   C178.827469,20.743847 185.401245,11.776591 196.907501,8.523193   C201.460968,7.235700 206.061478,5.316798 210.678223,5.202184   C223.875336,4.874557 234.777664,10.437696 243.395126,20.286636   C246.297821,23.604141 248.322449,27.692383 251.241928,30.991621   C252.590210,32.515278 255.076355,33.665211 257.129608,33.810364   C262.767609,34.208927 268.454193,33.848740 274.112976,34.041130   C282.593750,34.329468 290.096436,36.955872 295.598358,43.853958   C296.218475,44.631451 297.218811,45.397766 297.317383,46.252869   C298.085693,52.918839 302.678223,53.209759 307.873535,53.032219   C313.531708,52.838867 319.256287,53.489353 324.854156,52.877369   C334.294983,51.845253 342.806030,54.318565 350.344116,59.425728   C359.056702,65.328651 364.436188,73.683311 364.915680,84.600410   C365.003326,86.596649 364.996307,88.598007 364.996399,90.597000   C364.999969,187.897995 365.023193,285.199005 364.925415,382.499908   C364.920807,387.096954 363.854401,391.695160 363.251953,396.288818   C362.428741,402.565582 357.943390,406.919037 353.605225,410.240204   C347.699341,414.761566 341.292358,419.079834 332.939606,419.066132   C252.299988,418.933777 171.660034,419.017517 91.020264,418.946472   C80.930481,418.937592 73.454987,413.580139 66.467712,406.707123   C59.221325,399.579285 57.957455,391.021088 57.962940,381.622620   C58.019421,284.821503 58.252277,188.019089 57.779510,91.220261   C57.686657,72.208061 67.949150,60.702641 83.752487,54.097385   C85.968544,53.171154 88.638702,53.083130 91.104919,53.048138   C100.100227,52.920494 109.104340,53.155968 118.090736,52.842117   C120.277870,52.765732 122.410027,51.115238 124.723808,49.846367  M336.999969,144.500000   C336.992798,127.168030 337.034332,109.835838 336.952820,92.504219   C336.923004,86.164925 334.836365,83.333618 329.666748,83.181679   C320.842529,82.922333 312.001343,82.953773 303.177734,83.215721   C301.541718,83.264282 298.993042,84.621872 298.496399,85.974205   C294.176880,97.736465 285.120361,101.938560 273.536102,101.962448   C232.039215,102.048027 190.541977,102.038742 149.045044,101.964958   C138.197906,101.945663 129.608185,97.800240 125.240013,87.252800   C123.941193,84.116653 121.839279,83.012703 118.681068,83.031136   C111.515312,83.072960 104.348671,82.978058 97.183136,83.034500   C88.631889,83.101860 87.032753,84.671051 87.030594,93.360931   C87.006927,188.520844 87.006615,283.680756 87.034210,378.840668   C87.036674,387.336365 88.741402,389.004761 97.393005,389.008026   C173.720917,389.036957 250.048843,389.035065 326.376770,389.012573   C334.210571,389.010284 336.691345,386.466553 336.961945,378.482971   C337.035278,376.318695 336.998779,374.150421 336.998810,371.983978   C337.000244,296.489319 337.000000,220.994659 336.999969,144.500000  M218.501572,38.921650   C220.229950,34.573486 219.056046,30.396606 215.640945,28.743246   C211.668884,26.820246 206.973312,28.330332 205.062790,32.145168   C203.198761,35.867119 204.392715,39.600403 208.314636,41.848560   C212.235275,44.095993 215.246017,42.147934 218.501572,38.921650  z"
    />
    <path
      fill="#1A1A1A"
      d=" M142.017426,136.689774   C144.682785,139.682175 146.996536,142.515137 149.373611,145.293976   C151.790359,148.119202 153.880600,148.280563 155.934967,144.723465   C162.677780,133.048401 172.596771,124.699738 184.314285,118.392441   C188.902588,115.922646 191.840607,117.187332 195.504868,122.496506   C198.078705,126.225739 196.592560,129.265503 193.646225,131.665756   C189.023575,135.431641 184.119705,138.850052 179.395386,142.494003   C173.063126,147.378204 169.044220,153.896683 165.904083,161.164734   C164.185165,165.143265 161.666473,168.776230 158.921402,173.595642   C163.526047,173.595642 167.419464,173.964661 171.161362,173.373886   C172.304565,173.193390 173.674973,170.432617 173.824280,168.754135   C174.221680,164.287140 173.932449,159.763733 174.064026,155.267075   C174.194687,150.801865 177.378036,146.971268 181.274597,146.336426   C184.547348,145.803223 191.225098,149.547638 191.417892,152.997269   C191.951447,162.544098 194.032120,172.377747 189.897583,181.557892   C186.906830,188.198456 181.650955,192.134018 173.803329,192.039673   C159.972122,191.873367 146.137146,192.051300 132.304443,191.968277   C122.478249,191.909302 116.076576,185.520325 116.029465,175.741379   C115.958000,160.908569 115.971603,146.074982 116.029610,131.242050   C116.056740,124.304962 122.988419,116.475578 129.872528,116.208321   C139.024261,115.853027 148.203461,115.936630 157.363037,116.156944   C162.561096,116.281960 166.808273,120.551819 166.695801,124.816193   C166.588989,128.866058 162.452820,132.659149 157.328995,132.858658   C150.671448,133.117889 143.998764,132.967194 137.333572,133.061798   C134.751022,133.098465 132.260376,133.426849 132.464478,137.290024   C135.692459,137.016006 138.693008,136.761307 142.017426,136.689774  M143.610779,165.798111   C140.397934,161.214294 137.185089,156.630493 133.972244,152.046677   C133.400604,152.309921 132.828964,152.573166 132.257324,152.836395   C132.257324,158.750046 132.084656,164.673172 132.408600,170.569000   C132.470535,171.696442 134.419632,173.536377 135.618484,173.638824   C139.977661,174.011383 144.387939,173.785858 150.396423,173.785858   C147.614258,170.513672 145.845322,168.433167 143.610779,165.798111  z"
    />
    <path
      fill="#1A1A1A"
      d=" M140.424561,314.377289   C143.578674,317.263519 146.404678,320.028992 149.154388,322.868408   C152.448608,326.270111 153.694336,326.015259 156.252808,322.081146   C163.261978,311.303284 172.235077,302.495880 184.056137,297.244446   C186.544861,296.138824 190.957916,296.644104 193.201492,298.226227   C199.503784,302.670410 196.465271,309.697540 190.540665,312.607635   C178.016922,318.759064 169.994247,328.314514 165.093674,341.070862   C164.064819,343.748993 162.019226,346.056549 160.328598,348.454834   C158.655869,350.827698 158.610291,352.541748 161.971222,352.860321   C164.119522,353.063965 166.299591,352.914215 168.464401,352.965729   C172.190750,353.054352 174.005432,351.297058 173.973846,347.531860   C173.936111,343.032715 173.950439,338.531738 174.037491,334.033386   C174.142380,328.613800 177.286392,324.806091 182.006775,324.228088   C186.529694,323.674255 190.974121,326.517578 191.431671,331.880402   C192.216965,341.084320 193.587250,350.501984 189.994003,359.510742   C188.116333,364.218323 181.671265,370.380646 175.139969,370.148621   C160.325928,369.622253 145.479996,370.050049 130.647903,369.953705   C122.206055,369.898865 116.080017,363.638855 116.035904,355.078491   C115.958611,340.079529 115.961670,325.079590 116.036179,310.080627   C116.074699,302.324982 122.594788,295.408142 130.485947,295.150146   C139.475189,294.856232 148.485535,294.910767 157.478790,295.133484   C164.233322,295.300781 166.705658,297.275848 166.873047,301.712799   C167.055466,306.548157 162.415344,311.641815 157.111298,311.868256   C150.455795,312.152374 143.781830,311.981323 137.116882,312.078491   C134.504410,312.116516 132.125259,312.587982 132.565521,316.255585   C135.247803,315.552094 137.655228,314.920685 140.424561,314.377289  M145.955612,352.989655   C147.480637,352.753510 149.005661,352.517365 151.458023,352.137634   C144.947464,344.391052 139.133347,337.473083 133.319214,330.555145   C132.882751,330.687317 132.446304,330.819489 132.009842,330.951660   C132.009842,333.875519 132.004837,336.799408 132.010696,339.723267   C132.039124,353.901245 130.899963,353.014160 145.955612,352.989655  z"
    />
    <path
      fill="#1A1A1A"
      d=" M194.685471,211.286163   C197.492340,216.191132 196.514618,220.488647 191.746277,222.718811   C182.316681,227.129120 175.105057,233.976425 169.317642,242.399109   C167.753067,244.676117 167.244736,247.650467 165.919144,250.126801   C163.905075,253.889328 161.833069,257.663757 159.347137,261.117462   C157.299149,263.962738 151.567703,263.644440 149.144516,260.715088   C145.465591,256.267670 142.012985,251.633789 138.410034,247.122391   C136.880585,245.207275 135.213898,243.401764 132.441391,241.830368   C132.441391,248.310989 132.260696,254.802139 132.636642,261.260895   C132.692871,262.227112 135.345352,263.778748 136.821701,263.808167   C147.639175,264.023529 158.463074,263.940002 169.284790,263.903687   C172.323578,263.893494 173.874359,262.225250 173.918274,259.214478   C173.981400,254.886307 174.219543,250.543655 173.962784,246.232208   C173.649689,240.975052 176.667969,237.797363 180.434998,235.182968   C183.682312,232.929276 190.200745,235.827164 191.028107,241.242401   C192.540359,251.140442 193.788528,261.362976 189.950470,271.179749   C187.403091,277.695312 182.117767,280.676483 175.482315,280.779846   C160.502426,281.013245 145.510803,281.119354 130.535522,280.774841   C122.374557,280.587097 116.053391,273.459900 116.024788,265.413483   C115.972115,250.594757 115.953369,235.775360 116.036156,220.956894   C116.086670,211.915665 121.963058,206.111969 131.048080,206.030121   C139.872131,205.950607 148.697632,205.971924 157.522125,206.018372   C165.954483,206.062759 167.880722,208.437576 166.401947,216.755127   C166.293030,217.367737 166.259384,217.993729 166.067307,219.728134   C170.968719,216.186096 175.285797,213.355072 179.270248,210.115005   C184.438843,205.912018 190.690796,206.117004 194.685471,211.286163  M152.562820,236.771484   C156.176697,232.162262 159.790573,227.553024 164.017593,222.161774   C153.685287,222.161774 144.753891,222.030319 135.835144,222.307114   C134.535248,222.347458 133.295868,224.337296 132.028488,225.425064   C132.233063,226.118042 132.437637,226.811035 132.642212,227.504028   C139.355698,223.027237 143.247437,226.930542 147.035202,231.130157   C148.689255,232.964035 150.331207,234.808838 152.562820,236.771484  z"
    />
    <path
      fill="#1A1A1A"
      d=" M227.045303,182.998871   C221.153503,182.840958 215.520584,183.946960 211.430466,178.653015   C209.134109,175.680801 208.650192,173.420547 211.245880,170.337616   C215.942947,164.758835 215.795166,164.634445 210.784912,158.783234   C208.063843,155.605484 211.054123,149.986206 216.432068,148.462387   C218.000397,148.018005 219.730133,148.027298 221.386093,148.025620   C246.700073,147.999924 272.014099,148.000656 297.328125,148.013397   C300.848816,148.015167 304.670715,147.784592 306.289642,151.841324   C307.795685,155.615265 306.826111,158.995667 303.647034,161.708237   C300.344513,164.526138 303.390442,166.371323 304.850159,168.341492   C306.912567,171.125153 308.538849,173.838638 306.727234,177.478226   C304.891449,181.166397 302.048309,182.956482 297.982330,182.950027   C296.150604,182.947113 294.318817,182.996017 292.487061,182.996323   C270.836914,182.999954 249.186752,182.998825 227.045303,182.998871  z"
    />
    <path
      fill="#1A1A1A"
      d=" M302.367126,218.493805   C306.561432,221.219925 307.873444,224.774887 306.366760,229.062653   C304.935516,233.135712 301.518799,234.033081 297.518494,234.023376   C271.729553,233.960800 245.940079,233.923630 220.151688,234.056381   C216.004013,234.077728 213.173935,232.334396 210.847916,229.288223   C208.780563,226.580795 208.805099,224.398788 211.288971,221.431366   C215.149384,216.819443 219.622971,215.825089 225.289734,215.886169   C248.081360,216.131821 270.877777,215.912582 293.670624,216.092484   C296.474945,216.114624 299.268494,217.505066 302.367126,218.493805  z"
    />
    <path
      fill="#1A1A1A"
      d=" M211.174133,139.760529   C208.196869,134.454773 210.803528,129.446045 216.806854,128.269867   C217.778305,128.079529 218.795776,128.068390 219.791992,128.068069   C245.434357,128.059708 271.076904,128.012558 296.718994,128.097214   C304.329926,128.122345 307.349243,131.235443 306.913452,137.776199   C306.653564,141.677170 304.699249,143.970505 300.911102,144.605911   C299.116821,144.906876 297.266602,144.975052 295.441589,144.976807   C270.964722,145.000443 246.487442,144.921021 222.011353,145.059814   C217.479553,145.085495 213.807541,144.132065 211.174133,139.760529  z"
    />
    <path
      fill="#1A1A1A"
      d=" M257.000000,305.990143   C270.832062,305.997742 284.164429,305.956177 297.496033,306.037231   C302.813507,306.069580 306.175659,308.994049 306.833862,313.790863   C307.582092,319.243988 305.549377,322.000336 300.050201,322.759949   C298.244293,323.009399 296.392731,322.988098 294.562012,322.989166   C270.564240,323.002930 246.566452,323.002380 222.568665,322.990051   C220.904633,322.989197 219.216187,323.024048 217.581482,322.769806   C213.494324,322.134125 209.049133,317.250092 209.362167,313.911255   C209.664276,310.688995 214.750946,306.114380 218.504501,306.081085   C231.168930,305.968689 243.834732,306.008545 257.000000,305.990143  z"
    />
    <path
      fill="#1A1A1A"
      d=" M304.334595,270.488586   C301.760437,271.155182 299.504883,271.928436 297.246735,271.936249   C272.102875,272.023071 246.955154,271.768372 221.817001,272.157135   C215.916229,272.248413 213.039627,269.037628 210.169998,265.221893   C208.277191,262.705048 212.771759,256.236816 216.989059,255.349777   C218.757996,254.977707 220.631729,255.018265 222.457916,255.016815   C247.102509,254.997269 271.747131,254.982712 296.391724,255.012924   C307.046326,255.025970 310.097229,260.701599 304.334595,270.488586  z"
    />
    <path
      fill="#1A1A1A"
      d=" M299.371033,344.158478   C305.555359,346.029297 307.471802,348.534241 306.810699,353.362000   C306.162964,358.092316 302.775909,360.957214 297.356903,360.967682   C271.525146,361.017609 245.692490,360.885315 219.862030,361.075623   C214.527679,361.114899 211.774902,357.802002 209.898544,354.089783   C207.717590,349.774963 211.687729,347.400909 214.741943,345.526917   C216.466614,344.468719 218.854523,344.095398 220.945374,344.090210   C246.942856,344.025726 272.940643,344.085602 299.371033,344.158478  z"
    />
    <path
      fill="#1A1A1A"
      d=" M261.000000,252.958527   C247.022415,252.953674 233.544617,252.904785 220.067429,252.975037   C216.675476,252.992722 214.012512,252.230103 212.059753,249.099304   C208.760681,243.810028 211.540512,237.316818 217.837448,236.197433   C218.650864,236.052826 219.494690,236.033600 220.324463,236.033295   C246.281235,236.023499 272.238129,235.982437 298.194672,236.051453   C304.387695,236.067917 307.368011,239.490677 306.892487,245.509323   C306.512238,250.322113 303.570282,252.805588 297.439392,252.878387   C285.460968,253.020630 273.479950,252.944427 261.000000,252.958527  z"
    />
    <path
      fill="#1A1A1A"
      d=" M291.899841,342.957764   C268.604767,342.953918 245.794159,342.915405 222.983810,342.975647   C218.569504,342.987305 214.884567,341.977966 212.071762,338.218842   C208.251633,333.113464 210.463913,327.180756 216.830887,326.208374   C218.627335,325.934021 220.484863,326.010040 222.314392,326.009186   C246.789932,325.998077 271.265472,325.993591 295.740997,326.006348   C304.141602,326.010742 306.721588,327.724792 306.851349,333.280304   C306.987396,339.104095 302.717896,342.702148 295.381195,342.934845   C294.383057,342.966492 293.383362,342.951111 291.899841,342.957764  z"
    />
  </svg>
);

export default Projects;
