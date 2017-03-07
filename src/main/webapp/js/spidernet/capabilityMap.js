function ViewCapability()
{
var url = path+"/service/capability/viewCCapability";
var buId = $("#BU_id").val();
var projectId = $("#project_id").val();
var empLevelId = $("#emp_level").val();
var empTypeId = $("#emp_type").val();
// var data = JSON.stringify(obj);

    $.ajax({
        type: "post",
        url: url,
        data: {buId,projectId,empLevelId,empTypeId},
        cache: false,
        async : false,
        dataType: "json",
        success: function (data)
        {
        	var capabilityMapList = data.capabilityMap;
        	var htmlInner="";
        	for(var i=0;i<capabilityMapList.length;i++){
        		var data_info = capabilityMapList[i];
        		htmlInner+="<tr>";
        		if (data_info.blockType == 1)
    			{
        			if (null != data_info.proCapabilityL[i])
    				{
        				htmlInner+= '<td blockId="'+data_info.blockId+'" blockType="'+data_info.blockType+'" name="'+data_info.name+'">'+data_info.name+'</td><td>';
        				for (var j=0;j<data_info.proCapabilityL.length;j++)
        				{
        					htmlInner+='  <input type="checkbox" proCapabilityId="'
        						+data_info.proCapabilityL[j].proCapabilityId+
        						'" url="'+data_info.proCapabilityL[j].url+'" name="'+data_info.proCapabilityL[j].name+'"/>'+data_info.proCapabilityL[j].name;
        				}
        				htmlInner+= '</td>';
    				}
        			else
        			{
        				htmlInner+= '<td blockId="'+data_info.blockId+'" blockType="'+data_info.blockType+'" name="'+data_info.name+'">'+data_info.name+'</td><td>'+''+'</td>';
        			}
    			}
        		if (data_info.blockType == 2)
    			{
        			if (null != data_info.cCapabilityL[i])
    				{
        				htmlInner+= '<td blockId="'+data_info.blockId+'" blockType="'+data_info.blockType+'" name="'+data_info.name+'">'+data_info.name+'</td><td>'
        				for (var j=0;j<data_info.cCapabilityL.length;j++)
        				{
        					htmlInner+='  <input type="checkbox" commCapabilityId="'
        						+data_info.cCapabilityL[j].commCapabilityId+
        						'" url="'+data_info.cCapabilityL[j].url+'" name="'+data_info.cCapabilityL[j].name+'"/>'+data_info.cCapabilityL[j].name;
        				}
        				htmlInner+= '</td>';
    				}
        			else
    				{
    					htmlInner+= '<td blockId="'+data_info.blockId+'" blockType="'+data_info.blockType+'" name="'+data_info.name+'">'+data_info.name+'</td><td>'+''+'</td>';
    				}
    			}
        		htmlInner+="</tr>";
        		$("#capabilityMap tbody").html(htmlInner);
            }
        	$("[type='checkbox']").attr("checked",'true');
        }
     });
}

function CanelCheckBox()
{
	$("[type='checkbox']").removeAttr("checked");
}

function SaveCapabilityMap()
{
	var cMtr = $("#capabilityMap tbody tr");
	var saveHtml="";
	
	saveHtml+="["
	for (var j=0;j<cMtr.length;j++)
	{
		var cL = cMtr.eq(j).find("td").find("input");
		if (cMtr.eq(j).find("td").eq(0).attr("blockType") == 1)
		{
			saveHtml+="{'blockId':'"+cMtr.eq(j).find("td").eq(0).attr("blockId")+"','name':'"+cMtr.eq(j).find("td").eq(0).attr("name")+"','blockType':"+cMtr.eq(j).find("td").eq(0).attr("blockType")+",'proCapabilityL':[";
			for (var k=0;k<cL.length;k++)
			{
				if (cL.eq(k).is(':checked'))
				{
					saveHtml+="{'proCapabilityId':'"+cL.eq(k).attr("proCapabilityId")+"', 'blockId':'"+cMtr.eq(j).find("td").eq(0).attr("blockId")+"', 'name':'"+cL.eq(k).attr("name")+"','url':'"+cL.eq(k).attr("url")+"'},";
				}
			}
			saveHtml+="]},";
		}
		
		if (cMtr.eq(j).find("td").eq(0).attr("blockType") == 2)
		{
			saveHtml+="{'blockId':'"+cMtr.eq(j).find("td").eq(0).attr("blockId")+"','name':'"+cMtr.eq(j).find("td").eq(0).attr("name")+"','blockType':"+cMtr.eq(j).find("td").eq(0).attr("blockType")+",'cCapabilityL':[";
			for (var k=0;k<cL.length;k++)
			{
				if (cL.eq(k).is(':checked'))
				{
				saveHtml+="{'commCapabilityId':'"+cL.eq(k).attr("commCapabilityId")+"', 'blockId':'"+cMtr.eq(j).find("td").eq(0).attr("blockId")+"', 'name':'"+cL.eq(k).attr("name")+"','url':'"+cL.eq(k).attr("url")+"'},";
				}
			}
			saveHtml+="]},";
		}
	}
	saveHtml+="]"
	return saveHtml;
}

function RegCapabilityMap()
{
	var saveC = SaveCapabilityMap();
	var buId = $("#BU_id").val();
	var projectId = $("#project_id").val();
	var empLevelId = $("#emp_level").val();
	var empTypeId = $("#emp_type").val();
	var erId = $("#er").val();
	var hrId = $("#hr").val();
	var name = $("#name").val();
	var ename = $("#ename").val();
	var cMtr = $("#capabilityMap tbody tr");
	var saveHtml="";
		
    $.ajax({
        type: "post",
        url: path+"/service/capability/regCapability",
        data: {'CapabilityMap': saveC,buId,projectId,empLevelId,empTypeId,erId,hrId,name,ename},
        cache: false,
        async : false,
        dataType: "json",
        success: function (data)
        {
        	if (data)
    		{
        		alert("注册成功!");
    		}
        	else
    		{
        		alert("注册失败!");
    		}
        }
     });
}


function ViewProC()
{
	
    $.ajax({
        type: "post",
        url: path+"/service/getProCapability",
        data: '',
        cache: false,
        async : false,
        dataType: "json",
        success: function (data)
        {
        	
        }
     });
}