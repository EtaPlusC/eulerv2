var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="manimlib.data";var REMOTE_PACKAGE_BASE="manimlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","utils",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","mobject",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","types",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","svg",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","animation",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","camera",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","scene",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","web",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","container",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","files",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib-0.1.11.dev90-py3.7.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:252767,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1047,1839,2732,3834,4767,5809,6899,8039,9176,9952,11192,12540,13728,15125,16474,17849,18992,20231,21525,22720,23959,25102,26376,27462,28687,29967,31189,32535,33898,35066,36159,37063,38157,39387,40509,41603,42797,43877,44879,46009,47211,48188,49288,50317,51375,52333,53540,54605,55809,56861,57874,58920,59917,61075,62214,63324,64276,65273,66174,67195,68199,69207,70138,71174,72195,73227,74145,75181,76082,77176,78183,79270,80485,81603,82762,83915,85063,86157,87355,88338,89485,90529,91605,92526,93666,94780,95761,96811,97938,99054,99927,101061,102100,103197,104374,105503,106724,107927,108906,109667,110507,111294,112296,113298,114416,115412,116601,117579,118650,119910,120966,121982,123178,124119,125168,126220,127357,128537,129386,130252,131345,132512,133576,134561,135702,136788,137773,138933,139850,140750,141763,142857,143820,144945,145992,147178,148142,149257,150032,150935,152032,153192,154304,155499,156711,157750,158813,159987,160979,162112,163167,164255,165262,166443,167496,168484,169507,170504,171637,172715,173903,175043,176200,177262,178382,179357,180448,181584,182538,183372,184365,185482,186480,187559,188474,189524,190355,191567,192543,193618,194678,195760,196831,197936,199196,200191,201491,202099,203035,204264,205265,206269,207293,208261,209225,210214,211211,212330,213279,214362,215176,216304,217414,218250,219300,220451,221567,222641,223613,224688,225770,226855,227869,228842,229770,230750,231908,232933,234072,235098,236171,237179,238273,239227,240364,241444,242631,243864,245299,246260,247417,248679,249940,251426],sizes:[1047,792,893,1102,933,1042,1090,1140,1137,776,1240,1348,1188,1397,1349,1375,1143,1239,1294,1195,1239,1143,1274,1086,1225,1280,1222,1346,1363,1168,1093,904,1094,1230,1122,1094,1194,1080,1002,1130,1202,977,1100,1029,1058,958,1207,1065,1204,1052,1013,1046,997,1158,1139,1110,952,997,901,1021,1004,1008,931,1036,1021,1032,918,1036,901,1094,1007,1087,1215,1118,1159,1153,1148,1094,1198,983,1147,1044,1076,921,1140,1114,981,1050,1127,1116,873,1134,1039,1097,1177,1129,1221,1203,979,761,840,787,1002,1002,1118,996,1189,978,1071,1260,1056,1016,1196,941,1049,1052,1137,1180,849,866,1093,1167,1064,985,1141,1086,985,1160,917,900,1013,1094,963,1125,1047,1186,964,1115,775,903,1097,1160,1112,1195,1212,1039,1063,1174,992,1133,1055,1088,1007,1181,1053,988,1023,997,1133,1078,1188,1140,1157,1062,1120,975,1091,1136,954,834,993,1117,998,1079,915,1050,831,1212,976,1075,1060,1082,1071,1105,1260,995,1300,608,936,1229,1001,1004,1024,968,964,989,997,1119,949,1083,814,1128,1110,836,1050,1151,1116,1074,972,1075,1082,1085,1014,973,928,980,1158,1025,1139,1026,1073,1008,1094,954,1137,1080,1187,1233,1435,961,1157,1262,1261,1486,1341],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_manimlib.data")}Module["addRunDependency"]("datafile_manimlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/manimlib/media_dir.txt",start:0,end:5,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/__init__.py",start:5,end:2008,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/config.py",start:2008,end:10755,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/ctex_template.tex",start:10755,end:11249,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/tex_template.tex",start:11249,end:11743,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/extract_scene.py",start:11743,end:16677,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/imports.py",start:16677,end:20272,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/constants.py",start:20272,end:27742,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/config_ops.py",start:27742,end:30543,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/images.py",start:30543,end:31157,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/simple_functions.py",start:31157,end:33434,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/color.py",start:33434,end:36175,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/rate_functions.py",start:36175,end:38341,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/strings.py",start:38341,end:40204,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/iterables.py",start:40204,end:43322,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/file_ops.py",start:43322,end:45327,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/paths.py",start:45327,end:46751,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/tex_file_writing.py",start:46751,end:49667,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/sounds.py",start:49667,end:50406,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/space_ops.py",start:50406,end:56274,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/bezier.py",start:56274,end:60834,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/probability.py",start:60834,end:68719,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/numbers.py",start:68719,end:73325,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/geometry.py",start:73325,end:98019,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/value_tracker.py",start:98019,end:99416,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/number_line.py",start:99416,end:105634,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/shape_matchers.py",start:105634,end:107866,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/changing.py",start:107866,end:111068,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject.py",start:111068,end:148474,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject_update_utils.py",start:148474,end:151068,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/vector_field.py",start:151068,end:162548,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_shading_utils.py",start:162548,end:163949,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_dimensions.py",start:163949,end:168231,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/coordinate_systems.py",start:168231,end:181674,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/functions.py",start:181674,end:184768,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_utils.py",start:184768,end:186340,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/matrix.py",start:186340,end:192143,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/frame.py",start:192143,end:193186,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/image_mobject.py",start:193186,end:196866,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/vectorized_mobject.py",start:196866,end:230073,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/point_cloud_mobject.py",start:230073,end:238399,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/brace.py",start:238399,end:243175,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/drawings.py",start:243175,end:276901,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/svg_mobject.py",start:276901,end:292574,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/tex_mobject.py",start:292574,end:303417,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/growing.py",start:303417,end:304668,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/numbers.py",start:304668,end:306390,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/transform.py",start:306390,end:316160,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/composition.py",start:316160,end:321098,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/movement.py",start:321098,end:323318,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/creation.py",start:323318,end:328464,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/animation.py",start:328464,end:333629,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/indication.py",start:333629,end:341506,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/specialized.py",start:341506,end:344132,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/rotation.py",start:344132,end:345550,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/fading.py",start:345550,end:349576,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/update.py",start:349576,end:350812,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/moving_camera.py",start:350812,end:353918,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/three_d_camera.py",start:353918,end:362425,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/camera.py",start:362425,end:378978,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/multi_camera.py",start:378978,end:381218,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/mapping_camera.py",start:381218,end:385721,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/vector_space_scene.py",start:385721,end:404234,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/media_dir.txt",start:404234,end:404239,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/zoomed_scene.py",start:404239,end:407752,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/sample_space_scene.py",start:407752,end:413054,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/moving_camera_scene.py",start:413054,end:414224,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/three_d_scene.py",start:414224,end:420657,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/reconfigurable_scene.py",start:420657,end:422704,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/graph_scene.py",start:422704,end:442290,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/scene.py",start:442290,end:460780,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/utils.py",start:460780,end:462453,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_scene.py",start:462453,end:464402,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/container/container.py",start:464402,end:465110,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_thought.svg",start:465110,end:466453,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_speech.svg",start:466453,end:467169,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/PiCreatures_plain.svg",start:467169,end:469006,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/SOURCES.txt",start:469006,end:471807,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/requires.txt",start:471807,end:471820,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/pbr.json",start:471820,end:471868,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/top_level.txt",start:471868,end:471877,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/entry_points.txt",start:471877,end:471918,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/dependency_links.txt",start:471918,end:471919,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/not-zip-safe",start:471919,end:471920,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev90-py3.7.egg-info/PKG-INFO",start:471920,end:480931,audio:0},{filename:"/bin/manim",start:480931,end:481103,audio:0}],remote_package_size:256863,package_uuid:"8f75a58c-e640-4364-a384-f69d0ec48875"})})();