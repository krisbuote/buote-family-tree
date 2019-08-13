window.onload = function () {
	var chart = new OrgChart(document.getElementById("tree"), {
				template: "olivia",
	            nodeBinding: {
	                field_0: "name",
	                field_1: "birth_year",
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
	                couple_13:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_14:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_15:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_16:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_17:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_18:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_19:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_20:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_21:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_22:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_23:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_24:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_25:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_26:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_27:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_28:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_29:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_30:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_31:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_32:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_33:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_34:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_35:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_36:{
	                	group: true,
	                    groupState: OrgChart.EXPAND,
	                    template: "group_grey"
	                },
	                couple_37:{
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
	                { id: "Ernest Buote", name: "Ernest Buote", birth_year:"1918"},
	                { id: "Clarice Buote (Peters)", name: "Clarice Buote (Peters)", birth_year:"1920"},
	                
	                // Generation 1
	                { id: "Doug Collister", pid: "Ernest Buote", tags:["couple_1"], name: "Doug Collister", birth_year:"1942"},
	                { id: "Vera Buote", pid: "Ernest Buote", tags:["couple_1"], name: "Vera Buote", birth_year:"1940"},
	                { id: "Lloyd Buote", pid: "Ernest Buote", tags:["couple_2"], name: "Lloyd Ernest Buote", birth_year:"1942"},
	                { id: "Valtraud Noack", pid: "Ernest Buote", tags:["couple_2"], name: "Valtraud Noack", birth_year:"1939"},
	                { id: "Vernon Buote", pid: "Ernest Buote", tags:["couple_3"], name: "Vernon Buote", birth_year:"1945"},
	                { id: "Marion McElroy", pid: "Ernest Buote", tags:["couple_3"], name: "Marion McElroy", birth_year:"1946"},
	                { id: "Reginald Bradley", pid: "Ernest Buote", tags:["couple_4"], name: "Reginald (Pete) Bradley", birth_year:""},
	                { id: "Geraldine Buote", pid: "Ernest Buote", tags:["couple_4"], name: "Geraldine Buote", birth_year:"1946"},
	                { id: "Bernard Doiron", pid: "Ernest Buote", tags:["couple_5"], name: "Bernard Doiron", birth_year:"1944"},
	                { id: "Beryl Buote", pid: "Ernest Buote", tags:["couple_5"], name: "Beryl Buote", birth_year:"1947"},
	                { id: "Wayne Buote", pid: "Ernest Buote", tags:["couple_6"], name: "Wayne Buote", birth_year:"1948"},
	                { id: "Lise Pare", pid: "Ernest Buote", tags:["couple_6"], name: "Lise Par'e", birth_year:"1946"},
	                { id: "Raye Buote", pid: "Ernest Buote", tags:["couple_7"], name: "Raye Buote", birth_year:"1951"},
	                { id: "Mari Perry", pid: "Ernest Buote", tags:["couple_7"], name: "Mari Perry", birth_year:"1958"},
					{ id: "Mike Lawlor", pid: "Ernest Buote", tags:["couple_8"], name: "Mike Lawlor", birth_year:""},
	                { id: "Rowena Buote", pid: "Ernest Buote", tags:["couple_8"], name: "Rowena Buote", birth_year:"1954"},
	                { id: "Parker Buote", pid: "Ernest Buote", name: "Parker Buote", birth_year:"1955"},
	                { id: "Glenn Buote", pid: "Ernest Buote", tags:["couple_9"], name: "Glenn Buote", birth_year:"1957"},
	                { id: "Jeanette Blanchard", pid: "Ernest Buote", tags:["couple_9"], name: "Jeanette Blanchard", birth_year:""},
	                { id: "Vance Buote", pid: "Ernest Buote", name: "Vance Buote", birth_year:"1958"},
	                { id: "Faren Buote", pid: "Ernest Buote", tags:["couple_10"], name: "Faren Regis Buote", birth_year: "1959"},
	                { id: "Helen Buote", pid: "Ernest Buote", tags:["couple_10"], name: "Helen Rose Unruh", birth_year:""},
	                { id: "Selwyn Buote", pid: "Ernest Buote", tags:["couple_11"], name: "Selwyn Buote", birth_year:"1961"},
	                { id: "Dottie Pineau", pid: "Ernest Buote", tags:["couple_11"], name: "Dottie Pineau", birth_year:""},
	                { id: "Trevor Buote", pid: "Ernest Buote", tags:["couple_12"], name: "Trevor Buote", birth_year:"1967"},
	                { id: "Shirley Buote", pid: "Ernest Buote", tags:["couple_12"], name: "Shirley Buote", birth_year:""},               

	                // Generation 2
	                {id: "", pid: "", name: "", birth_year:""},
	                {id: "Leland Collister", pid: "Vera Buote", name: "Leland Collister", birth_year:"1963"},
	                {id: "Garner Collister", pid: "Vera Buote", tags:["couple_13"], name: "Garner Collister", birth_year:"1965"},
	                {id: "Debbie Buote", pid: "Vera Buote", name: "Debbie Buote", tags:["couple_13"], birth_year:"1970"},
	               	{id: "Daria Collister", pid: "Vera Buote", name: "Daria Collister", tags:["couple_14"], birth_year:"1966"},
	               	{id: "Charlie Meadus", pid: "Vera Buote", name: "Charlie Meadus", tags:["couple_14"], birth_year:"1961"},
	               	{id: "Corey Collister", pid: "Vera Buote", name: "Corey Collister", tags:["couple_15"], birth_year:"1974"},
	               	{id: "Kim Roe", pid: "Vera Buote", name: "Kim Roe", tags:["couple_15"], birth_year:"1970"},

	                {id: "Bernd Buote", pid: "Lloyd Buote", name: "Bernd Buote", tags:[], birth_year:"1961"},
	                {id: "Denise Buote", pid: "Lloyd Buote", name: "Denise Buote", tags:[], birth_year:"1968"},

	                {id: "Jason Buote", pid: "Vernon Buote", name: "Jason Buote", tags:["couple_16"], birth_year:"1972"},
	                {id: "Karen Algee", pid: "Vernon Buote", name: "Karen Algee", tags:["couple_16"], birth_year:"1972"},
	                {id: "Melanie Buote", pid: "Vernon Buote", name: "Melanie Buote", tags:["couple_17"], birth_year:"1975"},
	                {id: "Simon Mills", pid: "Vernon Buote", name: "Simon Mills", tags:["couple_17"], birth_year:""},
	                {id: "Melissa Buote", pid: "Vernon Buote", name: "Melissa Buote", tags:[], birth_year:"1977"},

	                {id: "James Bradley", pid: "Geraldine Buote", name: "James Bradley", tags:["couple_18"], birth_year:"1965"},
	                {id: "Genie Yip", pid: "Geraldine Buote", name: "Genie Yip", tags:["couple_18"], birth_year:"1971"},
	                {id: "Michelle Bradley", pid: "Geraldine Buote", name: "Michelle Bradley", tags:[], birth_year:"1968"},
	                {id: "Mark Bradley", pid: "Geraldine Buote", name: "Mark Bradley", tags:["couple_19"], birth_year:"1975"},
	                {id: "Janna Mecoy", pid: "Geraldine Buote", name: "Janna Mecoy", tags:["couple_19"], birth_year:"1976"},

	                {id: "Brent Doiron", pid: "Beryl Buote", name: "Brent Doiron", tags:["couple_20"], birth_year:"1975"},
	                {id: "Anne Marie Oswald", pid: "Beryl Buote", name: "Anne Marie Oswald", tags:["couple_20"], birth_year:"1973"},
	                {id: "Brad Doiron", pid: "Beryl Buote", name: "Brad Doiron", tags:["couple_21"], birth_year:"1979"},
	                {id: "Sparrow McGowan", pid: "Beryl Buote", name: "Sparrow McGowan", tags:["couple_21"], birth_year:"1975"},

	                {id: "Christopher Buote", pid: "Wayne Buote", name: "Christopher Buote", tags:["couple_22"], birth_year:"1975"},
	                {id: "Jill MacIsaac", pid: "Wayne Buote", name: "Jill MacIsaac", tags:["couple_22"], birth_year:"1980"},
	                {id: "Patrick Buote", pid: "Wayne Buote", name: "Patrick Buote", tags:["couple_23"], birth_year:"1977"},
	                {id: "Lori Bradley", pid: "Wayne Buote", name: "Lori Bradley", tags:["couple_23"], birth_year:"1975"},

	                {id: "Darren Perry", pid: "Raye Buote", name: "Darren Perry", tags:["couple_24"], birth_year:"1975"},
	                {id: "Angela Matheson", pid: "Raye Buote", name: "Angela Matheson", tags:["couple_24"], birth_year:"1979"},

	                {id: "Aaron Buote Lawlor", pid: "Rowena Buote", name: "Aaron Buote Lawlor", tags:["couple_25"], birth_year:"1974"},
	                {id: "Heidi MacKenzie", pid: "Rowena Buote", name: "Heidi MacKenzie", tags:["couple_25"], birth_year:""},
	                {id: "Allison Lawlor", pid: "Rowena Buote", name: "Allison Lawlor", tags:[], birth_year:"1983"},
	                {id: "Perry Lawlor", pid: "Rowena Buote", name: "Perry Lawlor", tags:[], birth_year:"1984"},
	                {id: "Jamie Lawlor", pid: "Rowena Buote", name: "Jamie Lawlor", tags:["couple_26"], birth_year:"1989"},
	                {id: "Tracey Smith", pid: "Rowena Buote", name: "Tracey Smith", tags:["couple_26"], birth_year:"1989"},

	                {id: "Ashley Buote", pid: "Glenn Buote", name: "Ashley Buote", tags:["couple_27"], birth_year:"1984"},
	                {id: "Steve Rose", pid: "Glenn Buote", name: "Steve Rose", tags:["couple_27"], birth_year:"1978"},
	                {id: "Chase Buote", pid: "Glenn Buote", name: "Chase Buote", tags:["couple_28"], birth_year:"1986"},
	                {id: "Tanya Schade", pid: "Glenn Buote", name: "Tanya Schade", tags:["couple_28"], birth_year:"1990"},

	                {id: "Brad Miller", pid: "Faren Buote", name: "Brad Miller", tags:[], birth_year:"1977"},
	                {id: "Kevin Miller", pid: "Faren Buote", name: "Kevin Miller", tags:[], birth_year:"1981"},
	                {id: "Jared Buote", pid: "Faren Buote", name: "Jared Buote", birth_year: "1990"},
	                {id: "Kristopher Buote", pid: "Faren Buote", name: "Kristopher Buote", birth_year: "1994" },

	                {id: "Tyler Pineau", pid: "Selwyn Buote", name: "Tyler Pineau", tags:["Couple_29"], birth_year:"1982"},
	                {id: "Stephanie Barlow", pid: "Selwyn Buote", name: "Stephanie Barlow", tags:["Couple_29"], birth_year:"1980"},

	                {id: "Amy Buote", pid: "Trevor Buote", name: "Amy Buote", tags:["couple_30"], birth_year:"1990"},
	                {id: "Brandon Sutherland", pid: "Trevor Buote", name: "Brandon Sutherland", tags:["couple_30"], birth_year:"1986"},
	                {id: "Jessica Buote", pid: "Trevor Buote", name: "Jessica Buote", tags:[], birth_year:"1993"}


	                // Generation 3

	               
	                
	               

	                
	                

	            ]
	        });
}

