window.onload = function () {
	var chart = new OrgChart(document.getElementById("tree"), {
				template: "olivia",
	            nodeBinding: {
	                field_0: "name",
	                field_1: "birth",
	                img_0: "img"
	            },
	            tags: {
	                couple_1: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_2: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_3: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_4: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_5: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_6: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_7: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_8: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_9: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_10: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_11: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_12: {
	                    group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                "Node with unique template": {                    
	                    template: "luba"
	                }
            	},
	            nodes: [
	            	// Generation 0
	                { id: "Ernest Buote", name: "Ernest Buote", birth:"1918"},
	                { id: "Clarice Buote (Peters)", name: "Clarice Buote (Peters)", birth:"1920"},
	                // Generation 1
	                
	               	
	                { id: "Doug Collister", pid: "Ernest Buote", tags:["couple_1"], name: "Doug Collister", birth:""},
	                { id: "Vera", pid: "Ernest Buote", tags:["couple_1"], name: "Vera Buote", birth:""},
	                { id: "Lloyd", pid: "Ernest Buote", tags:["couple_2"], name: "Lloyd Ernest Buote", birth:""},
	                { id: "Valtraud", pid: "Ernest Buote", tags:["couple_2"], name: "Valtraud Noack", birth:""},
	                { id: "Vernon", pid: "Ernest Buote", tags:["couple_3"], name: "Vernon Buote", birth:""},
	                { id: "Marion McElroy", pid: "Ernest Buote", tags:["couple_3"], name: "Marion McElroy", birth:""},
	                { id: "Reginald Bradley", pid: "Ernest Buote", tags:["couple_4"], name: "Reginald (Pete) Bradley", birth:""},
	                { id: "Geraldine", pid: "Ernest Buote", tags:["couple_4"], name: "Geraldine Buote", birth:""},
	                { id: "Bernard Doiron", pid: "Ernest Buote", tags:["couple_5"], name: "Bernard Doiron", birth:""},
	                { id: "Beryl", pid: "Ernest Buote", tags:["couple_5"], name: "Beryl Buote", birth:""},
	                { id: "Wayne Buote", pid: "Ernest Buote", tags:["couple_6"], name: "Wayne Buote", birth:""},
	                { id: "Lise Pare", pid: "Ernest Buote", tags:["couple_6"], name: "Lise Par'e", birth:""},
	                { id: "Raye", pid: "Ernest Buote", tags:["couple_7"], name: "Raye Buote", birth:""},
	                { id: "Mari Perry", pid: "Ernest Buote", tags:["couple_7"], name: "Mari Perry", birth:""},
					{ id: "Mike Lawlor", pid: "Ernest Buote", tags:["couple_8"], name: "Mike Lawlor", birth:""},
	                { id: "Rowena", pid: "Ernest Buote", tags:["couple_8"], name: "Rowena Buote", birth:""},
	                { id: "Parker", pid: "Ernest Buote", name: "Parker Buote", birth:""},
	                { id: "Glenn Buote", pid: "Ernest Buote", tags:["couple_9"], name: "Glenn Buote", birth:""},
	                { id: "Jeanette Blanchard", pid: "Ernest Buote", tags:["couple_9"], name: "Jeanette Blanchard", birth:""},
	                { id: "Vance Buote", pid: "Ernest Buote", name: "Vance Buote", birth:""},
	                { id: "Faren Buote", pid: "Ernest Buote", tags:["couple_10"], name: "Faren Regis Buote", birth: ""},
	                { id: "Helen Buote", pid: "Ernest Buote", tags:["couple_10"], name: "Helen Rose Unruh", birth:""},
	                { id: "Selwyn Buote", pid: "Ernest Buote", tags:["couple_11"], name: "Selwyn Buote", birth:""},
	                { id: "Dottie Pineau", pid: "Ernest Buote", tags:["couple_11"], name: "Dottie Pineau", birth:""},
	                { id: "Trevor Buote", pid: "Ernest Buote", tags:["couple_12"], name: "Trevor Buote", birth:""},
	                { id: "Shirley Buote", pid: "Ernest Buote", tags:["couple_12"], name: "Shirley Buote", birth:""},               

	                // Generation 2
	                { id: "Jared Buote", pid: "Faren Buote", name: "Jared Buote", birth: "1990", birth:""},
	                { id: "Kristopher Buote", pid: "Faren Buote", name: "Kristopher Buote", birth: "1994" }
	                

	            ]
	        });
}

