module.exports = [
    {
        templateId: 1,
        title: "Informed Consent",
        templateType: "InformedConsent",
        totalQuestions: 1,
        totalCompletedQuestions: 0,
        formSchema: {
            consent01: {
                type: "Text",
                fieldClass: "odd",
                titleHTML: "<p>I have read this form, and I understand the test procedures I will perform. I consent to participate in the Equifit and understand that the information obtained during this evaluation may be used for statistical purposes</p> First and last initial",
                validators: ["required"]
            }
        },
        content: [
            {
                title: "Informed Consent",
                text: "The Equifit is a measure of your overall fitness level. It is not intended as a formal \“stress test.\”"
            },
            {
                title: "Explanation of the fitness evaluation",
                text: "The Equifit includes measurements of weight, percent body fat, resting heart rate, blood pressure, flexibility, muscle strength and muscle endurance. You will also be performing the following: a functional movement screen (FMS), a passive range of motion screen, and an estimated VO2Max test. We may stop any test at any time because of signs of fatigue or discomfort. During the performance of the test, a personal trainer will monitor your heart rate."
            },
            {
                title: "Risks and discomfort",
                text: "here exists the possibility of certain changes during the Equifit. They include abnormal blood pressure, fainting, disorders of the heart beat, and in very rare instances, heart attack. Every effort will be made to minimize these discomforts by a preliminary screen and by observation during the testing."
            },
            {
                title: "Benefits to be expected",
                text: "The information obtained during this test will help you gauge your fitness level and will be used to develop effective, goal-directed fitness programs."
            },
            {
                title: "Inquiries",
                text: "If you have any concerns or questions, please ask us for further explanations"
            },
            {
                title: "Freedom of consent",
                text: "Your permission to perform the Equifit is voluntary. You are free to decline consent or participation if you so desire"
            }
        ],

        parent: {
            appointmentAt: null,
            updatedAt: null,
            trainerName: 'Johnny Cash',
            trainerFacility: 'Tribeca',
            clientName: 'Donna Summer',
            clientId: 100000,
            isSigned: false,
            isSubmitted: false,
            documents: []
        }
    },

    {
        title: "Personal Information",
        templateId: 2,
        templateType: "PersonalInformation",
        totalQuestions: 5,
        totalCompletedQuestions: 2,
        "formSchema": {
            "personal01": {
                "type": "Select",
                "title": "Gender",
                "options": [
                    {
                        "val": "",
                        "label": "Select"
                    },
                    {
                        "val": "personal01-1",
                        "label": "Male"
                    },
                    {
                        "val": "personal01-2",
                        "label": "Female"
                    }
                ]
            },
            "personal02": {
                "type": "Select",
                "title": "Age",
                "options": [
                    {
                        "val": "",
                        "label": "Select"
                    },
                    {
                        "val": "personal02-1",
                        "label": "< 18"
                    },
                    {
                        "val": "personal02-2",
                        "label": "18 - 22"
                    },
                    {
                        "val": "personal02-3",
                        "label": "23 - 27"
                    },
                    {
                        "val": "personal02-4",
                        "label": "28 - 32"
                    },
                    {
                        "val": "personal02-5",
                        "label": "33 - 37"
                    },
                    {
                        "val": "personal02-6",
                        "label": "38 - 42"
                    },
                    {
                        "val": "personal02-7",
                        "label": "43 - 47"
                    },
                    {
                        "val": "personal02-8",
                        "label": "48 - 52"
                    },
                    {
                        "val": "personal02-9",
                        "label": "53 - 57"
                    },
                    {
                        "val": "personal02-10",
                        "label": "58 - 62"
                    },
                    {
                        "val": "personal02-11",
                        "label": "63 - 67"
                    },
                    {
                        "val": "personal02-12",
                        "label": "68 - 72"
                    },
                    {
                        "val": "personal02-13",
                        "label": "72 +"
                    }
                ]
            },
            "personal03": {
                "type": "Date",
                "title": "Date of Equifit",
                "yearStart": 2012,
                "yearEnd": 2020
            },
            "personal04": {
                "type": "Select",
                "title": "Club",
                "options": [
                    {
                        "val": "",
                        "label": "Select"
                    },
                    {
                        "val": "116",
                        "label": "Equinox 17th Street"
                    },
                    {
                        "val": "102",
                        "label": "Equinox 19th Street"
                    },
                    {
                        "val": "108",
                        "label": "Equinox 43rd Street"
                    },
                    {
                        "val": "109",
                        "label": "Equinox 44th Street"
                    },
                    {
                        "val": "107",
                        "label": "Equinox 50th Street"
                    },
                    {
                        "val": "106",
                        "label": "Equinox 54th Street"
                    },
                    {
                        "val": "105",
                        "label": "Equinox 63rd Street"
                    },
                    {
                        "val": "117",
                        "label": "Equinox 74th Street"
                    },
                    {
                        "val": "121",
                        "label": "Equinox 76th Street"
                    },
                    {
                        "val": "101",
                        "label": "Equinox 76th Street OLD"
                    },
                    {
                        "val": "104",
                        "label": "Equinox 85th Street"
                    },
                    {
                        "val": "103",
                        "label": "Equinox 92nd Street"
                    },
                    {
                        "val": "149",
                        "label": "Equinox Armonk"
                    },
                    {
                        "val": "303",
                        "label": "Equinox Aventura"
                    },
                    {
                        "val": "852",
                        "label": "Equinox Bay Street"
                    },
                    {
                        "val": "10101",
                        "label": "Equinox Beacon"
                    },
                    {
                        "val": "252",
                        "label": "Equinox Bethesda"
                    },
                    {
                        "val": "712",
                        "label": "Equinox Beverly Hills"
                    },
                    {
                        "val": "128",
                        "label": "Equinox Brookfield Place"
                    },
                    {
                        "val": "130",
                        "label": "Equinox Brooklyn Heights"
                    },
                    {
                        "val": "127",
                        "label": "Equinox Bryant Park"
                    },
                    {
                        "val": "203",
                        "label": "Equinox Chestnut Hill"
                    },
                    {
                        "val": "404",
                        "label": "Equinox Chicago Loop"
                    },
                    {
                        "val": "113",
                        "label": "Equinox Columbus Circle"
                    },
                    {
                        "val": "302",
                        "label": "Equinox Coral Gables"
                    },
                    {
                        "val": "999",
                        "label": "Equinox Corporate"
                    },
                    {
                        "val": "141",
                        "label": "Equinox Darien"
                    },
                    {
                        "val": "201",
                        "label": "Equinox Dartmouth"
                    },
                    {
                        "val": "11301",
                        "label": "Equinox E at Columbus Circle"
                    },
                    {
                        "val": "14801",
                        "label": "Equinox E at Greenwich CT"
                    },
                    {
                        "val": "714",
                        "label": "Equinox Encino"
                    },
                    {
                        "val": "706",
                        "label": "Equinox Fitness Club Spa"
                    },
                    {
                        "val": "715",
                        "label": "Equinox Flower Street"
                    },
                    {
                        "val": "202",
                        "label": "Equinox Franklin Street"
                    },
                    {
                        "val": "718",
                        "label": "Equinox Glendale"
                    },
                    {
                        "val": "145",
                        "label": "Equinox Great Neck"
                    },
                    {
                        "val": "112",
                        "label": "Equinox Greenwich"
                    },
                    {
                        "val": "148",
                        "label": "Equinox Greenwich CT"
                    },
                    {
                        "val": "403",
                        "label": "Equinox Highland Park"
                    },
                    {
                        "val": "451",
                        "label": "Equinox Highland Park Dallas"
                    },
                    {
                        "val": "732",
                        "label": "Equinox Irvine"
                    },
                    {
                        "val": "871",
                        "label": "Equinox Kensington"
                    },
                    {
                        "val": "401",
                        "label": "Equinox Lincoln Park"
                    },
                    {
                        "val": "144",
                        "label": "Equinox Mamaroneck"
                    },
                    {
                        "val": "711",
                        "label": "Equinox Marina del Rey"
                    },
                    {
                        "val": "125",
                        "label": "Equinox MiMA"
                    },
                    {
                        "val": "730",
                        "label": "Equinox Newport Beach"
                    },
                    {
                        "val": "402",
                        "label": "Equinox North Michigan"
                    },
                    {
                        "val": "994",
                        "label": "Equinox Online CA"
                    },
                    {
                        "val": "998",
                        "label": "Equinox Online US"
                    },
                    {
                        "val": "722",
                        "label": "Equinox Palo Alto"
                    },
                    {
                        "val": "705",
                        "label": "Equinox Palos Verdes"
                    },
                    {
                        "val": "151",
                        "label": "Equinox Paramus"
                    },
                    {
                        "val": "115",
                        "label": "Equinox Park Ave"
                    },
                    {
                        "val": "701",
                        "label": "Equinox Pasadena"
                    },
                    {
                        "val": "720",
                        "label": "Equinox Pine Street"
                    },
                    {
                        "val": "997",
                        "label": "Equinox Presale"
                    },
                    {
                        "val": "452",
                        "label": "Equinox Preston Hollow"
                    },
                    {
                        "val": "124",
                        "label": "Equinox Printing House"
                    },
                    {
                        "val": "126",
                        "label": "Equinox Rockefeller Center"
                    },
                    {
                        "val": "143",
                        "label": "Equinox Roslyn"
                    },
                    {
                        "val": "721",
                        "label": "Equinox San Mateo"
                    },
                    {
                        "val": "703",
                        "label": "Equinox Santa Monica"
                    },
                    {
                        "val": "140",
                        "label": "Equinox Scarsdale"
                    },
                    {
                        "val": "114",
                        "label": "Equinox SoHo"
                    },
                    {
                        "val": "708",
                        "label": "Equinox South Bay"
                    },
                    {
                        "val": "301",
                        "label": "Equinox South Beach"
                    },
                    {
                        "val": "204",
                        "label": "Equinox Sports Club Boston"
                    },
                    {
                        "val": "304",
                        "label": "Equinox Sports Club Brickell"
                    },
                    {
                        "val": "253",
                        "label": "Equinox Sports Club DC"
                    },
                    {
                        "val": "131",
                        "label": "Equinox Sports Club New York"
                    },
                    {
                        "val": "724",
                        "label": "Equinox Sports Club San Francisco"
                    },
                    {
                        "val": "132",
                        "label": "Equinox Sports Club Upper East Side"
                    },
                    {
                        "val": "150",
                        "label": "Equinox Summit"
                    },
                    {
                        "val": "111",
                        "label": "Equinox Tribeca"
                    },
                    {
                        "val": "251",
                        "label": "Equinox Tysons Corner"
                    },
                    {
                        "val": "723",
                        "label": "Equinox Union Street"
                    },
                    {
                        "val": "110",
                        "label": "Equinox Wall Street"
                    },
                    {
                        "val": "702",
                        "label": "Equinox West Hollywood"
                    },
                    {
                        "val": "713",
                        "label": "Equinox West LA"
                    },
                    {
                        "val": "716",
                        "label": "Equinox WestLake Village"
                    },
                    {
                        "val": "704",
                        "label": "Equinox Westwood"
                    },
                    {
                        "val": "142",
                        "label": "Equinox Woodbury"
                    },
                    {
                        "val": "707",
                        "label": "Equinox Woodland Hills"
                    },
                    {
                        "val": "851",
                        "label": "Yorkville"
                    }
                ]
            }
        },
        "data": {},
        "fieldsets": [
            {
                "legend": "Client Information",
                "fields": [
                    "personal01",
                    "personal02"
                ]
            },
            {
                "legend": "Date of Equifit",
                "fields": [
                    "personal03",
                    "personal04"
                ]
            }
        ]
    },
    {
        title: "Medical/Orthopedic HX",
        templateId: 3,
        templateType: "MedicalOrthopedic",
        totalQuestions: 11,
        totalCompletedQuestions: 0,
        "formSchema": {
            "medical01": {
                "type": "Radio",
                "title": "Do you experience an irregular or racing heart rate during rest or exercise?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical01-1"
                },
                "options": [
                    {
                        "val": "medical01-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical01-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical02": {
                "type": "Radio",
                "title": "Has a doctor ever said you have a heart condition and that you should only do physical activity recommended by a doctor?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical02-1"
                },
                "options": [
                    {
                        "val": "medical02-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical02-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical03": {
                "type": "Radio",
                "title": "Do you feel pain in your chest when you do physical activity?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical03-1"
                },
                "options": [
                    {
                        "val": "medical03-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical03-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical04": {
                "type": "Radio",
                "title": "Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical04-1"
                },
                "options": [
                    {
                        "val": "medical04-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical04-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical05": {
                "type": "Radio",
                "title": "Do you lose your balance because of dizziness or do you ever lose consciousness?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical05-1"
                },
                "options": [
                    {
                        "val": "medical05-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical05-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical06": {
                "type": "Radio",
                "title": "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical06-1"
                },
                "options": [
                    {
                        "val": "medical06-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical06-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical07": {
                "type": "Radio",
                "title": "Do you know of any other reason why you should not do physical activity?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleHelp",
                    "data-target": "help",
                    "data-condition": "medical07-1"
                },
                "options": [
                    {
                        "val": "medical07-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical07-2",
                        "label": "No"
                    }
                ],
                "help": "We recommend that you see a doctor before your Equifit or before you begin an exercise program."
            },
            "medical08": {
                "type": "Checkboxes",
                "title": "Check any injuries you have or had in the past:",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical08-dynamic1,medical08-dynamic2,medical08-dynamic3,medical08-dynamic4,medical08-dynamic5,medical08-dynamic6",
                    "data-condition": "medical08-1"
                },
                "options": [
                    {
                        "val": "medical08-1",
                        "label": "Head or Neck"
                    }
                ]
            },
            "medical08-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical08-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical08-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical08-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical08-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical08-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical08-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical08-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical08-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical08-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical09": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical09-dynamic1,medical09-dynamic2,medical09-dynamic3,medical09-dynamic4,medical09-dynamic5,medical09-dynamic6",
                    "data-condition": "medical09-1"
                },
                "options": [
                    {
                        "val": "medical09-1",
                        "label": "Shoulder"
                    }
                ]
            },
            "medical09-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical09-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical09-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical09-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical09-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical09-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical09-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical09-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical09-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical09-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical10": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical10-dynamic1,medical10-dynamic2,medical10-dynamic3,medical10-dynamic4,medical10-dynamic5,medical10-dynamic6",
                    "data-condition": "medical10-1"
                },
                "options": [
                    {
                        "val": "medical10-1",
                        "label": "Arm"
                    }
                ]
            },
            "medical10-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical10-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical10-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical10-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical10-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical10-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical10-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical10-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical10-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical10-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical11": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical11-dynamic1,medical11-dynamic2,medical11-dynamic3,medical11-dynamic4,medical11-dynamic5,medical11-dynamic6",
                    "data-condition": "medical11-1"
                },
                "options": [
                    {
                        "val": "medical11-1",
                        "label": "Wrist or Hand"
                    }
                ]
            },
            "medical11-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical11-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical11-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical11-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical11-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical11-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical11-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical11-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical11-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical11-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical12": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical12-dynamic1,medical12-dynamic2,medical12-dynamic3,medical12-dynamic4,medical12-dynamic5,medical12-dynamic6",
                    "data-condition": "medical12-1"
                },
                "options": [
                    {
                        "val": "medical12-1",
                        "label": "Back"
                    }
                ]
            },
            "medical12-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical12-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical12-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical12-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical12-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical12-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical12-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical12-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical12-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical12-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical13": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical13-dynamic1,medical13-dynamic2,medical13-dynamic3,medical13-dynamic4,medical13-dynamic5,medical13-dynamic6",
                    "data-condition": "medical13-1"
                },
                "options": [
                    {
                        "val": "medical13-1",
                        "label": "Hip"
                    }
                ]
            },
            "medical13-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical13-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical13-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical13-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical13-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical13-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical13-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical13-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical13-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical13-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical14": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical14-dynamic1,medical14-dynamic2,medical14-dynamic3,medical14-dynamic4,medical14-dynamic5,medical14-dynamic6",
                    "data-condition": "medical14-1"
                },
                "options": [
                    {
                        "val": "medical14-1",
                        "label": "Leg"
                    }
                ]
            },
            "medical14-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical14-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical14-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical14-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical14-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical14-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical14-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical14-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical14-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical14-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical15": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical15-dynamic1,medical15-dynamic2,medical15-dynamic3,medical15-dynamic4,medical15-dynamic5,medical15-dynamic6",
                    "data-condition": "medical15-1"
                },
                "options": [
                    {
                        "val": "medical15-1",
                        "label": "Knee"
                    }
                ]
            },
            "medical15-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical15-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical15-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical15-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical15-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical15-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical15-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical15-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical15-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical15-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical16": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical16-dynamic1,medical16-dynamic2,medical16-dynamic3,medical16-dynamic4,medical16-dynamic5,medical16-dynamic6",
                    "data-condition": "medical16-1"
                },
                "options": [
                    {
                        "val": "medical16-1",
                        "label": "Ankle/Foot"
                    }
                ]
            },
            "medical16-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical16-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical16-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical16-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical16-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical16-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical16-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical16-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical16-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical16-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical17": {
                "type": "Checkboxes",
                "title": "",
                "fieldClass": "bbf-checkboxes",
                "fieldAttrs": {
                    "data-bind": "toggleCheckbox",
                    "data-target": "medical17-dynamic1,medical17-dynamic2,medical17-dynamic3,medical17-dynamic4,medical17-dynamic5,medical17-dynamic6",
                    "data-condition": "medical17-1"
                },
                "options": [
                    {
                        "val": "medical17-1",
                        "label": "Any Other"
                    }
                ]
            },
            "medical17-dynamic1": {
                "type": "TextArea",
                "title": "Area (Left, Right / Upper, Mid, Lower)",
                "editorAttrs": {"maxlength": 40}
            },
            "medical17-dynamic2": {
                "type": "TextArea",
                "title": "When it happened?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical17-dynamic3": {
                "type": "TextArea",
                "title": "How did it happen?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical17-dynamic4": {
                "type": "TextArea",
                "title": "Rehab status?",
                "editorAttrs": {"maxlength": 40}
            },
            "medical17-dynamic5": {
                "type": "Radio",
                "title": "Clearance for Exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical17-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical17-dynamic5-2",
                        "label": "No"
                    }
                ]
            },
            "medical17-dynamic6": {
                "type": "Radio",
                "title": "Any pain?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical17-dynamic6-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical17-dynamic6-2",
                        "label": "No"
                    }
                ]
            },
            "medical18": {
                "type": "Radio",
                "title": "Are you over 65 and not accustomed to vigorous exercise?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical18-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical18-2",
                        "label": "No"
                    }
                ]
            },
            "medical19": {
                "type": "Radio",
                "title": "Are you currently taking any prescribed or over the counter medications?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "medical19-dynamic1",
                    "data-condition": "medical19-1"
                },
                "options": [
                    {
                        "val": "medical19-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical19-2",
                        "label": "No"
                    }
                ]
            },
            "medical19-dynamic1": {
                "type": "TextArea",
                "title": "If yes, please list below",
                "editorAttrs": {"maxlength": 100}
            },
            "medical20": {
                "type": "Radio",
                "title": "Are you diabetic? ",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical20-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical20-2",
                        "label": "No"
                    }
                ]
            },
            "medical21": {
                "type": "Radio",
                "title": "Are you pregnant?",
                "fieldClass": "bbf-radiobuttons",
                "options": [
                    {
                        "val": "medical21-1",
                        "label": "Yes"
                    },
                    {
                        "val": "medical21-2",
                        "label": "No"
                    }
                ]
            },
            "medical22": {
                "type": "TextArea",
                "title": "Do you suffer from any medical conditions that might inhibit your ability to exercise?",
                "editorAttrs": {"maxlength": 100}
            },
            "medical23": {
                "type": "Checkboxes",
                "title": "Have you ever been diagnosed with a specific medical condition? (Check all that apply)",
                "fieldClass": "bbf-checkboxes",
                "options": [
                    {
                        "val": "medical23-1",
                        "label": "Cardiovascular disease"
                    },
                    {
                        "val": "medical23-2",
                        "label": "High blood pressure"
                    },
                    {
                        "val": "medical23-3",
                        "label": "Low blood pressure"
                    },
                    {
                        "val": "medical23-4",
                        "label": "Heart attack"
                    },
                    {
                        "val": "medical23-5",
                        "label": "Heart murmur"
                    },
                    {
                        "val": "medical23-6",
                        "label": "Diabetes"
                    },
                    {
                        "val": "medical23-7",
                        "label": "Cancer"
                    },
                    {
                        "val": "medical23-8",
                        "label": "Neurological disorder"
                    },
                    {
                        "val": "medical23-9",
                        "label": "Respiratory issues"
                    },
                    {
                        "val": "medical23-10",
                        "label": "Asthma"
                    },
                    {
                        "val": "medical23-11",
                        "label": "Emphysema"
                    },
                    {
                        "val": "medical23-12",
                        "label": "Other"
                    },
                    {
                        "val": "medical23-13",
                        "label": "No history of medical conditions"
                    }
                ]
            },
            "medical24": {
                "type": "TextArea",
                "title": "Comments: Date of onset, Treatment, Physician clearance? (Y/N)",
                "editorAttrs": {"maxlength": 100}
            }
        },

        "fieldsets": [
            {
                "legend": "Heart",
                "fields": [
                    "medical01",
                    "medical02",
                    "medical03",
                    "medical04"
                ]
            },
            {
                "legend": "Balance, Bone & Joint",
                "fields": [
                    "medical05",
                    "medical06"
                ]
            },
            {
                "legend": "Body Injury",
                "fields": [
                    "medical07",
                    "medical08",
                    "medical08-dynamic1",
                    "medical08-dynamic2",
                    "medical08-dynamic3",
                    "medical08-dynamic4",
                    "medical08-dynamic5",
                    "medical08-dynamic6",
                    "medical09",
                    "medical09-dynamic1",
                    "medical09-dynamic2",
                    "medical09-dynamic3",
                    "medical09-dynamic4",
                    "medical09-dynamic5",
                    "medical09-dynamic6",
                    "medical10",
                    "medical10-dynamic1",
                    "medical10-dynamic2",
                    "medical10-dynamic3",
                    "medical10-dynamic4",
                    "medical10-dynamic5",
                    "medical10-dynamic6",
                    "medical11",
                    "medical11-dynamic1",
                    "medical11-dynamic2",
                    "medical11-dynamic3",
                    "medical11-dynamic4",
                    "medical11-dynamic5",
                    "medical11-dynamic6",
                    "medical12",
                    "medical12-dynamic1",
                    "medical12-dynamic2",
                    "medical12-dynamic3",
                    "medical12-dynamic4",
                    "medical12-dynamic5",
                    "medical12-dynamic6",
                    "medical13",
                    "medical13-dynamic1",
                    "medical13-dynamic2",
                    "medical13-dynamic3",
                    "medical13-dynamic4",
                    "medical13-dynamic5",
                    "medical13-dynamic6",
                    "medical14",
                    "medical14-dynamic1",
                    "medical14-dynamic2",
                    "medical14-dynamic3",
                    "medical14-dynamic4",
                    "medical14-dynamic5",
                    "medical14-dynamic6",
                    "medical15",
                    "medical15-dynamic1",
                    "medical15-dynamic2",
                    "medical15-dynamic3",
                    "medical15-dynamic4",
                    "medical15-dynamic5",
                    "medical15-dynamic6",
                    "medical16",
                    "medical16-dynamic1",
                    "medical16-dynamic2",
                    "medical16-dynamic3",
                    "medical16-dynamic4",
                    "medical16-dynamic5",
                    "medical16-dynamic6",
                    "medical17",
                    "medical17-dynamic1",
                    "medical17-dynamic2",
                    "medical17-dynamic3",
                    "medical17-dynamic4",
                    "medical17-dynamic5",
                    "medical17-dynamic6"
                ]
            },
            {
                "legend": "Other Medical Conditions",
                "fields": [
                    "medical18",
                    "medical19",
                    "medical19-dynamic1",
                    "medical20",
                    "medical21",
                    "medical22",
                    "medical23",
                    "medical24"
                ]
            }
        ],

        "data": {},

        "parent": {
            appointmentAt: null,
            updatedAt: null,
            trainerName: 'Johnny Cash',
            trainerFacility: 'Tribeca',
            clientName: 'Donna Summer',
            clientId: 100000,
            isSigned: false,
            isSubmitted: false,
            documents: [
                {
                    templateId: 1,
                    title: 'Informed Consent',
                    templateType: 'InformedConsent',
                    totalQuestions: 1,
                    totalCompletedQuestions: 0
                },

                {
                    title: 'Personal Information',
                    templateId: 2,
                    templateType: 'PersonalInformation',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },
                {
                    title: 'Medical / Orthopedic HX',
                    templateId: 3,
                    templateType: 'Medical',
                    totalQuestions: 5,
                    totalCompletedQuestions: 2
                },
                {
                    templateId: 4,
                    templateType: 'Lifestyle',
                    title: 'Lifestyle',
                    totalQuestions: 15,
                    totalCompletedQuestions: 10
                },

                {
                    templateId: 5,
                    templateType: 'ExerciseHistory',
                    title: 'Exercise History',
                    totalQuestions: 7,
                    totalCompletedQuestions: 6
                },
                {
                    templateId: 6,
                    templateType: 'GoalsHabits',
                    title: 'Goals & Habits',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 7,
                    templateType: 'RegenerationNutrition',
                    title: 'Regeneration & Nutrition',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 8,
                    templateType: 'BodyMeasurements',
                    title: 'Body Measurements',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 9,
                    templateType: 'FunctionalMovementScreen',
                    title: 'Functional Movement Screen',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 10,
                    templateType: 'Equistretch',
                    title: 'Equistretch',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 11,
                    templateType: 'PerformanceTesting',
                    title: 'Performance Testing',
                    totalQuestions: 12,
                    totalCompletedQuestions: 1
                },
                {
                    templateId: 12,
                    templateType: 2,
                    title: 'Physical Test',
                    totalQuestions: 5,
                    totalCompletedQuestions: 5
                }
            ]
        }
    },
    {
        templateId: 4,
        templateType: "Lifestyle",
        title: "Lifestyle",
        totalQuestions: 15,
        totalCompletedQuestions: 0,
        "formSchema": {
            "lifestyle01": {
                "type": "Select",
                "title": "On a scale of 1-5, on average how stressful is your day?",
                "options": [
                    {
                        "val": "lifestyle01-1",
                        "label": "1 - No Stress"
                    },
                    {
                        "val": "lifestyle01-2",
                        "label": "2"
                    },
                    {
                        "val": "lifestyle01-3",
                        "label": "3 - Average"
                    },
                    {
                        "val": "lifestyle01-4",
                        "label": "4"
                    },
                    {
                        "val": "lifestyle01-5",
                        "label": "5 - Very Stressed"
                    }
                ]
            },
            "lifestyle02": {
                "type": "Select",
                "title": "Do you feel exercise helps you in managing your stress?",
                "options": [
                    {
                        "val": "lifestyle02-1",
                        "label": "1 - Not at all"
                    },
                    {
                        "val": "lifestyle02-2",
                        "label": "2"
                    },
                    {
                        "val": "lifestyle02-3",
                        "label": "3 - It helps"
                    },
                    {
                        "val": "lifestyle02-4",
                        "label": "4"
                    },
                    {
                        "val": "lifestyle02-5",
                        "label": "5 - It really helps"
                    }
                ]
            }
        },
        "fieldsets": [
            {
                "legend": "Stress",
                "fields": [
                    "lifestyle01",
                    "lifestyle02"
                ]
            }
        ],
        "data": {}
    },
    {
        templateId: 5,
        templateType: 2,
        title: "Exercise History",
        totalQuestions: 7,
        totalCompletedQuestions: 0,

        formSchema: {
            "exercisehistory01": {
                "type": "TextArea",
                "title": "Tell me about your current exercise routine?",
                "editorAttrs": {
                    "maxlength": 100
                }
            },
            "exercisehistory02": {
                "type": "Select",
                "title": "How many times per week on average do you engage in physical activity/exercise?",
                "options": [
                    {
                        "val": "exercisehistory02-1",
                        "label": "0"
                    },
                    {
                        "val": "exercisehistory02-2",
                        "label": "1 - 2"
                    },
                    {
                        "val": "exercisehistory02-3",
                        "label": "2 - 3"
                    },
                    {
                        "val": "exercisehistory02-4",
                        "label": "3 - 4"
                    },
                    {
                        "val": "exercisehistory02-5",
                        "label": "4 - 5 or more"
                    }
                ]
            },
            "exercisehistory03": {
                "type": "Checkbox",
                "title": "Which days do you prefer to exercise?",
                "options": [
                    {
                        "val": "exercisehistory03-1",
                        "label": "Sunday"
                    },
                    {
                        "val": "exercisehistory03-2",
                        "label": "Monday"
                    },
                    {
                        "val": "exercisehistory03-3",
                        "label": "Tuesday"
                    },
                    {
                        "val": "exercisehistory03-4",
                        "label": "Wednesday"
                    },
                    {
                        "val": "exercisehistory03-5",
                        "label": "Thursday"
                    },
                    {
                        "val": "exercisehistory03-6",
                        "label": "Friday"
                    },
                    {
                        "val": "exercisehistory03-7",
                        "label": "Saturday"
                    }
                ]
            },
            "exercisehistory04": {
                "type": "Checkbox",
                "title": "Which days do you prefer to exercise?",
                "options": [
                    {
                        "val": "exercisehistory04-1",
                        "label": "Early morning"
                    },
                    {
                        "val": "exercisehistory04-2",
                        "label": "Late morning"
                    },
                    {
                        "val": "exercisehistory04-3",
                        "label": "Early afternoon"
                    },
                    {
                        "val": "exercisehistory04-4",
                        "label": "Late afternoon"
                    },
                    {
                        "val": "exercisehistory04-5",
                        "label": "Evening"
                    }
                ]
            },
            "exercisehistory05": {
                "type": "Radio",
                "title": "Do you or have you ever strength trained? (free weights / machines / body wieght)",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "exercisehistory05-dynamic1,exercisehistory05-dynamic2,exercisehistory05-dynamic3,exercisehistory05-dynamic4,exercisehistory05-dynamic5,exercisehistory05-dynamic6,exercisehistory05-dynamic7,exercisehistory05-dynamic8,exercisehistory05-dynamic9,exercisehistory05-dynamic10",
                    "data-condition": "exercisehistory05-1"
                },
                "options": [
                    {
                        "val": "exercisehistory05-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory05-2",
                        "label": "No"
                    }
                ]
            },
            "exercisehistory05-dynamic1": {
                "type": "TextArea",
                "title": "How would you describe your strength training routine?",
                "editorAttrs": {
                    "maxlength": 100
                }
            },
            "exercisehistory05-dynamic2": {
                "type": "Select",
                "title": "How many times per week on average do you strength train?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic2-1",
                        "label": "0"
                    },
                    {
                        "val": "exercisehistory05-dynamic2-2",
                        "label": "1 - 2"
                    },
                    {
                        "val": "exercisehistory05-dynamic2-3",
                        "label": "2 - 3"
                    },
                    {
                        "val": "exercisehistory05-dynamic2-4",
                        "label": "3 - 4"
                    },
                    {
                        "val": "exercisehistory05-dynamic2-5",
                        "label": "4 - 5 or more"
                    }
                ]
            },
            "exercisehistory05-dynamic3": {
                "type": "Checkbox",
                "title": "How long each time?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic3-1",
                        "label": "30 minutes"
                    },
                    {
                        "val": "exercisehistory05-dynamic3-2",
                        "label": "1 hour"
                    },
                    {
                        "val": "exercisehistory05-dynamic3-3",
                        "label": "1.5 hours"
                    },
                    {
                        "val": "exercisehistory05-dynamic3-4",
                        "label": "2 hours"
                    },
                    {
                        "val": "exercisehistory05-dynamic3-5",
                        "label": "More than 2 hours"
                    }
                ]
            },
            "exercisehistory05-dynamic4": {
                "type": "Checkbox",
                "title": "How do you choose your strength exercises?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic4-1",
                        "label": "How I feel that day"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-2",
                        "label": "By day of week"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-3",
                        "label": "By body part"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-4",
                        "label": "I do what my friend does"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-5",
                        "label": "I stick to the machines"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-6",
                        "label": "Watching others"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-7",
                        "label": "Dependent on trainer/group fitness instructor"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-8",
                        "label": "Videos"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-9",
                        "label": "Internet/Magazine articles"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-10",
                        "label": "Random/spontaneous decision"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-11",
                        "label": "By the way the gym is laid out"
                    },
                    {
                        "val": "exercisehistory05-dynamic4-12",
                        "label": "Remember what I did for sport"
                    }
                ]
            },
            "exercisehistory05-dynamic5": {
                "type": "Radio",
                "title": "Are they always in the same order?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory05-dynamic5-2",
                        "label": "No"
                    },
                    {
                        "val": "exercisehistory05-dynamic5-3",
                        "label": "Sometimes"
                    }
                ]
            },
            "exercisehistory05-dynamic6": {
                "type": "TextArea",
                "title": "When do you choose to change exercises or the order of exercises?",
                "editorAttrs": {
                    "maxlength": 50
                }
            },
            "exercisehistory05-dynamic7": {
                "type": "Checkbox",
                "title": "On average how many sets?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic7-1",
                        "label": "0"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-2",
                        "label": "1"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-3",
                        "label": "2"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-4",
                        "label": "3"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-5",
                        "label": "4"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-6",
                        "label": "5"
                    },
                    {
                        "val": "exercisehistory05-dynamic7-7",
                        "label": "6"
                    }
                ]
            },
            "exercisehistory05-dynamic8": {
                "type": "Checkbox",
                "title": "On average how many reps?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic8-1",
                        "label": "0"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-2",
                        "label": "1 - 3"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-3",
                        "label": "4 - 6"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-4",
                        "label": "7 - 10"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-5",
                        "label": "11 - 14"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-6",
                        "label": "15 - 20"
                    },
                    {
                        "val": "exercisehistory05-dynamic8-7",
                        "label": "More than 20"
                    }
                ]
            },
            "exercisehistory05-dynamic9": {
                "type": "Select",
                "title": "How much rest between sets?",
                "options": [
                    {
                        "val": "exercisehistory05-dynamic9-1",
                        "label": "No rest"
                    },
                    {
                        "val": "exercisehistory05-dynamic9-2",
                        "label": "Less than 30 seconds"
                    },
                    {
                        "val": "exercisehistory05-dynamic9-3",
                        "label": "30 - 60 seconds"
                    },
                    {
                        "val": "exercisehistory05-dynamic9-4",
                        "label": "1 - 2 minutes"
                    },
                    {
                        "val": "exercisehistory05-dynamic9-5",
                        "label": "Complete rest"
                    }
                ]
            },
            "exercisehistory05-dynamic10": {
                "type": "TextArea",
                "title": "How do you choose the weight/load?",
                "editorAttrs": {
                    "maxlength": 50
                }
            },
            "exercisehistory06": {
                "type": "Radio",
                "title": "Do you or have you ever done cardiovascular exercise?",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "exercisehistory06-dynamic1,exercisehistory06-dynamic2,exercisehistory06-dynamic3,exercisehistory06-dynamic4,exercisehistory06-dynamic5,exercisehistory06-dynamic6",
                    "data-condition": "exercisehistory06-1"
                },
                "options": [
                    {
                        "val": "exercisehistory06-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory06-2",
                        "label": "No"
                    }
                ]
            },
            "exercisehistory06-dynamic1": {
                "type": "Select",
                "title": "How many times per week on average?",
                "options": [
                    {
                        "val": "exercisehistory06-dynamic1-1",
                        "label": "0"
                    },
                    {
                        "val": "exercisehistory06-dynamic1-2",
                        "label": "1 - 2"
                    },
                    {
                        "val": "exercisehistory06-dynamic1-3",
                        "label": "2 - 3"
                    },
                    {
                        "val": "exercisehistory06-dynamic1-4",
                        "label": "3 - 4"
                    },
                    {
                        "val": "exercisehistory06-dynamic1-5",
                        "label": "4 - 5 or more"
                    }
                ]
            },
            "exercisehistory06-dynamic2": {
                "type": "Checkbox",
                "title": "How long each time?",
                "options": [
                    {
                        "val": "exercisehistory06-dynamic2-1",
                        "label": "Less than 30 minutes"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-2",
                        "label": "30 minutes"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-3",
                        "label": "45 minutes"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-4",
                        "label": "1 hour"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-5",
                        "label": "1.5 hours"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-6",
                        "label": "2 hours"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-7",
                        "label": "More than 2 hours"
                    },
                    {
                        "val": "exercisehistory06-dynamic2-8",
                        "label": "None"
                    }
                ]
            },
            "exercisehistory06-dynamic3": {
                "type": "Checkbox",
                "title": "Which activity or activities do you choose?",
                "options": [
                    {
                        "val": "exercisehistory06-dynamic3-1",
                        "label": "Treadmill walking"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-2",
                        "label": "Treadmill running"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-3",
                        "label": "Elliptical"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-4",
                        "label": "Bike"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-5",
                        "label": "Rowing"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-6",
                        "label": "Outdoor walking"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-7",
                        "label": "Outdoor running"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-8",
                        "label": "Versaclimber"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-9",
                        "label": "Battle ropes"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-10",
                        "label": "Jump ropes"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-11",
                        "label": "Arm ergometer"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-12",
                        "label": "Stairmill"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-13",
                        "label": "Swimming"
                    },
                    {
                        "val": "exercisehistory06-dynamic3-14",
                        "label": "Hiking"
                    }
                ]
            },
            "exercisehistory06-dynamic4": {
                "type": "TextArea",
                "title": "How do you choose your intensity level?",
                "editorAttrs": {
                    "maxlength": 50
                }
            },
            "exercisehistory06-dynamic5": {
                "type": "Radio",
                "title": "Do you usually keep the same intensity level?",
                "options": [
                    {
                        "val": "exercisehistory06-dynamic5-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory06-dynamic5-2",
                        "label": "No"
                    },
                    {
                        "val": "exercisehistory06-dynamic5-3",
                        "label": "Sometimes"
                    }
                ]
            },
            "exercisehistory06-dynamic6": {
                "type": "TextArea",
                "title": "How do you decide to change the intensity of your cardiovascular exercise?",
                "editorAttrs": {
                    "maxlength": 50
                }
            },
            "exercisehistory07": {
                "type": "Select",
                "title": "How long have you been doing this workout you just described?",
                "options": [
                    {
                        "val": "exercisehistory07-1",
                        "label": "Less than 3 months"
                    },
                    {
                        "val": "exercisehistory07-2",
                        "label": "3 - 6 months"
                    },
                    {
                        "val": "exercisehistory07-3",
                        "label": "7 - 11 months"
                    },
                    {
                        "val": "exercisehistory07-4",
                        "label": "1 - 3 years"
                    },
                    {
                        "val": "exercisehistory07-5",
                        "label": "Longer than 3 years"
                    }
                ]
            },
            "exercisehistory08": {
                "type": "Radio",
                "title": "Are you still seeing results from this routine?",
                "options": [
                    {
                        "val": "exercisehistory08-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory08-2",
                        "label": "No"
                    },
                    {
                        "val": "exercisehistory08-3",
                        "label": "Somewhat"
                    }
                ]
            },
            "exercisehistory09": {
                "type": "TextArea",
                "title": "What do you feel is the biggest contributor to you getting results or not getting results?",
                "editorAttrs": {
                    "maxlength": 100
                }
            },
            "exercisehistory10": {
                "type": "Checkbox",
                "title": "Do you work out with anyone or do you work out alone?",
                "options": [
                    {
                        "val": "exercisehistory10-1",
                        "label": "I work out alone"
                    },
                    {
                        "val": "exercisehistory10-2",
                        "label": "I work out with a friend(s)"
                    },
                    {
                        "val": "exercisehistory10-3",
                        "label": "I take group fitness classes"
                    },
                    {
                        "val": "exercisehistory10-4",
                        "label": "I work with a trainer"
                    }
                ]
            },
            "exercisehistory11": {
                "type": "Radio",
                "title": "Do you ever take group fitness classes?",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "exercisehistory11-dynamic1,exercisehistory11-dynamic2",
                    "data-condition": "exercisehistory11-1"
                },
                "options": [
                    {
                        "val": "exercisehistory11-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory11-2",
                        "label": "No"
                    }
                ]
            },
            "exercisehistory11-dynamic1": {
                "type": "Checkbox",
                "title": "How do you choose which ones to take?",
                "options": [
                    {
                        "val": "exercisehistory11-dynamic1-1",
                        "label": "The class that fits my schedule"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-2",
                        "label": "The class that is the most enjoyable"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-3",
                        "label": "The class that is the hardest"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-4",
                        "label": "Based on the instructor I prefer"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-5",
                        "label": "Based on how my body feels that day"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-6",
                        "label": "Based on injury status"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-7",
                        "label": "Based on trainer recommendations"
                    },
                    {
                        "val": "exercisehistory11-dynamic1-8",
                        "label": "The class that matches my fitness goals"
                    }
                ]
            },
            "exercisehistory11-dynamic2": {
                "type": "TextArea",
                "title": "Which classes do you prefer?",
                "editorAttrs": {
                    "maxlength": 100
                }
            },
            "exercisehistory12": {
                "type": "Radio",
                "title": "Have you ever worked with a trainer before?",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "exercisehistory12-dynamic1,exercisehistory12-dynamic2,exercisehistory12-dynamic3",
                    "data-condition": "exercisehistory12-1"
                },
                "options": [
                    {
                        "val": "exercisehistory12-1",
                        "label": "Yes"
                    },
                    {
                        "val": "exercisehistory12-2",
                        "label": "No"
                    }
                ]
            },
            "exercisehistory12-dynamic1": {
                "type": "TextArea",
                "title": "When was the last time you worked with a trainer?",
                "editorAttrs": {
                    "maxlength": 50
                }
            },
            "exercisehistory12-dynamic2": {
                "type": "Select",
                "title": "For how long did you work with a trainer?",
                "options": [
                    {
                        "val": "exercisehistory12-dynamic2-1",
                        "label": "Less than 3 months"
                    },
                    {
                        "val": "exercisehistory12-dynamic2-2",
                        "label": "3 - 6  months"
                    },
                    {
                        "val": "exercisehistory12-dynamic2-3",
                        "label": "7 - 11 months"
                    },
                    {
                        "val": "exercisehistory12-dynamic2-4",
                        "label": "1 - 3 years"
                    },
                    {
                        "val": "exercisehistory12-dynamic2-5",
                        "label": "Longer than 3 years"
                    },
                    {
                        "val": "exercisehistory12-dynamic2-6",
                        "label": "I have never worked with a trainer"
                    }
                ]
            },
            "exercisehistory12-dynamic3": {
                "type": "TextArea",
                "title": "What did you like about working with a trainer? What did you dislike?",
                "editorAttrs": {
                    "maxlength": 100
                }
            },
            "exercisehistory13": {
                "type": "Checkbox",
                "title": "Do you have any exercises or types of training that you are interested in trying?",
                "options": [
                    {
                        "val": "exercisehistory13-1",
                        "label": "Kettlebells"
                    },
                    {
                        "val": "exercisehistory13-2",
                        "label": "ViPR"
                    },
                    {
                        "val": "exercisehistory13-3",
                        "label": "TRX"
                    },
                    {
                        "val": "exercisehistory13-4",
                        "label": "Machines"
                    },
                    {
                        "val": "exercisehistory13-5",
                        "label": "Free Weights"
                    },
                    {
                        "val": "exercisehistory13-6",
                        "label": "Animal Flow"
                    },
                    {
                        "val": "exercisehistory13-7",
                        "label": "Progressive Body Weight Training"
                    },
                    {
                        "val": "exercisehistory13-8",
                        "label": "Power / Explosive Training"
                    },
                    {
                        "val": "exercisehistory13-9",
                        "label": "Sprinting"
                    },
                    {
                        "val": "exercisehistory13-10",
                        "label": "Boxing"
                    },
                    {
                        "val": "exercisehistory13-11",
                        "label": "Open to try anything"
                    }
                ]
            },
            "exercisehistory14": {
                "type": "TextArea",
                "title": "Do you have any sports that you used to play or would like to start playing?",
                "editorAttrs": {
                    "maxlength": 100
                }
            }
        },
        "data": {},
        "fieldsets": [
            {
                "legend": "General questions about your exercise history",
                "fields": [
                    "exercisehistory01",
                    "exercisehistory02",
                    "exercisehistory03",
                    "exercisehistory04",
                    "exercisehistory05",
                    "exercisehistory05-dynamic1",
                    "exercisehistory05-dynamic2",
                    "exercisehistory05-dynamic3",
                    "exercisehistory05-dynamic4",
                    "exercisehistory05-dynamic5",
                    "exercisehistory05-dynamic6",
                    "exercisehistory05-dynamic7",
                    "exercisehistory05-dynamic8",
                    "exercisehistory05-dynamic9",
                    "exercisehistory05-dynamic10",
                    "exercisehistory06",
                    "exercisehistory06-dynamic1",
                    "exercisehistory06-dynamic2",
                    "exercisehistory06-dynamic3",
                    "exercisehistory06-dynamic4",
                    "exercisehistory06-dynamic5",
                    "exercisehistory06-dynamic6",
                    "exercisehistory07",
                    "exercisehistory08",
                    "exercisehistory09",
                    "exercisehistory10",
                    "exercisehistory11",
                    "exercisehistory11-dynamic1",
                    "exercisehistory11-dynamic2",
                    "exercisehistory12",
                    "exercisehistory12-dynamic1",
                    "exercisehistory12-dynamic2",
                    "exercisehistory12-dynamic3",
                    "exercisehistory13",
                    "exercisehistory14"
                ]
            }
        ],
        "content": null
    },

    {
        "templateId": 6,
        "templateType": 2,
        title: "Goals & Habits",
        "idPrefix": "goals-habits-",
        "totalQuestions": 11,
        "totalCompletedQuestions": 0,

        "formSchema": {
            "goals01": {
                "type": "Checkboxes",
                "title": "Is there anything you would specifically like to learn about yourself during the Equifit?",
                "fieldClass": "bbf-checkboxes",
                "options": [
                    {
                        "val": "goals01-1",
                        "label": "Nutrition strategies"
                    },
                    {
                        "val": "goals01-2",
                        "label": "How to get back in shape"
                    },
                    {
                        "val": "goals01-3",
                        "label": "How to gain muscle"
                    },
                    {
                        "val": "goals01-4",
                        "label": "How to decrease bodyfat"
                    },
                    {
                        "val": "goals01-5",
                        "label": "How to improve at my sport"
                    },
                    {
                        "val": "goals01-6",
                        "label": "How to increase flexibility/mobility"
                    },
                    {
                        "val": "goals01-7",
                        "label": "How to improve my posture"
                    },
                    {
                        "val": "goals01-8",
                        "label": "How to reduce pain associated with injury"
                    },
                    {
                        "val": "goals01-9",
                        "label": "My muscle imbalances"
                    },
                    {
                        "val": "goals01-10",
                        "label": "My fitness level in relation to others/norms"
                    }
                ]
            },
            "goals01-dynamic1": {
                "type": "TextArea",
                "title": "Other",
                "editorAttrs": {"maxlength": 50}
            },
            "goals02": {
                "type": "TextArea",
                "title": "Fitness goal #1",
                "editorAttrs": {"maxlength": 100}
            },
            "goals03": {
                "type": "TextArea",
                "title": "Fitness goal #2",
                "editorAttrs": {"maxlength": 100}
            },
            "goals04": {
                "type": "TextArea",
                "title": "Fitness goal #3",
                "editorAttrs": {"maxlength": 100}
            },
            "goals05": {
                "type": "Checkboxes",
                "title": "Fitness goal summary (Check all that apply based on prior responses)",
                "fieldClass": "bbf-checkboxes",
                "options": [
                    {
                        "val": "goals05-1",
                        "label": "Lose weight"
                    },
                    {
                        "val": "goals05-2",
                        "label": "Lose bodyfat"
                    },
                    {
                        "val": "goals05-3",
                        "label": "Gain lean mass"
                    },
                    {
                        "val": "goals05-4",
                        "label": "Increase strength"
                    },
                    {
                        "val": "goals05-5",
                        "label": "Get toned"
                    },
                    {
                        "val": "goals05-6",
                        "label": "Increase cardiovascular fitness"
                    },
                    {
                        "val": "goals05-7",
                        "label": "Increase Flexibility"
                    },
                    {
                        "val": "goals05-8",
                        "label": "Improve overall health"
                    },
                    {
                        "val": "goals05-9",
                        "label": "Prepare for an athletic event"
                    },
                    {
                        "val": "goals05-10",
                        "label": "Prepare for a life event"
                    },
                    {
                        "val": "goals05-11",
                        "label": "Maintain current fitness and health"
                    }
                ]
            },
            "goals05-dynamic1": {
                "type": "TextArea",
                "title": "Other",
                "editorAttrs": {"maxlength": 50}
            },
            "goals06": {
                "type": "Select",
                "title": "How long have you wanted to achieve your number one goal?",
                "options": [
                    {
                        "val": "",
                        "label": "Select"
                    },
                    {
                        "val": "goals06-1",
                        "label": "Less than 3 months"
                    },
                    {
                        "val": "goals06-2",
                        "label": "3 - 6 months"
                    },
                    {
                        "val": "goals06-3",
                        "label": "7 - 11 months"
                    },
                    {
                        "val": "goals06-4",
                        "label": "Longer than 3 years"
                    }
                ]
            },
            "goals06-dynamic1": {
                "type": "TextArea",
                "title": "Other",
                "editorAttrs": {"maxlength": 25}
            },
            "goals07": {
                "type": "Radio",
                "title": "Have you ever achieved this goal in the past?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "goals07-dynamic1",
                    "data-condition": "goals07-1"
                },
                "options": [
                    {
                        "val": "goals07-1",
                        "label": "Yes"
                    },
                    {
                        "val": "goals07-2",
                        "label": "No"
                    },
                    {
                        "val": "goals07-3",
                        "label": "Partially"
                    }
                ]
            },
            "goals07-dynamic1": {
                "type": "TextArea",
                "title": "If so, when and how?",
                "editorAttrs": {"maxlength": 50}
            },
            "goals08": {
                "type": "Select",
                "title": "When would you like to achieve it by?",
                "options": [
                    {
                        "val": "",
                        "label": "Select"
                    },
                    {
                        "val": "goals08-1",
                        "label": "1 - 2 months"
                    },
                    {
                        "val": "goals08-2",
                        "label": "3 - 4 months"
                    },
                    {
                        "val": "goals08-3",
                        "label": "5 - 6 months"
                    },
                    {
                        "val": "goals08-4",
                        "label": "7 months - 1 year"
                    }
                ]
            },
            "goals08-dynamic1": {
                "type": "TextArea",
                "title": "Other",
                "editorAttrs": {"maxlength": 25}
            },
            "goals09": {
                "type": "TextArea",
                "title": "Why would you like to achieve this goal?",
                "editorAttrs": {"maxlength": 100}
            },
            "goals10": {
                "type": "Checkboxes",
                "title": "What is the biggest challenge getting in your way of achieving each of these goals?",
                "fieldClass": "bbf-checkboxes",
                "options": [
                    {
                        "val": "goals10-1",
                        "label": "Poor Nutritional Habits"
                    },
                    {
                        "val": "goals10-2",
                        "label": "Alcohol intake"
                    },
                    {
                        "val": "goals10-3",
                        "label": "Travel"
                    },
                    {
                        "val": "goals10-4",
                        "label": "Lack of exercise consistency"
                    },
                    {
                        "val": "goals10-5",
                        "label": "Lack of time"
                    },
                    {
                        "val": "goals10-6",
                        "label": "Lack of motivation"
                    },
                    {
                        "val": "goals10-7",
                        "label": "Family responsibilities"
                    },
                    {
                        "val": "goals10-8",
                        "label": "Injury"
                    },
                    {
                        "val": "goals10-9",
                        "label": "Lack of fitness knowledge"
                    },
                    {
                        "val": "goals10-10",
                        "label": "Sedentary nature of job"
                    },
                    {
                        "val": "goals10-11",
                        "label": "Job Schedule / Commitments"
                    }
                ]
            },
            "goals10-dynamic1": {
                "type": "TextArea",
                "title": "Other",
                "editorAttrs": {"maxlength": 50}
            },
            "goals11": {
                "type": "TextArea",
                "title": "Notes on Challenges",
                "editorAttrs": {"maxlength": 2000}
            },
            "goals12": {
                "type": "TextArea",
                "title": "What strategies in the past have you utilized to overcome these challenges, if any?",
                "editorAttrs": {"maxlength": 100}
            },
            "goals13": {
                "type": "TextArea",
                "title": "What is one behavior / habit you can start now to work toward your goal?",
                "editorAttrs": {"maxlength": 100}
            },
            "goals14": {
                "type": "Radio",
                "title": "On a scale of 1 - 5, how committed are you to each goal?",
                "fieldClass": "bbf-radiobuttons",
                "fieldAttrs": {
                    "data-bind": "toggleRadio",
                    "data-target": "goals14-dynamic1",
                    "data-condition": "goals14-1,goals14-2,goals14-3,goals14-4"
                },
                "options": [
                    {
                        "val": "goals14-1",
                        "label": "1"
                    },
                    {
                        "val": "goals14-2",
                        "label": "2"
                    },
                    {
                        "val": "goals14-3",
                        "label": "3"
                    },
                    {
                        "val": "goals14-4",
                        "label": "4"
                    },
                    {
                        "val": "goals14-5",
                        "label": "5"
                    }
                ]
            },
            "goals14-dynamic1": {
                "type": "TextArea",
                "title": "If you are not a 5 out 5 committed, what would make you a 5?",
                "editorAttrs": {"maxlength": 100}
            },
            "goals15": {
                "type": "TextArea",
                "title": "Notes / Strategy Ideas",
                "editorAttrs": {"maxlength": 2000}
            },
            "goals16": {
                "type": "TextArea",
                "title": "Before we get started with assessments, do you have any additional comments or is there anything we did not cover?",
                "editorAttrs": {"maxlength": 100}
            }
        },

        "fieldsets": [
            {
                "legend": "Goals & Habits",
                "fields": [
                    "goals01",
                    "goals01-dynamic1",
                    "goals02",
                    "goals03",
                    "goals04",
                    "goals05",
                    "goals05-dynamic1",
                    "goals06",
                    "goals06-dynamic1",
                    "goals07",
                    "goals07-dynamic1",
                    "goals08",
                    "goals08-dynamic1",
                    "goals09",
                    "goals10",
                    "goals10-dynamic1",
                    "goals11",
                    "goals12",
                    "goals13",
                    "goals14",
                    "goals14-dynamic1",
                    "goals15",
                    "goals16"
                ]
            }
        ],
        "data": {}

    },
    {
        "templateId": 7,
        "templateType": "RegenerationNutrition",
        title: "Regeneration & Nutrition",
        "idPrefix": "regeneration-nutrition-",
        "totalQuestions": 4,
        "totalCompletedQuestions": 0,
        "formSchema": {
            "regeneration01": {
                type: 'Text',
                title: "Number of times you eat per day and basic content of diet?",
                options: null,
                help: null
            },
            "regeneration02": {
                type: 'Radio',
                title: "Do you feel you need to change anything with regards to your nutrition?",
                options: [
                    {val: "regeneration02-1", label: "Yes"},
                    {val: "regeneration02-2", label: "No"}
                ],
                help: null
            },
            "regeneration03": {
                "type": "Select",
                title: "What types of liquids do you typically drink?",
                options: [
                    {val: "regeneration03-1", label: "Water"},
                    {val: "regeneration03-2", label: "Coffee"},
                    {val: "regeneration03-3", label: "Tea"},
                    {val: "regeneration03-4", label: "Soda"},
                    {val: "regeneration03-5", label: "Wine"},
                    {val: "regeneration03-6", label: "Beer"},
                    {val: "regeneration03-7", label: "Liquor / Mixed Drink"},
                    {val: "regeneration03-8", label: "Coconut Water"},
                    {val: "regeneration03-9", label: "Fruit Juice"},
                    {val: "regeneration03-10", label: "Pressed Juices"},
                    {val: "regeneration03-11", label: "Protein Shakes"},
                    {val: "regeneration03-12", label: "Milk (including soy, almond, dairy, etc.)"},
                    {val: "regeneration03-13", label: "Energy Drinks"},
                    {val: "regeneration03-14", label: "Sports Drinks"},
                    {val: "regeneration03-15", label: "Other"}
                ],
                help: null
            },
            "regeneration04": {
                "type": "Select",
                title: "How much water do you take in daily?",
                options: [
                    {val: "regeneration04-1", label: "None"},
                    {val: "regeneration04-2", label: "1 - 2 glasses"},
                    {val: "regeneration04-3", label: "3 - 4 glasses"},
                    {val: "regeneration04-4", label: "5 - 6 glasses"},
                    {val: "regeneration04-5", label: "7 - 8 glasses"},
                    {val: "regeneration04-6", label: "9 - 10 glasses"},
                    {val: "regeneration04-7", label: "11 - 12 glasses"},
                    {val: "regeneration04-8", label: "More than 12 glasses"}
                ],
                help: "One glass = 8 fluid ounces"
            }
        },
        "fieldsets": [
            {
                "legend": "Regeneration & Nutrition",
                "fields": [
                    "regeneration01",
                    "regeneration02",
                    "regeneration03",
                    "regeneration04"
                ]
            }
        ],
        "data": {}
    },
    {
        "templateId": 8,
        "templateType": "BodyMeasurements",
        title: "Body Measurements",
        "idPrefix": "body-measurements-",
        "totalQuestions": 17,
        "totalCompletedQuestions": 0,
        "formSchema": {
            "bodymeasurements01": {
                type: 'Text',
                title: "Height",
                options: null,
                help: "ft, in"
            },
            "bodymeasurements02": {
                "type": "Number",
                title: "Weight",
                options: null,
                help: "lbs"
            },
            "bodymeasurements03": {
                "type": "Number",
                title: "Resting Heart Rate",
                options: null,
                help: "bpm"
            },
            "bodymeasurements04": {
                "type": "Number",
                title: "Blood Pressure",
                options: null,
                help: null
            },
            "bodymeasurements05": {
                "type": "Number",
                title: "Right Upper Arm Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements06": {
                "type": "Number",
                title: "Right Upper Arm Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements07": {
                "type": "Number",
                title: "Left Upper Arm Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements08": {
                "type": "Number",
                title: "Chest Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements09": {
                "type": "Number",
                title: "Waist Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements10": {
                "type": "Number",
                title: "Abdominal Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements11": {
                "type": "Number",
                title: "Hip Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements12": {
                "type": "Number",
                title: "Right Mid Thigh Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements13": {
                "type": "Number",
                title: "Left Mid Thigh Circumference",
                options: null,
                help: "in"
            },
            "bodymeasurements14": {
                "type": "Number",
                title: "Skinfold Measurement - Tricep",
                options: null,
                help: "mm"
            },
            "bodymeasurements15": {
                "type": "Number",
                title: "Skinfold Measurement - Abdomen",
                options: null,
                help: "mm"
            },
            "bodymeasurements16": {
                "type": "Number",
                title: "Skinfold Measurement - Suprailiac",
                options: null,
                help: "mm"
            },
            "bodymeasurements17": {
                "type": "Number",
                title: "Skinfold Measurement - Mid Thigh",
                options: null,
                help: "mm"
            }
        },
        "fieldsets": [
            {
                "legend": "Body Measurements",
                "fields": [
                    "bodymeasurements01",
                    "bodymeasurements02",
                    "bodymeasurements03",
                    "bodymeasurements04",
                    "bodymeasurements05",
                    "bodymeasurements06",
                    "bodymeasurements07",
                    "bodymeasurements08",
                    "bodymeasurements09",
                    "bodymeasurements10",
                    "bodymeasurements11",
                    "bodymeasurements12",
                    "bodymeasurements13",
                    "bodymeasurements14",
                    "bodymeasurements15",
                    "bodymeasurements16",
                    "bodymeasurements17"
                ]
            }
        ],
        "data": {}
    },
    {
        templateId: 9,
        templateType: "Fms",
        title: "Functional Movement Screen",
        totalQuestions: 24,
        totalCompletedQuestions: 0,
        formSchema: {
            fms101: {
                type: 'Radio',
                title: "Hand",
                options: [
                    {val: "fms101-1", label: "Right"},
                    {val: "fms101-2", label: "Left"}
                ]
            },

            fms102: {
                type: 'Radio',
                title: "Swing",
                options: [
                    {val: "fms102-1", label: "Right"},
                    {val: "fms102-2", label: "Left"}
                ]
            },

            fms103: {
                type: 'Radio',
                title: "Throw",
                options: [
                    {val: "fms103-1", label: "Right"},
                    {val: "fms103-2", label: "Left"}
                ]
            },

            fms104: {
                type: 'Radio',
                title: "Leg",
                options: [
                    {val: "fms104-1", label: "Right"},
                    {val: "fms104-2", label: "Left"}
                ]
            },

            fms01: {
                type: "Select",
                title: "Overhead Deep Squat",
                options: [
                    {val: "fms01-1", label: "0"},
                    {val: "fms01-2", label: "1"},
                    {val: "fms01-3", label: "2"},
                    {val: "fms01-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'

            },
            fms02: {
                type: "TextArea",
                title: "Notes"
            },
            fms03: {
                type: "Select",
                title: "Hurdle Step (Right)",
                options: [
                    {val: "fms03-1", label: "0"},
                    {val: "fms03-2", label: "1"},
                    {val: "fms03-3", label: "2"},
                    {val: "fms03-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms04: {
                type: "Select",
                title: "Hurdle Step (Left)",
                options: [
                    {val: "fms04-1", label: "0"},
                    {val: "fms04-2", label: "1"},
                    {val: "fms04-3", label: "2"},
                    {val: "fms04-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms05: {
                type: "Select",
                title: "Floor to Tibial Tuberosity",
                options: [
                    {val: "fms05-1", label: "+"},
                    {val: "fms05-2", label: "-"}
                ],
                editorClass: 'input-small',
                fieldAttrs: {
                    "data-bind": "checkbox",
                    "data-condition": "legExtra"
                }
            },
            fms06: {
                type: "TextArea",
                title: "Notes"
            },
            fms07: {
                type: "Select",
                title: "In-line Lunge (Right)",
                options: [
                    {val: "fms07-1", label: "0"},
                    {val: "fms07-2", label: "1"},
                    {val: "fms07-3", label: "2"},
                    {val: "fms07-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms08: {
                type: "Select",
                title: "In-line Lunge (Left)",
                options: [
                    {val: "fms08-1", label: "0"},
                    {val: "fms08-2", label: "1"},
                    {val: "fms08-3", label: "2"},
                    {val: "fms08-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms09: {
                type: "TextArea",
                title: "Notes"
            },
            fms10: {
                type: "Select",
                title: "Shoulder Mobility (Right)",
                options: [
                    {val: "fms10-1", label: "0"},
                    {val: "fms10-2", label: "1"},
                    {val: "fms10-3", label: "2"},
                    {val: "fms10-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms11: {
                type: "Select",
                title: "Shoulder Mobility (Left)",
                options: [
                    {val: "fms11-1", label: "0"},
                    {val: "fms11-2", label: "1"},
                    {val: "fms11-3", label: "2"},
                    {val: "fms11-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms12: {
                type: "Select",
                title: "Distal Wrist Crease to tip of 3rd finger",
                options: [
                    {val: "fms12-1", label: "0"},
                    {val: "fms12-2", label: "1"},
                    {val: "fms12-3", label: "2"},
                    {val: "fms12-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms13: {
                type: "Select",
                title: "Pain Clearance (Was there pain?)",
                options: [
                    {val: "fms13-1", label: "+"},
                    {val: "fms13-2", label: "-"}
                ],
                editorClass: 'input-small'
            },
            fms14: {
                type: "TextArea",
                title: "Notes"
            },
            fms15: {
                type: "Select",
                title: "Active Straight Leg Raise (Right)",
                options: [
                    {val: "fms15-1", label: "0"},
                    {val: "fms15-2", label: "1"},
                    {val: "fms15-3", label: "2"},
                    {val: "fms15-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms16: {
                type: "Select",
                title: "Active Straight Leg Raise (Left)",
                options: [
                    {val: "fms16-1", label: "0"},
                    {val: "fms16-2", label: "1"},
                    {val: "fms16-3", label: "2"},
                    {val: "fms16-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms17: {
                type: "TextArea",
                title: "Notes"
            },
            fms18: {
                type: "Select",
                title: "Trunk Stability Pushup",
                options: [
                    {val: "fms18-1", label: "0"},
                    {val: "fms18-2", label: "1"},
                    {val: "fms18-3", label: "2"},
                    {val: "fms18-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms19: {
                type: "Select",
                title: "Pain Clearance (Was there pain?)",
                options: [
                    {val: "fms19-1", label: "+"},
                    {val: "fms19-2", label: "-"}
                ],
                editorClass: 'input-small'
            },
            fms20: {
                type: "TextArea",
                title: "Notes"
            },
            fms21: {
                type: "Select",
                title: "Rotary Stability (Right)",
                options: [
                    {val: "fms21-1", label: "0"},
                    {val: "fms21-2", label: "1"},
                    {val: "fms21-3", label: "2"},
                    {val: "fms21-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms22: {
                type: "Select",
                title: "Rotary Stability (Left)",
                options: [
                    {val: "fms22-1", label: "0"},
                    {val: "fms22-2", label: "1"},
                    {val: "fms22-3", label: "2"},
                    {val: "fms22-4", label: "3"}
                ],
                editorClass: 'input-small',
                help: 'points'
            },
            fms23: {
                type: "Select",
                title: "Pain Clearance (Was there pain?)",
                options: [
                    {val: "fms23-1", label: "+"},
                    {val: "fms23-2", label: "-"}
                ],
                editorClass: 'input-small'
            },
            fms24: {
                type: "TextArea",
                title: "Notes"
            }
        },
        fieldsets: [
            {
                legend: "Functional Movement",
                fields: [
                    "fms101",
                    "fms102",
                    "fms103",
                    "fms104",
                    "fms01",
                    "fms02",
                    "fms03",
                    "fms04",
                    "fms05",
                    "fms06",
                    "fms07",
                    "fms08",
                    "fms09",
                    "fms10",
                    "fms11",
                    "fms12",
                    "fms13",
                    "fms14",
                    "fms15",
                    "fms16",
                    "fms17",
                    "fms18",
                    "fms19",
                    "fms20",
                    "fms21",
                    "fms22",
                    "fms23",
                    "fms24"
                ]
            }
        ],
        "data": {}
    },

    {
        templateId: 10,
        templateType: "Equistretch",
        title: "Equistretch",
        totalQuestions: 14,
        totalCompletedQuestions: 0,
        formSchema: {
            equistretch01: {
                type: 'Radio',
                title: "Seated Cervical Flexion",
                options: [
                    {val: "equistretch01-1", label: "Excellent"},
                    {val: "equistretch01-2", label: "Satisifactory"},
                    {val: "equistretch01-3", label: "Needs Improvement"}
                ]
            },

            equistretch01a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },

            equistretch02: {
                type: 'Radio',
                title: "Seated Cervical Extension",
                options: [
                    {val: "equistretch02-1", label: "Excellent"},
                    {val: "equistretch02-2", label: "Satisifactory"},
                    {val: "equistretch02-3", label: "Needs Improvement"}
                ]
            },

            equistretch02a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },

            equistretch03: {
                type: 'Radio',
                title: "Seated Cervical Rotation",
                options: [
                    {val: "equistretch03-1", label: "Excellent"},
                    {val: "equistretch03-2", label: "Satisifactory"},
                    {val: "equistretch03-3", label: "Needs Improvement"}
                ]
            },

            equistretch03a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },

            equistretch04: {
                type: 'Radio',
                title: "Seated Cervical Side Bending",
                options: [
                    {val: "equistretch04-1", label: "Excellent"},
                    {val: "equistretch04-2", label: "Satisifactory"},
                    {val: "equistretch04-3", label: "Needs Improvement"}
                ]
            },
            equistretch04a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch05: {
                type: 'Radio',
                title: "Seated Shoulder Elevation",
                options: [
                    {val: "equistretch05-1", label: "Excellent"},
                    {val: "equistretch05-2", label: "Satisifactory"},
                    {val: "equistretch05-3", label: "Needs Improvement"}
                ]
            },
            equistretch05a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch06: {
                type: 'Radio',
                title: "Seated Hands Behind Head",
                options: [
                    {val: "equistretch06-1", label: "Excellent"},
                    {val: "equistretch06-2", label: "Satisifactory"},
                    {val: "equistretch06-3", label: "Needs Improvement"}
                ]
            },

            equistretch06a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },

            equistretch07: {
                type: 'Radio',
                title: "Seated Hands Behind Back",
                options: [
                    {val: "equistretch07-1", label: "Excellent"},
                    {val: "equistretch07-2", label: "Satisifactory"},
                    {val: "equistretch07-3", label: "Needs Improvement"}
                ]
            },
            equistretch07a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },

            equistretch08: {
                type: 'Radio',
                title: "Supine Lat Length",
                options: [
                    {val: "equistretch08-1", label: "Excellent"},
                    {val: "equistretch08-2", label: "Satisifactory"},
                    {val: "equistretch08-3", label: "Needs Improvement"}
                ]
            },
            equistretch08a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch09: {
                type: 'Radio',
                title: "Supine Hip Flexor",
                options: [
                    {val: "equistretch09-1", label: "Excellent"},
                    {val: "equistretch09-2", label: "Satisifactory"},
                    {val: "equistretch09-3", label: "Needs Improvement"}
                ]
            },
            equistretch09a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch10: {
                type: 'Radio',
                title: "Supine Adductor Length",
                options: [
                    {val: "equistretch10-1", label: "Excellent"},
                    {val: "equistretch10-2", label: "Satisifactory"},
                    {val: "equistretch10-3", label: "Needs Improvement"}
                ]
            },
            equistretch10a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch11: {
                type: 'Radio',
                title: "Supine Gastroc Length",
                options: [
                    {val: "equistretch11-1", label: "Excellent"},
                    {val: "equistretch11-2", label: "Satisifactory"},
                    {val: "equistretch11-3", label: "Needs Improvement"}
                ]
            },
            equistretch11a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch12: {
                type: 'Radio',
                title: "Side Lying ITB Length (Ober's Test)",
                options: [
                    {val: "equistretch12-1", label: "Excellent"},
                    {val: "equistretch12-2", label: "Satisifactory"},
                    {val: "equistretch12-3", label: "Needs Improvement"}
                ]
            },
            equistretch12a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch13: {
                type: 'Radio',
                title: "Prone Knee Flexion (Ely's Test)",
                options: [
                    {val: "equistretch13-1", label: "Excellent"},
                    {val: "equistretch13-2", label: "Satisifactory"},
                    {val: "equistretch13-3", label: "Needs Improvement"}
                ]
            },
            equistretch13a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            },
            equistretch14: {
                type: 'Radio',
                title: "Prone Soleus Lenght",
                options: [
                    {val: "equistretch14-1", label: "Excellent"},
                    {val: "equistretch14-2", label: "Satisifactory"},
                    {val: "equistretch14-3", label: "Needs Improvement"}
                ]
            },
            equistretch14a: {
                type: 'TextArea',
                title: null,
                editorAttrs: {
                    maxlength: 100,
                    placeholder: "Notes"
                }
            }
        },
        "fieldsets": [
            {
                "legend": "Equistretch",
                "fields": [
                    "equistretch01",
                    "equistretch01a",
                    "equistretch02",
                    "equistretch02a",
                    "equistretch03",
                    "equistretch03a",
                    "equistretch04",
                    "equistretch04a",
                    "equistretch05",
                    "equistretch05a",
                    "equistretch06",
                    "equistretch06a",
                    "equistretch07",
                    "equistretch07a",
                    "equistretch08",
                    "equistretch08a",
                    "equistretch09",
                    "equistretch09a",
                    "equistretch10",
                    "equistretch10a",
                    "equistretch11",
                    "equistretch11a",
                    "equistretch12",
                    "equistretch12a",
                    "equistretch13",
                    "equistretch13a",
                    "equistretch14",
                    "equistretch14a"
                ]
            }
        ],
        "data": {}
    },

    {
        templateId: 11,
        templateType: "PerformanceTesting",
        title: "Performance",
        totalQuestions: 10,
        totalCompletedQuestions: 0,
        formSchema: {
            performancetesting01: {
                type: "Text",
                title: "Leg Press(10 RM)",
                help: "lbs"
            },
            performancetesting02: {
                type: "Text",
                title: "Chest Press (10 RM)",
                help: "lbs"
            },
            performancetesting03: {
                type: "Text",
                title: "Push Ups Test",
                help: "Completed"
            },
            performancetesting04: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting05: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting06: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting07: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting08: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting09: {
                type: "Text",
                title: null,
                help: "BPM"
            },
            performancetesting10: {
                type: "TextArea",
                title: "Final State/ Time / Heart Rate at Stop",
                editorAttributes: {placeholder: 'Notes'}
            },
            performancetesting11: {
                type: "Text",
                title: "VO2MAX (ML/KG/MIN)",
                help: '?'
            }
        },
        fieldsets: [
            {
                "legend": "Performance Testing",
                "fields": [
                    "performancetesting01",
                    "performancetesting02",
                    "performancetesting03",
                    "performancetesting04",
                    "performancetesting05",
                    "performancetesting06",
                    "performancetesting07",
                    "performancetesting08",
                    "performancetesting09",
                    "performancetesting10",
                    "performancetesting11"
                ]
            }
        ],
        data: {}
        //
        //template: '<form class="form-horizontal">\
        //    <h2>Performance</h2>\
        //    <fieldset data-fields="performancetesting01,performancetesting02,performancetesting03"></fieldset>\
        //    <img class="img-polaroid" src="http://placehold.it/350x150.png&text=TBD" alt="Bruce Treadmill Protocol"/>\
        //    <table class="table table-striped">\
        //        <tr>\
        //            <th>Stage</th>\
        //            <th>Time</th>\
        //            <th>Speed</th>\
        //            <th>Speed</th>\
        //            <th></th>\
        //        </tr>\
        //        <tr>\
        //            <td>1</td>\
        //            <td>0-3 mins</td>\
        //            <td>1.7 mph</td>\
        //            <td>10%</td>\
        //            <td><div data-fields="performancetesting04"></div></td>\
        //        </tr>\
        //        <tr>\
        //            <td>2</td>\
        //            <td>3-6 mins</td>\
        //            <td>2.5 mph</td>\
        //            <td>12%</td>\
        //            <td><div data-fields="performancetesting05"></div></td>\
        //        </tr>\
        //        <tr>\
        //            <td>3</td>\
        //            <td>6-9 mins</td>\
        //            <td>3.4 mph</td>\
        //            <td>14%</td>\
        //            <td><div data-fields="performancetesting06"></div></td>\
        //        </tr>\
        //        <tr>\
        //            <td>4</td>\
        //            <td>9-12 mins</td>\
        //            <td>4.5 mph</td>\
        //            <td>15%</td>\
        //            <td><div data-fields="performancetesting07"></div></td>\
        //        </tr>\
        //        <tr>\
        //            <td>5</td>\
        //            <td>12-15 mins</td>\
        //            <td>5.5 mph</td>\
        //            <td>15%</td>\
        //            <td><div data-fields="performancetesting08"></div></td>\
        //        </tr>\
        //        <tr>\
        //            <td>6</td>\
        //            <td>15-18 mins</td>\
        //            <td>6.5 mph</td>\
        //            <td>15%</td>\
        //            <td><div data-fields="performancetesting09"></div></td>\
        //        </tr>\
        //    </table>\
        //    <fieldset data-fields="performancetesting10,performancetesting11"></fieldset>\
        //    </form>'
    },

    {
        "templateId": 12,
        "templateType": 2,
        title: "Physical Test",
        "idPrefix": "physical-test-",
        "totalQuestions": 5,
        "totalCompletedQuestions": 5,
        "formSchema": {
            title: {
                "type": "Select",
                options: [
                    "",
                    "Mr",
                    "Mrs",
                    "Ms"
                ]
            },
            "name": "Text",
            "email": {
                "validators": [
                    "required",
                    "email"
                ]
            },

            "address": {
                type: 'Text',
                title: "Address 1"
            },

            "city": {
                "type": "Text"
            },

            "state": {
                "type": "Select",
                options: [
                    "",
                    "AR",
                    "CT",
                    "NJ",
                    "NY"
                ]
            },

            "zip": {
                "type": "Text"
            }
        },

        "fieldsets": [
            {
                "legend": "Member Information",
                "fields": [
                    "title",
                    "name",
                    "email"
                ]
            },
            {
                "legend": "Address",
                "fields": [
                    "address",
                    "city",
                    "state",
                    "zip"
                ]
            }
        ],

        "data": {}
    }
];
