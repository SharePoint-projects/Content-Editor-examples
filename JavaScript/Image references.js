<script id="clientEventHandlersJS" language="javascript">
<!--
function links_onclick(menux,vObject) {
	if (document.getElementById(vObject).style.display=="block")
		{
			document.getElementById(vObject).style.display="none";
			document.getElementById(menux).innerHTML="<img id='Plus' border='0' src='http://ohowwss1-sites.oxy.com/Division/OOGC/ElkHills/dashboard/test/BannerLibrary/Expand_plus_small.gif'>";
		}
	else
		{
			document.getElementById(vObject).style.display="block";
			document.getElementById(menux).innerHTML="<img id='Minus' border='0' src='http://ohowwss1-sites.oxy.com/Division/OOGC/ElkHills/dashboard/test/BannerLibrary/Expand_minus_small.gif'>";
		}
	
}
//-->
</script>
<HTML>
  <HEAD>
  </HEAD>
  <body MS_POSITIONING="GridLayout">

    <a id="ProdOps" href="#" language="javascript" onclick="return links_onclick('menu1','ProdOpsLinks')"><span id="menu1"><img id="Plus" border="0" src="http://ohowwss1-sites.oxy.com/Division/OOGC/ElkHills/dashboard/test/BannerLibrary/Expand_plus_small.gif"></span>  Elk Hills Prod Ops Charts</a><br>
   <div id="ProdOpsLinks" style="DISPLAY: none; VISIBILITY: visible; padding-left:10px">
    &#149 <a href="http://ohowhyp4-d/Hyperion/browse/get/Development/Enterprise%20BQY%20admin%20/EHProdOpsChartsGAS?jobOutput=true&amp;bqtype=plugin" target="myframe">Gross & Net Gas Sales</a><br>
  &#149 <a href="http://ohowhyp4-d/Hyperion/browse/get/Development/Enterprise%20BQY%20admin%20/EHPro

dOpsChartsBOE?jobOutput=true&amp;bqtype=plugin" target="myframe">Gross & Net BOE Charts</a><br>
  
   </div>

  
  </body>
</HTML>